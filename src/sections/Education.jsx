import { education, complementaryTraining } from '../data/education'
import SectionTitle from '../components/SectionTitle'

export default function Education() {
  return (
    <section className="section-padding bg-surface" aria-label="Educación y formación">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          label="Formación"
          title="Educación y formación"
        />

        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1 rounded-lg border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-900">{item.degree}</h3>
                <p className="text-sm text-slate-600">{item.institution}</p>
              </div>
              <span className="text-sm font-medium text-primary-600">{item.year}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-primary-100 bg-primary-50 p-5">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-700">
            Formación complementaria
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">{complementaryTraining}</p>
        </div>
      </div>
    </section>
  )
}
