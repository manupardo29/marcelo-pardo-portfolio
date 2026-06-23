export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted">
      {children}
    </span>
  )
}
