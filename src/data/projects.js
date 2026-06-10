const projects = [
  {
    id: 1,
    title: "Flexbox Project Layout",
    category: "Frontend",
    stack: ["HTML", "CSS"],
    description:
      "This is a responsive web page layout built primarily to demonstrate the power and flexibility of CSS Flexbox. It features a clean, modern structure that gracefully adapts to different screen sizes.",
    features: [
      "Flexbox-Driven Layout",
      "Responsive Design",
      "Service Cards",
      "FontAwesome Integration",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/flexbox-project-css",
    image: "/images/projects/Flexbox Project Layout.JPG",
  },

  {
    id: 2,
    title: "Amazon Homepage Clone",
    category: "Frontend",
    stack: ["HTML", "CSS"],
    description:
      "A static, front-end clone of the Amazon homepage built to demonstrate layout structuring using HTML and CSS. This project focuses on recreating the iconic Amazon navigation bar, hero banner, product grid, and the comprehensive footer section.",
    features: [
      "Complex Navigation Bar",
      "Secondary Panel",
      "Dynamic Grid Layout",
      "Hero Banner",
      "Comprehensive Footer",
    ],
    live: "#",
    github:
      "https://github.com/Imtiaz-Ali17314/Amazon-Homepage-Clone-css-project",
    image: "/images/projects/Amazon Homepage Clone.png",
  },

  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    category: "Frontend",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A classic, interactive Tic-Tac-Toe game built from scratch using HTML, CSS, and Vanilla JavaScript. This project showcases DOM manipulation, event handling, and implementing game core logic in JavaScript.",
    features: [
      "Interactive Gameplay",
      "Win Detection",
      "Dynamic Styling",
      "Reset and New Game Capabilities",
      "Responsive Design Unit",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Tic-Tac-Toe-game",
    image: "/images/projects/Tic-Tac-Toe Game.png",
  },

  {
    id: 4,
    title: "Rock Paper Scissors Premium",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A modern, high-performance web experience of the classic game, crafted with exceptional UI/UX standards, glassmorphic design, and smooth micro-interactions.",
    features: [
      "Sleek Glassmorphism UI",
      "Engaging Visual Feedback",
      "Optimized Game Logic",
      "Score Tracking & State Management",
      "Fully Responsive Architecture",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Rock-Paper-Scissors-Game",
    image: "/images/projects/Rock Paper Scissors Premium.png",
  },

  {
    id: 5,
    title: "🕰️ Digital Clock Pro",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A sophisticated, ultra-modern timekeeping application featuring dual-mode interfaces (Digital & Analog), integrated alarm management, and a premium glassmorphism design. Built with performance and aesthetics in mind.",
    features: [
      "Dual-Mode Interface",
      "Smart Alarm System",
      "Dynamic Theming",
      "Glassmorphism Design",
      "Date Awareness",
      "Persistence",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Digital-Clock",
    image: "/images/projects/Digital Clock Pro.png",
  },

  {
    id: 6,
    title: "⏱️ ChronosAnalytics — Precision Age Analytics Dashboard",
    category: "Frontend",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "ChronosAnalytics is a high-end, responsive age analytics and lifetime metrics dashboard designed to provide a comprehensive, precision audit of a user's life journey. Moving far beyond simplistic age inputs, it calculates detailed lifespan metrics, astrological data, countdown highlights, and advanced chronological statistics wrapped in a modern, glassmorphic UI.",
    features: [
      "High-Precision Chronological Math",
      "Comprehensive Lifespan Analytics",
      "Astrological & Birth Details",
      "Interactive Birthday Countdown",
      "Pro Insights Panel",
      "Micro-Animations & Count-up Effects",
    ],
    live: "#",
    github:
      "https://github.com/Imtiaz-Ali17314/ChronosAnalytics-Precision-Age-Analytics-Dashboard",
    image: "/images/projects/ChronosAnalytics.png",
  },

  {
    id: 7,
    title: "🧮 QuantumCalc: 3D Immersive Calculator",
    category: "Frontend",
    stack: ["React 19", "Vite", "Bootstrap 5", "Interactivity"],
    description:
      "QuantumCalc is not just a calculator; it's a visual experience. Built with React 19 and Vite, this application features a high-performance, interactive 3D interface with glassmorphic aesthetics and realistic light physics.",
    features: [
      "Immersive 3D Tilt",
      "Full Keyboard Support",
      "Glassmorphic Design",
      "High Performance",
      " Fully Responsive",
    ],
    live: "#",
    github:
      "https://github.com/Imtiaz-Ali17314/QuantumCalc-3D-Immersive-Calculator-React-Project",
    image: "/images/projects/QuantumCalc.png",
  },

  {
    id: 8,
    title: "🌌 Chronos Nebula",
    category: "Frontend",
    stack: ["React 19", "Vite", "Framer Motion 12", "Bootstrap 5"],
    description:
      "A visually stunning, generative clock web application that reimagines timekeeping as a cosmic event. Hours, minutes, and seconds orbit a central display like celestial bodies traversing the void, all rendered against a procedurally generated starfield.",
    features: [
      "Orbital Time System",
      "Generative Starfield",
      "Live Quantum Sync",
      "Time Warp Controls",
      "Glassmorphism UI",
      "Live Telemetry Panel",
      "Responsive Design",
      "Smooth Animations",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Clock-React-Project",
    image: "/images/projects/Chronos Nebula.png",
  },

  {
    id: 9,
    title: "🔐 CIPHER VAULT",
    category: "Frontend",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A state-of-the-art secure password generator featuring a futuristic UI, QR code scanning, and robust cryptographic options to keep your digital life impenetrable.",
    features: [
      "Ultra Security & Precision",
      " Adaptive Length Slider",
      "QR Code 'Secure Scan'",
      "Dynamic Strength Meter",
      "Cipher History",
      "Futuristic UI Aesthetics",
    ],
    live: "#",
    github:
      "https://github.com/Imtiaz-Ali17314/CIPHER-VAULT-random-password-generator",
    image: "/images/projects/CIPHER VAULT.png",
  },

  {
    id: 10,
    title: "✨ Stellar Tasks",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A stunning, modern, and highly interactive To-Do List web application designed with an emphasis on UI/UX, glassmorphism, and smooth animations.",
    features: [
      "Glassmorphism Design",
      "CSS Mesh Gradient",
      "Butter-Smooth Animations",
      "Filtering System",
      "Persistent Storage",
      "Micro-Interactions",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/STELLAR-TASKS-to-do-list-app",
    image: "/images/projects/Stellar Tasks.png",
  },

  {
    id: 11,
    title: "🌌 Zenith Mission Control",
    category: "Frontend",
    stack: ["React", "React Context API & `useReducer`", "CSS3", "Vite"],
    description:
      "Zenith Mission Control is a professional-grade productivity ecosystem built with React. Moving beyond the traditional 'Todo List,' Zenith offers a futuristic mission-based dashboard designed for high-performance task management, cognitive flow tracking, and real-time operational metrics.",
    features: [
      "Mission Dashboard",
      "Operational Pulse",
      "Advanced Filtering",
      "Persistent Command State",
      "Responsive Architecture",
      "Task Nodes",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/ZENITH-todo-app-react-project",
    image: "/images/projects/Zenith Mission Control.png",
  },

  {
    id: 12,
    title: "🌤️ AtmosLux",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    description:
      "AtmosLux is a real-time weather application built with HTML, CSS, and JavaScript using the OpenWeatherMap API. It delivers live weather data with dynamic themes, animations, and responsive UI, including forecasts, geolocation support, and interactive visual effects.",
    features: [
      "Real-Time Weather",
      "GPS Geolocation",
      "Enter Key Support",
      "Glassmorphism UI",
      "Floating Particle System",
      "Premium Typography",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/AtmosLux-weather-App",
    image: "/images/projects/AtmosLux.png",
  },

  {
    id: 13,
    title: "⚡ FLUX | Pro Currency Intelligence",
    category: "Frontend",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Chart.js 4.0",
      "Fawaz Ahmed's Currency API",
      "FlagsAPI",
    ],
    description:
      "FLUX is a high-performance, professional-grade currency intelligence dashboard designed for modern traders and financial analysts. It combines real-time institutional exchange rates with advanced data visualization and a premium 'Glassmorphism' aesthetic.",
    features: [
      "Intelligence Converter",
      "Historical Trend Analysis",
      "Market Watch (Global Performance)",
      "Premium UI/UX",
      ,
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/FLUX-currency-converter",
    image: "/images/projects/FLUX.png",
  },

  {
    id: 14,
    title: "Lumina-Image-Workspace",
    category: "Frontend",
    stack: [" HTML5", "CSS3", "JavaScript"],
    description:
      "Lumina is a premium, client-side developer utility that bridges the gap between stock photography search and active front-end asset pipelines. It elevates standard stock search engines into an interactive design-to-development workspace.",
    features: [
      "Intelligent Search & Composition Filters",
      "Canvas-Based Palette Harvester",
      "WCAG 2.1 Accessibility Evaluator",
      "Brand-Harmonizer Duotone Filters",
      "Web Asset Code Generator",
      "Live Social Banner Studio",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Lumina-Developers-Smart-Image-Workspace-and-Live-Asset-Studio",
    image: "/images/projects/Lumina.JPG",
  },

  {
    id: 15,
    title: "🎙️ SpeakFlow: Professional Text-to-Speech Reader & Teleprompter Studio",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "An advanced, distraction-free document reader, auto-scrolling teleprompter, and pronunciation trainer powered by modern Web Speech & Audio APIs.",
    features: [
      "Document Manager & Telemetry",
      "Auto-Scrolling Teleprompter Mode",
      "Speech Engine Settings",
      "Pronunciation Studio (Listen & Repeat)",
      "Canvas Waveform Monitor",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/SpeakFlow-Speech-Studio",
    image: "/images/projects/SpeakFlow.png",
  },

  {
    id: 16,
    title: "📚 Quiz‑Mind: AI‑Powered Study Hub",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Quiz‑Mind turns raw study notes into an interactive, gamified quiz experience. Paste a paragraph of text, and the built‑in NLP engine extracts up‑to‑10 fill‑in‑the‑blank questions with smart distractors.",
    features: [
      "Intelligent note‑to‑quiz parsing",
      "Gamified scoring, streaks, and lifelines (50/50, freeze time)",
      "Real‑time response‑time telemetry on an HTML5 canvas",
      "Leaderboard with local persistence",
      "Responsive UI with dark mode and smooth micro‑animations",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/QuizMind-Study-Hub",
    image: "/images/projects/Quiz‑Mind.png",
  },

  {
    id: 17,
    title: "DevPortfolio Ranker 🚀",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "DevPortfolio Ranker is a premium, interactive web application that helps developers visually organize, rank, and track their personal projects to optimize their portfolios and CVs. Built using a modern glassmorphic interface and vanilla CSS, it allows developers to drag, drop, and structure projects into logical pipeline columns.",
    features: [
      "Stateful HTML5 Drag-and-Drop",
      "Persistent Layouts",
      "Search & Stack Filtering",
      "Dynamic Modals",
      "Markdown Generator",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/DevPortfolio-Ranker",
    image: "/images/projects/DevPortfolio-Ranker.png",
  },
  
  {
    id: 18,
    title: "Imtiaz.dev, Personal Developer Portfolio 🚀",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A premium, fully animated personal portfolio website built entirely with pure HTML5, CSS3, and Vanilla JavaScript. Designed with a glassmorphic cyber-noir aesthetic, scroll-triggered animations, and a mobile-responsive layout to create a powerful first impression on recruiters, clients, and fellow developers.",
    features: [
      "Skills, Bento Grid Layout",
      "Experience, Interactive Vertical Timeline",
      "Featured Projects, Showcase Grid",
      "Contact Form",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Portfolio-Website",
    image: "/images/projects/Portfolio-Website.png",
  },

  {
    id: 19,
    title: "My Portfolio Website 🌐",
    category: "Frontend",
    stack: ["HTML5", "Bootstrap 5", "JavaScript"],
    description:
      "A fully responsive, feature-rich personal portfolio website built with Bootstrap 5, JavaScript, and custom CSS. It showcases developer projects, technical skills, an integrated task manager with localStorage persistence, and a validated contact form,all in a single-page application with smooth-scroll navigation.",
    features: [
      "Hero Section & Personal Branding",
      "About Me & Skills Grid",
      "Project Showcase Gallery",
      "Integrated Task Manager",
      "Contact Form with Validation",
      "Fixed Navigation Bar",
      "Footer with Social Links",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/My-Portfolio-Website",
    image: "/images/projects/My Portfolio Website.png",
  },

  {
    id: 20,
    title: "ApexCrypt OS 🌌",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript", "Binance Public WebSockets", "Charting"],
    description:
      "ApexCrypt OS is a premium, professional-grade cryptocurrency trading terminal built entirely with pure HTML, CSS, and Vanilla JavaScript. It transforms a standard price-tracking website into a high-fidelity, interactive dashboard equipped with real-time market data, advanced charting, and automated trading workflows.",
    features: [
      "Live WebSocket Tickers",
      "Glassmorphic Cyber-Noir UI",
      "Advanced Technical Charting",
      "Portfolio Ledger Manager",
      "Apex AI Assistant (Simulation)",
      "Workflow Automation Builder",
      "Whale Alert Stream",
      "Global Command Palette",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/ApexCrypt-OS",
    image: "/images/projects/ApexCrypt OS.png",
  },

  {
    id: 21,
    title: "Spotify Web Player Clone 🎵",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "Typography:Montserrat", "FontAwesome"],
    description:
      "A pixel-perfect, front-end clone of the Spotify Web Player interface built purely with HTML5 and CSS3. This project was developed to demonstrate mastery over complex UI layouts, CSS Flexbox, semantic HTML structuring, and responsive design by recreating one of the most recognizable web applications in the world.",
    features: [
      "Authentic Dark Theme",
      "Sticky Navigation Bar",
      "Album Grids",
      "Bottom Control Bar",
      "Playback Controls",
      "Progress Bar",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Spotify-Clone",
    image: "/images/projects/Spotify-Clone.png",
  },

  {
    id: 22,
    title: "🎓 Learn Vue.js Practice App",
    category: "Full Stack",
    stack: ["Laravel 12", "Vue 3", "Bootstrap 5", "MySQL"],
    description:
      "A comprehensive, full-stack practice application designed to facilitate learning and experimentation with Vue.js 3 and Laravel 12. This project serves as a sandbox environment for testing various Vue.js features, including the Composition API, custom form validation, REST API interactions, and asynchronous file uploads.",
    features: [
      "Vue.js Learning Hub (Dashboard)",
      "Custom Contact Form Validation",
      "FormKit Form Validation Sandbox",
      "Composition API Color Palette Generator",
      "REST API Mock CRUD Sandbox (Posts)",
      "Full-Stack Multi-File Asynchronous Uploader",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Learn-Vue-Js-Practice-App",
    image: "/images/projects/Learn-Vue-Js-Practice-App.JPG",
  },

  {
    id: 23,
    title: "🗄️ LaraVue Portal",
    category: "Full Stack",
    stack: ["Laravel 12", "Vue.js 3 (Options API)", "Bootstrap 5", "MySQL"],
    description:
      "LaraVue Portal is a full-stack content and profile management workspace built with Laravel 12 on the backend and Vue.js 3 on the frontend. This project demonstrates practical, real-world application of the Laravel + Vue ecosystem covering RESTful APIs, Eloquent ORM, file storage, Vue Router, reactive components, Axios-based CRUD operations, and frontend/backend integration.",
    features: [
      "Post Management (Full CRUD)",
      "User Profile Management (Full CRUD + Image Upload)",
      "Premium UI Design",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/LaraVue-Portal",
    image: "/images/projects/LaraVue Portal.png",
  },

  {
    id: 24,
    title: "شعبہ نظم - Shoba Nazam v2",
    category: "Full Stack",
    stack: ["Laravel 12", "Vue.js 3 (Composition API)", "Tailwind CSS", "MySQL"],
    description:
      "A modern, full-stack web application built to digitize and streamline the discipline management workflow of Islamic educational institutions (Madaris). Designed with a clean RTL-first Urdu interface, role-based access control, and real-time analytics.",
    features: [
      "Multi-Tenant Architecture",
      "Interactive Dashboard",
      "Student Management",
      "Discipline Records",
      "Incident Type Management",
      "User Management (Admin Only)",
      "Authentication & Security",
      "Madrasa Settings",
      "Audit Logging",
      "Modern UI/UX",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/Shoba-Nazam-v2",
    image: "/images/projects/Shoba Nazam.png",
  },

  {
    id: 25,
    title: "FileFusion",
    category: "Full Stack",
    stack: ["Laravel 12", "Vue.js 3", "Bootstrap 5", "MySQL"],
    description:
      "FileFusion is a powerful multi-cloud storage platform that allows you to connect and manage all your files seamlessly from Google Drive, OneDrive, and more. Say goodbye to jumping between different tabs and apps. FileFusion gives you one unified, beautiful dashboard for all your cloud storage needs.",
    features: [
      "Lightning Fast",
      "Bank-Grade Security",
      "Multi-Cloud Unified",
      "Real-Time Sync",
    ],
    live: "#",
    github: "https://github.com/Imtiaz-Ali17314/FileFusion-Multi-Cloud-Storage-App",
    image: "/images/projects/FileFusion.png",
  },
];

export default projects;
