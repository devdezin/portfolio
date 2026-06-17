#!/bin/bash
set -euo pipefail

CONF="/etc/nginx/sites-available/devdezin.com.br"

if [ ! -f "$CONF" ]; then
  echo "Erro: $CONF nao encontrado"
  exit 1
fi

cp "$CONF" "${CONF}.bak.$(date +%Y%m%d-%H%M%S)"

python3 << 'PY'
import re
from pathlib import Path

path = Path("/etc/nginx/sites-available/devdezin.com.br")
content = path.read_text()

# Remove blocos antigos (reexecucao segura)
content = re.sub(
    r"\n    location = /index\.html \{.*?\n    \}\n",
    "\n",
    content,
    flags=re.DOTALL,
)
content = re.sub(
    r"\n    location /assets/ \{.*?\n    \}\n",
    "\n",
    content,
    flags=re.DOTALL,
)
content = re.sub(
    r"\n    location ~\* \\\.\(jpg\|jpeg\|png\|gif\|ico\|svg\|webp\|css\|js\|woff2\?\)\$ \{.*?\n    \}\n",
    "\n",
    content,
    flags=re.DOTALL,
)

new_blocks = """
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate" always;
    }

    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable" always;
        try_files $uri =404;
    }
"""

if "location = /index.html" not in content:
    match = re.search(
        r"(    location / \{\n        try_files \$uri \$uri/ /index\.html;\n    \})",
        content,
    )
    if not match:
        raise SystemExit("Erro: bloco location / nao encontrado no nginx")
    content = content.replace(match.group(1), match.group(1) + new_blocks)

path.write_text(content)
print("Config atualizado.")
PY

nginx -t
systemctl reload nginx
echo "Nginx recarregado com sucesso."
