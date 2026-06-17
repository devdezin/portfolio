# Plano de melhorias — Portfólio DevDezin

> Site: https://devdezin.com.br  
> Objetivo: aumentar confiança e conversão (WhatsApp / orçamentos)  
> Status atual: **profissional e no ar** — ganhos agora vêm de **conteúdo e credibilidade**, não de redesign.

---

## Resumo em uma frase

Arrumar: **prova social (depoimento), rosto/identidade, GitHub/LinkedIn preenchidos, cases com resultado** — o visual já está bom.

---

## Prioridade alta (impacto direto em clientes)

### 1. Depoimentos / prova social

**O que fazer:** 1–3 frases curtas de clientes reais (nome, empresa ou projeto, o que você entregou).

**Exemplo:**

> *"Dezin desenvolveu nosso bolão completo com PIX e painel admin. Sistema no ar há X meses sem problemas."*  
> — Cliente, Bolão Grupo Dezenas

**Onde colocar no site:** nova seção entre **Projetos** e **Experiência**, ou 1 card na seção **Contato**.

**Como conseguir:** pedir por WhatsApp a 1–2 clientes satisfeitos. Mensagem curta:

> *"Oi! Posso usar uma frase sua no meu portfólio sobre o sistema que fizemos? Só 1–2 linhas."*

- [ ] Pedir 1º depoimento
- [ ] Pedir 2º depoimento (opcional)
- [ ] Adicionar seção no site

---

### 2. Foto ou rosto no site

**O que fazer:** foto profissional sua **ou** logo + texto “Dezin Developer” mais humano na seção **Sobre**.

**Por quê:** cliente fecha negócio com **pessoa**, não só com logo.

**Dicas:**
- Fundo neutro ou escuro (combina com o site)
- Rosto visível, boa luz
- Mesma foto no LinkedIn e GitHub

- [ ] Escolher / tirar foto
- [ ] Subir no LinkedIn
- [ ] Adicionar na seção Sobre do site (quando implementar)

---

### 3. GitHub com conteúdo

**O que fazer:** ver guia completo em `content/github-repos/COMO-SUBIR-GITHUB.md`

| Repo | Status |
|------|--------|
| `devdezin/devdezin` — README perfil | Ver `content/github-profile/README.md` |
| `devdezin/projetos-em-producao` — showcase | Pronto em `content/github-repos/projetos-em-producao/` |
| `devdezin/portfolio` — código open source | Ver `content/github-repos/portfolio/README-GITHUB.md` |
| `devdezin/vps-deploy-kit` — deploy VPS | Pronto em `content/github-repos/vps-deploy-kit/` |

- [ ] Subir repos (seguir COMO-SUBIR-GITHUB.md)
- [ ] Fixar 3 repos no perfil

---

### 4. LinkedIn completo

**O que fazer:** usar o arquivo `content/LINKEDIN.md` — textos prontos para colar.

**Checklist:**

- [ ] Título (headline)
- [ ] Seção Sobre
- [ ] Experiência — DevDezin Freelancer
- [ ] Competências em destaque (5 skills)
- [ ] Projetos (Bolão, Bingo, Elite, DevDezin…)
- [ ] Foto de perfil
- [ ] Website: `https://devdezin.com.br/`
- [ ] Link: https://www.linkedin.com/in/ricardo-ferreira-09966a417/

**Por quê:** muitos clientes B2B olham LinkedIn **antes** do site.

---

## Prioridade média (credibilidade e conversão)

### 5. Mini case study por projeto

**O que fazer:** em cada card ou ao expandir, 2–3 linhas extras:

| Campo | Conteúdo |
|-------|----------|
| **Problema** | O que o cliente precisava |
| **Solução** | O que você construiu |
| **Resultado** | Em produção 24/7, X funcionalidades, desde 2024… |

**Exemplo — Bolão Grupo Dezenas:**

> **Problema:** Plataforma de bolão online com gestão financeira e pagamentos.  
> **Solução:** Sistema completo com afiliados, financeiro, PIX e dashboard admin.  
> **Resultado:** Em produção desde 2024 — https://dezin.com.br

**Projetos para documentar:**

- [ ] Bolão Grupo Dezenas
- [ ] Bingo Dezin
- [ ] Elite da Sorte
- [ ] Aconteceu Ganho
- [ ] FrancaPlace

---

### 6. Números reais nos stats

**O que fazer:** trocar números genéricos por dados **verdadeiros**.

