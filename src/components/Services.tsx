import { services } from "../data/portfolio"
import { RevealOnScroll } from "./RevealOnScroll"
import { SectionHeader } from "./SectionHeader"

export function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader title="O que eu desenvolvo" />
        </RevealOnScroll>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {services.map((service, index) => (
            <RevealOnScroll key={service} delay={index * 50}>
            <li
              className="flex h-full items-center gap-2 rounded-2xl border border-white/5 bg-zinc-900/50 px-3 py-3 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-zinc-900/80 sm:gap-3 sm:px-5 sm:py-4"
            >
              <span className="text-sm text-accent sm:text-base" aria-hidden="true">
                ✓
              </span>
              <span className="text-xs font-medium text-zinc-300 sm:text-sm">
                {service}
              </span>
            </li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  )
}
