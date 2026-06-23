import { contact } from '../data/contact'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import ContactChannel from '../components/ContactChannel'
import { Icon } from '../components/Icon'

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-primary-600" aria-labelledby="contacto-heading">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle
          id="contacto-heading"
          label="Contacto"
          title="Contacto profesional"
          description="Abierto a propuestas de dirección, jefatura y supervisión técnica en proyectos de infraestructura civil."
          dark
        />

        <div className="mx-auto rounded-2xl border border-primary-500/40 bg-card p-5 shadow-xl sm:p-8">
          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <ContactChannel
              href={`mailto:${contact.email}`}
              icon={<Icon name="mail" />}
              label="Email"
              value={contact.email}
            />
            <ContactChannel
              href={contact.phoneHref}
              icon={<Icon name="phone" />}
              label="Teléfono"
              value={contact.phone}
            />
            <ContactChannel
              href={contact.linkedin}
              icon={<Icon name="linkedin" />}
              label="LinkedIn"
              value="Ver perfil"
              external
            />
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
