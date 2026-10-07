import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, HardHat, Radio, CheckCircle2, Lock } from 'lucide-react';
import { RvterWordmark } from './RvterLogo';

// Configurable video background (highway / freight logistics)
const VIDEO_BG_URL = "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-highway-with-cars-and-trucks-42468-large.mp4";
const POSTER_FALLBACK = "/rvter-dashcam-preview.jpg";

export const HeroSection: React.FC = () => {
  const headlineWords = [
    "El", "marketplace", "logístico", "de", "fletes", "y", "maquinaria", "pesada."
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#F8FAFC]">
      
      {/* 1. Fullscreen Background Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={POSTER_FALLBACK}
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
        >
          <source src={VIDEO_BG_URL} type="video/mp4" />
        </video>

        {/* Subtle Liquid Depth Overlay (maintains video sharpness while ensuring text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2DA933]/10 via-transparent to-transparent" />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Animated Typography */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Industrial Liquid Glass Slogan Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-[#2DA933]/30 shadow-sm text-xs sm:text-sm font-bold text-[#0F172A]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DA933] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DA933]"></span>
              </span>
              <span className="tracking-wide uppercase text-[11px] sm:text-xs text-slate-800">
                CARGAS PROTEGIDAS, PAGOS SEGUROS Y RUTAS LLENAS
              </span>
            </motion.div>

            {/* Main Display Heading with Word-by-Word Motion */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#0F172A] leading-[1.08] flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 * index,
                      ease: [0.215, 0.61, 0.355, 1]
                    }}
                    className={word === "fletes" || word === "maquinaria" ? "text-[#2DA933]" : ""}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Plataforma Oficial</span>
                <RvterWordmark fill="#0F172A" height={22} className="inline-block" />
              </div>
            </div>

            {/* Subtitle with Fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0"
            >
              Conectamos usuarios con transportistas certificados y propietarios de maquinaria en Venezuela, con pagos garantizados en custodia fiduciaria previa y la meta de <strong className="text-slate-900 font-bold">cero retornos vacíos</strong>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Primary Action Button */}
              <a
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#2DA933] hover:bg-[#25882A] text-white font-bold text-base shadow-xl shadow-[#2DA933]/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Conoce Cómo Funciona</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Liquid Glass Action Button */}
              <a
                href="#seguridad"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl liquid-glass hover:bg-white text-slate-800 border border-slate-300 font-bold text-base shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShieldCheck className="w-4 h-4 text-[#2DA933]" />
                <span>Pilares de Seguridad y Custodia</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Floating Interactive Liquid Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="liquid-glass-card p-6 sm:p-7 rounded-[32px] shadow-2xl relative overflow-hidden space-y-5">
              
              {/* Card Header Status */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DA933] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2DA933]"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                    Sistema Operativo en Vivo
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#2DA933]/15 text-[#2DA933] text-[10px] font-black tracking-wider uppercase">
                  100% Protegido
                </span>
              </div>

              {/* Feature 1: Custodia Previa Obligatoria */}
              <div className="p-3.5 rounded-2xl bg-white/70 border border-white/80 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#2DA933]/15 text-[#2DA933] flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold text-slate-900">Pago en Custodia Previa</h3>
                    <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-semibold">Regla Estricta</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    El transportista solo busca la carga cuando los fondos están confirmados en custodia neutral.
                  </p>
                </div>
              </div>

              {/* Feature 2: Marketplace Directo de Maquinaria */}
              <div className="p-3.5 rounded-2xl bg-white/70 border border-white/80 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <HardHat className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold text-slate-900">Marketplace de Maquinaria</h3>
                    <span className="text-[9px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-semibold">Sin Intermediarios</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Dueños y contratistas publican sus propios equipos pesados para contratación directa por jornada u horómetro.
                  </p>
                </div>
              </div>

              {/* Feature 3: Rastreo Satelital & Offline Sync */}
              <div className="p-3.5 rounded-2xl bg-white/70 border border-white/80 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold text-slate-900">Rastreo Satelital Continuo</h3>
                    <span className="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold">Offline Sync</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Telemetría en carretera que continúa registrando aun en tramos de interrupción de cobertura celular.
                  </p>
                </div>
              </div>

              {/* Card Footer: Live Goal Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between text-xs shadow-md">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2DA933]" />
                  <span className="font-semibold text-[11px]">Meta Operativa de Rutas:</span>
                </div>
                <span className="text-[#2DA933] font-black uppercase text-[11px] tracking-wide">
                  Cero Retornos Vacíos
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
