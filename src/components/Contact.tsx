import { contactCta, WHATSAPP_URL } from "../data/portfolio"
import { RevealOnScroll } from "./RevealOnScroll"
import { SocialLinks } from "./SocialLinks"

export function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/20 to-emerald-900/20 px-5 py-10 text-center sm:rounded-3xl sm:px-8 sm:py-16 md:px-16 md:py-20">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">
            {contactCta.title}
          </h2>

          <ul className="mx-auto mt-6 mb-8 grid grid-cols-2 gap-2 text-left text-sm text-zinc-300 sm:mt-8 sm:mb-10 sm:text-center md:grid-cols-3 lg:grid-cols-5">
            {contactCta.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-zinc-950/30 px-3 py-2 sm:justify-center sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
              >
                <span className="text-accent" aria-hidden="true">
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,136,0.35)] sm:w-auto sm:px-10 sm:py-4 sm:text-base"
          >
            <WhatsAppIcon />
            {contactCta.button}
          </a>

          <SocialLinks className="mt-8" />
        </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.298-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
