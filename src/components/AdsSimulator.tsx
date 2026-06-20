import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, MessageSquare, MapPin, Wheat, Flame } from 'lucide-react';
import { VenezuelaState } from '../types';

export default function AdsSimulator() {
  const [budget, setBudget] = useState<number>(250);
  const [selectedState, setSelectedState] = useState<string>('portuguesa');

  // Calibration of target agricultural hubs in Venezuela
  const agriculturalHubs: { [key: string]: VenezuelaState } = {
    portuguesa: {
      name: 'Portuguesa',
      capital: 'Guanare',
      weight: 35, // 35% representation of focus
      mainProduct: 'Líder Cerealero (Maíz Blanco y Amarillo, Arroz, Soya, Ajonjolí y Caña de Azúcar)',
      adFrequencyScore: 10
    },
    guarico: {
      name: 'Guárico',
      capital: 'San Juan de los Morros',
      weight: 25,
      mainProduct: 'Eje Calabozo y Llanos Altos (Arroz de Riego, Maíz Amarillo, Sorgo y Ganadería Bovina Extensiva)',
      adFrequencyScore: 9
    },
    barinas: {
      name: 'Barinas',
      capital: 'Barinas',
      weight: 15,
      mainProduct: 'Eje Llanero Occidental (Ganadería de Carne y Leche, Maíz Amarillo, Arroz y Plátano)',
      adFrequencyScore: 7
    },
    cojedes: {
      name: 'Cojedes',
      capital: 'San Carlos',
      weight: 15,
      mainProduct: 'Llanos Centro-Occidentales (Maíz, Arroz, Ganadería de Doble Propósito y Silvicultura)',
      adFrequencyScore: 8
    },
    anzoategui: {
      name: 'Anzoátegui',
      capital: 'Barcelona',
      weight: 10,
      mainProduct: 'Mesa de Guanipa (Cultivos Mecanizados de Maní, Yuca Industrial, Sorgo y Maíz)',
      adFrequencyScore: 6
    }
  };

  // CPM average estimates for Venezuela
  const cpmLow = 0.35;
  const cpmHigh = 0.80;

  // Real-time calculations based on budget
  const calculateReach = () => {
    const minReach = Math.round((budget * (1000 / cpmHigh)) * 0.16);
    const maxReach = Math.round((budget * (1000 / cpmLow)) * 0.155);
    return { min: minReach, max: maxReach };
  };

  const calculateImpressions = () => {
    const minImp = Math.round((budget / cpmHigh) * 1000);
    const maxImp = Math.round((budget / cpmLow) * 1000);
    return { min: minImp, max: maxImp };
  };

  const calculateLeads = () => {
    // Estimations based on agricultural conversion rates
    const minLeads = Math.round((budget / 1.9) * 1.0);
    const maxLeads = Math.round((budget / 0.83) * 1.0);
    return { min: minLeads, max: maxLeads };
  };

  const reachVal = calculateReach();
  const impVal = calculateImpressions();
  const leadsVal = calculateLeads();

  return (
    <div className="w-full bg-[#020803]/85 text-white rounded-2xl border border-emerald-900/30 shadow-2xl overflow-hidden mb-16">
      {/* Header section with interactive signal */}
      <div className="p-5 md:p-6 bg-black/50 border-b border-zinc-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse"></span>
          <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">RENDIMIENTO EN VIVO</span>
        </div>
        <h3 className="text-xl md:text-3xl font-impact uppercase mt-1 text-white">SIMULADOR DE PRESUPUESTO & ADS</h3>
        <p className="text-xs text-gray-400 mt-1">Simula el retorno de visibilidad con Meta Ads en el sector agropecuario venezolano en tiempo real.</p>
      </div>

      <div className="p-5 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Budget slider & Reach output (Col-span 7) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Custom Budget Slider */}
          <div className="bg-black/50 border border-zinc-900 rounded-xl p-5 relative">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono tracking-wider uppercase text-gray-400">Presupuesto en Pauta Mensual</span>
              <span className="text-xl md:text-2xl font-impact text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-emerald-400 text-glow-green">
                ${budget} <span className="text-xs text-gray-500 lowercase">usd</span>
              </span>
            </div>

            {/* Custom Input Range */}
            <div className="relative mb-4">
              <input 
                type="range" 
                min="100" 
                max="1000" 
                step="50"
                value={budget} 
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
              />
              <div className="flex justify-between text-[9px] font-mono text-gray-500 mt-2">
                <span>$100 USD (Mín)</span>
                <span>$250 USD (Sugerido)</span>
                <span>$500 USD</span>
                <span>$1,000 USD (Máx)</span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
              * Debido a que el CPM en Venezuela es sumamente competitivo, cada dólar invertido tiene un alcance altamente rentable. 
              Consolidamos la frecuencia de recordación para mantener a <strong>Bernardin</strong> en la mente de los productores agrícolas.
            </p>
          </div>

          {/* Dynamic performance outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Outcome Item 1: Reach */}
            <div className="bg-[#020502] border border-zinc-900 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-500/20 transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase font-mono tracking-wider text-gray-400">Alcance Único</span>
                <Target className="w-3.5 h-3.5 text-[#39ff14]" />
              </div>
              <div className="my-1.5">
                <span className="text-lg font-impact text-white block">
                  {reachVal.min.toLocaleString()} - {reachVal.max.toLocaleString()}
                </span>
                <span className="text-[9px] text-gray-500 font-mono block">Productores Alcanzados</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-tight font-sans">
                Productores agrícolas hipersegmentados por localización e interés llanero.
              </p>
            </div>

            {/* Outcome Item 2: Impressions */}
            <div className="bg-[#020502] border border-zinc-900 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-500/20 transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase font-mono tracking-wider text-gray-400">Impresiones</span>
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="my-1.5">
                <span className="text-lg font-impact text-white block">
                  {impVal.min.toLocaleString()} - {impVal.max.toLocaleString()}
                </span>
                <span className="text-[9px] text-gray-500 font-mono block">Repeticiones Totales</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-tight font-sans">
                Impactos visuales de recordación del logotipo oficial de Bernardin.
              </p>
            </div>

            {/* Outcome Item 3: Leads */}
            <div className="bg-[#020502] border border-emerald-900/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#39ff14]/30 transition shadow-[0_4px_25px_rgba(57,255,20,0.04)] bg-gradient-to-br from-[#020502] to-[#041407]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase font-mono tracking-wider text-[#39ff14] font-bold">Leads WA</span>
                <MessageSquare className="w-3.5 h-3.5 text-[#39ff14] animate-bounce" />
              </div>
              <div className="my-1.5">
                <span className="text-xl font-impact text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-emerald-400 text-glow-green block">
                  {leadsVal.min} a {leadsVal.max}
                </span>
                <span className="text-[9px] text-gray-400 font-mono block">Contactos de WhatsApp</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-tight font-sans">
                Clientes calificados que inician chat pidiendo ficha de cosechadoras.
              </p>
            </div>

          </div>

          {/* Campaign Strategy Callout */}
          <div className="bg-black/50 border border-zinc-900 rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 bg-[#39ff14]/10 border border-[#39ff14]/20 text-[#39ff14] rounded-lg">
              <Flame className="w-4 h-4 flex-shrink-0" />
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-wider font-mono text-[#39ff14] font-bold">Distribución Táctica del Presupuesto</h4>
              <p className="text-[11px] text-gray-300 mt-1 leading-relaxed font-sans">
                Desplegaremos un <strong>20% en reconocimiento de marca</strong> para generar credibilidad en Portuguesa y Guárico, y un <strong>80% directo a campañas de captación a WhatsApp</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Geographic Map and states switcher */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-black/50 border border-zinc-900 rounded-xl p-5 shadow-xl">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#39ff14]" />
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#39ff14] font-semibold">Cinturón Agrícola de Venezuela</span>
            </div>
            <h4 className="text-lg font-impact text-white uppercase">Segmentación Territorial</h4>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Enfocamos la inversión únicamente en las regiones con el mayor volumen de producción cerealera y agropecuaria:
            </p>

            {/* States buttons group */}
            <div className="space-y-1.5 mt-4">
              {Object.keys(agriculturalHubs).map((key) => {
                const state = agriculturalHubs[key];
                const isSelected = selectedState === key;
                return (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedState(key)}
                    className={`p-2.5 rounded-lg border text-left cursor-pointer transition ${
                      isSelected 
                        ? 'bg-[#09220d]/80 border-[#39ff14]/40 shadow-[0_0_10px_rgba(57,255,20,0.15)] text-white' 
                        : 'bg-black/30 border-zinc-900 text-gray-400 hover:text-gray-200 hover:border-zinc-800'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <strong className={isSelected ? 'text-[#39ff14]' : 'text-white font-sans'}>{state.name}</strong>
                      <span className="font-mono text-[9px] bg-black/60 border border-zinc-900 px-2 py-0.5 rounded text-gray-400">
                        {state.weight}% Foco
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active State dynamic specifications */}
          <div className="mt-4 p-3.5 bg-[#020502]/85 border border-zinc-900 rounded-lg flex items-start gap-3">
            <div className="p-2 bg-emerald-900/10 border border-emerald-900/20 text-[#39ff14] rounded-lg mt-0.5 flex-shrink-0">
              <Wheat className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[8px] text-[#39ff14] uppercase font-mono tracking-wider block font-bold">Foco Cerealero</span>
              <strong className="text-white text-xs block mt-0.5 font-sans">{agriculturalHubs[selectedState].name}</strong>
              <p className="text-[10px] text-gray-400 mt-1 leading-relaxed font-sans">
                <strong>Rubros clave:</strong> {agriculturalHubs[selectedState].mainProduct}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-[9px] text-gray-500 font-mono">
                <span>Intensidad:</span>
                <span className="text-[#39ff14]">{'★'.repeat(agriculturalHubs[selectedState].adFrequencyScore)}</span>
                <span>({agriculturalHubs[selectedState].adFrequencyScore}/10)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
