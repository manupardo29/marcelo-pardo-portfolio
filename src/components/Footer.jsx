import { contact } from '../data/contact'
import { Icon } from './Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary-900 pb-20 text-muted/70 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">{contact.name}</p>
            <p className="mt-1 text-sm">{contact.title} — {contact.location}</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="text-sm transition-colors hover:text-white"
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/70 transition-colors hover:text-white"
              aria-label="LinkedIn de Marcelo Daniel Pardo"
            >
              <Icon name="linkedin" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-800 pt-6 text-center text-xs">
          <p>&copy; {year} Marcelo Daniel Pardo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
