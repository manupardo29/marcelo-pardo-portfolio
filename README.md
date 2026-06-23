# Portfolio — Marcelo Daniel Pardo

Portfolio profesional one-page de Marcelo Daniel Pardo, Ingeniero Civil especializado en infraestructura vial, hidráulica, sanitaria, urbana y aeroportuaria.

## Tecnologías

- React + Vite
- Tailwind CSS
- Deploy en Netlify (sin backend)

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy en Netlify

1. Conectar el repositorio en [Netlify](https://www.netlify.com/).
2. Configurar (ya definido en `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20
3. Hacer deploy. No se requiere backend ni variables de entorno.

> **Nota sobre el CV:** el botón "Descargar CV" apunta a `/cv-marcelo-pardo.pdf`. El sitio funciona sin ese archivo, pero el enlace devolverá 404 en producción hasta que se suba el PDF en `/public/cv-marcelo-pardo.pdf` y se vuelva a desplegar.

## Requisitos

- Node.js 18 o superior (recomendado: 20)

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables (Header, Button, cards, etc.)
├── data/           # Contenido editable (proyectos, experiencia, contacto, etc.)
├── sections/       # Secciones de la página
├── App.jsx
└── main.jsx

public/
├── projects/       # Imágenes de obras (agregar aquí)
├── cv-marcelo-pardo.pdf   # CV descargable (agregar el PDF final)
└── favicon.svg
```

## Personalización de contenido

Todo el contenido principal está en `src/data/`:

| Archivo | Contenido |
|---------|-----------|
| `contact.js` | Datos de contacto, hero y foto de perfil |
| `projects.js` | Obras destacadas |
| `experience.js` | Experiencia profesional |
| `specializations.js` | Áreas de especialización |
| `profile.js` | Perfil y fortalezas |
| `metrics.js` | Métricas de trayectoria |
| `skills.js` | Herramientas y conocimientos |
| `education.js` | Educación y formación |
| `navigation.js` | Links del menú |

### Agregar imágenes de obras

1. Colocar las fotos en `/public/projects/` (ej: `mercado-libre.jpg`).
2. Actualizar el campo `image` en `src/data/projects.js`:
   ```js
   image: '/projects/mercado-libre.jpg',
   ```

### Agregar foto de perfil

1. Colocar la imagen en `/public/profile/`.
2. Actualizar `hero.profileImage` en `src/data/contact.js`.

### Agregar CV

1. Colocar el archivo PDF en `/public/cv-marcelo-pardo.pdf`.
2. Ejecutar `npm run build` y volver a desplegar en Netlify.

Hasta que el PDF esté disponible, el resto del sitio funciona con normalidad.

## Licencia

Proyecto privado — Marcelo Daniel Pardo.
