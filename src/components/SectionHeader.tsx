import type { ReactNode } from "react"

export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10 text-center md:mb-16">
      {label && (
        <span className="text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
          {label}
        </span>
      )}
      <h2
        className={`text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl ${label ? "mt-3 sm:mt-4" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl px-2 text-sm text-zinc-500 sm:mt-4 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:mb-4 sm:px-4 sm:text-sm">
      {children}
    </span>
  )
}
