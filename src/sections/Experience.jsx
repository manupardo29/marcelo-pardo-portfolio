import { experience, experienceNote } from '../data/experience'
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
          description="Recorrido profesional en empresas constructoras y organismos públicos, con foco en jefatura y dirección."
        />

        <Timeline items={experience} />

        <p className="mt-8 text-center text-sm text-muted sm:mt-10">
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
