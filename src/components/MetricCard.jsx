import Card from './Card'
import { Icon } from './Icon'

export default function MetricCard({ metric }) {
  return (
    <Card hover className="flex gap-3.5 bg-card p-4 sm:gap-4 sm:p-5">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-muted bg-accent-light text-accent sm:h-10 sm:w-10"
        aria-hidden="true"
      >
        <Icon name={metric.icon} />
      </div>
      <p className="text-base font-semibold leading-snug text-ink sm:text-lg">
        {metric.text}
      </p>
    </Card>
  )
}
