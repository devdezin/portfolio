# Como subir os repositórios no GitHub

Você vai criar **3 repos públicos** + manter o **README do perfil**.

Tudo já está pronto na pasta `content/github-repos/`.

---

## Repositórios a criar

| Repo | O que é | Pasta local |
|------|---------|-------------|
| `devdezin/devdezin` | README do perfil | `content/github-profile/README.md` |
| `devdezin/projetos-em-producao` | Showcase dos 6 projetos live | `content/github-repos/projetos-em-producao/` |
| `devdezin/portfolio` | Código fonte do portfólio | Raiz do projeto `portfolio/` |
| `devdezin/vps-deploy-kit` | Scripts deploy Nginx | `content/github-repos/vps-deploy-kit/` |

---

## Repo 1 — Perfil (`devdezin/devdezin`)

Se já criou, só **atualizar** o README:

1. https://github.com/devdezin/devdezin → **README.md** → Edit
2. Cole conteúdo de `content/github-profile/README.md`
3. Commit

---

## Repo 2 — Projetos em produção (5 min)

### No GitHub

1. https://github.com/new
2. Nome: **`projetos-em-producao`**
3. Public · **Add README** Off
4. Create

### No PC (PowerShell)

```powershell
cd C:\caminho\do\portfolio\content\github-repos\projetos-em-producao
git init
git add .
git commit -m "docs: showcase de projetos em producao DevDezin"
git branch -M main
git remote add origin https://github.com/devdezin/projetos-em-producao.git
git push -u origin main
```

---

## Repo 3 — Portfolio (código open source)

### No GitHub

1. https://github.com/new
2. Nome: **`portfolio`**
3. Public · Add README **Off**
4. Create

### No PC

```powershell
cd C:\caminho\do\portfolio
```

Copie o README do GitHub por cima do README local (backup antes):

```powershell
copy README.md README-backup.md
copy content\github-repos\portfolio\README-GITHUB.md README.md
```

Depois:

```powershell
git init
git add .
git commit -m "feat: portfolio DevDezin open source"
git branch -M main
git remote add origin https://github.com/devdezin/portfolio.git
git push -u origin main
```

**Não suba:** `node_modules/`, `.env`, senhas — já estão no `.gitignore`.

---

## Repo 4 — VPS Deploy Kit

### No GitHub

1. Nome: **`vps-deploy-kit`**
2. Public · Create

### No PC

```powershell
cd C:\caminho\do\portfolio\content\github-repos\vps-deploy-kit
git init
git add .
git commit -m "docs: nginx e scripts deploy VPS para SPA"
git branch -M main
git remote add origin https://github.com/devdezin/vps-deploy-kit.git
git push -u origin main
```

---

## Fixar repos no perfil (PIN)

1. https://github.com/devdezin
2. **Customize your pins**
3. Fixe nesta ordem:
   - `projetos-em-producao`
   - `portfolio`
   - `vps-deploy-kit`

---

## Atualizar perfil GitHub

https://github.com/settings/profile

| Campo | Valor |
|-------|--------|
| Name | DevDezin |
| Bio | Desenvolvedor Full Stack \| React, Next.js, TypeScript \| Sistemas web, PIX e VPS |
| Website | https://devdezin.com.br |
| LinkedIn | https://www.linkedin.com/in/ricardo-ferreira-09966a417/ |

---

## Resultado final

Quem clicar no GitHub do portfólio vê:

- Perfil com README profissional
- 3 repos fixados
- Links para todos os projetos live
- Código do portfólio aberto
- Scripts de deploy

---

## Problema com git?

Instale Git: https://git-scm.com/download/win

Login GitHub (primeira vez):

```powershell
git config --global user.name "DevDezin"
git config --global user.email "devdezinstack@gmail.com"
```

Se pedir senha no push, use **Personal Access Token** do GitHub (Settings → Developer settings → Tokens).
