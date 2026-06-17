#!/bin/bash
set -euo pipefail

DOMAIN="devdezin.com.br"
WEB_ROOT="/var/www/${DOMAIN}"
NGINX_SITE="/etc/nginx/sites-available/${DOMAIN}"

echo "==> Instalando Nginx e Certbot..."
apt update
apt install -y nginx certbot python3-certbot-nginx

echo "==> Criando pasta do site..."
mkdir -p "${WEB_ROOT}"
chown -R www-data:www-data "${WEB_ROOT}"

echo "==> Configurando Nginx..."
cp nginx-devdezin.conf "${NGINX_SITE}"
ln -sf "${NGINX_SITE}" "/etc/nginx/sites-enabled/${DOMAIN}"

if [ -f /etc/nginx/sites-enabled/default ]; then
  rm -f /etc/nginx/sites-enabled/default
fi

nginx -t
systemctl reload nginx

echo ""
echo "Site pronto em ${WEB_ROOT}"
echo ""
echo "Proximos passos:"
echo "1. Envie os arquivos da pasta dist/ para ${WEB_ROOT}"
echo "2. Rode: certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
echo "3. Teste: https://${DOMAIN}"
