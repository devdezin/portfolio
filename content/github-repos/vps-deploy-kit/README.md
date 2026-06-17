# VPS Deploy Kit — DevDezin

Scripts e configs para deploy de sites **React/Vite** (SPA) em **VPS Linux** com **Nginx + SSL**.

Usado em produção em: [devdezin.com.br](https://devdezin.com.br)

---

## O que inclui

| Arquivo | Função |
|---------|--------|
| `nginx-spa.conf` | Template Nginx para SPA (try_files + assets) |
| `fix-nginx-cache.sh` | Cache correto: index.html sem cache, assets com cache |
| `setup-vps.sh` | Instala Nginx + Certbot (primeira vez) |

---

## Requisitos

- VPS Ubuntu/Debian
- Domínio apontando para o IP da VPS
- Build do site em `dist/` (Vite, React, etc.)

---

## Deploy rápido

### 1. Build local ou na VPS

```bash
npm install
npm run build
```

### 2. Enviar dist/ para VPS

```bash
scp -r dist/* root@SEU_IP:/var/www/seu-dominio/dist/
```

### 3. Nginx — root deve apontar para `dist/`

```nginx
root /var/www/html/seu-projeto/dist;
index index.html;

location / {
    try_files $uri $uri/ /index.html;
}

location = /index.html {
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;
}

location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|webp|woff2?)$ {
    expires 1d;
    add_header Cache-Control "public, max-age=86400" always;
    try_files $uri =404;
}
```

### 4. SSL com Certbot

```bash
sudo certbot --nginx -d seudominio.com.br -d www.seudominio.com.br
```

### 5. Corrigir cache (evita CSS quebrado após deploy)

```bash
sudo bash fix-nginx-cache.sh
```

---

## Estrutura recomendada na VPS

```
/var/www/html/seu-projeto/
  dist/          ← Nginx root aponta AQUI
    index.html
    assets/
  src/           ← código fonte (opcional)
  package.json
```

**Importante:** Nginx `root` = pasta `dist/`, não a raiz do projeto.

---

## Comandos úteis

```bash
sudo nginx -t                 # testar config
sudo systemctl reload nginx   # recarregar
cd /var/www/html/seu-projeto && npm run build   # rebuild
```

---

## Autor

**DevDezin** — [devdezin.com.br](https://devdezin.com.br)

---

## Licença

MIT
