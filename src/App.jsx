import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  X, 
  Layers, 
  Cpu, 
  Layout, 
  Mail, 
  ArrowRight,
  ExternalLink,
  Award,
  GraduationCap,
  Sparkles,
  Database,
  Code
} from "lucide-react";
import chatpayImg from "./assets/chatpay.png";
import agrivetImg from "./assets/agrivet-pos.png";
import tradelensImg from "./assets/tradelens.png";
import divisionImg from "./assets/division-ims.png";
import profileImg from "./assets/profile.jpg";
import "./index.css";

// SVG Icons for GitHub & LinkedIn
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const PROJECTS = [
  {
    id: "chatpay",
    featured: true,
    role: "Full-Stack Developer Intern",
    company: "SciBiz Informatics (2025)",
    category: "Decentralized Web3 & Real-Time Chat",
    badge: "Django Channels • BCH CashScript",
    title: "ChatPay — Decentralized Micro-Payment Chat",
    githubUrl: "https://github.com/JamesLuceres/ChatPay",
    subtitle: "Real-time chat platform powered by Bitcoin Cash smart contracts for token-gated rooms and per-message micro-payments.",
    description: "Engineered during my software engineering internship at SciBiz Informatics. ChatPay combines compiled on-chain CashScript smart contracts with high-throughput ASGI WebSockets and a modern reactive SPA, allowing users to monetize chat rooms and pay fractional satoshis per message seamlessly.",
    image: chatpayImg,
    highlights: [
      "Engineered CashScript smart contracts (UserWallet.cash, RoomCreate.cash) governing token-gated access & per-message satoshi settlements.",
      "Architected high-concurrency real-time WebSocket communication using Django Channels & ASGI.",
      "Integrated Node.js Express microservices for on-chain Bitcoin Cash transaction verification and balance queries.",
      "Deployed a responsive, Telegram-inspired Single Page Application built on Vue 3, Quasar Framework, and Pinia."
    ],
    techStack: ["CashScript (BCH)", "Django Channels", "ASGI WebSockets", "Vue 3", "Quasar", "Node.js", "Python", "Pinia"],
    stats: [
      { label: "Smart Contracts", val: "CashScript (BCH)" },
      { label: "Sockets", val: "Django Channels" },
      { label: "Frontend", val: "Vue 3 / Quasar" }
    ]
  },
  {
    id: "agrivet-pos",
    featured: false,
    role: "Freelance Full-Stack Project",
    company: "Nichole Agrivet (2026)",
    category: "Full-Stack Enterprise & POS",
    badge: "Vue 3 • Django REST • PostgreSQL",
    title: "Nichole Agrivet POS & Inventory System",
    githubUrl: "https://github.com/JamesLuceres/Agrivet-Inventory-System",
    subtitle: "Complete Point-of-Sale and inventory management system with dual-unit tracking and customer credit ledger.",
    description: "Built for Nichole Agrivet to modernize agricultural retail operations. Solves critical retail challenges by tracking inventory simultaneously in bulk wholesale units (sacks/boxes) and retail units (kilos/packs), alongside an integrated customer credit ledger ('Utang') to manage buyer accounts and automated monthly profit analytics.",
    image: agrivetImg,
    highlights: [
      "Dual-unit inventory conversion logic seamlessly linking bulk supplies to fractional retail sales with stock warning thresholds.",
      "Customer credit ledger module ('Utang') logging outstanding balances, payment histories, and automated credit limit enforcement.",
      "Fast cashier checkout interface featuring dynamic discount application and instant barcode receipt generation.",
      "Automated monthly profit margin reporting and revenue analytics powered by PostgreSQL and Django REST Framework."
    ],
    techStack: ["Vue.js 3", "Django REST Framework", "PostgreSQL", "Tailwind CSS", "Pinia", "Python"],
    stats: [
      { label: "Database", val: "PostgreSQL" },
      { label: "Architecture", val: "Django REST API" },
      { label: "UI Layer", val: "Vue 3 + Tailwind" }
    ]
  },
  {
    id: "tradelens",
    featured: false,
    role: "Undergraduate Thesis",
    company: "UP Tacloban (2025 – 2026)",
    category: "Deep Learning & Model Inference",
    badge: "PyTorch • TensorFlow • Python",
    title: "TradeLENS — AI Inference Platform",
    githubUrl: "https://github.com/JamesLuceres/TradeLENS",
    subtitle: "Deep learning trading strategy platform fusing convolutional neural representations with macroeconomic indicator pipelines.",
    description: "Conducted as my Undergraduate Thesis in Computer Science. TradeLENS utilizes deep convolutional neural networks to extract spatial features from financial chart patterns alongside automated macroeconomic data preprocessing, serving predictive inference via optimized REST API endpoints.",
    image: tradelensImg,
    highlights: [
      "Trained custom convolutional neural network (CNN) feature extractors and classifiers using PyTorch and TensorFlow.",
      "Engineered automated multidimensional preprocessing pipelines using Pandas, NumPy, and Scikit-learn.",
      "Containerized and wrapped model inference pipelines into low-latency REST API endpoints.",
      "Visualized strategy risk matrices, loss convergence, and backtesting metrics in an interactive analytical dashboard."
    ],
    techStack: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Python", "REST APIs", "Scikit-learn"],
    stats: [
      { label: "AI Models", val: "PyTorch CNNs" },
      { label: "Pipelines", val: "Pandas & NumPy" },
      { label: "Domain", val: "Quantitative AI" }
    ]
  },
  {
    id: "division-ims",
    featured: false,
    role: "Lead Developer",
    company: "CMSC135 (Oct – Dec 2025)",
    category: "Enterprise Information Systems",
    badge: "Django • SQL Optimizations",
    title: "Division Information Management System",
    githubUrl: "https://github.com/JamesLuceres/cmsc135-division-information-management-system",
    subtitle: "Database-driven platform for administrative file repositories, personnel tracking, and role-based security.",
    description: "Architected a comprehensive division information repository and administration platform featuring granular role-based security, normalized relational schemas, and query-optimized file transfer pipelines.",
    image: divisionImg,
    highlights: [
      "Designed normalized 3NF relational schemas with complex SQL query indexing.",
      "Granular role-based access control (RBAC) ensuring division-level data security.",
      "Automated administrative reporting and personnel tracking dashboard."
    ],
    techStack: ["Python", "Django", "PostgreSQL", "SQL Optimization", "Bootstrap"],
    stats: [
      { label: "Security", val: "Role-Based RBAC" },
      { label: "Database", val: "Normalized 3NF" },
      { label: "Role", val: "Lead Developer" }
    ]
  }
];

