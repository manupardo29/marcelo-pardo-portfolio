import { hero, contact } from '../data/contact'
import Button from '../components/Button'
import { Icon } from '../components/Icon'
import HeroVisual from '../components/HeroVisual'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-surface pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20"
    >
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div
        className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-available/25 bg-available-light px-3 py-1.5 text-xs font-medium text-available sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-available" aria-hidden="true" />
              {contact.status}
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl xl:text-5xl">
              {hero.name}
            </h1>

            <p className="mt-2 text-base font-semibold text-primary-500 sm:mt-3 sm:text-lg lg:text-xl">
              {hero.roles}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-ink/90 sm:mt-6 sm:text-base lg:text-lg">
              {hero.headline}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4">
              {hero.subtext}
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Icon name="location" />
              <span>{contact.location}</span>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <Button href="#contacto" size="lg" className="w-full sm:w-auto">
                Contactar
              </Button>
              <Button href="#obras" variant="secondary" size="lg" className="w-full sm:w-auto">
                Ver obras destacadas
              </Button>
              <div className="grid grid-cols-2 gap-2.5 sm:contents">
                <Button
                  href={contact.cvPath}
                  variant="secondary"
                  size="md"
                  download="cv-marcelo-pardo.pdf"
                  icon={<Icon name="download" />}
                  className="w-full sm:w-auto"
                >
                  Descargar CV
                </Button>
                <Button
                  href={contact.linkedin}
                  variant="outline"
                  size="md"
                  external
                  icon={<Icon name="linkedin" />}
                  className="w-full sm:w-auto"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          <div className="order-2 lg:max-w-none">
            <div className="mx-auto overflow-hidden rounded-xl border border-border bg-card shadow-lg lg:max-w-none">
              <div className="aspect-[3/2] sm:aspect-[4/3] lg:aspect-[4/5]">
                {hero.profileImage ? (
                  <img
                    src={hero.profileImage}
                    alt={`Foto profesional de ${hero.name}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <HeroVisual />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
