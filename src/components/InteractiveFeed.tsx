import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Image as ImageIcon, Video, X, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Calendar, Info, MessageSquare } from 'lucide-react';

/* 
================================================================================
💡 CÓMO AGREGAR O EDITAR TUS IMÁGENES Y VIDEOS:
================================================================================
Para añadir tus propios videos o fotos en el futuro, solo debes modificar la lista 
'galleryItems' a continuación. Cada elemento tiene los siguientes campos:

- id: Un identificador único (ej: 'item-7')
- type: Puede ser 'image' (imagen) o 'video' (video)
- videoType: Si type es 'video', define si es:
    * 'direct': URL directa a un archivo de video .mp4 (se reproducirá con el reproductor de la web)
    * 'youtube': URL de incrustar de YouTube (ej: 'https://www.youtube.com/embed/[ID_DEL_VIDEO]')
- title: Título visible de la tarjeta
- description: Descripción técnica o promocional detallada
- category: Categoría para filtrado ('Técnico' | 'Campaña' | 'Educativo' | 'Detrás de Cámara')
- mediaUrl: Enlace al archivo de imagen (.jpg, .png) o video (.mp4 o el link 'embed' de YouTube)
- thumbnailUrl: Para videos, la imagen que se mostrará como portada antes de hacer clic
- date: Texto con la fecha (ej: 'Hace 2 días')
================================================================================
*/

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  videoType?: 'direct' | 'youtube';
  title: string;
  description: string;
  category: 'Técnico' | 'Campaña' | 'Educativo' | 'Detrás de Cámara';
  mediaUrl: string;
  thumbnailUrl?: string;
  date: string;
}

