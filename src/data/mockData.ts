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
    title: 'Publica tu Carga en Minutos',
    shortDesc: 'Indica origen, destino, tipo de producto, peso y fecha de recogida.',
    fullDesc: 'Define el tipo de carga (Agropecuario, Mercancía General, Mudanza, Escombros, Graneles o Maquinaria). Agrega instrucciones de estiba y el sistema calculará una tarifa sugerida de mercado en tiempo real.',
    icon: 'PackagePlus',
    badge: 'Sin Costo Inicial',
    highlight: 'Selector multisectorial y cálculo automático de distancia'
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
    title: 'Custodia C2P (Pago 100% Protegido)',
    shortDesc: 'Tu dinero se resguarda en custodia neutra a tasa oficial BCV antes de iniciar viaje.',
    fullDesc: 'Pagas de forma segura vía Pago Móvil C2P o transferencia a la tasa oficial del BCV del día. El transportista sabe que el dinero está garantizado, pero los fondos quedan bloqueados en custodia hasta la entrega conforme en destino.',
    icon: 'ShieldCheck',
    badge: 'Custodia C2P Oficial BCV',
    highlight: 'Tasa oficial BCV y fondos retenidos hasta confirmación de entrega'
  },
  {
    number: '04',
    title: 'Rastreo GPS, Dashcam & Offline Sync',
    shortDesc: 'Monitorea el avance del camión con telemetría continua incluso en tramos sin señal.',
    fullDesc: 'Visualiza la telemetría satelital en vivo en el mapa. En tramos de carretera sin cobertura celular, la app almacena localmente el recorrido y lo sincroniza de inmediato al recuperar señal, con soporte de Dashcam para evidencia de viaje.',
    icon: 'MapPin',
    badge: 'Monitoreo Satelital Continuo',
    highlight: 'Geocercas activas, sincronización offline en carretera y telemetría'
  },
  {
    number: '05',
    title: 'Entrega en Romana y Código de Liberación',
    shortDesc: 'Verifica la mercancía en destino, suministra el código de entrega y libera los fondos.',
    fullDesc: 'Al recibir la carga a satisfacción o certificar la faena en romana/almacén, entregas el código de entrega de seguridad. Al validarlo en la app, los fondos en custodia de pago se transfieren de forma irrevocable al transportista.',
    icon: 'CheckCircle2',
    badge: 'Liberación Inmediata',
    highlight: 'Código de entrega en romana y liquidación bancaria instantánea'
  }
];

// Pasos para Transportistas y Operadores de Maquinaria (Rol: CARRIER)
export const DRIVER_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Registro y Verificación KYC de Unidad',
    shortDesc: 'Sube tu Cédula, Licencia (5ta), RIF y carnet de circulación del vehículo.',
    fullDesc: 'Nuestro sistema valida la titularidad del camión o autorización de manejo, antecedentes y documentación vial para otorgarte el distintivo de Transportista Certificado RVTER.',
    icon: 'UserCheck',
    badge: 'Verificación Digital KYC',
    highlight: 'Certificación oficial de chofer y unidad verificada'
  },
  {
    number: '02',
    title: 'Marketplace de Cargas y Retornos Vacíos',
    shortDesc: 'Postúlate a fletes en tu zona o cotiza viajes de regreso con contraofertas.',
    fullDesc: 'Accede a la bolsa de cargas filtradas por tipología de unidad (Cava, Tritón, Toronto, Batea, Gandola o Maquinaria). Envía tu contraoferta de tarifa y elimina los viajes de retorno vacíos para maximizar tus ingresos.',
    icon: 'Truck',
    badge: 'Cero Retornos Vacíos',
    highlight: 'Filtro inteligente por carrocería y contraoferta de tarifa'
  },
  {
    number: '03',
    title: 'Garantía de Pago Previo y Modo Cabina',
    shortDesc: 'Viaja con pago 100% garantizado y accede con tu PIN de Cabina sin fricciones.',
    fullDesc: 'Antes de arrancar, tienes la certeza de que el cliente depositó el flete en Custodia C2P protegida. Además, los conductores asignados acceden de forma expedita a su hoja de ruta con su PIN de Cabina temporal.',
    icon: 'BadgeDollarSign',
    badge: 'PIN de Cabina & Pago Protegido',
    highlight: 'Garantía de cobro antes de ruta y acceso rápido por PIN de Cabina'
  },
  {
    number: '04',
    title: 'Conducción en Ruta, Telemetría & SIGESAI',
    shortDesc: 'Navegación GPS, escaneo de guías INSAI y telemetría con soporte de Dashcam.',
    fullDesc: 'Transmite telemetría en tiempo real mientras conduces con registro continuo aun sin señal celular. Escanea el código QR de la Guía Única de Movilización SIGESAI para transitar sin demoras por alcabalas.',
    icon: 'Navigation',
    badge: 'Telemetría & SIGESAI',
    highlight: 'Validación fitosanitaria QR y telemetría de carretera Offline'
  },
  {
    number: '05',
    title: 'Liquidación al Instante con Código de Entrega',
    shortDesc: 'El receptor suministra el código en destino y el Pago Móvil se liquida de inmediato.',
    fullDesc: 'Al descargar en romana o finalizar la faena, el receptor te entrega el código de confirmación. Al ingresarlo en la app, la custodia de pago se libera automáticamente a tu cuenta bancaria a tasa oficial del día.',
    icon: 'Wallet',
    badge: 'Pago Móvil Automático',
    highlight: 'Liquidación automática por validación en romana/destino'
  }
];

