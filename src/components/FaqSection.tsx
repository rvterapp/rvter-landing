import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FormattedRvterText } from './RvterLogo';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t.faq.catAll },
    { id: 'general', label: t.faq.catGeneral },
    { id: 'maquinaria', label: t.faq.catMachinery },
    { id: 'pagos', label: t.faq.catPayments },
    { id: 'seguridad', label: t.faq.catSecurity },
    { id: 'conductores', label: t.faq.catDrivers }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? t.faq.items
    : t.faq.items.filter(f => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass border border-[#2DA933]/30 text-[#2DA933] text-xs font-bold uppercase tracking-wider shadow-xs">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.faq.desc}
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#2DA933] text-white shadow-md shadow-[#2DA933]/25'
                    : 'liquid-glass-subtle text-slate-700 hover:bg-white border border-white/60 shadow-2xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'border-2 border-[#2DA933] liquid-glass-card shadow-lg shadow-[#2DA933]/10'
                    : 'border border-white/70 liquid-glass hover:bg-white/80 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-base sm:text-lg text-[#0F172A]">
                    <FormattedRvterText text={faq.question} wordmarkHeight={15} />
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100/80 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2DA933]' : 'text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        <FormattedRvterText text={faq.answer} wordmarkHeight={14} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
