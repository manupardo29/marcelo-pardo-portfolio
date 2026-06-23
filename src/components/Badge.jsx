export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-border border-t-accent/40 bg-card px-4 py-2 text-sm font-medium text-muted">
      {children}
    </span>
  )
}
