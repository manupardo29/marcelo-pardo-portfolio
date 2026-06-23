import { metrics } from '../data/metrics'
import MetricCard from '../components/MetricCard'

export default function Metrics() {
  return (
    <section className="section-padding-tight border-y border-border bg-white" aria-label="Métricas de trayectoria">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  )
}
