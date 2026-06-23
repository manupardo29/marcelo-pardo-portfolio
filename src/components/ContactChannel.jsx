export default function ContactChannel({ href, icon, label, value, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-muted transition-colors hover:border-primary-200 hover:bg-primary-50 active:bg-primary-50"
    >
      <span className="text-primary-600">{icon}</span>
      <span className="text-xs font-medium uppercase tracking-wide text-muted">{label}</span>
      <span className="text-center text-sm font-medium leading-snug">{value}</span>
    </a>
  )
}
