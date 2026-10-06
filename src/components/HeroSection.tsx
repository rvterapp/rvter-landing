import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, UserCheck, Truck, Sparkles, CheckCircle2, Lock, Radio } from 'lucide-react';
import { RvterWordmark } from './RvterLogo';

interface HeroProps {
  selectedRole: 'user' | 'driver';
  setSelectedRole: (role: 'user' | 'driver') => void;
}

export const HeroSection: React.FC<HeroProps> = ({ selectedRole, setSelectedRole }) => {
  const [activeTabPreview, setActiveTabPreview] = useState<'map' | 'maquinaria' | 'custodia'>('map');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Official Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2DA933]/15 border border-[#2DA933]/30 text-xs sm:text-sm font-bold text-[#2DA933]"
            >
              <Sparkles className="w-4 h-4" />
              <span>FLETES TERRESTRES & ALQUILER DE MAQUINARIA PESADA</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.25]">
                Descubre cómo <br className="hidden sm:inline" />
                funciona <RvterWordmark fill="#2DA933" height={58} className="inline-block align-baseline ml-1 sm:ml-2 drop-shadow-sm" />
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                La plataforma inteligente para fletes terrestres y alquiler de maquinaria pesada en Venezuela. Conectamos generadores con transportistas y operadores certificados mediante 
                <strong className="text-slate-900 font-semibold"> custodia de pago C2P con liberación por PIN en destino</strong>, 
                <strong className="text-slate-900 font-semibold"> rastreo GPS con sincronización offline</strong> y 
                <strong className="text-slate-900 font-semibold"> validación SIGESAI</strong>.
              </p>
            </motion.div>

            {/* Interactive Role Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <div className="p-1.5 rounded-2xl bg-white border border-slate-300 inline-flex shadow-sm">
                <button
                  onClick={() => setSelectedRole('user')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    selectedRole === 'user'
                      ? 'bg-[#2DA933] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <UserCheck className="w-4 h-4" />
                  Generadores de Carga (USER)
                </button>
                <button
                  onClick={() => setSelectedRole('driver')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    selectedRole === 'driver'
                      ? 'bg-[#2DA933] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  Transportistas & Maquinaria (CARRIER)
                </button>
              </div>
            </motion.div>

            {/* Quick Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-4 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-[#2DA933] text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Custodia C2P</span>
                </div>
                <p className="text-[11px] text-slate-500">Fondos protegidos a tasa BCV</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold">
                  <Truck className="w-4 h-4" />
                  <span>Maquinaria Pesada</span>
                </div>
                <p className="text-[11px] text-slate-500">Jornadas 8h, Lowboy y Operador</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold">
                  <Radio className="w-4 h-4" />
                  <span>Offline Sync</span>
                </div>
                <p className="text-[11px] text-slate-500">Rastreo continuo sin señal</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Live App Simulator / Interactive Mockup (Light Mode) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Phone Frame Device Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[40px] p-3 bg-white border-4 border-slate-200 shadow-2xl shadow-slate-200/80"
            >
              {/* Phone Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-200 rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-300 mr-2" />
                <div className="w-10 h-1 rounded-full bg-slate-300" />
              </div>

              {/* Screen Content - Light Theme */}
              <div className="relative rounded-[32px] overflow-hidden bg-[#F8FAFC] border border-slate-200 p-4 pt-10 min-h-[580px] flex flex-col justify-between">
                
                {/* App Screen Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <RvterWordmark fill="#0F172A" height={22} />
                    <span className="font-bold text-[10px] text-slate-400 uppercase tracking-wider ml-1">App</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#2DA933]/15 text-[#2DA933] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DA933] animate-pulse" />
                    En Ruta Activa
                  </span>
                </div>

                {/* Interactive Simulation Switcher */}
                <div className="grid grid-cols-3 gap-1 my-3 p-1 rounded-xl bg-slate-200/70">
                  <button
                    onClick={() => setActiveTabPreview('map')}
                    className={`py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                      activeTabPreview === 'map' ? 'bg-[#2DA933] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Fletes GPS
                  </button>
                  <button
                    onClick={() => setActiveTabPreview('maquinaria')}
                    className={`py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                      activeTabPreview === 'maquinaria' ? 'bg-[#2DA933] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Maquinaria
                  </button>
                  <button
                    onClick={() => setActiveTabPreview('custodia')}
                    className={`py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                      activeTabPreview === 'custodia' ? 'bg-[#2DA933] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Custodia C2P
                  </button>
                </div>

                {/* Tab Dynamic Content */}
                <div className="flex-1 flex flex-col justify-center">
                  {activeTabPreview === 'map' && (
                    <div className="space-y-3">
                      {/* Map Simulation Graphic */}
                      <div className="relative h-44 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center p-3">
                        
                        {/* Simulated Route Line */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
                          <path
                            d="M 30,90 Q 100,20 170,40"
                            fill="none"
                            stroke="#2DA933"
                            strokeWidth="3"
                            strokeDasharray="6 3"
                          />
                        </svg>

                        {/* Origin Pin */}
                        <div className="absolute bottom-4 left-6 flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-bold">A</div>
                          <span className="text-[9px] font-semibold text-slate-700 mt-0.5">Barquisimeto</span>
                        </div>

                        {/* Truck in transit */}
                        <div className="absolute top-7 left-24 p-1.5 rounded-full bg-[#2DA933] text-white shadow-md animate-bounce">
                          <Truck className="w-4 h-4" />
                        </div>

                        {/* Destination Pin */}
                        <div className="absolute top-4 right-6 flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-[#2DA933] text-white flex items-center justify-center text-[8px] font-bold">B</div>
                          <span className="text-[9px] font-semibold text-slate-700 mt-0.5">Caracas</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-600">Progreso del flete:</span>
                          <span className="text-[#2DA933] font-bold">68% completado</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                          <div className="w-[68%] h-full bg-[#2DA933] rounded-full" />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 pt-1 font-medium">
                          <span>Unidad: Tritón F-350</span>
                          <span>ETA: 1h 45m</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTabPreview === 'maquinaria' && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                            Línea Amarilla Verificada
                          </span>
                          <span className="text-[11px] font-bold text-[#2DA933]">8h Jornada</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-900">Jumbo Excavadora CAT 320D</div>
                          <div className="text-xs text-slate-500 mt-0.5">Oruga 22T • Balde 1.2 m³</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1 text-slate-600">
                          <div className="flex justify-between font-medium">
                            <span>Modalidad:</span>
                            <span className="text-slate-900 font-bold">Por Jornada o Horómetro</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>Operador Certificado:</span>
                            <span className="text-[#2DA933] font-bold">Incluido</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>Traslado en Lowboy:</span>
                            <span className="text-blue-600 font-bold">Coordinado en App</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 text-center font-medium">
                          Cotizaciones directas con contratistas de faena
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTabPreview === 'custodia' && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-[#2DA933]/15 border border-[#2DA933]/30 flex items-center justify-center mx-auto text-[#2DA933]">
                          <Lock className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-medium">Monto en Custodia C2P Protegida</div>
                          <div className="text-2xl font-black text-slate-900">$ 350.00 USD</div>
                          <div className="text-[11px] text-[#2DA933] font-bold mt-0.5">Liberación por Código PIN en Destino</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[10px] text-slate-600 text-left flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2DA933] shrink-0 mt-0.5" />
                          <span>Fondos resguardados a tasa oficial BCV. Se transfieren al chofer al validar el PIN de entrega.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Mockup Action */}
                <div className="pt-3 border-t border-slate-200">
                  <a
                    href="#descargar"
                    className="w-full py-2.5 rounded-xl bg-[#2DA933] hover:bg-[#25882A] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#2DA933]/25"
                  >
                    <span>Abrir en la App Oficial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