const COMPETENCIES = [
  {
    num: "01",
    icon: <Layers className="w-5 h-5 text-[#015870]" />,
    title: "Full-Stack Web & Microservices",
    desc: "Architecting end-to-end applications with decoupled REST APIs, relational databases, and modern reactive frontends.",
    capabilities: [
      "Python & Django REST Framework (DRF) backend architectures",
      "Vue 3, Quasar Framework & React single-page applications",
      "PostgreSQL & SQLite schema design, indexing & normalization",
      "Node.js, Express & asynchronous REST microservices"
    ]
  },
  {
    num: "02",
    icon: <Cpu className="w-5 h-5 text-[#015870]" />,
    title: "Web3, Smart Contracts & Sockets",
    desc: "Developing decentralized smart contracts on Bitcoin Cash and low-latency real-time WebSocket communication engines.",
    capabilities: [
      "CashScript smart contracts for token-gating & micro-payments",
      "Django Channels & ASGI real-time WebSocket pipelines",
      "High-concurrency chat & event-driven architecture",
      "Decentralized wallet workflows & satoshi transaction verification"
    ]
  },
  {
    num: "03",
    icon: <Sparkles className="w-5 h-5 text-[#015870]" />,
    title: "AI, Deep Learning & Tooling",
    desc: "Certified Google AI Professional skilled in training neural network models, inference APIs, and automated data pipelines.",
    capabilities: [
      "Computer Vision & CNN model training (PyTorch, TensorFlow)",
      "Automated dataset preprocessing with Pandas & NumPy",
      "Google AI Professional Certificate (Prompt Eng., Automation)",
      "Docker containerization, Git workflows & cloud deployments"
    ]
  }
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("james.luceres@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="min-h-screen bg-[#F0EFEB] text-[#111111] font-sans selection:bg-[#015870] selection:text-white bg-grid-blueprint">
      {/* Top Scroll Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#015870] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Central Framed Canvas with Continuous Vertical Hairline Borders */}
      <div className="max-w-6xl mx-auto bg-[#F7F7F5] border-x border-b border-[#D6D4CD] shadow-sm min-h-screen flex flex-col mb-8">

        {/* Top Header */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F7F7F5]/90 border-b border-[#D6D4CD] transition-all">
          <div className="px-6 sm:px-10 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={profileImg}
                alt="Vall James Luceres"
                className="w-10 h-10 rounded-full object-cover object-top border border-[#D6D4CD] group-hover:border-[#015870] transition-colors shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-[#111111] tracking-tight">
                  Vall James Luceres
                </span>
                <span className="text-[11px] text-[#666666] font-mono-code">
                  Full-Stack Software Engineer
                </span>
              </div>
            </a>

            {/* Navigation items & Availability Status */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEEEEE] border border-[#D6D4CD] text-[12px] font-mono-code text-[#444444]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for roles</span>
              </div>

              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#555555]">
                <a href="#work" className="hover:text-[#111111] transition-colors">Work</a>
                <a href="#competencies" className="hover:text-[#111111] transition-colors">Disciplines</a>
                <a href="#about" className="hover:text-[#111111] transition-colors">About</a>
                <a href="https://github.com/JamesLuceres" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors flex items-center gap-1">
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#888888]" />
                </a>
              </nav>

              <a
                href="mailto:james.luceres@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] hover:bg-[#015870] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-kiln"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="flex-1 px-6 sm:px-10 pt-5 md:pt-6 pb-10 md:pb-12 space-y-12 md:space-y-16">

          {/* HERO SECTION (2-COLUMN BALANCED COMPOSITION) */}
          <section className="pt-0 md:pt-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 text-center md:text-left">
                {/* Top Kiln-style Announcement Pill */}
                <div className="inline-flex items-center gap-2 p-1 pr-4 rounded-full bg-[#111111] text-white text-xs mb-6 shadow-kiln mx-auto md:mx-0">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#015870] text-white font-mono-code text-[11px] font-medium tracking-wide">
                    UP TACLOBAN '26
                  </span>
                  <span className="text-neutral-300 font-medium text-[12px]">
                    BS Computer Science Graduate
                  </span>
                  <ArrowRight className="w-3 h-3 text-neutral-400" />
                </div>

                {/* Editorial Display Heading */}
                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-[3.4rem] text-[#111111] tracking-tight leading-[1.08] mb-6">
                  Architecting full-stack web systems that{" "}
                  <span className="italic font-medium text-[#015870]">perform</span>{" "}
                  and{" "}
                  <span className="italic font-medium text-[#111111]">scale</span>.
                </h1>
                
                <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl mb-8 mx-auto md:mx-0">
                  Full-stack software engineer and Computer Science graduate from UP Tacloban. Experienced in building high-concurrency real-time WebSocket engines, decentralized Web3 payment services, and resilient enterprise applications.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a
                    href="#work"
                    className="px-6 py-3.5 rounded-full bg-[#111111] hover:bg-[#015870] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-kiln flex items-center gap-2"
                  >
                    <span>Explore Systems & Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={copyEmail}
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F2F0E9] text-[#111111] border border-[#D6D4CD] text-sm font-medium tracking-wide transition-all duration-200 shadow-kiln flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold font-mono-code text-xs">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#666666]" />
                        <span>Copy james.luceres@gmail.com</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://github.com/JamesLuceres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white hover:bg-[#F2F0E9] text-[#111111] border border-[#D6D4CD] transition-all shadow-kiln flex items-center justify-center"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4 text-[#111111]" />
                  </a>

                  <a
                    href="https://linkedin.com/in/vj-luceres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white hover:bg-[#F2F0E9] text-[#111111] border border-[#D6D4CD] transition-all shadow-kiln flex items-center justify-center"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#015870]" />
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols) - Framed Profile & Blueprint Card */}
              <div className="lg:col-span-5">
                <div className="border border-[#D6D4CD] rounded-3xl bg-white p-6 shadow-kiln relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono-code text-[11px] font-semibold tracking-wider text-[#111111] uppercase">Open To Software Engineering Roles</span>
                    </div>
                    <span className="font-mono-code text-[11px] text-[#015870] font-semibold">Alum '26</span>
                  </div>

                  <div className="flex gap-4 items-center mb-6">
                    <img
                      src={profileImg}
                      alt="Vall James Luceres"
                      className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl object-cover object-top border border-[#EEEEEE] shadow-sm flex-shrink-0"
                    />
                    <div className="space-y-1 min-w-0">
                      <div className="font-display font-bold text-base sm:text-lg text-[#111111] truncate">
                        Vall James P. Luceres
                      </div>
                      <div className="font-mono-code text-xs text-[#015870] font-semibold">
                        Full-Stack Software Engineer
                      </div>
                      <div className="text-xs text-[#666666]">
                        BS Computer Science Graduate
                      </div>
                      <div className="text-[11px] text-[#888888] font-mono-code">
                        Tacloban City, Leyte, Philippines
                      </div>
                    </div>
                  </div>

                  {/* Micro Blueprint Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-code mb-5">
                    <div className="p-2.5 rounded-xl bg-[#F7F7F5] border border-[#EEEEEE]">
                      <span className="text-[10px] text-[#888888] block uppercase">Education</span>
                      <span className="font-semibold text-[#111111]">UP Tacloban College</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F7F7F5] border border-[#EEEEEE]">
                      <span className="text-[10px] text-[#888888] block uppercase">Certification</span>
                      <span className="font-semibold text-[#111111]">Google AI Professional</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F7F7F5] border border-[#EEEEEE]">
                      <span className="text-[10px] text-[#888888] block uppercase">Core Backend</span>
                      <span className="font-semibold text-[#111111]">Python, Django, DRF</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F7F7F5] border border-[#EEEEEE]">
                      <span className="text-[10px] text-[#888888] block uppercase">Core Frontend</span>
                      <span className="font-semibold text-[#111111]">Vue 3, Quasar, React</span>
                    </div>
                  </div>

                  {/* Mini Terminal Box */}
                  <div className="p-3 rounded-xl bg-[#111111] text-white font-mono-code text-[11px] space-y-1">
                    <div className="text-emerald-400">$ developer.status</div>
                    <div className="text-neutral-300">"Full-Stack Software Engineer • Ready for deployment"</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blueprint Proof Strip (Hairline Grid) */}
            <div className="mt-8 md:mt-10 border border-[#D6D4CD] rounded-2xl bg-white shadow-kiln overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E0DED7]">
                <div className="p-6 flex flex-col justify-between">
                  <span className="font-mono-code text-[11px] text-[#888888] uppercase tracking-wider mb-2">01 / Degree & Alma Mater</span>
                  <div className="font-display font-bold text-sm text-[#111111]">B.S. Computer Science</div>
                  <div className="text-xs text-[#666666] mt-0.5">University of the Philippines Tacloban</div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <span className="font-mono-code text-[11px] text-[#888888] uppercase tracking-wider mb-2">02 / Primary Stack</span>
                  <div className="font-display font-bold text-sm text-[#111111]">Python, Django, Vue 3, PostgreSQL</div>
                  <div className="text-xs text-[#666666] mt-0.5">Django Channels, Quasar, REST APIs</div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <span className="font-mono-code text-[11px] text-[#888888] uppercase tracking-wider mb-2">03 / Web3 & Sockets</span>
                  <div className="font-display font-bold text-sm text-[#111111]">CashScript (BCH) Smart Contracts</div>
                  <div className="text-xs text-[#666666] mt-0.5">ASGI Real-Time WebSocket Engines</div>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <span className="font-mono-code text-[11px] text-[#888888] uppercase tracking-wider mb-2">04 / Credentials</span>
                  <div className="font-display font-bold text-sm text-[#111111]">Google AI Professional</div>
                  <div className="text-xs text-[#666666] mt-0.5">ID: 85DII1CM1ZI0 (Aug 2026)</div>
                </div>
              </div>
            </div>
          </section>

          {/* SELECTED WORK (FRAMED BENTO SECTION) */}
          <section id="work" className="scroll-mt-28 border-t border-[#D6D4CD] pt-8 md:pt-10">
            {/* Technical Header Line */}
            <div className="flex items-center justify-between border-b border-[#D6D4CD] pb-3 mb-6">
              <div className="flex items-center gap-2 font-mono-code text-xs text-[#888888] uppercase tracking-wider">
                <span className="text-[#015870]">///</span>
                <span>Section 01</span>
                <span className="text-[#CCCCCC]">—</span>
                <span>Production & Featured Projects</span>
              </div>
              <a 
                href="https://github.com/JamesLuceres" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono-code text-[11px] text-[#015870] font-medium bg-[#EEEEEE] hover:bg-[#E0DED7] px-3 py-1 rounded-full transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3 h-3" />
                <span>github.com/JamesLuceres</span>
              </a>
            </div>

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111] tracking-tight">
                  Featured Systems & Architectures
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#666666] max-w-md">
                Production-grade applications spanning real-time WebSockets, Web3 smart contracts, enterprise POS, and deep learning inference.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="space-y-6">
              {/* FEATURED HERO CARD: ChatPay (Web3 + WebSockets) */}
              <div className="border border-[#D6D4CD] rounded-3xl bg-white p-6 sm:p-8 md:p-12 shadow-kiln hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#111111] text-white text-[11px] font-mono-code uppercase tracking-wider">
                        SciBiz Informatics Intern (2025)
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#EEEEEE] text-[#015870] text-[11px] font-mono-code font-medium">
                        {PROJECTS[0].badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] mb-2">
                        {PROJECTS[0].title}
                      </h3>
                      <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                        {PROJECTS[0].subtitle}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {PROJECTS[0].highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#015870] flex-shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm text-[#444444]">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {PROJECTS[0].techStack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-[#F7F7F5] border border-[#D6D4CD] text-[11px] font-mono-code text-[#444444]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                      <button
                        onClick={() => setActiveProject(PROJECTS[0])}
                        className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#015870] text-white text-xs font-semibold tracking-wide transition-colors flex items-center gap-2"
                      >
                        <span>Deep Architectural Overview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={PROJECTS[0].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F2F0E9] text-[#111111] border border-[#D6D4CD] text-xs font-medium tracking-wide transition-colors flex items-center gap-2"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Source</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div 
                      onClick={() => setActiveProject(PROJECTS[0])}
                      className="relative group rounded-2xl overflow-hidden border border-[#D6D4CD] bg-[#F7F7F5] cursor-pointer"
                    >
                      <img
                        src={PROJECTS[0].image}
                        alt={PROJECTS[0].title}
                        className="w-full h-auto aspect-[16/11] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-white text-[#111111] text-xs font-semibold shadow-lg">
                          Click to inspect architecture
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DUAL ASYMMETRIC BENTO CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 2: Nichole Agrivet POS & Inventory */}
                <div className="border border-[#D6D4CD] rounded-3xl bg-white p-6 sm:p-8 shadow-kiln flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#EEEEEE] text-[#111111] text-[11px] font-mono-code font-semibold">
                        {PROJECTS[1].company}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F2F0E9] text-[#015870] text-[11px] font-mono-code">
                        {PROJECTS[1].badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mb-2">
                        {PROJECTS[1].title}
                      </h3>
                      <p className="text-[#555555] text-xs sm:text-sm leading-relaxed">
                        {PROJECTS[1].subtitle}
                      </p>
                    </div>

                    <div 
                      onClick={() => setActiveProject(PROJECTS[1])}
                      className="rounded-xl overflow-hidden border border-[#D6D4CD] bg-[#F7F7F5] cursor-pointer group"
                    >
                      <img
                        src={PROJECTS[1].image}
                        alt={PROJECTS[1].title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-2 pt-1">
                      {PROJECTS[1].highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#015870] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[#444444]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#D6D4CD] mt-6 flex items-center justify-between">
                    <a
                      href={PROJECTS[1].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#111111] hover:text-[#015870] flex items-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                    <button
                      onClick={() => setActiveProject(PROJECTS[1])}
                      className="text-xs font-semibold text-[#015870] hover:text-[#111111] flex items-center gap-1 transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card 3: TradeLENS AI Inference Platform */}
                <div className="border border-[#D6D4CD] rounded-3xl bg-[#F2F0E9] p-6 sm:p-8 shadow-kiln flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-white text-[#111111] text-[11px] font-mono-code font-semibold border border-[#D6D4CD]">
                        {PROJECTS[2].role}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#E8E6DE] text-[#015870] text-[11px] font-mono-code">
                        {PROJECTS[2].badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111] mb-2">
                        {PROJECTS[2].title}
                      </h3>
                      <p className="text-[#555555] text-xs sm:text-sm leading-relaxed">
                        {PROJECTS[2].subtitle}
                      </p>
                    </div>

                    <div 
                      onClick={() => setActiveProject(PROJECTS[2])}
                      className="rounded-xl overflow-hidden border border-[#DDD9CE] bg-white cursor-pointer group"
                    >
                      <img
                        src={PROJECTS[2].image}
                        alt={PROJECTS[2].title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-2 pt-1">
                      {PROJECTS[2].highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#015870] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[#444444]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#D6D4CD] mt-6 flex items-center justify-between">
                    <a
                      href={PROJECTS[2].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#111111] hover:text-[#015870] flex items-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                    <button
                      onClick={() => setActiveProject(PROJECTS[2])}
                      className="text-xs font-semibold text-[#015870] hover:text-[#111111] flex items-center gap-1 transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD 4: Division Information Management System */}
              <div className="border border-[#D6D4CD] rounded-3xl bg-white p-6 sm:p-8 shadow-kiln hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#EEEEEE] text-[#111111] text-[11px] font-mono-code font-semibold">
                        Lead Developer • Oct – Dec 2025
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F2F0E9] text-[#015870] text-[11px] font-mono-code">
                        Django • PostgreSQL • RBAC
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#111111]">
                      {PROJECTS[3].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {PROJECTS[3].description}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => setActiveProject(PROJECTS[3])}
                        className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#015870] text-white text-xs font-semibold tracking-wide transition-colors flex items-center gap-2"
                      >
                        <span>Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={PROJECTS[3].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F2F0E9] text-[#111111] border border-[#D6D4CD] text-xs font-medium tracking-wide transition-colors flex items-center gap-2"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Repository</span>
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div 
                      onClick={() => setActiveProject(PROJECTS[3])}
                      className="rounded-2xl overflow-hidden border border-[#D6D4CD] bg-[#F7F7F5] cursor-pointer group"
                    >
                      <img
                        src={PROJECTS[3].image}
                        alt={PROJECTS[3].title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DISCIPLINES SECTION */}
          <section id="competencies" className="scroll-mt-28 border-t border-[#D6D4CD] pt-8 md:pt-10">
            {/* Technical Header Line */}
            <div className="flex items-center justify-between border-b border-[#D6D4CD] pb-3 mb-6">
              <div className="flex items-center gap-2 font-mono-code text-xs text-[#888888] uppercase tracking-wider">
                <span className="text-[#015870]">///</span>
                <span>Section 02</span>
                <span className="text-[#CCCCCC]">—</span>
                <span>Core Disciplines & Technical Stack</span>
              </div>
              <span className="font-mono-code text-[11px] text-[#015870] font-medium bg-[#EEEEEE] px-2.5 py-0.5 rounded-full">
                TECHNICAL CAPABILITIES
              </span>
            </div>

            <div className="max-w-2xl mb-6">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111] tracking-tight mb-4">
                Disciplines bridging{" "}
                <span className="italic font-medium text-[#015870]">systems logic</span>{" "}
                and production engineering.
              </h2>
              <p className="text-sm md:text-base text-[#666666]">
                Hands-on expertise across backend architectures, smart contracts, real-time communications, and neural network pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPETENCIES.map((comp, idx) => (
                <div 
                  key={idx}
                  className="border border-[#D6D4CD] rounded-3xl bg-white p-8 shadow-kiln flex flex-col justify-between hover:border-[#CCCCCC] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-10 h-10 rounded-2xl bg-[#F7F7F5] border border-[#D6D4CD] flex items-center justify-center">
                        {comp.icon}
                      </span>
                      <span className="font-mono-code text-xs text-[#999999]">{comp.num}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#111111] mb-2">
                      {comp.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed mb-6">
                      {comp.desc}
                    </p>

                    <div className="border-t border-[#EEEEEE] pt-6 space-y-3">
                      {comp.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#015870] mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-[#444444] leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-[#EEEEEE]/50">
                    <span className="font-mono-code text-[11px] text-[#888888]">Verified Capability</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Comprehensive Skills Matrix */}
            <div className="mt-6 border border-[#D6D4CD] rounded-3xl bg-white p-8 shadow-kiln">
              <div className="text-sm font-display font-bold text-[#111111] mb-6 flex items-center gap-2">
                <Code className="w-4 h-4 text-[#015870]" />
                <span>Technical Stack Matrix</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono-code text-xs">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#888888] uppercase block tracking-wider">Languages</span>
                  <div className="text-[#111111] space-y-1">
                    <div>Python</div>
                    <div>JavaScript (ES6+)</div>
                    <div>CashScript (BCH)</div>
                    <div>Java • C • SQL</div>
                    <div>HTML5 / CSS3</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] text-[#888888] uppercase block tracking-wider">Web Frameworks</span>
                  <div className="text-[#111111] space-y-1">
                    <div>Django & DRF</div>
                    <div>Django Channels (Sockets)</div>
                    <div>Vue.js 3 & Quasar</div>
                    <div>React & Vite</div>
                    <div>Node.js & Express</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] text-[#888888] uppercase block tracking-wider">Databases & Tools</span>
                  <div className="text-[#111111] space-y-1">
                    <div>PostgreSQL • SQLite</div>
                    <div>Docker • Postman</div>
                    <div>Git • GitHub</div>
                    <div>Render • Vercel</div>
                    <div>Tailwind CSS</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] text-[#888888] uppercase block tracking-wider">AI & Data Science</span>
                  <div className="text-[#111111] space-y-1">
                    <div>PyTorch • TensorFlow</div>
                    <div>Computer Vision / CNN</div>
                    <div>Pandas • NumPy</div>
                    <div>Scikit-learn</div>
                    <div>Prompt Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT SECTION (Tactile Editorial Bento Card) */}
          <section id="about" className="scroll-mt-28 border-t border-[#D6D4CD] pt-8 md:pt-10">
            {/* Technical Header Line */}
            <div className="flex items-center justify-between border-b border-[#D6D4CD] pb-3 mb-6">
              <div className="flex items-center gap-2 font-mono-code text-xs text-[#888888] uppercase tracking-wider">
                <span className="text-[#015870]">///</span>
                <span>Section 03</span>
                <span className="text-[#CCCCCC]">—</span>
                <span>Biography, Education & Credentials</span>
              </div>
              <span className="font-mono-code text-[11px] text-[#015870] font-medium bg-[#EEEEEE] px-2.5 py-0.5 rounded-full">
                CREDENTIALS
              </span>
            </div>

            <div className="border border-[#D6D4CD] rounded-3xl bg-[#F2F0E9] p-8 md:p-14 shadow-kiln">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#111111] tracking-tight leading-tight">
                    Rooted in computer science, proven in{" "}
                    <span className="italic font-medium text-[#015870]">production</span>.
                  </h2>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl bg-white/80 border border-[#D6D4CD] shadow-sm">
                    <img
                      src={profileImg}
                      alt="Vall James Luceres"
                      className="w-20 h-24 rounded-xl object-cover object-top border border-[#DDD9CE] shadow-sm flex-shrink-0"
                    />
                    <div className="w-full space-y-2 text-xs font-mono-code text-[#555555]">
                      <div className="flex justify-between">
                        <span className="text-[#888888]">Status:</span>
                        <span className="font-semibold text-[#015870]">Full-Stack Engineer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888888]">Degree:</span>
                        <span className="font-semibold text-[#111111]">BS Computer Science</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888888]">Alma Mater:</span>
                        <span className="font-semibold text-[#111111]">UP Tacloban (2026)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888888]">Certification:</span>
                        <span className="font-semibold text-[#111111]">Google AI Professional</span>
                      </div>
                    </div>
                  </div>

                  {/* Certification Badge */}
                  <div className="p-4 rounded-2xl bg-white border border-[#D6D4CD] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-xs font-display font-bold text-[#111111]">
                        Google AI Professional Certificate
                      </div>
                      <div className="text-[11px] text-[#666666] font-mono-code">
                        Google (Coursera) • Credential: 85DII1CM1ZI0
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#444444] leading-relaxed">
                  <p>
                    I am a Full-Stack Software Engineer and Computer Science graduate from the University of the Philippines Tacloban College. My work centers on building dependable, modular software architectures—ranging from high-concurrency real-time WebSocket systems and on-chain decentralized smart contracts, to normalized database engines and quantitative deep learning models.
                  </p>
                  <p>
                    During my software engineering internship at SciBiz Informatics, I engineered CashScript smart contracts on Bitcoin Cash to govern token-gated communication and satoshi micro-payments, coupled with high-concurrency Django Channels WebSocket engines. As a freelance developer, I developed and shipped the Nichole Agrivet POS & Inventory Management System to production, solving real business operational challenges in inventory conversion and credit tracking.
                  </p>
                  <p>
                    I am proficient across Python, JavaScript, Vue 3, Django REST Framework, and PostgreSQL, with a Google AI Professional Certification covering prompt engineering, AI-assisted app building, and workflow automation.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                      href="mailto:james.luceres@gmail.com"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-[#015870] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>james.luceres@gmail.com</span>
                    </a>
                    <span className="text-[#CCCCCC]">•</span>
                    <a
                      href="https://github.com/JamesLuceres"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-[#015870] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github.com/JamesLuceres</span>
                    </a>
                    <span className="text-[#CCCCCC]">•</span>
                    <a
                      href="https://linkedin.com/in/vj-luceres"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-[#015870] transition-colors"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT / CTA SECTION */}
          <section id="contact" className="scroll-mt-28 border-t border-[#D6D4CD] pt-8 md:pt-10">
            {/* Technical Header Line */}
            <div className="flex items-center justify-between border-b border-[#D6D4CD] pb-3 mb-6">
              <div className="flex items-center gap-2 font-mono-code text-xs text-[#888888] uppercase tracking-wider">
                <span className="text-[#015870]">///</span>
                <span>Section 04</span>
                <span className="text-[#CCCCCC]">—</span>
                <span>Contact & Communication</span>
              </div>
              <span className="font-mono-code text-[11px] text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">
                ● AVAILABLE IMMEDIATELY
              </span>
            </div>

            <div className="border border-[#D6D4CD] rounded-3xl bg-white p-8 sm:p-12 md:p-16 shadow-kiln text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEEEEE] text-[11px] font-mono-code text-[#444444]">
                <span className="w-2 h-2 rounded-full bg-[#015870]" />
                <span>Initiate Conversation</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight">
                Let’s build something{" "}
                <span className="italic font-medium text-[#015870]">exceptional</span>.
              </h2>

              <p className="text-sm sm:text-base text-[#666666] max-w-lg mx-auto leading-relaxed">
                I am currently open to full-stack, backend, Web3, and software engineering opportunities. Let's discuss how my experience can contribute to your engineering team.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href="mailto:james.luceres@gmail.com"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#111111] hover:bg-[#015870] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-kiln flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-[#F7F7F5] text-[#111111] border border-[#D6D4CD] text-xs sm:text-sm font-medium tracking-wide transition-all shadow-kiln flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold font-mono-code text-xs">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#666666]" />
                      <span>Copy james.luceres@gmail.com</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 flex items-center justify-center gap-6 font-mono-code text-xs text-[#666666]">
                <a 
                  href="https://github.com/JamesLuceres" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#111111] flex items-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#111111]" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a 
                  href="https://linkedin.com/in/vj-luceres" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#015870] flex items-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#015870]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="border-t border-[#D6D4CD] bg-[#F7F7F5] py-10 text-[#666666] text-xs px-6 sm:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-[#111111]">Vall James P. Luceres</span>
              <span className="text-[#CCCCCC]">/</span>
              <span className="font-mono-code">Full-Stack Software Engineer</span>
            </div>

            <div className="font-mono-code text-[11px] text-[#888888] flex items-center gap-4">
              <span>BS Computer Science, UP Tacloban</span>
              <span>•</span>
              <span>Built with React 19 & Tailwind CSS</span>
              <span>•</span>
              <span>All Rights Reserved © 2026</span>
            </div>

            <div className="flex items-center gap-6 font-medium text-[#444444]">
              <a href="#work" className="hover:text-[#111111] transition-colors">Work</a>
              <a href="#competencies" className="hover:text-[#111111] transition-colors">Disciplines</a>
              <a href="#about" className="hover:text-[#111111] transition-colors">About</a>
              <a href="mailto:james.luceres@gmail.com" className="hover:text-[#111111] transition-colors">Email</a>
            </div>
          </div>
        </footer>

      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white border border-[#D6D4CD] rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F7F5] hover:bg-[#EEEEEE] border border-[#D6D4CD] flex items-center justify-center text-[#555555] hover:text-[#111111] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#111111] text-white text-[11px] font-mono-code">
                    {activeProject.company || activeProject.role}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EEEEEE] text-[#015870] text-[11px] font-mono-code font-medium">
                    {activeProject.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] mb-2">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {/* Screenshot Frame */}
                <div className="rounded-2xl overflow-hidden border border-[#D6D4CD] bg-[#F7F7F5]">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-auto max-h-[380px] object-contain mx-auto"
                  />
                </div>

                {/* Architecture & Highlights */}
                <div className="border-t border-[#EEEEEE] pt-6 space-y-4">
                  <h4 className="font-display font-bold text-sm text-[#111111] uppercase tracking-wider font-mono-code">
                    Architectural & Engineering Highlights
                  </h4>
                  <div className="space-y-2.5">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#015870] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#444444]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats / Specs Matrix */}
                {activeProject.stats && (
                  <div className="grid grid-cols-3 gap-3 border-t border-[#EEEEEE] pt-6">
                    {activeProject.stats.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#F7F7F5] border border-[#D6D4CD] text-center">
                        <div className="font-mono-code text-[10px] text-[#888888] uppercase tracking-wider mb-1">{s.label}</div>
                        <div className="font-display font-bold text-xs sm:text-sm text-[#111111]">{s.val}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags & Source Link */}
                <div className="border-t border-[#EEEEEE] pt-6 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-[#F7F7F5] border border-[#D6D4CD] text-[11px] font-mono-code text-[#555555]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white hover:bg-[#F7F7F5] text-[#111111] border border-[#D6D4CD] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    <button
                      onClick={() => setActiveProject(null)}
                      className="px-5 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#015870] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
