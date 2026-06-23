export default function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-border sm:left-1/2 sm:block" aria-hidden="true" />

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col sm:flex-row sm:items-center ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <div className="hidden w-1/2 sm:block" />

            <div
              className="absolute left-4 top-5 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-primary-600 shadow-sm sm:left-1/2 sm:block"
              aria-hidden="true"
            />

            <div
              className={`w-full pl-10 sm:w-1/2 sm:pl-0 ${
                index % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'
              }`}
            >
              <div
                className={`rounded-lg border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${
                  item.current ? 'border-primary-200 ring-1 ring-primary-100' : ''
                }`}
              >
                {item.current && (
                  <span className="mb-2 inline-block rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                    Actualidad
                  </span>
                )}
                <h3 className="font-semibold text-slate-900">{item.company}</h3>
                <p className="mt-0.5 text-sm font-medium text-primary-600">{item.role}</p>
                <p className="mt-1 text-sm text-slate-500">{item.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
