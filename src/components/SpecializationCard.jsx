import Card from './Card'
import { Icon } from './Icon'

export default function SpecializationCard({ item }) {
  return (
    <Card className="group border-t-2 border-t-accent/30 p-5 transition-all duration-200 hover:border-primary-200 sm:p-6">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border border-accent-muted/60 bg-accent-light/40 text-accent sm:mb-4 sm:h-12 sm:w-12">
        <Icon name={item.icon} />
      </div>
      <h3 className="mb-2 text-base font-semibold text-ink sm:text-lg">{item.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{item.description}</p>
    </Card>
  )
}
