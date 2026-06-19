import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiCheckCircle, FiCpu, FiTrendingUp } from "react-icons/fi";
import achievements from "../../data/achievements";

const getIcon = (id) => {
  switch (id) {
    case 1:
      return <FiCpu className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />;
    case 2:
      return <FiCheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />;
    case 3:
      return <FiTrendingUp className="w-6 h-6 text-pink-500 dark:text-pink-400" />;
    case 4:
      return <FiAward className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
    default:
      return <FiAward className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />;
  }
};

const getCardGlowStyles = (id) => {
  switch (id) {
    case 1:
      return "hover:border-indigo-500/30 dark:hover:shadow-indigo-500/5";
    case 2:
      return "hover:border-emerald-500/30 dark:hover:shadow-emerald-500/5";
    case 3:
      return "hover:border-pink-500/30 dark:hover:shadow-pink-500/5";
    case 4:
      return "hover:border-amber-500/30 dark:hover:shadow-amber-500/5";
    default:
      return "hover:border-indigo-500/30 dark:hover:shadow-indigo-500/5";
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-transparent">
      
      {/* Background glow highlighting */}
      <div className="glow-node w-[400px] h-[400px] bg-indigo-500/5 left-[10%] bottom-[5%] rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-node w-[350px] h-[350px] bg-pink-500/5 right-[10%] top-[10%] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
            Milestones
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Key Achievements
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento/Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between h-full border border-slate-200/60 dark:border-slate-800/60 ${getCardGlowStyles(item.id)}`}
            >
              <div className="space-y-4">
                {/* Icon Wrapper */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/50 shadow-inner w-fit">
                  {getIcon(item.id)}
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Sub-decoration indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <span className="font-semibold uppercase tracking-wider">Verified</span>
                <span className="font-mono text-[10px]">#{String(item.id).padStart(2, "0")}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;