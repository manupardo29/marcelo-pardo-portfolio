import { Icon } from './Icon'

export default function MetricCard({ metric }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-50 text-primary-600">
        <Icon name={metric.icon} />
      </div>
      <p className="text-lg font-bold leading-tight text-primary-700 sm:text-xl">
        {metric.value}
      </p>
      <p className="mt-1 text-sm leading-snug text-slate-600">{metric.label}</p>
    </div>
  )
}
