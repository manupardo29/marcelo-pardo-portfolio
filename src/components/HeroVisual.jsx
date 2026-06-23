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
  const areas = specializations.slice(0, 5)

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-white">
      {/* Fondo tipo plano técnico */}
      <div className="absolute inset-0 grid-pattern opacity-80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white to-primary-50/30"
        aria-hidden="true"
      />
      <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-amber-500/50" aria-hidden="true" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-amber-500/50" aria-hidden="true" />

      <div className="relative flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
        <div className="mb-5 flex items-start justify-between gap-3 border-b border-border pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Perfil técnico
            </p>
            <p className="mt-1 text-sm font-semibold text-primary-700 sm:text-base">
              {hero.roles}
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-200 bg-primary-50 text-primary-600">
            <Icon name="hardhat" />
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Áreas de especialización
          </p>
          <ul className="space-y-2" role="list">
            {areas.map((area) => (
              <li key={area.id} className="flex items-center gap-2.5 text-sm text-slate-700">
                <span className="h-px w-3 shrink-0 bg-amber-500/70" aria-hidden="true" />
                <span className="leading-snug">{area.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto space-y-2.5 border-t border-border pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Trayectoria
          </p>
          {highlights.map((metric) => (
            <div
              key={metric.id}
              className="flex items-start gap-2.5 rounded-lg border border-border/80 bg-surface/80 px-3 py-2.5"
            >
              <span className="mt-0.5 text-amber-600" aria-hidden="true">
                <Icon name={metric.icon} />
              </span>
              <p className="text-xs font-medium leading-snug text-slate-800 sm:text-sm">
                {metric.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
