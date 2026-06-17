# DevDezin Portfolio

Portfólio profissional open source — **React + TypeScript + Tailwind CSS + Vite**.

**Live:** [devdezin.com.br](https://devdezin.com.br)

---

## Preview

Site dark moderno com:

- Hero, Sobre, Stack com ícones, Projetos (carrossel + lightbox)
- Experiência, Serviços, Processo, Contato
- SEO completo (meta tags, sitemap, robots.txt, Schema.org)
- Responsivo mobile
- Ícones sociais (GitHub, LinkedIn, E-mail, WhatsApp)

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| UI | React 19, TypeScript |
| Estilo | Tailwind CSS v4 |
| Build | Vite 8 |
| Deploy | Nginx + VPS + Certbot SSL |

---

## Rodar local

```bash
git clone https://github.com/devdezin/portfolio.git
cd portfolio
npm install
npm run dev
```

Abra: http://localhost:5173

---

## Build produção

```bash
npm run build
```

Arquivos em `dist/` — sirva com Nginx apontando para essa pasta.

Deploy detalhado: repositório [vps-deploy-kit](https://github.com/devdezin/vps-deploy-kit).

---

## Estrutura

```
src/
  components/   # UI (Header, Hero, Projects, etc.)
  data/         # Conteúdo centralizado (portfolio.ts, seo.ts)
public/         # Imagens, robots.txt, sitemap.xml
deploy/         # Scripts Nginx e VPS
```

---

## Projetos em produção (autor)

| Projeto | Link |
|---------|------|
| Bolão Grupo Dezenas | [dezin.com.br](https://dezin.com.br/) |
| Bingo Dezin | [dezinbingo.com.br](https://dezinbingo.com.br/) |
| Elite da Sorte | [elitedasorte.com.br](https://elitedasorte.com.br/) |
| Aconteceu Ganho | [aconteceuganhou.bet](https://aconteceuganhou.bet/) |
| FrancaPlace | [francaplace.com.br](https://francaplace.com.br/) |

Lista completa: [projetos-em-producao](https://github.com/devdezin/projetos-em-producao)

---

## Contato

- 🌐 [devdezin.com.br](https://devdezin.com.br)
- 📧 devdezinstack@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/ricardo-ferreira-09966a417/)

---

## Licença

MIT — veja [LICENSE](./LICENSE)
