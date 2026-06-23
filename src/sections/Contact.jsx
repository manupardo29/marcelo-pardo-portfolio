import { contact } from '../data/contact'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { Icon } from '../components/Icon'

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary-700">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle
          label="Contacto"
          title="Contacto profesional"
          description="Disponible para dirección de obra, jefatura de obra, supervisión técnica y proyectos de infraestructura civil."
          dark
        />

        <div className="mx-auto rounded-2xl border border-primary-500/50 bg-white p-5 shadow-xl sm:p-8">
          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${contact.email}`}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-slate-700 transition-colors hover:border-primary-200 hover:bg-primary-50 active:bg-primary-50"
            >
              <span className="text-primary-600"><Icon name="mail" /></span>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Email</span>
              <span className="text-center text-sm font-medium leading-snug">{contact.email}</span>
            </a>

            <a
              href={contact.phoneHref}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-slate-700 transition-colors hover:border-primary-200 hover:bg-primary-50 active:bg-primary-50"
            >
              <span className="text-primary-600"><Icon name="phone" /></span>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Teléfono</span>
              <span className="text-center text-sm font-medium">{contact.phone}</span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-slate-700 transition-colors hover:border-primary-200 hover:bg-primary-50 active:bg-primary-50"
            >
              <span className="text-primary-600"><Icon name="linkedin" /></span>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">LinkedIn</span>
              <span className="text-center text-sm font-medium">Ver perfil</span>
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              href={`mailto:${contact.email}`}
              size="lg"
              className="w-full sm:w-auto"
              icon={<Icon name="mail" />}
            >
              Enviar email
            </Button>
            <Button
              href={contact.cvPath}
              variant="secondary"
              size="lg"
              download="cv-marcelo-pardo.pdf"
              icon={<Icon name="download" />}
              className="w-full sm:w-auto"
            >
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
