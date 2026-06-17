import { SocialLinks } from "./SocialLinks"

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <img
          src="/logo.png"
          alt="DevDezin — Desenvolvedor Full Stack"
          width={500}
          height={500}
          className="h-20 w-auto object-contain mix-blend-screen sm:h-24 md:h-28"
        />

        <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400 sm:max-w-none">
          Desenvolvimento de Sistemas Web Modernos
        </p>
        <p className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs font-medium text-accent sm:mt-4 sm:text-sm">
          <span>React</span>
          <span className="text-zinc-600">•</span>
          <span>Next.js</span>
          <span className="text-zinc-600">•</span>
          <span>TypeScript</span>
          <span className="text-zinc-600">•</span>
          <span>Prisma</span>
          <span className="text-zinc-600">•</span>
          <span>Linux</span>
        </p>

        <SocialLinks className="mt-6 sm:mt-8" />

        <p className="mt-6 text-xs text-zinc-600 sm:mt-8">
          © {new Date().getFullYear()} — DEVDEZIN
        </p>
      </div>
    </footer>
  )
}
