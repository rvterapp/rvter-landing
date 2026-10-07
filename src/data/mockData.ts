export interface StepItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge: string;
  highlight: string;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  icon: string;
  accentColor: string;
  statLabel: string;
  statValue: string;
}

export interface VehicleSpec {
  id: string;
  name: string;
  tag: string;
  capacity: string;
  volume: string;
  idealFor: string[];
  features: string[];
  iconType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'pagos' | 'seguridad' | 'conductores' | 'maquinaria';
}

// Pasos para Generadores de Carga / Usuarios (Rol: USER)
export const USER_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Publica tu Carga o Requerimiento de Maquinaria',
    shortDesc: 'Indica origen, destino, tipo de producto, o el equipo pesado que necesitas para tu obra.',
    fullDesc: 'Define tu necesidad: flete terrestre (Agropecuario, Mercancía General, Graneles) o alquiler de maquinaria en nuestro marketplace. Puedes cotizar directamente con propietarios verificados y calcular tarifas con la Brújula de Costos.',
    icon: 'PackagePlus',
    badge: 'Sin Costo Inicial',
    highlight: 'Marketplace directo con propietarios y Brújula de Costos'
  },
  {
    number: '02',
    title: 'Recibe Ofertas y Negocia Contraofertas en Vivo',
    shortDesc: 'Conductores certificados envían cotizaciones y puedes contraofertar al instante.',
    fullDesc: 'Visualiza la reputación del transportista (1 a 5 estrellas), historial de viajes completados, modelo de vehículo y placas verificadas. Acepta la tarifa o envía una contraoferta directa para cerrar el flete.',
    icon: 'Gavel',
    badge: 'Negociación Transparente',
    highlight: 'Comparación en vivo y contraoferta directa (counter-price)'
  },
  {
    number: '03',
    title: 'Custodia C2P (Pago Previo al Viaje)',
    shortDesc: 'Pagas antes de iniciar. El transportista solo busca la carga cuando los fondos están en custodia.',
    fullDesc: 'Pagas de forma segura vía Pago Móvil C2P o transferencia bancaria antes de iniciar. Únicamente cuando el dinero está confirmado en custodia neutral, el transportista acude a buscar la carga e inicia el viaje; nunca se busca la carga sin antes tener el pago en custodia garantizado.',
    icon: 'ShieldCheck',
    badge: 'Pago Previo al Viaje',
    highlight: 'El transportista solo busca la carga tras confirmar el dinero en custodia'
  },
  {
    number: '04',
    title: 'Rastreo GPS & Sincronización Offline',
    shortDesc: 'Monitorea el avance del camión con telemetría continua incluso en tramos sin señal.',
    fullDesc: 'Visualiza la telemetría satelital en vivo en el mapa. En tramos de carretera sin cobertura celular, la app almacena localmente el recorrido y lo sincroniza de inmediato al recuperar señal.',
    icon: 'MapPin',
    badge: 'Monitoreo Satelital Continuo',
    highlight: 'Geocercas activas, sincronización offline en carretera y telemetría'
  },
  {
    number: '05',
    title: 'Entrega en Destino y Código de Liberación',
    shortDesc: 'Verifica la mercancía en destino, suministra el código de entrega y libera los fondos.',
    fullDesc: 'Al recibir la carga a satisfacción o certificar la faena en destino o almacén, entregas el código de entrega de seguridad. Al validarlo en la app, los fondos en custodia de pago se transfieren de forma irrevocable al transportista.',
    icon: 'CheckCircle2',
    badge: 'Liberación Inmediata',
    highlight: 'Código de entrega en destino y liquidación bancaria instantánea'
  }
];

