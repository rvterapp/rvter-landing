import React from 'react';
import { Smartphone, Download, QrCode, ShieldCheck, Star } from 'lucide-react';
import { RvterWordmark } from './RvterLogo';

export const DownloadCtaSection: React.FC = () => {
  return (
    <section id="descargar" className="py-24 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-[32px] bg-white border border-slate-200 shadow-sm relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2DA933]/15 text-[#2DA933] text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                Fletes Terrestres & Maquinaria Pesada
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight flex items-center justify-center lg:justify-start flex-wrap gap-2">
                <span>Control total en tu bolsillo con</span>
                <RvterWordmark fill="#2DA933" height={40} className="inline-block align-baseline" />
              </h2>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl">
                Únete a la plataforma que moderniza el transporte y la maquinaria pesada en Venezuela. Conecta sin intermediarios informales y opera con máxima seguridad financiera.
              </p>

              {/* Badges / Metrics */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#2DA933]" />
                  <span>Transacciones 100% Protegidas</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Cobertura en Todo el País</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Google Play Button */}
                <a
                  href="#descargar-android"
                  className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-[#2DA933] hover:bg-[#25882A] text-white font-bold text-sm shadow-lg shadow-[#2DA933]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  <div className="text-left leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-wider opacity-90">Google Play</span>
                      <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">Próximamente</span>
                    </div>
                    <div className="text-sm font-black">Android App</div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#descargar-ios"
                  className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-lg shadow-slate-900/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Smartphone className="w-5 h-5 text-white" />
                  <div className="text-left leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400">App Store</span>
                      <span className="text-[9px] bg-[#2DA933]/30 text-[#2DA933] px-1.5 py-0.5 rounded-full font-bold">Próximamente</span>
                    </div>
                    <div className="text-sm font-black">iOS (iPhone)</div>
                  </div>
                </a>
              </div>

            </div>

            {/* Right Interactive QR Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-md text-center space-y-4 max-w-xs w-full">
                <div className="text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 uppercase tracking-wider">
                  <QrCode className="w-4 h-4 text-[#2DA933]" />
                  Escanea para Descargar
                </div>

                {/* Vector QR Code Simulation */}
                <div className="p-4 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-inner">
                  <svg className="w-44 h-44" viewBox="0 0 100 100" fill="#121212">
                    {/* Corner squares */}
                    <rect x="5" y="5" width="25" height="25" fill="#121212" rx="4" />
                    <rect x="9" y="9" width="17" height="17" fill="#FFFFFF" rx="2" />
                    <rect x="13" y="13" width="9" height="9" fill="#2DA933" />

                    <rect x="70" y="5" width="25" height="25" fill="#121212" rx="4" />
                    <rect x="74" y="9" width="17" height="17" fill="#FFFFFF" rx="2" />
                    <rect x="78" y="13" width="9" height="9" fill="#2DA933" />

                    <rect x="5" y="70" width="25" height="25" fill="#121212" rx="4" />
                    <rect x="9" y="74" width="17" height="17" fill="#FFFFFF" rx="2" />
                    <rect x="13" y="78" width="9" height="9" fill="#2DA933" />

                    {/* Data dots */}
                    <rect x="35" y="10" width="6" height="6" />
                    <rect x="45" y="10" width="6" height="6" fill="#2DA933" />
                    <rect x="55" y="10" width="6" height="6" />
                    
                    <rect x="35" y="25" width="6" height="6" />
                    <rect x="45" y="25" width="6" height="6" />
                    <rect x="55" y="25" width="6" height="6" fill="#2DA933" />

                    <rect x="10" y="35" width="6" height="6" />
                    <rect x="25" y="35" width="6" height="6" fill="#2DA933" />
                    <rect x="40" y="40" width="20" height="20" rx="4" fill="#2DA933" />

                    <rect x="70" y="35" width="6" height="6" fill="#2DA933" />
                    <rect x="85" y="35" width="6" height="6" />
                    
                    <rect x="10" y="50" width="6" height="6" fill="#2DA933" />
                    <rect x="25" y="50" width="6" height="6" />
                    <rect x="70" y="50" width="6" height="6" />
                    <rect x="85" y="50" width="6" height="6" fill="#2DA933" />

                    <rect x="35" y="70" width="6" height="6" />
                    <rect x="45" y="70" width="6" height="6" fill="#2DA933" />
                    <rect x="55" y="70" width="6" height="6" />
                    
                    <rect x="70" y="70" width="6" height="6" fill="#2DA933" />
                    <rect x="85" y="70" width="6" height="6" />
                    <rect x="70" y="85" width="6" height="6" />
                    <rect x="85" y="85" width="6" height="6" fill="#2DA933" />
                  </svg>
                </div>

                <div className="text-[11px] text-gray-400">
                  Apunta con la cámara de tu teléfono móvil
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
