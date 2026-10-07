import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, CheckCircle2, Truck, HardHat, Radio, 
  AlertCircle 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 lg:pb-32 bg-white overflow-hidden">
      
      {/* Background Soft Glow Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Main Display Headline (Flighty 56px-64px Display Typography) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-[-0.03em] text-[#0F172A] leading-[1.04]">
            El Control De Tu Carga <br className="hidden sm:inline" />
            <span className="text-[#2DA933]">En Tiempo Real</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            El marketplace donde dueños de carga conectan con transportistas y maquinaria en Venezuela, con pagos en custodia previa y la meta de <strong className="text-slate-900 font-bold">Cero Retornos Vacíos</strong>.
          </p>

          {/* 2. Flighty Award Badge Pair */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-800 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#2DA933]" />
              <span>Custodia 100% Protegida</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-800 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Cobertura Nacional</span>
            </div>
          </div>
        </motion.div>

        {/* 3. The Flighty Signature: Central Device Surrounded by Orbiting Live-Data Cards */}
        <div className="mt-16 lg:mt-24 relative max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column Satellite Cards (3 Cards) */}
            <div className="lg:col-span-4 space-y-4 order-2 lg:order-1 text-left">
              
              {/* Card Left 1: Custodia C2P Confirmada */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="p-4 sm:p-5 rounded-[20px] bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 lg:-rotate-2 transition-transform"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#2DA933]/15 text-[#2DA933] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Custodia C2P Confirmada
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400">Ahora</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Fondos en custodia antes de cargar. El chofer inicia viaje seguro.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card Left 2: Ruta Asignada Telemetría */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="p-4 sm:p-5 rounded-[20px] bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 lg:rotate-1 transition-transform"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Ruta: Barquisimeto → Caracas
                      </h3>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">En Ruta</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      78 km/h • Telemetría satelital en vivo y geocerca activa.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card Left 3: Regla de Seguridad Estricta */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="p-4 sm:p-5 rounded-[20px] bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 lg:-rotate-1 transition-transform"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Regla de Seguridad
                      </h3>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">Estricta</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      El transportista nunca va a buscar la carga sin pago en custodia.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Central Phone Mockup Device (Realistic Smartphone with Active GPS Map) */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 my-4 lg:my-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="relative w-[280px] sm:w-[320px] max-w-full group"
              >
                {/* Backlight / Ambient Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#2DA933]/20 via-blue-500/10 to-transparent rounded-[60px] blur-2xl opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Real Smartphone with Active GPS Navigation Map */}
                <div className="relative rounded-[48px] p-1.5 transition-transform">
                  <img
                    src="/rvter-real-phone-gps.png"
                    alt="RVTER GPS Satelital En Vivo - Ruta Activa Barquisimeto a Caracas"
                    className="w-full h-auto object-contain block drop-shadow-2xl"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column Satellite Cards (3 Cards) */}
            <div className="lg:col-span-4 space-y-4 order-3 text-left">
              
              {/* Card Right 1: Jumbo CAT 320D Contratado */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="p-4 sm:p-5 rounded-[20px] bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 lg:rotate-2 transition-transform"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Jumbo CAT 320D Contratado
                      </h3>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">Maquinaria</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Cotización por horómetro directo con el propietario.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card Right 2: Offline Sync Activo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="p-4 sm:p-5 rounded-[20px] bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 lg:-rotate-1 transition-transform"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Offline Sync Activo
                      </h3>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Garantía</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Registro continuo de ruta en tramos sin señal celular.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card Right 3: Retorno Vacío Evitado */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="p-4 sm:p-5 rounded-[20px] bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 lg:rotate-2 transition-transform"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#2DA933]/15 text-[#2DA933] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Retorno Vacío Evitado
                      </h3>
                      <span className="text-[10px] font-bold text-[#2DA933] bg-[#2DA933]/15 px-1.5 py-0.5 rounded">Meta Lograda</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Viaje de regreso enlazado con carga agrícola hacia origen.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
