import React from 'react';
import { RvterWordmark } from './RvterLogo';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
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
              CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS.
            </p>

            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Plataforma tecnológica multisectorial de fletes terrestres, transporte de carga pesada, logística de maquinaria, mudanzas y cosechas agrícolas en Venezuela.
            </p>

            <div className="flex items-center gap-3 text-slate-500 pt-2">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2DA933]" />
                Custodia C2P (PIN en Destino)
              </span>
            </div>
          </div>

          {/* Column 1: Navegación */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs">Cómo Funciona</h4>
            <ul className="space-y-2">
              <li><a href="#flujo-usuarios" className="hover:text-[#2DA933] transition-colors">Para Usuarios</a></li>
              <li><a href="#flujo-transportistas" className="hover:text-[#2DA933] transition-colors">Para Transportistas</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">Custodia C2P con PIN</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">Offline Sync & Rastreo GPS</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">Guías Únicas de Movilización</a></li>
            </ul>
          </div>

          {/* Column 2: Plataforma de Intermediación */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs">Intermediación Segura</h4>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="hover:text-[#2DA933] transition-colors">Fletes Terrestres</a></li>
              <li><a href="#como-funciona" className="hover:text-[#2DA933] transition-colors">Marketplace de Maquinaria Pesada</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">Custodia de Pago C2P</a></li>
              <li><a href="#seguridad" className="hover:text-[#2DA933] transition-colors">Verificación de Conductores</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Soporte */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#0F172A] uppercase tracking-wider text-xs">Legal y Cumplimiento</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-[#2DA933] transition-colors">Preguntas Frecuentes</a></li>
              <li>
                <a href="/terms.html" className="hover:text-[#2DA933] transition-colors flex items-center gap-1 font-medium">
                  <span>Términos del Contrato</span>
                  <RvterWordmark fill="#0F172A" height={11} className="inline-block align-middle" />
                </a>
              </li>
              <li><a href="/privacy.html" className="hover:text-[#2DA933] transition-colors font-medium">Política de Privacidad</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span>© {new Date().getFullYear()}</span>
            <RvterWordmark fill="#475569" height={13} className="inline-block align-middle" />
            <span>v2.0. Todos los derechos reservados.</span>
          </div>
          <p className="text-[11px]">Diseño y Tecnología con Estándares de Seguridad Bancaria C2P.</p>
        </div>

      </div>
    </footer>
  );
};
