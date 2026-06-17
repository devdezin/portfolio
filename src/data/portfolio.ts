const WHATSAPP_MESSAGE = `*Olá, Dezin!*

Vi seu portfólio no DevDezin e tenho interesse em um projeto.

*Nome:*
*Empresa:*
*Tipo de projeto:*
( ) Sistema Web
( ) Landing Page
( ) Marketplace
( ) Painel Administrativo
( ) Integração PIX
( ) Outro

*Descreva o que você precisa:*

*Prazo desejado:*

Aguardo seu retorno.`

export const WHATSAPP_URL = `https://wa.me/5516994011180?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
export const SITE_URL = "https://devdezin.com.br/"

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/devdezin",
    label: "GitHub — devdezin",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardo-ferreira-09966a417/",
    label: "LinkedIn — DevDezin",
  },
  {
    name: "E-mail",
    href: "mailto:devdezinstack@gmail.com",
    label: "E-mail — devdezinstack@gmail.com",
  },
  {
    name: "WhatsApp",
    href: WHATSAPP_URL,
    label: "WhatsApp — (16) 99401-1180",
  },
] as const

export const stats = [
  { value: "10+", label: "Projetos Desenvolvidos" },
  { value: "5", label: "Plataformas Próprias" },
  { value: "100%", label: "Desenvolvimento Próprio" },
  { value: "24/7", label: "Sistemas em Produção" },
] as const

export const stack = {
  label: "Tecnologias",
  title: "Minha Stack de Desenvolvimento",
  subtitle: "Tecnologias utilizadas diariamente em projetos reais.",
  categories: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Prisma ORM",
        "REST API",
        "JWT Auth",
        "Integrações PIX",
      ],
    },
    {
      title: "Banco de Dados",
      items: ["MySQL", "Prisma", "Migrations", "Modelagem"],
    },
    {
      title: "Infraestrutura",
      items: ["Linux", "Docker", "Nginx", "PM2", "VPS Cloud"],
    },
  ],
} as const

export const about = {
  badge: "Sobre Mim",
  title: "Desenvolvedor Full Stack especializado em sistemas web completos",
  description:
    "Desenvolvo aplicações web do zero até a produção. Trabalho com frontend, backend, banco de dados, integrações PIX, dashboards administrativos, servidores Linux e deploy em VPS.",
  skills: stack.categories.map((category) => ({
    title: category.title,
    items: category.items,
  })),
} as const

export const projects = [
  {
    title: "Bolão Grupo Dezenas",
    description:
      "Sistema completo de bolão online com concursos, afiliados, financeiro, PIX e dashboard administrativo.",
    stack: ["Next.js", "Prisma", "MySQL", "PIX"],
    image: "/images/bolao.jpg",
    href: "https://dezin.com.br/",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    title: "Bingo Dezin",
    description:
      "Plataforma de bingo online com salas automáticas, cartelas, sorteios e sistema financeiro.",
    stack: ["React", "TypeScript", "Prisma"],
    image: "/images/bingo.jpg",
    href: "https://dezinbingo.com.br/",
    gradient: "from-cyan-400 via-blue-400 to-indigo-400",
  },
  {
    title: "Elite da Sorte",
    description:
      "Sistema profissional de rifas digitais com PIX, sorteios e painel administrativo.",
    stack: ["Next.js", "Node.js", "MySQL"],
    image: "/images/elitedasorte.jpg",
    href: "https://elitedasorte.com.br/",
    gradient: "from-green-400 via-emerald-400 to-teal-400",
  },
  {
    title: "Aconteceu Ganho",
    description:
      "Plataforma de sorteios e promoções online com participação digital, gestão de prêmios e painel administrativo.",
    stack: ["Next.js", "TypeScript", "Prisma", "MySQL", "API PIX"],
    image: "/images/aconteceu.jpg",
    href: "https://aconteceuganhou.bet/",
    gradient: "from-amber-400 via-orange-400 to-red-400",
  },
  {
    title: "FrancaPlace",
    description:
      "Plataforma digital para comércio e serviços locais com cadastro, gestão de anúncios e painel administrativo.",
    stack: ["Next.js", "TypeScript", "Prisma", "React", "Node.js", "MySQL"],
    image: "/images/francaplace.jpg",
    href: "https://francaplace.com.br/",
    gradient: "from-violet-400 via-purple-400 to-fuchsia-400",
  },
] as const

export const process = {
  label: "Processo",
  title: "Como Trabalho",
  steps: [
    { step: "1", label: "Planejamento" },
    { step: "2", label: "Desenvolvimento" },
    { step: "3", label: "Testes" },
    { step: "4", label: "Deploy" },
    { step: "5", label: "Suporte" },
  ],
} as const

export const experience = {
  title: "Experiência",
  items: [
    {
      role: "Desenvolvedor Full Stack Freelancer",
      period: "2024 - Atual",
      highlights: [
        "Bolão Online",
        "Bingo Online",
        "Sistema de Rifas",
        "Dashboards Administrativos",
        "Integração PIX",
        "Sistemas Financeiros",
        "Deploy Linux",
        "VPS Cloud",
      ],
    },
  ],
} as const

export const services = [
  "Sistemas SaaS",
  "Dashboards Administrativos",
  "Sistemas Financeiros",
  "Integrações PIX",
  "Landing Pages",
  "Painéis de Controle",
  "Sistemas Personalizados",
  "Deploy em VPS",
] as const

export const contactCta = {
  title: "Vamos transformar sua ideia em um sistema real?",
  items: [
    "Sistemas SaaS",
    "Painéis Administrativos",
    "Integração PIX",
    "Landing Pages",
    "Sistemas Personalizados",
  ],
  button: "Solicitar Orçamento",
} as const
