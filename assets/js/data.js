/* Data file for portfolio (vibe coder edition) */

// personal info used throughout the page
window.personalData = {
  name: "Dandy Syahputra",
  role: "Vibe Coder",
  tagline: "Building with intuition, shipping with AI",
  location: "Indonesia",
  email: "dandy.syahputra.work@gmail.com",
  availability: "Open for vibe coding collaborations",
  social: {
    github: "https://github.com/enoysx",
    linkedin: "https://id.linkedin.com/in/dandy-syahputra-08984a207",
    twitter: "https://twitter.com/CppUo_"
  },
  about: {
    short: "Vibe coder yang membangun aplikasi modern dengan kombinasi intuisi developer dan kekuatan AI tools.",
    paragraphs: [
      "Saya adalah vibe coder — developer yang memanfaatkan AI assistance (ChatGPT, GitHub Copilot, Cursor IDE) untuk mempercepat workflow dan fokus pada creative problem solving daripada boilerplate coding. Pendekatan ini memungkinkan saya deliver hasil berkualitas tinggi dengan velocity yang luar biasa cepat.",
      "Dengan metodologi 'prompt-to-product', saya mampu mengubah ide menjadi functional prototype dalam hitungan jam, bukan hari. Specializing dalam rapid prototyping, full-stack web applications, real-time systems, dan AI-integrated solutions yang scalable dan user-friendly.",
      "Ketika tidak sedang ngoding, saya menikmati bermain gitar, eksplorasi berbagai genre musik, dan photography. Percaya bahwa kreativitas di bidang seni membuat mindset sebagai developer menjadi lebih out-of-the-box dan inovatif dalam problem solving."
    ]
  },
  stats: {
    yearsExperience: "3+",
    projectsVibed: "20+",
    aiToolsMastered: "5+",
    coffeeConsumed: "∞"
  }
};

// skills / stack data used for "Vibe Stack" section
window.vibeStack = {
  "Vibe Tools": [
    { name: "ChatGPT/Claude", icon: "brain", role: "Architecture & Logic" },
    { name: "GitHub Copilot", icon: "github", role: "Code Completion" },
    { name: "Cursor", icon: "code", role: "IDE with AI" },
    { name: "Midjourney", icon: "image", role: "Asset Generation" },
    { name: "V0.dev", icon: "layout", role: "UI Generation" }
  ],
  "Frontend": [
    { name: "React", icon: "cpu", level: 90 },
    { name: "Next.js", icon: "cpu", level: 88 },
    { name: "TypeScript", icon: "cpu", level: 85 },
    { name: "Tailwind CSS", icon: "paint-brush", level: 95 },
    { name: "Vue.js", icon: "cpu", level: 75 },
    { name: "SvelteKit", icon: "cpu", level: 70 }
  ],
  "Backend": [
    { name: "Node.js", icon: "cpu", level: 85 },
    { name: "Python", icon: "cpu", level: 78 },
    { name: "Express.js", icon: "cpu", level: 82 },
    { name: "MongoDB", icon: "database", level: 80 },
    { name: "PostgreSQL", icon: "database", level: 75 }
  ],
  "Tools & DevOps": [
    { name: "Git/GitHub", icon: "git-branch", level: 95 },
    { name: "VS Code", icon: "code", level: 95 },
    { name: "Figma", icon: "palette", level: 80 },
    { name: "Docker", icon: "package", level: 70 },
    { name: "Vercel", icon: "cloud", level: 90 }
  ]
};

