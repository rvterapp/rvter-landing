# Graph Report - RVTER  (2026-08-12)

## Corpus Check
- 135 files · ~83,013 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 902 nodes · 1216 edges · 98 communities (61 shown, 37 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 25 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `db1851d9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- PagoMovilView
- main.py
- api-client.ts
- .onCreate
- server.py
- compilerOptions
- dependencies
- OfflineSyncManager
- 3.4 Módulo de Pagos en Resguardo — Escrow (Automatización Bancaria)
- PublishLoadFlow
- FreightRequest
- schemas.py
- SessionManager
- AndroidAppUser
- shared/Sidebar.tsx
- error_handler.py
- TestBackendAPI
- PaymentAndDeliveryFlow.kt
- generate_pitches.py
- types.ts
- NumberedCanvas
- NetworkModule
- PagoMovilScreen
- SigesaiScreen
- NumberedCanvas
- NumberedCanvas
- NumberedCanvas
- GlobalCrashHandler
- ConnectionPool
- admin.js
- app/layout.tsx
- gradlew
- middleware.ts
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs
- tailwind.config.ts
- devDependencies
- auth.tsx
- compilerOptions
- CONTRATO DE TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA "RVTER"
- RvterAppUX.tsx
- PRD: Documento de Requisitos de Producto (Product Requirements Document) — RVTER
- rvter-admin-dashboard/frontend/app/dashboard/page.tsx
- Reglas Estrictas de Desarrollo - Proyecto RVTER
- 2. Especificación de Endpoints REST
- WelcomeScreen
- Reglas Estrictas de Desarrollo - Proyecto RVTER
- deliveries/page.tsx
- rvter-admin-dashboard/frontend/app/dashboard/payments/page.tsx
- TRD: Requisitos Técnicos y Arquitectura (Technical Requirements Document) — RVTER
- MarketplaceScreen
- VerificationScreen
- SensitiveDataFilter
- C2PBankingService
- kyc/page.tsx
- rvter-admin-dashboard/frontend/app/dashboard/layout.tsx
- Guía de Implantación e Infraestructura (Deployment Spec) — RVTER
- Especificaciones del Sistema de Diseño (UI/UX Design Specs) — RVTER
- Diagramas de Flujo y Secuencia (Workflow Diagrams) — RVTER
- TripOfferFlow
- frontend/README.md
- AIChatPanel.tsx
- rvter-admin-dashboard/frontend/README.md
- ProfileScreen
- RegisterScreen
- Checklist de Despliegue a Producción — RVTER
- WORKFLOW_DIAGRAMS.md
- android-hardening/skill.md
- dashboard-synergy/SKILL.md
- db-optimizer/SKILL.md
- frontend-design/skill.md
- high-concurrency-guard/SKILL.md
- infrastructure-as-code/skill.md
- kotlin-android-native/SKILL.md
- load-testing/SKILL.md
- pydantic-api-sync/SKILL.md
- python-api-security/skill.md
- secrets-leak-guard/skill.md
- styleseed/skill.md
- ui-ux-pro-max/skill.md
- deploy.sh
- frontend/AGENTS.md
- frontend/eslint.config.mjs
- frontend/next.config.ts
- frontend/postcss.config.mjs
- rvter-admin-dashboard/frontend/AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `get_db_connection()` - 34 edges
2. `release_db_connection()` - 34 edges
3. `get_db_connection()` - 22 edges
4. `BaseSchema` - 18 edges
5. `compilerOptions` - 16 edges
6. `compilerOptions` - 16 edges
7. `RVTERRequestHandler` - 12 edges
8. `OfflineSyncManager` - 11 edges
9. `SessionManager` - 11 edges
10. `FreightRequest` - 11 edges

## Surprising Connections (you probably didn't know these)
- `HomeScreen` --calls--> `OfflineSyncManager`  [INFERRED]
  ios/RVTERApp/Views/HomeScreen.swift → ios/RVTERApp/Models/OfflineSyncManager.swift
- `HomeScreen()` --calls--> `OfflineSyncManager`  [INFERRED]
  android/app/src/main/java/com/rvter/app/ui/HomeScreen.kt → android/app/src/main/java/com/rvter/app/data/OfflineSyncManager.kt
- `DashboardContent()` --calls--> `useAuth()`  [EXTRACTED]
  frontend/app/dashboard/layout.tsx → frontend/lib/auth.tsx
- `LoginPage()` --calls--> `useAuth()`  [EXTRACTED]
  frontend/app/login/page.tsx → frontend/lib/auth.tsx
- `.body` --calls--> `HomeScreen`  [INFERRED]
  ios/RVTERApp/RVTERApp.swift → ios/RVTERApp/Views/HomeScreen.swift

## Import Cycles
- None detected.

## Communities (98 total, 37 thin omitted)

### Community 0 - "PagoMovilView"
Cohesion: 0.06
Nodes (48): App, Codable, Int, RVTERApp, .body, ThemeColors, DashcamView, .body (+40 more)

### Community 1 - "main.py"
Cohesion: 0.08
Nodes (52): get, on_event, post, analyze_kyc_document(), analyze_route_deviation(), RVTER Admin Dashboard — Gemini AI Agents Wrapper Integración con google-…, Analiza si la posición GPS actual del transportista se ha desviado de la ruta…, Analiza un documento de identidad, RIF o licencia de conducir. Retorna… (+44 more)

### Community 2 - "api-client.ts"
Cohesion: 0.22
Nodes (3): MOCK_SHIPMENTS, User, apiClient

### Community 3 - ".onCreate"
Cohesion: 0.20
Nodes (6): MainActivity, DashcamScreen(), NavController, RVTERTheme(), Bundle, ComponentActivity

### Community 4 - "server.py"
Cohesion: 0.11
Nodes (42): get_db_connection(), initialize_database(), release_db_connection(), init_db(), handle_login(), handle_logout(), handle_oauth_login(), handle_request_otp() (+34 more)

### Community 5 - "compilerOptions"
Cohesion: 0.07
Nodes (28): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+20 more)

### Community 6 - "dependencies"
Cohesion: 0.04
Nodes (48): class-variance-authority, date-fns, recharts, dependencies, class-variance-authority, clsx, date-fns, lucide-react (+40 more)

### Community 7 - "OfflineSyncManager"
Cohesion: 0.08
Nodes (18): BCVRateModel, DriverRegisterModel, FreightModel, OCRValidationModel, PaymentC2PModel, UserRegisterModel, VehicleRegisterModel, StateFlow (+10 more)

### Community 8 - "3.4 Módulo de Pagos en Resguardo — Escrow (Automatización Bancaria)"
Cohesion: 0.04
Nodes (47): 1.1 Descripción, 1.2 Stack Tecnológico, 1.3 Identidad Visual, 1. Visión General del Proyecto, 2. Arquitectura del Sistema, 3.1.1 Descripción, 3.1.2 Flujo de Datos, 3.1.3 Esquema de Base de Datos (+39 more)

### Community 9 - "PublishLoadFlow"
Cohesion: 0.46
Nodes (7): Color, NavController, PublishLoadFlow(), Step1CargoDetails(), Step2RouteMap(), Step3ResguardoDeposit(), StepIndicator()

### Community 10 - "FreightRequest"
Cohesion: 0.20
Nodes (10): Foundation, Identifiable, FreightRequest, OfflineSyncManager, Bool, Double, String, Network (+2 more)

### Community 11 - "schemas.py"
Cohesion: 0.20
Nodes (18): BaseSchema, BCVRateResponse, DriverRegisterRequest, DriverResponse, FreightAcceptRequest, FreightActionRequest, FreightCreate, FreightNegotiateRequest (+10 more)

### Community 12 - "SessionManager"
Cohesion: 0.07
Nodes (17): SessionManager, NavController, OtpLoginScreen(), Authenticated, AuthState, AuthViewModel, Error, Idle (+9 more)

### Community 13 - "AndroidAppUser"
Cohesion: 0.22
Nodes (4): AdminDashboardUser, AndroidAppUser, HttpUser, task

### Community 14 - "shared/Sidebar.tsx"
Cohesion: 0.28
Nodes (5): RvterLogo(), RvterLogoProps, navItems, Sidebar(), SidebarProps

### Community 15 - "error_handler.py"
Cohesion: 0.40
Nodes (4): global_exception_handler(), notify_self_healing_webhook(), Envía el JSON de diagnóstico a un Webhook/Sentry para disparar la pipeline de…, Decorador/Middleware global para interceptar excepciones no controladas en…

### Community 16 - "TestBackendAPI"
Cohesion: 0.15
Nodes (6): Verifica rechazo de liberación de Escrow con OTP/PIN incorrecto, Prueba flujo completo de OTP: Solicitud, Verificación y expedición de JWT, Verifica HTTP 401 Unauthorized sin Header Authorization, Prueba creación de disputa POST /api/disputes y consulta GET /api/disputes/{id}, Simula Webhook C2P de Pago Móvil exitoso y financiamiento de Escrow, TestBackendAPI

### Community 17 - "PaymentAndDeliveryFlow.kt"
Cohesion: 0.22
Nodes (9): CustodiaFreight, DeliveryState, IN_TRANSIT, PENDING_RELEASE, RELEASED, Color, NavController, PaymentAndDeliveryFlow() (+1 more)

### Community 18 - "generate_pitches.py"
Cohesion: 0.33
Nodes (5): build_banca_pitch(), build_redes_pitch(), create_logo_drawing(), get_canvas_class(), NumberedCanvas

### Community 19 - "types.ts"
Cohesion: 0.22
Nodes (8): BCVRate, Freight, FreightCreatePayload, KYCSubmission, OCRValidation, Transaction, TransactionC2PPayload, User

### Community 21 - "NetworkModule"
Cohesion: 0.33
Nodes (5): NetworkModule, RetryInterceptor, Interceptor, OkHttpClient, Response

### Community 22 - "PagoMovilScreen"
Cohesion: 0.38
Nodes (6): Failure, Idle, NavController, PagoMovilScreen(), PaymentStatus, Success

### Community 23 - "SigesaiScreen"
Cohesion: 0.38
Nodes (6): Failure, Idle, NavController, ScanStatus, SigesaiScreen(), Success

### Community 27 - "GlobalCrashHandler"
Cohesion: 0.40
Nodes (4): GlobalCrashHandler, initialize(), Context, Thread

### Community 29 - "admin.js"
Cohesion: 0.70
Nodes (4): escapeHtml(), loadData(), refundFunds(), releaseFunds()

### Community 30 - "app/layout.tsx"
Cohesion: 0.40
Nodes (3): inter, jetbrainsMono, metadata

### Community 31 - "gradlew"
Cohesion: 0.83
Nodes (3): gradlew script, die(), warn()

### Community 43 - "devDependencies"
Cohesion: 0.05
Nodes (38): dependencies, clsx, lucide-react, next, react, react-dom, tailwind-merge, devDependencies (+30 more)

### Community 44 - "auth.tsx"
Cohesion: 0.12
Nodes (11): DashboardContent(), metadata, LoginPage(), Header(), Sidebar(), api, AuthContext, AuthContextType (+3 more)

### Community 45 - "compilerOptions"
Cohesion: 0.07
Nodes (28): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+20 more)

### Community 46 - "CONTRATO DE TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA "RVTER""
Cohesion: 0.20
Nodes (9): CLÁUSULA CUARTA: DE LA EXCLUSIÓN DE RESPONSABILIDAD SOBRE LA CARGA, CLÁUSULA OCTAVA: LEY APLICABLE Y JURISDICCIÓN COMPETENTE, CLÁUSULA PRIMERA: DEL OBJETO DEL CONTRATO E INTERMEDIACIÓN DIGITAL, CLÁUSULA QUINTA: DE LA VALIDEZ DE LA FIRMA DIGITAL Y CERTIFICACIONES IA, CLÁUSULA SEGUNDA: DEL RESGUARDO FINANCIERO (CUSTODIA ESCROW C2P), CLÁUSULA SEXTA: DE LA GEOLOCALIZACIÓN Y PRIVACIDAD DE DATOS, CLÁUSULA SÉPTIMA: DE LA VERIFICACIÓN DE DOCUMENTACIÓN (KYC) Y GUÍAS SIGESAI, CLÁUSULA TERCERA: DEL BLINDAJE Y EXCLUSIÓN DE RELACIÓN LABORAL (LOTTT) (+1 more)

### Community 47 - "RvterAppUX.tsx"
Cohesion: 0.24
Nodes (6): MapView(), MapViewProps, VehicleOption, VEHICLES, LogoProps, RvterLogo()

### Community 48 - "PRD: Documento de Requisitos de Producto (Product Requirements Document) — RVTER"
Cohesion: 0.22
Nodes (8): 1. Visión General del Producto, 2. Definición de Roles y Usuarios, 3.1. Bolsa de Fletes Activos, 3.2. Custodia Financiera Escrow C2P, 3.3. Verificación Documental e Inteligencia Artificial (SIGESAI / INSAI), 3. Características Principales (MVP), 4. Matriz de Métricas de Éxito (KPIs), PRD: Documento de Requisitos de Producto (Product Requirements Document) — RVTER

### Community 49 - "rvter-admin-dashboard/frontend/app/dashboard/page.tsx"
Cohesion: 0.25
Nodes (3): MOCK_ALERTS, MOCK_ROUTE_STATUS, MOCK_STATS

### Community 50 - "Reglas Estrictas de Desarrollo - Proyecto RVTER"
Cohesion: 0.29
Nodes (6): 1. Principio de No Destrucción, 2. Lectura Obligatoria del Disco, 3. Modificaciones Quirúrgicas, 4. Preservación de Identidad, 5. Confirmación Previa, Reglas Estrictas de Desarrollo - Proyecto RVTER

### Community 51 - "2. Especificación de Endpoints REST"
Cohesion: 0.29
Nodes (6): 1. Autenticación y Seguridad, 2.1. Autenticación, 2.2. Bolsa de Fletes, 2.3. Liberación Escrow, 2. Especificación de Endpoints REST, Contrato de API Backend (Backend API Contract) — RVTER

### Community 52 - "WelcomeScreen"
Cohesion: 0.52
Nodes (6): BannerItem, CarouselSection(), NavController, RvterLogo(), WelcomeScreen(), Modifier

### Community 53 - "Reglas Estrictas de Desarrollo - Proyecto RVTER"
Cohesion: 0.29
Nodes (6): 1. Principio de No Destrucción, 2. Lectura Obligatoria del Disco, 3. Modificaciones Quirúrgicas, 4. Preservación de Identidad, 5. Confirmación Previa, Reglas Estrictas de Desarrollo - Proyecto RVTER

### Community 54 - "deliveries/page.tsx"
Cohesion: 0.33
Nodes (3): DeliveriesPage(), DeliveryStatus, MOCK_DELIVERIES

### Community 55 - "rvter-admin-dashboard/frontend/app/dashboard/payments/page.tsx"
Cohesion: 0.33
Nodes (3): MOCK_PAYMENTS, PaymentsPage(), PaymentStatus

### Community 56 - "TRD: Requisitos Técnicos y Arquitectura (Technical Requirements Document) — RVTER"
Cohesion: 0.40
Nodes (4): 1. Pila Tecnológica, 2. Estrategia de Resiliencia Offline (Carretera Nacional), 3. Seguridad e Indicadores de Rendimiento (SLAs), TRD: Requisitos Técnicos y Arquitectura (Technical Requirements Document) — RVTER

### Community 57 - "MarketplaceScreen"
Cohesion: 0.50
Nodes (4): FlowFreight, FlowTruck, NavController, MarketplaceScreen()

### Community 58 - "VerificationScreen"
Cohesion: 0.50
Nodes (4): NavController, PhotoCaptureCard(), VerificationScreen(), Bitmap

### Community 59 - "SensitiveDataFilter"
Cohesion: 0.50
Nodes (3): Filtro de sanitización para detectar y enmascarar automáticamente tokens JWT,…, SensitiveDataFilter, setup_logger()

### Community 63 - "Guía de Implantación e Infraestructura (Deployment Spec) — RVTER"
Cohesion: 0.50
Nodes (3): 1. Puesta en Producción del Backend y Base de Datos, 2. Publicación Móvil Android (.AAB), Guía de Implantación e Infraestructura (Deployment Spec) — RVTER

### Community 64 - "Especificaciones del Sistema de Diseño (UI/UX Design Specs) — RVTER"
Cohesion: 0.50
Nodes (3): 1. Identidad Visual y Paleta de Colores, 2. Reglas de Bordes Anidados y Microanimaciones (`styleseed` / `ui-ux-pro-max`), Especificaciones del Sistema de Diseño (UI/UX Design Specs) — RVTER

### Community 65 - "Diagramas de Flujo y Secuencia (Workflow Diagrams) — RVTER"
Cohesion: 0.50
Nodes (3): 1. Ciclo de Vida del Flete y Custodia Escrow C2P, 2. Flujo de Manejo de Excepciones y Disputas, Diagramas de Flujo y Secuencia (Workflow Diagrams) — RVTER

### Community 66 - "TripOfferFlow"
Cohesion: 0.50
Nodes (3): NavController, TripFreight, TripOfferFlow()

### Community 67 - "frontend/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 69 - "rvter-admin-dashboard/frontend/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **264 isolated node(s):** `PaymentC2PModel`, `UserRegisterModel`, `VehicleRegisterModel`, `DriverRegisterModel`, `OCRValidationModel` (+259 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **37 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HomeScreen()` connect `OfflineSyncManager` to `.onCreate`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Why does `OtpLoginScreen()` connect `SessionManager` to `.onCreate`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `PaymentC2PModel`, `UserRegisterModel`, `VehicleRegisterModel` to the rest of the system?**
  _264 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `PagoMovilView` be split into smaller, more focused modules?**
  _Cohesion score 0.059887005649717516 - nodes in this community are weakly interconnected._
- **Should `main.py` be split into smaller, more focused modules?**
  _Cohesion score 0.07547169811320754 - nodes in this community are weakly interconnected._
- **Should `server.py` be split into smaller, more focused modules?**
  _Cohesion score 0.10615079365079365 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._