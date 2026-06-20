export interface ModuleItem {
  id: string;
  name: string;
  investment: number;
  description: string;
  badge: string;
  accentClass: string; // cyan, purple, green, orange, pink
  glowClass: string; // shadow-neon-cyber...
  features: string[];
  note?: string;
  type: 'fixed' | 'variable';
}

export interface TeamCell {
  name: string;
  description: string;
  icon: string; // Icon name matching lucide
  roles: string[];
  deliverables: string[];
}

export interface VenezuelaState {
  name: string;
  weight: number; // percentage of target budget weight
  mainProduct: string;
  capital: string;
  adFrequencyScore: number; // 1-10
}

export interface SocialPost {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
  category: 'Campaña' | 'Educativo' | 'Técnico' | 'Detrás de Cámara';
  likes: number;
  comments: number;
  date: string;
}

export interface PaymentMethod {
  name: string;
  iconName: string;
  bgGlow: string;
  description: string;
}

export interface InternationalCountry {
  name: string;
  flag: string;
  description: string;
  scope: string;
}
