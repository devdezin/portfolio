import { experience } from "../data/portfolio"
import { RevealOnScroll } from "./RevealOnScroll"
import { SectionHeader } from "./SectionHeader"

export function Experience() {
  return (
    <section id="experiencia" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader title={experience.title} />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute top-0 left-4 h-full w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:left-6 md:left-8" />

            {experience.items.map((item) => (
            <article key={item.role} className="relative pl-12 sm:pl-16 md:pl-20">
              <div className="absolute top-1 left-2.5 size-3.5 rounded-full border-2 border-accent bg-zinc-950 sm:left-4 sm:size-4 md:left-6" />

              <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-5 backdrop-blur-sm sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-bold sm:text-xl">{item.role}</h3>
                  <span className="inline-flex w-fit rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:text-sm">
                    {item.period}
                  </span>
                </div>

                <p className="mt-3 text-sm text-zinc-500 sm:mt-4">
                  Desenvolvimento de plataformas web completas:
                </p>

                <ul className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-zinc-400 sm:text-sm"
                    >
                      <CheckIcon />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg
      className="size-4 shrink-0 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
