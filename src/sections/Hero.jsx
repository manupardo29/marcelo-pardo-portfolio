import { hero, contact } from '../data/contact'
import Button from '../components/Button'
import { Icon } from '../components/Icon'
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-surface pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div
        className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {contact.status}
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {hero.name}
            </h1>

            <p className="mt-3 text-lg font-medium text-primary-600 sm:text-xl">
              {hero.roles}
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {hero.headline}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {hero.subtext}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Icon name="location" />
              <span>{contact.location}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#obras" size="md">
                Ver obras destacadas
              </Button>
              <Button
                href={contact.cvPath}
                variant="secondary"
                size="md"
                icon={<Icon name="download" />}
              >
                Descargar CV
              </Button>
              <Button
                href={contact.linkedin}
                variant="secondary"
                size="md"
                external
                icon={<Icon name="linkedin" />}
              >
                LinkedIn
              </Button>
              <Button href="#contacto" variant="outline" size="md">
                Contactar
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-lg">
              <div className="aspect-[4/5] sm:aspect-[3/4]">
                {hero.profileImage ? (
                  <img
                    src={hero.profileImage}
                    alt={`Foto profesional de ${hero.name}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-primary-50 via-white to-surface-alt p-8">
                    <div className="absolute inset-4 rounded-lg border border-dashed border-primary-200" aria-hidden="true" />
                    <div className="relative text-primary-300">
                      <Icon name="construction" />
                    </div>
                    <p className="relative mt-4 text-center text-sm font-medium text-primary-500">
                      Foto profesional próximamente
                    </p>
                    <p className="relative mt-2 text-center text-xs text-slate-400">
                      Reemplazar en src/data/contact.js → hero.profileImage
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div
              className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl border border-primary-200"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
