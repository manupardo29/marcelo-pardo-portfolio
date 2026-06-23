import { profile } from '../data/profile'
import SectionTitle from '../components/SectionTitle'
import { Icon } from '../components/Icon'

export default function Profile() {
  return (
    <section id="perfil" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Perfil"
          title="Perfil profesional"
          description="Trayectoria consolidada en dirección y ejecución de obras de infraestructura civil."
        />

        <div className="mx-auto max-w-4xl">
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
            {profile.text}
          </p>

          <div className="mt-10 rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-slate-900">Fortalezas clave</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {profile.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary-600">
                    <Icon name="check" />
                  </span>
                  <span className="text-sm text-slate-700 sm:text-base">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
