import { stackIconMap } from "../data/stackIcons"

export function TechIcon({
  name,
  className = "size-5",
}: {
  name: string
  className?: string
}) {
  const config = stackIconMap[name]

  if (config?.slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${config.slug}/${config.color ?? "FFFFFF"}`}
        alt=""
        width={20}
        height={20}
        loading="lazy"
        className={`${className} shrink-0 object-contain`}
      />
    )
  }

  return (
    <span
      className={`inline-flex ${className} shrink-0 items-center justify-center rounded-md bg-zinc-800 text-[9px] font-bold text-zinc-300`}
    >
      {config?.label ?? name.slice(0, 3).toUpperCase()}
    </span>
  )
}
