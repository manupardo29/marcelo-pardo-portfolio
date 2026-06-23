import { contact } from '../data/contact'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { Icon } from '../components/Icon'

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary-600">
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle
          label="Contacto"
          title="Contacto profesional"
          description="Disponible para dirección de obra, jefatura de obra, supervisión técnica y proyectos de infraestructura civil."
          dark
        />

        <div className="mx-auto mt-10 max-w-lg rounded-xl border border-primary-500 bg-white p-6 shadow-lg sm:p-8">
          <div className="space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-center gap-3 rounded-lg border border-border bg-surface p-4 text-slate-700 transition-colors hover:border-primary-200 hover:bg-primary-50"
            >
              <span className="text-primary-600"><Icon name="mail" /></span>
              <span className="text-sm font-medium sm:text-base">{contact.email}</span>
            </a>

            <a
              href={contact.phoneHref}
              className="flex items-center justify-center gap-3 rounded-lg border border-border bg-surface p-4 text-slate-700 transition-colors hover:border-primary-200 hover:bg-primary-50"
            >
              <span className="text-primary-600"><Icon name="phone" /></span>
              <span className="text-sm font-medium sm:text-base">{contact.phone}</span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-lg border border-border bg-surface p-4 text-slate-700 transition-colors hover:border-primary-200 hover:bg-primary-50"
            >
              <span className="text-primary-600"><Icon name="linkedin" /></span>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              href={contact.cvPath}
              variant="primary"
              size="md"
              download="cv-marcelo-pardo.pdf"
              icon={<Icon name="download" />}
            >
              Descargar CV
            </Button>
            <Button
              href={`mailto:${contact.email}`}
              variant="secondary"
              size="md"
              icon={<Icon name="mail" />}
            >
              Enviar email
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
