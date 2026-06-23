/**
 * Utilidades para imágenes de obras.
 *
 * Las fotos se guardan en /public/projects/ y se referencian
 * con rutas absolutas desde la raíz del sitio (ej: '/projects/mercado-libre.jpg').
 */

/** Devuelve la ruta si es válida; null si está vacía o no definida. */
export function getProjectImageSrc(image) {
  if (image == null) return null
  if (typeof image !== 'string') return null
  const trimmed = image.trim()
  return trimmed.length > 0 ? trimmed : null
}

/** Texto alternativo profesional para cada obra. */
export function getProjectImageAlt(project) {
  if (project.imageAlt) return project.imageAlt
  return `Obra de infraestructura civil: ${project.name}, ${project.category}`
}
