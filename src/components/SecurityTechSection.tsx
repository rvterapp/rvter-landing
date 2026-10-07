import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Radio, QrCode, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { FormattedRvterText } from './RvterLogo';
import { useLanguage } from '../context/LanguageContext';

export const SecurityTechSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('custodia');
  const { language, t } = useLanguage();

  const selectedPillar = t.security.pillars.find(p => p.id === selectedPillarId) || t.security.pillars[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'custodia': return <Lock className="w-6 h-6" />;
      case 'gps': return <Radio className="w-6 h-6" />;
      case 'guias': return <QrCode className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  const getPillarColor = (id: string) => {
    switch (id) {
      case 'custodia': return '#2DA933';
      case 'gps': return '#3B82F6';
      case 'guias': return '#F59E0B';
      default: return '#2DA933';
    }
  };

  return (
    <section id="seguridad" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-[#2DA933]/30 text-[#2DA933] text-xs font-bold uppercase tracking-wider shadow-xs">
            {t.security.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight flex items-center justify-center flex-wrap gap-2">
            <span>{t.security.title}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.security.desc}
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.security.pillars.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            const accentColor = getPillarColor(pillar.id);
            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`cursor-pointer p-6 rounded-3xl transition-all ${
                  isSelected
                    ? 'liquid-glass-card border-2 border-[#2DA933] shadow-lg shadow-[#2DA933]/15'
                    : 'liquid-glass-subtle hover:bg-white/80 border border-white/60 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${accentColor}20`,
                      color: accentColor,
                      border: `1px solid ${accentColor}40`
                    }}
                  >
                    {getPillarIcon(pillar.id)}
                  </div>

                  <span className="text-xs font-bold px-2.5 py-1 rounded-full liquid-glass text-slate-700 border border-white/70">
                    {pillar.statValue}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  <FormattedRvterText text={pillar.title} wordmarkHeight={16} />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <FormattedRvterText text={pillar.subtitle} wordmarkHeight={12} />
                </p>
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
          className="p-8 sm:p-10 rounded-3xl liquid-glass-card shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    backgroundColor: `${getPillarColor(selectedPillar.id)}20`,
                    color: getPillarColor(selectedPillar.id)
                  }}
                >
                  {getPillarIcon(selectedPillar.id)}
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
              <div className="w-full max-w-sm p-6 rounded-2xl bg-white/80 border border-white/90 shadow-xl space-y-4 text-center">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[#2DA933]/20 border border-[#2DA933]/50 text-[#2DA933]">
                  <Zap className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    {language === 'es' ? 'Estado del Sistema' : 'System Status'}
                  </div>
                  <div className="text-lg font-black text-[#0F172A] mt-1">
                    {language === 'es' ? '100% Blindado & Auditado' : '100% Protected & Audited'}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50/80 text-left text-xs text-slate-700 space-y-2.5 border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      {language === 'es' ? 'Custodia Financiera:' : 'Financial Escrow:'}
                    </span>
                    <span className="text-[#2DA933] font-bold">
                      {language === 'es' ? '100% Protegida' : '100% Protected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      {language === 'es' ? 'Telemetría & GPS:' : 'Telemetry & GPS:'}
                    </span>
                    <span className="text-blue-600 font-bold">&lt; 3 seg • Offline Sync</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      {language === 'es' ? 'Guías de Movilización:' : 'Transit Guides:'}
                    </span>
                    <span className="text-amber-600 font-bold">
                      {language === 'es' ? 'Validación Digital' : 'Digital Verification'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      {language === 'es' ? 'Acceso & Desembolso:' : 'Access & Payout:'}
                    </span>
                    <span className="text-emerald-700 font-bold">
                      {language === 'es' ? 'PIN Cabina & Destino' : 'Cabin & Delivery PIN'}
                    </span>
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
