import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PackagePlus, 
  CheckCircle2, Truck, Lock, UserCheck, Star, 
  Sparkles, Radio
} from 'lucide-react';
import { RvterWordmark } from './RvterLogo';

interface FlowStep {
  id: number;
  title: string;
  subtitle: string;
  duration: number; // in seconds
  description: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    id: 1,
    title: '1. Publicación de Carga',
    subtitle: 'El usuario define origen, destino y producto',
    duration: 5,
    description: 'En menos de 60 segundos defines tu flete y el sistema calcula la tarifa de mercado.'
  },
  {
    id: 2,
    title: '2. Ofertas y Contraofertas',
    subtitle: 'Transportistas certificados envían propuestas o contraofertas',
    duration: 5,
    description: 'Comparas reputación, camión verificado y aceptas la tarifa o contraoferta directa.'
  },
  {
    id: 3,
    title: '3. Custodia de Pago C2P',
    subtitle: 'Pago resguardado en custodia neutral',
    duration: 5,
    description: 'El dinero queda bloqueado de forma neutral y segura antes de iniciar viaje.'
  },
  {
    id: 4,
    title: '4. Rastreo GPS & Modo Cabina',
    subtitle: 'Telemetría satelital y acceso chofer por PIN de Cabina',
    duration: 6,
    description: 'Monitoreo en tiempo real con geocercas, telemetría de ruta y Modo Cabina para el chofer.'
  },
  {
    id: 5,
    title: '5. Entrega en Destino y Liquidación',
    subtitle: 'Liberación instantánea con código de entrega conforme',
    duration: 5,
    description: 'El receptor suministra el código en destino y el transportista recibe su Pago Móvil al instante.'
  }
];

