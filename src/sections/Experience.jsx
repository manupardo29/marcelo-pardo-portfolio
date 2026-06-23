import { experience } from '../data/experience'
import SectionTitle from '../components/SectionTitle'
import Timeline from '../components/Timeline'

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding bg-white">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          label="Trayectoria"
          title="Experiencia profesional"
          description="Más de tres décadas liderando obras de infraestructura en empresas constructoras, consultoras y organismos públicos."
        />

        <Timeline items={experience} />
      </div>
    </section>
  )
}
