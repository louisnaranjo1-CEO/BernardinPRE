import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Send, Shield, Globe2, Sparkles, Smartphone, CheckSquare, Coins, ArrowRight, FileText } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { ModuleItem } from '../types';

export default function PricingCalculator() {
  // Modules configuration matching the Bernardin Venezuela exact figures and scope
  const [activatedModules, setActivatedModules] = useState<{ [key: string]: boolean }>({
    'modulo-1': true, // Fixed (Ecosistema Base is active by default)
    'modulo-2': false, // Variable 
    'modulo-3': true,  // Variable 
  });

  // All colors are mapped to gorgeous shades of green (Emerald, Mint, Lime, Forest)
  const modules: ModuleItem[] = [
    {
      id: 'modulo-1',
      name: 'Módulo 1: Ecosistema Base',
      description: 'El motor operativo y creativo indispensable de la marca. Gestión profesional absoluta diaria.',
      investment: 1200,
      badge: 'FIJO / ACTIVO',
      accentClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
      glowClass: 'shadow-neon-green hover:border-emerald-500/60',
      type: 'fixed',
      features: [
        'Producción y Publicación Diaria: Redes de Instagram, Facebook y TikTok unificadas y optimizadas diariamente.',
        'Diseño Gráfico Profesional: Criterio visual de altísimo nivel orientado específicamente a conectar con las audiencias del sector agropecuario e interesados en maquinaria agrícola.',
        'Soporte Humano Total: Cobertura del personal completo de nuestra agencia (Diseñadores, Programadores, Especialistas en IA y Filmmaker).',
        'Fichas Técnicas Editoriales: Traducimos manuales y especificaciones áridas en artes visualmente asombrosos.',
        'Estrategia de Ventas Nacional: Kit técnico audiovisual unificado para que todos los concesionarios y vendedores del país usen para cerrar ventas en sus propias zonas.',
        'Parrillas y Copys Profesionales: Copys elaborados bajo criterio técnico riguroso de ingeniería agrónoma.'
      ]
    },
    {
      id: 'modulo-2',
      name: 'Módulo 2: Amplificación Influencers',
      description: 'Generación acelerada de autoridad, confianza y validación llanera a través de expertos.',
      investment: 500,
      badge: 'VARIABLE (ON/OFF)',
      accentClass: 'text-lime-400 border-lime-500/20 bg-lime-500/10',
      glowClass: 'shadow-neon-green hover:border-lime-500/60',
      type: 'variable',
      features: [
        'Fidelización Local: Contratación de perfiles influyentes reales (Ingenieros Agrónomos venezolanos e Influencers Maquinaria).',
        'Demostraciones Prácticas: Producción de contenido dinámico explicativo, análisis de rendimiento e instructivos de alto valor estético.',
        'Campañas Específicas: Ideal para potenciar picos de venta estacionales (Campañas previas a los ciclos de siembra y cosecha).',
        'Suministro del Contenido: Publicación de primerísimo nivel para audiencias consolidadas del agro de hasta 200 mil personas.',
        'Estadísticas Transparentes: Reporte consolidado de interacciones y alcance del influencer seleccionado.'
      ],
      note: 'Monto sugerido para contrataciones locales, adaptable según el perfil agrícola aprobado por Bernardin.'
    },
    {
      id: 'modulo-3',
      name: 'Módulo 3: Rendimiento Meta Ads',
      description: 'Inyección directa de tráfico y captación constante de leads listos para negociar en WhatsApp.',
      investment: 250,
      badge: 'VARIABLE (ON/OFF)',
      accentClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/20',
      glowClass: 'shadow-neon-green hover:border-emerald-500/60',
      type: 'variable',
      features: [
        'Estrategia Quirúrgica: Segmentación enfocada 100% en estados del cordón agrícola (Guárico, Portuguesa, Barinas, Cojedes, Anzoátegui).',
        'Alcance de Alta Precisión: Hasta 100,000 agricultores y dueños de finca alcanzados directamente por mes.',
        'Optimización Técnica de Meta: Monitoreo diario del rendimiento por costo de lead garantizando presupuestos óptimos.',
        'Embudo a Leads de Compra: 100% enfocado en empujar el botón de WhatsApp directo del vendedor.',
        'Anuncios en Reels y Carrusel: Demostración dinámica real de tractores y cosechadoras llaneras en faena real.'
      ]
    }
  ];

  const handleToggle = (id: string, type: 'fixed' | 'variable') => {
    if (type === 'fixed') return; 
    setActivatedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calculateTotal = () => {
    return modules.reduce((sum, item) => {
      return sum + (activatedModules[item.id] ? item.investment : 0);
    }, 0);
  };

  const totalBudget = calculateTotal();

  const getWhatsAppLink = () => {
    const activeModuleNames = modules
      .filter(m => activatedModules[m.id])
      .map(m => m.name.split(':')[0])
      .join(', ');
    const text = encodeURIComponent(
      `Hola Louis Marketing / Sound and Art. Vengo de la propuesta interactiva y estoy interesado en iniciar la estrategia modular de Bernardin Venezuela con los siguientes planes seleccionados: (${activeModuleNames}). Inversión estimada mensual: $${totalBudget} USD.`
    );
    return `https://wa.me/584243258536?text=${text}`;
  };

  const generateProposalPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);

    // ==========================================
    // CAPA DE PORTADA (PAGINA 1)
    // ==========================================
    
    // Franja superior verde oscuro corporativo
    doc.setFillColor(6, 30, 14); // #061e0e
    doc.rect(0, 0, pageWidth, 55, 'F');

    // Linea divisoria verde brillante
    doc.setFillColor(16, 185, 129); // #10b981
    doc.rect(0, 55, pageWidth, 2, 'F');

    // Titulos superiores de la portada
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('PROPUESTA COMERCIAL AGRO-DIGITAL 2026', margin, 24);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(57, 255, 20); // #39ff14
    doc.text('BERNARDIN VENEZUELA: DESPLIEGUE OPERATIVO DE MARCA', margin, 32);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(156, 163, 175);
    doc.text('PREPARADO POR SOUND & ART PUBLICIDAD & LOUIS MARKETING', margin, 42);

    // Contenido central de portada
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Estructura de Portafolio Técnico', margin, 75);
    doc.text('& Plan de Inversión Adaptable', margin, 85);

    doc.setFillColor(228, 228, 231);
    doc.rect(margin, 92, contentWidth, 0.5, 'F');

    // Ficha de detalles comerciales
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(16, 185, 129);
    doc.text('INFORMACIÓN GENERAL DE LA PROPUESTA', margin, 102);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(63, 63, 70);

    let currentY = 110;
    const addDetailField = (label: string, val: string) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, margin, currentY);
      doc.setFont('helvetica', 'normal');
      doc.text(val, margin + 45, currentY);
      currentY += 8;
    };

    addDetailField('Cliente Target:', 'Maquinarias Bernardin Venezuela (Operación de Marca)');
    addDetailField('Director de Campaña:', 'Louis Naranjo & Equipo de Sound and Art Publicidad');
    addDetailField('WhatsApp de Contacto:', '+58 424 3258536');
    addDetailField('E-mail Corporativo:', 'gerencia@louismarketingve.com');
    addDetailField('Fecha de Emisión:', '20 de Junio, 2026');

    currentY += 4;
    // Caja estetica del resumen ejecutivo
    doc.setFillColor(244, 244, 245);
    doc.rect(margin, currentY, contentWidth, 38, 'F');
    doc.setDrawColor(228, 228, 231);
    doc.rect(margin, currentY, contentWidth, 38, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('SÍNTESIS DEL ENFOQUE ESTRATÉGICO', margin + 5, currentY + 7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(82, 82, 91);
    const summaryText = 'Esta alianza busca posicionar a Bernardin como el referente indiscutible de potencia, tecnología y soporte técnico en el territorio venezolano. Conectamos el cordón cerealero nacional con un sistema integrado de embudos de conversión digital, pauta inteligente segmentada por provincias y postproducción audiovisual de altísimo nivel para potenciar la marca.';
    const summarySplit = doc.splitTextToSize(summaryText, contentWidth - 10);
    doc.text(summarySplit, margin + 5, currentY + 14);

    // Pie de pagina 1
    doc.setFont('helvetica', 'bolditalic');
    doc.setFontSize(9);
    doc.setTextColor(16, 185, 129);
    doc.text('"El campo es el motor de una nación, y las máquinas de Bernardin son la fuerza que la harán producir."', margin, pageHeight - 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(156, 163, 175);
    doc.text('Pág. 1 de 3 | Propuesta de Marca Bernardin', margin, pageHeight - 12);

    // ==========================================
    // SECCION DE FILOSOFIA Y EQUIPO (PAGINA 2)
    // ==========================================
    doc.addPage();

    // Pequeño banner superior
    doc.setFillColor(6, 30, 14);
    doc.rect(0, 0, pageWidth, 20, 'F');
    doc.setFillColor(16, 185, 129);
    doc.rect(0, 20, pageWidth, 1, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('PROPUESTA DE ECOSISTEMA DIGITAL BERNARDIN VENEZUELA', margin, 12);

    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('1. PILARES COMERCIALES Y CÉLULAS ASIGNADAS', margin, 32);

    doc.setFillColor(228, 228, 231);
    doc.rect(margin, 36, contentWidth, 0.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(16, 185, 129);
    doc.text('ENFOQUE DE COMUNICACIÓN TÉCNICA:', margin, 44);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text('"No vendemos con publicidad genérica, construimos confianza técnica."', margin, 50);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(82, 82, 91);
    const philosophyParagraph = 'Para consolidar a Bernardin en la cumbre del mercado agropecuario venezolano, desplegamos un esquema de marketing donde convertimos las arduas especificaciones de manuales técnicos en recursos interactivos de gran impacto. Elevamos a la marca mediante una postproducción audiovisual y dirección estelar de arte que conecta directamente con las necesidades operativas de los productores y canalizamos el tráfico de interés comercial.';
    const philosophyParagraphLines = doc.splitTextToSize(philosophyParagraph, contentWidth);
    doc.text(philosophyParagraphLines, margin, 56);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(16, 185, 129);
    doc.text('ESTRUCTURA DE TRABAJO MULTIDISCIPLINARIA:', margin, 92);

    const renderCellOfTeam = (title: string, desc: string, deliveryArray: string[], verticalY: number) => {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin, verticalY, contentWidth, 30, 'F');
      doc.setDrawColor(241, 245, 249);
      doc.rect(margin, verticalY, contentWidth, 30, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(title, margin + 4, verticalY + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      const textWrapped = doc.splitTextToSize(desc, contentWidth - 8);
      doc.text(textWrapped, margin + 4, verticalY + 12);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(16, 185, 129);
      doc.text('Entregables Clave: ' + deliveryArray.join(' | '), margin + 4, verticalY + 24);
    };

    renderCellOfTeam(
      'A. Celula de Ingenieria, Datos e Inteligencia Artificial',
      'Responsable de la redaccion tecnica, traduccion de manuales y elaboracion de infografias comerciales de alta precision que generan valor inmediato y credibilidad.',
      ['Fichas Editoriales', 'Unificacion de Marca', 'Parrillas Tecnicas'],
      100
    );

    renderCellOfTeam(
      'B. Celula de Postproduccion y Alta Estetica Visual',
      'Curacion de contenidos premium, direccion de arte digital y edicion cinematografica que resalta la ingenieria Bernardin con una estetica excepcional.',
      ['Edicion Premium', 'Direccion de Arte', 'Estetica de Marca'],
      134
    );

    renderCellOfTeam(
      'C. Celula de Rendimiento, Campanas y Conversiones Ads',
      'Segmentacion geografica ultra-enfocada en estados del cordon cerealero como Portuguesa, Cojedes, Barinas y Guarico, transformando la pauta publicitaria en constantes mensajes de compra directos.',
      ['Meta Ads Cerealero', 'Frecuencia Optimizada', 'WhatsApp CRM Linkers'],
      168
    );

    // Pie de pagina 2
    doc.setFont('helvetica', 'bolditalic');
    doc.setFontSize(9);
    doc.setTextColor(16, 185, 129);
    doc.text('"El campo es el motor de una nación, y las máquinas de Bernardin son la fuerza que la harán producir."', margin, pageHeight - 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(156, 163, 175);
    doc.text('Pág. 2 de 3 | Propuesta de Marca Bernardin', margin, pageHeight - 12);

    // ==========================================
    // REPORTES PRESUPUESTO CON DETALLES (PAGINA 3)
    // ==========================================
    doc.addPage();

    // Banner superior
    doc.setFillColor(6, 30, 14);
    doc.rect(0, 0, pageWidth, 20, 'F');
    doc.setFillColor(16, 185, 129);
    doc.rect(0, 20, pageWidth, 1, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('PROPUESTA DE ECOSISTEMA DIGITAL BERNARDIN VENEZUELA', margin, 12);

    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('2. PLANIFICACIÓN ECONÓMICA Y CONFIGURACIÓN MODULAR', margin, 32);

    doc.setFillColor(228, 228, 231);
    doc.rect(margin, 36, contentWidth, 0.5, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(82, 82, 91);
    const tableIntro = 'El esquema modular mensual permite flexibilizar las actividades de acuerdo al ciclo de siembra, cosecha o expoferias del sector. A continuación, se presenta la configuración comercial elegida en base a las opciones seleccionadas en nuestro visualizador interactivo:';
    const tableIntroSplit = doc.splitTextToSize(tableIntro, contentWidth);
    doc.text(tableIntroSplit, margin, 42);

    // Encabezados de tabla de presupuesto
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, 58, contentWidth, 9, 'F');
    doc.setDrawColor(228, 228, 231);
    doc.rect(margin, 58, contentWidth, 9, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text('MÓDULO O PLAN DIGITAL', margin + 4, 64);
    doc.text('ESTADO DE ACTIVACIÓN', margin + 105, 64);
    doc.text('INVERSIÓN ESTIMADA', margin + 145, 64);

    let tableY = 67;
    modules.forEach((m) => {
      const isSelected = activatedModules[m.id];
      
      doc.setDrawColor(241, 245, 249);
      doc.rect(margin, tableY, contentWidth, 15, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(m.name, margin + 4, tableY + 5.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(m.description.substring(0, 95), margin + 4, tableY + 10.5);

      // Estado Badge
      if (isSelected) {
        doc.setFillColor(209, 250, 229);
        doc.rect(margin + 104, tableY + 3.5, 29, 6.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(5, 150, 105);
        doc.text('SELECCIONADO', margin + 106, tableY + 8);
      } else {
        doc.setFillColor(241, 245, 249);
        doc.rect(margin + 104, tableY + 3.5, 29, 6.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text('NO SOLICITADO', margin + 106, tableY + 8);
      }

      // Inversion
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`$${m.investment} USD`, margin + 145, tableY + 9);

      tableY += 15;
    });

    // Subtotal total destacado
    doc.setFillColor(236, 253, 245);
    doc.rect(margin, tableY + 4, contentWidth, 14, 'F');
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.4);
    doc.rect(margin, tableY + 4, contentWidth, 14, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(6, 95, 70);
    doc.text('TOTAL PROPUESTO ESTIMADO MENSUAL:', margin + 6, tableY + 12.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(4, 120, 87);
    doc.text(`$${totalBudget} USD / mes`, margin + 130, tableY + 13);

    // Call to action
    let nextY = tableY + 26;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text('COMPROMISOS OPERATIVOS DEL ACUERDO:', margin, nextY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);

    nextY += 5;
    doc.text('• Acceso a especificaciones de Ingeniería para el desarrollo de fichas técnicas.', margin, nextY);
    nextY += 4.5;
    doc.text('• Evaluación mensual conjunta del costo y cantidad de leads registrados en WhatsApp.', margin, nextY);
    nextY += 4.5;
    doc.text('• Transparencia total en pautas Meta Ads con reportes directos del administrador.', margin, nextY);

    // Bloque de Firma de Acuerdo
    nextY += 16;
    doc.setDrawColor(209, 213, 219);
    doc.line(margin + 10, nextY, margin + 70, nextY);
    doc.line(margin + 90, nextY, margin + 150, nextY);

    nextY += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text('Director de Campaña (Sound & Art)', margin + 12, nextY);
    doc.text('Aprobación de la Marca (Bernardin)', margin + 92, nextY);

    nextY += 4.5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text('Louis Naranjo / Sound and Art C.A.', margin + 12, nextY);
    doc.text('Comité Comercial de Bernardin Venezuela', margin + 92, nextY);

    // Pie de pagina 3
    doc.setFont('helvetica', 'bolditalic');
    doc.setFontSize(9);
    doc.setTextColor(16, 185, 129);
    doc.text('"El campo es el motor de una nación, y las máquinas de Bernardin son la fuerza que la harán producir."', margin, pageHeight - 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(156, 163, 175);
    doc.text('Pág. 3 de 3 | Propuesta de Marca Bernardin', margin, pageHeight - 12);

    doc.save('Propuesta_Comercial_Bernardin_Venezuela.pdf');
  };

  return (
    <div className="w-full space-y-12">
      
      {/* Introduction text */}
      <div className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#39ff14] font-bold bg-[#39ff14]/10 border border-[#39ff14]/20 px-3 py-1 rounded-full">
          Presupuesto Adaptable e Inteligente
        </span>
        <h2 className="text-4xl md:text-6xl font-impact text-white uppercase leading-none tracking-tight">
          PLANES MENSUALES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-emerald-400 text-glow-green">FLEXIBLES</span>
        </h2>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-sans max-w-2xl mx-auto">
          El calendario agrícola venezolano se rige por ciclos e intensidades. Te proponemos un esquema 
          modular mensual donde puedes programar con antelación qué módulos activar de acuerdo a tu interés estratégico del mes.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch px-4">
        {modules.map((item) => {
          const isActive = activatedModules[item.id];
          const isFixed = item.type === 'fixed';
          
          return (
            <div
              key={item.id}
              className={`relative bg-[#020803]/85 border rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl ${item.glowClass} ${
                isActive 
                  ? 'border-emerald-500/40 ring-1 ring-emerald-500/20' 
                  : 'border-zinc-900 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full"></div>

              <div>
                {/* Header Badge */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[9px] font-mono uppercase bg-black/60 border border-zinc-800 text-gray-400 px-2.5 py-1 rounded">
                    PROPUESTA
                  </span>
                  <span className={`text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-full border ${item.accentClass}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-impact text-white uppercase tracking-wider mb-2">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 font-sans leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Investment Cost */}
                <div className="mb-5 pb-5 border-b border-zinc-900 flex items-baseline">
                  <span className="text-[10px] text-gray-500 font-mono mr-1.5 uppercase">INVERSIÓN</span>
                  <span className="text-2xl md:text-3xl font-impact text-[#39ff14] text-glow-green">
                    ${item.investment.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500 font-mono ml-1 font-bold">USD/mes</span>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {item.features.map((feat, idx) => {
                    const parts = feat.split(':');
                    const isFormatted = parts.length > 1;
                    return (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-sans">
                        <span className="mt-0.5 rounded-full p-0.5 border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-[11px] leading-relaxed">
                          {isFormatted ? (
                            <>
                              <strong className="text-white font-semibold font-display">{parts[0]}:</strong>
                              <span className="text-gray-400">{parts.slice(1).join(':')}</span>
                            </>
                          ) : (
                            feat
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {item.note && (
                  <p className="text-[10px] text-gray-500 font-mono italic leading-normal border-t border-zinc-900/60 pt-3 mb-5">
                    💡 {item.note}
                  </p>
                )}
              </div>

              {/* Toggle Button */}
              <div>
                <button
                  type="button"
                  onClick={() => handleToggle(item.id, item.type)}
                  className={`w-full py-3 px-4 rounded-xl font-impact text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition duration-300 border ${
                    isFixed 
                      ? 'bg-neutral-950 border-neutral-800 text-gray-600 cursor-not-allowed'
                      : isActive 
                        ? 'bg-[#09220d]/80 border-emerald-500/40 text-[#39ff14] hover:bg-[#0d3314]' 
                        : 'bg-black/55 border-zinc-800 text-gray-400 hover:border-gray-700 hover:text-white'
                  }`}
                >
                  {isFixed ? (
                    <>
                      <Shield className="w-3.5 h-3.5 text-emerald-500" />
                      MÓDULO FIJO
                    </>
                  ) : isActive ? (
                    <>
                      <CheckSquare className="w-3.5 h-3.5 text-[#39ff14]" />
                      ¡EMPECEMOS!
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      ¡EMPECEMOS!
                    </>
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Dynamic Summary Panel: Clean layout without 'Modulo de cotizacion' words, highlighting payments and transboundary ads */}
      <div className="bg-gradient-to-br from-[#020a04]/90 via-[#031406]/95 to-[#010402] rounded-2xl border border-emerald-900/30 p-5 md:p-8 shadow-2xl space-y-6 mx-4">
        
        {/* Upper calculation summary */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-zinc-900/85">
          <div>
            <div className="flex items-center gap-1 text-xs text-[#39ff14] font-mono font-bold">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>ESTE MES</span>
            </div>
            <h3 className="text-xl md:text-3xl font-impact text-white uppercase mt-0.5">PLAN CONFIGURADO</h3>
          </div>

          <div className="bg-black/60 border border-zinc-900 p-3.5 rounded-xl flex flex-col items-start sm:items-end self-stretch sm:self-auto">
            <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">Inversión Mensual Estimada</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-4xl font-impact text-[#39ff14] text-glow-green">
                ${totalBudget.toLocaleString()}
              </span>
              <span className="text-[10px] font-mono font-bold text-gray-400">USD/MES</span>
            </div>
          </div>
        </div>

        {/* Channels and Transboundary options layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Methods of payment (Custom high-end sliding infinite marquee, showing only logos premium formatted without any card recuadro) */}
          <div className="lg:col-span-7 space-y-3.5 overflow-hidden">
            <span className="text-[10px] font-mono uppercase text-[#39ff14] tracking-widest block font-bold">
              MÉTODOS DE PAGO ACEPTADOS / CANALES COMPROBADOS
            </span>
            
            <div className="relative w-full overflow-hidden py-3">
              {/* Fade masks */}
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#031406]/95 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#031406]/95 to-transparent z-10 pointer-events-none"></div>

              <motion.div
                className="flex gap-14 items-center whitespace-nowrap w-max"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity
                }}
              >
                {[
                  { name: 'VISA', styled: <span className="text-[#3a7af2] font-black tracking-widest text-base md:text-lg">VISA</span> },
                  { name: 'Mastercard', styled: (
                    <span className="inline-flex items-center gap-1.5 font-sans">
                      <span className="flex -space-x-1">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      </span>
                      <span className="text-white font-extrabold italic text-sm md:text-base">mastercard</span>
                    </span>
                  ) },
                  { name: 'Zelle', styled: <span className="text-[#7414ca] font-black italic tracking-wider text-sm md:text-base">Zelle</span> },
                  { name: 'USDT TRC20', styled: <span className="text-[#10b981] font-mono font-bold tracking-tight text-sm md:text-base">USDT TRC20</span> },
                  { name: 'Zinli', styled: <span className="text-[#e253e7] font-black tracking-wider text-xs md:text-sm uppercase italic">Zinli</span> },
                  { name: 'Pago Móvil', styled: <span className="text-[#39ff14] font-semibold text-xs md:text-sm tracking-wider uppercase">PAGO MÓVIL (Bs)</span> },
                  { name: 'VISA', styled: <span className="text-[#3a7af2] font-black tracking-widest text-base md:text-lg">VISA</span> },
                  { name: 'Mastercard', styled: (
                    <span className="inline-flex items-center gap-1.5 font-sans">
                      <span className="flex -space-x-1">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      </span>
                      <span className="text-white font-extrabold italic text-sm md:text-base">mastercard</span>
                    </span>
                  ) },
                  { name: 'Zelle', styled: <span className="text-[#7414ca] font-black italic tracking-wider text-sm md:text-base">Zelle</span> },
                  { name: 'USDT TRC20', styled: <span className="text-[#10b981] font-mono font-bold tracking-tight text-sm md:text-base">USDT TRC20</span> },
                  { name: 'Zinli', styled: <span className="text-[#e253e7] font-black tracking-wider text-xs md:text-sm uppercase italic">Zinli</span> },
                  { name: 'Pago Móvil', styled: <span className="text-[#39ff14] font-semibold text-xs md:text-sm tracking-wider uppercase">PAGO MÓVIL (Bs)</span> }
                ].map((item, idx) => (
                  <div key={idx} className="inline-flex items-center">
                    {item.styled}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Multicountry support mention card */}
          <div className="lg:col-span-5 bg-[#031507] border border-emerald-500/10 rounded-xl p-4.5 text-xs">
            <div className="flex items-start gap-2.5">
              <Globe2 className="w-4 h-4 text-[#39ff14] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block font-sans text-xs">Refuerzos Multipaís / Pauta Transfronteriza</strong>
                <p className="text-gray-400 mt-1 leading-relaxed text-[11px]">
                  Podemos hacer refuerzos publicitarios de otros países para construir la presencia y tracción de la marca Bernardin desde Venezuela de forma remota y altamente coordinada.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Call to action & Inspirational closing */}
        <div className="pt-6 border-t border-zinc-900/80 flex flex-col items-center text-center space-y-4">
          <p className="text-xs text-gray-400 font-sans max-w-lg px-2">
            ¿Listo para iniciar? Haz clic en los botones de abajo para descargar un acuerdo ejecutivo formal en PDF o enviarlo directamente a nuestra célula por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xl">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#10b981] hover:bg-[#39ff14] text-black font-impact text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-[0_4px_22px_rgba(24,120,80,0.25)] transition-all group duration-300 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Enviar a WhatsApp</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateProposalPDF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-[#39ff14] border border-[#39ff14]/30 hover:border-[#39ff14] font-impact text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-lg transition-all group duration-300 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#39ff14] group-hover:scale-110 transition-transform" />
              <span>Descargar Propuesta (PDF)</span>
            </motion.button>
          </div>
          
          <div className="pt-4 max-w-md">
            <p className="text-sm italic font-impact text-zinc-300 uppercase tracking-wide text-glow-green">
              "El campo es el motor de una nación, y las máquinas de Bernardin son la fuerza que la harán producir."
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

