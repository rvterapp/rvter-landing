# Graph Report - .  (2026-08-14)

## Corpus Check
- 170 files · ~84,734 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 770 nodes · 1234 edges · 59 communities (44 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.79)
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
- Community 43
- Community 44
- Community 48
- Community 49
- Community 50
- Community 52
- Community 53
- Community 54
- Community 55

## God Nodes (most connected - your core abstractions)
1. `release_db_connection()` - 40 edges
2. `get_db_connection()` - 37 edges
3. `OfflineSyncManager` - 23 edges
4. `get_db_connection()` - 22 edges
5. `BaseSchema` - 18 edges
6. `SessionManager` - 17 edges
7. `compilerOptions` - 16 edges
8. `compilerOptions` - 16 edges
9. `RVTERRequestHandler` - 12 edges
10. `log_audit_event()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `HomeScreen` --calls--> `OfflineSyncManager`  [INFERRED]
  ios/RVTERApp/Views/HomeScreen.swift → ios/RVTERApp/Models/OfflineSyncManager.swift
- `.body` --calls--> `AuthenticationView`  [INFERRED]
  ios/RVTERApp/RVTERApp.swift → ios/RVTERApp/Views/AuthenticationView.swift
- `.body` --calls--> `PagoMovilView`  [INFERRED]
  ios/RVTERApp/Views/HomeScreen.swift → ios/RVTERApp/Views/PagoMovilView.swift
- `OtpLoginScreen()` --calls--> `BiometricAuthManager`  [EXTRACTED]
  android/app/src/main/java/com/rvter/app/ui/OtpLoginScreen.kt → android/app/src/main/java/com/rvter/app/security/BiometricAuthManager.kt
- `DashboardContent()` --calls--> `useAuth()`  [EXTRACTED]
  frontend/app/dashboard/layout.tsx → frontend/lib/auth.tsx

## Import Cycles
- None detected.

## Communities (59 total, 15 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (48): get_db_connection(), initialize_database(), release_db_connection(), init_db(), handle_login(), handle_logout(), handle_oauth_login(), handle_request_email_verification() (+40 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (52): get, on_event, post, analyze_kyc_document(), analyze_route_deviation(), RVTER Admin Dashboard — Gemini AI Agents Wrapper Integración con google-…, Analiza si la posición GPS actual del transportista se ha desviado de la ruta…, Analiza un documento de identidad, RIF o licencia de conducir. Retorna… (+44 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (39): FragmentActivity, MainActivity, DashcamScreen(), NavController, FlowFreight, FlowTruck, NavController, MarketplaceScreen() (+31 more)

### Community 3 - "Community 3"
Cohesion: 0.04
Nodes (48): class-variance-authority, date-fns, recharts, dependencies, class-variance-authority, clsx, date-fns, lucide-react (+40 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (22): SessionManager, NetworkModule, RetryInterceptor, NavController, OtpLoginScreen(), Authenticated, AuthState, AuthViewModel (+14 more)

### Community 5 - "Community 5"
Cohesion: 0.09
Nodes (22): FreightModel, StateFlow, OfflineSyncManager, PendingAction, FreightRepository, StateFlow, GlobalCrashHandler, Context (+14 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (38): dependencies, clsx, lucide-react, next, react, react-dom, tailwind-merge, devDependencies (+30 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (11): DashboardContent(), metadata, LoginPage(), Header(), Sidebar(), api, AuthContext, AuthContextType (+3 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (28): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+20 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (28): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+20 more)

### Community 10 - "Community 10"
Cohesion: 0.13
Nodes (15): BCVRateModel, DriverRegisterModel, OCRValidationModel, PaymentC2PModel, UserRegisterModel, VehicleRegisterModel, Identifiable, FreightRequest (+7 more)

### Community 11 - "Community 11"
Cohesion: 0.16
Nodes (14): Any, Foundation, APIService, .deviceID, .deviceName, .osInfo, String, KeychainHelper (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.14
Nodes (12): BiometricAuthManager, BiometricPrompt, FragmentActivity, CustodiaFreight, DeliveryState, IN_TRANSIT, PENDING_RELEASE, RELEASED (+4 more)

### Community 13 - "Community 13"
Cohesion: 0.20
Nodes (18): BaseSchema, BCVRateResponse, DriverRegisterRequest, DriverResponse, FreightAcceptRequest, FreightActionRequest, FreightCreate, FreightNegotiateRequest (+10 more)

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (7): Verifica rechazo de liberación de Escrow con OTP/PIN incorrecto, Prueba flujo completo de OTP: Solicitud, Verificación y expedición de JWT, Prueba solicitación y confirmación de verificación de email, Verifica HTTP 401 Unauthorized sin Header Authorization, Prueba creación de disputa POST /api/disputes y consulta GET /api/disputes/{id}, Simula Webhook C2P de Pago Móvil exitoso y financiamiento de Escrow, TestBackendAPI

### Community 15 - "Community 15"
Cohesion: 0.22
Nodes (4): AdminDashboardUser, AndroidAppUser, HttpUser, task

### Community 16 - "Community 16"
Cohesion: 0.22
Nodes (12): .body, DashcamView_Previews, .previews, HomeScreen, HomeScreen_Previews, .previews, PagoMovilView_Previews, .previews (+4 more)

### Community 17 - "Community 17"
Cohesion: 0.27
Nodes (11): Codable, Int, BcvRateResponse, PagoMovilReceipt, PagoMovilResponse, PaymentResultStatus, failure, idle (+3 more)

### Community 18 - "Community 18"
Cohesion: 0.20
Nodes (6): App, AuthenticationServices, RVTERApp, LocalAuthentication, Scene, SwiftUI

### Community 19 - "Community 19"
Cohesion: 0.24
Nodes (6): MapView(), MapViewProps, VehicleOption, VEHICLES, LogoProps, RvterLogo()

### Community 20 - "Community 20"
Cohesion: 0.24
Nodes (4): User, Message, SUGGESTED_QUERIES, apiClient

### Community 21 - "Community 21"
Cohesion: 0.31
Nodes (8): ThemeColors, DashcamView, .body, .body, .body, SigesaiView, .body, Bool

### Community 22 - "Community 22"
Cohesion: 0.28
Nodes (5): RvterLogo(), RvterLogoProps, navItems, Sidebar(), SidebarProps

### Community 23 - "Community 23"
Cohesion: 0.22
Nodes (8): BCVRate, Freight, FreightCreatePayload, KYCSubmission, OCRValidation, Transaction, TransactionC2PPayload, User

### Community 24 - "Community 24"
Cohesion: 0.39
Nodes (4): AuthenticationView, .body, Bool, String

### Community 25 - "Community 25"
Cohesion: 0.36
Nodes (7): OcrData, OcrResponse, ScanResultStatus, failure, idle, success, String

### Community 26 - "Community 26"
Cohesion: 0.25
Nodes (3): MOCK_ALERTS, MOCK_ROUTE_STATUS, MOCK_STATS

### Community 27 - "Community 27"
Cohesion: 0.33
Nodes (3): DeliveriesPage(), DeliveryStatus, MOCK_DELIVERIES

### Community 28 - "Community 28"
Cohesion: 0.33
Nodes (3): MOCK_PAYMENTS, PaymentsPage(), PaymentStatus

### Community 29 - "Community 29"
Cohesion: 0.60
Nodes (3): RegisterView, Bool, String

### Community 31 - "Community 31"
Cohesion: 0.40
Nodes (4): global_exception_handler(), notify_self_healing_webhook(), Envía el JSON de diagnóstico a un Webhook/Sentry para disparar la pipeline de…, Decorador/Middleware global para interceptar excepciones no controladas en…

### Community 32 - "Community 32"
Cohesion: 0.50
Nodes (3): Filtro de sanitización para detectar y enmascarar automáticamente tokens JWT,…, SensitiveDataFilter, setup_logger()

### Community 35 - "Community 35"
Cohesion: 0.70
Nodes (4): escapeHtml(), loadData(), refundFunds(), releaseFunds()

### Community 36 - "Community 36"
Cohesion: 0.60
Nodes (3): PagoMovilView, .amountVes, .body

### Community 40 - "Community 40"
Cohesion: 0.40
Nodes (3): inter, jetbrainsMono, metadata

### Community 41 - "Community 41"
Cohesion: 0.83
Nodes (3): gradlew script, die(), warn()

## Knowledge Gaps
- **169 isolated node(s):** `PaymentC2PModel`, `UserRegisterModel`, `VehicleRegisterModel`, `DriverRegisterModel`, `OCRValidationModel` (+164 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FreightRequest` connect `Community 10` to `Community 17`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `FreightModel` connect `Community 5` to `Community 10`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `OfflineSyncManager` connect `Community 5` to `Community 2`, `Community 12`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `release_db_connection()` (e.g. with `.setUp()` and `.test_device_registration_first_and_second()`) actually correct?**
  _`release_db_connection()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PaymentC2PModel`, `UserRegisterModel`, `VehicleRegisterModel` to the rest of the system?**
  _169 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0989648033126294 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06988120195667366 - nodes in this community are weakly interconnected._