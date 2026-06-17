#!/bin/bash
set -euo pipefail

CONF="/etc/nginx/sites-available/devdezin.com.br"
cp "$CONF" "${CONF}.bak.$(date +%Y%m%d-%H%M%S)"

python3 << 'PY'
import re
from pathlib import Path

path = Path("/etc/nginx/sites-available/devdezin.com.br")
content = path.read_text()

content = content.replace("try_files \\$uri =404", "try_files $uri =404")
content = content.replace('"public, immutable"', '"public, max-age=86400"')
content = re.sub(r"\n    location /assets/ \{.*?\n    \}\n", "\n", content, flags=re.DOTALL)

static_block = """
    location ~* \\.(css|js|jpg|jpeg|png|gif|ico|svg|webp|woff2?)$ {
        expires 1d;
        add_header Cache-Control "public, max-age=86400" always;
        try_files $uri =404;
    }
"""

if "location ~* \\.(css|js" not in content:
    anchor = "    location = /index.html {"
    if anchor in content:
        content = content.replace(anchor, static_block + "\n" + anchor)
    else:
        content = content.replace(
            "    location / {\n        try_files $uri $uri/ /index.html;\n    }",
            "    location / {\n        try_files $uri $uri/ /index.html;\n    }" + static_block,
        )

path.write_text(content)
print("Nginx OK — sem immutable.")
PY

nginx -t
systemctl reload nginx

cd /var/www/html/portfólio
grep -q "cache-bust" src/index.css 2>/dev/null || echo "/* cache-bust */" >> src/index.css
npm run build

CSS=$(grep -o 'assets/[^"]*\.css' dist/index.html | head -1)
JS=$(grep -o 'assets/[^"]*\.js' dist/index.html | head -1)
echo "CSS: $CSS"
echo "JS:  $JS"
curl -I -H "Host: devdezin.com.br" --resolve devdezin.com.br:443:127.0.0.1 -k "https://devdezin.com.br/$CSS" | head -3
