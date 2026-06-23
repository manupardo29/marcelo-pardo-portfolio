import { experience, earlierExperience, experienceNote } from '../data/experience'
import { contact } from '../data/contact'
import SectionTitle from '../components/SectionTitle'
import Timeline from '../components/Timeline'

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding bg-card" aria-labelledby="experiencia-heading">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          id="experiencia-heading"
          label="Trayectoria"
          title="Experiencia profesional"
          description="Resumen de la trayectoria en empresas constructoras y organismos públicos, con foco en jefatura y dirección de obra."
        />

        <Timeline items={experience} />

        {earlierExperience.length > 0 && (
          <div className="mt-10 rounded-lg border border-border bg-surface p-5 sm:p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
              Otras experiencias
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {earlierExperience.map((item) => (
                <li key={`${item.company}-${item.period}`} className="text-sm">
                  <span className="font-medium text-ink">{item.company}</span>
                  <span className="text-muted"> — {item.role}</span>
                  <span className="block text-xs text-muted/70">{item.period}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-muted">
          {experienceNote}{' '}
          <a
            href={contact.cvPath}
            className="font-medium text-primary-600 underline decoration-primary-300 underline-offset-2 hover:text-primary-700"
          >
            Descargar CV
          </a>
        </p>
      </div>
    </section>
  )
}
