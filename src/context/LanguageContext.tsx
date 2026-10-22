import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export interface StepTranslation {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  highlight: string;
  you: string;
  rvter: string;
  payment: string;
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
      explore: 'Descargar',
      closeMenu: 'Cerrar Menú',
      openMenu: 'Abrir Menú',
    },
    hero: {
      titlePrefix: 'El Control De Tu Carga',
      titleHighlight: 'En Tiempo Real',
      subtitlePart1: 'El marketplace donde dueños de carga conectan con transportistas y maquinaria en Venezuela, con pago previo en custodia bancaria y la meta de',
      subtitleHighlight: 'Cero Retornos Vacíos',
      badgeEscrow: 'Pago en custodia bancaria',
      badgeCoverage: 'Cobertura Nacional',
      phoneAlt: 'RVTER Rastreo GPS en vivo - Ruta Activa Barquisimeto a Caracas',
      left1Title: 'Pago en Custodia Bancaria',
      left1Badge: 'Ahora',
      left1Desc: 'Fondos en custodia bancaria antes de cargar. El chofer inicia viaje seguro.',
      left2Title: 'Ruta: Barquisimeto → Caracas',
      left2Badge: 'En Ruta',
      left2Desc: '78 km/h • Rastreo GPS en vivo y geocerca activa.',
      left3Title: 'Regla de Seguridad',
      left3Badge: 'Estricta',
      left3Desc: 'El transportista nunca va a buscar la carga sin pago en custodia bancaria.',
      right1Title: 'Jumbo CAT 320D Contratado',
      right1Badge: 'Maquinaria',
      right1Desc: 'Cotización por horómetro directo con el propietario.',
      right2Title: 'Offline Sync Activo',
      right2Badge: 'Activo',
      right2Desc: 'Registro continuo de ruta en tramos sin señal celular.',
      right3Title: 'Retorno Vacío Evitado',
      right3Badge: 'Objetivo',
      right3Desc: 'Viaje de regreso enlazado con carga agrícola hacia origen.',
    },
    roles: {
      badge: 'Flujo Operativo Paso a Paso',
      title: '¿Cómo funciona el servicio de fletes y maquinaria?',
      desc: 'Un marketplace directo: publica requerimientos de fletes o contrata maquinaria pesada directamente con sus propietarios verificados.',
      userTab: 'Dueño de Carga o Contratante',
      driverTab: 'Transportista o Dueño de Maquinaria',
      userSteps: [
        {
          number: '01',
          title: 'Publica tu carga o maquinaria',
          shortDesc: 'Indica origen, destino y tipo de carga, o el equipo que necesitas.',
          fullDesc: 'Define tu necesidad: flete terrestre (agropecuario, mercancía general, graneles) o alquiler de maquinaria. Cotiza directamente con propietarios verificados y estima una tarifa de referencia con la Brújula de Costos.',
          badge: 'Tu solicitud',
          highlight: 'Marketplace directo con propietarios y Brújula de Costos',
          you: 'Describes tu carga o el equipo que necesitas, y su ubicación.',
          rvter: 'Publica tu solicitud para transportistas y propietarios verificados.',
          payment: 'Todavía no se paga nada: el pago se hace al acordar el servicio.'
        },
        {
          number: '02',
          title: 'Negocia ofertas',
          shortDesc: 'Los transportistas envían cotizaciones y puedes contraofertar.',
          fullDesc: 'Revisa la reputación del transportista (1 a 5 estrellas), su historial de viajes, el modelo de vehículo y las placas verificadas. Acepta la tarifa o envía una contraoferta para cerrar el flete.',
          badge: 'Ofertas y contraofertas',
          highlight: 'Comparación de ofertas y contraoferta directa',
          you: 'Comparas perfiles y aceptas una tarifa o envías una contraoferta.',
          rvter: 'Muestra la reputación, el historial y los datos verificados de cada oferta.',
          payment: 'Aún sin pago: el monto queda fijado al aceptar la oferta.'
        },
        {
          number: '03',
          title: 'Paga con custodia bancaria',
          shortDesc: 'Pagas antes de iniciar y el dinero queda en custodia bancaria.',
          fullDesc: 'Pagas por Pago Móvil C2P o transferencia bancaria antes de iniciar. El pago queda retenido en una institución bancaria autorizada y RVTER solo emite las instrucciones técnicas de liberación. El transportista acude a buscar la carga cuando el pago está confirmado en custodia bancaria.',
          badge: 'Pago previo al viaje',
          highlight: 'El transportista busca la carga con el pago confirmado en custodia bancaria',
          you: 'Pagas el monto acordado por Pago Móvil C2P o transferencia.',
          rvter: 'Confirma el pago en custodia bancaria y habilita al transportista.',
          payment: 'Queda retenido en el banco hasta que confirmes la entrega.'
        },
        {
          number: '04',
          title: 'Sigue tu viaje',
          shortDesc: 'Ve el avance del camión en el mapa durante el trayecto.',
          fullDesc: 'Consulta la posición del camión en el mapa. En tramos sin cobertura celular, la app guarda el recorrido en el teléfono y lo sincroniza al recuperar señal, por lo que en esos tramos la ruta se actualiza con retraso.',
          badge: 'Rastreo GPS',
          highlight: 'Mapa con ruta, hora estimada y sincronización offline',
          you: 'Sigues la ruta, la velocidad y la hora estimada de llegada.',
          rvter: 'Registra el recorrido y lo sincroniza al recuperar señal.',
          payment: 'El pago sigue retenido durante todo el viaje.'
        },
        {
          number: '05',
          title: 'Confirma con tu código',
          shortDesc: 'Entrega el código en destino para dar por recibida la carga.',
          fullDesc: 'Al recibir la carga a satisfacción o certificar la faena, entregas el código de entrega al transportista. Al ingresarlo en la app, RVTER instruye a la institución bancaria la liberación de los fondos retenidos al transportista.',
          badge: 'Código de entrega',
          highlight: 'RVTER instruye al banco la liberación con tu código',
          you: 'Verificas la carga o la faena y entregas el código de entrega.',
          rvter: 'Valida el código y envía la instrucción de liberación al banco.',
          payment: 'El banco libera los fondos; el plazo depende de la institución bancaria.'
        }
      ],
      driverSteps: [
        {
          number: '01',
          title: 'Regístrate y verifica tu unidad',
          shortDesc: 'Sube tu cédula, licencia, RIF y los documentos de tu camión o equipo.',
          fullDesc: 'Verificamos la titularidad de tu unidad o maquinaria y tus documentos para mostrar el sello de verificado en tu perfil. Los dueños de maquinaria pueden publicar sus equipos para recibir solicitudes directas.',
          badge: 'Verificación digital',
          highlight: 'Perfil verificado de choferes, unidades y maquinaria',
          you: 'Subes tus documentos personales y los de tu unidad o equipo.',
          rvter: 'Revisa la titularidad y marca tu perfil como verificado.',
          payment: 'Registras tu cuenta bancaria para recibir los pagos.'
        },
        {
          number: '02',
          title: 'Encuentra cargas y trabajos',
          shortDesc: 'Recibe solicitudes de clientes y envía tus ofertas.',
          fullDesc: 'Accede a los fletes y requerimientos de obra publicados. Si eres transportista, puedes registrar tu ruta de regreso para buscar carga hacia tu origen y reducir los viajes vacíos. Si eres dueño de maquinaria, el marketplace te conecta con contratistas que necesitan tus equipos en su zona.',
          badge: 'Cargas y faenas',
          highlight: 'Filtros por unidad o maquinaria y contacto directo con clientes',
          you: 'Eliges las solicitudes que se ajustan a tu unidad y envías tu oferta.',
          rvter: 'Muestra las solicitudes publicadas y te conecta con el cliente.',
          payment: 'Aún sin pago: se confirma cuando el cliente acepta tu oferta.'
        },
        {
          number: '03',
          title: 'Sal a cargar con el pago confirmado',
          shortDesc: 'Vas al origen cuando el pago ya está en custodia bancaria.',
          fullDesc: 'Antes de mover tu unidad, verás que el cliente ya pagó y que el monto está en custodia bancaria. Solo vas a buscar la carga con el pago confirmado. Con tu PIN de Cabina temporal accedes a tu hoja de ruta.',
          badge: 'Pago previo confirmado',
          highlight: 'Sales a cargar con el pago confirmado en custodia bancaria',
          you: 'Esperas la confirmación del pago antes de ir al origen.',
          rvter: 'Confirma el pago en custodia bancaria y te da acceso a la hoja de ruta con tu PIN de Cabina.',
          payment: 'El dinero está retenido en el banco; lo recibes al confirmarse la entrega.'
        },
        {
          number: '04',
          title: 'Conduce y adjunta tu guía',
          shortDesc: 'Navegación GPS y carga de la guía de movilización.',
          fullDesc: 'Mientras conduces, la app registra el recorrido aun sin señal celular y lo sincroniza al recuperar conexión. Puedes subir la Guía Única de Movilización para que sea revisada antes de salir al origen.',
          badge: 'Guía de movilización',
          highlight: 'Carga y revisión de la guía, y registro de ruta offline',
          you: 'Subes tu guía de movilización y conduces con la navegación GPS.',
          rvter: 'Registra el recorrido y guarda la guía junto a la orden de flete.',
          payment: 'El pago sigue retenido mientras viajas.'
        },
        {
          number: '05',
          title: 'Cobra con el código de entrega',
          shortDesc: 'El receptor te da el código en destino y RVTER instruye la liberación.',
          fullDesc: 'Al descargar en destino o finalizar la faena, el receptor o contratante te entrega el código de confirmación. Al ingresarlo en la app, RVTER instruye a la institución bancaria la liberación del pago a tu cuenta bancaria.',
          badge: 'Liberación por código',
          highlight: 'Liberación instruida al banco al validar la entrega',
          you: 'Ingresas en la app el código que te entrega el receptor.',
          rvter: 'Valida el código y envía la instrucción de liberación al banco.',
          payment: 'El banco acredita tu cuenta; el plazo depende de la institución.'
        }
      ]
    },
    security: {
      badge: 'Infraestructura Tecnológica & Seguridad',
      title: 'Tecnología robusta diseñada para las carreteras de Venezuela',
      desc: 'Custodia bancaria del pago, registro GPS con sincronización offline y revisión de guías de movilización.',
      pillars: [
        {
          id: 'custodia',
          title: 'Custodia bancaria y doble validación',
          subtitle: 'El transportista busca la carga cuando el pago está confirmado en custodia bancaria.',
          description: 'El pago queda retenido en una institución bancaria autorizada y RVTER solo emite las instrucciones técnicas de liberación. El cliente paga antes de comenzar la operación y el transportista busca la carga con el pago confirmado. Se aplican dos niveles de validación: PIN de Cabina en carretera y Código de Entrega en destino para liberar los fondos.',
          bulletPoints: [
            'Pago previo obligatorio: el transportista acude a cargar con el pago confirmado en custodia bancaria.',
            'Sin pago confirmado no se inicia el viaje.',
            'PIN de Cabina: acceso del chofer a su hoja de ruta y telemetría.',
            'Código de Entrega en Destino: con él, RVTER instruye al banco la liberación de los fondos.'
          ],
          statLabel: 'Pago',
          statValue: 'Custodia'
        },
        {
          id: 'gps',
          title: 'Rastreo GPS y sincronización offline',
          subtitle: 'Registro de ruta que continúa en zonas sin cobertura celular.',
          description: 'La app móvil registra la posición GPS del viaje. Si la señal se interrumpe en carretera, la app guarda el recorrido en el teléfono y lo envía al recuperar conectividad.',
          bulletPoints: [
            'Mapa con velocidad y hora estimada de llegada (ETA).',
            'Sincronización offline: el recorrido se guarda en el teléfono y se envía al reconectar.',
            'Historial de ruta como respaldo ante cualquier eventualidad.',
            'Alertas de desvíos y paradas no programadas.'
          ],
          statLabel: 'Rastreo',
          statValue: 'GPS'
        },
        {
          id: 'guias',
          title: 'Guías de movilización',
          subtitle: 'Carga y revisión de la Guía Única de Movilización del flete.',
          description: 'RVTER permite adjuntar la Guía Única de Movilización a la orden de flete para que sea revisada antes de salir al origen, y guarda una copia digital vinculada a la orden.',
          bulletPoints: [
            'Carga del documento o del código QR de la guía.',
            'Revisión, aprobación o rechazo antes de salir al origen.',
            'Copia digital vinculada a la orden de flete como respaldo.',
            'Motivo registrado cuando el documento se rechaza.'
          ],
          statLabel: 'Revisión',
          statValue: 'Guías'
        }
      ]
    },
    faq: {
      badge: 'Resolución de Dudas',
      title: 'Preguntas Frecuentes',
      desc: 'Todo lo que necesitas saber sobre pagos en custodia bancaria, contratación de maquinaria y seguridad vial en RVTER.',
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
          answer: 'RVTER es la plataforma tecnológica que conecta directamente a dueños de carga con transportistas y operadores de maquinaria verificados en toda Venezuela. A diferencia del mercado informal, RVTER ofrece pago previo en custodia bancaria, rastreo GPS con sincronización offline y revisión de documentos.'
        },
        {
          category: 'maquinaria',
          question: '¿Cómo funciona el marketplace de maquinaria pesada en RVTER?',
          answer: 'RVTER no posee ni arrienda maquinaria propia; funciona como un marketplace tecnológico donde dueños y empresas de maquinaria pesada verificadas publican sus equipos disponibles (Jumbos, Retroexcavadoras, Payloaders, Motoniveladoras, Vibrocompactadores y Grúas). Como cliente o contratista, puedes contactar y cotizar directamente con los propietarios por Jornada (8 horas) o por Horómetro, pactar si incluye operador y combustible, coordinar el traslado en camión Lowboy y resguardar el pago en custodia bancaria.'
        },
        {
          category: 'maquinaria',
          question: '¿Cómo pueden los dueños de maquinaria publicar sus equipos en RVTER?',
          answer: 'Los propietarios o empresas contratistas registran sus unidades en la plataforma subiendo los documentos de propiedad y ficha técnica. Una vez verificados, sus equipos se publican en el marketplace geolocalizado, permitiéndoles recibir solicitudes de trabajo directamente de empresas agrícolas, industriales y de construcción sin comisionistas informales.'
        },
        {
          category: 'pagos',
          question: '¿Cuándo se realiza el pago y cuándo acude el transportista a buscar la carga?',
          answer: 'El pago se realiza en su totalidad antes de comenzar el viaje. Al acordar un flete o servicio de maquinaria, el usuario deposita mediante Pago Móvil C2P o transferencia bancaria. Cuando el dinero está confirmado en custodia bancaria, el transportista busca la carga y comienza el viaje; el transportista nunca va a buscar la carga sin antes tener el pago confirmado en custodia bancaria. Solo cuando el receptor certifica la entrega conforme en destino o culminación de faena mediante el código de entrega, RVTER instruye a la institución bancaria la liberación de los fondos.'
        },
        {
          category: 'seguridad',
          question: '¿Cuál es la diferencia entre el PIN de Cabina y el Código de Entrega en Destino?',
          answer: 'El PIN de Cabina es un código temporal que el transportista o dueño de unidad genera para que el chofer acceda de inmediato al Modo Cabina en carretera sin compartir credenciales. El Código de Entrega en Destino es el código que el receptor entrega al chofer al verificar la carga; al ingresarlo en la app, se valida la descarga y RVTER instruye al banco la liberación de los fondos en custodia bancaria.'
        },
        {
          category: 'conductores',
          question: '¿Cómo funciona el sistema de ofertas y contraofertas?',
          answer: 'Cuando un usuario publica un flete con un precio propuesto, los transportistas verificados pueden postularse aceptando esa tarifa o enviando una contraoferta directa. El usuario evalúa el perfil, el camión y la contraoferta para adjudicar el viaje.'
        },
        {
          category: 'conductores',
          question: '¿Cómo me ayuda RVTER a evitar retornos vacíos?',
          answer: 'La meta de RVTER es reducir los retornos vacíos. La plataforma permite a los transportistas registrar su ruta de regreso para ver las cargas disponibles hacia su origen o ciudades intermedias, cuando las haya.'
        },
        {
          category: 'seguridad',
          question: '¿Qué ocurre si se pierde la señal celular durante el viaje?',
          answer: 'La app móvil de RVTER cuenta con tecnología Offline Sync. El teléfono sigue guardando las coordenadas satelitales GPS y eventos de telemetría en su memoria encriptada y, tan pronto detecta señal o conexión de datos, sincroniza el historial completo sin perder el registro del recorrido.'
        },
        {
          category: 'seguridad',
          question: '¿Cómo se manejan las Guías Únicas de Movilización?',
          answer: 'Al publicar una carga, el usuario puede adjuntar su Guía Única de Movilización. Un usuario de la plataforma la revisa en la app y la aprueba o rechaza antes de salir al origen; la copia digital queda vinculada a la orden de flete.'
        },
        {
          category: 'conductores',
          question: '¿Qué requisitos necesito para registrarme como transportista o maquinaria?',
          answer: 'Solo necesitas tu documento de identidad (Cédula/RIF), Licencia de Conducir (5ta grado para carga pesada), Certificado Médico Vial vigente y el Título de Propiedad o carnet de circulación del vehículo (o autorización legal si no eres el propietario directo). La verificación se realiza de forma digital.'
        }
      ]
    },
    footer: {
      slogan: 'CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS.',
      desc: 'Marketplace tecnológico de transporte de carga y alquiler de maquinaria pesada en Venezuela, con pago previo en custodia bancaria y rastreo GPS.',
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
      explore: 'Download',
      closeMenu: 'Close Menu',
      openMenu: 'Open Menu',
    },
    hero: {
      titlePrefix: 'Real-Time Control',
      titleHighlight: 'Of Your Cargo',
      subtitlePart1: 'The marketplace connecting cargo owners with verified carriers and heavy machinery in Venezuela, with advance payment in bank custody and the goal of',
      subtitleHighlight: 'Zero Empty Returns',
      badgeEscrow: 'Payment in bank custody',
      badgeCoverage: 'National Coverage',
      phoneAlt: 'RVTER Live GPS Tracking - Active Route Barquisimeto to Caracas',
      left1Title: 'Payment in Bank Custody',
      left1Badge: 'Now',
      left1Desc: 'Funds in bank custody before loading. Driver starts a safe journey.',
      left2Title: 'Route: Barquisimeto → Caracas',
      left2Badge: 'En Route',
      left2Desc: '78 km/h • Live GPS tracking and active geofencing.',
      left3Title: 'Security Rule',
      left3Badge: 'Strict',
      left3Desc: 'The carrier never picks up cargo without payment in bank custody.',
      right1Title: 'CAT 320D Excavator Hired',
      right1Badge: 'Machinery',
      right1Desc: 'Direct hour-meter quoting directly with the verified owner.',
      right2Title: 'Offline Sync Active',
      right2Badge: 'Active',
      right2Desc: 'Continuous route logging through areas without cellular reception.',
      right3Title: 'Empty Return Prevented',
      right3Badge: 'Goal',
      right3Desc: 'Return haul matched with agricultural freight back to origin.',
    },
    roles: {
      badge: 'Step-by-Step Operational Flow',
      title: 'How does freight and machinery rental work?',
      desc: 'A direct marketplace: post freight requests or hire heavy equipment directly from verified owners.',
      userTab: 'Cargo Owner & Contractor',
      driverTab: 'Carrier & Machinery Owner',
      userSteps: [
        {
          number: '01',
          title: 'Post your cargo or machinery',
          shortDesc: 'Specify origin, destination and cargo type, or the equipment you need.',
          fullDesc: 'Define your requirement: ground freight (agricultural, general merchandise, bulk) or heavy equipment rental. Quote directly with verified owners and estimate a reference rate with the Cost Compass.',
          badge: 'Your request',
          highlight: 'Direct marketplace with equipment owners and Cost Compass',
          you: 'You describe your cargo or the equipment you need, and where.',
          rvter: 'Publishes your request to verified carriers and owners.',
          payment: 'Nothing is paid yet: payment is made when you agree on the service.'
        },
        {
          number: '02',
          title: 'Negotiate offers',
          shortDesc: 'Carriers send quotes and you can counter-offer.',
          fullDesc: 'Review the carrier reputation (1 to 5 stars), trip history, vehicle model and verified license plates. Accept the rate or send a counter-offer to book the load.',
          badge: 'Offers and counter-offers',
          highlight: 'Offer comparison and direct counter-offers',
          you: 'You compare profiles and accept a rate or send a counter-offer.',
          rvter: 'Shows the reputation, history and verified data behind each offer.',
          payment: 'Still no payment: the amount is fixed when you accept an offer.'
        },
        {
          number: '03',
          title: 'Pay into bank custody',
          shortDesc: 'You pay before the trip and the money stays in bank custody.',
          fullDesc: 'Pay via C2P Mobile Payment or bank transfer before the trip starts. The payment is held at an authorized bank and RVTER only issues the technical release instructions. The carrier heads to the pickup once the payment is confirmed in bank custody.',
          badge: 'Pre-trip payment',
          highlight: 'The carrier picks up the cargo with payment confirmed in bank custody',
          you: 'You pay the agreed amount via C2P Mobile Payment or bank transfer.',
          rvter: 'Confirms the payment in bank custody and clears the carrier to go.',
          payment: 'It stays held at the bank until you confirm delivery.'
        },
        {
          number: '04',
          title: 'Follow your trip',
          shortDesc: 'See the truck progress on the map along the route.',
          fullDesc: 'Check the truck position on the map. In stretches without cell coverage the app stores the route on the phone and syncs it once signal returns, so the route updates with a delay in those stretches.',
          badge: 'GPS tracking',
          highlight: 'Map with route, ETA and offline sync',
          you: 'You follow the route, speed and estimated arrival time.',
          rvter: 'Records the route and syncs it when signal returns.',
          payment: 'The payment stays held for the whole trip.'
        },
        {
          number: '05',
          title: 'Confirm with your code',
          shortDesc: 'Share the code at destination to confirm receipt.',
          fullDesc: 'Once the cargo is received in good condition or the job is certified, you give the delivery code to the carrier. When it is entered in the app, RVTER instructs the bank to release the held funds to the carrier.',
          badge: 'Delivery code',
          highlight: 'RVTER instructs the bank to release funds with your code',
          you: 'You verify the cargo or the job and give the delivery code.',
          rvter: 'Validates the code and sends the release instruction to the bank.',
          payment: 'The bank releases the funds; timing depends on the bank.'
        }
      ],
      driverSteps: [
        {
          number: '01',
          title: 'Register and verify your unit',
          shortDesc: 'Upload your ID, license, tax ID (RIF) and your vehicle or equipment documents.',
          fullDesc: 'We verify the ownership of your vehicle or machinery and your documents so your profile shows the verified badge. Equipment owners can list their machines to receive direct requests.',
          badge: 'Digital verification',
          highlight: 'Verified profile for drivers, trucks and machinery',
          you: 'You upload your personal documents and those of your unit or equipment.',
          rvter: 'Reviews ownership and marks your profile as verified.',
          payment: 'You register your bank account to receive payments.'
        },
        {
          number: '02',
          title: 'Find loads and jobs',
          shortDesc: 'Receive client requests and send your offers.',
          fullDesc: 'Access the published freight and job requests. Carriers can register their return route to look for loads heading back to origin and reduce empty trips. Machinery owners are connected with contractors who need their equipment nearby.',
          badge: 'Loads and jobs',
          highlight: 'Filters by equipment and direct contact with clients',
          you: 'You pick the requests that fit your unit and send your offer.',
          rvter: 'Shows published requests and connects you with the client.',
          payment: 'Still no payment: it is confirmed when the client accepts your offer.'
        },
        {
          number: '03',
          title: 'Head out with payment confirmed',
          shortDesc: 'You go to pickup once payment is in bank custody.',
          fullDesc: 'Before moving your unit you will see that the client has paid and that the amount is in bank custody. You only head to pick up the cargo with payment confirmed. Your temporary Cabin PIN gives you access to your route sheet.',
          badge: 'Payment confirmed first',
          highlight: 'You head out with payment confirmed in bank custody',
          you: 'You wait for payment confirmation before going to pickup.',
          rvter: 'Confirms the payment in bank custody and gives you the route sheet with your Cabin PIN.',
          payment: 'The money is held at the bank; you receive it once delivery is confirmed.'
        },
        {
          number: '04',
          title: 'Drive and attach your guide',
          shortDesc: 'GPS navigation and upload of the mobilization guide.',
          fullDesc: 'While you drive the app records the route even without cell signal and syncs it once connection returns. You can upload the Single Mobilization Guide so it is reviewed before you leave for pickup.',
          badge: 'Mobilization guide',
          highlight: 'Guide upload and review, plus offline route logging',
          you: 'You upload your mobilization guide and drive with GPS navigation.',
          rvter: 'Records the route and stores the guide with the freight order.',
          payment: 'The payment stays held while you travel.'
        },
        {
          number: '05',
          title: 'Get paid with the delivery code',
          shortDesc: 'The receiver gives you the code at destination and RVTER instructs the release.',
          fullDesc: 'On unloading at destination or finishing the job, the receiver or client gives you the confirmation code. When you enter it in the app, RVTER instructs the bank to release the payment to your bank account.',
          badge: 'Release by code',
          highlight: 'Release instructed to the bank when delivery is validated',
          you: 'You enter in the app the code the receiver gives you.',
          rvter: 'Validates the code and sends the release instruction to the bank.',
          payment: 'The bank credits your account; timing depends on the bank.'
        }
      ]
    },
    security: {
      badge: 'Technology Infrastructure & Security',
      title: 'Resilient technology built for Venezuelan roads',
      desc: 'Bank custody of the payment, GPS logging with offline sync and review of mobilization guides.',
      pillars: [
        {
          id: 'custodia',
          title: 'Bank custody and dual validation',
          subtitle: 'The carrier picks up the cargo once payment is confirmed in bank custody.',
          description: 'The payment is held at an authorized bank and RVTER only issues the technical release instructions. The client pays before the operation begins and the carrier picks up the cargo with payment confirmed. Two validation levels apply: Cabin PIN on the road and Delivery Code at destination to release the funds.',
          bulletPoints: [
            'Mandatory advance payment: the carrier goes to load with payment confirmed in bank custody.',
            'No confirmed payment, no trip.',
            'Cabin PIN: driver access to the route sheet and telemetry.',
            'Destination Delivery Code: with it, RVTER instructs the bank to release the funds.'
          ],
          statLabel: 'Payment',
          statValue: 'Custody'
        },
        {
          id: 'gps',
          title: 'GPS tracking and offline sync',
          subtitle: 'Route logging that continues in areas without cell coverage.',
          description: 'The mobile app records the GPS position of the trip. If the signal drops on the road, the app stores the route on the phone and sends it once connectivity returns.',
          bulletPoints: [
            'Map with speed and estimated time of arrival (ETA).',
            'Offline sync: the route is stored on the phone and sent on reconnect.',
            'Route history as a backup for any contingency.',
            'Alerts for detours and unscheduled stops.'
          ],
          statLabel: 'Tracking',
          statValue: 'GPS'
        },
        {
          id: 'guias',
          title: 'Mobilization guides',
          subtitle: 'Upload and review of the Single Mobilization Guide for the freight.',
          description: 'RVTER lets you attach the Single Mobilization Guide to the freight order so it is reviewed before leaving for pickup, and stores a digital copy linked to the order.',
          bulletPoints: [
            'Upload of the guide document or QR code.',
            'Review, approval or rejection before leaving for pickup.',
            'Digital copy linked to the freight order as backup.',
            'Reason recorded when the document is rejected.'
          ],
          statLabel: 'Review',
          statValue: 'Guides'
        }
      ]
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Common Questions',
      desc: 'Everything you need to know about bank-custody payments, equipment rental, and highway security on RVTER.',
      catAll: 'All',
      catGeneral: 'General',
      catPayments: 'Payments & Custody',
      catSecurity: 'Security & GPS',
      catDrivers: 'Carriers',
      catMachinery: 'Heavy Machinery',
      items: [
        {
          category: 'general',
          question: 'What is RVTER and how does it differ from traditional freight?',
          answer: 'RVTER is the technology platform connecting cargo owners directly with verified carriers and heavy machinery operators across Venezuela. Unlike informal middlemen, RVTER offers advance payment in bank custody, GPS tracking with offline sync, and document review.'
        },
        {
          category: 'maquinaria',
          question: 'How does the heavy machinery marketplace work on RVTER?',
          answer: 'RVTER does not own or rent its own machines; it functions as a digital marketplace where verified equipment owners list available units (Excavators, Backhoes, Wheel Loaders, Motor Graders, Compactors, and Cranes). As a client, you quote directly with owners per 8-hour shift or per hour-meter, agree on operator and fuel inclusion, arrange lowboy transport, and hold the payment in bank custody.'
        },
        {
          category: 'maquinaria',
          question: 'How can machinery owners list their equipment on RVTER?',
          answer: 'Owners and contractor firms register their fleet by submitting ownership documents and technical specifications. Once verified, their equipment appears in the localized marketplace, enabling direct booking from agricultural, industrial, and construction clients without informal brokers.'
        },
        {
          category: 'pagos',
          question: 'When is payment made, and when does the carrier head to pick up the load?',
          answer: 'Full payment is made before the trip begins. When booking freight or machinery, the user deposits funds via C2P Mobile Payment or wire transfer. Only when the money is confirmed in bank custody does the carrier drive to load. Once delivery is certified with the completion PIN, RVTER instructs the bank to release the funds.'
        },
        {
          category: 'seguridad',
          question: 'What is the difference between the Cabin PIN and Destination Delivery PIN?',
          answer: 'The Cabin PIN is a temporary access code generated for the driver to use Cabin Mode on the highway without sharing personal login credentials. The Destination Delivery PIN is provided by the consignee upon inspecting the delivered cargo; entering it validates delivery and RVTER instructs the bank to release the payment held in bank custody.'
        },
        {
          category: 'conductores',
          question: 'How does the bidding and counter-offer system work?',
          answer: 'When a shipper posts a freight request with a proposed rate, verified carriers can apply accepting that rate or submitting a counter-offer. The shipper reviews profiles, truck specifications, and counter-offers to book the trip.'
        },
        {
          category: 'conductores',
          question: 'How does RVTER help carriers avoid empty return trips?',
          answer: 'RVTER aims to reduce empty returns. The platform lets carriers declare their return route to see available freight heading back to origin or intermediate cities, when there is any.'
        },
        {
          category: 'seguridad',
          question: 'What happens if cellular signal is lost during transit?',
          answer: 'The RVTER mobile app features Offline Sync. The smartphone records GPS coordinates and telemetry events in local encrypted storage and seamlessly syncs the full route as soon as cell signal or data connectivity is re-established.'
        },
        {
          category: 'seguridad',
          question: 'How are official Mobilization Guides handled?',
          answer: 'When posting freight, shippers can attach their official Mobilization Guide. A platform user reviews it in-app and approves or rejects it before leaving for pickup; the digital copy stays linked to the freight order.'
        },
        {
          category: 'conductores',
          question: 'What requirements are needed to sign up as a carrier or machine operator?',
          answer: 'You only need valid national identification, a heavy vehicle driver license, valid medical certificate, and vehicle or equipment title registration. Verification is done digitally.'
        }
      ]
    },
    footer: {
      slogan: 'PROTECTED CARGO, SECURE PAYMENTS AND FULL ROUTES.',
      desc: 'A freight transportation and heavy machinery marketplace in Venezuela, with advance payment in bank custody and GPS tracking.',
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
