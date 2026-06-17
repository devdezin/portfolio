export const SEO = {
  siteUrl: "https://devdezin.com.br",
  siteName: "DevDezin",
  title: "DevDezin | Desenvolvedor Full Stack — Sistemas Web Modernos",
  description:
    "Portfólio de Dezin Developer. Desenvolvedor Full Stack especializado em React, Next.js, TypeScript, Prisma, MySQL, PIX e deploy em VPS. Bolão, bingo, rifas, SaaS e dashboards.",
  keywords: [
    "desenvolvedor full stack",
    "desenvolvedor web",
    "React",
    "Next.js",
    "TypeScript",
    "sistemas web",
    "landing page",
    "SaaS",
    "integração PIX",
    "dashboard administrativo",
    "DevDezin",
    "Dezin Developer",
    "freelancer",
    "VPS",
    "Prisma",
    "MySQL",
  ],
  author: "Dezin Developer",
  locale: "pt_BR",
  ogImage: "https://devdezin.com.br/logo.png",
  twitterHandle: "",
} as const

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://devdezin.com.br/#website",
      url: "https://devdezin.com.br/",
      name: "DevDezin",
      description:
        "Portfólio de desenvolvimento Full Stack — sistemas web modernos em produção.",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://devdezin.com.br/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://devdezin.com.br/#person",
      name: "Dezin Developer",
      alternateName: "DevDezin",
      url: "https://devdezin.com.br/",
      jobTitle: "Desenvolvedor Full Stack",
      description:
        "Desenvolvedor Full Stack especializado em sistemas web completos, do frontend ao deploy em VPS.",
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Prisma",
        "MySQL",
        "Integração PIX",
        "Linux VPS",
        "Docker",
        "Nginx",
      ],
      email: "devdezinstack@gmail.com",
      sameAs: [
        "https://github.com/devdezin",
        "https://www.linkedin.com/in/ricardo-ferreira-09966a417/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://devdezin.com.br/#service",
      name: "DevDezin — Desenvolvimento de Sistemas Web",
      url: "https://devdezin.com.br/",
      image: "https://devdezin.com.br/logo.png",
      description:
        "Desenvolvimento de sistemas SaaS, dashboards, landing pages, integrações PIX e deploy em VPS.",
      areaServed: "BR",
      serviceType: [
        "Desenvolvimento Web",
        "Sistemas SaaS",
        "Integração PIX",
        "Deploy VPS",
      ],
      provider: { "@id": "https://devdezin.com.br/#person" },
    },
  ],
}