// Pasos para Transportistas y Propietarios de Maquinaria (Rol: CARRIER)
export const DRIVER_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Registro y Verificación KYC de Unidad o Maquinaria',
    shortDesc: 'Sube tu Cédula, Licencia, RIF y documentación de tu camión o equipo pesado.',
    fullDesc: 'Validamos la titularidad de tu unidad o maquinaria pesada para otorgarte el sello certificado. Dueños de equipos pesados pueden publicar su maquinaria para recibir ofertas de contratación directa.',
    icon: 'UserCheck',
    badge: 'Verificación Digital KYC',
    highlight: 'Certificación oficial de choferes, unidades y maquinaria'
  },
  {
    number: '02',
    title: 'Marketplace de Cargas, Faenas y Cero Retornos Vacíos',
    shortDesc: 'Dueños de camiones y maquinaria reciben solicitudes directas de clientes sin intermediarios informales.',
    fullDesc: 'Accede a la bolsa de fletes y requerimientos de obra. Para transportistas, la meta operativa es lograr cero retornos vacíos enlazando viajes de regreso. Para dueños de maquinaria, el marketplace te conecta con contratistas que requieren tus equipos en su zona.',
    icon: 'Truck',
    badge: 'Meta Cero Retornos Vacíos',
    highlight: 'Filtro por unidad o maquinaria y conexión directa con clientes'
  },
  {
    number: '03',
    title: 'Garantía de Pago Previo y Modo Cabina',
    shortDesc: 'Cero riesgos: nunca buscas la carga sin antes tener el pago en custodia garantizado.',
    fullDesc: 'Antes de mover tu unidad o acudir al origen, tienes la certeza de que el cliente depositó el flete en Custodia C2P. El transportista acude a buscar la carga y comienza el viaje únicamente cuando el dinero está en custodia; nunca vas a buscar la carga sin el pago previamente resguardado. Además, accedes a tu hoja de ruta con tu PIN de Cabina temporal.',
    icon: 'BadgeDollarSign',
    badge: 'Cobro Garantizado Previo a Cargar',
    highlight: 'Solo buscas la carga y viajas con los fondos confirmados en custodia'
  },
  {
    number: '04',
    title: 'Conducción en Ruta & Guías de Movilización',
    shortDesc: 'Navegación GPS, verificación de Guías Únicas de Movilización y telemetría.',
    fullDesc: 'Transmite telemetría en tiempo real mientras conduces con registro continuo aun sin señal celular. Verifica los datos de la Guía Única de Movilización para transitar sin demoras por alcabalas.',
    icon: 'Navigation',
    badge: 'Guías de Movilización',
    highlight: 'Validación de Guías Únicas de Movilización y telemetría Offline'
  },
  {
    number: '05',
    title: 'Liquidación al Instante con Código de Entrega',
    shortDesc: 'El receptor suministra el código en destino y el Pago Móvil se liquida de inmediato.',
    fullDesc: 'Al descargar en destino o finalizar la faena de maquinaria, el receptor o contratante te entrega el código de confirmación. Al ingresarlo en la app, la custodia de pago se libera automáticamente a tu cuenta bancaria.',
    icon: 'Wallet',
    badge: 'Pago Móvil Automático',
    highlight: 'Liquidación automática por validación en destino'
  }
];

// Pilares de Seguridad y Tecnología
export const SECURITY_PILLARS: PillarItem[] = [
  {
    id: 'custodia',
    title: 'Custodia C2P & Doble Validación',
    subtitle: 'El transportista busca la carga únicamente cuando el dinero está en custodia.',
    description: 'RVTER actúa como intermediario fiduciario neutral. El cliente deposita el 100% en custodia protegida antes de comenzar la operación. El transportista acude a buscar la carga y comienza el viaje cuando el dinero está en custodia; nunca va a buscar la carga sin antes tener el pago garantizado en custodia. Para la operación se aplican dos niveles: PIN de Cabina en carretera y Código de Entrega en destino para liberar los fondos.',
    bulletPoints: [
      'Pago previo obligatorio: el transportista solo acude a cargar con fondos en custodia.',
      'Cero viajes sin garantía: jamás se busca la carga sin el pago previamente resguardado.',
      'PIN de Cabina: Acceso expedito del chofer a su hoja de ruta y telemetría.',
      'Código de Entrega en Destino: Liberación irrevocable de fondos al certificar la carga.'
    ],
    icon: 'Lock',
    accentColor: '#2DA933',
    statLabel: 'Transacciones Seguras',
    statValue: '100%'
  },
  {
    id: 'gps',
    title: 'Rastreo GPS & Offline Sync',
    subtitle: 'Telemetría continua de carretera garantizada aun en zonas sin cobertura celular.',
    description: 'La app móvil transmite la posición satelital del viaje. Si la señal se interrumpe en carretera, el módulo de sincronización offline almacena la telemetría en memoria local y la transmite de inmediato al recuperar conectividad.',
    bulletPoints: [
      'Seguimiento visual en vivo con cálculo dinámico de velocidad y tiempo estimado (ETA).',
      'Tecnología Offline Sync: telemetría continua ininterrumpida sin pérdida de datos.',
      'Historial de ruta verificado para respaldo ante cualquier eventualidad.',
      'Detección automática de desvíos, paradas no programadas y alertas de viaje.'
    ],
    icon: 'Radio',
    accentColor: '#3B82F6',
    statLabel: 'Precisión Satelital',
    statValue: 'Sub-métrica'
  },
  {
    id: 'guias',
    title: 'Guías Únicas de Movilización',
    subtitle: 'Cruce y validación digital de Guías Únicas de Movilización para el transporte de carga.',
    description: 'RVTER incorpora validación y lectura de Guías Únicas de Movilización, cruzando datos del vehículo asignado, transportista y rubro para agilizar el tránsito y evitar demoras en puntos de control vial.',
    bulletPoints: [
      'Lectura digital instantánea de datos y código de la Guía Única de Movilización.',
      'Cruce de concordancia entre vehículo asignado, transportista y rubro de carga.',
      'Reducción drástica de tiempos de espera en puntos de control y alcabalas viales.',
      'Archivo digital de la guía vinculado a la orden de flete para respaldo contable.'
    ],
    icon: 'QrCode',
    accentColor: '#F59E0B',
    statLabel: 'Validación',
    statValue: 'Guías de Movilización'
  }
];

