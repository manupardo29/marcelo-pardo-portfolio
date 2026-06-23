import { metrics } from '../data/metrics'
import MetricCard from '../components/MetricCard'

export default function Metrics() {
  return (
    <section className="border-y border-border bg-white section-padding" aria-label="Métricas de trayectoria">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  )
}
