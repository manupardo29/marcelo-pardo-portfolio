import { hero } from '../data/contact'
import { specializations } from '../data/specializations'
import { metrics } from '../data/metrics'
import { Icon } from './Icon'

/**
 * Tarjeta visual del hero cuando no hay foto de perfil.
 * Reemplazar: asignar ruta en src/data/contact.js → hero.profileImage
 * Ejemplo: hero.profileImage = '/profile/marcelo-pardo.jpg'
 */
export default function HeroVisual() {
  const highlights = metrics.slice(0, 3)
  const stats = [
    { label: 'Experiencia', value: '+35 años' },
    { label: 'Rol principal', value: 'Jefe de Obra' },
    { label: 'Obras destacadas', value: '11 proyectos' },
  ]

  return (
    <div className="relative flex h-full min-h-[280px] flex-col overflow-hidden bg-card">
      <div className="absolute inset-0 grid-pattern opacity-90" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-surface/80 via-card to-primary-50/40"
        aria-hidden="true"
      />
      <div className="absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 border-accent/40" aria-hidden="true" />
      <div className="absolute bottom-4 right-4 h-10 w-10 border-b-2 border-r-2 border-accent/40" aria-hidden="true" />
      <div
        className="absolute right-8 top-1/2 hidden h-px w-16 -translate-y-1/2 bg-border sm:block"
        aria-hidden="true"
      >
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-accent/50 bg-card" />
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <div className="mb-4 flex items-start justify-between gap-3 border-b border-border pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/80">
              Perfil técnico
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-primary-600 sm:text-base">
              {hero.roles}
            </p>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-primary-600">
            <Icon name="hardhat" />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-surface/90 px-2 py-2.5 text-center sm:px-3"
            >
              <p className="text-[9px] font-semibold uppercase tracking-wide text-muted/80 sm:text-[10px]">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-ink sm:text-sm">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex-1">
          <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/80">
            Áreas de especialización
          </p>
          <ul className="grid gap-1.5 sm:grid-cols-2 sm:gap-2" role="list">
            {specializations.map((area) => (
              <li key={area.id} className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                <span className="h-px w-2.5 shrink-0 bg-accent/70" aria-hidden="true" />
                <span className="leading-snug">{area.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 border-t border-border pt-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/80">
            Trayectoria
          </p>
          {highlights.map((metric) => (
            <div
              key={metric.id}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-surface/90 px-3 py-2"
            >
              <span className="mt-0.5 text-accent/80" aria-hidden="true">
                <Icon name={metric.icon} />
              </span>
              <p className="text-xs font-medium leading-snug text-ink sm:text-sm">
                {metric.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