// Catálogo de Flota
export const VEHICLE_CATALOG: VehicleSpec[] = [
  {
    id: 'cava',
    name: 'Camión Cava (Seca / Refrigerada)',
    tag: 'Mudanzas y Alimentos',
    capacity: '3.5 a 12 Toneladas',
    volume: '20 a 55 m³',
    idealFor: ['Mudanzas residenciales/oficinas', 'Alimentos refrigerados', 'Mercancía general', 'Hortalizas y víveres'],
    features: ['Caja cerrada con cerradura de seguridad', 'Aislamiento térmico (versión cava termo)', 'Fácil acceso urbano'],
    iconType: 'cava'
  },
  {
    id: 'triton',
    name: 'Tritón F-350 / NPR',
    tag: 'Fletes Ágiles y Medianos',
    capacity: '3.5 a 5 Toneladas',
    volume: '15 a 25 m³',
    idealFor: ['Fletes interurbanos rápidos', 'Distribución de repuestos', 'Maquinaria mediana', 'Cargas ligeras urgentes'],
    features: ['Alta maniobrabilidad en ciudades', 'Barandas o plataforma abierta', 'Bajo costo por kilómetro'],
    iconType: 'triton'
  },
  {
    id: 'toronto',
    name: 'Camión Toronto / Volteo',
    tag: 'Construcción y Escombros',
    capacity: '12 a 20 Toneladas',
    volume: '10 a 16 m³',
    idealFor: ['Retiro y bote de escombros', 'Arena, piedra y agregados', 'Minería y canteras', 'Obras civiles'],
    features: ['Tolva basculante hidráulica', 'Estructura de acero reforzado', 'Doble tracción en ejes traseros'],
    iconType: 'toronto'
  },
  {
    id: 'batea',
    name: 'Batea / Plataforma',
    tag: 'Carga Pesada e Industrial',
    capacity: '25 a 35 Toneladas',
    volume: 'Plataforma 12 a 13.5 metros',
    idealFor: ['Cabillas y perfiles de acero', 'Contenedores marítimos', 'Tuberías y madera', 'Maquinaria industrial'],
    features: ['Plataforma libre con estacas de amarre', 'Twistlocks para contenedores', 'Suspensión neumática para carga pesada'],
    iconType: 'batea'
  },
  {
    id: 'gandola',
    name: 'Gandola / Chuto Granelero',
    tag: 'Graneles y Cargas Masivas',
    capacity: '30 a 40 Toneladas',
    volume: '45 a 70 m³',
    idealFor: ['Cosechas agrícolas a granel (maíz, caña, arroz)', 'Fertilizantes y granos industriales', 'Cargas masivas interregionales'],
    features: ['Tolvas con descarga rápida inferior', 'Encarpado hermético impermeable', 'Máxima eficiencia por tonelada/km'],
    iconType: 'gandola'
  },
  {
    id: 'maquinaria',
    name: 'Maquinaria Pesada & Línea Amarilla',
    tag: 'Movimiento de Tierra y Faena Agrícola',
    capacity: '15 a 45 Toneladas',
    volume: 'Por Jornada (8h) o por Horómetro',
    idealFor: [
      'Retroexcavadoras, Jumbos y Payloaders',
      'Tractores agrícolas y preparación de tierras',
      'Motoniveladoras y vibrocompactadores de vialidad',
      'Obras civiles, canteras y movimientos de tierra'
    ],
    features: [
      'Tarifas por Jornada (8h) o por Hora registradas en USD',
      'Operador calificado y certificado en faena (opcional)',
      'Suministro de combustible configurable (incluido o cliente)',
      'Traslado en Lowboy o Batea coordinado en la misma app'
    ],
    iconType: 'batea'
  }
];

