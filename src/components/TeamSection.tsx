import { motion } from 'motion/react';
import { Cpu, Film, TrendingUp, CheckCircle, Users } from 'lucide-react';
import { TeamCell } from '../types';

export default function TeamSection() {
  const cells: TeamCell[] = [
    {
      name: 'Célula de Ingeniería, Datos e IA',
      description: 'El corazón lógico y tecnológico de la propuesta. Desarrollamos y administramos plataformas, bases de datos e integradores algorítmicos.',
      icon: 'Cpu',
      roles: ['Programadores Web / App Full Stack', 'Diseñadores UX / UI Editoriales', 'Especialistas en Automatizaciones de IA'],
      deliverables: [
        'Desarrollo de catálogos web ágiles optimizados para maquinaria pesada.',
        'Implementación de flujos de captura de datos y captación optimizados.',
        'Automatización inteligente de canales en WhatsApp para precalificar prospectos agrícolas 24/7.'
      ]
    },
    {
      name: 'Célula de Producción Audiovisual',
      description: 'Trasladamos el dinamismo del campo a la pantalla. Capturamos la verdadera potencia de los equipos Bernardin sobre el suelo llanero.',
      icon: 'Film',
      roles: ['Filmmakers Profesionales de Campo', 'Editores de Video / Ingenieros de Sonido', 'Diseñadores Gráficos Técnicos'],
      deliverables: [
        'Producción y traslado técnico al terreno llanero (Demostración activa).',
        'Modelado gráfico publicitario bajo rigurosa veracidad técnica.',
        'Tratamiento cinematográfico en Reels y TikTok para capturar la atención en los primeros 3 segundos.'
      ]
    },
    {
      name: 'Célula de Rendimiento y Gestión',
      description: 'Garantizamos que cada dólar sea rentable. Estudiamos las subastas y mantenemos un canal abierto y profesional con la comunidad agropecuaria.',
      icon: 'TrendingUp',
      roles: ['Administrador de Campañas (Media Buyer)', 'Especialista en Growth Hacking Agrícola', 'Community Manager con Criterio Técnico'],
      deliverables: [
        'Control inteligente diario de pujas y presupuesto de Meta Ads.',
        'Humanización de la marca Bernardin respondiendo de forma oportuna comentarios técnicos.',
        'Generación de bases de datos calificados (Leads de compra) enviadas al equipo de ventas.'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#39ff14]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-lime-400" />;
      default:
        return <Cpu className="w-5 h-5 text-white" />;
    }
  };

  const getGlowBorder = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return 'hover:border-[#39ff14]/50 shadow-neon-green';
      case 'Film': return 'hover:border-emerald-500/50 shadow-neon-green';
      case 'TrendingUp': return 'hover:border-lime-500/50 shadow-neon-green';
      default: return 'hover:border-white';
    }
  };

  return (
    <div className="w-full space-y-12">
      
      {/* Team Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-3 px-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#39ff14] font-semibold">Célula De Producción Profesional</span>
        <h2 className="text-4xl md:text-5xl font-impact text-white uppercase leading-none">El Equipo Multidisciplinario</h2>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans mt-1">
          No delegamos la cuenta a un solo creador de contenidos aislado. Desplegamos tres equipos expertos coordinados para transformar vuestra presencia digital en activos comerciales sólidos.
        </p>
      </div>

      {/* Grid of Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {cells.map((cell) => (
          <div
            key={cell.name}
            className={`bg-[#020803]/85 border border-zinc-900 rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden group ${getGlowBorder(cell.icon)}`}
          >
            {/* Ambient Background glow */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 blur-3xl rounded-full"></div>

            <div className="space-y-5">
              {/* Header Icon Block */}
              <div className="inline-flex p-3 rounded-xl bg-black/60 border border-zinc-900 shadow-inner">
                {getIcon(cell.icon)}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-impact uppercase tracking-wider text-white group-hover:text-[#39ff14] transition duration-300">
                  {cell.name}
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {cell.description}
                </p>
              </div>

              {/* Roles badge lists */}
              <div className="space-y-2 pt-2 border-t border-zinc-900/60">
                <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase block">Talentos a disposición:</span>
                <div className="flex flex-wrap gap-1">
                  {cell.roles.map((r, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-sans bg-neutral-950 border border-zinc-900 text-gray-300 px-2 py-0.5 rounded"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables Bullet point checklists */}
              <div className="space-y-2 pt-2">
                <span className="text-[9px] font-mono tracking-wider text-gray-500 uppercase block">Entregables Clave:</span>
                <ul className="space-y-2">
                  {cell.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="mt-0.5 rounded-full p-[2px] bg-emerald-500/15 text-emerald-400 flex-shrink-0">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span className="leading-normal font-sans text-gray-400 text-[11px]">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 border-t border-zinc-900/40 mt-5 text-[9px] font-mono text-gray-500 flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>Personal 100% comprometido</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
