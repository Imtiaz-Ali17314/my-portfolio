import { motion } from "framer-motion";
import { FiCheckCircle, FiStar, FiFileText } from "react-icons/fi";

const stats = [
  { value: "1+", label: "Year Experience", desc: "Self-learning & practice" },
  { value: "6+", label: "Client Projects", desc: "Real-world production sites" },
  { value: "29+", label: "Personal Projects", desc: "HTML/CSS to Advanced SaaS" },
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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#0a0a0c]">
      
      {/* Background glow */}
      <div className="glow-node w-[350px] h-[350px] bg-indigo-500/5 left-[15%] bottom-[5%] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
            Introduction
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Creating digital experiences that blend clean code with creative design.
            </h3>
            
            <p className="text-slate-650 dark:text-slate-350 leading-relaxed text-base">
              I am a passionate Full Stack Software Engineer with a solid foundation in modern web technologies. Over the past year, I have engaged in intensive self-directed learning and practice, leading to the creation of **6 client platforms** and **29 personal applications** spanning frontend, backend, database structures, and cross-platform desktop shells.
            </p>

            <p className="text-slate-650 dark:text-slate-350 leading-relaxed text-base">
              My engineering core lies in writing clean, modular, and maintainable code, designing performant user interfaces, and automating processes to resolve concrete problems.
            </p>

            {/* Quick check bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-[#262630]/60 text-sm font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-indigo-500 dark:text-indigo-400 text-lg shrink-0" />
                <span>Responsive Web Design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-indigo-500 dark:text-indigo-400 text-lg shrink-0" />
                <span>Full-Stack REST APIs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-indigo-500 dark:text-indigo-400 text-lg shrink-0" />
                <span>Desktop Wrappers (Electron)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-indigo-500 dark:text-indigo-400 text-lg shrink-0" />
                <span>Modern Frontend Frameworks</span>
              </div>
            </div>
          </div>

          {/* Stats Cards Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex items-center gap-6"
              >
                <div className="flex-grow space-y-1">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-100">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450">
                    {stat.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-xl shadow-inner shrink-0">
                  {index === 0 ? <FiStar /> : index === 1 ? <FiCheckCircle /> : <FiFileText />}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;