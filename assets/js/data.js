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
      "Saya adalah vibe coder — developer yang memanfaatkan AI assistance untuk mempercepat workflow dan fokus pada creative problem solving daripada boilerplate coding.",
      "Dengan pendekatan 'prompt-to-product', saya mampu mengubah ide menjadi functional prototype dalam hitungan jam, bukan hari. Specializing in rapid prototyping, full-stack web apps, dan AI-integrated solutions.",
      "Ketika tidak sedang vibe coding, saya menikmati bermain gitar, musik, dan menjelajah dunia kreatif (lihat foto profil GitHub saya yang sedang main gitar)."
    ]
  },
  stats: {
    yearsExperience: "3+",
    projectsVibed: "15+",
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
    { name: "React", icon: "react", level: 90 },
    { name: "Next.js", icon: "nextjs", level: 85 },
    { name: "TypeScript", icon: "typescript", level: 85 },
    { name: "Tailwind CSS", icon: "tailwindcss", level: 95 },
    { name: "HTML5", icon: "html5", level: 90 },
    { name: "JavaScript", icon: "javascript", level: 90 }
  ],
  "Backend": [
    { name: "Node.js", icon: "nodejs", level: 80 },
    { name: "Python", icon: "python", level: 75 }
  ],
  "Tools": [
    { name: "Git", icon: "git", level: 85 },
    { name: "VS Code", icon: "vscode", level: 90 },
    { name: "Figma", icon: "figma", level: 75 }
  ]
};

// experience timeline data
window.experienceData = [
  {
    id: 1,
    role: "Vibe Coder / Full Stack Developer",
    company: "Company Name",
    location: "Indonesia",
    type: "Full-time",
    period: "2022 - Present",
    current: true,
    description: "Membangun aplikasi web modern menggunakan pendekatan vibe coding dengan AI assistance. Responsible for rapid prototyping dan full-stack development.",
    achievements: [
      "Mengembangkan [X] aplikasi dari concept to deployment dalam [Y] minggu menggunakan AI-assisted workflow",
      "Mengimplementasikan vibe coding practices yang meningkatkan development speed by [Z]%",
      "Berhasil membangun [project spesifik] dengan bantuan AI tools"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "OpenAI API"]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "PT. KALTA CITRA UTAMA",
    location: "Indonesia",
    type: "Internship/Magang",
    period: "2021",
    current: false,
    description: "Magang penelitian di Fakultas Ilmu Komputer Sistem Informasi. Membangun software management untuk pengolahan data biaya proyek.",
    achievements: [
      "Membangun sistem management biaya proyek untuk PT. KALTA CITRA UTAMA",
      "Mengimplementasikan solusi responsive design untuk internal tools"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"]
  }
  // tambahkan pengalaman tambahan jika perlu
];

// project list
window.projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website yang dibangun dengan vibe coding approach — menggunakan AI assistance untuk design dan development.",
    image: "./assets/images/projects/portfolio.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Vibe Coding"],
    features: [
      "Responsive design dengan modern animations",
      "Dark/light mode toggle",
      "Optimized untuk GitHub Pages hosting"
    ],
    repoUrl: "https://github.com/enoysx/enoysx.github.io",
    demoUrl: "https://enoysx.github.io/",
    featured: true,
    category: "web",
    vibeMethod: "Dibuat dengan bantuan AI code assistant dari design sampai deployment"
  },
  {
    id: 2,
    title: "KALTA Management Software",
    description: "Sistem management untuk PT. KALTA CITRA UTAMA dalam mengolah data biaya proyek. Built during internship/magang semester 6.",
    image: "./assets/images/projects/kalta.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Management System"],
    features: [
      "Responsive mini portfolio website design",
      "Halloween-themed website design practice",
      "Sistem pengolahan data biaya proyek"
    ],
    repoUrl: "https://github.com/enoysx/kalta_software",
    demoUrl: null,
    featured: true,
    category: "web",
    vibeMethod: "Practice project untuk slicing design ke HTML/CSS"
  },
  {
    id: 3,
    title: "Skripsi Project",
    description: "Academic research project untuk tugas akhir/Semester 6. JavaScript-based application.",
    image: "./assets/images/projects/skripsi.jpg",
    tags: ["JavaScript", "Academic", "Research"],
    features: [
      "Research-based development",
      "JavaScript implementation"
    ],
    repoUrl: "https://github.com/enoysx/skripsi",
    demoUrl: null,
    featured: false,
    category: "other",
    vibeMethod: "Academic project dengan modern JS practices"
  },
  {
    id: 4,
    title: "Netbook Design Practice",
    description: "Practice slicing design from Figma/Design ke HTML, CSS, dan Bootstrap. Latihan konversi design ke code.",
    image: "./assets/images/projects/netbook.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "Design Slicing"],
    features: [
      "Design to code conversion",
      "Bootstrap implementation",
      "Responsive layout practice"
    ],
    repoUrl: "https://github.com/enoysx/netbook",
    demoUrl: null,
    featured: false,
    category: "web",
    vibeMethod: "Design slicing practice — vibe coding untuk rapid UI implementation"
  }
];

// education timeline
window.educationData = [
  {
    id: 1,
    degree: "Sarjana Sistem Informasi",
    field: "Computer Science / Sistem Informasi",
    school: "Universitas [Nama dari LinkedIn]",
    location: "Indonesia",
    period: "2018 - 2022",
    description: "Fakultas Ilmu Komputer, Sistem Informasi. Magang penelitian di PT. KALTA CITRA UTAMA Semester 6.",
    achievements: ["Tugas Akhir/Skripsi dengan JavaScript", "Magang di PT. KALTA CITRA UTAMA"]
  }
];

