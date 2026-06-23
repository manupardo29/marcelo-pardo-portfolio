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
    name: 'Red de agua para provisión a Mercado Libre',
    category: 'Obra sanitaria / red de agua',
    role: 'Jefe de Obra',
    client: 'Plaza Logística / Mercado Libre / AySA',
    metric: '900 m de cañería PVC de 315 mm',
    description:
      'Ejecución de red de agua, tres túneles con tunelera inteligente en PEAD de 315 mm, conexión a red AySA sobre caño DN 500, cámaras de desagüe, cámaras de inspección y válvulas de aire.',
    image: null,
  },
  {
    id: 'polo-pilar',
    name: 'Infraestructura en Polo Industrial Pilar',
    category: 'Infraestructura urbana / industrial',
    role: 'Jefe de Obra',
    client: 'Polo Pilar, Ruta 8 Km 64,5',
    metric: 'Pavimento de hormigón, desagües, luminarias y media tensión',
    description:
      'Movimiento de suelos, suelo cal, pavimento de hormigón con malla, desagües pluviales rectangulares y circulares, alcantarillas, tritubos, luminarias y bases para columnas de media tensión.',
    image: null,
  },
  {
    id: 'aeropuerto-san-fernando',
    name: 'Infraestructura sanitaria del Aeropuerto Internacional de San Fernando',
    category: 'Obra sanitaria / aeroportuaria',
    role: 'Jefe de Obra',
    client: 'Aeropuertos Argentina 2000 S.A.',
    metric: '2.600 m de red cloacal y 1.100 m de red pluvial',
    description:
      'Ejecución de red cloacal con cañería PVC de 200 mm, dos estaciones de pretratamiento y bombeo, 1.400 m de impulsión en PEAD y red pluvial con cañería de hormigón armado de 1600 mm.',
    image: null,
  },
  {
    id: 'arroyo-vega',
    name: 'Cámara de enlace Arroyo Vega',
    category: 'Obra hidráulica urbana',
    role: 'Jefe de Obra',
    client: 'Roggio / Cartellone / Supercemento UTE',
    metric: 'Enlace entre conducto de 3,10 m y túnel subterráneo',
    description:
      'Ejecución de cámara de enlace de hormigón armado entre conducto circular existente y túnel subterráneo bajo Avenida El Cano hasta conexión con el segundo emisario del Arroyo Vega.',
    image: null,
  },
  {
    id: 'cuenca-cildaniz',
    name: 'Gestión integral de aguas urbanas en Cuenca Cildañez',
    category: 'Obra hidráulica / infraestructura urbana',
    role: 'Jefe de Obra',
    client: 'Gobierno de la Ciudad de Buenos Aires',
    metric: 'Reservorio de 7 hectáreas',
    description:
      'Construcción de conductos rectangulares de hormigón armado, cámaras, sumideros, reservorio, conductos PEAD y PRFV, túnel de hormigón armado, pozos de ataque, estación de bombeo, compuertas y reconstrucción de pavimentos.',
    image: null,
  },
  {
    id: 'arroyo-maldonado',
    name: 'Desagües pluviales secundarios de la Cuenca del Arroyo Maldonado',
    category: 'Obra hidráulica / pluvial',
    role: 'Jefe de Obra',
    client: 'Gobierno de la Ciudad de Buenos Aires',
    metric: '14 ramales en distintas subcuencas',
    description:
      'Construcción de conductos pluviales rectangulares de hormigón armado, tunnel liner, conductos circulares PEAD y PRFV, cámaras, sumideros y obras complementarias.',
    image: null,
  },
  {
    id: 'avenida-lugones',
    name: 'Pavimentación Avenida Lugones',
    category: 'Obra vial urbana',
    role: 'Jefe de Obra',
    client: 'Autopistas Urbanas S.A.',
    metric: 'Texturizado, sellado de juntas y mezclas SMA 19 / SMA 12',
    description:
      'Intervención sobre pavimento de hormigón, costuras de losas, sellado de juntas y colocación de mezclas asfálticas especiales.',
    image: null,
  },
  {
    id: 'villa-gesell',
    name: 'Acceso Sur a Villa Gesell',
    category: 'Obra vial',
    role: 'Jefe de Obra',
    client: 'Municipalidad de Villa Gesell',
    metric: 'Ramales de entrada y salida, circunvalación y boulevard',
    description:
      'Construcción de dos ramales independientes, avenida de circunvalación, Boulevard Silvio Gesell, movimiento de arena, estabilización arena-suelo-cemento y pavimento asfáltico.',
    image: null,
  },
  {
    id: 'rn-237-crema',
    name: 'RN 237 y RN 40 — CREMA Mallas 109 y 131',
    category: 'Obra vial / mantenimiento',
    role: 'Jefe de Obra',
    client: 'Vialidad Nacional',
    metric: '180.000 toneladas de mezcla asfáltica',
    description:
      'Contrato de recuperación y mantenimiento en la Provincia de Neuquén, con bacheo, carpeta asfáltica, banquinas, señalización horizontal y mantenimiento vial.',
    image: null,
  },
  {
    id: 'zvartnots',
    name: 'Aeropuerto Internacional Zvartnots, Yerevan, Armenia',
    category: 'Obra aeroportuaria',
    role: 'Director de Obra',
    client: 'Aeropuertos Argentina 2000 S.A.',
    metric: '20.000 toneladas de mezcla asfáltica y 12.800 m² de geogrilla',
    description:
      'Dirección y supervisión de la rehabilitación de pista 09-27, rodajes, plataforma y sistema de balizamiento. Renovación del sistema de balizamiento para zona de toque, borde de pista, eje de pista y aproximación.',
    image: null,
  },
  {
    id: 'perales-aguiar',
    name: 'Pavimento urbano de hormigón — Perales Aguiar S.A.',
    category: 'Obra urbana / pavimentos',
    role: 'Jefe de Obra',
    client: 'Ente del Conurbano Bonaerense',
    metric: '210.000 m² de pavimento urbano de hormigón',
    description:
      'Movimiento de suelos, desmonte, entoscado, suelo cemento, pavimento urbano de hormigón, desagües pluviales y conducción de aproximadamente 100 personas.',
    image: null,
  },
]