export default function InteractiveFeed() {
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'item-1',
      type: 'image',
      title: 'Cosechadora Bernardin M2120 en Portuguesa',
      category: 'Técnico',
      mediaUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FBernardin_M%C3%A1quinas_Agr%C3%ADcolas_en_%E2%80%A6_202606201320.jpeg?alt=media&token=dd930d41-be42-47a6-8099-fcc1050efddd',
      description: 'Cosecha de arroz en los llanos de Portuguesa con la Bernardin M2120. Ingeniería robusta diseñada para soportar las condiciones más exigentes del suelo venezolano. Altísima eficiencia en grano limpio y la mejor relación costo-rendimiento del país.\n\n⚙️ Ficha Técnica:\n• Motor Turbo Intercooler 210HP\n• Plataforma autonivelante 25 pies\n• Tracción doble hidrostática',
      date: 'Hace 2 horas'
    },
    {
      id: 'item-2',
      type: 'video',
      videoType: 'direct',
      title: 'Cosechadora en Acción (Técnica de Trilla)',
      category: 'Técnico',
      mediaUrl: 'https://videos.pexels.com/video-files/4458311/4458311-sd_640_360_24fps.mp4',
      thumbnailUrl: 'https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&w=640',
      description: 'Vista aérea técnica del desplazamiento lineal y la trilla de alto rendimiento. Los sistemas Bernardin maximizan el aprovechamiento de grano en cultivos de alta densidad, disminuyendo la pérdida por hectárea.',
      date: 'Hace 1 día'
    },
    {
      id: 'item-3',
      type: 'image',
      title: 'Tractor Bernardin Serie Orion: Potencia Pura',
      category: 'Campaña',
      mediaUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FBernardin_M%C3%A1quinas_Agr%C3%ADcolas_en_%E2%80%A6_202606231218.jpeg?alt=media&token=018c6f47-442b-4277-8548-a2ac45433c23',
      description: 'Desplegados en el corazón cerealero llanero. El Tractor Bernardin Serie Orion está listo para la preparación del suelo de siembra. Robustez mecánica simplificada que garantiza que el trabajo NUNCA se detenga. Repuestos originales garantizados a nivel nacional.',
      date: 'Ayer'
    },
    {
      id: 'item-4',
      type: 'video',
      videoType: 'direct',
      title: 'Trabajo de Suelos con Tractor Bernardin',
      category: 'Campaña',
      mediaUrl: 'https://videos.pexels.com/video-files/3195393/3195393-sd_640_360_25fps.mp4',
      thumbnailUrl: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=640',
      description: 'Demostración de fuerza de arrastre y torque constante. La Serie Orion destaca por su sistema de transmisión simplificado de alta duración y consumo de combustible optimizado para pautas agrícolas continuas.',
      date: 'Hace 3 días'
    },
    {
      id: 'item-5',
      type: 'image',
      title: 'Soporte Técnico en Finca: Garantía de Campo',
      category: 'Educativo',
      mediaUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FFlyer_con_logo_y_web_202606201312.jpeg?alt=media&token=44bc23f1-061b-42f1-8ae0-b67346e6179c',
      description: '🛠️ EN EL TERRENO CUANDO MÁS NOS NECESITAS. En Bernardin Venezuela entendemos que un día de parada es comida perdida. Por eso, nuestros ingenieros y mecánicos certificados se trasladan directamente a tu unidad de producción con stock inmediato de repuestos y consumibles originales.',
      date: 'Hace 5 días'
    },
    {
      id: 'item-6',
      type: 'video',
      videoType: 'youtube',
      title: 'Demostración Dinámica: Tecnologías Agrícolas',
      category: 'Detrás de Cámara',
      mediaUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnailUrl: 'https://images.pexels.com/photos/2887463/pexels-photo-2887463.jpeg?auto=compress&cs=tinysrgb&w=640',
      description: 'Ejemplo de video interactivo alojado en YouTube. El sistema de la galería integra reproductores externos fluidamente mediante iframes, facilitando la adición de tus campañas y videos subidos a tu canal.',
      date: 'Hace 1 semana'
    }
  ];

  // Filtered items based on active tabs
  const filteredItems = galleryItems.filter(item => {
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesType && matchesCategory;
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') {
        setActiveItemIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, filteredItems]);

  const handleNext = () => {
    if (activeItemIndex === null || filteredItems.length === 0) return;
    setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeItemIndex === null || filteredItems.length === 0) return;
    setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <div className="w-full bg-[#020803]/80 text-white rounded-3xl border border-emerald-900/30 shadow-2xl overflow-hidden mb-16">
      
      {/* Gallery Header */}
      <div className="p-6 md:p-8 bg-black/60 border-b border-zinc-900 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse"></span>
            <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">Catálogo e Impacto Audiovisual</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-impact uppercase mt-1.5 text-white tracking-wide">
            Galería Multimedia Bernardin
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-xl">
            Explora las fotos y videos de nuestra maquinaria pesada operando en campo y el soporte técnico especializado en tiempo real.
          </p>
        </div>

        {/* Dynamic Navigation Filters */}
        <div className="flex flex-col sm:flex-row gap-3 self-stretch xl:self-center">
          {/* Media Type Filters */}
          <div className="flex bg-neutral-950 p-1 rounded-xl border border-zinc-800/80">
            <button
              onClick={() => { setFilterType('all'); setActiveItemIndex(null); }}
              className={`px-3.5 py-2 rounded-lg text-xs font-impact uppercase tracking-wider transition-all duration-300 ${
                filterType === 'all'
                  ? 'bg-gradient-to-r from-emerald-600 to-[#39ff14] text-black shadow-md shadow-emerald-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => { setFilterType('image'); setActiveItemIndex(null); }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-impact uppercase tracking-wider transition-all duration-300 ${
                filterType === 'image'
                  ? 'bg-gradient-to-r from-emerald-600 to-[#39ff14] text-black shadow-md shadow-emerald-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Imágenes
            </button>
            <button
              onClick={() => { setFilterType('video'); setActiveItemIndex(null); }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-impact uppercase tracking-wider transition-all duration-300 ${
                filterType === 'video'
                  ? 'bg-gradient-to-r from-emerald-600 to-[#39ff14] text-black shadow-md shadow-emerald-500/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Videos
            </button>
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => { setFilterCategory(e.target.value); setActiveItemIndex(null); }}
            className="bg-neutral-950 text-gray-300 text-xs font-mono border border-zinc-800 rounded-xl px-4 py-2 focus:outline-none focus:border-[#39ff14]/50 cursor-pointer"
          >
            <option value="all">Categorías (Todas)</option>
            <option value="Técnico">Técnico</option>
            <option value="Campaña">Campaña</option>
            <option value="Educativo">Educativo</option>
            <option value="Detrás de Cámara">Detrás de Cámara</option>
          </select>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="p-6 md:p-8">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveItemIndex(index)}
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group bg-zinc-950 border border-zinc-900 hover:border-[#39ff14]/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300"
              >
                {/* Media preview element */}
                <img
                  src={item.type === 'image' ? item.mediaUrl : (item.thumbnailUrl || 'https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg')}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Constant bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-all duration-300" />

                {/* Category & Type badges at the top */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#39ff14] border border-[#39ff14]/20 px-2 py-0.5 rounded-lg">
                    {item.category}
                  </span>
                  <span className="p-1.5 rounded-full bg-black/70 backdrop-blur-md border border-zinc-800 text-white">
                    {item.type === 'video' ? (
                      <Video className="w-3.5 h-3.5 text-[#39ff14]" />
                    ) : (
                      <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </span>
                </div>

                {/* Large Pulsing Play Icon for video items */}
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-[#39ff14]/40 flex items-center justify-center text-[#39ff14] shadow-lg opacity-85 group-hover:opacity-100 group-hover:scale-110 transition duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                )}

                {/* Bottom title & text info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h4 className="text-sm font-impact uppercase text-white tracking-wide leading-tight group-hover:text-[#39ff14] transition duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-mono mt-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-500" />
                    {item.date}
                  </p>
                  
                  {/* Expandable description on hover */}
                  <p className="text-[11px] text-gray-300 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-black/20 rounded-2xl border border-dashed border-zinc-800">
            <Info className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
            <p className="text-xs text-gray-400 font-mono">No se encontraron archivos multimedia con los filtros seleccionados.</p>
          </div>
        )}
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveItemIndex(null)}
          >
            {/* Close button inside lightbox */}
            <button
              onClick={() => setActiveItemIndex(null)}
              className="fixed top-4 right-4 z-[150] p-3 rounded-full bg-neutral-900 border border-zinc-800 text-gray-400 hover:text-white transition hover:scale-105 active:scale-95 shadow-2xl"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox container */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full bg-neutral-950 border border-zinc-900/60 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media viewer side (lg:col-span-8) */}
              <div className="lg:col-span-8 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[420px] lg:min-h-[480px]">
                
                {/* Direct image render */}
                {activeItem.type === 'image' && (
                  <img
                    src={activeItem.mediaUrl}
                    alt={activeItem.title}
                    className="w-full h-full max-h-[70vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Direct MP4 HTML5 Video player */}
                {activeItem.type === 'video' && activeItem.videoType === 'direct' && (
                  <video
                    key={activeItem.id}
                    src={activeItem.mediaUrl}
                    className="w-full h-full max-h-[70vh] object-contain"
                    controls
                    autoPlay
                    loop
                    playsInline
                  />
                )}

                {/* YouTube Video iframe embed */}
                {activeItem.type === 'video' && activeItem.videoType === 'youtube' && (
                  <div className="w-full aspect-video p-2 md:p-4 max-h-[70vh] flex items-center justify-center">
                    <iframe
                      key={activeItem.id}
                      src={`${activeItem.mediaUrl}?autoplay=1&mute=0&rel=0`}
                      title={activeItem.title}
                      className="w-full aspect-video rounded-xl border border-zinc-800"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Left/Right Directional Controls */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-zinc-800 hover:border-[#39ff14]/30 text-white hover:text-[#39ff14] hover:scale-105 active:scale-95 transition-all z-40"
                      aria-label="Archivo anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNext(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-zinc-800 hover:border-[#39ff14]/30 text-white hover:text-[#39ff14] hover:scale-105 active:scale-95 transition-all z-40"
                      aria-label="Siguiente archivo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Description side panel (lg:col-span-4) */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-900 bg-neutral-950/95 max-h-[85vh] lg:max-h-[500px] overflow-y-auto">
                <div className="space-y-5">
                  
                  {/* Avatar Profile */}
                  <div className="flex items-center gap-3 pb-3 border-b border-zinc-900">
                    <div className="w-9 h-9 rounded-full p-[1.5px] bg-[#39ff14]">
                      <div className="w-full h-full rounded-full bg-black p-0.5">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2Fbernardin.png?alt=media&token=d1624b86-0fc1-4ca7-9624-d13076d670ce"
                          alt="Logo Bernardin"
                          className="w-full h-full rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white">Bernardin Venezuela</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#39ff14]" />
                      </div>
                      <span className="text-[9px] text-[#39ff14] font-mono block">Cosechando Futuro</span>
                    </div>
                  </div>

                  {/* Metadata and Description */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-950/40 text-emerald-400 px-2 py-0.5 rounded">
                        {activeItem.category}
                      </span>
                      <span className="text-[9px] font-mono uppercase bg-zinc-900 text-gray-400 px-2 py-0.5 rounded">
                        {activeItem.type === 'video' ? 'Video' : 'Imagen'}
                      </span>
                    </div>

                    <h4 className="text-lg font-impact uppercase tracking-wide text-white leading-tight mt-2">
                      {activeItem.title}
                    </h4>

                    <div className="text-[11px] text-gray-400 font-mono flex items-center gap-1.5 py-1">
                      <Calendar className="w-3.5 h-3.5 text-[#39ff14]" />
                      <span>Publicado: {activeItem.date}</span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-sans bg-zinc-900/30 p-3.5 rounded-xl border border-zinc-900 max-h-40 overflow-y-auto whitespace-pre-wrap select-text scrollbar-thin">
                      {activeItem.description}
                    </p>
                  </div>
                </div>

                {/* Footer and Interactive buttons */}
                <div className="pt-5 mt-5 border-t border-zinc-900 space-y-3">
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                    <button
                      onClick={() => setActiveItemIndex(null)}
                      className="flex-1 py-2 text-[10px] font-mono uppercase tracking-wider text-gray-400 hover:text-white bg-neutral-900 hover:bg-neutral-850 rounded-lg border border-zinc-850 transition"
                    >
                      Volver a la galería
                    </button>
                    <a
                      href={`https://wa.me/584243258536?text=Hola,%20vi%20la%20ficha%20multimedia%20de%20la%20maquinaria:%20"${encodeURIComponent(activeItem.title)}"%20y%20me%20gustaría%20saber%20más%20información.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-[#39ff14] hover:bg-emerald-400 text-black text-center font-impact text-[10px] uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_12px_rgba(57,255,20,0.3)] flex items-center justify-center gap-1.5"
                    >
                      <span>Consultar por WhatsApp</span>
                      <MessageSquare className="w-3 h-3 text-black" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
