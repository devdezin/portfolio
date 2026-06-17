#!/bin/bash
# Corrige cache Nginx para SPA Vite/React
# Uso: sudo SITE_CONF=/etc/nginx/sites-available/meu-site.conf bash fix-nginx-cache.sh

set -euo pipefail

CONF="${SITE_CONF:-/etc/nginx/sites-available/devdezin.com.br}"

if [ ! -f "$CONF" ]; then
  echo "Erro: $CONF nao encontrado"
  echo "Use: SITE_CONF=/caminho/do/site bash fix-nginx-cache.sh"
  exit 1
fi

cp "$CONF" "${CONF}.bak.$(date +%Y%m%d-%H%M%S)"

python3 << PY
import re
from pathlib import Path

path = Path("$CONF")
content = path.read_text()

content = re.sub(r"\n    location = /index\.html \{.*?\n    \}\n", "\n", content, flags=re.DOTALL)
content = re.sub(r"\n    location /assets/ \{.*?\n    \}\n", "\n", content, flags=re.DOTALL)
content = content.replace("try_files \\\\$uri =404", "try_files \$uri =404")
content = content.replace('"public, immutable"', '"public, max-age=86400"')

static_block = """
    location ~* \\.(css|js|jpg|jpeg|png|gif|ico|svg|webp|woff2?)\$ {
        expires 1d;
        add_header Cache-Control "public, max-age=86400" always;
        try_files \$uri =404;
    }
"""

if "location ~* \\.(css|js" not in content:
    anchor = "    location = /index.html {"
    if anchor in content:
        pass
    elif "    location / {" in content:
        content = re.sub(
            r"(    location / \{\n        try_files \\\$uri \\\$uri/ /index\.html;\n    \})",
            r"\1\n    location = /index.html {\n        add_header Cache-Control \"no-cache, no-store, must-revalidate\" always;\n    }" + static_block,
            content,
        )

if "location = /index.html" not in content:
    match = re.search(
        r"(    location / \{\n        try_files \$uri \$uri/ /index\.html;\n    \})",
        content,
    )
    if match:
        new = match.group(1) + """
    location = /index.html {
        add_header Cache-Control \"no-cache, no-store, must-revalidate\" always;
    }
""" + static_block
        content = content.replace(match.group(1), new)

path.write_text(content)
print("OK:", path)
PY

nginx -t && systemctl reload nginx
echo "Nginx recarregado."
