const variants = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 border border-primary-600 shadow-sm',
  secondary:
    'bg-card text-primary-600 hover:bg-primary-50 active:bg-primary-100 border border-border hover:border-primary-300',
  outline:
    'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 border border-primary-300',
  ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 border border-transparent',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm gap-1.5 min-h-[40px]',
  md: 'px-5 py-2.5 text-sm gap-2 min-h-[44px] sm:text-base',
  lg: 'px-6 py-3 text-base gap-2 min-h-[48px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  icon,
  ...props
}) {
  const classes = `inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {external && (
        <svg className="h-3.5 w-3.5 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
