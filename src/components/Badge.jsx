export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-700">
      {children}
    </span>
  )
}