| Hoje no site | Melhor (se for real) |
|--------------|----------------------|
| 10+ projetos | 12 projetos |
| 5 plataformas | 5 plataformas próprias |
| 100% desenvolvimento próprio | Manter (se verdade) |
| 24/7 | 99% uptime / X meses no ar |

**Regra:** só use número que você **consegue provar**.

- [ ] Revisar cada stat
- [ ] Atualizar em `src/data/portfolio.ts`

---

### 7. Diversificar a narrativa (opcional)

**O que fazer:** no **Sobre** ou **Serviços**, deixar claro que não é só sorte/bolão:

- Sistemas SaaS
- Marketplaces
- Painéis administrativos
- Landing pages
- Integração PIX
- Deploy em VPS

**Por quê:** os 5 projetos parecem o mesmo nicho — **forte** para esse mercado, **limitado** para outros tipos de cliente.

- [ ] Ajustar texto da seção Sobre
- [ ] Revisar lista de Serviços

---

### 8. E-mail profissional no domínio

**O que fazer:** `contato@devdezin.com.br` (criar no painel Hostinger).

**Onde atualizar depois de criar:**

- [ ] Site — `socialLinks` e contato
- [ ] GitHub README
- [ ] LinkedIn
- [ ] Google Search Console (opcional)

**Por quê:** `@devdezin.com.br` passa mais seriedade que `gmail.com` em proposta comercial.

---

## Prioridade baixa (refino visual — depois do resto)

### 9. Vídeo ou GIF nos projetos

Gravação curta (5–10s) da tela de cada sistema no hover do card — mostra produto “vivo”.

- [ ] Gravar Bolão
- [ ] Gravar Bingo
- [ ] Gravar demais projetos
- [ ] Hospedar em `/public/videos/` ou GIF

---

### 10. Página ou modal “Case completo”

Um projeto em detalhe (Bolão ou Bingo) com stack, desafios técnicos, prints — nível portfólio sênior.

- [ ] Escolher projeto principal
- [ ] Escrever case (problema → solução → stack → resultado)
- [ ] Implementar modal ou subpágina

---

### 11. Blog ou posts técnicos

2–3 artigos curtos — ajuda SEO e autoridade (longo prazo).

**Ideias de título:**
- Como integrei PIX no meu sistema
- Deploy de React na VPS com Nginx
- Stack que uso em produção (React + Prisma + MySQL)

- [ ] Post 1
- [ ] Post 2
- [ ] Post 3

---

### 12. Analytics

Google Analytics 4 ou Plausible — saber de onde vem visita (Google, GitHub, WhatsApp).

- [ ] Criar propriedade GA4 ou conta Plausible
- [ ] Instalar tag no site
- [ ] Conferir dados após 1 semana

---

## O que NÃO precisa arrumar agora

- Reescrever tudo em Next.js
- Dark / light mode
- Chatbot de IA
- Mais animações
- 10 seções novas no site

---

## Plano simples — 4 semanas

| Semana | Foco | Tarefas |
|--------|------|---------|
| **1** | Presença online | LinkedIn completo + GitHub README + 1 repo público |
| **2** | Confiança | Pedir 1 depoimento + foto no LinkedIn e GitHub |
| **3** | Projetos | Mini case study nos 5 projetos no site |
| **4** | Profissionalismo | E-mail `@devdezin.com.br` + Google Analytics |

---

## Nota de avaliação (referência)

| Critério | Nota |
|----------|------|
| Fechar cliente de sistema web no BR | **8/10** |
| Impressionar designer / agência top | **6,5/10** |
| Dev sênior em empresa grande | **6/10** |
| Freelancer Full Stack (seu foco atual) | **8,5/10** |

---

## Arquivos úteis neste projeto

| Arquivo | Uso |
|---------|-----|
| `content/LINKEDIN.md` | Textos prontos para LinkedIn |
| `content/github-profile/README.md` | README do perfil GitHub |
| `content/github-profile/COMO-PUBLICAR.md` | Passo a passo GitHub |
| `src/data/portfolio.ts` | Conteúdo do site (stats, projetos, sobre) |
| `deploy/DEPLOY.md` | Deploy na VPS |

---

## Próximos passos no código (quando quiser)

Pedir ao assistente ou dev:

1. **Seção de depoimentos** — estrutura pronta, só colar textos depois  
2. **Mini cases nos cards** — campos problema / solução / resultado em `portfolio.ts`  
3. **Foto na seção Sobre** — layout com imagem + bio  
4. **Analytics** — tag GA4 no `index.html`

---

*Documento criado em junho/2026 — DevDezin*
