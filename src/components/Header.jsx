import { useState, useEffect } from 'react'
import { navigation } from '../data/navigation'
import { contact } from '../data/contact'
import Button from './Button'
import { Icon } from './Icon'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight text-primary-700 transition-colors hover:text-primary-800"
        >
          Marcelo Pardo
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacto" size="sm">
            Contactar
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-600 transition-colors hover:bg-surface-alt lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-white px-4 py-4 lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 border-t border-border pt-3">
              <Button href="#contacto" size="md" className="w-full" onClick={handleNavClick}>
                Contactar
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">{contact.name}</p>
            <p className="mt-1 text-sm">{contact.title} — {contact.location}</p>
          </div>
          <div className="flex items-center gap-4">
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
              className="text-slate-400 transition-colors hover:text-white"
              aria-label="LinkedIn de Marcelo Daniel Pardo"
            >
              <Icon name="linkedin" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs">
          <p>&copy; {year} Marcelo Daniel Pardo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
