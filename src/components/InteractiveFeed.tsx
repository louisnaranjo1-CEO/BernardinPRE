import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, MessageCircle, RefreshCw, Layers, ShieldCheck, Compass, Grid, Sparkles, AlertCircle, X, Maximize2 } from 'lucide-react';
import { SocialPost } from '../types';

export default function InteractiveFeed() {
  const [activeTab, setActiveTab] = useState<'grid' | 'comparison' | 'carousel'>('grid');
  const [selectedPost, setSelectedPost] = useState<string>('post-1');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // ESC key handler to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // High fidelity simulated posts for Bernardin Venezuela
  const simulatedPosts: SocialPost[] = [
    {
      id: 'post-1',
      title: 'Cosechadora Bernardin M2120 en Portuguesa',
      category: 'Técnico',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FBernardin_M%C3%A1quinas_Agr%C3%ADcolas_en_%E2%80%A6_202606201320.jpeg?alt=media&token=dd930d41-be42-47a6-8099-fcc1050efddd', // Beautiful harvest machine working
      caption: '🔥 POTENCIA QUE INSPIRA CONFIANZA. Cosecho de arroz en los llanos de Portuguesa con la Bernardin M2120. Ingeniería robusta diseñada para soportar las condiciones más exigentes del suelo venezolano. Altísima eficiencia en grano limpio y la mejor relación costo-rendimiento del país. \n\n⚙️ Ficha Técnica:\n• Motor Turbo Intercooler 210HP\n• Plataforma autonivelante 25 píes\n• Tracción doble hidrostática\n\n#BernardinVenezuela #Portuguesa #Llanos #Cosechadora #MaquinariaAgricola #Arroz #VenezuelaAgro',
      likes: 348,
      comments: 42,
      date: 'Hace 2 horas'
    },
    {
      id: 'post-2',
      title: 'Tractor Bernardin Serie Orion: Potencia Pura',
      category: 'Campaña',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FBernardin_M%C3%A1quinas_Agr%C3%ADcolas_en_%E2%80%A6_202606231218.jpeg?alt=media&token=018c6f47-442b-4277-8548-a2ac45433c23', // Powerful farm tractor
      caption: '📍 Desplegados en el corazón cerealero llanero. El Tractor Bernardin Serie Orion está listo para la preparación del suelo de siembra. Robustez mecánica simplificada que garantiza que el trabajo NUNCA se detenga. Repuestos originales garantizados a nivel nacional.\n\n¿Listo para revolucionar tu producción? Escríbenos directamente al link de la bio. 📲\n\n#Bernardin #Guarico #Barinas #Tractores #Siembra #Maiz #VenezuelaProductiva',
      likes: 289,
      comments: 19,
      date: 'Ayer'
    },
    {
      id: 'post-3',
      title: 'Soporte Técnico en Finca: Garantía de Campo',
      category: 'Educativo',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FFlyer_con_logo_y_web_202606201312.jpeg?alt=media&token=44bc23f1-061b-42f1-8ae0-b67346e6179c', // Farming technology agronomy
      caption: '🛠️ EN EL TERRENO CUANDO MÁS NOS NECESITAS. En Bernardin Venezuela entendemos que un día de parada es comida perdida. Por eso, nuestros ingenieros y mecánicos certificados se trasladan directamente a tu unidad de producción con stock inmediato de consumibles originales.\n\nTu tranquilidad es nuestro único estándar de servicio. 🚜🇻🇪\n\n#ServicioTecnico #SoporteBernardin #Repuestos #MaquinariaAgricola #Cojedes #Anzoategui',
      likes: 512,
      comments: 63,
      date: 'Hace 3 días'
    },
    {
      id: 'post-4',
      title: 'Sistemas Inteligentes de Monitoreo Bernardin',
      category: 'Técnico',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FFlyer_con_logo_y_web_202606201312.jpeg?alt=media&token=44bc23f1-061b-42f1-8ae0-b67346e6179c', // Agricultural tech tablet/monitoring
      caption: '📈 INGENIERÍA DE DATOS AL SERVICIO DE TU RENDIMIENTO. Controla el consumo de combustible, la pérdida de granos por hectárea y la velocidad de trilla en tiempo real desde nuestra app integrada con Inteligencia Artificial. Menos improvisación, más ganancias óptimas.\n\nLa tecnología que respeta tu esfuerzo llanero.\n\n#AgroTech #MaquinariaInteligente #BernardinAI #SoundAndArt #TecnologiaAgricola',
      likes: 405,
      comments: 31,
      date: 'Hace 5 días'
    },
    {
      id: 'post-5',
      title: 'Demostración Dinámica: Bernardin M240',
      category: 'Detrás de Cámara',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FBernardin_M%C3%A1quinas_Agr%C3%ADcolas_en_%E2%80%A6_202606201320.jpeg?alt=media&token=dd930d41-be42-47a6-8099-fcc1050efddd', // Agricultural expo / machine show
      caption: '✨ ¡DÍA DE EXPO EN CALABOZO! Así vivimos la demostración activa de la majestuosa Bernardin M240 en plena trilla de arroz. Productores de todo el país constataron de cerca la limpieza perfecta con la que sale el grano directo a tolva.\n\nGracias a los valientes del campo que siguen apostando al crecimiento sustentable. 🌽🌾\n\n#Calabozo #Guarico #RiceExpos #TrillaEnVivo #BernardinPower',
      likes: 673,
      comments: 87,
      date: 'Hace 1 semana'
    },
    {
      id: 'post-6',
      title: 'El Ciclo Productivo No Se Detiene',
      category: 'Campaña',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2FBernardin_M%C3%A1quinas_Agr%C3%ADcolas_en_%E2%80%A6_202606231218.jpeg?alt=media&token=018c6f47-442b-4277-8548-a2ac45433c23', // Beautiful vast sunset and farm
      caption: '🌅 Cuando el sol se oculta en Cojedes, la faena del tractorista apenas entra en su fase cumbre. Bernardin acompaña tus jornadas extendidas con faros LED de ultra alta intensidad y sistemas de cabina presurizada con climatización ergonómica.\n\nDiseñados por y para el productor exigente. 🇻🇪🌾\n\n#LlanosVenezolanos #Cojedes #Arrozal #FuerzaBernardin #FielAlCampo',
      likes: 421,
      comments: 29,
      date: 'Hace 1 semana'
    }
  ];

  const currentPost = simulatedPosts.find(p => p.id === selectedPost) || simulatedPosts[0];

  return (
    <div className="w-full bg-[#020803]/85 text-white rounded-2xl border border-emerald-900/30 shadow-2xl overflow-hidden mb-16">
      
      {/* Simulation Header */}
      <div className="p-5 md:p-6 bg-black/50 border-b border-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#39ff14] animate-pulse"></span>
            <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">Visualizador Interactivo de Marca</span>
          </div>
          <h3 className="text-xl md:text-3xl font-impact uppercase mt-1 text-white">¿Cómo lucirá Bernardin en redes?</h3>
          <p className="text-xs text-gray-400 mt-1">Explora de manera visual y en tiempo real el feed que diseñaremos para la marca.</p>
          
          {/* Interactive Legend Callout */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/20 border border-emerald-800/30 text-[#39ff14] font-mono text-[11px] animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
            <span>🟢 <strong>PRESIÓN DE OPCIONES:</strong> Por favor, haz clic en las pestañas coloridas del menú para previsualizar los distintos formatos.</span>
          </div>
        </div>

        {/* Tab Controls with custom highly colorful designs */}
        <div className="flex flex-wrap gap-2 bg-neutral-950/90 p-2 rounded-xl border border-zinc-800 self-start md:self-center">
          <button
            onClick={() => setActiveTab('grid')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-impact uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'grid'
                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white border border-pink-500/40 shadow-[0_0_15px_rgba(219,39,119,0.5)] scale-105'
                : 'text-gray-400 hover:text-purple-300 hover:bg-purple-950/10 border border-transparent'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            Instagram Feed
          </button>
          
          <button
            onClick={() => setActiveTab('comparison')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-impact uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'comparison'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105'
                : 'text-gray-400 hover:text-cyan-300 hover:bg-cyan-950/10 border border-transparent'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Antes vs Después
          </button>
          
          <button
            onClick={() => setActiveTab('carousel')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-impact uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'carousel'
                ? 'bg-gradient-to-r from-yellow-500 via-lime-400 to-[#39ff14] text-black font-extrabold border border-lime-400/40 shadow-[0_0_15px_rgba(57,255,20,0.5)] scale-105'
                : 'text-gray-400 hover:text-lime-300 hover:bg-lime-950/10 border border-transparent'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Carruseles
          </button>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'grid' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Instagram Feed Grid (Col-Span 7) */}
              <div className="lg:col-span-7 bg-black/40 border border-zinc-900 rounded-xl p-4 md:p-6 shadow-xl space-y-4">
                
                {/* Simulated Profile Header */}
                <div className="flex items-center justify-between pb-5 border-b border-zinc-900/60">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-[#39ff14] to-emerald-600">
                      <div className="w-full h-full rounded-full bg-black p-0.5">
                        <img 
                          src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2Fbernardin.png?alt=media&token=d1624b86-0fc1-4ca7-9624-d13076d670ce" 
                          alt="Logotipo Bernardin Venezuela" 
                          className="w-full h-full rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-sans font-bold text-xs md:text-sm tracking-wide">@bernardin_venezuela</h4>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#39ff14]" />
                      </div>
                      <p className="text-[10px] text-gray-500 font-mono">Bernardin Venezuela Oficial</p>
                      <div className="flex gap-2.5 text-[10px] sm:text-xs mt-1 text-gray-400 font-sans">
                        <span><strong>168</strong> posts</span>
                        <span><strong>24.8k</strong> seguidores</span>
                        <span><strong>412</strong> seguidos</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <button className="bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#39ff14]">
                      Ver en Web
                    </button>
                  </div>
                </div>

                {/* Profile bio summary */}
                <div className="text-[11px] text-gray-300 space-y-0.5 font-sans">
                  <p>🌾 Distribuidor oficial de la prestigiosa marca Bernardin en Venezuela.</p>
                  <p>🚜 Cosechadoras y Tractores listos con servicio de repuestos originales.</p>
                  <p className="font-mono text-[#39ff14] text-[10px]">📍 Portuguesa • Guárico • Barinas • Cojedes</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {simulatedPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedPost(post.id)}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer group border-2 ${
                        selectedPost === post.id 
                          ? 'border-[#39ff14] shadow-[0_0_12px_rgba(57,255,20,0.3)]' 
                          : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition duration-300 group-hover:brightness-95 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3 text-white font-semibold text-[11px]">
                        <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-white" /> {post.likes}</span>
                        <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 fill-white" /> {post.comments}</span>
                      </div>
                      
                      <span className={`absolute top-1.5 right-1.5 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-md text-white bg-black/60 border border-zinc-800`}>
                        {post.category}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Detail View (Col-Span 5) */}
              <div className="lg:col-span-5 flex flex-col bg-black/40 border border-zinc-900 rounded-xl overflow-hidden shadow-xl">
                {/* Simulated Smartphone Header */}
                <div className="bg-[#040f06] px-4 py-2.5 border-b border-zinc-900 flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-[#39ff14]" />
                  <span className="text-[10px] tracking-wider font-mono text-gray-300">Publicación en Pantalla</span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header profile line of active post */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-full p-[1.5px] bg-[#39ff14]">
                        <img 
                          src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2Fbernardin.png?alt=media&token=d1624b86-0fc1-4ca7-9624-d13076d670ce" 
                          alt="Logo Avatar" 
                          className="w-full h-full object-cover rounded-full bg-black p-0.5"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-white">bernardin_venezuela</span>
                        </div>
                        <span className="text-[9px] text-[#39ff14] font-mono">Llanos de Portuguesa, Venezuela</span>
                      </div>
                    </div>

                    {/* Active post Main Image with 3:4 aspect ratio and lightbox trigger */}
                    <div 
                      onClick={() => setIsLightboxOpen(true)}
                      className="aspect-[3/4] max-h-[360px] md:max-h-[380px] w-full rounded-lg overflow-hidden relative border border-zinc-900 mb-3 cursor-zoom-in group select-none shadow-lg bg-[#020502]/60"
                    >
                      <img 
                        src={currentPost.imageUrl} 
                        alt={currentPost.title} 
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-black/80 border border-[#39ff14]/50 flex items-center justify-center text-[#39ff14] shadow-lg animate-bounce">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-[#39ff14] font-bold bg-black/75 px-2.5 py-1 rounded border border-[#39ff14]/20">
                          PRESIONA PARA AMPLIAR
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-sm border border-[#39ff14]/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[9px] font-mono z-10">
                        <Sparkles className="w-3 h-3 text-[#39ff14]" />
                        <span>Sound & Art Publicidad</span>
                      </div>
                      
                      {/* Portrait aspect tag badge */}
                      <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-sm border border-zinc-800 px-2 py-0.5 rounded text-[8px] font-mono text-gray-300 z-10">
                        Formato 3:4 (Portátil)
                      </div>
                    </div>

                    {/* Likes & Actions line */}
                    <div className="flex items-center justify-between mb-2 text-gray-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] text-white hover:text-[#39ff14] cursor-pointer font-bold">
                          <Heart className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                          {currentPost.likes}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white">
                          <MessageCircle className="w-3.5 h-3.5 text-gray-400" />
                          {currentPost.comments}
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-500 font-mono">{currentPost.date}</span>
                    </div>

                    {/* Description Text box with local scroll */}
                    <div className="bg-[#020502]/80 rounded-lg p-2.5 border border-zinc-900 border-l-2 border-l-[#39ff14] max-h-32 overflow-y-auto text-[11px] text-gray-300 leading-relaxed font-sans scrollbar-thin mb-2.5">
                      <p className="font-bold text-white">bernardin_venezuela <span className="font-normal text-gray-300 ml-1 whitespace-pre-line">{currentPost.caption}</span></p>
                    </div>

                    {/* Highly visible Expand button */}
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      className="w-full py-2.5 mb-1 bg-gradient-to-r from-emerald-950/40 via-[#10b981]/15 to-emerald-950/40 hover:via-[#10b981]/25 hover:to-emerald-950/60 text-[10px] font-impact uppercase tracking-wider text-[#39ff14] border border-emerald-950/50 hover:border-[#39ff14]/50 rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-[0.98]"
                    >
                      <Maximize2 className="w-3.5 h-3.5 animate-pulse text-[#39ff14]" />
                      <span>Ver Publicación y Copy Ampliado</span>
                    </button>
                  </div>

                  <div className="border-t border-zinc-900/60 mt-3 pt-3 text-[9px] font-mono text-center flex items-center justify-center gap-2">
                    <span className="text-[#39ff14] animate-pulse">●</span>
                    <span className="text-gray-500">Marketing Técnico Agropecuario</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'comparison' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Introduction card */}
              <div className="bg-black/40 border border-zinc-900 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-950/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                    <Layers className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-sm font-impact uppercase tracking-wider text-[#39ff14]">El antes y el después de la marca en Venezuela</h4>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      El productor agropecuario de hoy es digital y exigente. Un anuncio improvisado destruye la reputación de una marca histórica. 
                      Usa el control deslizante a continuación para comparar una publicación simple vs una optimizada con criterio de diseño técnico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison Slider with responsive min-height and aspect for preventing text clipping on mobile */}
              <div className="relative aspect-[4/3] md:aspect-[16/9] min-h-[350px] md:min-h-[420px] w-full rounded-xl overflow-hidden border border-zinc-900 shadow-2xl select-none">
                {/* Before Side (Improvised) */}
                <div className="absolute inset-0 bg-[#060c08]">
                  <div className="w-full h-full flex flex-col justify-center items-start p-5 md:p-12 text-left relative">
                    <span className="text-[9px] font-mono uppercase bg-red-950/40 text-red-400 border border-red-500/15 px-2 py-1 rounded mb-2 font-bold font-sans">⚠️ ENFOQUE IMPROVISADO</span>
                    <h1 className="text-lg sm:text-2xl md:text-4xl font-sans font-bold text-gray-400 max-w-sm leading-tight">Cosechadoras Bernardin en Venta en Portuguesa</h1>
                    <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 mt-2 max-w-xs font-sans">
                      Vendo cosechadoras baratas entrega inmediata. Consúltame precio al directo. No te quedes sin repuestos.
                    </p>
                  </div>
                </div>

                {/* After Side (Sleek Publicidad por Sound and Art) */}
                <div 
                  className="absolute inset-0 bg-[#020502] overflow-hidden"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <div className="w-full h-full flex flex-col justify-center items-start p-5 md:p-12 text-left relative bg-dot-pattern">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-950/10 via-transparent to-transparent"></div>
                    
                    <span className="text-[9px] font-mono uppercase bg-[#39ff14]/15 text-[#39ff14] border border-[#39ff14]/30 px-2 py-1 rounded mb-2 font-bold font-sans">🛡️ DISEÑO EDITORIAL SOUND AND ART</span>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-impact text-white max-w-sm tracking-wide leading-tight uppercase">
                      INGENIERÍA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-emerald-400 text-glow-green">ROBUSTA</span> PARA EL CAMPO LLANERO
                    </h1>
                    <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 mt-3 max-w-xs font-sans leading-relaxed">
                      El estándar para cosechas perfectas. Bernardin Venezuela despliega equipos eficientes con la mayor tasa de retorno por hectárea del mercado.
                    </p>
                  </div>
                </div>

                {/* Slider Drag Bar */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-[#39ff14] cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-7 h-7 rounded-full bg-black border border-[#39ff14] flex items-center justify-center hover:bg-[#39ff14] group hover:text-black transition text-[#39ff14] absolute -translate-x-1/2 shadow-lg">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                  </div>
                </div>

                {/* Invisible input overlay for dragging */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition} 
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                />
              </div>

              <div className="text-center font-mono text-[10px] text-gray-500">
                <span>Desliza de izquierda a derecha para alternar la visualización del resultado publicitario.</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'carousel' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-black/40 border border-zinc-900 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">Técnica de Secuencias Narrativas</span>
                  <h4 className="text-lg font-impact text-white uppercase mt-1">Estructura de Carruseles Educativos</h4>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    Las redes premian los carruseles porque multiplican el tiempo de pantalla del usuario. El productor agrícola venezolanos lee, aprende y comparte la información de valor.
                  </p>

                  <div className="space-y-2 mt-4">
                    <div className="flex gap-2 text-[11px] bg-black/60 border border-zinc-900 p-2.5 rounded-lg">
                      <span className="font-mono text-[#39ff14] font-bold">Slide 1:</span>
                      <div>
                        <strong className="text-white block font-sans">El Gancho</strong>
                        <span className="text-gray-400">Planteamos la productividad real en cosecha.</span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-[11px] bg-black/60 border border-zinc-900 p-2.5 rounded-lg">
                      <span className="font-mono text-[#39ff14] font-bold">Slide 2-3:</span>
                      <div>
                        <strong className="text-white block font-sans">Soporte Técnico</strong>
                        <span className="text-gray-400">Desglosamos HP de motor, tolvas y engranajes.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-emerald-950/15 border border-emerald-500/20 text-[#39ff14] rounded-lg text-[10px] leading-relaxed font-sans">
                  <AlertCircle className="w-4 h-4 inline mr-1.5 align-middle" />
                  Este modelo de marketing posiciona las cosechadoras y tractores como inversiones seguras.
                </div>
              </div>

              {/* Interactive Carousel Card */}
              <div className="bg-black/40 border border-zinc-900 rounded-xl p-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-xs rounded-xl overflow-hidden border border-zinc-900 bg-black/85 shadow-xl flex flex-col">
                  {/* Photo Slide Frame */}
                  <div className="relative aspect-[4/5] bg-gradient-to-t from-black via-zinc-950 to-neutral-900 border-b border-zinc-900 overflow-hidden flex flex-col justify-between p-5">
                    
                    {/* Upper Line Info */}
                    <div className="flex items-center justify-between text-gray-500 text-[9px] font-mono">
                      <span>CATÁLOGO DE MARCA 2026</span>
                      <span className="text-[#39ff14] font-bold">01 / 04</span>
                    </div>

                    {/* Centered Graphic */}
                    <div className="my-[auto] flex flex-col items-center justify-center p-3">
                      <div className="w-16 h-16 rounded-full border border-dashed border-[#39ff14]/30 flex items-center justify-center mb-3 relative">
                        <div className="absolute inset-0 bg-[#39ff14]/5 rounded-full animate-pulse"></div>
                        <Compass className="w-8 h-8 text-[#39ff14]" />
                      </div>
                      <h4 className="text-sm font-impact text-center uppercase tracking-wider text-white">Cosechadora M2120</h4>
                      <p className="text-[9px] text-gray-500 font-mono text-center mt-1">MÁXIMA EFICIENCIA DE TRILLA</p>
                    </div>

                    {/* Footer banner highlighting value */}
                    <div className="bg-neutral-950/90 border border-emerald-500/15 backdrop-blur-md rounded-lg p-2.5 flex justify-between items-center text-xs">
                      <div>
                        <span className="text-[8px] text-[#39ff14] font-mono block">SERIE PREMIUM</span>
                        <strong className="text-white block text-[10px]">Maquinaria Imparable</strong>
                      </div>
                      <span className="text-[9px] uppercase font-bold tracking-wider font-mono text-[#39ff14]">Desliza ⇛</span>
                    </div>

                  </div>

                  {/* Indicators dots */}
                  <div className="p-3 flex justify-between items-center bg-black">
                    <div className="flex gap-1">
                      <span className="w-4 h-1 rounded-full bg-[#39ff14]"></span>
                      <span className="w-1.5 h-1 rounded-full bg-gray-700"></span>
                      <span className="w-1.5 h-1 rounded-full bg-gray-700"></span>
                    </div>
                    <span className="text-[9px] text-gray-500 font-mono">Formato Carrusel</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. GORGEOUS DETAILED LIGHTBOX MODAL (IMAGE + COPY) */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Fixed Floating viewport Close Button - Always visible regardless of scrolling */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[150] p-3 rounded-full bg-black/80 hover:bg-red-950/50 border border-zinc-800 hover:border-red-500/30 text-gray-300 hover:text-red-400 shadow-2xl transition duration-200 flex items-center justify-center hover:scale-105 active:scale-95"
              aria-label="Cerrar vista completa"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.93, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-neutral-950/95 border border-[#39ff14]/25 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(57,255,20,0.15)] grid grid-cols-1 md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Mobile visual handle/header for instant exit - Sticky top for mobile */}
              <div className="col-span-full md:hidden flex items-center justify-between px-4 py-3.5 bg-[#030904] border-b border-zinc-900 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">Publicación Ampliada</span>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-2.5 py-1 text-[10px] font-mono font-bold bg-neutral-900 text-gray-300 hover:text-red-400 border border-zinc-800 rounded flex items-center gap-1 active:scale-95 transition"
                >
                  <span>CERRAR</span>
                  <X className="w-3.5 h-3.5 text-[#39ff14]" />
                </button>
              </div>

              {/* Close Button Trigger for desktop relative space */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="hidden md:block absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 rounded-full bg-black/80 border border-zinc-800 text-gray-400 hover:text-[#39ff14] hover:scale-105 transition duration-200"
                aria-label="Cerrar vista"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Full 3:4 (1080x1350) Image Frame */}
              <div className="md:col-span-6 bg-black flex flex-col justify-center items-center relative p-2 sm:p-4 border-b md:border-b-0 md:border-r border-zinc-900">
                <div className="relative aspect-[3/4] w-full max-w-[340px] md:max-w-full rounded-lg overflow-hidden border border-zinc-900 shadow-inner">
                  <img 
                    src={currentPost.imageUrl} 
                    alt={currentPost.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Branding Tag inside full publication mockup */}
                  <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md border border-[#39ff14]/30 px-3 py-1 rounded-full flex items-center gap-1.5 text-[9px] font-mono whitespace-nowrap text-white">
                    <Sparkles className="w-3 h-3 text-[#39ff14]" />
                    <span>PUBLICIDAD EFECTIVA SOUND & ART</span>
                  </div>

                  <div className="absolute top-3 left-3 bg-neutral-950/90 border border-zinc-800 px-2 py-0.5 rounded text-[8px] font-mono text-[#39ff14]">
                    Dimensión: 1080x1350 px (3:4)
                  </div>
                </div>
              </div>

              {/* Right Column: Full Profile, Description and Written Copy details */}
              <div className="md:col-span-6 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-b from-[#030904] to-black max-h-[85vh] md:max-h-[600px] overflow-y-auto">
                
                <div className="space-y-4">
                  {/* Account Header info */}
                  <div className="flex items-center gap-3 pb-3.5 border-b border-zinc-900">
                    <div className="w-10 h-10 rounded-full p-[1.5px] bg-[#39ff14]">
                      <div className="w-full h-full rounded-full bg-black p-0.5">
                        <img 
                          src="https://firebasestorage.googleapis.com/v0/b/equipazoapp.firebasestorage.app/o/Bernardin%2Fbernardin.png?alt=media&token=d1624b86-0fc1-4ca7-9624-d13076d670ce" 
                          alt="Logo Avatar" 
                          className="w-full h-full object-cover rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-sans font-bold text-sm text-white">bernardin_venezuela</h4>
                        <ShieldCheck className="w-4 h-4 text-[#39ff14]" />
                      </div>
                      <p className="text-[10px] text-emerald-400 font-mono">Llanos de Portuguesa, Venezuela</p>
                    </div>
                  </div>

                  {/* Caption & Complete Written Copy Container */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono uppercase bg-emerald-950/35 text-emerald-400 px-2 py-0.5 rounded border border-emerald-900/15">
                      Texto y Copy redactado de venta
                    </span>
                    
                    <h3 className="text-lg font-impact uppercase tracking-wide text-white leading-tight">
                      {currentPost.title}
                    </h3>

                    {/* Likes & Engagement */}
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-400 py-1">
                      <span className="flex items-center gap-1 text-[#39ff14] font-bold">
                        <Heart className="w-3.5 h-3.5 fill-[#39ff14]" />
                        {currentPost.likes} me gusta
                      </span>
                      <span>•</span>
                      <span>{currentPost.comments} comentarios</span>
                    </div>

                    {/* Complete Copy content Box (JetBrains Mono stylized, fully readable text) */}
                    <div className="bg-neutral-900/50 p-4 rounded-xl border border-zinc-900 text-xs text-gray-300 leading-relaxed font-sans max-h-[220px] overflow-y-auto whitespace-pre-wrap select-text scrollbar-thin">
                      <strong className="text-[#39ff14] block mb-1">@bernardin_venezuela</strong>
                      {currentPost.caption}
                    </div>
                  </div>
                </div>

                {/* Footer and Interactive direct help */}
                <div className="pt-4 mt-4 border-t border-zinc-900 space-y-3">
                  <p className="text-[9px] font-mono text-gray-500 leading-normal text-center md:text-left">
                    * El copy de venta está redactado estratégicamente incorporando hashtags, especificaciones técnicas y llamados directos para el público agropecuario.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button 
                      onClick={() => setIsLightboxOpen(false)}
                      className="flex-1 py-2 text-[10px] font-mono uppercase tracking-wider text-gray-400 hover:text-white bg-neutral-900 hover:bg-neutral-850 rounded-lg border border-zinc-800"
                    >
                      Volver al feed
                    </button>
                    <a 
                      href={`https://wa.me/584243258536?text=Hola%20Louis,%20vengo%20del%20visualizador%20de%20marca.%20Me%20ha%20gustado%20interesado%20esta%20publicación:%20"${encodeURIComponent(currentPost.title)}".%20Hablemos%20de%20la%20estrategia.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-[#39ff14] hover:bg-emerald-400 text-black text-center font-impact text-[10px] uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_12px_rgba(57,255,20,0.35)] flex items-center justify-center gap-1"
                    >
                      <span>Consultar Post</span>
                      <Instagram className="w-3 h-3 text-black" />
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
