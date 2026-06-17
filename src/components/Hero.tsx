import { WHATSAPP_URL } from "../data/portfolio"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-20 right-0 size-[400px] rounded-full bg-accent-secondary/10 blur-[100px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 hero-enter">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Disponível para novos projetos
        </div>

        <h1 className="mx-auto max-w-4xl text-[1.75rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
          Desenvolvedor Full Stack para{" "}
          <span className="bg-gradient-to-r from-accent via-emerald-300 to-accent-secondary bg-clip-text text-transparent animate-gradient">
            sistemas web completos
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg md:text-xl">
          TypeScript, React, Next.js, Prisma, MySQL e Linux VPS. Frontend,
          backend, integração PIX, dashboards administrativos e deploy em
          produção.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="#projetos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-bold text-zinc-950 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] sm:w-auto sm:px-7"
          >
            Ver Projetos
            <ArrowDownIcon />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-zinc-500 hover:bg-zinc-800/50 sm:w-auto sm:px-7"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  )
}

function ArrowDownIcon() {
  return (
    <svg
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
