# Deploy DevDezin Portfolio → VPS

Dominio: **https://devdezin.com.br**

## 1. Build local (Windows)

```powershell
cd C:\caminho\do\portfolio
npm run build
```

A pasta `dist/` contem o site pronto.

---

## 2. DNS (no registro do dominio)

Aponte para o IP da sua VPS:

| Tipo | Nome | Valor        |
|------|------|--------------|
| A    | @    | IP_DA_VPS    |
| A    | www  | IP_DA_VPS    |

Aguarde propagar (5 min a 24h).

---

## 3. Configurar VPS (primeira vez)

Conecte na VPS:

```bash
ssh root@IP_DA_VPS
```

Envie a pasta deploy e rode:

```bash
mkdir -p /tmp/devdezin-deploy
# (depois de enviar os arquivos via scp)
cd /tmp/devdezin-deploy
chmod +x setup-vps.sh
sudo ./setup-vps.sh
```

---

## 4. Enviar site para VPS

No **Windows** (PowerShell), troque `IP_DA_VPS` e usuario:

```powershell
cd C:\caminho\do\portfolio
npm run build
scp -r dist/* root@IP_DA_VPS:/var/www/devdezin.com.br/
```

Ou use WinSCP / FileZilla:
- Host: IP da VPS
- Pasta remota: `/var/www/devdezin.com.br/`

---

## 5. SSL (HTTPS) — na VPS

```bash
sudo certbot --nginx -d devdezin.com.br -d www.devdezin.com.br
```

Escolha redirecionar HTTP → HTTPS.

---

## 6. Atualizar site depois

Sempre que mudar algo:

```powershell
npm run build
scp -r dist/* root@IP_DA_VPS:/var/www/devdezin.com.br/
```

---

## Comandos uteis na VPS

```bash
sudo nginx -t                 # testar config
sudo systemctl reload nginx   # recarregar
ls -la /var/www/devdezin.com.br/
```
