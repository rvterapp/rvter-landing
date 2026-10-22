import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PackagePlus, Gavel, ShieldCheck, MapPin, CheckCircle2, 
  UserCheck, Truck, BadgeDollarSign, Navigation, Wallet, 
  ChevronRight, ChevronLeft, Sparkles, User, Smartphone, Landmark
} from 'lucide-react';
import { RvterWordmark, FormattedRvterText } from './RvterLogo';
import { useLanguage } from '../context/LanguageContext';

interface RoleExplanationProps {
  currentRole: 'user' | 'driver';
  onRoleChange: (role: 'user' | 'driver') => void;
}

export const RoleExplanationSection: React.FC<RoleExplanationProps> = ({ currentRole, onRoleChange }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { language, t } = useLanguage();

  const steps = currentRole === 'user' ? t.roles.userSteps : t.roles.driverSteps;
  const activeStep = steps[activeStepIndex] || steps[0];

  const getStepIcon = (role: 'user' | 'driver', index: number) => {
    const props = { className: "w-6 h-6" };
    if (role === 'user') {
      switch (index) {
        case 0: return <PackagePlus {...props} />;
        case 1: return <Gavel {...props} />;
        case 2: return <ShieldCheck {...props} />;
        case 3: return <MapPin {...props} />;
        case 4: return <CheckCircle2 {...props} />;
        default: return <Sparkles {...props} />;
      }
    } else {
      switch (index) {
        case 0: return <UserCheck {...props} />;
        case 1: return <Truck {...props} />;
        case 2: return <BadgeDollarSign {...props} />;
        case 3: return <Navigation {...props} />;
        case 4: return <Wallet {...props} />;
        default: return <Sparkles {...props} />;
      }
    }
  };

  return (
    <section id="como-funciona" className="py-24 relative">
      <div id="flujo-usuarios" className="absolute -top-24" />
      <div id="flujo-transportistas" className="absolute -top-24" />
      <div id="maquinaria" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-[#2DA933]/30 text-[#1F7A25] text-xs font-bold uppercase tracking-wider shadow-sm">
            {t.roles.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {t.roles.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.roles.desc}
          </p>

          {/* Interactive Role Tabs - Liquid Glass Pill */}
          <div className="pt-4 flex justify-center">
            <div role="tablist" className="p-1.5 rounded-2xl liquid-glass border border-white/80 inline-flex shadow-sm">
              <button
                role="tab"
                aria-selected={currentRole === 'user'}
                onClick={() => { onRoleChange('user'); setActiveStepIndex(0); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  currentRole === 'user'
                    ? 'bg-[#1F7A25] text-white shadow-md shadow-[#2DA933]/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                {t.roles.userTab}
              </button>
              <button
                role="tab"
                aria-selected={currentRole === 'driver'}
                onClick={() => { onRoleChange('driver'); setActiveStepIndex(0); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  currentRole === 'driver'
                    ? 'bg-[#1F7A25] text-white shadow-md shadow-[#2DA933]/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Truck className="w-4 h-4" />
                {t.roles.driverTab}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Step Explorer (Desktop 2-Column Layout / Mobile Stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Navigation Steps List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <motion.div
                  key={step.number}
                  whileHover={{ x: 4 }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveStepIndex(idx); } }}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-4 rounded-2xl transition-all lg:flex-1 ${
                    isActive
                      ? 'liquid-glass-card border-2 border-[#2DA933] shadow-lg shadow-[#2DA933]/15'
                      : 'liquid-glass-subtle hover:bg-white/80 border border-white/60 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4 h-full">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#1F7A25] text-white shadow-sm'
                          : 'bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col items-start gap-1">
                        <h3 className={`font-bold text-sm sm:text-base ${isActive ? 'text-[#0F172A]' : 'text-slate-700'}`}>
                          {step.title}
                        </h3>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#2DA933]/15 text-[#1F7A25] shrink-0">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {step.shortDesc}
                      </p>
                    </div>

                    <ChevronRight className={`w-5 h-5 shrink-0 self-center transition-transform ${isActive ? 'text-[#1F7A25] translate-x-1' : 'text-slate-500'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Detailed Step Showcase Card */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentRole}-${activeStep.number}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col p-8 sm:p-10 rounded-3xl liquid-glass-card shadow-2xl relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col flex-1 gap-6">
                  {/* Step Header Badge & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#2DA933]/10 border border-[#2DA933]/30 flex items-center justify-center text-[#1F7A25] shrink-0">
                      {getStepIcon(currentRole, activeStepIndex)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1F7A25] uppercase tracking-wider">
                        {language === 'es' ? `Paso ${activeStep.number} de 05` : `Step ${activeStep.number} of 05`}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900">
                        {activeStep.title}
                      </h3>
                    </div>
                  </div>

                  {/* Full Step Explanation */}
                  <div className="text-base text-slate-700 leading-relaxed">
                    <FormattedRvterText text={activeStep.fullDesc} wordmarkHeight={14} />
                  </div>

                  {/* You / RVTER / Payment */}
                  <dl className="space-y-3">
                    {[
                      { Icon: User, label: language === 'es' ? 'Tú haces' : 'You do', text: activeStep.you },
                      { Icon: Smartphone, label: language === 'es' ? 'RVTER hace' : 'RVTER does', text: activeStep.rvter },
                      { Icon: Landmark, label: language === 'es' ? 'Sobre el pago' : 'About the payment', text: activeStep.payment },
                    ].map(({ Icon, label, text }) => (
                      <div key={label} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="w-9 h-9 rounded-xl bg-[#2DA933]/10 text-[#1F7A25] flex items-center justify-center shrink-0">
                          <Icon className="w-[18px] h-[18px]" />
                        </div>
                        <div className="min-w-0">
                          <dt className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</dt>
                          <dd className="text-sm font-semibold text-[#0F172A] mt-0.5">{text}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto space-y-5">
                    {/* Highlight Feature Card */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#1F7A25]" />
                        <span>{language === 'es' ? 'Ventaja Tecnológica' : 'Key Advantage'}</span>
                        <RvterWordmark fill="#2DA933" height={13} className="inline-block align-middle ml-0.5" />
                      </div>
                      <div className="text-sm font-semibold text-[#0F172A]">
                        {activeStep.highlight}
                      </div>
                    </div>

                    {/* Progress & Prev/Next */}
                    <div className="flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                        disabled={activeStepIndex === 0}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {language === 'es' ? 'Anterior' : 'Previous'}
                      </button>
                      <div className="flex items-center gap-2">
                        {steps.map((step, idx) => (
                          <button
                            key={step.number}
                            type="button"
                            onClick={() => setActiveStepIndex(idx)}
                            aria-label={language === 'es' ? `Ir al paso ${step.number}` : `Go to step ${step.number}`}
                            aria-current={idx === activeStepIndex}
                            className={`h-2 rounded-full transition-all ${idx === activeStepIndex ? 'w-6 bg-[#1F7A25]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveStepIndex(Math.min(steps.length - 1, activeStepIndex + 1))}
                        disabled={activeStepIndex === steps.length - 1}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-white bg-[#1F7A25] hover:bg-[#186320] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      >
                        {language === 'es' ? 'Siguiente' : 'Next'}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
