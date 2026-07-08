import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Sprout, 
  Coins, 
  Target, 
  Clock, 
  TrendingUp, 
  ChevronRight, 
  Info,
  CheckCircle,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface SectorData {
  id: string;
  name: string;
  liquidityMonths: string;
  justification: string;
  strategy: string;
  badge: string;
  accentColor: string; // Tailwind color class for badges and borders
}

interface TimelineItem {
  months: string;
  title: string;
  focus: string;
  marketState: string;
  action: string;
}

export default function CalendarioSection() {
  const [activeTab, setActiveTab] = useState<'sectores' | 'marketing'>('sectores');
  const [selectedSector, setSelectedSector] = useState<string>('cereales');

  const sectors: SectorData[] = [
    {
      id: 'ganadero',
      name: 'Sector Ganadero (Bovino y Bufalino)',
      liquidityMonths: 'Febrero, Marzo y principios de Abril (Pleno Verano/Sequía)',
      justification: 'Al contrario de lo que se suele pensar, el último trimestre del año es de alta inversión y transición. El verdadero flujo de caja ocurre al final de la temporada seca. El productor se ve obligado a vender animales (machos listos, vacas de descarte) para liberar espacio y carga animal en la finca, ya que el pasto y el agua escasean. Al haber menos oferta de ganado gordo en el país, los precios de la carne suelen repuntar en estos meses.',
      strategy: 'Para vender la línea forrajera (semillas de pasto, fertilizantes, equipos de henificación o silo), la campaña de venta fuerte debe hacerse en agosto y septiembre (antes de que terminen las lluvias), de modo que el productor siembre o almacene alimento a tiempo. En febrero/marzo, la campaña debe enfocarse en la compra de maquinaria, repuestos, suplementos minerales o genética, aprovechando que el ganadero tiene el dinero de las ventas de verano en la mano.',
      badge: 'Bovino & Bufalino',
      accentColor: 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
    },
    {
      id: 'cereales',
      name: 'Sector de Cereales (Maíz y Arroz)',
      liquidityMonths: 'Octubre, Noviembre y principios de Diciembre',
      justification: 'Corresponde a la absorción económica del Ciclo de Invierno (el más importante del país). La cosecha formal de maíz y arroz arranca con fuerza a finales de septiembre en los estados clave (Portuguesa, Guárico, Cojedes, Barinas). A medida que los silos y la agroindustria reciben y pagan los volúmenes arrimados, las zonas productoras se llenan de capital fresco de manera masiva.',
      strategy: 'Octubre y noviembre son los meses de conversión agresiva. El productor de cereales busca reinvertir rápidamente sus ganancias para protegerse de la devaluación o para pagar créditos de insumos. Las campañas en este periodo deben apuntar a la venta de maquinaria pesada, vehículos, tecnología agrícola o preventas exclusivas de insumos para el siguiente ciclo.',
      badge: 'Maíz & Arroz',
      accentColor: 'border-[#39ff14] text-[#39ff14] bg-[#39ff14]/10'
    },
    {
      id: 'cañicultor',
      name: 'Sector Cañicultor (Caña de Azúcar)',
      liquidityMonths: 'Enero a Abril',
      justification: 'La zafra azucarera en los centrales más importantes del país (como en los estados Portuguesa y Lara) enciende motores entre finales de noviembre y diciembre. Aunque el proceso arranca allí, el flujo continuo y fuerte de ingresos para el cañicultor se consolida a partir de enero a través de las liquidaciones semanales o quincenales que realiza el central a medida que avanza la molienda.',
      strategy: 'El sector cañicultor es un nicho de ingresos constantes durante los primeros cuatro meses del año. Es el momento ideal para ofrecerles renovación de flotas de transporte, repuestos especializados, equipos de riego o servicios de mantenimiento mayor.',
      badge: 'Zafra Azucarera',
      accentColor: 'border-lime-500 text-lime-400 bg-lime-950/20'
    },
    {
      id: 'leguminosas',
      name: 'Sector de Leguminosas (Frijol Chino, Caraotas, Granos)',
      liquidityMonths: 'Enero a Marzo (Ciclo Norte-Verano)',
      justification: 'Este sector se maneja bajo el ciclo Norte-Verano (siembras de fin de año aprovechando la humedad residual del suelo). Prácticamente todos sus rubros concentran la liquidez en el primer trimestre debido a razones climáticas (necesitan verano riguroso para recolectar el grano seco sin que se pudra). Las caraotas y granos se cosechan en este periodo ya que lluvias tardías en noviembre dañarían la vaina. En el caso del Frijol Chino (rubro de exportación asiático), los procesadores locales pagan con mucha rapidez y volumen en el estado Portuguesa.',
      strategy: 'Durante el primer trimestre del año, estos productores tienen un músculo financiero excelente y libre de deudas inmediatas, ideal para campañas de fidelización, preventas técnicas y venta de bienes duraderos (tractores, sembradoras y equipos de labranza).',
      badge: 'Norte-Verano',
      accentColor: 'border-yellow-500 text-yellow-400 bg-yellow-950/20'
    },
    {
      id: 'oleaginosas',
      name: 'Sector Oleaginosas y Otros (Girasol y Maní)',
      liquidityMonths: 'Enero a Marzo',
      justification: 'El cultivo del girasol (recuperado con fuerza en el eje occidental) se cosecha plenamente entre enero y febrero. Por su parte, el maní (concentrado en la Mesa de Guanipa, estados Anzoátegui y Monagas) cumple su ciclo de desentierre y recolección fuerte entre enero y marzo.',
      strategy: 'Monitorear activamente las zonas orientales (maní) y occidentales (girasol) durante estos meses para dirigir pautas publicitarias locales hiper-segmentadas y ofertas especiales de maquinaria agrícola específica.',
      badge: 'Girasol & Maní',
      accentColor: 'border-amber-500 text-amber-400 bg-amber-950/20'
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      months: 'ENERO - MARZO',
      title: 'El Gran Pico Financiero del Verano',
      focus: 'Frijol Chino, Leguminosas, Cañicultores y Ganaderos.',
      marketState: 'Es el trimestre con mayor movimiento de dinero circulando en el campo venezolano. Los agricultores cobran las exportaciones y las zafras, mientras que los ganaderos venden animales para aliviar la carga de las fincas por la sequía.',
      action: 'Promoción agresiva de maquinaria agrícola, repuestos originales y preventas técnicas. El ganadero y el agricultor de Norte-Verano tienen capital fresco libre de deudas inmediatas.'
    },
    {
      months: 'ABRIL - MAYO',
      title: 'Meses de Planificación e Inversión Técnica',
      focus: 'Productores de Cereales (Maíz y Arroz).',
      marketState: 'No hay liquidez inmediata (el dinero de la cosecha anterior ya se reinvirtió), pero es el mes de mayor necesidad técnica por comprar. Los productores buscan activamente financiamiento, contratos de semilla, fertilizantes y preparación de tierras.',
      action: 'Campañas orientadas a planes de financiamiento, reservas de stock de maquinaria, preventas de insumos agrícolas y paquetes de asistencia técnica antes de que inicien las lluvias de invierno.'
    },
    {
      months: 'AGOSTO - SEPTIEMBRE',
      title: 'Expectativa de Cosecha y Cierre Forrajero',
      focus: 'Cereales (Expectativa) y Ganadería (Cierre de ventas).',
      marketState: 'Existe expectativa en los maiceros por la cercanía de la cosecha. Por otro lado, los ganaderos se preparan para el término de las lluvias antes de que el pasto deje de crecer.',
      action: 'Pautas de intriga y atracción para el sector cerealero. Venta agresiva de la línea forrajera para ganadería (semillas de pasto, equipos de henificación, silos y alimentos balanceados).'
    },
    {
      months: 'OCTUBRE - DICIEMBRE',
      title: 'El Pico del Oro Amarillo y Blanco',
      focus: 'Productores de Maíz y Arroz.',
      marketState: 'Corresponde a la absorción económica del Ciclo de Invierno (el más importante del país). La agroindustria y silos liquidan las cosechas de maíz y arroz, llenando de capital fresco a las zonas productoras masivamente.',
      action: 'Campaña 100% de conversión y cierre de ventas de maquinaria pesada, tractores y cosechadoras. Periodo clave para captar inversiones antes del cierre del año fiscal.'
    }
  ];

  return (
    <div className="w-full space-y-8">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse"></span>
          CALENDARIO AGRONÓMICO VENEZUELA
        </span>
        <h2 className="text-4xl md:text-5xl font-impact text-white uppercase leading-none">
          Ciclos Productivos & Liquidez Agrícola
        </h2>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans max-w-2xl mx-auto">
          Planificación comercial y pautas publicitarias de alto impacto optimizadas según la disponibilidad real de capital de cada sector productivo del país.
        </p>

        {/* Tab selection */}
        <div className="flex justify-center pt-4">
          <div className="inline-flex rounded-xl bg-zinc-900/80 p-1 border border-zinc-800 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('sectores')}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all uppercase ${
                activeTab === 'sectores'
                  ? 'bg-[#39ff14]/15 text-[#39ff14] border border-[#39ff14]/30 shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                  : 'text-gray-400 hover:text-gray-200 border border-transparent'
              }`}
            >
              Análisis por Sectores
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all uppercase ${
                activeTab === 'marketing'
                  ? 'bg-[#39ff14]/15 text-[#39ff14] border border-[#39ff14]/30 shadow-[0_0_12px_rgba(57,255,20,0.15)]'
                  : 'text-gray-400 hover:text-gray-200 border border-transparent'
              }`}
            >
              Calendario de Marketing
            </button>
          </div>
        </div>
      </div>

      {/* 2. TAB VIEWPORTS */}
      <AnimatePresence mode="wait">
        {activeTab === 'sectores' ? (
          <motion.div
            key="sectors-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto px-2 sm:px-4"
          >
            {/* Sector Selector Left Sidebar */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase block px-1">Selecciona Sector Agrícola:</span>
              <div className="flex flex-col gap-2">
                {sectors.map((sector) => {
                  const isSelected = selectedSector === sector.id;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setSelectedSector(sector.id)}
                      type="button"
                      className={`w-full p-4 rounded-xl text-left border transition-all duration-300 relative overflow-hidden flex flex-col justify-center ${
                        isSelected 
                          ? 'bg-[#39ff14]/5 border-[#39ff14]/40 shadow-[0_0_15px_rgba(57,255,20,0.08)]' 
                          : 'bg-zinc-950/60 border-zinc-900/60 hover:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono font-extrabold uppercase tracking-wide ${isSelected ? 'text-[#39ff14]' : 'text-gray-400'}`}>
                          {sector.badge}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#39ff14] translate-x-0.5' : 'text-gray-600'}`} />
                      </div>
                      <h4 className="font-impact text-sm text-white uppercase mt-1 leading-snug">
                        {sector.name.split('(')[0].trim()}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sector Info Cards Panel Right */}
            <div className="lg:col-span-8">
              {sectors.map((sector) => {
                if (sector.id !== selectedSector) return null;
                return (
                  <motion.div
                    key={sector.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-[#020b03]/90 to-zinc-950 border border-zinc-900 shadow-2xl space-y-6 text-left relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#39ff14]/5 blur-3xl rounded-full"></div>
                    
                    {/* Header */}
                    <div className="space-y-1.5">
                      <span className={`inline-block px-3 py-1 rounded-lg border font-mono text-[10px] font-bold uppercase tracking-wider ${sector.accentColor}`}>
                        {sector.badge}
                      </span>
                      <h3 className="text-xl md:text-2xl font-impact text-white uppercase leading-none mt-1">
                        {sector.name}
                      </h3>
                    </div>

                    {/* Liquidity Date Block */}
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/20 text-[#39ff14] flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase block">Temporada de Máxima Liquidez</span>
                        <strong className="text-white text-sm md:text-base font-impact uppercase tracking-wider block mt-0.5">
                          {sector.liquidityMonths}
                        </strong>
                      </div>
                    </div>

                    {/* Justification Box */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-[#39ff14]" />
                        Análisis de Comportamiento Financiero
                      </h4>
                      <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed">
                        {sector.justification}
                      </p>
                    </div>

                    {/* Strategy Box */}
                    <div className="p-5 rounded-xl bg-emerald-950/15 border border-emerald-900/30 space-y-3">
                      <h4 className="text-xs font-impact text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Estrategia y Foco de Campaña Publicitaria
                      </h4>
                      <p className="text-xs text-gray-300 font-sans leading-relaxed">
                        {sector.strategy}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="timeline-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl mx-auto space-y-6 px-2 sm:px-4"
          >
            {/* Timeline Cards */}
            <div className="space-y-6">
              {timelineItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-zinc-950/80 border border-zinc-900/80 rounded-2xl p-5 md:p-6 text-left grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start hover:border-[#39ff14]/30 transition-all duration-300 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full"></div>
                  
                  {/* Left Column: Month block */}
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <span className="text-xs font-mono text-[#39ff14] font-extrabold uppercase bg-[#39ff14]/10 border border-[#39ff14]/20 px-3 py-1.5 rounded-lg text-center tracking-wider block">
                      {item.months}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono text-center block mt-2 uppercase tracking-wide">
                      Ciclo Agronómico
                    </span>
                  </div>

                  {/* Right Column: Details */}
                  <div className="md:col-span-9 space-y-3 font-sans">
                    <div>
                      <h4 className="font-impact text-base text-white uppercase tracking-wider leading-none">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1.5 font-bold">
                        <span className="text-[#39ff14]">Foco Principal:</span> {item.focus}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-900 text-xs text-gray-300 leading-relaxed">
                      <strong className="text-gray-400 block text-[10px] uppercase font-mono tracking-widest mb-1">Estado del Mercado:</strong>
                      {item.marketState}
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-950/10 border border-emerald-900/20 text-xs text-gray-300 leading-relaxed">
                      <strong className="text-emerald-400 block text-[10px] uppercase font-impact tracking-wider mb-1 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5" />
                        Acción de Marketing Recomendada
                      </strong>
                      {item.action}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Advice Callout */}
            <div className="p-5 rounded-xl bg-zinc-950/70 border border-zinc-900 text-left flex items-start gap-3 max-w-3xl mx-auto">
              <BookOpen className="w-5 h-5 text-[#39ff14] flex-shrink-0 mt-0.5" />
              <p className="text-[10px] font-mono text-gray-400 leading-normal">
                <strong>Consejo Comercial:</strong> Sincronizar las campañas con estas pautas de liquidez maximiza la rentabilidad del presupuesto publicitario de Bernardin Venezuela, captando a los productores en el momento exacto en el que poseen excedente financiero libre de deudas.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
