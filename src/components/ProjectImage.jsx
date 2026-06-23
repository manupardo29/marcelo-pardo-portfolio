import { useState } from 'react'
import { Icon } from './Icon'

/**
 * Muestra imagen de obra o placeholder elegante.
 * Para reemplazar: actualizar el campo `image` en src/data/projects.js
 * y colocar el archivo en /public/projects/
 */
export default function ProjectImage({ src, alt, className = '' }) {
  const [hasError, setHasError] = useState(false)

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    )
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-surface-alt ${className}`}
      role="img"
      aria-label="Imagen de obra próximamente"
    >
      <div className="text-primary-300">
        <Icon name="construction" />
      </div>
      <p className="mt-3 px-4 text-center text-xs font-medium text-primary-400">
        Imagen de obra próximamente
      </p>
    </div>
  )
}
