import { process } from "../data/portfolio"
import { RevealOnScroll } from "./RevealOnScroll"
import { SectionHeader } from "./SectionHeader"

const stepNumbers = ["1", "2", "3", "4", "5"]

export function Process() {
  return (
    <section id="processo" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader label={process.label} title={process.title} />
        </RevealOnScroll>

        <div className="mobile-scroll-row flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5 lg:gap-6">
          {process.steps.map((item, index) => (
            <RevealOnScroll key={item.step} delay={index * 70}>
            <div
              className="min-w-[8.5rem] shrink-0 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 text-center backdrop-blur-sm transition-all hover:border-accent/30 sm:min-w-0 sm:p-6"
            >
              <p
                className="mx-auto mb-2 flex size-9 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent sm:mb-3 sm:size-10 sm:text-base"
                aria-hidden="true"
              >
                {stepNumbers[index]}
              </p>
              <p className="text-sm font-medium text-zinc-300 sm:text-base">
                {item.label}
              </p>
            </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
