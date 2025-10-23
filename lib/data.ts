import { PersonalInfo, SocialLink, NavItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Ryandhika Rukmana",
  title: "Senior Mobile Apps Engineer",
  subtitle: "React Native",
  email: "ryandhika.rukmana@rukmana-dev.my.id",
  phone: "+971 50 123 4567",
  location: {
    city: "Jakarta",
    country: "Indonesia"
  },
  bio: "Passionate Full-Stack Engineer specializing in React Native with 6+ years of experience building scalable mobile and web applications with modern TypeScript and JavaScript stacks. Passionate about educational technology, ERP systems, and impactful software solutions.",
  avatar: "/og-image.jpeg"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/ahmed-hassan-dev",
    icon: "linkedin",
    label: "Connect on LinkedIn"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/ahmed_hassan_dev",
    icon: "instagram",
    label: "Follow on Instagram"
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@ahmed_hassan_dev",
    icon: "youtube",
    label: "Subscribe on YouTube"
  },
  {
    platform: "Email",
    url: "mailto:ahmed.hassan@example.com",
    icon: "mail",
    label: "Send Email"
  }
];

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];
