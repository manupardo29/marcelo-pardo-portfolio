/**
 * Obras destacadas del portfolio.
 *
 * Para agregar imágenes reales de cada obra:
 * 1. Colocar las fotos en /public/projects/ (ej: mercado-libre.jpg)
 * 2. Actualizar el campo `image` de cada proyecto con la ruta (ej: '/projects/mercado-libre.jpg')
 * 3. Si `image` es null, se mostrará un placeholder elegante
 */
export const projects = [
  {
    id: 'mercado-libre',
    name: 'Red de agua — Mercado Libre',
    category: 'Obra sanitaria',
    role: 'Jefe de Obra',
    client: 'Plaza Logística / Mercado Libre / AySA',
    metric: '900 m de cañería PVC Ø 315 mm',
    description:
      'Ejecución de red de agua con tres túneles en PEAD Ø 315 mm, conexión a red AySA sobre caño DN 500, cámaras de desagüe e inspección, y válvulas de aire.',
    image: null,
  },
  {
    id: 'polo-pilar',
    name: 'Polo Industrial Pilar',
    category: 'Infraestructura urbana',
    role: 'Jefe de Obra',
    client: 'Polo Pilar — Ruta 8',
    metric: 'Pavimento de hormigón, desagües e iluminación',
    description:
      'Movimiento de suelos, suelo cal, pavimento de hormigón con malla, desagües pluviales, alcantarillas, luminarias y bases para columnas de media tensión.',
    image: null,
  },
  {
    id: 'aeropuerto-san-fernando',
    name: 'Redes sanitarias — Aeropuerto de San Fernando',
    category: 'Obra sanitaria / aeroportuaria',
    role: 'Jefe de Obra',
    client: 'Aeropuertos Argentina 2000 S.A.',
    metric: '2.600 m de red cloacal y 1.100 m de red pluvial',
    description:
      'Red cloacal en PVC Ø 200 mm, dos estaciones de pretratamiento y bombeo, 1.400 m de impulsión en PEAD y red pluvial en hormigón armado Ø 1.600 mm.',
    image: null,
  },
  {
    id: 'arroyo-vega',
    name: 'Cámara de enlace — Arroyo Vega',
    category: 'Obra hidráulica urbana',
    role: 'Jefe de Obra',
    client: 'Roggio / Cartellone / Supercemento UTE',
    metric: 'Enlace entre conducto Ø 3,10 m y túnel subterráneo',
    description:
      'Cámara de enlace en hormigón armado entre conducto circular existente y túnel subterráneo bajo Av. El Cano, con conexión al segundo emisario del Arroyo Vega.',
    image: null,
  },
  {
    id: 'cuenca-cildaniz',
    name: 'Aguas urbanas — Cuenca Cildañez',
    category: 'Obra hidráulica / urbana',
    role: 'Jefe de Obra',
    client: 'Gobierno de la Ciudad de Buenos Aires',
    metric: 'Reservorio de 7 hectáreas',
    description:
      'Conductos rectangulares de hormigón armado, cámaras, sumideros, reservorio, conductos PEAD y PRFV, túnel de hormigón armado, estación de bombeo y reconstrucción de pavimentos.',
    image: null,
  },
  {
    id: 'arroyo-maldonado',
    name: 'Desagües pluviales — Cuenca del Arroyo Maldonado',
    category: 'Obra hidráulica / pluvial',
    role: 'Jefe de Obra',
    client: 'Gobierno de la Ciudad de Buenos Aires',
    metric: '14 ramales en distintas subcuencas',
    description:
      'Conductos pluviales rectangulares de hormigón armado, tunnel liner, conductos circulares PEAD y PRFV, cámaras, sumideros y obras complementarias.',
    image: null,
  },
  {
    id: 'avenida-lugones',
    name: 'Pavimentación — Avenida Lugones',
    category: 'Obra vial urbana',
    role: 'Jefe de Obra',
    client: 'Autopistas Urbanas S.A.',
    metric: 'Sellado de juntas y mezclas SMA 19 / SMA 12',
    description:
      'Intervención sobre pavimento de hormigón: costuras de losas, sellado de juntas y colocación de mezclas asfálticas especiales.',
    image: null,
  },
  {
    id: 'villa-gesell',
    name: 'Acceso Sur — Villa Gesell',
    category: 'Obra vial',
    role: 'Jefe de Obra',
    client: 'Municipalidad de Villa Gesell',
    metric: 'Ramales, circunvalación y boulevard',
    description:
      'Dos ramales independientes, avenida de circunvalación y Boulevard Silvio Gesell, con movimiento de arena, estabilización arena-suelo-cemento y pavimento asfáltico.',
    image: null,
  },
  {
    id: 'rn-237-crema',
    name: 'RN 237 y RN 40 — CREMA Neuquén',
    category: 'Obra vial / mantenimiento',
    role: 'Jefe de Obra',
    client: 'Vialidad Nacional',
    metric: '180.000 t de mezcla asfáltica',
    description:
      'Recuperación y mantenimiento vial en la Provincia de Neuquén: bacheo, carpeta asfáltica, banquinas y señalización horizontal.',
    image: null,
  },
  {
    id: 'zvartnots',
    name: 'Rehabilitación de pista — Aeropuerto Zvartnots, Armenia',
    category: 'Obra aeroportuaria',
    role: 'Director de Obra',
    client: 'Aeropuertos Argentina 2000 S.A.',
    metric: '20.000 t de mezcla asfáltica y 12.800 m² de geogrilla',
    description:
      'Dirección de la rehabilitación de pista 09-27, rodajes, plataforma y sistema de balizamiento para zona de toque, borde de pista, eje y aproximación.',
    image: null,
  },
  {
    id: 'perales-aguiar',
    name: 'Pavimento urbano de hormigón — Conurbano Bonaerense',
    category: 'Obra urbana / pavimentos',
    role: 'Jefe de Obra',
    client: 'Ente del Conurbano Bonaerense',
    metric: '210.000 m² de pavimento de hormigón',
    description:
      'Movimiento de suelos, desmonte, entoscado, suelo cemento, pavimento urbano de hormigón, desagües pluviales y conducción de equipos de obra.',
    image: null,
  },
]
