import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export interface StepTranslation {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  highlight: string;
}

export interface PillarTranslation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  statLabel: string;
  statValue: string;
}

export interface FaqTranslation {
  category: 'general' | 'pagos' | 'seguridad' | 'conductores' | 'maquinaria';
  question: string;
  answer: string;
}

export interface Translations {
  navbar: {
    announcement: string;
    howItWorks: string;
    security: string;
    faq: string;
    explore: string;
    closeMenu: string;
    openMenu: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    subtitlePart1: string;
    subtitleHighlight: string;
    badgeEscrow: string;
    badgeCoverage: string;
    phoneAlt: string;
    // Left Cards
    left1Title: string;
    left1Badge: string;
    left1Desc: string;
    left2Title: string;
    left2Badge: string;
    left2Desc: string;
    left3Title: string;
    left3Badge: string;
    left3Desc: string;
    // Right Cards
    right1Title: string;
    right1Badge: string;
    right1Desc: string;
    right2Title: string;
    right2Badge: string;
    right2Desc: string;
    right3Title: string;
    right3Badge: string;
    right3Desc: string;
  };
  roles: {
    badge: string;
    title: string;
    desc: string;
    userTab: string;
    driverTab: string;
    userSteps: StepTranslation[];
    driverSteps: StepTranslation[];
  };
  security: {
    badge: string;
    title: string;
    desc: string;
    pillars: PillarTranslation[];
  };
  faq: {
    badge: string;
    title: string;
    desc: string;
    catAll: string;
    catGeneral: string;
    catPayments: string;
    catSecurity: string;
    catDrivers: string;
    catMachinery: string;
    items: FaqTranslation[];
  };
  footer: {
    desc: string;
    slogan: string;
    navTitle: string;
    legalTitle: string;
    terms: string;
    privacy: string;
    rights: string;
  };
}

