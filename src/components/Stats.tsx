import { stats } from "../data/portfolio"
import { RevealOnScroll } from "./RevealOnScroll"

export function Stats() {
  return (
    <section id="numeros" className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mobile-scroll-row flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 60}>
            <div
              className="min-w-[9.5rem] shrink-0 rounded-2xl border border-white/5 bg-zinc-900/50 p-5 text-center backdrop-blur-sm transition-all hover:border-accent/30 sm:min-w-0 sm:p-6 md:p-8"
            >
              <p className="text-3xl font-extrabold text-accent sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs text-zinc-500 sm:mt-2 sm:text-sm">
                {stat.label}
              </p>
            </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
