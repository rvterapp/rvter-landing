/**
 * RVTER v2.0 - Design System Tokens & Brand Palette
 * Preservación estricta de Identidad de Marca:
 * - Isotipo Oficial: #2DA933
 * - Wordmark: RVTER
 * - Eslogan: "CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS."
 */

export const RVTER_BRAND = {
  name: 'RVTER',
  tagline: 'CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS.',
  colors: {
    primary: '#2DA933',
    primaryHover: '#25882A',
    primaryLight: '#E8F5E9',
    primaryGlow: 'rgba(45, 169, 51, 0.25)',
  }
} as const;

export const THEME_COLORS = {
  // Brand
  primary: '#2DA933',
  primaryHover: '#25882A',
  primaryGlow: 'rgba(45, 169, 51, 0.20)',

  // Default Palette (Modo Claro Oficial RVTER)
  light: {
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceElevated: '#FFFFFF',
    surfaceCard: '#F1F5F9',
    border: '#CBD5E1',
    borderLight: '#E2E8F0',
    textPrimary: '#0F172A',
    textSecondary: '#334155',
    textMuted: '#64748B',
    glassBg: 'rgba(255, 255, 255, 0.90)',
    glassBorder: 'rgba(0, 0, 0, 0.08)',
  },

  // Dark Mode fallback
  dark: {
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceElevated: '#FFFFFF',
    surfaceCard: '#F1F5F9',
    border: '#CBD5E1',
    borderLight: '#E2E8F0',
    textPrimary: '#0F172A',
    textSecondary: '#334155',
    textMuted: '#64748B',
    glassBg: 'rgba(255, 255, 255, 0.90)',
    glassBorder: 'rgba(0, 0, 0, 0.08)',
  },

  // Functional Status
  status: {
    warning: '#F59E0B',
    warningBg: 'rgba(245, 158, 11, 0.15)',
    error: '#EF4444',
    errorBg: 'rgba(239, 68, 68, 0.15)',
    success: '#10B981',
    successBg: 'rgba(16, 185, 129, 0.15)',
    info: '#3B82F6',
    infoBg: 'rgba(59, 130, 246, 0.15)',
  }
} as const;
