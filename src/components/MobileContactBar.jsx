import { contact } from '../data/contact'
import { Icon } from './Icon'

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`mailto:${contact.email}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-3 py-3 text-sm font-medium text-slate-700 transition-colors active:bg-primary-50"
        >
          <Icon name="mail" />
          Email
        </a>
        <a
          href={contact.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-600 px-3 py-3 text-sm font-medium text-white transition-colors active:bg-primary-700"
        >
          <Icon name="phone" />
          Llamar
        </a>
      </div>
    </div>
  )
}
