import { Icon } from './Icon'

export default function SpecializationCard({ item }) {
  return (
    <div className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
        <Icon name={item.icon} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
    </div>
  )
}
