import { motion } from "framer-motion";
import { FiBookOpen, FiActivity, FiLayers, FiCompass } from "react-icons/fi";

const milestones = [
  {
    phase: "01",
    year: "2024",
    title: "The Self-Taught Foundation",
    description: "Began my coding odyssey as a self-taught developer. Focused heavily on mastering HTML5, CSS3, ES6 JavaScript, responsive layout designs, and programming fundamentals.",
    icon: <FiBookOpen />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    phase: "02",
    year: "2024 - 2025",
    title: "Frameworks & Modern UI",
    description: "Expanded my skillset into complex frontend ecosystems. Developed production-quality applications using Bootstrap, Vue.js, React, Tailwind CSS, and global state managers.",
    icon: <FiLayers />,
    color: "from-indigo-500 to-pink-500",
  },
  {
    phase: "03",
    year: "2025 - Present",
    title: "Full-Stack & Desktop Shells",
    description: "Dived deep into backend engineering. Built robust MVC SaaS products with Laravel, integrated SQL databases, built REST APIs, and compiled desktop solutions using Electron.js.",
    icon: <FiActivity />,
    color: "from-pink-500 to-rose-500",
  },
  {
    phase: "04",
    year: "Present & Future",
    title: "Scaling Production Platforms",
    description: "Currently focus on constructing high-performance, containerized full-stack platforms, integrating AI APIs, testing automation, and writing highly-optimized, scalable systems.",
    icon: <FiCompass />,
    color: "from-rose-500 to-amber-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 relative overflow-hidden bg-transparent">
      
      {/* Background Glow */}
      <div className="glow-node w-[400px] h-[400px] bg-pink-500/5 left-[5%] top-[40%] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
            Origin story
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            My Learning Journey
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Visual Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-8 md:pl-16 space-y-12 border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-10"
        >
          {milestones.map((stone, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              {/* Timeline dot / phase identifier */}
              <div className="absolute -left-[45px] md:-left-[81px] top-1.5 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white dark:bg-[#0a0a0c] border border-slate-200 dark:border-slate-800 shadow-md group-hover:border-indigo-500 dark:group-hover:border-indigo-400 transition-colors duration-300">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {stone.phase}
                </span>
              </div>

              {/* Grid content card */}
              <div className="glass-panel rounded-2xl p-6 md:p-8 grid md:grid-cols-12 gap-6 items-start transition-all duration-300 hover:shadow-xl hover:border-indigo-500/30">
                
                {/* Year and Icon Column */}
                <div className="md:col-span-3 space-y-3">
                  <span className={`inline-flex text-xs font-extrabold tracking-widest uppercase text-white bg-gradient-to-r ${stone.color} px-3 py-1.5 rounded-full shadow-sm`}>
                    {stone.year}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 text-base shadow-inner">
                      {stone.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Milestone
                    </span>
                  </div>
                </div>

                {/* Text Details Column */}
                <div className="md:col-span-9 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-250">
                    {stone.title}
                  </h3>
                  <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
                    {stone.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;