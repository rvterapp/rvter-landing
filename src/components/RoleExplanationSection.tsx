import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PackagePlus, Gavel, ShieldCheck, MapPin, CheckCircle2, 
  UserCheck, Truck, BadgeDollarSign, Navigation, Wallet, 
  ChevronRight, Sparkles 
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-[#2DA933]/30 text-[#2DA933] text-xs font-bold uppercase tracking-wider shadow-xs">
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
            <div className="p-1.5 rounded-2xl liquid-glass border border-white/80 inline-flex shadow-sm">
              <button
                onClick={() => { onRoleChange('user'); setActiveStepIndex(0); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  currentRole === 'user'
                    ? 'bg-[#2DA933] text-white shadow-md shadow-[#2DA933]/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                {t.roles.userTab}
              </button>
              <button
                onClick={() => { onRoleChange('driver'); setActiveStepIndex(0); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  currentRole === 'driver'
                    ? 'bg-[#2DA933] text-white shadow-md shadow-[#2DA933]/25'
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Steps List */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <motion.div
                  key={step.number}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-4 rounded-2xl transition-all ${
                    isActive
                      ? 'liquid-glass-card border-2 border-[#2DA933] shadow-lg shadow-[#2DA933]/15'
                      : 'liquid-glass-subtle hover:bg-white/80 border border-white/60 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#2DA933] text-white shadow-xs'
                          : 'bg-slate-200/80 text-slate-700'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`font-bold text-sm sm:text-base truncate ${isActive ? 'text-[#0F172A]' : 'text-slate-700'}`}>
                          {step.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#2DA933]/15 text-[#2DA933] shrink-0">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {step.shortDesc}
                      </p>
                    </div>

                    <ChevronRight className={`w-5 h-5 shrink-0 self-center transition-transform ${isActive ? 'text-[#2DA933] translate-x-1' : 'text-slate-400'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Detailed Step Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentRole}-${activeStep.number}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-3xl liquid-glass-card shadow-2xl relative overflow-hidden"
              >
                <div className="relative z-10 space-y-6">
                  {/* Step Header Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#2DA933]/10 border border-[#2DA933]/30 flex items-center justify-center text-[#2DA933]">
                        {getStepIcon(currentRole, activeStepIndex)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#2DA933] uppercase tracking-wider">
                          {language === 'es' ? `Paso ${activeStep.number} de 05` : `Step ${activeStep.number} of 05`}
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">
                          {activeStep.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#2DA933]/15 text-[#2DA933]">
                      {activeStep.badge}
                    </span>
                  </div>

                  {/* Full Step Explanation */}
                  <div className="text-base text-slate-700 leading-relaxed">
                    <FormattedRvterText text={activeStep.fullDesc} wordmarkHeight={14} />
                  </div>

                  {/* Highlight Feature Card */}
                  <div className="p-4 rounded-2xl bg-white/70 border border-white/80 space-y-2 shadow-xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#2DA933]" />
                      <span>{language === 'es' ? 'Ventaja Tecnológica' : 'Key Advantage'}</span>
                      <RvterWordmark fill="#2DA933" height={13} className="inline-block align-middle ml-0.5" />
                    </div>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      {activeStep.highlight}
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
