import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SECURITY_PILLARS } from '../data/mockData';
import { Lock, Radio, QrCode, CheckCircle2, ShieldCheck, ArrowUpRight, Zap } from 'lucide-react';
import { RvterWordmark, FormattedRvterText } from './RvterLogo';

export const SecurityTechSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('custodia');

  const selectedPillar = SECURITY_PILLARS.find(p => p.id === selectedPillarId) || SECURITY_PILLARS[0];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lock': return <Lock className="w-6 h-6" />;
      case 'Radio': return <Radio className="w-6 h-6" />;
      case 'QrCode': return <QrCode className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="seguridad" className="py-24 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2DA933]/15 text-[#2DA933] text-xs font-bold uppercase tracking-wider">
            Tecnología y Blindaje Transaccional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight flex items-center justify-center flex-wrap gap-2">
            <span>Pilares de Seguridad</span>
            <RvterWordmark fill="#2DA933" height={32} className="inline-block align-baseline" />
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Diseñamos la infraestructura tecnológica necesaria para eliminar los riesgos de impago, extravíos de carga e irregularidades documentales.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SECURITY_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`cursor-pointer p-6 rounded-3xl border transition-all ${
                  isSelected
                    ? 'bg-white border-2 border-[#2DA933] shadow-md shadow-[#2DA933]/15'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${pillar.accentColor}20`,
                      color: pillar.accentColor,
                      border: `1px solid ${pillar.accentColor}40`
                    }}
                  >
                    {getPillarIcon(pillar.icon)}
                  </div>

                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {pillar.statValue}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  <FormattedRvterText text={pillar.title} wordmarkHeight={16} />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <FormattedRvterText text={pillar.subtitle} wordmarkHeight={12} />
                </p>

                <div className="flex items-center gap-1 text-xs font-bold text-[#2DA933]">
                  <span>{isSelected ? 'Explorando detalles' : 'Ver cómo funciona'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive Detailed View for Selected Pillar */}
        <motion.div
          key={selectedPillar.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ backgroundColor: `${selectedPillar.accentColor}20`, color: selectedPillar.accentColor }}
                >
                  {getPillarIcon(selectedPillar.icon)}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  <FormattedRvterText text={selectedPillar.title} wordmarkHeight={24} />
                </h3>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                <FormattedRvterText text={selectedPillar.description} wordmarkHeight={15} />
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {selectedPillar.bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2DA933] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Visual Graphic on Right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-4 text-center">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[#2DA933]/20 border border-[#2DA933]/50 text-[#2DA933]">
                  <Zap className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Estado del Sistema</div>
                  <div className="text-lg font-black text-[#0F172A] mt-1">100% Blindado & Auditado</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 text-left text-xs text-slate-700 space-y-2.5 border border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tasa de cambio:</span>
                    <span className="text-[#2DA933] font-bold">Oficial BCV</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Telemetría & GPS:</span>
                    <span className="text-blue-600 font-bold">&lt; 3 seg • Offline Sync</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Validación SIGESAI:</span>
                    <span className="text-amber-600 font-bold">Instantánea OCR / QR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Acceso & Desembolso:</span>
                    <span className="text-emerald-700 font-bold">PIN Cabina & Romana</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
