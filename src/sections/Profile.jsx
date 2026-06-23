import { profile } from '../data/profile'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { Icon } from '../components/Icon'

export default function Profile() {
  return (
    <section id="perfil" className="section-padding bg-surface" aria-labelledby="perfil-heading">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="perfil-heading"
          label="Perfil"
          title="Perfil profesional"
          description="Dirección y ejecución de obras de infraestructura civil en el ámbito público y privado."
        />

        <div className="mx-auto max-w-4xl">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {profile.text}
          </p>

          <Card hover={false} className="mt-10 border-l-2 border-l-accent/50 p-6 sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-ink">Competencias en obra</h3>
            <ul className="grid gap-3 sm:grid-cols-2" role="list">
              {profile.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    <Icon name="check" />
                  </span>
                  <span className="text-sm text-muted sm:text-base">{strength}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