const translationsData: Record<Language, Translations> = {
  es: {
    navbar: {
      announcement: 'CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS',
      howItWorks: 'Cómo Funciona',
      security: 'Seguridad & GPS',
      faq: 'Preguntas Frecuentes',
      explore: 'Explorar',
      closeMenu: 'Cerrar Menú',
      openMenu: 'Abrir Menú',
    },
    hero: {
      titlePrefix: 'El Control De Tu Carga',
      titleHighlight: 'En Tiempo Real',
      subtitlePart1: 'El marketplace donde dueños de carga conectan con transportistas y maquinaria en Venezuela, con pagos en custodia previa y la meta de',
      subtitleHighlight: 'Cero Retornos Vacíos',
      badgeEscrow: 'Custodia 100% Protegida',
      badgeCoverage: 'Cobertura Nacional',
      phoneAlt: 'RVTER GPS Satelital En Vivo - Ruta Activa Barquisimeto a Caracas',
      left1Title: 'Custodia C2P Confirmada',
      left1Badge: 'Ahora',
      left1Desc: 'Fondos en custodia antes de cargar. El chofer inicia viaje seguro.',
      left2Title: 'Ruta: Barquisimeto → Caracas',
      left2Badge: 'En Ruta',
      left2Desc: '78 km/h • Telemetría satelital en vivo y geocerca activa.',
      left3Title: 'Regla de Seguridad',
      left3Badge: 'Estricta',
      left3Desc: 'El transportista nunca va a buscar la carga sin pago en custodia.',
      right1Title: 'Jumbo CAT 320D Contratado',
      right1Badge: 'Maquinaria',
      right1Desc: 'Cotización por horómetro directo con el propietario.',
      right2Title: 'Offline Sync Activo',
      right2Badge: 'Garantía',
      right2Desc: 'Registro continuo de ruta en tramos sin señal celular.',
      right3Title: 'Retorno Vacío Evitado',
      right3Badge: 'Meta Lograda',
      right3Desc: 'Viaje de regreso enlazado con carga agrícola hacia origen.',
    },
    roles: {
      badge: 'Flujo Operativo Paso a Paso',
      title: '¿Cómo funciona el servicio de fletes y maquinaria?',
      desc: 'Un marketplace transparente y directo: publica requerimientos de fletes o contrata maquinaria pesada directamente con sus propietarios certificados.',
      userTab: 'Dueño de Carga o Contratante',
      driverTab: 'Transportista o Dueño de Maquinaria',
      userSteps: [
        {
          number: '01',
          title: 'Publica tu Carga o Requerimiento de Maquinaria',
          shortDesc: 'Indica origen, destino, tipo de producto, o el equipo pesado que necesitas para tu obra.',
          fullDesc: 'Define tu necesidad: flete terrestre (Agropecuario, Mercancía General, Graneles) o alquiler de maquinaria en nuestro marketplace. Puedes cotizar directamente con propietarios verificados y calcular tarifas con la Brújula de Costos.',
          badge: 'Sin Costo Inicial',
          highlight: 'Marketplace directo con propietarios y Brújula de Costos'
        },
        {
          number: '02',
          title: 'Recibe Ofertas y Negocia Contraofertas en Vivo',
          shortDesc: 'Conductores certificados envían cotizaciones y puedes contraofertar al instante.',
          fullDesc: 'Visualiza la reputación del transportista (1 a 5 estrellas), historial de viajes completados, modelo de vehículo y placas verificadas. Acepta la tarifa o envía una contraoferta directa para cerrar el flete.',
          badge: 'Negociación Transparente',
          highlight: 'Comparación en vivo y contraoferta directa (counter-price)'
        },
        {
          number: '03',
          title: 'Custodia C2P (Pago Previo al Viaje)',
          shortDesc: 'Pagas antes de iniciar. El transportista solo busca la carga cuando los fondos están en custodia.',
          fullDesc: 'Pagas de forma segura vía Pago Móvil C2P o transferencia bancaria antes de iniciar. Únicamente cuando el dinero está confirmado en custodia neutral, el transportista acude a buscar la carga e inicia el viaje; nunca se busca la carga sin antes tener el pago en custodia garantizado.',
          badge: 'Pago Previo al Viaje',
          highlight: 'El transportista solo busca la carga tras confirmar el dinero en custodia'
        },
        {
          number: '04',
          title: 'Rastreo GPS & Sincronización Offline',
          shortDesc: 'Monitorea el avance del camión con telemetría continua incluso en tramos sin señal.',
          fullDesc: 'Visualiza la telemetría satelital en vivo en el mapa. En tramos de carretera sin cobertura celular, la app almacena localmente el recorrido y lo sincroniza de inmediato al recuperar señal.',
          badge: 'Monitoreo Satelital Continuo',
          highlight: 'Geocercas activas, sincronización offline en carretera y telemetría'
        },
        {
          number: '05',
          title: 'Entrega en Destino y Código de Liberación',
          shortDesc: 'Verifica la mercancía en destino, suministra el código de entrega y libera los fondos.',
          fullDesc: 'Al recibir la carga a satisfacción o certificar la faena en destino o almacén, entregas el código de entrega de seguridad. Al validarlo en la app, los fondos en custodia de pago se transfieren de forma irrevocable al transportista.',
          badge: 'Liberación Inmediata',
          highlight: 'Código de entrega en destino y liquidación bancaria instantánea'
        }
      ],
      driverSteps: [
        {
          number: '01',
          title: 'Registro y Verificación KYC de Unidad o Maquinaria',
          shortDesc: 'Sube tu Cédula, Licencia, RIF y documentación de tu camión o equipo pesado.',
          fullDesc: 'Validamos la titularidad de tu unidad o maquinaria pesada para otorgarte el sello certificado. Dueños de equipos pesados pueden publicar su maquinaria para recibir ofertas de contratación directa.',
          badge: 'Verificación Digital KYC',
          highlight: 'Certificación oficial de choferes, unidades y maquinaria'
        },
        {
          number: '02',
          title: 'Marketplace de Cargas, Faenas y Cero Retornos Vacíos',
          shortDesc: 'Dueños de camiones y maquinaria reciben solicitudes directas de clientes sin intermediarios informales.',
          fullDesc: 'Accede a la bolsa de fletes y requerimientos de obra. Para transportistas, la meta operativa es lograr cero retornos vacíos enlazando viajes de regreso. Para dueños de maquinaria, el marketplace te conecta con contratistas que requieren tus equipos en su zona.',
          badge: 'Meta Cero Retornos Vacíos',
          highlight: 'Filtro por unidad o maquinaria y conexión directa con clientes'
        },
        {
          number: '03',
          title: 'Garantía de Pago Previo y Modo Cabina',
          shortDesc: 'Cero riesgos: nunca buscas la carga sin antes tener el pago en custodia garantizado.',
          fullDesc: 'Antes de mover tu unidad o acudir al origen, tienes la certeza de que el cliente depositó el flete en Custodia C2P. El transportista acude a buscar la carga y comienza el viaje únicamente cuando el dinero está en custodia; nunca vas a buscar la carga sin el pago previamente resguardado. Además, accedes a tu hoja de ruta con tu PIN de Cabina temporal.',
          badge: 'Cobro Garantizado Previo a Cargar',
          highlight: 'Solo buscas la carga y viajas con los fondos confirmados en custodia'
        },
        {
          number: '04',
          title: 'Conducción en Ruta & Guías de Movilización',
          shortDesc: 'Navegación GPS, verificación de Guías Únicas de Movilización y telemetría.',
          fullDesc: 'Transmite telemetría en tiempo real mientras conduces con registro continuo aun sin señal celular. Verifica los datos de la Guía Única de Movilización para transitar sin demoras por alcabalas.',
          badge: 'Guías de Movilización',
          highlight: 'Validación de Guías Únicas de Movilización y telemetría Offline'
        },
        {
          number: '05',
          title: 'Liquidación al Instante con Código de Entrega',
          shortDesc: 'El receptor suministra el código en destino y el Pago Móvil se liquida de inmediato.',
          fullDesc: 'Al descargar en destino o finalizar la faena de maquinaria, el receptor o contratante te entrega el código de confirmación. Al ingresarlo en la app, la custodia de pago se libera automáticamente a tu cuenta bancaria.',
          badge: 'Pago Móvil Automático',
          highlight: 'Liquidación automática por validación en destino'
        }
      ]
    },
    security: {
      badge: 'Infraestructura Tecnológica & Seguridad',
      title: 'Tecnología robusta diseñada para las carreteras de Venezuela',
      desc: 'Mecanismos de protección fiduciaria, telemetría satelital sin dependencia de cobertura y cumplimiento normativo integral.',
      pillars: [
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
          statLabel: 'Validación',
          statValue: 'Guías de Movilización'
        }
      ]
    },
    faq: {
      badge: 'Resolución de Dudas',
      title: 'Preguntas Frecuentes',
      desc: 'Todo lo que necesitas saber sobre pagos en custodia, contratación de maquinaria y seguridad vial en RVTER.',
      catAll: 'Todas',
      catGeneral: 'General',
      catPayments: 'Pagos y Custodia',
      catSecurity: 'Seguridad y GPS',
      catDrivers: 'Transportistas',
      catMachinery: 'Maquinaria',
      items: [
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
      ]
    },
    footer: {
      slogan: 'CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS.',
      desc: 'El ecosistema tecnológico líder de transporte de carga y alquiler de maquinaria pesada en Venezuela con custodia previa protegida y telemetría continua.',
      navTitle: 'Navegación',
      legalTitle: 'Legal y Transparencia',
      terms: 'Términos y Condiciones',
      privacy: 'Política de Privacidad',
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    navbar: {
      announcement: 'PROTECTED CARGO, SECURE PAYMENTS AND FULL ROUTES',
      howItWorks: 'How It Works',
      security: 'Security & GPS',
      faq: 'FAQ',
      explore: 'Explore',
      closeMenu: 'Close Menu',
      openMenu: 'Open Menu',
    },
    hero: {
      titlePrefix: 'Real-Time Control',
      titleHighlight: 'Of Your Cargo',
      subtitlePart1: 'The marketplace connecting cargo owners with certified carriers and heavy machinery in Venezuela, with protected advance escrow payments and the goal of',
      subtitleHighlight: 'Zero Empty Returns',
      badgeEscrow: '100% Protected Escrow',
      badgeCoverage: 'National Coverage',
      phoneAlt: 'RVTER Live Satellite GPS - Active Route Barquisimeto to Caracas',
      left1Title: 'C2P Escrow Confirmed',
      left1Badge: 'Now',
      left1Desc: 'Funds held in escrow prior to loading. Driver starts a safe journey.',
      left2Title: 'Route: Barquisimeto → Caracas',
      left2Badge: 'En Route',
      left2Desc: '78 km/h • Live satellite telemetry and active geofencing.',
      left3Title: 'Security Rule',
      left3Badge: 'Strict',
      left3Desc: 'The carrier never picks up cargo without payment held in escrow.',
      right1Title: 'CAT 320D Excavator Hired',
      right1Badge: 'Machinery',
      right1Desc: 'Direct hour-meter quoting directly with the verified owner.',
      right2Title: 'Offline Sync Active',
      right2Badge: 'Guarantee',
      right2Desc: 'Continuous route logging through areas without cellular reception.',
      right3Title: 'Empty Return Prevented',
      right3Badge: 'Goal Met',
      right3Desc: 'Return haul matched with agricultural freight back to origin.',
    },
    roles: {
      badge: 'Step-by-Step Operational Flow',
      title: 'How does freight and machinery rental work?',
      desc: 'A transparent, direct marketplace: post freight loads or hire heavy equipment directly from verified certified owners.',
      userTab: 'Cargo Owner & Contractor',
      driverTab: 'Carrier & Machinery Owner',
      userSteps: [
        {
          number: '01',
          title: 'Post your Freight or Heavy Machinery Request',
          shortDesc: 'Specify origin, destination, cargo type, or the heavy equipment needed for your job.',
          fullDesc: 'Define your requirement: ground freight (Agricultural, General Merchandise, Bulk) or heavy equipment rental. Quote directly with verified owners and calculate fair rates with the Cost Compass.',
          badge: 'No Upfront Cost',
          highlight: 'Direct marketplace with equipment owners and Cost Compass'
        },
        {
          number: '02',
          title: 'Receive Real-Time Offers & Counter-Offers',
          shortDesc: 'Certified drivers submit bids and you can counter-offer instantly.',
          fullDesc: 'Review carrier reputation (1 to 5 stars), completed trips history, vehicle model, and verified license plates. Accept the rate or submit an instant counter-offer to book the load.',
          badge: 'Transparent Bidding',
          highlight: 'Live bid comparisons and direct counter-offers (counter-price)'
        },
        {
          number: '03',
          title: 'C2P Neutral Escrow (Pre-Trip Payment)',
          shortDesc: 'Pay securely in advance. Carriers only load once funds are safely held in escrow.',
          fullDesc: 'Pay safely via C2P Mobile Payment or bank transfer before dispatch. Only when money is locked in neutral custody does the carrier head to the pickup site; pickups are never done without secured escrow.',
          badge: 'Pre-Trip Secured Payment',
          highlight: 'Carriers only pick up cargo once escrow funds are fully confirmed'
        },
        {
          number: '04',
          title: 'Satellite GPS & Highway Offline Sync',
          shortDesc: 'Track truck progression with continuous telemetry even through blind zones.',
          fullDesc: 'Watch live satellite telemetry on the interactive map. Across highway corridors without cell signal, the app securely stores telemetry and auto-syncs as soon as connection restores.',
          badge: 'Continuous Telemetry',
          highlight: 'Active geofencing, highway offline sync, and real-time telemetry'
        },
        {
          number: '05',
          title: 'Destination Delivery & Release PIN',
          shortDesc: 'Inspect merchandise upon arrival, share delivery code, and release funds.',
          fullDesc: 'Once goods arrive safely or machine work is inspected, supply the secure delivery code. Once verified in-app, escrow funds transfer irrevocably to the carrier.',
          badge: 'Instant Settlement',
          highlight: 'Destination delivery PIN and instant automatic bank settlement'
        }
      ],
      driverSteps: [
        {
          number: '01',
          title: 'Digital KYC Verification of Vehicle or Machinery',
          shortDesc: 'Upload your ID, Driver License, Tax ID (RIF), and vehicle or equipment title.',
          fullDesc: 'We authenticate vehicle ownership and operator licenses to grant verified certification badges. Equipment owners can list their fleet to receive direct job requests.',
          badge: 'Digital KYC Verification',
          highlight: 'Official verification for drivers, trucks, and heavy machinery'
        },
        {
          number: '02',
          title: 'Freight Marketplace & Zero Empty Returns',
          shortDesc: 'Truck and machine owners receive direct requests without informal middlemen.',
          fullDesc: 'Access load boards and project jobs. For carriers, the operational goal is zero empty returns by booking backhaul loads. For machine owners, match with nearby projects seeking your units.',
          badge: 'Zero Empty Returns Goal',
          highlight: 'Filter by equipment and connect directly with shippers'
        },
        {
          number: '03',
          title: 'Guaranteed Advance Escrow & Cabin Mode',
          shortDesc: 'Zero payment risk: never drive to pickup without payment held in escrow.',
          fullDesc: 'Before moving your unit, you have complete peace of mind that the shipper locked payment in C2P Escrow. You only head to the loading dock once funds are confirmed; never work on unbacked promises. Access your dispatch route with your temporary Cabin PIN.',
          badge: 'Guaranteed Payment Before Pickup',
          highlight: 'Only drive to load with funds confirmed in neutral custody'
        },
        {
          number: '04',
          title: 'Route Navigation & Transit Clearance Guides',
          shortDesc: 'GPS navigation, transit guides digital verification, and telemetry.',
          fullDesc: 'Stream telemetry in real time with continuous logging even without cellular service. Verify official transit clearance documentation to pass through highway checkpoints without delay.',
          badge: 'Transit Documentation',
          highlight: 'Digital documentation checks and offline highway telemetry'
        },
        {
          number: '05',
          title: 'Instant Payout upon Destination Verification',
          shortDesc: 'Recipient shares the code at delivery and payment is settled immediately.',
          fullDesc: 'Upon unloading at destination or concluding machine shifts, the receiving party provides the completion code. Entering it triggers automatic escrow release directly to your account.',
          badge: 'Instant Automated Payout',
          highlight: 'Instant payout release verified on-site'
        }
      ]
    },
    security: {
      badge: 'Technology Infrastructure & Security',
      title: 'Resilient technology built for Venezuelan roads',
      desc: 'Neutral escrow protection, cell-independent satellite telemetry, and comprehensive regulatory compliance.',
      pillars: [
        {
          id: 'custodia',
          title: 'C2P Escrow & Dual Validation',
          subtitle: 'Carriers only pick up cargo once payment is securely locked in escrow.',
          description: 'RVTER acts as a neutral fiduciary intermediary. The client deposits 100% of the freight into protected escrow before loading begins. The driver only heads to the loading dock when funds are confirmed; trips are never initiated without guaranteed escrow. Two-factor operation: Cabin PIN on the road and Delivery Code at destination to release funds.',
          bulletPoints: [
            'Mandatory advance payment: drivers only proceed to load with confirmed escrow.',
            'Zero unprotected trips: never drive to pick up cargo without secured funds.',
            'Cabin PIN: Fast, credential-free route and telemetry access for drivers.',
            'Destination Delivery PIN: Irrevocable release of funds upon signed inspection.'
          ],
          statLabel: 'Secure Transactions',
          statValue: '100%'
        },
        {
          id: 'gps',
          title: 'Satellite GPS & Offline Sync',
          subtitle: 'Continuous highway telemetry guaranteed even through blind cell zones.',
          description: 'The mobile app broadcasts satellite trip telemetry. If cellular reception drops along the road, the offline sync module stores data in local encrypted memory and syncs immediately upon reconnecting.',
          bulletPoints: [
            'Live visual map tracking with dynamic speed and ETA calculations.',
            'Offline Sync technology: uninterrupted highway tracking with zero data loss.',
            'Verified route history logs to support any contingency or audit.',
            'Automated alerts for detours, unexpected stops, and route anomalies.'
          ],
          statLabel: 'Satellite Accuracy',
          statValue: 'Sub-metric'
        },
        {
          id: 'guias',
          title: 'Transit Clearance Guides',
          subtitle: 'Digital matching and verification of Transit Mobilization Guides.',
          description: 'RVTER includes digital verification and reading of Mobilization Guides, cross-checking driver, assigned vehicle, and cargo category to streamline transit through highway checkpoints.',
          bulletPoints: [
            'Instant digital parsing of transit guide identifiers and QR codes.',
            'Exact consistency check between assigned vehicle, driver, and freight type.',
            'Drastic reduction of waiting times at road checkpoints and tolls.',
            'Permanent digital archive linked to the dispatch order for auditing.'
          ],
          statLabel: 'Validation',
          statValue: 'Transit Clearance'
        }
      ]
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Common Questions',
      desc: 'Everything you need to know about protected escrow, equipment rental, and highway security on RVTER.',
      catAll: 'All',
      catGeneral: 'General',
      catPayments: 'Payments & Escrow',
      catSecurity: 'Security & GPS',
      catDrivers: 'Carriers',
      catMachinery: 'Heavy Machinery',
      items: [
        {
          category: 'general',
          question: 'What is RVTER and how does it differ from traditional freight?',
          answer: 'RVTER is the technology platform connecting cargo owners directly with certified carriers and heavy machinery operators across Venezuela. Unlike informal middlemen, RVTER guarantees secure payments through protected C2P escrow, continuous GPS tracking, and verified document checks.'
        },
        {
          category: 'maquinaria',
          question: 'How does the heavy machinery marketplace work on RVTER?',
          answer: 'RVTER does not own or rent its own machines; it functions as a digital marketplace where verified equipment owners list available units (Excavators, Backhoes, Wheel Loaders, Motor Graders, Compactors, and Cranes). As a client, you quote directly with owners per 8-hour shift or per hour-meter, agree on operator and fuel inclusion, arrange lowboy transport, and safeguard payments with C2P escrow.'
        },
        {
          category: 'maquinaria',
          question: 'How can machinery owners list their equipment on RVTER?',
          answer: 'Owners and contractor firms register their fleet by submitting ownership documents and technical specifications. Once verified, their equipment appears in the localized marketplace, enabling direct booking from agricultural, industrial, and construction clients without informal brokers.'
        },
        {
          category: 'pagos',
          question: 'When is payment made, and when does the carrier head to pick up the load?',
          answer: 'Full payment is deposited into escrow before the trip begins. When booking freight or machinery, the user deposits funds via C2P Mobile Payment or wire transfer. Only when money is locked in escrow does the carrier drive to load; carriers never pick up cargo without confirmed escrow. Once delivery is certified with the completion PIN, funds are automatically transferred.'
        },
        {
          category: 'seguridad',
          question: 'What is the difference between the Cabin PIN and Destination Delivery PIN?',
          answer: 'The Cabin PIN is a temporary access code generated for the driver to use Cabin Mode on the highway without sharing personal login credentials. The Destination Delivery PIN is provided by the consignee upon inspecting the delivered cargo; entering it validates delivery and instantly releases the escrow payment.'
        },
        {
          category: 'conductores',
          question: 'How does the bidding and counter-offer system work?',
          answer: 'When a shipper posts a freight request with a proposed rate, certified carriers can apply accepting that rate or submitting an instant counter-offer. The shipper reviews profiles, truck specifications, and counter-prices to book the trip immediately.'
        },
        {
          category: 'conductores',
          question: 'How does RVTER help carriers avoid empty return trips?',
          answer: 'The primary mission of RVTER is achieving zero empty returns. The platform allows carriers to declare their return route; while completing a delivery, the system matches available return freight heading back to origin or intermediate hubs, maximizing profitability.'
        },
        {
          category: 'seguridad',
          question: 'What happens if cellular signal is lost during transit?',
          answer: 'The RVTER mobile app features Offline Sync. The smartphone records GPS coordinates and telemetry events in local encrypted storage and seamlessly syncs the full route as soon as cell signal or data connectivity is re-established.'
        },
        {
          category: 'seguridad',
          question: 'How are official Mobilization Guides handled?',
          answer: 'When posting freight, shippers can attach their official Mobilization Guide code. Carriers and authorities can cross-reference document validity in-app, significantly speeding up highway checkpoint inspections.'
        },
        {
          category: 'conductores',
          question: 'What requirements are needed to sign up as a carrier or machine operator?',
          answer: 'You only need valid national identification, a heavy vehicle driver license, valid medical certificate, and vehicle or equipment title registration. Digital validation takes only a few minutes through our automated verification flow.'
        }
      ]
    },
    footer: {
      slogan: 'PROTECTED CARGO, SECURE PAYMENTS AND FULL ROUTES.',
      desc: 'The leading freight transportation and heavy machinery marketplace in Venezuela with protected advance escrow and continuous telemetry.',
      navTitle: 'Navigation',
      legalTitle: 'Legal & Compliance',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('rvter_lang');
    return saved === 'en' ? 'en' : 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('rvter_lang', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translationsData[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
