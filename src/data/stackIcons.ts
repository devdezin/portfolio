export type StackIconConfig = {
  slug?: string
  color?: string
  label?: string
}

export const stackIconMap: Record<string, StackIconConfig> = {
  React: { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "FFFFFF" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  Vite: { slug: "vite", color: "646CFF" },
  "Node.js": { slug: "nodedotjs", color: "339933" },
  "Prisma ORM": { slug: "prisma", color: "FFFFFF" },
  Prisma: { slug: "prisma", color: "FFFFFF" },
  MySQL: { slug: "mysql", color: "4479A1" },
  Linux: { slug: "linux", color: "FCC624" },
  Docker: { slug: "docker", color: "2496ED" },
  Nginx: { slug: "nginx", color: "009639" },
  PIX: { label: "PIX" },
  "API PIX": { label: "PIX" },
  "REST API": { label: "API" },
  "JWT Auth": { label: "JWT" },
  "Integrações PIX": { label: "PIX" },
  Migrations: { label: "DB" },
  Modelagem: { label: "SQL" },
  PM2: { label: "PM2" },
  "VPS Cloud": { label: "VPS" },
}
