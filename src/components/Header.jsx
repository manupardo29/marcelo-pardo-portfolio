import { useState, useEffect, useRef } from 'react'
import { navigation } from '../data/navigation'
import { contact } from '../data/contact'
import Button from './Button'
import { Icon } from './Icon'
import { useFocusTrap, useEscapeKey } from '../hooks/useFocusTrap'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef(null)

  useFocusTrap(isOpen, menuRef)
  useEscapeKey(isOpen, () => setIsOpen(false))

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'border-b border-border bg-card/95 shadow-sm backdrop-blur-md'
            : 'bg-card/90 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="shrink-0 text-base font-bold tracking-tight text-primary-600 transition-colors hover:text-primary-700 sm:text-lg"
            onClick={handleNavClick}
          >
            Marcelo Pardo
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navegación principal">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#contacto" size="sm" className="hidden sm:inline-flex">
              Contactar
            </Button>
            <button
              type="button"
              className="rounded-lg p-2.5 text-muted transition-colors hover:bg-surface-alt lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <Icon name={isOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm"
            onClick={handleNavClick}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            ref={menuRef}
            className="absolute inset-x-0 top-14 border-b border-border bg-card px-4 pb-6 pt-2 shadow-lg sm:top-16"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col gap-0.5">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className="rounded-lg px-4 py-3.5 text-base font-medium text-muted transition-colors active:bg-primary-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
              <Button
                href={`mailto:${contact.email}`}
                variant="secondary"
                size="md"
                className="w-full"
                onClick={handleNavClick}
                icon={<Icon name="mail" />}
              >
                Email
              </Button>
              <Button
                href={contact.phoneHref}
                size="md"
                className="w-full"
                onClick={handleNavClick}
                icon={<Icon name="phone" />}
              >
                Llamar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
