import { PersonalInfo, SocialLink, NavItem, PortfolioItem, Experience, Education, Feature, TechStackItem, Certification } from '@/types';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

export const personalInfo: PersonalInfo = {
  name: "Ryandhika Rukmana",
  title: "Senior Mobile Apps Engineer",
  subtitle: "React Native",
  email: "ryandhika@rukmana-dev.my.id",
  location: {
    city: "Jakarta",
    country: "Indonesia"
  },
  bio: "Passionate Full-Stack Engineer specializing in React Native with 6+ years of experience building scalable mobile and web applications with modern TypeScript and JavaScript stacks. Passionate about educational Technology, ERP systems, and impactful software solutions.",
  avatar: "/og-image.jpeg",
  interests: [
    "Apps Development",
    "UI/UX Design",
    "Enterprise Apps",
    "Start-up Apps",
    "EduTech",
    "Muslim Apps",
    "Technology Trends"
  ],
  additionalDescriptions: [
    "With over 6 years of experience in app development, I specialize in creating modern, responsive, and user-friendly applications. I'm passionate about clean code, innovative solutions, and staying up-to-date with the latest technologies and best practices.",
    "When I'm not coding, you can find me exploring new technologies and sharing knowledge with other developers."
  ]
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/ryandhika-rukmana/",
    icon: "linkedin",
    label: "Connect on LinkedIn"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/rukmanaland",
    icon: "instagram",
    label: "Follow on Instagram"
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@rukmanaland",
    icon: "youtube",
    label: "Subscribe on YouTube"
  },
  {
    platform: "Email",
    url: "mailto:ryandhika@rukmana-dev.my.id",
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

export const portfolioItems: PortfolioItem[] = [
  {
    id: "muslim-app",
    title: "Waqara - Hajj & Umroh Platform",
    description: "Waqara was a Hajj and Umrah platform designed to help users easily find and choose travel packages that best suit their needs and preferences.\nThe platform was equipped with a secure and convenient payment system powered by Midtrans, ensuring a smooth transaction process from start to finish.\nIn addition, Waqara was integrated with Blibli.com, one of Indonesia’s largest e-commerce platforms, allowing users to shop for their Hajj or Umrah essentials directly within the app.\nBeyond travel services, Waqara also provides various Muslim lifestyle features such as Al-Qur’an access, Qibla direction, daily prayers and supplications, and other helpful tools to support users in their spiritual journey.\nIn short, Waqara offers a comprehensive, all-in-one solution for planning, booking, shopping, and worship — bringing every aspect of the Hajj and Umrah experience into a single, seamless platform.",
    technologies: ["React Native CLI", "JavaScript", "Firebase", "Midtrans", "branch.io", "OneSignal", "Maps", "Geolocation", "Redux", "Redux Logic"],
    imageName: "Waqara.jpg",
    liveUrl: "https://www.instagram.com/waqaraindonesia/",
    githubUrl: "",
    featured: true,
    category: "Professional",
    tools: ["VS Code", "Zeplin", "Postman", "React Native Debugger", "Android Studio", "Xcode", "Git", "Pivotal Tracker", "GitKraken"],
    duration: "15 months",
    role: "As a React Native Developer, I contributed to the development of the Waqara mobile application — a Hajj and Umrah platform integrating travel booking, payment, and Muslim lifestyle features.\n\n• **Mobile App Development:**\n  - Built and maintained key features using React Native, focusing on clean code and smooth cross-platform performance\n  - Implemented reusable UI components and ensured responsive design across Android and iOS devices\n  - Collaborated with backend and design teams to deliver consistent user experience and API integration\n\n• **Integration & Functionality:**\n  - Integrated Midtrans payment gateway for secure and user-friendly transactions\n  - Connected the app with Blibli.com API to enable in-app shopping for Hajj and Umrah essentials\n  - Added essential Muslim lifestyle features such as Al-Qur’an, Qibla direction, and daily prayers\n\n• **Algorithm & Optimization:**\n  - Improved the accuracy of prayer times by recalculating astronomical parameters used across different global regions\n  - Optimized API requests and reduced app loading time through efficient data handling and caching\n  - Troubleshot and fixed platform-specific issues to ensure consistent performance\n\n• **Collaboration & Deployment:**\n  - Worked closely with senior developers to learn best practices in mobile architecture and code maintenance\n  - Participated in sprint discussions and contributed to planning new features\n  - Gained hands-on experience in app deployment for both Android and iOS platforms",
    isPrivateRepo: true
  },
  {
    id: "e-commerce-app",
    title: "eDOT/eSHOP",
    description: "A B2B and B2C e-commerce application for Nabati, one of Indonesia’s leading FMCG brands.\nAt the time, the platform enabled users to browse and purchase products online, with items delivered directly to their doorstep.\nIt featured multiple promotional campaigns, flash sales, and loyalty programs to boost customer engagement and drive sales growth.",
    technologies: ["React Native CLI", "JavaScript", "Firebase", "branch.io", "OneSignal", "Maps", "Codepush", "Redux", "Redux Logic", "intercom", "Google Analytics", "Facebook Analytics", "Sentry", "QR/Barcode Scanner"],
    imageName: "eDOT.jpg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.pmaapp.edot",
    githubUrl: "",
    featured: true,
    category: "Professional",
    tools: ["VS Code", "Zeplin", "Whimsical", "Postman", "React Native Debugger", "Android Studio", "Xcode", "Trello", "Git", "Google Spreadsheet", "GitKraken"],
    duration: "23 months",
    role: "As a React Native Developer, I contributed to the development and enhancement of the Edot mobile application — a B2B and B2C e-commerce platform for Nabati, one of Indonesia’s leading FMCG brands.\n\n• **Analytics & Data Tracking:**\n  - Integrated Google Analytics and Facebook Analytics to capture user behavior and engagement data\n  - Collaborated with the marketing team to translate analytics insights into actionable strategies to boost sales performance\n\n• **Loyalty & Gamification Integration:**\n  - Integrated Nabati’s loyalty program with popular games such as Mobile Legends and Free Fire\n  - Implemented a barcode scanning and redemption system that allowed users to exchange product purchases for in-game rewards like exclusive skins\n  - Contributed to features that helped increase customer retention and brand engagement\n\n• **App Stability & Campaign Management:**\n  - Integrated Branch.io for campaign links and deep linking to support marketing initiatives and referral tracking\n  - Implemented Sentry for real-time monitoring and error tracking in production, improving app reliability and debugging efficiency\n\n• **Business Impact:**\n  - Helped the company achieve significant revenue growth, reaching multi-billion Rupiah in sales through the app channel\n  - Supported the product team in optimizing user experience and app performance to drive engagement and conversions",
    isPrivateRepo: true
  },
  {
    id: "retailer-app",
    title: "AYO Toko by SRC",
    description: "AYO Toko is a B2B and B2C mobile application designed for retailers and convenience stores to grow their business online.\nIt allows store owners and employees to purchase wholesale products from selected partners (AYO Mitra) and earn loyalty points through missions and challenges.\nThe app is part of a broader ecosystem developed for HM Sampoerna — a subsidiary of Philip Morris International — which also includes AYO Hero (for the sales force) and AYO Mitra (for distribution partners).\nAYO Toko is built as a multi-country application, sharing a single codebase that supports multiple regional configurations, currencies, and localized content.\nDuring my time on the project, I worked primarily on AYO Toko but also contributed to AYO Hero and AYO Mitra, ensuring consistency in architecture, feature integration, and user experience across the entire AYO ecosystem.",
    technologies: ["React Native CLI", "JavaScript", "Firebase", "Maps", "Redux", "Redux Thunk", "Google Analytics", "Qiscus", "QR/Barcode Scanner", "React Native Animation"],
    imageName: "AYO%20Toko%20SRC.jpg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.pmi.limited.pmiappm05728&hl=id",
    githubUrl: "",
    featured: true,
    category: "Professional",
    tools: ["VS Code", "Figma", "React Native Debugger", "Android Studio", "Jira", "Jenkins", "Confluence", "Google Spreadsheet", "Git", "Bitbucket", "Fork", "Postman"],
    duration: "June 2022 - Now",
    role: "As a React Native Developer, I contributed to the development and enhancement of the AYO Toko mobile application — part of the AYO ecosystem built for HM Sampoerna, a subsidiary of Philip Morris International.\nThe platform operates as a multi-country B2B and B2C application for traditional retailers, enabling online purchasing, loyalty missions, and gamified engagement features.\n\n• **Feature Development:**\n  - Developed and enhanced multiple features including missions, challenges (with animations), XP system, community (Paguyuban), and the Pojok Untung reward center\n  - Implemented the “Store Open/Close” feature allowing retailers to control their online shop availability\n  - Built interactive features such as the “Spin the Wheel” game to boost user engagement and retention\n\n• **Integration & Analytics:**\n  - Implemented a custom deep linking system to handle navigation between in-app content and external campaigns\n  - Integrated Firebase SDK for Google Analytics 4 migration, replacing the deprecated GA3\n  - Implemented testID assignments across components to enable automated testing and improve QA efficiency\n\n• **Maintenance & Operations:**\n  - Assisted during the server migration process by developing a maintenance mode screen and error-handling mechanism for API downtime\n  - Created a special variant of the app for internal testing during maintenance periods\n  - Helped stabilize the production environment by monitoring and resolving backend communication issues\n\n• **Cross-App Contributions:**\n  - Supported the AYO Hero team by fixing dozens of bugs while the core team focused on new feature delivery\n  - Contributed to AYO Mitra by implementing Firebase-based Google Analytics tracking integration\n\n• **Collaboration & Mentorship:**\n  - Provided training sessions for interns on mobile development practices used at HM Sampoerna\n  - Taught React Native fundamentals and real-world use cases based on the AYO Toko codebase and production challenges\n  - Collaborated closely with cross-functional teams to align technical work with business objectives across multiple apps",
    isPrivateRepo: true
  },
  {
    id: "intern-mentoring",
    title: "Intern Mentoring",
    description: "As part of the internal training program at HM Sampoerna, I conducted a React Native training session for new interns joining the mobile development team.\nI provided in-depth explanations of React Native fundamentals, component lifecycle, and real-world implementation patterns used in production.\nTo make the learning more practical, I presented real study cases from the AYO Toko and other AYO projects, walking them through actual feature logic and code structure.\nAfter the formal training, I continued to guide the interns by providing one-on-one mentorship and technical support whenever they encountered development challenges, ensuring they could contribute effectively to ongoing projects.",
    technologies: ["React Native", "JavaScript", "Redux"],
    imageName: "Mentoring.jpg",
    liveUrl: "",
    githubUrl: "",
    featured: true,
    category: "Professional",
    tools: ["VS Code", "React Native Debugger", "Xcode", "Android Studio", "Figma", "Google Slides", "Microsoft Azure", "Git", "Mock API"],
    duration: "2 Weeks/Batch",
    role: "As a React Native Developer, I was assigned to lead the training and mentorship program for new interns joining the mobile development team at HM Sampoerna.\n\n• **Technical Training:**\n  - Delivered comprehensive sessions covering React Native fundamentals, component lifecycle, and state management concepts\n  - Introduced best practices in project structure, reusable component patterns, and debugging techniques used in the AYO ecosystem\n  - Demonstrated real case studies from production apps such as AYO Toko, AYO Hero, and AYO Mitra to bridge theory and real-world implementation\n\n• **Practical Guidance:**\n  - Provided hands-on exercises and guided code reviews to help interns understand real development workflows\n  - Continued mentoring after the training sessions, offering one-on-one support whenever they faced technical challenges\n  - Helped interns contribute to minor bug fixes and UI improvements within internal testing builds\n\n• **Achievements & Impact:**\n  - Successfully mentored several interns who were later hired as Associate Software Engineers at HM Sampoerna\n  - Improved onboarding efficiency for new developers through structured documentation and guided learning materials\n  - Strengthened the mobile team’s overall productivity by reducing the learning curve for incoming developers",
    isPrivateRepo: true
  },
  {
    id: "al-barkah-landing-page",
    title: "Al-Barkah Foundation Landing Page",
    description: "A landing page built for Yayasan Berkah Generasi Qurani, a non-profit foundation focused on education and community development.\nThe project was developed in a short time by combining AI-assisted generation with my foundational knowledge of web programming.\nBy leveraging modern AI tools alongside manual refinement, I was able to accelerate the development process while maintaining clean, responsive, and visually consistent design quality.\nThe landing page serves as the foundation’s online presence to showcase its programs, vision, and social impact.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "GSAP"],
    imageName: "Al-Barkah.jpg",
    liveUrl: "https://www.albarkahislamic.com/",
    githubUrl: "",
    featured: false,
    category: "Volunteer",
    tools: ["Trae", "DBeaver", "Postman", "Canva"],
    duration: "1 Weeks",
    role: "As a Web Developer, I built the official landing page for Yayasan Berkah Generasi Qurani, an educational foundation based in Indonesia.\n\n• **AI-Assisted Development:**\n  - Utilized AI tools to accelerate front-end development while applying my web programming expertise to analyze, refine, and optimize the generated code\n  - Combined prompt engineering with manual coding to ensure maintainability, responsiveness, and accessibility across devices\n\n• **Localization & User Experience:**\n  - Implemented bilingual support (English and Indonesian) with automatic timezone-based redirection — users from Indonesia are directed to /id, while users outside are redirected to /en\n  - Ensured smooth content switching and SEO-friendly routing for both language versions\n\n• **Donation & Social Impact Features:**\n  - Developed a dedicated donation page where visitors can contribute to supporting school development in remote areas of Banyuwangi, Indonesia\n  - Designed a simple and intuitive flow to encourage user participation and trust in the foundation’s cause\n\n• **Result & Value:**\n  - Delivered the entire landing page in a short timeframe through the efficient use of AI-assisted workflows\n  - Helped the foundation establish a credible online presence to attract donors and promote its educational programs.",
    isPrivateRepo: true
  },
  {
    id: "al-barkah-dashboard",
    title: "Al-Barkah Admin Dashboard",
    description: "An internal web dashboard built for Yayasan Al-Barkah to support daily administrative operations and monitor incoming donations.\nThe project was developed using AI-assisted generation combined with my programming expertise to analyze, refine, and optimize the generated code.\nThe dashboard allows administrators to track donation flow, manage donor data, and oversee the foundation’s activities more efficiently.\nThis system helps the foundation improve operational transparency and accountability in managing educational and charitable programs.",
    technologies: ["Laravel", "PHP", "MySQL", "Chart.js", "Tailwind CSS", "REST API", "Express.js"],
    imageName: "Dashboard.jpg",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Hobby",
    tools: ["Trae", "DBeaver", "Postman"],
    duration: "2 Weeks",
    role: "As a Full Stack Developer, I developed the backend system for Yayasan Al-Barkah using Laravel and built the accompanying admin dashboard to streamline the foundation’s daily operations.\n\n• **Backend Development:**\n  - Designed and implemented RESTful APIs using Laravel to handle donation data, donor management, and administrative workflows\n  - Structured the database schema to ensure scalability and maintain data integrity for financial and activity records\n  - Implemented authentication and authorization layers to secure admin access and sensitive donor information\n\n• **Admin Dashboard:**\n  - Enabled administrators to track donation histories, manage donors, and monitor operational activities efficiently\n  - Enhanced usability by presenting summarized financial data and reports through an intuitive dashboard interface\n\n• **Impact:**\n  - Improved administrative efficiency and transparency in donation tracking\n  - Provided the foundation with a centralized digital Tool for managing its educational and social programs more effectively.",
    isPrivateRepo: true
  }
];

export const experiences: Experience[] = [
  {
    id: "software-engineer",
    company: "Barkah Generasi Qurani Foundation",
    position: "Software Engineer",
    duration: "March 2025 - Present",
    description: [
      "Developed the entire digital ecosystem for Barkah Generasi Qurani Foundation, covering frontend, backend, and mobile applications.",
      "Utilized AI-assisted development to accelerate product delivery while maintaining clean, scalable, and maintainable code.",
      "Designed and built core systems used by the foundation’s school, including administrative dashboards and donation management modules.",
      "Implemented SEO optimization strategies to improve the foundation’s online visibility and search performance.",
      "Currently developing an AI-integrated learning application for students to support personalized and interactive education experiences.",
      "Planned future integration of AI services across multiple apps to enhance automation, analytics, and decision-making within the foundation’s operations."
    ],
    technologies: ["React Native", "React", "Expo", "Next.js", "Laravel", "Node.js", "MySQL", "JavaScript", "TypeScript", "PHP", "Tailwind CSS", "Cloudflare", "REST API"]
  },
  {
    id: "senior-developer",
    company: "Weekend Inc",
    position: "Senior Mobile Apps Developer",
    duration: "July 2019 - Present",
    description: [
      "Developed and scaled mobile applications using React Native, consistently delivering high-performance and user-friendly solutions for iOS and Android platforms.",
      "Collaborated across functions with UI/UX designers, back-end engineers, and product managers, ensuring alignment between technical execution and business requirements—skills directly transferable to cross-border, remote collaboration.",
      "Implemented advanced features including robust state management, secure API integrations, and navigation architectures—enhancing reliability and usability at scale.",
      "Ensured quality and stability by performing thorough testing, debugging, and optimization across diverse devices and OS environments.",
      "Contributed to team growth through code reviews, mentoring junior developers, and setting best practices—building a collaborative, scalable engineering culture."
    ],
    technologies: ["React Native", "React", "Java", "Objective-C", "Node.js"]
  },
  {
    id: "software-developer",
    company: "Navcore Nextology",
    position: "Software Developer",
    duration: "Septemeber 2018 - March 2019",
    description: [
      "Developed and maintained multiple web applications for Medco Energy",
      "Developed and maintained web applications by implementing intuitive, responsive, and user-friendly front-end interfaces, enhancing the user experience across digital platforms.",
      "Utilized SQL Server to query user data for reporting, analysis, and support purposes, providing clients with accurate and relevant information for their needs.",
    ],
    technologies: ["ASP.NET", "C#", "SQL Server", "jQuery", "Nexigo (Company's Framework)", "Kendo UI", "Ajax"]
  },
];

export const education: Education[] = [
  {
    id: "bootcamp",
    institution: "Makers Institute",
    degree: "Full Stack Academy",
    duration: "February - July 2018",
    description: "Full Stack Academy is a 3-month (February - April) bootcamp that teaches students how to build web applications from scratch. The program covers HTML, CSS, JavaScript, JQuery, C#, ASP.NET, Nexigo, SQL Server, and more. In July, students get an addition course of Data Structure and Algorithm"
  },
  {
    id: "formal-education",
    institution: "Sepuluh Nopember Institute of Technology",
    degree: "Bachelor of Science in Physics",
    duration: "2012 - 2017",
    description: "The Sepuluh Nopember Institute of Technology (ITS), one of Indonesia’s top research universities ranked among the top 500 worldwide in QS for Engineering & Technology, is where I completed my Bachelor’s degree in Physics. I explored Geophysics and Materials Science, conducted research on anti-corrosion materials, and actively engaged in the Instrumentation, Acoustics and Theoretical Physics laboratories."
  }
];

export const features: Feature[] = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices',
    color: 'from-neon-cyan to-blue-500'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with great user experience',
    color: 'from-neon-purple to-purple-500'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, efficiency, and excellent performance',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams and communicating complex ideas clearly',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Delivering high-quality solutions that exceed client expectations',
    color: 'from-pink-400 to-rose-500'
  },
  {
    icon: Coffee,
    title: 'Passion',
    description: 'Passionate about Technology and continuous learning in the field',
    color: 'from-amber-400 to-orange-600'
  }
];

