export default function SectionTitle({ label, title, description, align = 'center', dark = false }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`mb-12 lg:mb-16 ${alignClass}`}>
      {label && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            dark ? 'text-primary-200' : 'text-primary-600'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? 'text-primary-100' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-5 h-0.5 w-16 ${dark ? 'bg-primary-300' : 'bg-primary-600'} ${
          align === 'left' ? '' : 'mx-auto'
        }`}
      />
    </div>
  )
}
