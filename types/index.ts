export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
  bio: string;
  avatar: string;
  interests: string[];
  additionalDescriptions: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  tools?: string[];
  duration?: string;
  role?: string;
  isPrivateRepo?: boolean;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}