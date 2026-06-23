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
2. Configurar:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. El archivo `netlify.toml` ya incluye esta configuración.

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

Colocar el archivo PDF en `/public/cv-marcelo-pardo.pdf`.

## Licencia

Proyecto privado — Marcelo Daniel Pardo.
