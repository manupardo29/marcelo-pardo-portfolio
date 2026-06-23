import { useEffect, useRef } from 'react'
import ProjectImage from './ProjectImage'
import Button from './Button'
import Card from './Card'
import { Icon } from './Icon'
import { getProjectImageAlt } from '../utils/projectImage'
import { useFocusTrap, useEscapeKey } from '../hooks/useFocusTrap'

export default function ProjectCard({ project, onViewDetail }) {
  const imageAlt = getProjectImageAlt(project)

  return (
    <Card as="article" className="group flex flex-col overflow-hidden transition-all duration-200 hover:border-primary-200">
      <div className="relative aspect-[5/3] overflow-hidden border-b border-border bg-surface sm:aspect-[16/10]">
        <ProjectImage src={project.image} alt={imageAlt} name={project.name} />
        <div className="pointer-events-none absolute left-3 top-3 right-3">
          <span className="inline-block max-w-full truncate rounded-md bg-primary-600/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-3 text-base font-semibold leading-snug text-ink group-hover:text-primary-600 sm:text-lg">
          {project.name}
        </h3>

        <div className="mb-3 space-y-2 text-sm">
          <div className="flex items-baseline gap-2">
            <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-muted/70">Rol</span>
            <span className="font-medium text-muted">{project.role}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-muted/70">Comitente</span>
            <span className="line-clamp-2 text-muted">{project.client}</span>
          </div>
        </div>

        <div className="mb-4 rounded-lg border border-primary-100 border-l-2 border-l-accent/60 bg-primary-50 px-3 py-2.5">
          <p className="text-sm font-semibold leading-snug text-primary-600">{project.metric}</p>
        </div>

        <p className="mb-4 hidden flex-1 text-sm leading-relaxed text-muted line-clamp-2 sm:block">
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
    </Card>
  )
}

export function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeButtonRef = useRef(null)

  useFocusTrap(!!project, panelRef)
  useEscapeKey(!!project, onClose)

  useEffect(() => {
    if (!project) return

    const previousFocus = document.activeElement
    closeButtonRef.current?.focus()

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      previousFocus?.focus()
    }
  }, [project])

  if (!project) return null

  const imageAlt = getProjectImageAlt(project)

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-border bg-card shadow-2xl sm:max-h-[90vh] sm:max-w-2xl sm:rounded-xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface">
          <ProjectImage src={project.image} alt={imageAlt} name={project.name} />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-card/90 p-2.5 text-muted shadow-sm transition-colors hover:bg-card hover:text-ink"
            aria-label="Cerrar detalle de obra"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="p-5 sm:p-8">
          <span className="mb-3 inline-block rounded-md bg-primary-100 px-2.5 py-1 text-xs font-semibold text-primary-600">
            {project.category}
          </span>

          <h3 id="project-modal-title" className="mb-4 text-lg font-bold leading-snug text-ink sm:text-2xl">
            {project.name}
          </h3>

          <dl className="mb-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">Rol</dt>
              <dd className="mt-1 text-sm font-medium text-ink">{project.role}</dd>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">Comitente</dt>
              <dd className="mt-1 text-sm font-medium text-ink">{project.client}</dd>
            </div>
          </dl>

          <div className="mb-5 rounded-lg border border-primary-200 border-l-2 border-l-accent/60 bg-primary-50 p-4">
            <p className="text-sm font-semibold text-primary-600">{project.metric}</p>
          </div>

          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}
