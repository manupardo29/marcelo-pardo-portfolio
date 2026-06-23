import { Icon } from './Icon'

export default function MetricCard({ metric }) {
  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
      <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600 sm:mb-3 sm:h-10 sm:w-10">
        <Icon name={metric.icon} />
      </div>
      <p className="text-base font-bold leading-tight text-primary-700 sm:text-lg">
        {metric.value}
      </p>
      <p className="mt-1 text-xs leading-snug text-slate-600 sm:text-sm">{metric.label}</p>
    </div>
  )
}