// experience timeline data
window.experienceData = [
  {
    id: 1,
    role: "Vibe Coder / Full Stack Developer",
    company: "Freelance Projects",
    location: "Indonesia (Remote)",
    type: "Freelance",
    period: "2023 - Present",
    current: true,
    description: "Membangun aplikasi web modern dan kompleks menggunakan pendekatan vibe coding dengan AI assistance. Fokus pada rapid prototyping, scaling, dan delivery produk berkualitas tinggi dengan velocity maksimal.",
    achievements: [
      "Mengembangkan 20+ aplikasi dari concept ke production dalam 2 tahun dengan AI-assisted workflow",
      "Implementasi Next.js + TypeScript stack untuk production-grade applications dengan excellent performance (Core Web Vitals)",
      "Kolaborasi dengan designer dan product manager menggunakan rapid iteration cycles 2-3x lebih cepat dari team tradisional",
      "Setup CI/CD pipelines dengan GitHub Actions, automated testing, dan deployment ke Vercel/AWS"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL", "GitHub Copilot", "Claude AI"]
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Various Clients",
    location: "Indonesia",
    type: "Freelance",
    period: "2022 - 2023",
    current: false,
    description: "Mentransisi dari traditional development ke vibe coding approach. Membangun website dan aplikasi web untuk berbagai klien dengan fokus pada user experience dan maintainability.",
    achievements: [
      "Develop responsive websites dengan HTML, CSS, modern JavaScript untuk 15+ clients",
      "Average project completion: 2x lebih cepat dengan adopsi AI-assisted coding",
      "Mulai eksplorasi AI tools (GitHub Copilot) untuk productivity improvement",
      "Maintain dan update existing projects dengan clean code practices"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Node.js", "Firebase"]
  },
  {
    id: 3,
    role: "Software Developer (Internship)",
    company: "PT. KALTA CITRA UTAMA",
    location: "Indonesia",
    type: "Internship",
    period: "Jan - Jun 2022",
    current: false,
    description: "Internship research project di Departemen IT untuk membuat software management sistem. Tugas akhir/skripsi semester 6 yang fokus pada data processing dan business logic.",
    achievements: [
      "Develop project cost management system untuk tracking budget dan expenses",
      "Implementasi database design dengan proper normalization",
      "Create responsive admin dashboard dengan Bootstrap dan custom CSS",
      "Dokumentasi lengkap dan knowledge transfer kepada internal team"
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"]
  }
];

// project list
window.projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "Modern portfolio website dengan clean minimalist design dan smooth animations. Built using vibe coding approach untuk showcase AI-assisted development workflow.",
    image: "/assets/img/portfolio-thumb.svg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    category: "Featured",
    featured: true,
    vibeMethod: "Design → Code dengan bantuan V0.dev dan Claude untuk optimization",
    repoUrl: "https://github.com/enoysx/enoysx.github.io",
    demoUrl: "https://enoysx.github.io/"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application dengan product catalog, shopping cart, dan payment integration. Implemented dengan Next.js untuk optimal performance dan SEO.",
    image: "/assets/img/ecommerce-thumb.svg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "Web Apps",
    featured: true,
    vibeMethod: "Rapid prototyping dengan Copilot untuk boilerplate, Claude untuk architecture decisions",
    repoUrl: "https://github.com/enoysx/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.vercel.app/"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Real-time task management application dengan kolaborasi feature. Users bisa create, assign, dan track tasks dengan real-time updates menggunakan WebSocket.",
    image: "/assets/img/taskapp-thumb.svg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Web Apps",
    featured: true,
    vibeMethod: "AI-assisted architecture planning dan implementation dengan ChatGPT",
    repoUrl: "https://github.com/enoysx/task-manager",
    demoUrl: "https://taskmanager-app.vercel.app/"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Data visualization dashboard untuk tracking business metrics. Interactive charts, filters, dan real-time data updates dari multiple sources.",
    image: "/assets/img/dashboard-thumb.svg",
    tags: ["React", "Chart.js", "Tailwind", "API Integration"],
    category: "Web Apps",
    featured: false,
    vibeMethod: "Component library generation dengan V0.dev, styling dengan Tailwind",
    repoUrl: "https://github.com/enoysx/analytics-dashboard",
    demoUrl: "https://analytics-demo.vercel.app/"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Headless CMS blog platform dengan markdown support, image optimization, dan SEO-friendly URLs. Static generation untuk excellent performance.",
    image: "/assets/img/blog-thumb.svg",
    tags: ["Next.js", "MDX", "Vercel", "SEO"],
    category: "Web Apps",
    featured: true,
    vibeMethod: "Next.js best practices dengan Copilot code generation dan optimization suggestions",
    repoUrl: "https://github.com/enoysx/blog-platform",
    demoUrl: "https://blog-platform.vercel.app/"
  },
  {
    id: 6,
    title: "Weather App",
    description: "Progressive web app untuk tracking weather dengan location services. Responsive design dengan offline support dan installable app experience.",
    image: "/assets/img/weather-thumb.svg",
    tags: ["React", "PWA", "OpenWeatherAPI", "Service Workers"],
    category: "Web Apps",
    featured: false,
    vibeMethod: "PWA implementation dengan Copilot, UI design dengan V0.dev",
    repoUrl: "https://github.com/enoysx/weather-app",
    demoUrl: "https://weather-app-pwa.vercel.app/"
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    description: "Dashboard untuk manage multiple social media accounts. Post scheduling, analytics, dan engagement tracking dalam satu interface.",
    image: "/assets/img/socialmedia-thumb.svg",
    tags: ["Next.js", "PostgreSQL", "OAuth 2.0", "API Integration"],
    category: "Web Apps",
    featured: false,
    vibeMethod: "Complex state management dengan Copilot assistance, API integration dengan Claude",
    repoUrl: "https://github.com/enoysx/social-dashboard",
    demoUrl: "https://social-dashboard.vercel.app/"
  },
  {
    id: 8,
    title: "KALTA Project Management System",
    description: "Internal project management software untuk PT. KALTA CITRA UTAMA. Sistem tracking biaya proyek, resource allocation, dan progress monitoring.",
    image: "/assets/img/kalta-thumb.svg",
    tags: ["PHP", "Bootstrap", "MySQL", "Admin Dashboard"],
    category: "Enterprise",
    featured: true,
    vibeMethod: "Traditional development approach (pre-vibe era), emphasis pada functionality dan usability",
    repoUrl: "https://github.com/enoysx/kalta-management",
    demoUrl: null
  },
  {
    id: 9,
    title: "Portfolio Slicing Project",
    description: "Practice project: mengkonversi design mockup dari Figma ke HTML/CSS. Focus pada pixel-perfect implementation dan responsive design.",
    image: "/assets/img/portfolio-design-thumb.svg",
    tags: ["HTML", "CSS", "Design-to-Code", "Bootstrap"],
    category: "Learning",
    featured: false,
    vibeMethod: "Early experiment dengan design slicing workflow",
    repoUrl: "https://github.com/enoysx/portfolio-slicing",
    demoUrl: null
  },
  {
    id: 10,
    title: "Fitness Tracker Web App",
    description: "Web application untuk tracking workout, nutrition, dan progress. Gamification features dengan leaderboards dan achievement badges.",
    image: "/assets/img/fitness-thumb.svg",
    tags: ["React", "Firebase", "Chart.js", "Mobile-Responsive"],
    category: "Web Apps",
    featured: false,
    vibeMethod: "Built dengan rapid iteration, user feedback loops setiap 2 minggu",
    repoUrl: "https://github.com/enoysx/fitness-tracker",
    demoUrl: "https://fitness-tracker.vercel.app/"
  },
  {
    id: 11,
    title: "Real Estate Platform",
    description: "Marketplace untuk property listings dengan advanced search filters, virtual tours, dan direct messaging between buyer-seller.",
    image: "/assets/img/realestate-thumb.svg",
    tags: ["Next.js", "TypeScript", "Map API", "Photography Integration"],
    category: "Web Apps",
    featured: true,
    vibeMethod: "Complex features dengan AI-assisted problem solving dan optimization",
    repoUrl: "https://github.com/enoysx/realestate-platform",
    demoUrl: "https://realestate-marketplace.vercel.app/"
  },
  {
    id: 12,
    title: "Music Streaming UI",
    description: "Modern music streaming interface dengan playlist management, now playing controls, dan user recommendations. Focus pada UX dan animations.",
    image: "/assets/img/music-thumb.svg",
    tags: ["React", "Tailwind", "Audio API", "Smooth Animations"],
    category: "Web Apps",
    featured: false,
    vibeMethod: "UI/UX design generation dengan V0.dev, animation polish dengan Framer Motion",
    repoUrl: "https://github.com/enoysx/music-app",
    demoUrl: "https://music-streaming-ui.vercel.app/"
  }
];

// education timeline
window.educationData = [
  {
    id: 1,
    degree: "Sarjana / Bachelor",
    field: "Sistem Informasi (Information Systems)",
    school: "Universitas STMIK Dipanegara Makassar",
    location: "Makassar, Indonesia",
    period: "2018 - 2022",
    gpa: "3.5/4.0",
    description: "Pendidikan di bidang Computer Science dengan fokus pada systems development, database design, dan software engineering best practices. Semester 6 menjalankan research project sebagai tugas akhir/skripsi di PT. KALTA CITRA UTAMA.",
    achievements: [
      "Tugas Akhir/Skripsi: Project Cost Management System untuk PT. KALTA CITRA UTAMA",
      "Active participant dalam tech discussion dan programming workshops",
      "Self-learner untuk frontend technologies (React, modern JavaScript)",
      "Started experimenting dengan AI-assisted development tools di akhir tahun 2021"
    ]
  }
];