// Catálogo Especializado de Alquiler de Maquinaria Pesada
export const MACHINERY_CATALOG: VehicleSpec[] = [
  {
    id: 'jumbo',
    name: 'Excavadora de Oruga (Jumbo CAT 320 / 330)',
    tag: 'Excavación Pesada y Canteras',
    capacity: '20 a 35 Toneladas',
    volume: 'Balde de 1.2 a 2.0 m³',
    idealFor: ['Excavación en roca y zanjas profundas', 'Movimiento masivo de tierra', 'Canteras, minería y dragado', 'Demolición de estructuras'],
    features: ['Tarifa por Jornada (8h) o por Horómetro', 'Operador de oruga certificado', 'Oruga de acero de alta tracción', 'Traslado en Lowboy coordinado en app'],
    iconType: 'batea'
  },
  {
    id: 'retroexcavadora',
    name: 'Retroexcavadora Mixta (CAT 416 / 420)',
    tag: 'Obras Civiles y Agro',
    capacity: '7.5 a 10 Toneladas',
    volume: 'Cargador frontal 1 m³ + Brazo 0.3 m³',
    idealFor: ['Zanjeo para tuberías y acueductos', 'Limpieza de fincas y canales de riego', 'Carga de camiones volteo / toronto', 'Construcción urbana y rural'],
    features: ['Brazo extensible y balde frontal basculante', 'Tracción 4x4 todoterreno', 'Opción con o sin combustible', 'Desplazamiento ágil en obra'],
    iconType: 'batea'
  },
  {
    id: 'payloader',
    name: 'Cargador Frontal / Payloader (CAT 950 / 966)',
    tag: 'Carga Masiva de Agregados',
    capacity: '18 a 25 Toneladas',
    volume: 'Balde de 2.5 a 4.0 m³',
    idealFor: ['Carga rápida de gandolas y torontos', 'Acopio de arena, grava y piedra picada', 'Silos de granos y fertilizantes', 'Plantas de asfalto y concreto'],
    features: ['Articulación hidráulica de giro rápido', 'Ciclos de carga inferiores a 30 segundos', 'Cabina climatizada con telemetría', 'Operador de pala certificado'],
    iconType: 'batea'
  },
  {
    id: 'patrol',
    name: 'Motoniveladora / Patrol (CAT 120 / 140)',
    tag: 'Vialidad y Preparación de Suelos',
    capacity: '14 a 19 Toneladas',
    volume: 'Cuchilla vertedera 3.7 a 4.3 m',
    idealFor: ['Perfilado y nivelación de carreteras', 'Caminos de penetración agrícola', 'Preparación de terraplenes para galpones', 'Mantenimiento de pistas y accesos'],
    features: ['Cuchilla con rotación de 360 grados', 'Escarificador trasero (ripper)', 'Precisión milimétrica de rasante', 'Alquiler por jornada de 8h'],
    iconType: 'batea'
  },
  {
    id: 'lowboy',
    name: 'Camión Lowboy / Cuello de Ganso',
    tag: 'Traslado Especial de Maquinaria',
    capacity: '35 a 60 Toneladas',
    volume: 'Cama baja 0.6m altura sobre suelo',
    idealFor: ['Movilización de jumbos, payloaders y tractores', 'Traslado de transformadores y calderas', 'Logística interurbana de equipos amarillos', 'Permisos viales especiales'],
    features: ['Rampas de acceso de alta resistencia', 'Ejes reforzados con suspensión neumática', 'Acompañamiento y escolta vial opcional', 'Seguro de traslado por evento'],
    iconType: 'batea'
  }
];

