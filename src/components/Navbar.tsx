import React, { useState, useEffect } from 'react';
import { RvterWordmark } from './RvterLogo';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.navbar.howItWorks, href: '#como-funciona' },
    { name: t.navbar.security, href: '#seguridad' },
    { name: t.navbar.faq, href: '#faq' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pb-3 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent">
      
      {/* 1. Top Announcement Strip (Control Room Banner) */}
      <div className={`bg-[#070D1E] text-white border-b border-white/10 px-4 py-2 text-center text-xs sm:text-[13px] font-medium tracking-wide items-center justify-center gap-2 ${scrolled ? 'hidden' : 'flex'}`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DA933] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DA933]"></span>
        </span>
        <span className="text-slate-300 tracking-wide font-medium">
          {t.navbar.announcement}
        </span>
      </div>

      {/* 2. Floating Nav Pill (Signature Flighty Component) */}
      <div className="max-w-4xl mx-auto px-4 pt-3 sm:pt-4">
        <nav className="rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-sm px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          
          {/* Left: Vector Wordmark RVTER */}
          <a href="#" className="flex items-center py-0.5 group focus:outline-none" aria-label="RVTER Inicio">
            <RvterWordmark
              fill="#0F172A"
              height={30}
              className="transition-transform group-hover:scale-105"
            />
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-[#1F7A25] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Language Selector & Action Pill */}
          <div className="flex items-center gap-2.5">
            {/* Language Selector ES | EN */}
            <div className="flex items-center rounded-full bg-slate-100 p-0.5 border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  language === 'es'
                    ? 'bg-white text-[#0F172A] shadow-sm font-extrabold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Español"
                aria-pressed={language === 'es'}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-white text-[#0F172A] shadow-sm font-extrabold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="English"
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>

            <div className="hidden sm:flex items-center">
              <a
                href="#descargar"
                className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#1F7A25] hover:bg-[#186320] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.navbar.explore}
              </a>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-slate-700 hover:text-[#1F7A25]"
              aria-label={mobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-[#1F7A25] py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> {language === 'es' ? 'Idioma' : 'Language'}:
                </span>
                <div className="flex items-center rounded-full bg-slate-100 p-0.5 border border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`px-3 py-1 rounded-full ${language === 'es' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full ${language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
