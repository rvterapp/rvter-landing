import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VEHICLE_CATALOG, MACHINERY_CATALOG } from '../data/mockData';
import { Truck, Weight, Box, Check, ArrowRight, Construction } from 'lucide-react';

export const FleetCatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'camiones' | 'maquinaria'>('camiones');
  const [selectedTruckId, setSelectedTruckId] = useState<string>('cava');
  const [selectedMachineryId, setSelectedMachineryId] = useState<string>('jumbo');

  // Detect #maquinaria anchor in hash
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#maquinaria') {
        setActiveCategory('maquinaria');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const currentList = activeCategory === 'camiones' ? VEHICLE_CATALOG : MACHINERY_CATALOG;
  const currentSelectedId = activeCategory === 'camiones' ? selectedTruckId : selectedMachineryId;
  const setSelectedId = activeCategory === 'camiones' ? setSelectedTruckId : setSelectedMachineryId;

  const selectedVehicle = currentList.find(v => v.id === currentSelectedId) || currentList[0];

  return (
    <section id="flota" className="py-24 bg-white relative border-t border-slate-200">
      <div id="maquinaria" className="scroll-mt-28" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2DA933]/10 text-[#2DA933] text-xs font-bold uppercase tracking-wider">
            Catálogo Oficial de Flota y Equipos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Camiones de Carga & Alquiler de Maquinaria Pesada
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Encuentra la unidad exacta para tu rubro: desde mudanzas y víveres hasta movimientos de tierra, obras civiles y faenas agrícolas.
          </p>

          {/* Dual Category Switcher Pill */}
          <div className="pt-4 flex justify-center">
            <div className="p-1.5 rounded-2xl bg-slate-100 border border-slate-200 inline-flex shadow-inner">
              <button
                onClick={() => setActiveCategory('camiones')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === 'camiones'
                    ? 'bg-[#2DA933] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>Camiones de Carga</span>
              </button>
              <button
                onClick={() => setActiveCategory('maquinaria')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === 'maquinaria'
                    ? 'bg-[#2DA933] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Construction className="w-4 h-4" />
                <span>Alquiler de Maquinaria Pesada</span>
              </button>
            </div>
          </div>
        </div>

        {/* Vehicle Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {currentList.map((vehicle) => {
            const isSelected = vehicle.id === currentSelectedId;
            return (
              <button
                key={vehicle.id}
                onClick={() => setSelectedId(vehicle.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-[#2DA933] text-white shadow-lg shadow-[#2DA933]/25 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {activeCategory === 'camiones' ? <Truck className="w-4 h-4" /> : <Construction className="w-4 h-4" />}
                <span>{vehicle.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vehicle Showcase Card */}
        <motion.div
          key={`${activeCategory}-${selectedVehicle.id}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Specs Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2DA933]/20 text-[#2DA933]">
                  {selectedVehicle.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                  {selectedVehicle.name}
                </h3>
              </div>

              {/* Capacity and Volume Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
                    <Weight className="w-4 h-4 text-[#2DA933]" />
                    <span>Capacidad de Carga</span>
                  </div>
                  <div className="text-lg font-black text-[#0F172A]">
                    {selectedVehicle.capacity}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1">
                    <Box className="w-4 h-4 text-blue-500" />
                    <span>Volumen / Dimensiones</span>
                  </div>
                  <div className="text-lg font-black text-[#0F172A]">
                    {selectedVehicle.volume}
                  </div>
                </div>
              </div>

              {/* Ideal Rubros */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Ideal para transportar:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedVehicle.idealFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white text-xs font-medium text-slate-700 border border-slate-200 shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Características de la Unidad:
                </div>
                <div className="space-y-1.5">
                  {selectedVehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#2DA933] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Visual Right Column Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-8 rounded-3xl bg-white border border-slate-200 shadow-md text-center space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-[#2DA933]/15 border border-[#2DA933]/40 flex items-center justify-center mx-auto text-[#2DA933]">
                  {activeCategory === 'camiones' ? <Truck className="w-10 h-10" /> : <Construction className="w-10 h-10" />}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    {activeCategory === 'camiones' ? 'Disponibilidad Inmediata' : 'Maquinaria Lista para Faena'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {activeCategory === 'camiones'
                      ? 'Conductores verificados listos para postularse a tu carga en todo el país.'
                      : 'Contratistas con equipos certificados. Alquila por jornada de 8h u horómetro con o sin operador.'}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="#descargar"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2DA933] hover:bg-[#25882A] text-white text-xs font-bold shadow-lg shadow-[#2DA933]/20"
                  >
                    <span>{activeCategory === 'camiones' ? 'Cotizar Flete con esta Unidad' : 'Solicitar Alquiler de Maquinaria'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
