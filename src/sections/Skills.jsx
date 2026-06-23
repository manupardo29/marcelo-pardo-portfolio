import { skills } from '../data/skills'
import SectionTitle from '../components/SectionTitle'

export default function Skills() {
  return (
    <section className="section-padding bg-surface" aria-label="Herramientas y conocimientos técnicos">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Competencias"
          title="Conocimientos técnicos"
          description="Herramientas y capacidades aplicadas en la gestión y ejecución de obra."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
