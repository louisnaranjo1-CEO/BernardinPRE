import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RefreshCw, 
  Mail, 
  Database, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Coins, 
  Inbox, 
  ShieldAlert
} from 'lucide-react';

interface MachineryPreset {
  name: string;
  price: number;
}

export default function AcuerdoSection() {
  // Preset machinery prices for easy selection in the calculator
  const machineryPresets: MachineryPreset[] = [
    { name: 'Sembradora Bernardin', price: 45000 },
    { name: 'Tractor Orion 250 HP', price: 75000 },
    { name: 'Cosechadora M2120', price: 150000 },
    { name: 'Personalizado', price: 100000 }
  ];

  const [selectedPreset, setSelectedPreset] = useState<number>(1); // default to Orion
  const [salePrice, setSalePrice] = useState<number>(75000);
  const [commissionRate, setCommissionRate] = useState<number>(5); // default 5%
  const [monthlyContribution, setMonthlyContribution] = useState<number>(1450); // Default to Module 1 + Module 3 ($1200 + $250)
  const [activeTab, setActiveTab] = useState<'acuerdo' | 'accion'>('acuerdo');

  // Handle preset clicks
  const handlePresetSelect = (index: number) => {
    setSelectedPreset(index);
    if (machineryPresets[index].name !== 'Personalizado') {
      setSalePrice(machineryPresets[index].price);
    }
  };

  // Calculations
  const grossCommission = (salePrice * commissionRate) / 100;
  const returnedAmount = Math.min(monthlyContribution, grossCommission);
  const netAgencyCommission = grossCommission - returnedAmount;
  const netMarketingCost = Math.max(0, monthlyContribution - returnedAmount);

  // Email template mock preview state
  const [emailSubject, setEmailSubject] = useState(
    'Evaluación de Oportunidad: Captación de Proveedores de Maquinaria Pesada para Emergencia Nacional'
  );
  
  return (
    <div className="w-full space-y-8">
      
      {/* 1. SECTION INTRO */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse"></span>
          PLAN ESTRATÉGICO BERNARDIN
        </span>
        <h2 className="text-4xl md:text-5xl font-impact text-white uppercase leading-none">
          Acuerdo Bernardin & Plan de Contingencia
        </h2>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans max-w-2xl mx-auto">
          Definición del esquema financiero de reintegro por ventas y la hoja de ruta inmediata de captación institucional y gremial ante la coyuntura de emergencia del país.
        </p>

        {/* Tab selection */}
        <div className="flex justify-center pt-4">
          <div className="inline-flex rounded-xl bg-zinc-900/80 p-1 border border-zinc-800 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('acuerdo')}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all uppercase ${
                activeTab === 'acuerdo'
                  ? 'bg-[#39ff14]/15 text-[#39ff14] border border-[#39ff14]/30 shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                  : 'text-gray-400 hover:text-gray-200 border border-transparent'
              }`}
            >
              Reintegro de Estructura
            </button>
            <button
              onClick={() => setActiveTab('accion')}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all uppercase ${
                activeTab === 'accion'
                  ? 'bg-[#39ff14]/15 text-[#39ff14] border border-[#39ff14]/30 shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                  : 'text-gray-400 hover:text-gray-200 border border-transparent'
              }`}
            >
              Plan de Acción Inmediata
            </button>
          </div>
        </div>
      </div>

      {/* 2. TAB CONTENT VIEWPORTS */}
      <AnimatePresence mode="wait">
        {activeTab === 'acuerdo' ? (
          <motion.div
            key="tab-acuerdo"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-2 sm:px-4"
          >
            {/* Context Card explaining the deal */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-[#021305] to-[#010402] border border-emerald-950/30 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full"></div>
                
                <div className="inline-flex p-3 rounded-xl bg-black/60 border border-emerald-950/30 mb-5">
                  <RefreshCw className="w-6 h-6 text-[#39ff14] animate-spin-slow" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-impact text-white leading-none uppercase">
                  ESQUEMA DE CO-INVERSIÓN <br />
                  <span className="text-[#39ff14] text-glow-green">100% REINTEGRABLE</span>
                </h3>
                
                <p className="text-xs md:text-sm text-gray-300 font-sans mt-4 leading-relaxed">
                  Para brindar total tranquilidad y demostrar nuestro compromiso real con las ventas, el aporte mensual establecido para mantener la estructura de mercadotecnia digital funciona como un <strong>pago por adelantado</strong>.
                </p>

                <div className="space-y-4 mt-6 pt-5 border-t border-zinc-900/60 text-xs font-sans">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-[#39ff14]/10 p-1 rounded border border-[#39ff14]/20 text-[#39ff14] font-bold">
                      01
                    </div>
                    <div>
                      <p className="text-white font-bold">Inversión Adelantada</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">El pago mensual sostiene el ecosistema diario de publicidad, diseño, edición y pauta en Meta Ads.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-950/45 p-1 rounded border border-emerald-900/30 text-emerald-400 font-bold">
                      02
                    </div>
                    <div>
                      <p className="text-white font-bold">Descuento de Comisión</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">Al concretarse una venta de maquinaria, restamos la inversión realizada del cobro de nuestra comisión acordada.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-lime-950/45 p-1 rounded border border-lime-900/30 text-lime-400 font-bold">
                      03
                    </div>
                    <div>
                      <p className="text-white font-bold">Reintegro del Recurso</p>
                      <p className="text-gray-400 text-[11px] mt-0.5">En lugar de retener la comisión completa, le retornamos a Bernardin la estructura acumulada utilizada. El costo neto de marketing se reduce a $0 USD.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] font-mono text-gray-400 leading-normal">
                    <strong>Resumen:</strong> No cobramos la comisión adicional completa sobre la venta; devolvemos primero el fondo adelantado asignado a la estructura de Bernardin Venezuela.
                  </p>
                </div>
              </div>
            </div>

            {/* Branded Interactive Calculator */}
            <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-black/45 border border-zinc-900 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div>
                  <h4 className="text-lg font-impact text-white uppercase flex items-center gap-2">
                    <Coins className="w-5 h-5 text-[#39ff14]" />
                    Simulador Dinámico de Reintegro
                  </h4>
                  <p className="text-[11px] text-gray-400 font-sans">
                    Haz clic en los equipos de fábrica o edita manualmente para ver el impacto financiero.
                  </p>
                </div>
              </div>

              {/* Machinery preset selectors */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase block">Paso 1: Seleccione Tipo de Equipo</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {machineryPresets.map((preset, idx) => (
                    <button
                      key={preset.name}
                      onClick={() => handlePresetSelect(idx)}
                      type="button"
                      className={`px-3 py-2 rounded-xl text-center border font-mono text-xs font-bold transition-all ${
                        selectedPreset === idx
                          ? 'bg-[#39ff14]/10 text-[#39ff14] border-[#39ff14]/30 shadow-[0_0_8px_rgba(57,255,20,0.1)]'
                          : 'bg-zinc-950 border-zinc-900 text-gray-400 hover:text-gray-200 hover:border-zinc-800'
                      }`}
                    >
                      <div>{preset.name}</div>
                      <div className={`text-[10px] mt-0.5 font-normal ${selectedPreset === idx ? 'text-[#39ff14]' : 'text-gray-500'}`}>
                        {preset.name === 'Personalizado' ? 'Variable' : `$${preset.price.toLocaleString()} USD`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders Block */}
              <div className="space-y-5 pt-2">
                {/* Sale Price Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-sans">
                    <span className="text-gray-400 font-bold">Valor de Venta Realizado:</span>
                    <span className="text-[#39ff14] font-mono font-bold">${salePrice.toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="250000"
                    step="5000"
                    value={salePrice}
                    onChange={(e) => {
                      setSalePrice(Number(e.target.value));
                      setSelectedPreset(3); // set to customized
                    }}
                    className="w-full accent-[#39ff14] bg-zinc-900 rounded-lg appearance-none h-1.5"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-gray-600">
                    <span>$15k USD</span>
                    <span>$100k USD</span>
                    <span>$250k USD</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Commission Rate Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-gray-400 font-bold">Porcentaje de Comisión:</span>
                      <span className="text-emerald-400 font-mono font-bold">{commissionRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="0.5"
                      value={commissionRate}
                      onChange={(e) => setCommissionRate(Number(e.target.value))}
                      className="w-full accent-emerald-500 bg-zinc-900 rounded-lg appearance-none h-1.5"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-gray-600">
                      <span>1%</span>
                      <span>5% (Std)</span>
                      <span>10%</span>
                    </div>
                  </div>

                  {/* Monthly Marketing Contribution */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-gray-400 font-bold">Aporte Estructura Mensual:</span>
                      <span className="text-lime-400 font-mono font-bold">${monthlyContribution.toLocaleString()} USD</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="4000"
                      step="50"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="w-full accent-lime-500 bg-zinc-900 rounded-lg appearance-none h-1.5"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-gray-600">
                      <span>$500 USD</span>
                      <span>$1,450 (Pauta)</span>
                      <span>$4,000 USD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results visualization block */}
              <div className="bg-[#020703]/90 rounded-2xl p-5 border border-emerald-950/45 space-y-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase block">Desglose Financiero de Retorno</span>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-left">
                  
                  {/* Gross commission */}
                  <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-900">
                    <span className="text-[9px] font-mono text-gray-500 uppercase block">Comisión Bruta</span>
                    <strong className="text-sm md:text-base text-white block mt-1 font-mono">${grossCommission.toLocaleString()}</strong>
                    <span className="text-[9px] text-gray-500 block font-mono mt-0.5">{commissionRate}% de Venta</span>
                  </div>

                  {/* Reintegro */}
                  <div className="bg-emerald-950/15 p-3.5 rounded-xl border border-emerald-500/20">
                    <span className="text-[9px] font-mono text-[#39ff14] uppercase block">Reintegro a Bernardin</span>
                    <strong className="text-sm md:text-base text-[#39ff14] block mt-1 font-mono">${returnedAmount.toLocaleString()}</strong>
                    <span className="text-[9px] text-gray-400 block font-sans mt-0.5">Devuelto a Fábrica</span>
                  </div>

                  {/* Net agency commission */}
                  <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-900">
                    <span className="text-[9px] font-mono text-gray-500 uppercase block">Comisión de Agencia</span>
                    <strong className="text-sm md:text-base text-zinc-300 block mt-1 font-mono">${netAgencyCommission.toLocaleString()}</strong>
                    <span className="text-[9px] text-gray-500 block font-sans mt-0.5">Neta posterior</span>
                  </div>

                  {/* Costo neto */}
                  <div className="bg-[#10b981]/5 p-3.5 rounded-xl border border-[#39ff14]/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#39ff14]/5 rounded-bl-full"></div>
                    <span className="text-[9px] font-mono text-[#39ff14] uppercase block">Costo Neto Marketing</span>
                    <strong className="text-sm md:text-base text-[#39ff14] block mt-1 font-mono">${netMarketingCost.toLocaleString()}</strong>
                    <span className="text-[9px] text-[#39ff14] block font-sans font-bold mt-0.5 uppercase tracking-wide">
                      {netMarketingCost === 0 ? '¡Costo Cero! (100% Retornado)' : 'Parcialmente cubierto'}
                    </span>
                  </div>

                </div>

                {/* Progress bar comparison visualizer */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[10px] font-mono text-gray-400">
                    <span>Distribución de la Comisión:</span>
                    <span>Total: ${grossCommission.toLocaleString()} USD</span>
                  </div>
                  
                  {/* Dual color bar */}
                  <div className="w-full h-3 rounded-full bg-zinc-950 overflow-hidden flex border border-zinc-900">
                    <div 
                      className="bg-gradient-to-r from-[#39ff14] to-emerald-500 h-full transition-all duration-500" 
                      style={{ width: `${(returnedAmount / grossCommission) * 100}%` }}
                      title={`Reintegro a Bernardin: $${returnedAmount}`}
                    ></div>
                    <div 
                      className="bg-zinc-800 h-full transition-all duration-500" 
                      style={{ width: `${(netAgencyCommission / grossCommission) * 100}%` }}
                      title={`Comisión Agencia: $${netAgencyCommission}`}
                    ></div>
                  </div>

                  <div className="flex items-center gap-4 text-[9px] font-mono text-gray-500 justify-end pt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#39ff14]"></span>
                      <span>Reintegro de Estructura ({Math.round((returnedAmount / grossCommission) * 100)}%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-850"></span>
                      <span>Comisión Retenida ({Math.round((netAgencyCommission / grossCommission) * 105) > 100 ? 100 - Math.round((returnedAmount / grossCommission) * 100) : Math.round((netAgencyCommission / grossCommission) * 100)}%)</span>
                    </div>
                  </div>
                </div>

                {/* Green badge of success */}
                {netMarketingCost === 0 && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs font-sans text-emerald-400 flex items-start gap-2.5 animate-pulse">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-impact uppercase tracking-wider">¡Inversión Recuperada por Venta!</strong>
                      <span className="text-[11px] text-gray-300 font-sans">
                        La comisión generada por esta sola venta cubre y reintegra el 100% del recurso aportado para mantener la estructura mensual. Bernardin recupera toda su co-inversión.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="tab-accion"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Context callout */}
            <div className="p-5 md:p-6 rounded-2xl bg-amber-950/10 border border-amber-900/20 text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-950/45 border border-amber-800/30 text-amber-400 flex-shrink-0">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h4 className="font-impact text-white uppercase text-base tracking-wider">Mitigación Comercial por Contingencia Nacional</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Bajo la circunstancia actual de emergencia en el país, implementamos una estrategia de contingencia para capitalizar la alta demanda latente de maquinaria pesada. Proponemos abrir canales directos con proveedores de importación y canalizarlos con los gremios productivos de Venezuela.
                </p>
              </div>
            </div>

            {/* Action Roadmap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 sm:px-4">
              
              {/* Card 1: Correo Bernardin */}
              <div className="bg-zinc-950/70 border border-zinc-900 hover:border-[#39ff14]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#39ff14]/5 blur-3xl rounded-full"></div>
                
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-black/60 border border-zinc-900">
                    <Mail className="w-5 h-5 text-[#39ff14]" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-[#39ff14] uppercase tracking-wider font-bold">Fase 1: Canal Oficial</span>
                    <h4 className="text-lg font-impact uppercase text-white group-hover:text-[#39ff14] transition duration-300">
                      Apertura de Correo Bernardin
                    </h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Configuración de correo oficial (ej: <code>proveedores@bernardin.com.ve</code>) para formalizar y centralizar las propuestas de importación y cooperación de maquinaria.
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-zinc-900/60 font-sans text-xs text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-[#39ff14] font-bold">✓</span>
                      <span>Configurar dominio corporativo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#39ff14] font-bold">✓</span>
                      <span>Comunicado de emergencia institucional.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#39ff14] font-bold">✓</span>
                      <span>Evaluación de proveedores de maquinaria pesada.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/40 text-[9px] font-mono text-gray-500">
                  Estado: Listo para habilitación
                </div>
              </div>

              {/* Card 2: Asociaciones */}
              <div className="bg-zinc-950/70 border border-zinc-900 hover:border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 blur-3xl rounded-full"></div>
                
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-black/60 border border-zinc-900">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-bold">Fase 2: Difusión Gremial</span>
                    <h4 className="text-lg font-impact uppercase text-white group-hover:text-emerald-400 transition duration-300">
                      Alianza con Gremios Agrícolas
                    </h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Envío directo de propuestas de asistencia y provisión del portafolio Bernardin a las directivas de asociaciones de ganaderos y agrícolas.
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-zinc-900/60 font-sans text-xs text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Contacto prioritario: Fedenaga & Fedeagro.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Alianzas con asociaciones estatales de productores.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Presentar modelos financieros de cuotas/facilidades.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/40 text-[9px] font-mono text-gray-500">
                  Objetivo: 24 asociaciones cubiertas
                </div>
              </div>

              {/* Card 3: Levantamiento Data */}
              <div className="bg-zinc-950/70 border border-zinc-900 hover:border-lime-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-lime-500/5 blur-3xl rounded-full"></div>
                
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-black/60 border border-zinc-900">
                    <Database className="w-5 h-5 text-lime-400" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-lime-400 uppercase tracking-wider font-bold">Fase 3: Inteligencia de Datos</span>
                    <h4 className="text-lg font-impact uppercase text-white group-hover:text-lime-400 transition duration-300">
                      Levantamiento de Data Nacional
                    </h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Construcción y depuración de bases de datos de organismos públicos, gobernaciones, entes de infraestructura y constructoras viales en Venezuela.
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-zinc-900/60 font-sans text-xs text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-lime-400 font-bold">✓</span>
                      <span>Data mining de corporaciones de vialidad estatales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lime-400 font-bold">✓</span>
                      <span>Mapeo de directivas y correos electrónicos verificados.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lime-400 font-bold">✓</span>
                      <span>Segmentación digital por geolocalización de Ads.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/40 text-[9px] font-mono text-gray-500">
                  Target: Organismos nacionales y regionales
                </div>
              </div>

            </div>

            {/* Branded Interactive Email Template Preview */}
            <div className="bg-black/35 border border-zinc-900 rounded-2xl p-6 max-w-4xl mx-auto text-left space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-2">
                  <Inbox className="w-5 h-5 text-[#39ff14]" />
                  <h4 className="font-impact text-white uppercase text-sm tracking-wider">
                    Simulación del Comunicado a Enviar (Borrador Oficial)
                  </h4>
                </div>
                <span className="text-[9px] font-mono text-gray-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">
                  FORMATO: EMAIL FORMAL - HTML
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs text-gray-300">
                <div className="grid grid-cols-12 border-b border-zinc-900/40 pb-2 gap-2">
                  <span className="col-span-2 text-gray-500 text-right">De:</span>
                  <span className="col-span-10 text-emerald-400">gerencia@bernardin.com.ve</span>
                </div>
                <div className="grid grid-cols-12 border-b border-zinc-900/40 pb-2 gap-2">
                  <span className="col-span-2 text-gray-500 text-right">Para:</span>
                  <span className="col-span-10 text-[#39ff14] truncate">directiva@fedenaga.org, presidencia@fedeagro.org, (Gremios Ganaderos y Agrícolas)</span>
                </div>
                <div className="grid grid-cols-12 border-b border-zinc-900/40 pb-2 gap-2">
                  <span className="col-span-2 text-gray-500 text-right">Asunto:</span>
                  <input 
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="col-span-10 bg-transparent text-white focus:outline-none border-b border-transparent focus:border-[#39ff14]/30"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900/70 font-sans text-xs text-gray-300 space-y-3 leading-relaxed max-h-72 overflow-y-auto">
                <p><strong>Estimados directivos de la Asociación Agropecuaria y Ganadera de Venezuela,</strong></p>
                
                <p>
                  Ante la coyuntura y las circunstancias de emergencia nacional que impactan la operatividad de los suelos agrícolas, la vialidad rural y la producción ganadera en nuestro país, nos dirigimos a ustedes en representación de <strong>Bernardin Venezuela</strong>. 
                </p>

                <p>
                  Entendemos la urgencia crítica en el mantenimiento de infraestructuras, drenajes, canalización de ríos, control de inundaciones y preparación de tierras de cultivo. Por ello, proponemos formalmente una <strong>evaluación conjunta de oportunidades para la captación e importación prioritaria de maquinaria pesada</strong> (excavadoras, retroexcavadoras, motoniveladoras y tractores de alta potencia) adaptados a las necesidades de atención de emergencias.
                </p>

                <p>
                  Nuestra meta es facilitar a las asociaciones gremiales el acceso a proveedores internacionales confiables con soporte técnico en el país y condiciones comerciales viables de co-inversión.
                </p>

                <p>
                  Quedamos a su entera disposición para agendar una mesa de trabajo técnica virtual o presencial a la brevedad.
                </p>

                <p className="border-t border-zinc-900/60 pt-3 text-[11px] text-gray-500 font-mono">
                  Atentamente,<br />
                  <strong>Dirección de Relaciones Institucionales</strong><br />
                  Bernardin Venezuela C.A.<br />
                  contacto@bernardin.com.ve | Caracas - Venezuela
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => alert('¡Borrador guardado! Este flujo de correo electrónico se enviará al correo oficial para validación una vez que el cliente apruebe.')}
                  type="button"
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-[#39ff14] text-black font-impact text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5"
                >
                  <span>Validar Estructura de Envío</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
