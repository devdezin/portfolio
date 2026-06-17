import { about } from "../data/portfolio"
import { Badge } from "./SectionHeader"
import { RevealOnScroll } from "./RevealOnScroll"
import { TechPill } from "./TechPill"

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>{about.badge}</Badge>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {about.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
              {about.description}
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {about.skills.map((skill, index) => (
            <RevealOnScroll key={skill.title} delay={index * 70}>
              <div className="group h-full rounded-2xl border border-white/5 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/30 sm:p-6">
                <h3 className="text-sm font-bold text-accent sm:text-lg">
                  {skill.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
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