// Pilares de Seguridad y Tecnología
export const SECURITY_PILLARS: PillarItem[] = [
  {
    id: 'custodia',
    title: 'Custodia C2P & Doble Validación',
    subtitle: 'Protección financiera bidireccional: Pago Móvil C2P a tasa oficial BCV.',
    description: 'RVTER actúa como intermediario fiduciario neutral. El cliente deposita el 100% en custodia C2P a tasa oficial BCV antes de iniciar la ruta. Para la operación se aplican dos niveles de seguridad: PIN de Cabina para el chofer en carretera y Código de Entrega en romana/destino para liberar los fondos.',
    bulletPoints: [
      'Depósito en custodia C2P y liquidación automática a tasa oficial BCV del día.',
      'PIN de Cabina: Acceso expedito del chofer a su hoja de ruta y telemetría.',
      'Código de Entrega en Romana: Liberación irrevocable de fondos al certificar la carga.',
      'Trazabilidad auditada con comprobante bancario digital descargable.'
    ],
    icon: 'Lock',
    accentColor: '#2DA933',
    statLabel: 'Transacciones Seguras',
    statValue: '100%'
  },
  {
    id: 'gps',
    title: 'Rastreo GPS, Dashcam & Offline Sync',
    subtitle: 'Telemetría continua de carretera garantizada aun en zonas sin cobertura celular.',
    description: 'La app móvil transmite la posición satelital del viaje. Si la señal se interrumpe en carretera, el módulo OfflineSyncManager almacena la telemetría y eventos de Dashcam en memoria local y los sincroniza de inmediato al recuperar conectividad.',
    bulletPoints: [
      'Seguimiento visual en vivo con cálculo dinámico de velocidad y tiempo estimado (ETA).',
      'Tecnología Offline Sync: telemetría continua ininterrumpida sin pérdida de paquetes.',
      'Soporte de Dashcam en ruta para respaldo visual ante eventualidades o disputas.',
      'Detección automática de desvíos, paradas no programadas y alertas de viaje.'
    ],
    icon: 'Radio',
    accentColor: '#3B82F6',
    statLabel: 'Precisión Satelital',
    statValue: 'Sub-métrica'
  },
  {
    id: 'sigesai',
    title: 'Validación Digital SIGESAI / INSAI',
    subtitle: 'Cruce óptico de Guías Únicas de Movilización fitosanitarias y de insumos.',
    description: 'Para cargas del sector agropecuario, RVTER incorpora un validador con lectura OCR de Guías Únicas de Movilización SIGESAI emitidas por el INSAI, cruzando RIF, placa del vehículo y rubro para evitar demoras en alcabalas.',
    bulletPoints: [
      'Escaneo óptico instantáneo de código QR y número de guía oficial SIGESAI.',
      'Cruce de concordancia entre vehículo asignado, transportista y rubro agropecuario.',
      'Reducción drástica de tiempos de espera en puntos de control y alcabalas viales.',
      'Archivo digital de la guía vinculado a la orden de flete para respaldo contable.'
    ],
    icon: 'QrCode',
    accentColor: '#F59E0B',
    statLabel: 'Cumplimiento Legal',
    statValue: 'INSAI / SIGESAI'
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
    answer: 'RVTER es la plataforma tecnológica que conecta directamente a dueños de carga con transportistas y operadores de maquinaria certificados en toda Venezuela. A diferencia del mercado informal, RVTER garantiza pagos seguros con custodia C2P protegida a tasa oficial BCV, rastreo GPS continuo, telemetría Dashcam y validación de documentos oficiales.'
  },
  {
    category: 'maquinaria',
    question: '¿Cómo funciona el alquiler de maquinaria pesada en RVTER?',
    answer: 'Puedes cotizar y contratar maquinaria pesada (Jumbos, Retroexcavadoras, Payloaders, Motoniveladoras, Vibrocompactadores y Grúas) por Jornada de trabajo (8 horas) o por Horómetro. Puedes acordar el servicio con operador calificado o sin él, definir el suministro de combustible (incluido o a cargo del cliente) y coordinar el traslado en camión Lowboy directamente dentro de la plataforma.'
  },
  {
    category: 'pagos',
    question: '¿Cómo funciona la custodia de pago (Custodia C2P) y la tasa de cambio?',
    answer: 'Al acordar un flete o servicio de maquinaria, el usuario deposita mediante Pago Móvil C2P o transferencia a la tasa oficial del BCV del día. Los fondos quedan bloqueados de forma neutral en la plataforma. Solo cuando el receptor certifica la entrega conforme en destino o culminación de faena mediante el código de entrega, el sistema transfiere los fondos automáticamente al transportista o contratista de maquinaria.'
  },
  {
    category: 'seguridad',
    question: '¿Cuál es la diferencia entre el PIN de Cabina y el Código de Entrega en Romana?',
    answer: 'El PIN de Cabina es un código temporal que el transportista o dueño de flota genera para que el chofer acceda de inmediato al Modo Cabina en carretera sin compartir credenciales. El Código de Entrega en Romana es el código que el receptor en destino entrega al chofer al verificar la carga; al ingresarlo en la app, se valida la descarga y se liberan automáticamente los fondos en custodia de pago.'
  },
  {
    category: 'conductores',
    question: '¿Cómo funciona el sistema de ofertas y contraofertas?',
    answer: 'Cuando un usuario publica un flete con un precio propuesto, los transportistas certificados pueden postularse aceptando esa tarifa o enviando una contraoferta directa (counter-price). El usuario evalúa el perfil, camión y contraoferta para adjudicar el viaje de inmediato.'
  },
  {
    category: 'conductores',
    question: '¿Cómo me ayuda RVTER a evitar retornos vacíos?',
    answer: 'Nuestra app permite a los transportistas registrar su ruta planificada de regreso. Si viajaste de Barquisimeto a Caracas con una carga, la plataforma te notificará fletes disponibles de Caracas hacia Barquisimeto u otras ciudades intermedias en tu ruta, maximizando tus ingresos.'
  },
  {
    category: 'seguridad',
    question: '¿Qué ocurre si se pierde la señal celular durante el viaje?',
    answer: 'La app móvil de RVTER cuenta con tecnología Offline Sync. El teléfono sigue guardando las coordenadas satelitales GPS y eventos de telemetría en su memoria encriptada y, tan pronto detecta señal o conexión de datos, sincroniza el historial completo sin perder el registro del recorrido.'
  },
  {
    category: 'seguridad',
    question: '¿Cómo se manejan las Guías SIGESAI / INSAI para rubros agrícolas?',
    answer: 'Al publicar una carga del sector Agropecuario, el generador puede adjuntar el número o código QR de su Guía SIGESAI. El transportista y las autoridades pueden verificar en la app la vigencia del documento mediante cruce óptico OCR, agilizando el paso por puntos de control y alcabalas.'
  },
  {
    category: 'conductores',
    question: '¿Qué requisitos necesito para registrarme como transportista o maquinaria?',
    answer: 'Solo necesitas tu documento de identidad (Cédula/RIF), Licencia de Conducir (5ta grado para carga pesada), Certificado Médico Vial vigente y el Título de Propiedad o carnet de circulación del vehículo (o autorización legal si no eres el propietario directo). La verificación toma pocos minutos gracias a nuestro sistema de validación digital.'
  }
];
