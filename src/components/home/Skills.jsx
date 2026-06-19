import React from "react";
import { motion } from "framer-motion";
import { 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiActivity, 
  FiCpu, 
  FiTool 
} from "react-icons/fi";
import skills from "../../data/skills";

const categoryMeta = {
  frontend: {
    desc: "Building immersive, accessible, and high-performance user interfaces with modern reactive logic.",
    iconBg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    borderClass: "hover:border-indigo-500/40 hover:shadow-indigo-500/[0.06] dark:hover:shadow-indigo-500/[0.03]",
    icon: <FiLayout className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    radialGlow: "rgba(99, 102, 241, 0.12)"
  },
  backend: {
    desc: "Constructing secure, performant MVC SaaS platforms, background queues, and REST API microservices.",
    iconBg: "bg-pink-500/10 dark:bg-pink-500/20",
    borderClass: "hover:border-pink-500/40 hover:shadow-pink-500/[0.06] dark:hover:shadow-pink-500/[0.03]",
    icon: <FiServer className="w-5 h-5 text-pink-500 dark:text-pink-400" />,
    radialGlow: "rgba(244, 63, 94, 0.12)"
  },
  database: {
    desc: "Designing optimized relational database schemas, index trees, and tuning slow SQL queries.",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
    borderClass: "hover:border-blue-500/40 hover:shadow-blue-500/[0.06] dark:hover:shadow-blue-500/[0.03]",
    icon: <FiDatabase className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    radialGlow: "rgba(59, 130, 246, 0.12)"
  },
  "qa automation": {
    desc: "Implementing reliable end-to-end integration tests and test coverage automation pipelines.",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderClass: "hover:border-emerald-500/40 hover:shadow-emerald-500/[0.06] dark:hover:shadow-emerald-500/[0.03]",
    icon: <FiActivity className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    radialGlow: "rgba(16, 185, 129, 0.12)"
  },
  desktop: {
    desc: "Compiling native desktop application shells and cross-platform client background utilities.",
    iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
    borderClass: "hover:border-purple-500/40 hover:shadow-purple-500/[0.06] dark:hover:shadow-purple-500/[0.03]",
    icon: <FiCpu className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
    radialGlow: "rgba(168, 85, 247, 0.12)"
  },
  tools: {
    desc: "Streamlining local dev environments, version control workflows, and managing branch pipelines.",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
    borderClass: "hover:border-amber-500/40 hover:shadow-amber-500/[0.06] dark:hover:shadow-amber-500/[0.03]",
    icon: <FiTool className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    radialGlow: "rgba(245, 158, 11, 0.12)"
  }
};

const getProficiency = (tech) => {
  switch (tech.toLowerCase()) {
    case "react":
    case "laravel":
    case "javascript":
    case "php":
    case "mysql":
    case "git":
    case "html":
    case "css":
    case "tailwind":
      return { label: "Strong", dotColor: "bg-emerald-500 shadow-[0_0_6px_#10b981]" };
    case "vue":
    case "typescript":
    case "postgresql":
    case "electron.js":
    case "node.js":
    case "bootstrap":
    case "github":
    case "vs code":
    case "rest api":
      return { label: "Solid", dotColor: "bg-blue-500 shadow-[0_0_6px_#3b82f6]" };
    case "playwright":
      return { label: "Familiar", dotColor: "bg-purple-500 shadow-[0_0_6px_#a855f7]" };
    default:
      return { label: "Solid", dotColor: "bg-blue-500 shadow-[0_0_6px_#3b82f6]" };
  }
};

const getBrandGlow = (tech) => {
  switch (tech.toLowerCase()) {
    case "react":
      return "hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.18)] hover:bg-cyan-500/[0.02]";
    case "vue":
      return "hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.18)] hover:bg-emerald-500/[0.02]";
    case "laravel":
      return "hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.18)] hover:bg-red-500/[0.02]";
    case "php":
      return "hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-[0_0_15px_rgba(167,139,250,0.18)] hover:bg-violet-500/[0.02]";
    case "javascript":
      return "hover:border-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.18)] hover:bg-yellow-500/[0.02]";
    case "typescript":
      return "hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.18)] hover:bg-blue-500/[0.02]";
    case "html":
      return "hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.18)] hover:bg-orange-500/[0.02]";
    case "css":
      return "hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.18)] hover:bg-blue-400/[0.02]";
    case "tailwind":
      return "hover:border-teal-400 hover:text-teal-500 dark:hover:text-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.18)] hover:bg-teal-500/[0.02]";
    case "bootstrap":
      return "hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:shadow-[0_0_15px_rgba(147,51,234,0.18)] hover:bg-purple-500/[0.02]";
    case "mysql":
      return "hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 hover:shadow-[0_0_15px_rgba(14,165,233,0.18)] hover:bg-sky-500/[0.02]";
    case "postgresql":
      return "hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.18)] hover:bg-indigo-500/[0.02]";
    case "rest api":
      return "hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.18)] hover:bg-pink-500/[0.02]";
    case "node.js":
      return "hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.18)] hover:bg-emerald-500/[0.02]";
    case "playwright":
      return "hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.18)] hover:bg-teal-500/[0.02]";
    case "electron.js":
      return "hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.18)] hover:bg-cyan-500/[0.02]";
    case "git":
      return "hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.18)] hover:bg-orange-500/[0.02]";
    case "github":
      return "hover:border-slate-800 hover:text-slate-800 dark:hover:text-white dark:hover:border-white hover:shadow-[0_0_15px_rgba(30,41,59,0.18)] hover:bg-slate-400/[0.02]";
    case "vs code":
      return "hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.18)] hover:bg-blue-500/[0.02]";
    default:
      return "hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.18)]";
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-transparent">
      
      {/* Background Glow Node */}
      <div className="glow-node w-[450px] h-[450px] bg-indigo-500/5 left-[50%] top-[30%] -translate-x-1/2 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid (Symmetric 3-Column Layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left"
        >
          {skills.map((skill, index) => {
            const meta = categoryMeta[skill.category.toLowerCase()] || { desc: "Core technology stack items.", iconBg: "bg-indigo-500/10", borderClass: "hover:border-indigo-500/30", icon: <FiTool className="w-5 h-5 text-indigo-500" />, radialGlow: "rgba(99, 102, 241, 0.12)" };
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`terminal-card p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative group overflow-hidden min-h-[250px] h-full ${meta.borderClass}`}
              >
                {/* Category-themed ambient glow background inside card */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${meta.radialGlow} 0%, transparent 60%)`
                  }}
                />

                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3.5">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${meta.iconBg} shrink-0 shadow-sm border border-slate-200/10 dark:border-white/[0.02]`}>
                      {meta.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Subtitle / Context description */}
                  <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                    {meta.desc}
                  </p>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-2 pt-6 relative z-10">
                  {skill.items.map((item, idx) => {
                    const prof = getProficiency(item);
                    return (
                      <span
                        key={idx}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-50 dark:bg-[#120e28]/70 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.06] transition-all duration-300 cursor-default shadow-sm select-none ${getBrandGlow(item)}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${prof.dotColor} animate-pulse`} title={prof.label} />
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;