import { useCallback, useEffect, useRef, useState } from "react"
import { projects } from "../data/portfolio"
import { RevealOnScroll } from "./RevealOnScroll"
import { SectionHeader } from "./SectionHeader"
import { TechPill } from "./TechPill"

type Project = (typeof projects)[number]

export function Projects() {
  const [expanded, setExpanded] = useState<Project | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  const scrollCards = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return

    const card = el.querySelector("article")
    const gap = 24
    const distance = card ? card.clientWidth + gap : 384

    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    if (!expanded) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(null)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [expanded])

  useEffect(() => {
    updateScrollButtons()

    const el = scrollRef.current
    if (!el) return

    el.addEventListener("scroll", updateScrollButtons, { passive: true })
    window.addEventListener("resize", updateScrollButtons)

    return () => {
      el.removeEventListener("scroll", updateScrollButtons)
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [updateScrollButtons])

  return (
    <section id="projetos" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader label="Projetos" title="Projetos Desenvolvidos" />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
        <div className="relative px-10 sm:px-12 md:px-14">
          <ScrollArrow
            direction="left"
            disabled={!canScrollLeft}
            onClick={() => scrollCards("left")}
          />

          <div
            ref={scrollRef}
            className="projects-scroll flex gap-6 overflow-x-auto scroll-smooth px-1 py-2 snap-x snap-mandatory"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative flex w-[min(100%,18.5rem)] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-zinc-700/60 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_0_50px_rgba(0,255,136,0.18)] sm:w-[20rem]"
              >
                <div
                  className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.07]`}
                />

                <ProjectMedia
                  project={project}
                  onExpand={() => setExpanded(project)}
                />

                <div className="relative flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="text-lg font-extrabold tracking-tight text-white transition-colors group-hover:text-accent sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <TechPill key={tech} name={tech} variant="project" />
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-zinc-950 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,136,0.35)]"
                  >
                    Ver Projeto
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <ScrollArrow
            direction="right"
            disabled={!canScrollRight}
            onClick={() => scrollCards("right")}
          />
        </div>
        </RevealOnScroll>
      </div>

      {expanded && (
        <MediaLightbox project={expanded} onClose={() => setExpanded(null)} />
      )}
    </section>
  )
}

function ScrollArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right"
  disabled: boolean
  onClick: () => void
}) {
  const isLeft = direction === "left"

  return (
    <button
      type="button"
      aria-label={isLeft ? "Ver projetos anteriores" : "Ver próximos projetos"}
      disabled={disabled}
      onClick={onClick}
      className={`absolute top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900/95 text-white shadow-lg backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-zinc-800 hover:text-accent disabled:pointer-events-none disabled:opacity-0 sm:size-11 ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      <svg
        className="size-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  )
}

function ProjectMedia({
  project,
  onExpand,
}: {
  project: Project
  onExpand: () => void
}) {
  return (
    <button
      type="button"
      aria-label={`Ampliar imagem de ${project.title}`}
      className="relative h-44 w-full cursor-zoom-in overflow-hidden bg-zinc-950 text-left sm:h-52 md:h-60"
      onClick={onExpand}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} animate-gradient`}
      />

      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="project-preview-img relative h-full w-full object-cover object-top"
      />

      <div className="project-preview-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

      <span className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent backdrop-blur-md sm:top-4 sm:right-4 sm:px-3 sm:py-1 sm:text-[10px]">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
        </span>
        Live
      </span>

      <span className="pointer-events-none absolute bottom-3 right-3 rounded-lg bg-zinc-950/80 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md ring-1 ring-white/10 sm:bottom-4 sm:right-4 sm:px-2.5 sm:py-1 sm:text-[10px]">
        Clique para ampliar
      </span>

      <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-accent px-2 py-0.5 text-[10px] font-bold text-zinc-950 shadow-[0_0_20px_rgba(0,255,136,0.4)] sm:bottom-4 sm:left-4 sm:px-3 sm:py-1 sm:text-xs">
        Em produção
      </div>
    </button>
  )
}

function MediaLightbox({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Imagem ampliada: ${project.title}`}
    >
      <button
        type="button"
        aria-label="Fechar"
        className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-zinc-900/90 p-2 text-white transition-colors hover:bg-zinc-800"
        onClick={onClose}
      >
        <CloseIcon />
      </button>

      <div
        className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-accent/20 bg-zinc-950 shadow-[0_0_60px_rgba(0,255,136,0.15)]"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[85vh] w-full object-contain"
        />

        <div className="border-t border-white/10 bg-zinc-900/80 px-6 py-4">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
