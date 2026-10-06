# Graph Report - c:\Users\Pocholo\OneDrive\Desktop\RVTER  (2026-08-22)

## Corpus Check
- 120 files · ~107,689 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1001 nodes · 1432 edges · 110 communities (72 shown, 38 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 25 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57
- Community 58
- Community 59
- Community 60
- Community 61
- Community 62
- Community 63
- Community 64
- Community 65
- Community 66
- Community 67
- Community 68
- Community 69
- Community 70
- Community 72
- Community 73
- Community 74
- Community 75
- Community 76
- Community 77
- Community 78
- Community 79
- Community 80
- Community 81
- Community 82
- Community 83
- Community 84
- Community 85
- Community 86
- Community 87
- Community 89
- Community 90
- Community 93
- Community 94
- Community 95
- Community 96
- Community 98
- Community 99
- Community 100
- Community 101
- Community 103
- Community 106

## God Nodes (most connected - your core abstractions)
1. `get_db_connection()` - 43 edges
2. `release_db_connection()` - 43 edges
3. `get_db_connection()` - 22 edges
4. `BaseSchema` - 18 edges
5. `SessionManager` - 16 edges
6. `compilerOptions` - 16 edges
7. `compilerOptions` - 16 edges
8. `RVTERRequestHandler` - 12 edges
9. `TestBackendAPI` - 12 edges
10. `log_audit_event()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `include` --extends--> `.next/dev/types/**/*.ts`  [EXTRACTED]
  rvter-admin-dashboard/frontend/tsconfig.json → frontend/tsconfig.json
- `include` --extends--> `next-env.d.ts`  [EXTRACTED]
  rvter-admin-dashboard/frontend/tsconfig.json → frontend/tsconfig.json
- `include` --extends--> `.next/types/**/*.ts`  [EXTRACTED]
  rvter-admin-dashboard/frontend/tsconfig.json → frontend/tsconfig.json
- `.body` --calls--> `AuthenticationView`  [INFERRED]
  ios/RVTERApp/RVTERApp.swift → ios/RVTERApp/Views/AuthenticationView.swift
- `HomeScreen` --calls--> `OfflineSyncManager`  [INFERRED]
  ios/RVTERApp/Views/HomeScreen.swift → ios/RVTERApp/Models/OfflineSyncManager.swift

## Import Cycles
- None detected.

## Communities (110 total, 38 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (52): get_db_connection(), initialize_database(), release_db_connection(), init_db(), _get_client_ip(), handle_login(), handle_logout(), handle_oauth_login() (+44 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (48): App, Codable, Int, RVTERApp, .body, ThemeColors, DashcamView, .body (+40 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (52): get, on_event, post, analyze_kyc_document(), analyze_route_deviation(), RVTER Admin Dashboard — Gemini AI Agents Wrapper Integración con google-…, Analiza si la posición GPS actual del transportista se ha desviado de la ruta…, Analiza un documento de identidad, RIF o licencia de conducir. Retorna… (+44 more)

### Community 3 - "Community 3"
Cohesion: 0.04
Nodes (47): 1.1 Descripción, 1.2 Stack Tecnológico, 1.3 Identidad Visual, 1. Visión General del Proyecto, 2. Arquitectura del Sistema, 3.1.1 Descripción, 3.1.2 Flujo de Datos, 3.1.3 Esquema de Base de Datos (+39 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (41): class-variance-authority, clsx, date-fns, dependencies, clsx, lucide-react, next, react (+33 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (34): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+26 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (20): BCVRateModel, DriverRegisterModel, OCRValidationModel, PaymentC2PModel, UserRegisterModel, VehicleRegisterModel, Foundation, Identifiable (+12 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (12): DashboardContent(), metadata, LoginPage(), Header(), NAV_ITEMS, Sidebar(), api, AuthContext (+4 more)

### Community 8 - "Community 8"
Cohesion: 0.16
Nodes (16): Any, AuthenticationServices, Bool, Error, APIService, .deviceID, .deviceName, .osInfo (+8 more)

### Community 9 - "Community 9"
Cohesion: 0.13
Nodes (9): FreightModel, StateFlow, OfflineSyncManager, PendingAction, FreightRepository, StateFlow, FreightViewModel, StateFlow (+1 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (11): Simula Webhook C2P de Pago Móvil exitoso y financiamiento de Escrow, Verifica rechazo de liberación de Escrow con OTP/PIN incorrecto, Prueba flujo completo de OTP: Solicitud, Verificación y expedición de JWT, Prueba solicitación y confirmación de verificación de email, Valida que ráfagas de solicitudes a OTP activan el bloqueo HTTP 429 Too Many…, Valida que una carga ya aceptada retorna 409 Conflict ante reclamos concurrentes, Valida que la cancelación de viaje por el productor devuelve el saldo…, Valida que el arbitraje administrativo de disputa a favor del productor… (+3 more)

### Community 11 - "Community 11"
Cohesion: 0.16
Nodes (16): Action, AuditArchitectureAction, AuditQAAction, AuditQualityAction, collect_code_samples(), GenerateReportAction, main(), Scan and index all project files ignoring build/dependency directories. (+8 more)

### Community 12 - "Community 12"
Cohesion: 0.20
Nodes (18): BaseSchema, BCVRateResponse, DriverRegisterRequest, DriverResponse, FreightAcceptRequest, FreightActionRequest, FreightCreate, FreightNegotiateRequest (+10 more)

### Community 13 - "Community 13"
Cohesion: 0.12
Nodes (16): BCVRateResponse, DriverRegisterRequest, DriverResponse, FreightAcceptRequest, FreightActionRequest, FreightCreate, FreightNegotiateRequest, FreightResponse (+8 more)

### Community 14 - "Community 14"
Cohesion: 0.12
Nodes (16): BCVRateResponse, DriverRegisterRequest, DriverResponse, FreightAcceptRequest, FreightActionRequest, FreightCreate, FreightNegotiateRequest, FreightResponse (+8 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (11): NavController, OtpLoginScreen(), AuthState, AuthViewModel, Error, Idle, StateFlow, LoadingOtp (+3 more)

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.16
Nodes (5): MOCK_SHIPMENTS, User, Message, SUGGESTED_QUERIES, apiClient

### Community 18 - "Community 18"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 19 - "Community 19"
Cohesion: 0.19
Nodes (4): SessionManager, Authenticated, Context, SharedPreferences

### Community 20 - "Community 20"
Cohesion: 0.22
Nodes (4): AdminDashboardUser, AndroidAppUser, HttpUser, task

### Community 21 - "Community 21"
Cohesion: 0.22
Nodes (11): include, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, **/*.ts, **/*.tsx, include (+3 more)

### Community 22 - "Community 22"
Cohesion: 0.18
Nodes (6): ALERT_BG_MAP, ALERT_COLOR_MAP, MOCK_ALERTS, MOCK_ROUTE_STATUS, MOCK_STATS, STATUS_MAP

### Community 23 - "Community 23"
Cohesion: 0.24
Nodes (9): CustodiaFreight, DeliveryState, IN_TRANSIT, PENDING_RELEASE, RELEASED, Color, NavController, PaymentAndDeliveryFlow() (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.20
Nodes (9): CLÁUSULA CUARTA: DE LA EXCLUSIÓN DE RESPONSABILIDAD SOBRE LA CARGA, CLÁUSULA OCTAVA: LEY APLICABLE Y JURISDICCIÓN COMPETENTE, CLÁUSULA PRIMERA: DEL OBJETO DEL CONTRATO E INTERMEDIACIÓN DIGITAL, CLÁUSULA QUINTA: DE LA VALIDEZ DE LA FIRMA DIGITAL Y CERTIFICACIONES IA, CLÁUSULA SEGUNDA: DEL RESGUARDO FINANCIERO (CUSTODIA ESCROW C2P), CLÁUSULA SEXTA: DE LA GEOLOCALIZACIÓN Y PRIVACIDAD DE DATOS, CLÁUSULA SÉPTIMA: DE LA VERIFICACIÓN DE DOCUMENTACIÓN (KYC) Y GUÍAS SIGESAI, CLÁUSULA TERCERA: DEL BLINDAJE Y EXCLUSIÓN DE RELACIÓN LABORAL (LOTTT) (+1 more)

### Community 25 - "Community 25"
Cohesion: 0.24
Nodes (6): MapView(), MapViewProps, VehicleOption, VEHICLES, LogoProps, RvterLogo()

### Community 26 - "Community 26"
Cohesion: 0.22
Nodes (8): 1. Visión General del Producto, 2. Definición de Roles y Usuarios, 3.1. Bolsa de Fletes Activos, 3.2. Custodia Financiera Escrow C2P, 3.3. Verificación Documental e Inteligencia Artificial (SIGESAI / INSAI), 3. Características Principales (MVP), 4. Matriz de Métricas de Éxito (KPIs), PRD: Documento de Requisitos de Producto (Product Requirements Document) — RVTER

### Community 27 - "Community 27"
Cohesion: 0.33
Nodes (5): FragmentActivity, MainActivity, NavController, ProfileScreen(), Bundle

### Community 28 - "Community 28"
Cohesion: 0.28
Nodes (3): BiometricAuthManager, BiometricPrompt, FragmentActivity

### Community 29 - "Community 29"
Cohesion: 0.28
Nodes (5): RvterLogo(), RvterLogoProps, navItems, Sidebar(), SidebarProps

### Community 30 - "Community 30"
Cohesion: 0.22
Nodes (8): BCVRate, Freight, FreightCreatePayload, KYCSubmission, OCRValidation, Transaction, TransactionC2PPayload, User

### Community 31 - "Community 31"
Cohesion: 0.54
Nodes (7): Color, NavController, PublishLoadFlow(), Step1CargoDetails(), Step2RouteMap(), Step3ResguardoDeposit(), StepIndicator()

### Community 32 - "Community 32"
Cohesion: 0.36
Nodes (7): build_svg(), extract_paths(), get_start_x(), main(), Extrae fill y d de cada <path> del SVG original., Obtiene la coordenada X inicial del path data., Construye un SVG completo desde componentes.

### Community 33 - "Community 33"
Cohesion: 0.29
Nodes (6): 1. Principio de No Destrucción, 2. Lectura Obligatoria del Disco, 3. Modificaciones Quirúrgicas, 4. Preservación de Identidad, 5. Confirmación Previa, Reglas Estrictas de Desarrollo - Proyecto RVTER

### Community 34 - "Community 34"
Cohesion: 0.29
Nodes (6): 1. Autenticación y Seguridad, 2.1. Autenticación, 2.2. Bolsa de Fletes, 2.3. Liberación Escrow, 2. Especificación de Endpoints REST, Contrato de API Backend (Backend API Contract) — RVTER

### Community 35 - "Community 35"
Cohesion: 0.48
Nodes (5): NetworkModule, RetryInterceptor, Interceptor, OkHttpClient, Response

### Community 36 - "Community 36"
Cohesion: 0.38
Nodes (6): Failure, Idle, NavController, PagoMovilScreen(), PaymentStatus, Success

### Community 37 - "Community 37"
Cohesion: 0.38
Nodes (6): Failure, Idle, NavController, ScanStatus, SigesaiScreen(), Success

### Community 38 - "Community 38"
Cohesion: 0.62
Nodes (6): BannerItem, CarouselSection(), NavController, RvterLogo(), WelcomeScreen(), Modifier

### Community 40 - "Community 40"
Cohesion: 0.29
Nodes (6): 1. Principio de No Destrucción, 2. Lectura Obligatoria del Disco, 3. Modificaciones Quirúrgicas, 4. Preservación de Identidad, 5. Confirmación Previa, Reglas Estrictas de Desarrollo - Proyecto RVTER

### Community 41 - "Community 41"
Cohesion: 0.29
Nodes (7): lib, dom, dom.iterable, esnext, lib, dom, esnext

### Community 42 - "Community 42"
Cohesion: 0.33
Nodes (3): DeliveriesPage(), DeliveryStatus, MOCK_DELIVERIES

### Community 43 - "Community 43"
Cohesion: 0.33
Nodes (3): MOCK_PAYMENTS, PaymentsPage(), PaymentStatus

### Community 44 - "Community 44"
Cohesion: 0.40
Nodes (4): GlobalCrashHandler, initialize(), Context, Thread

### Community 45 - "Community 45"
Cohesion: 0.40
Nodes (4): 1. Pila Tecnológica, 2. Estrategia de Resiliencia Offline (Carretera Nacional), 3. Seguridad e Indicadores de Rendimiento (SLAs), TRD: Requisitos Técnicos y Arquitectura (Technical Requirements Document) — RVTER

### Community 46 - "Community 46"
Cohesion: 0.70
Nodes (4): CarrierTrip, HomeScreen(), NavController, FreightViewModel

### Community 47 - "Community 47"
Cohesion: 0.50
Nodes (4): FlowFreight, FlowTruck, NavController, MarketplaceScreen()

### Community 48 - "Community 48"
Cohesion: 0.50
Nodes (4): NavController, PhotoCaptureCard(), VerificationScreen(), Bitmap

### Community 50 - "Community 50"
Cohesion: 0.40
Nodes (4): global_exception_handler(), notify_self_healing_webhook(), Envía el JSON de diagnóstico a un Webhook/Sentry para disparar la pipeline de…, Decorador/Middleware global para interceptar excepciones no controladas en…

### Community 51 - "Community 51"
Cohesion: 0.50
Nodes (3): Filtro de sanitización para detectar y enmascarar automáticamente tokens JWT,…, SensitiveDataFilter, setup_logger()

### Community 54 - "Community 54"
Cohesion: 0.70
Nodes (4): escapeHtml(), loadData(), refundFunds(), releaseFunds()

### Community 55 - "Community 55"
Cohesion: 0.40
Nodes (3): exclude, node_modules, exclude

### Community 58 - "Community 58"
Cohesion: 0.40
Nodes (3): inter, jetbrainsMono, metadata

### Community 59 - "Community 59"
Cohesion: 0.50
Nodes (3): 1. Puesta en Producción del Backend y Base de Datos, 2. Publicación Móvil Android (.AAB), Guía de Implantación e Infraestructura (Deployment Spec) — RVTER

### Community 60 - "Community 60"
Cohesion: 0.50
Nodes (3): 1. Identidad Visual y Paleta de Colores, 2. Reglas de Bordes Anidados y Microanimaciones (`styleseed` / `ui-ux-pro-max`), Especificaciones del Sistema de Diseño (UI/UX Design Specs) — RVTER

### Community 61 - "Community 61"
Cohesion: 0.50
Nodes (3): 1. Ciclo de Vida del Flete y Custodia Escrow C2P, 2. Flujo de Manejo de Excepciones y Disputas, Diagramas de Flujo y Secuencia (Workflow Diagrams) — RVTER

### Community 62 - "Community 62"
Cohesion: 0.50
Nodes (3): NavController, TripFreight, TripOfferFlow()

### Community 63 - "Community 63"
Cohesion: 0.83
Nodes (3): gradlew script, die(), warn()

### Community 64 - "Community 64"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 65 - "Community 65"
Cohesion: 0.50
Nodes (3): devDependencies, @resvg/resvg-js, @resvg/resvg-js

### Community 66 - "Community 66"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **276 isolated node(s):** `BCVRateResponse`, `DriverRegisterRequest`, `DriverResponse`, `FreightAcceptRequest`, `FreightActionRequest` (+271 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **38 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FreightModel` connect `Community 9` to `Community 46`, `Community 6`, `Community 31`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `FreightRequest` connect `Community 6` to `Community 1`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `OfflineSyncManager` connect `Community 6` to `Community 1`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `get_db_connection()` (e.g. with `.setUp()` and `.test_device_registration_first_and_second()`) actually correct?**
  _`get_db_connection()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `release_db_connection()` (e.g. with `.setUp()` and `.test_device_registration_first_and_second()`) actually correct?**
  _`release_db_connection()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `BCVRateResponse`, `DriverRegisterRequest`, `DriverResponse` to the rest of the system?**
  _276 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09298245614035087 - nodes in this community are weakly interconnected._