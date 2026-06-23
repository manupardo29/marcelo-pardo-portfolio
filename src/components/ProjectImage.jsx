import { useState } from 'react'
import { Icon } from './Icon'
import { getProjectImageSrc } from '../utils/projectImage'

/**
 * Imagen de obra con fallback a placeholder.
 *
 * Props:
 * - src: ruta pública (ej. '/projects/mercado-libre.jpg') o null
 * - alt: texto alternativo descriptivo (definir en src/data/projects.js → imageAlt)
 * - name: nombre de la obra, se muestra en el placeholder
 *
 * Si src está vacío o el archivo no carga, se muestra el placeholder sin romper el layout.
 */
export default function ProjectImage({ src, alt, name, className = '' }) {
  const [hasError, setHasError] = useState(false)
  const imageSrc = getProjectImageSrc(src)
  const showImage = imageSrc && !hasError

  if (showImage) {
    return (
      <img
        src={imageSrc}
        alt={alt}
        className={`h-full w-full object-cover object-center ${className}`}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />
    )
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary-50 via-white to-surface-alt ${className}`}
      role="img"
      aria-label={alt || 'Imagen de obra no disponible'}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(30 77 107 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(30 77 107 / 0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="relative text-primary-300">
        <Icon name="construction" />
      </div>
      {name && (
        <p className="relative mt-3 max-w-[85%] px-4 text-center text-xs font-medium leading-snug text-primary-500">
          {name}
        </p>
      )}
      <p className="relative mt-1.5 px-4 text-center text-[11px] text-primary-400">
        Imagen próximamente
      </p>
    </div>
  )
}
