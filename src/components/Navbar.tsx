import React, { useState, useEffect } from 'react';
import { RvterWordmark } from './RvterLogo';
import { useTheme } from '../theme/ThemeContext';
import { Sun, Moon, Menu, X, Smartphone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Alquiler de Maquinaria', href: '#maquinaria' },
    { name: 'Para Usuarios', href: '#flujo-usuarios' },
    { name: 'Para Transportistas', href: '#flujo-transportistas' },
    { name: 'Seguridad & GPS', href: '#seguridad' },
    { name: 'Flota & Equipos', href: '#flota' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-2.5 shadow-sm border-b border-slate-200' : 'bg-[#F8FAFC] py-3.5 border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand - Solo Wordmark rvter Oficial */}
          <a href="#" className="flex items-center group py-0.5" aria-label="RVTER Inicio">
            <RvterWordmark
              fill="#0F172A"
              height={38}
              className="transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#2DA933] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Alternar modo día y noche"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100 text-gray-300 dark:text-gray-300 light:text-slate-700 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* CTA Download Button */}
            <a
              href="#descargar"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#2DA933] hover:bg-[#25882A] shadow-lg shadow-[#2DA933]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Smartphone className="w-4 h-4" />
              <span>Descargar App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-white/10 text-gray-300"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 glass-card rounded-2xl p-5 space-y-4 shadow-2xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-200 dark:text-gray-200 light:text-slate-700 hover:text-[#2DA933] py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href="#descargar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[#2DA933] shadow-lg shadow-[#2DA933]/25"
              >
                <Smartphone className="w-5 h-5" />
                Descargar App Gratuita
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
