import React from 'react';
import { RvterWordmark } from './RvterLogo';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="relative liquid-glass border-t border-white/60 text-slate-600 text-xs py-16 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <RvterWordmark fill="#0F172A" height={36} />
            </div>

            <p className="text-xs font-semibold text-[#2DA933] uppercase tracking-wider">
              {t.footer.slogan}
            </p>

            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-3 text-slate-500 pt-2">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2DA933]" />
                {language === 'es' ? 'Custodia C2P (PIN en Destino)' : 'C2P Escrow (Destination PIN)'}
              </span>
            </div>
          </div>

          {/* Column 1: Navegación */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs">
              {t.navbar.howItWorks}
            </h4>
            <ul className="space-y-2">
              <li><a href="#flujo-usuarios" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Para Usuarios' : 'For Shippers'}</a></li>
              <li><a href="#flujo-transportistas" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Para Transportistas' : 'For Carriers'}</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Custodia C2P con PIN' : 'C2P Escrow & PIN'}</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Offline Sync & Rastreo GPS' : 'Offline Sync & GPS'}</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Guías de Movilización' : 'Transit Guides'}</a></li>
            </ul>
          </div>

          {/* Column 2: Plataforma de Intermediación */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs">
              {language === 'es' ? 'Intermediación Segura' : 'Secure Marketplace'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Fletes Terrestres' : 'Ground Freight'}</a></li>
              <li><a href="#como-funciona" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Marketplace de Maquinaria' : 'Heavy Equipment'}</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Custodia de Pago C2P' : 'C2P Payment Escrow'}</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">{language === 'es' ? 'Verificación de Choferes' : 'Driver Verification'}</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Soporte */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-[#2DA933] transition-colors">{t.navbar.faq}</a></li>
              <li>
                <a href="/terms.html" className="hover:text-[#2DA933] transition-colors flex items-center gap-1 font-medium">
                  <span>{t.footer.terms}</span>
                  <RvterWordmark fill="#0F172A" height={11} className="inline-block align-middle" />
                </a>
              </li>
              <li><a href="/privacy.html" className="hover:text-[#2DA933] transition-colors font-medium">{t.footer.privacy}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span>© {new Date().getFullYear()}</span>
            <RvterWordmark fill="#475569" height={13} className="inline-block align-middle" />
            <span>v2.0. {t.footer.rights}</span>
          </div>
          <p className="text-[11px]">
            {language === 'es'
              ? 'Diseño y Tecnología con Estándares de Seguridad Bancaria C2P.'
              : 'Designed and Engineered with C2P Banking Security Standards.'}
          </p>
        </div>

      </div>
    </footer>
  );
};
