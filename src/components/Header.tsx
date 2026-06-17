import { useEffect, useState } from "react"
import { SocialLinks } from "./SocialLinks"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 md:h-28">
        <a href="#" className="flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="DevDezin — Desenvolvedor Full Stack"
            width={500}
            height={500}
            fetchPriority="high"
            decoding="sync"
            className="h-11 w-auto max-w-none object-contain mix-blend-screen sm:h-14 md:h-[92px]"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <SocialLinks compact className="hidden sm:flex" />

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/5 bg-zinc-950/98 px-4 py-4 lg:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-xl border border-white/5 bg-zinc-900/80 px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-accent/30 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <SocialLinks compact className="mt-4 sm:hidden" />
        </nav>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
