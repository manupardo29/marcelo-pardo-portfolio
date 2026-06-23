export default function Timeline({ items }) {
  return (
    <div className="relative space-y-3 sm:space-y-4">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-border sm:left-1/2 sm:hidden" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-border sm:block" aria-hidden="true" />

      {items.map((item, index) => (
        <div
          key={item.id}
          className={`relative flex flex-col sm:flex-row sm:items-stretch ${
            index % 2 === 0 ? 'sm:flex-row-reverse' : ''
          }`}
        >
          <div className="hidden w-1/2 sm:block" />

          <div
            className="absolute left-0 top-4 z-10 h-3 w-3 rounded-full border-2 border-card bg-primary-600 shadow-sm sm:left-1/2 sm:top-5 sm:h-3.5 sm:w-3.5 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <div
            className={`w-full pl-6 sm:w-1/2 sm:pl-0 ${
              index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
            }`}
          >
            <div
              className={`rounded-xl border border-border bg-card p-3.5 shadow-sm transition-shadow hover:shadow-md sm:p-4 ${
                item.current ? 'border-l-2 border-l-accent/50 border-primary-200 ring-1 ring-primary-100' : ''
              }`}
            >
              {item.current && (
                <span className="mb-1.5 inline-block rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                  Actualidad
                </span>
              )}
              <h3 className="text-sm font-semibold leading-snug text-ink">{item.company}</h3>
              <p className="mt-0.5 text-sm font-medium text-primary-600">{item.role}</p>
              <p className="mt-0.5 text-xs text-muted sm:text-sm">{item.period}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