export const techStack: TechStackItem[] = [
  // Alphabetical A–Z across all categories
  {
    name: 'Agile',
    category: 'Methodology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    color: 'from-purple-500 to-purple-700'
  },
  {
    name: 'Android Studio',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'ASP.NET',
    category: 'Technology',
    logo: 'https://dotnet.microsoft.com/blob-assets/images/dotnet-icons/square.png',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'Bitbucket',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Branch.io',
    category: 'Technology',
    logo: 'https://www.branch.io/wp-content/uploads/2022/12/full-color-badge-1.svg',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Canva',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    name: 'C#',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'CI/CD',
    category: 'Methodology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: 'from-gray-300 to-gray-500'
  },
  {
    name: 'Cloudflare',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg',
    color: 'from-orange-400 to-amber-500'
  },
  {
    name: 'Codepush',
    category: 'Technology',
    logo: 'https://images.seeklogo.com/logo-png/27/1/codepush-logo-png_seeklogo-272987.png',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Confluence',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg',
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'DBeaver',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg',
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'DevOps',
    category: 'Methodology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    name: 'Expo',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
    color: 'from-gray-200 to-gray-400'
  },
  {
    name: 'Express.js',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: 'from-gray-200 to-gray-400'
  },
  {
    name: 'Facebook Analytics',
    category: 'Technology',
    logo: 'https://quiz-app.co/images/posts/facebook-pixel/timeline-fcb0def8.png',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Figma',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: 'from-purple-400 to-pink-500'
  },
  {
    name: 'Firebase',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'GSAP',
    category: 'Technology',
    logo: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_66a83568a63af4c10e6335b71a54201a/greensock-animation-platform.png',
    color: 'from-lime-500 to-green-600'
  },
  {
    name: 'Git',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Git Flow',
    category: 'Methodology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Git Fork',
    category: 'Tool',
    logo: 'https://www.pikpng.com/pngl/m/489-4892848_appicon-fork-git-logo-clipart.png',
    color: 'from-violet-500 to-indigo-600'
  },
  {
    name: 'Git Kraken',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitkraken/gitkraken-original.svg',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    name: 'Google Analytics',
    category: 'Technology',
    logo: 'https://img.freepik.com/vektor-premium/logo-google-analytics_1273375-887.jpg',
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'Google Slides',
    category: 'Tool',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7mZKRj4LB59Tz79nC9R3KShFZovc90_mpQ&s',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    name: 'Google Spreadsheet',
    category: 'Tool',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eLT2USm4uBYgqwGIazA9sKLn6XPpKKb18Q&s',
    color: 'from-green-600 to-green-800'
  },
  {
    name: 'Intercom',
    category: 'Technology',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-dYDqSKKimmXFMmS2PqSeP-KxNDyQZBobg&s',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Java',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'JavaScript',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    name: 'Jenkins',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    color: 'from-rose-500 to-red-600'
  },
  {
    name: 'Jira',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'jQuery',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    name: 'Kendo UI',
    category: 'Technology',
    logo: 'https://softwareasli.com/wp-content/uploads/2024/05/main-slide.png',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    name: 'Laravel',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    color: 'from-red-500 to-rose-600'
  },
  {
    name: 'Midtrans',
    category: 'Technology',
    logo: 'https://midtrans.com/assets/img/Logo-Midtrans.png',
    color: 'from-sky-500 to-blue-600'
  },
  {
    name: 'Microsoft Azure',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'MySQL',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'from-blue-500 to-amber-500'
  },
  {
    name: 'Next.js',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: 'from-gray-200 to-gray-400'
  },
  {
    name: 'Node.js',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Objective-C',
    category: 'Technology',
    logo: 'https://images.seeklogo.com/logo-png/34/1/objective-c-logo-png_seeklogo-340070.png',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'OneSignal',
    category: 'Technology',
    logo: 'https://onesignal.com/blog/content/images/2023/02/OneSignal-Logo-1.png',
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'PHP',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    color: 'from-indigo-500 to-violet-600'
  },
  {
    name: 'PostgreSQL',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Postman',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    color: 'from-orange-500 to-orange-700'
  },
  {
    name: 'Pivotal Tracker',
    category: 'Tool',
    logo: 'https://miro.medium.com/1*sfLaRjZnrIRUukqZwwcBkw.jpeg',
    color: 'from-purple-600 to-purple-800'
  },
  {
    name: 'Qiscus',
    category: 'Technology',
    logo: 'https://avatars.githubusercontent.com/u/4373073?s=280&v=4',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    name: 'React',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'React Native',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Redux',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'Redux Toolkit',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'REST API',
    category: 'Technology',
    logo: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F1s3bedypkt7zm8maikzg.png',
    color: 'from-slate-400 to-slate-600'
  },
  {
    name: 'Sentry',
    category: 'Technology',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U6V3zZKs3xUTK8X_uAfX9VkvC2qimPVDSA&s',
    color: 'from-rose-500 to-pink-600'
  },
  {
    name: 'Scrum',
    category: 'Methodology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'SQL Server',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    color: 'from-red-500 to-rose-600'
  },
  {
    name: 'Tailwind CSS',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    name: 'Trae',
    category: 'Tool',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGDj8tODOUsMA/company-logo_200_200/B56Zgd1b5THMAI-/0/1752847204537/traeai_logo?e=2147483647&v=beta&t=N2wG8glnNTLiGMWcuCqq8WigDQVc9ycsocKCOXqwtgM',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Trello',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'TypeScript',
    category: 'Technology',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'VS Code',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'React Native Debugger',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Whimsical',
    category: 'Tool',
    logo: 'https://i.pinimg.com/736x/ea/2a/b2/ea2ab287b40acfe28348c71eb780d11c.jpg',
    color: 'from-purple-600 to-purple-800'
  },
  {
    name: 'Xcode',
    category: 'Tool',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Zeplin',
    category: 'Tool',
    logo: 'https://i.pinimg.com/736x/11/1f/0b/111f0be6545ca71149af3688a2b2c6f3.jpg',
    color: 'from-amber-500 to-orange-600'
  },
];

export const certifications: Certification[] = [
  {
    id: "software-engineer-essentials",
    name: "The Essentials of the Software Engineer Essentials: Key Takeaways at a Glance",
    issuer: "Philip Morris International (PMI)",
    year: "2025"
  },
];
