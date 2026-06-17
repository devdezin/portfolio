import { TechIcon } from "./TechIcon"

type TechPillProps = {
  name: string
  variant?: "stack" | "project"
}

export function TechPill({ name, variant = "stack" }: TechPillProps) {
  if (variant === "project") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent sm:px-3">
        <TechIcon name={name} className="size-3.5 sm:size-4" />
        {name}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-white/5 bg-zinc-950/60 px-2.5 py-1.5 text-xs text-zinc-200 transition-colors hover:border-accent/20 hover:text-white sm:px-3 sm:py-2 sm:text-sm">
      <TechIcon name={name} />
      {name}
    </span>
  )
}
