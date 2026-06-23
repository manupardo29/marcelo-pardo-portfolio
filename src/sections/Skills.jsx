import { skills } from '../data/skills'
import SectionTitle from '../components/SectionTitle'
import Badge from '../components/Badge'

export default function Skills() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          id="skills-heading"
          label="Competencias"
          title="Conocimientos técnicos"
          description="Herramientas y capacidades aplicadas en la gestión y ejecución de obra."
        />

        <ul className="flex flex-wrap justify-center gap-3" role="list">
          {skills.map((skill) => (
            <li key={skill}>
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
