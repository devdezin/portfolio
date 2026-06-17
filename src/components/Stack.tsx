import { stack } from "../data/portfolio"
import { RevealOnScroll } from "./RevealOnScroll"
import { SectionHeader } from "./SectionHeader"
import { TechPill } from "./TechPill"

export function Stack() {
  return (
    <section id="stack" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeader
            label={stack.label}
            title={stack.title}
            subtitle={stack.subtitle}
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {stack.categories.map((category, index) => (
            <RevealOnScroll key={category.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 backdrop-blur-sm transition-all hover:border-accent/30 sm:p-6">
                <h3 className="mb-4 text-base font-bold text-accent sm:text-xl">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <TechPill name={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