// Preguntas Frecuentes Sincronizadas con la App
export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'general',
    question: '¿Qué es RVTER y en qué se diferencia de un flete tradicional?',
    answer: 'RVTER es la plataforma tecnológica que conecta directamente a dueños de carga con transportistas y operadores de maquinaria certificados en toda Venezuela. A diferencia del mercado informal, RVTER garantiza pagos seguros con custodia C2P protegida, rastreo GPS continuo y validación de documentos oficiales.'
  },
  {
    category: 'maquinaria',
    question: '¿Cómo funciona el marketplace de maquinaria pesada en RVTER?',
    answer: 'RVTER no posee ni arrienda maquinaria propia; funciona como un marketplace tecnológico donde dueños y empresas de maquinaria pesada certificadas publican sus equipos disponibles (Jumbos, Retroexcavadoras, Payloaders, Motoniveladoras, Vibrocompactadores y Grúas). Como cliente o contratista, puedes contactar y cotizar directamente con los propietarios por Jornada (8 horas) o por Horómetro, pactar si incluye operador y combustible, coordinar el traslado en camión Lowboy y resguardar el pago mediante custodia fiduciaria C2P.'
  },
  {
    category: 'maquinaria',
    question: '¿Cómo pueden los dueños de maquinaria publicar sus equipos en RVTER?',
    answer: 'Los propietarios o empresas contratistas registran sus unidades en la plataforma subiendo los documentos de propiedad y ficha técnica. Una vez verificados, sus equipos se publican en el marketplace geolocalizado, permitiéndoles recibir solicitudes de trabajo directamente de empresas agrícolas, industriales y de construcción sin comisionistas informales.'
  },
  {
    category: 'pagos',
    question: '¿Cuándo se realiza el pago y cuándo acude el transportista a buscar la carga?',
    answer: 'El pago se realiza en su totalidad antes de comenzar el viaje. Al acordar un flete o servicio de maquinaria, el usuario deposita mediante Pago Móvil C2P o transferencia bancaria. Cuando el dinero está confirmado en custodia, el transportista busca la carga y comienza el viaje; el transportista nunca va a buscar la carga sin antes tener el pago en custodia garantizado. Solo cuando el receptor certifica la entrega conforme en destino o culminación de faena mediante el código de entrega, el sistema transfiere los fondos automáticamente.'
  },
  {
    category: 'seguridad',
    question: '¿Cuál es la diferencia entre el PIN de Cabina y el Código de Entrega en Destino?',
    answer: 'El PIN de Cabina es un código temporal que el transportista o dueño de unidad genera para que el chofer acceda de inmediato al Modo Cabina en carretera sin compartir credenciales. El Código de Entrega en Destino es el código que el receptor entrega al chofer al verificar la carga; al ingresarlo en la app, se valida la descarga y se liberan automáticamente los fondos en custodia de pago.'
  },
  {
    category: 'conductores',
    question: '¿Cómo funciona el sistema de ofertas y contraofertas?',
    answer: 'Cuando un usuario publica un flete con un precio propuesto, los transportistas certificados pueden postularse aceptando esa tarifa o enviando una contraoferta directa (counter-price). El usuario evalúa el perfil, camión y contraoferta para adjudicar el viaje de inmediato.'
  },
  {
    category: 'conductores',
    question: '¿Cómo me ayuda RVTER a evitar retornos vacíos?',
    answer: 'La meta central de RVTER es lograr cero retornos vacíos. La plataforma permite a los transportistas registrar su ruta planificada de regreso; si viajaste con carga en un trayecto, el sistema te enlaza de inmediato con cargas disponibles hacia tu origen o ciudades intermedias, asegurando que ruedes siempre con flete asignado y maximices tu rentabilidad.'
  },
  {
    category: 'seguridad',
    question: '¿Qué ocurre si se pierde la señal celular durante el viaje?',
    answer: 'La app móvil de RVTER cuenta con tecnología Offline Sync. El teléfono sigue guardando las coordenadas satelitales GPS y eventos de telemetría en su memoria encriptada y, tan pronto detecta señal o conexión de datos, sincroniza el historial completo sin perder el registro del recorrido.'
  },
  {
    category: 'seguridad',
    question: '¿Cómo se manejan las Guías Únicas de Movilización?',
    answer: 'Al publicar una carga, el usuario puede adjuntar el número o código de su Guía Única de Movilización. El transportista y las autoridades pueden verificar en la app la vigencia del documento mediante cruce digital, agilizando el paso por puntos de control y alcabalas.'
  },
  {
    category: 'conductores',
    question: '¿Qué requisitos necesito para registrarme como transportista o maquinaria?',
    answer: 'Solo necesitas tu documento de identidad (Cédula/RIF), Licencia de Conducir (5ta grado para carga pesada), Certificado Médico Vial vigente y el Título de Propiedad o carnet de circulación del vehículo (o autorización legal si no eres el propietario directo). La verificación toma pocos minutos gracias a nuestro sistema de validación digital.'
  }
];
