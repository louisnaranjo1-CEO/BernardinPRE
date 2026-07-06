import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  TrendingUp, 
  CheckCircle, 
  Smartphone, 
  MapPin, 
  Info, 
  Compass, 
  Cpu, 
  FileSpreadsheet, 
  Volume2, 
  Layers, 
  Globe2, 
  Briefcase, 
  Mail, 
  ExternalLink,
  Sparkles,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

import InteractiveFeed from './components/InteractiveFeed';
import AdsSimulator from './components/AdsSimulator';
import PricingCalculator from './components/PricingCalculator';
import TeamSection from './components/TeamSection';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Quick prefilled link for WhatsApp
  const contactWhatsApp = "https://wa.me/584243258536?text=Hola,%20quisiera%20recibir%20asesoria%20completa%20sobre%20el%20plan%20digital%20de%20Bernardin%20Venezuela.";

  const slides = [
    { id: 'portada', title: 'Portada y Visión', status: 'Introducción' },
    { id: 'enfoque', title: 'Enfoque Técnico', status: 'Filosofía Comercial' },
    { id: 'equipo', title: 'Equipo Profesional', status: 'Líderes de Campaña' },
    { id: 'estetica', title: 'Estética de Marca', status: 'Feed Interactivo' },
    { id: 'simulador', title: 'Simulador de Ads', status: 'Inversión por Provincias' },
    { id: 'precios', title: 'Presupuesto y Precios', status: 'Propuesta de Inversión' }
  ];

  const prevSlide = () => {
    setActiveSlide((prev) => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextSlide = () => {
    setActiveSlide((prev) => Math.min(slides.length - 1, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard navigation for presentation experience
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-[#39ff14] selection:text-black bg-dot-pattern flex flex-col justify-between relative overflow-x-hidden">
      
      {/* BACKGROUND CINEMATIC VIDEO */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Desktop video (landscape aspect ratio) */}
        <video
          autoPlay
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover opacity-20"
          style={{ transition: 'opacity 1s ease-in-out' }}
        >
          {/* Support both with/without original space representation from user */}
          <source src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/animacion%20.mp4?alt=media" type="video/mp4" />
          <source src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/animacion.mp4?alt=media" type="video/mp4" />
        </video>

        {/* Mobile video (portrait/vertical aspect ratio) */}
        <video
          autoPlay
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover opacity-20"
          style={{ transition: 'opacity 1s ease-in-out' }}
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/vertical.mp4?alt=media" type="video/mp4" />
        </video>
        {/* Soft dark radial-linear gradient multiplier to seal state clarity and premium look */}
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-[#020502]/85 to-[#020502]"></div>
      </div>
      
      {/* 1. TOP PREMIUM HEADER */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-emerald-950/40 px-4 md:px-8 py-3.5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#39ff14] to-emerald-600 p-[1.5px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Louis%20Marketing%2FGrupo%2019.png?alt=media" 
                  alt="Louis Marketing Logo" 
                  className="w-full h-full object-cover rounded-full" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <div className="text-xs md:text-sm font-impact tracking-tight text-white flex items-center gap-1.5 leading-none">
                <span>Louis</span>
                <span className="text-[#39ff14] text-glow-green uppercase">Marketing</span>
                <span className="text-xs leading-none">🇻🇪</span>
              </div>
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block mt-0.5">by Sound & Art Publicidad</span>
            </div>
          </div>

          {/* Presentation Progress timeline dots (Highly intuitive slide navigation, perfect for desktops) */}
          <div className="hidden lg:flex items-center gap-2.5 bg-neutral-900/60 px-4 py-2 rounded-xl border border-zinc-800">
            <span className="text-[9px] font-mono text-gray-400 font-bold mr-1.5 uppercase tracking-wider">DIAPOSITIVAS:</span>
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`relative group px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-tight transition-all uppercase ${
                  activeSlide === index
                    ? 'bg-[#39ff14]/15 text-[#39ff14] border border-[#39ff14]/35 shadow-[0_0_10px_rgba(57,255,20,0.15)]Scale-105'
                    : 'text-gray-500 hover:text-gray-300 border border-transparent'
                }`}
                title={slide.title}
              >
                {index + 1}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[9px] font-sans font-normal rounded border border-zinc-800 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-200 whitespace-nowrap shadow-xl z-20">
                  {slide.title} — <span className="text-[#39ff14] font-mono font-bold">{slide.status}</span>
                </span>
              </button>
            ))}
          </div>

          <div>
            <a 
              href={contactWhatsApp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-transparent border border-[#39ff14]/40 hover:border-[#39ff14] text-[10px] font-impact uppercase tracking-widest text-[#39ff14] hover:bg-[#39ff14]/10 hover:shadow-[0_0_12px_rgba(57,255,20,0.3)] transition-all duration-300"
            >
              Empecemos ahora
            </a>
          </div>

        </div>

        {/* Global Guided Progress Bar (Fills as they move forward) */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-900">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-[#39ff14] to-yellow-400 transition-all duration-500 ease-out"
            style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </nav>

      {/* 2. SLIDE DESK VIEWER VIEWPORT (AnimatePresence for smooth slide transitions) */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full"
          >
            
            {/* Slide Category Header indicator */}
            <div className="mb-4 inline-flex items-center gap-2 bg-emerald-950/20 border border-emerald-900/40 rounded-lg px-3 py-1 font-mono text-[9px] text-[#39ff14]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse"></span>
              <span>{slides[activeSlide].status.toUpperCase()}</span>
              <span className="text-gray-600">|</span>
              <span className="text-white">DIAPOSITIVA {activeSlide + 1} DE {slides.length}</span>
            </div>

            {/* Slide 0: Portada & Visión Hero Header */}
            {activeSlide === 0 && (
              <div className="max-w-3xl mx-auto text-center space-y-6 py-6 md:py-12">
                
                {/* Main Hero Callout */}
                <div className="space-y-6">
                  <span className="text-[9px] font-mono uppercase bg-neutral-900 border border-neutral-800 text-gray-400 px-3 py-1 rounded inline-block">
                    PROPUESTA DE ECOSISTEMA DIGITAL 2026
                  </span>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-impact tracking-tight leading-none text-white uppercase">
                    IMPACTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#10b981] text-glow-green">VISUAL</span> <br />INMEDIATO
                  </h1>

                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans max-w-2xl mx-auto">
                    Creamos narrativas audiovisuales de alto impacto diseñadas para capturar la atención en los primeros 3 segundos y maximizar la retención. 
                    La maquinaria agrícola de Bernardin Venezuela no se vende con publicaciones improvisadas; exige confianza, veracidad técnica y soluciones robustas explicadas en el campo.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center pt-3">
                    <button 
                      onClick={() => setActiveSlide(1)}
                      className="px-5 py-3 rounded-lg bg-[#10b981] hover:bg-[#39ff14] text-black font-impact text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(24,120,80,0.25)] transition-all duration-300 flex items-center gap-1.5"
                    >
                      <span>Iniciar Diapositiva Siguiente</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setActiveSlide(3)}
                      className="px-5 py-3 rounded-lg bg-[#040d06] hover:bg-[#091a0c] text-white border border-emerald-950/35 font-impact text-xs uppercase tracking-wider transition-all duration-300"
                    >
                      Previsualizar Feed de Marca
                    </button>
                  </div>

                  {/* Target credentials badges */}
                  <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-6 border-t border-emerald-950/35 font-mono text-[9px] text-gray-400 max-w-md mx-auto">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse"></span>
                      <span>Optimizado para: IG • FB • TT</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Slide 1: Enfoque Técnico - Manifesto */}
            {activeSlide === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Visual Callout */}
                <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-gradient-to-tr from-[#021305] to-[#010402] border border-emerald-950/30 relative shadow-2xl">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-[#39ff14]/10 border border-[#39ff14]/20 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Louis%20Marketing%2FGrupo%2019.png?alt=media" 
                      alt="Louis Marketing Logo" 
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-impact text-white leading-none uppercase">
                    ALIANZA <br />COMERCIAL DE <br />ALTA GAMA
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-3 leading-relaxed">
                    El productor venezolano exige veracidad técnica, respeta la historia agrícola de Bernardin, y quiere ver soluciones ante las condiciones más exigentes en plena faena.
                  </p>
                  
                  <div className="space-y-3 mt-6 pt-5 border-t border-zinc-900 font-sans">
                    <div className="flex items-start gap-2.5 text-xs">
                      <span className="text-[#39ff14] mt-0.5 font-bold">✔</span>
                      <span className="text-gray-300">Respuesta rápida WhatsApp inteligente.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs">
                      <span className="text-[#39ff14] mt-0.5 font-bold">✔</span>
                      <span className="text-gray-300">Pauta publicitaria en cordón cerealero de Portuguesa, Guárico, Barinas y Cojedes.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs">
                      <span className="text-[#39ff14] mt-0.5 font-bold">✔</span>
                      <span className="text-gray-300">Audiovisual de alto calibre técnico para la red de concesionarios.</span>
                    </div>
                  </div>
                </div>

                {/* Manifesto detailed text */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#39ff14] font-bold">Un Enfoque Comercial Inteligente</span>
                  <h2 className="text-2xl md:text-5xl font-impact text-white uppercase leading-tight tracking-tight">
                    No vendemos con publicidad genérica,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-emerald-400 text-glow-green">construimos confianza técnica</span>
                  </h2>
                  
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                    Para consolidar a <strong>Bernardin</strong> en la cumbre del mercado agrícola nacional, desplegamos una estructura multidisciplinaria de producción enfocada en responder las dudas críticas de todo productor del campo: el rendimiento operativo real en cosecha, la transferencia de potencia y el soporte técnico certificado.
                  </p>

                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                    No limitamos la gestión a subir publicaciones aisladas. Estructuramos un <strong>embudo de rendimiento integrado</strong> donde generamos contenido cinematográfico en plena jornada agrícola, unificamos la identidad de marca en toda la red nacional de distribución, y movilizamos flujos directos de leads interesados a los teléfonos oficiales de los concesionarios autorizados del país.
                  </p>

                  <div className="pt-4 border-t border-emerald-950/25">
                    <p className="text-xs text-gray-400 italic">
                      Especialistas en la traducción de manuales y especificaciones áridas en piezas de marketing de gran impacto visual y alta confiabilidad.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* Slide 2: El Equipo Profesional */}
            {activeSlide === 2 && (
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">CÉLULA ASIGNADA</span>
                  <h2 className="text-3xl md:text-5xl font-impact text-white uppercase">Directores de Campaña</h2>
                  <p className="text-xs text-gray-400 font-sans">
                    Contamos con líderes expertos con trayectoria comprobada en la promoción de maquinaria pesada, agro-industriales y marcas premium de Venezuela.
                  </p>
                </div>
                
                <div className="bg-black/20 p-2 sm:p-5 rounded-2xl border border-zinc-900/60 backdrop-blur-sm">
                  <TeamSection />
                </div>
              </div>
            )}

            {/* Slide 3: Estética & Feeds */}
            {activeSlide === 3 && (
              <div className="space-y-6">
                <div className="text-left max-w-3xl space-y-2 border-b border-zinc-900/60 pb-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">Galería de Impacto Visual</span>
                  <h2 className="text-3xl md:text-5xl font-impact text-white uppercase">Galería de Medios e Ingeniería</h2>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-2xl">
                    Explora nuestra galería multimedia interactiva. Filtra por tipo de contenido (fotos o videos) y categorías técnicas para visualizar las máquinas Bernardin en acción y campañas de marca.
                  </p>
                </div>
                
                <div className="bg-[#020803]/10 p-1 sm:p-4 rounded-2xl border border-emerald-950/20 shadow-inner">
                  <InteractiveFeed />
                </div>
              </div>
            )}

            {/* Slide 4: Simulador de Campañas & Ads */}
            {activeSlide === 4 && (
              <div className="space-y-6">
                <div className="text-left max-w-3xl space-y-2 border-b border-zinc-900/60 pb-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">Estrategia de Segmentación Localizada</span>
                  <h2 className="text-3xl md:text-5xl font-impact text-white uppercase font-sans">Análisis Geográfico de Pauta</h2>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-2xl">
                    Un sistema enfocado 100% en el cordón cerealero de Venezuela. Explora la frecuencia esperada de anuncios, el peso asignado de pauta para cada provincia y el impacto de adquisición presupuestado.
                  </p>
                </div>
                
                <div className="bg-black/20 p-2 sm:p-6 rounded-2xl border border-zinc-900/60 shadow-xl">
                  <AdsSimulator />
                </div>
              </div>
            )}

            {/* Slide 5: Presupuesto y Precios */}
            {activeSlide === 5 && (
              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">ÚLTIMO PASO: PROPUESTA ECONÓMICA</span>
                  <h2 className="text-3xl md:text-5xl font-impact text-white uppercase">Precios y Configuración</h2>
                  <p className="text-xs text-gray-400 font-sans">
                    Visualiza y ajusta los distintos módulos operativos de acuerdo a tus necesidades comerciales. Haz clic en activar para simular cotizaciones.
                  </p>
                </div>
                
                <div className="bg-black/30 p-2 sm:p-6 rounded-2xl border border-zinc-900/60 shadow-inner">
                  <PricingCalculator />
                </div>

                {/* Final Closing Call to Action Badge within Slide */}
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-2xl p-6 bg-gradient-to-tr from-emerald-950/45 to-[#052d10]/40 border border-emerald-500/30 text-center max-w-2xl mx-auto space-y-4 shadow-[0_0_25px_rgba(16,185,129,0.1)]"
                >
                  <div className="w-12 h-12 mx-auto rounded-full overflow-hidden p-[1px] bg-gradient-to-tr from-[#39ff14] to-emerald-600 animate-pulse flex items-center justify-center">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Louis%20Marketing%2FGrupo%2019.png?alt=media" 
                      alt="Louis Marketing Logo" 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-impact text-xl text-white uppercase">¿Listo para programar el despliegue comercial?</h4>
                    <p className="text-xs text-gray-300 font-sans max-w-md mx-auto">
                      Conversemos sobre los detalles técnicos de producción agrícola por WhatsApp o agenda una llamada con Louis Naranjo.
                    </p>
                  </div>
                  <div>
                    <a 
                      href={contactWhatsApp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#39ff14] hover:bg-emerald-400 text-black font-impact text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]"
                    >
                      <span>Hablar con Louis Naranjo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. PERSISTENT GUIDED FLOATING SLIDE NAVIGATION SYSTEM */}
      <div className="sticky bottom-0 z-40 bg-zinc-950/95 border-t border-zinc-900/80 p-4 w-full">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          
          {/* Progress numerical summary */}
          <div className="text-[12px] font-mono text-zinc-400 text-center sm:text-left flex items-center gap-2">
            <span className="text-[#39ff14] font-bold">DIAPOSITIVA:</span>
            <span className="text-white font-extrabold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-[11px] font-mono">
              {activeSlide + 1} de {slides.length}
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-gray-300 font-bold max-w-[200px] truncate">{slides[activeSlide].title}</span>
          </div>

          {/* Stepper Buttons for flawless touch capabilities on small smartphones */}
          <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
            <button
              onClick={prevSlide}
              disabled={activeSlide === 0}
              className={`flex-1 sm:flex-initial h-11 px-4 rounded-xl font-mono text-[11px] font-bold uppercase tracking-wider text-left inline-flex items-center justify-center gap-1.5 transition-all ${
                activeSlide === 0 
                  ? 'bg-zinc-900/30 text-zinc-600 border border-zinc-900 cursor-not-allowed opacity-40' 
                  : 'bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-800 hover:border-zinc-700 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4 text-[#39ff14]" />
              <span>Anterior</span>
            </button>

            {activeSlide < slides.length - 1 ? (
              <button
                onClick={nextSlide}
                className="flex-1 sm:flex-initial h-11 px-5 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-impact text-[11px] uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(16,185,129,0.15)] active:scale-95 transition-all"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4 text-[#39ff14]" />
              </button>
            ) : (
              <a
                href={contactWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial h-11 px-5 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-500 text-white font-impact text-[11px] uppercase tracking-widest inline-flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-95 transition-all animate-pulse"
              >
                <span>EMPECEMOS AHORA</span>
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 4. SOLID BRAND FOOTER */}
      <footer className="bg-black/95 border-t border-emerald-950/35 py-12 text-xs text-gray-500 z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#39ff14] flex items-center justify-center font-impact text-xs text-black">
                LM
              </div>
              <span className="text-sm font-impact text-white tracking-wider uppercase">Louis Marketing</span>
            </div>
            <p className="text-gray-400 font-sans leading-relaxed text-[11px]">
              Ingeniería de datos, producción audiovisual técnica y administración de campañas para maquinaria pesada en Venezuela y Latinoamérica.
            </p>
            <p className="text-[10px] text-gray-600 font-mono">
              © 2026 Sound and Art Publicidad C.A. Todos los derechos reservados.
            </p>
          </div>

          {/* Links 1 */}
          <div className="space-y-2 text-left">
            <strong className="text-xs uppercase text-[#39ff14] tracking-wider block font-impact">Canales de Campaña</strong>
            <ul className="space-y-1 font-mono text-[11px] text-gray-400">
              <li>Instagram Oficial Meta</li>
              <li>Facebook Business Network</li>
              <li>TikTok Creator Ads</li>
              <li>WhatsApp Business CRM</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-2 text-left">
            <strong className="text-xs uppercase text-[#39ff14] tracking-wider block font-impact">Especialidades Agrícolas</strong>
            <ul className="space-y-1 font-mono text-[11px] text-gray-400">
              <li>Cosechadoras Bernardin</li>
              <li>Tractores Serie Orion</li>
              <li>Tecnología de Siembra</li>
              <li>Identidad de Concesionarios</li>
            </ul>
          </div>

          {/* Direct Address / Signature info */}
          <div className="space-y-2 text-left">
            <strong className="text-xs uppercase text-[#39ff14] tracking-wider block font-impact">Contacto Directo</strong>
            <p className="text-gray-400 text-[11px] font-sans leading-relaxed">
              <strong>Directores de Campaña:</strong> Louis Naranjo & Sound and Art Publicidad.<br />
              <strong>WhatsApp:</strong> +58 424 3258536<br />
              <strong>E-mail:</strong> gerencia@louismarketingve.com
            </p>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 pt-6 border-t border-zinc-900/60 text-center font-mono text-[9px] text-gray-600">
          Presentado por: Louis Marketing by Sound and Art Publicidad.
        </div>
      </footer>

    </div>
  );
}
