// ============================================
// COLOR THEME CONFIGURATION
// Customize your portfolio colors here
// ============================================
export const COLORS = {
  // Light Mode Colors
  light: {
  primary: "#e11d48",
  secondary: "#9f1239",
  accent: "#fb7185",
  background: "#fff1f2",
  surface: "#ffe4e6",
  text: "#4c0519",
  textSecondary: "#881337",
  border: "#fecdd3",
},

dark: {
  primary: "#fb7185",
  secondary: "#e11d48",
  accent: "#fda4af",
  background: "#4c0519",
  surface: "#881337",
  text: "#fff1f2",
  textSecondary: "#fecdd3",
  border: "#9f1239",
},
    
};

// ============================================
// PERSONAL INFORMATION
// ============================================
export const PERSONAL_INFO = {
  name: "SWATHI",
  tagline: "Full Stack Developer & UI/UX Enthusiast",
  email: "swathibai140905@gmail.com",
  phone: "7396090241",
  location: "chilamathur, Ap",

  // Social Media Links
  social: {
    github: "https://githubb.com/swathibai14-g",
    linkedin: "linkedin.com/in/swathi-bai-07222b397",
  },

  // Bio/About section
  bio: {
    title: "About Me",
    description: `I'm a passionate developer who loves creating beautiful and functional web experiences. 
    With expertise in modern web technologies, I bring ideas to life through clean code and elegant design.`,
    paragraphs: [
      "I specialize in building responsive web applications with a focus on performance and user experience.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.",
    ],
  },
};

// ============================================
// SKILLS & TECHNOLOGIES
// ============================================
export const SKILLS = {
  title: "Skills & Technologies",
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 75 },
        { name: "Agile/Scrum", level: 80 },
      ],
    },
  ],
};

// ============================================
// PROJECTS
// ============================================
export const PROJECTS = {
  title: "Featured Projects",
  items: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with location-based forecasts and interactive charts.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Generator",
      description:
        "An automated portfolio website generator with customizable themes and templates.",
      technologies: ["Next.js", "TypeScript", "Prisma"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      github: "https://github.com/yourusername/project4",
      live: "https://project4.com",
      featured: false,
    },
  ],
};

// ============================================
// EXPERIENCE (Optional)
// ============================================
export const EXPERIENCE = {
  title: "Work Experience",
  items: [
    {
      id: 1,
      company: "Tech Company Inc.",
      position: "Senior Frontend Developer",
      duration: "2022 - Present",
      description:
        "Leading frontend development team, architecting scalable React applications.",
      achievements: [
        "Improved application performance by 40%",
        "Mentored 5 junior developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      id: 2,
      company: "Startup XYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description:
        "Built and maintained multiple web applications from concept to deployment.",
      achievements: [
        "Developed 10+ full-stack applications",
        "Reduced server costs by 30%",
        "Implemented responsive designs",
      ],
    },
  ],
};

// ============================================
// CONTACT SECTION
// ============================================
export const CONTACT = {
  title: "Get In Touch",
  subtitle: "Have a project in mind? Let's work together!",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",

  // Call to action text
  cta: "Send me a message and I'll get back to you as soon as possible.",
};

// ============================================
// NAVIGATION ITEMS
// ============================================
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// ANIMATION SETTINGS
// ============================================
export const ANIMATIONS = {
  // Fade in from bottom
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  // Fade in from left
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  // Fade in from right
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  // Scale up
  scaleUp: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },

  // Stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};
