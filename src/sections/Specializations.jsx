import { specializations } from '../data/specializations'
import SectionTitle from '../components/SectionTitle'
import SpecializationCard from '../components/SpecializationCard'

export default function Specializations() {
  return (
    <section id="especializacion" className="section-padding bg-surface" aria-labelledby="especializacion-heading">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="especializacion-heading"
          label="Especialización"
          title="Áreas de especialización"
          description="Experiencia técnica en múltiples disciplinas de la ingeniería civil e infraestructura."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {specializations.map((item) => (
            <SpecializationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
