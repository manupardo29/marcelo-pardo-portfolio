export default function SectionTitle({ label, title, description, align = 'center', dark = false, id }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${alignClass}`}>
      {label && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-widest sm:text-sm ${
            dark ? 'text-primary-200' : 'text-primary-500'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        id={id}
        className={`text-xl font-bold tracking-tight text-ink sm:text-2xl lg:text-3xl ${
          dark ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base ${
            dark ? 'text-primary-100' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-1 sm:mt-5 ${align === 'left' ? '' : 'mx-auto justify-center'}`}
      >
        <div className={`h-0.5 w-10 sm:w-14 ${dark ? 'bg-primary-400' : 'bg-primary-600'}`} />
        <div className={`h-1 w-1 rounded-full ${dark ? 'bg-accent' : 'bg-accent'}`} aria-hidden="true" />
      </div>
    </div>
  )
}
