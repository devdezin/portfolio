#!/bin/bash
set -euo pipefail

CONF="/etc/nginx/sites-available/devdezin.com.br"
cp "$CONF" "${CONF}.bak.$(date +%Y%m%d-%H%M%S)"

python3 << 'PY'
import re
from pathlib import Path

path = Path("/etc/nginx/sites-available/devdezin.com.br")
content = path.read_text()

# Corrigir \$uri escapado errado
content = content.replace("try_files \\$uri =404", "try_files $uri =404")

# Remover bloco /assets/ quebrado
content = re.sub(
    r"\n    location /assets/ \{.*?\n    \}\n",
    "\n",
    content,
    flags=re.DOTALL,
)

# Adicionar bloco correto para arquivos estaticos (se nao existir)
static_block = """
    location ~* \\.(css|js|jpg|jpeg|png|gif|ico|svg|webp|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable" always;
        try_files $uri =404;
    }
"""

if "location ~* \\.(css|js" not in content:
    if "location = /index.html" in content:
        content = content.replace(
            "    location = /index.html {",
            static_block + "\n    location = /index.html {",
        )
    else:
        content = content.replace(
            "    location / {\n        try_files $uri $uri/ /index.html;\n    }",
            "    location / {\n        try_files $uri $uri/ /index.html;\n    }" + static_block,
        )

path.write_text(content)
print("Nginx corrigido.")
PY

nginx -t
systemctl reload nginx

CSS=$(grep -o 'assets/[^"]*\.css' /var/www/html/portfólio/dist/index.html | head -1)
echo "Testando: https://devdezin.com.br/$CSS"
curl -I "https://devdezin.com.br/$CSS" | head -5
