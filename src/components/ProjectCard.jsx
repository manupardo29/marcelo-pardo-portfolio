import { useEffect, useRef } from 'react'
import ProjectImage from './ProjectImage'
import Button from './Button'

export default function ProjectCard({ project, onViewDetail }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-200 hover:border-primary-200 hover:shadow-md">
      <div className="relative aspect-[5/3] overflow-hidden border-b border-border sm:aspect-[16/10]">
        <ProjectImage src={project.image} alt={project.name} />
        <div className="absolute left-3 top-3 right-3">
          <span className="inline-block max-w-full truncate rounded-md bg-primary-600/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-3 text-base font-semibold leading-snug text-slate-900 group-hover:text-primary-700 sm:text-lg">
          {project.name}
        </h3>

        <div className="mb-3 space-y-2 text-sm">
          <div className="flex items-baseline gap-2">
            <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-400">Rol</span>
            <span className="font-medium text-slate-700">{project.role}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-400">Comitente</span>
            <span className="line-clamp-2 text-slate-600">{project.client}</span>
          </div>
        </div>

        <div className="mb-4 rounded-lg border border-primary-100 bg-primary-50 px-3 py-2.5">
          <p className="text-sm font-semibold leading-snug text-primary-700">{project.metric}</p>
        </div>

        <p className="mb-4 hidden flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2 sm:block">
          {project.description}
        </p>

        <Button
          variant="outline"
          size="md"
          onClick={() => onViewDetail(project)}
          className="mt-auto w-full"
        >
          Ver detalle
        </Button>
      </div>
    </article>
  )
}

export function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) return

    const previousFocus = document.activeElement
    closeButtonRef.current?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      ref={dialogRef}
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-border bg-white shadow-2xl sm:max-h-[90vh] sm:max-w-2xl sm:rounded-xl">
        <div className="relative aspect-[16/9] border-b border-border">
          <ProjectImage src={project.image} alt={project.name} />
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5 text-slate-600 shadow-sm transition-colors hover:bg-white hover:text-slate-900"
            aria-label="Cerrar detalle de obra"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 sm:p-8">
          <span className="mb-3 inline-block rounded-md bg-primary-100 px-2.5 py-1 text-xs font-semibold text-primary-700">
            {project.category}
          </span>

          <h3 id="project-modal-title" className="mb-4 text-lg font-bold leading-snug text-slate-900 sm:text-2xl">
            {project.name}
          </h3>

          <dl className="mb-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Rol</dt>
              <dd className="mt-1 text-sm font-medium text-slate-800">{project.role}</dd>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Comitente</dt>
              <dd className="mt-1 text-sm font-medium text-slate-800">{project.client}</dd>
            </div>
          </dl>

          <div className="mb-5 rounded-lg border border-primary-200 bg-primary-50 p-4">
            <p className="text-sm font-semibold text-primary-800">{project.metric}</p>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}
