export default function SectionTitle({ label, title, description, align = 'center', dark = false, id }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${alignClass}`}>
      {label && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-widest sm:text-sm ${
            dark ? 'text-primary-200' : 'text-primary-600'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        id={id}
        className={`text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base ${
            dark ? 'text-primary-100' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-4 h-0.5 w-12 sm:mt-5 sm:w-16 ${dark ? 'bg-primary-300' : 'bg-primary-600'} ${
          align === 'left' ? '' : 'mx-auto'
        }`}
      />
    </div>
  )
}