export const FlowVideoSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-play timer for animation
  useEffect(() => {
    const interval = 100; // ms
    const stepDuration = FLOW_STEPS[currentStep].duration * 1000;
    const increment = (interval / stepDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((curr) => (curr + 1) % FLOW_STEPS.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentStep]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
  };

  return (
    <section className="py-20 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2DA933]/15 text-[#2DA933] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Simulación Animada del Flujo
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight flex items-center justify-center flex-wrap gap-2">
            <span>Mira cómo funciona la experiencia</span>
            <RvterWordmark fill="#2DA933" height={32} className="inline-block align-baseline" />
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Animación interactiva del recorrido completo: desde la publicación de la carga hasta el pago final.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Step Controls & Explanation */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Step Progress Cards */}
            <div className="space-y-2.5">
              {FLOW_STEPS.map((step, idx) => {
                const isActive = idx === currentStep;
                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(idx)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition-all relative overflow-hidden ${
                      isActive
                        ? 'bg-white border-2 border-[#2DA933] shadow-md shadow-[#2DA933]/15'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Active Step Progress Fill */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 top-0 bg-[#2DA933]/10 transition-all duration-100 ease-linear pointer-events-none"
                        style={{ width: `${progress}%` }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <div>
                        <div className={`text-xs font-bold ${isActive ? 'text-[#2DA933]' : 'text-slate-500'}`}>
                          {step.title}
                        </div>
                        <div className="text-sm font-semibold text-[#0F172A] mt-0.5">
                          {step.subtitle}
                        </div>
                      </div>
                      
                      {isActive ? (
                        <div className="w-2 h-2 rounded-full bg-[#2DA933] animate-ping shrink-0" />
                      ) : (
                        <span className="text-[10px] text-slate-400 shrink-0">{step.duration}s</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right: Animated Phone Screen Device */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[420px] rounded-[36px] p-3 bg-slate-100 border border-slate-300 shadow-xl">
              
              {/* Phone Mockup Screen */}
              <div className="rounded-[28px] bg-[#F8FAFC] border border-slate-200 p-4 min-h-[480px] flex flex-col justify-between overflow-hidden relative shadow-inner">
                
                {/* Top Status Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <RvterWordmark fill="#0F172A" height={16} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">9:41 AM</span>
                </div>

                {/* Animated Dynamic Stage Visuals */}
                <div className="my-auto py-4">
                  <AnimatePresence mode="wait">
                    
                    {/* STAGE 1: Publicación */}
                    {currentStep === 0 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-3"
                      >
                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#2DA933] flex items-center gap-1.5">
                              <PackagePlus className="w-4 h-4" />
                              Nueva Publicación de Carga
                            </span>
                            <span className="text-[10px] font-semibold bg-[#2DA933]/15 text-[#2DA933] px-2 py-0.5 rounded-full">
                              Agropecuario
                            </span>
                          </div>

                          <div className="space-y-1.5 text-xs">
                            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                              <span className="text-slate-500">Origen:</span>
                              <span className="font-semibold text-[#0F172A]">Barquisimeto, Lara</span>
                            </div>
                            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                              <span className="text-slate-500">Destino:</span>
                              <span className="font-semibold text-[#0F172A]">Caracas, Dto. Capital</span>
                            </div>
                            <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                              <span className="text-slate-500">Carga:</span>
                              <span className="font-semibold text-[#0F172A]">Maíz Amarillo (25 Ton)</span>
                            </div>
                          </div>

                          <div className="pt-1 flex items-center justify-between text-xs">
                            <span className="text-slate-500">Tarifa sugerida:</span>
                            <span className="font-black text-[#2DA933] text-sm">$ 350.00 USD</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#2DA933]/15 text-[11px] text-[#2DA933] flex items-center gap-2 font-medium">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>¡Carga publicada! Notificando a 14 camiones cercanos...</span>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 2: Ofertas */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-3"
                      >
                        <div className="text-xs font-bold text-slate-500 flex items-center justify-between">
                          <span>Ofertas Recibidas (3)</span>
                          <span className="text-[#2DA933] font-mono font-bold">En vivo</span>
                        </div>

                        {/* Driver Card 1 */}
                        <div className="p-3 rounded-2xl bg-white border border-[#2DA933] shadow-md space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-blue-500/15 text-blue-600 flex items-center justify-center font-bold text-xs">
                                CM
                              </div>
                              <div>
                                <div className="text-xs font-bold text-[#0F172A] flex items-center gap-1">
                                  <span>Carlos Mendoza</span>
                                  <UserCheck className="w-3 h-3 text-[#2DA933]" />
                                </div>
                                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                  <span>4.9 (84 viajes) • Gandola Mack</span>
                                </div>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-white bg-[#2DA933] px-2 py-0.5 rounded-lg">
                              $ 340.00
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-500">
                            <span>Disponibilidad: Inmediata</span>
                            <span className="text-[#2DA933] font-bold">¡Oferta Seleccionada!</span>
                          </div>
                        </div>

                        {/* Driver Card 2 */}
                        <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 opacity-75 flex items-center justify-between text-xs">
                          <span className="text-slate-700">Roberto P. (Batea 30T)</span>
                          <span className="text-slate-500 font-semibold">$ 360.00</span>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 3: Custodia C2P */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-3"
                      >
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-3">
                          <div className="w-10 h-10 rounded-full bg-[#2DA933]/15 border border-[#2DA933]/30 flex items-center justify-center mx-auto text-[#2DA933]">
                            <Lock className="w-5 h-5" />
                          </div>

                          <div>
                            <div className="text-[11px] text-slate-500">Custodia Neutral C2P Activada</div>
                            <div className="text-xl font-black text-[#0F172A] mt-0.5">$ 340.00 USD</div>
                            <div className="text-[10px] text-[#2DA933] font-semibold">Fondos Protegidos en Custodia</div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-slate-50 text-[10px] text-slate-600 text-left flex items-start gap-2 border border-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#2DA933] shrink-0 mt-0.5" />
                            <span>Fondos debitados y resguardados. El chofer inicia viaje con pago 100% garantizado.</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 4: Rastreo GPS */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-2.5"
                      >
                        <div className="relative h-36 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
                          
                          {/* Route SVG Line */}
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                            <path
                              d="M 30,75 Q 100,15 170,30"
                              fill="none"
                              stroke="#2DA933"
                              strokeWidth="3"
                              strokeDasharray="5 3"
                            />
                          </svg>

                          {/* Origin Pin */}
                          <div className="absolute bottom-3 left-6 text-[8px] font-bold text-slate-500">
                            Barquisimeto
                          </div>

                          {/* Animated Moving Truck */}
                          <motion.div
                            animate={{ x: [0, 50, 90], y: [0, -20, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="p-1.5 rounded-full bg-[#2DA933] text-white shadow-lg z-10"
                          >
                            <Truck className="w-3.5 h-3.5" />
                          </motion.div>

                          {/* Destination Pin */}
                          <div className="absolute top-3 right-6 text-[8px] font-bold text-[#2DA933]">
                            Caracas
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 text-blue-600">
                            <Radio className="w-3.5 h-3.5 animate-pulse" />
                            <span>GPS Satelital en Vivo</span>
                          </div>
                          <span className="text-[#2DA933] font-bold">78 km/h • ETA: 1h 20m</span>
                        </div>
                      </motion.div>
                    )}

                    {/* STAGE 5: Entrega y Liberación */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-3 text-center"
                      >
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                          <div className="w-12 h-12 rounded-full bg-[#2DA933] text-white flex items-center justify-center mx-auto shadow-md shadow-[#2DA933]/25">
                            <CheckCircle2 className="w-7 h-7" />
                          </div>

                          <div>
                            <div className="text-xs font-bold text-[#2DA933]">¡Carga Entregada con Éxito!</div>
                            <div className="text-sm font-black text-[#0F172A] mt-0.5">Pago Móvil Liquidado al Chofer</div>
                            <div className="text-[10px] text-slate-500 mt-1">Comprobante #C2P-882941-PROT</div>
                          </div>

                          <div className="pt-2 border-t border-slate-100 flex justify-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom App Bar */}
                <div className="pt-2 border-t border-slate-200 text-center">
                  <span className="text-[10px] text-slate-500">
                    {FLOW_STEPS[currentStep].description}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
