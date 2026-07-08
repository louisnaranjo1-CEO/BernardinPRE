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
  Inbox, 
  ShieldAlert,
  HelpCircle,
  Building2,
  TrendingDown,
  LineChart
} from 'lucide-react';

export default function AcuerdoSection() {
  const [activeTab, setActiveTab] = useState<'acuerdo' | 'accion'>('acuerdo');

  return (
    <div className="w-full space-y-8">
      
      {/* 1. SECTION INTRO */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse"></span>
          PLAN ESTRATÉGICO BERNARDIN
        </span>
        <h2 className="text-4xl md:text-5xl font-impact text-white uppercase leading-none">
          Acuerdo Bernardin & Plan de Acción
        </h2>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans max-w-2xl mx-auto">
          Definición del esquema financiero de reintegro por ventas y la hoja de ruta de captación institucional y alianzas gremiales para potenciar el sector agrícola y la producción nacional.
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
              Plan de Acción Gremial
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
            className="max-w-5xl mx-auto space-y-6 px-2 sm:px-4"
          >
            {/* Context Card explaining the deal */}
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-[#021305] to-[#010402] border border-emerald-950/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-3xl rounded-full"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900/60 pb-5 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-black/60 border border-emerald-950/30">
                    <RefreshCw className="w-6 h-6 text-[#39ff14] animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-impact text-white leading-none uppercase">
                      ESQUEMA DE CO-INVERSIÓN <br />
                      <span className="text-[#39ff14] text-glow-green">100% REINTEGRABLE</span>
                    </h3>
                    <p className="text-xs text-gray-400 font-sans mt-1">Estructura operativa financiada por ventas para Bernardin Venezuela</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed max-w-3xl">
                Para brindar total tranquilidad y demostrar nuestro compromiso real con las ventas, el aporte mensual establecido para mantener la estructura de mercadotecnia digital de Bernardin Venezuela funciona como un **pago por adelantado**.
              </p>

              {/* Grid of Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-zinc-900/60">
                <div className="bg-zinc-950/60 p-5 rounded-xl border border-zinc-900 hover:border-[#39ff14]/30 transition-all duration-300">
                  <div className="bg-[#39ff14]/10 w-8 h-8 rounded-lg border border-[#39ff14]/20 text-[#39ff14] font-bold flex items-center justify-center text-xs mb-3">
                    01
                  </div>
                  <h4 className="text-white font-bold text-sm font-impact uppercase tracking-wider">Estructura de Marketing</h4>
                  <p className="text-gray-400 text-[11px] font-sans mt-2 leading-relaxed">
                    El pago mensual sostiene el personal asignado (Diseñadores, Editores, Programadores e Inteligencia de Datos) para la producción de contenidos diarios y gestión de marca.
                  </p>
                </div>
                
                <div className="bg-zinc-950/60 p-5 rounded-xl border border-zinc-900 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="bg-emerald-950/45 w-8 h-8 rounded-lg border border-emerald-900/30 text-emerald-400 font-bold flex items-center justify-center text-xs mb-3">
                    02
                  </div>
                  <h4 className="text-white font-bold text-sm font-impact uppercase tracking-wider">Retorno vía Comisiones</h4>
                  <p className="text-gray-400 text-[11px] font-sans mt-2 leading-relaxed">
                    Al concretarse la venta de cualquier maquinaria o equipo agrícola, el aporte acumulado de estructura se descuenta directamente de la comisión correspondiente de la agencia.
                  </p>
                </div>

                <div className="bg-zinc-950/60 p-5 rounded-xl border border-zinc-900 hover:border-lime-500/30 transition-all duration-300">
                  <div className="bg-lime-950/45 w-8 h-8 rounded-lg border border-lime-900/30 text-lime-400 font-bold flex items-center justify-center text-xs mb-3">
                    03
                  </div>
                  <h4 className="text-white font-bold text-sm font-impact uppercase tracking-wider">Reintegro de Estructura</h4>
                  <p className="text-gray-400 text-[11px] font-sans mt-2 leading-relaxed">
                    En lugar de retener la comisión completa, devolvemos el capital utilizado en la estructura mensual. El costo neto final de marketing operativo para la fábrica es de <strong>$0 USD</strong>.
                  </p>
                </div>
              </div>

              {/* Warning box about non-reimbursable Meta Ads & Influencers budget */}
              <div className="mt-8 p-5 rounded-xl bg-amber-950/20 border border-amber-900/30 flex items-start gap-3.5">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-[11px] font-sans text-gray-300 leading-relaxed">
                  <strong className="text-amber-400 uppercase block mb-1">Especificación Importante (Meta Ads e Influencers):</strong>
                  El presupuesto destinado a la pauta publicitaria directa de <strong>Meta Ads (Facebook e Instagram)</strong> no es reintegrable por la agencia, ya que es un pago facturado y transferido directamente a las plataformas externas de Meta C.A. De igual forma ocurre con los honorarios abonados a los **Influencers** agrícolas. Ambos conceptos son gastos a terceros y se aplicarán de forma variable <strong>únicamente en fechas específicas donde se proyecten picos de venta de maquinaria</strong> (previo a los ciclos de siembra y cosecha llanera).
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
                <p className="text-[10px] font-mono text-gray-400 leading-normal">
                  <strong>Resumen del Acuerdo:</strong> Louis Marketing co-invierte su estructura creativa y operativa con Bernardin. Recuperas el aporte de estructura mensual con las comisiones de venta generadas por las campañas.
                </p>
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
            className="space-y-8 max-w-5xl mx-auto"
          >
            {/* Context callout - Branded as Strategic Capture Plan */}
            <div className="p-5 md:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-left flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-950/45 border border-emerald-900/30 text-[#39ff14] flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-impact text-white uppercase text-base tracking-wider">Estrategia de Captación y Alianzas en el Sector Agrícola</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Para potenciar la producción nacional y responder a la demanda de mecanización del campo, implementamos un plan de acción para canalizar la oferta de maquinaria pesada agrícola con los gremios agropecuarios de Venezuela, abriendo un canal oficial para la captación de proveedores y acuerdos gremiales.
                </p>
              </div>
            </div>

            {/* Action Roadmap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
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
                      Configuración de canal oficial de comunicación (ej: <code>proveedores@bernardin.com.ve</code>) para proponer una evaluación de oportunidad en la captación de proveedores de maquinaria agrícola pesada.
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-zinc-900/60 font-sans text-xs text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-[#39ff14] font-bold">✓</span>
                      <span>Configurar dominio corporativo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#39ff14] font-bold">✓</span>
                      <span>Propuesta de captación a proveedores.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#39ff14] font-bold">✓</span>
                      <span>Relevamiento de equipos pesados agrícolas.</span>
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
                      Envío directo de comunicados y propuestas a las asociaciones de ganaderos y agrícolas para proponer alianzas y captar necesidades de mecanización de tierras.
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
                      <span>Relevamiento de necesidades críticas del agro.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/40 text-[9px] font-mono text-gray-500">
                  Objetivo: 24 asociaciones cubiertas
                </div>
              </div>

              {/* Card 3: Levantamiento Data (NO road/vialidades mentions, strictly agriculture) */}
              <div className="bg-zinc-950/70 border border-zinc-900 hover:border-lime-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-lime-500/5 blur-3xl rounded-full"></div>
                
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-black/60 border border-zinc-900">
                    <Database className="w-5 h-5 text-lime-400" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-lime-400 uppercase tracking-wider font-bold">Fase 3: Inteligencia de Datos</span>
                    <h4 className="text-lg font-impact uppercase text-white group-hover:text-lime-400 transition duration-300">
                      Levantamiento de Data Sectorial
                    </h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      Construcción y depuración de bases de datos de organismos agrícolas, asociaciones del sector primario y entes de producción agropecuaria en Venezuela.
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-zinc-900/60 font-sans text-xs text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-lime-400 font-bold">✓</span>
                      <span>Mapeo de asociaciones y cooperativas nacionales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lime-400 font-bold">✓</span>
                      <span>Data de entes reguladores y ministerios de producción.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lime-400 font-bold">✓</span>
                      <span>Segmentación de pauta para tomadores de decisiones del agro.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/40 text-[9px] font-mono text-gray-500">
                  Target: Gremios y entes agrícolas nacionales
                </div>
              </div>

            </div>

            {/* Institutional Sales Considerations (Replaced mock email template) */}
            <div className="bg-black/35 border border-zinc-900 rounded-2xl p-6 text-left space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full"></div>
              
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#39ff14]" />
                  <h4 className="font-impact text-white uppercase text-sm tracking-wider">
                    Aspectos a Considerar para Realizar Ventas Institucionales
                  </h4>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900 uppercase">
                  Foco: Sector Agrícola y Producción Nacional
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                
                {/* Point 1 */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-impact tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14]"></span>
                    Licitaciones e Integración de Organismos Públicos
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Identificar y sistematizar convocatorias de ministerios de producción agrícola, corporaciones alimentarias estatales y entes públicos de desarrollo rural. Es clave formular propuestas de dotación de maquinaria pesada enfocadas en el incremento de hectáreas sembradas y soberanía alimentaria.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-impact tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14]"></span>
                    Estructuración de Convenios y Co-Inversión
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Diseñar propuestas de financiamiento, planes de pago flexibles y modelos de co-inversión específicos para grandes cooperativas agropecuarias y consorcios agrícolas del país, apalancando la capacidad de importación de Bernardin.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-impact tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14]"></span>
                    Garantías de Campo y Soporte Post-Venta
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Ofrecer a nivel institucional programas robustos de capacitación técnica certificada de operadores, contratos de mantenimiento preventivo anual y el suministro garantizado de repuestos originales directamente en las zonas de mayor producción nacional.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-impact tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14]"></span>
                    Relaciones y Demostraciones Técnicas Activas
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Coordinar agendas de demostración activa en campo ("días de campo") invitando a comisiones de compras de gremios ganaderos, técnicos agrícolas gubernamentales e inversionistas institucionales para constatar la eficiencia del portafolio.
                  </p>
                </div>

              </div>

              <div className="flex justify-end pt-2 border-t border-zinc-900/60">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                  <LineChart className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enfoque orientado a la industrialización de la producción nacional</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
