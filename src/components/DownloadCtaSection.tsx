import React from 'react';
import { Smartphone, Download, ShieldCheck, Star } from 'lucide-react';
import { RvterWordmark } from './RvterLogo';
import { useLanguage } from '../context/LanguageContext';

export const DownloadCtaSection: React.FC = () => {
  const { language } = useLanguage();
  const es = language === 'es';
  const soon = es ? 'Próximamente' : 'Coming soon';

  return (
    <section id="descargar" className="scroll-mt-24 py-24 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-[32px] bg-white border border-slate-200 shadow-sm relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-12 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2DA933]/15 text-[#1F7A25] text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-4 h-4" />
                {es ? 'Fletes Terrestres & Maquinaria Pesada' : 'Ground Freight & Heavy Machinery'}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight flex items-center justify-center flex-wrap gap-2">
                <span>{es ? 'Control total en tu bolsillo con' : 'Full control in your pocket with'}</span>
                <RvterWordmark fill="#2DA933" height={40} className="inline-block align-baseline" />
              </h2>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
                {es
                  ? 'Únete a la plataforma que moderniza el transporte y la maquinaria pesada en Venezuela. Conecta sin intermediarios informales y opera con pago resguardado en institución bancaria.'
                  : 'Join the platform modernizing freight and heavy machinery in Venezuela. Connect without informal middlemen and operate with payment held at a bank.'}
              </p>

              {/* Badges / Metrics */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#1F7A25]" />
                  <span>{es ? 'Pago resguardado en banco' : 'Payment held at a bank'}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{es ? 'Cobertura en Todo el País' : 'Nationwide coverage'}</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Google Play Button */}
                <div
                  aria-disabled="true"
                  className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-[#1F7A25] hover:bg-[#186320] text-white font-bold text-sm shadow-lg shadow-[#2DA933]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  <div className="text-left leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs uppercase tracking-wider opacity-90">Google Play</span>
                      <span className="text-[11px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">{soon}</span>
                    </div>
                    <div className="text-sm font-black">Android App</div>
                  </div>
                </div>

                {/* App Store Button */}
                <div
                  aria-disabled="true"
                  className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-lg shadow-slate-900/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Smartphone className="w-5 h-5 text-white" />
                  <div className="text-left leading-tight">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs uppercase tracking-wider text-slate-400">App Store</span>
                      <span className="text-[11px] bg-white/10 text-emerald-300 px-1.5 py-0.5 rounded-full font-bold">{soon}</span>
                    </div>
                    <div className="text-sm font-black">iOS (iPhone)</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
