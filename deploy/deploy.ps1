# Deploy rapido — devdezin.com.br
# Uso: .\deploy\deploy.ps1 -Server "root@IP_DA_VPS"

param(
    [Parameter(Mandatory = $true)]
    [string]$Server
)

$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent

Write-Host "==> Build..." -ForegroundColor Cyan
Set-Location $Root
npm run build

Write-Host "==> Enviando para VPS..." -ForegroundColor Cyan
scp -r "$Root\dist\*" "${Server}:/var/www/devdezin.com.br/"

Write-Host "==> Deploy concluido!" -ForegroundColor Green
Write-Host "Acesse: https://devdezin.com.br"
