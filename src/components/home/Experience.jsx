import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCheckCircle } from "react-icons/fi";
import experience from "../../data/experience";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-transparent">
      
      {/* Background ambient glow */}
      <div className="glow-node w-[400px] h-[400px] bg-indigo-500/5 left-[-100px] top-[20%] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
            Career Pathway
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12"
        >
          {experience.map((item, index) => (
            <motion.div 
              key={item.id || index}
              variants={itemVariants}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[13px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-[#0a0a0c] border-2 border-indigo-500 dark:border-indigo-400 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 transition-colors duration-300 shadow-md">
                <FiBriefcase className="w-3 h-3 text-indigo-500 dark:text-indigo-400 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content Box */}
              <div className="glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-indigo-500/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                      {item.company}
                    </p>
                  </div>
                  
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-full w-fit">
                    <FiCalendar className="text-indigo-500 dark:text-indigo-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-6 border-t border-slate-200 dark:border-[#262630]/60 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      Key Highlights &amp; Accomplishments
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <FiCheckCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
