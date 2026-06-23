export default function Card({ children, className = '', hover = true, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`rounded-xl border border-border bg-card shadow-sm ${
        hover ? 'transition-shadow duration-200 hover:shadow-md' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
