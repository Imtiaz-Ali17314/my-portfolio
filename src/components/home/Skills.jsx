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

const getIcon = (category) => {
  switch (category.toLowerCase()) {
    case "frontend":
      return <FiLayout className="w-5 h-5" />;
    case "backend":
      return <FiServer className="w-5 h-5" />;
    case "database":
      return <FiDatabase className="w-5 h-5" />;
    case "qa automation":
      return <FiActivity className="w-5 h-5" />;
    case "desktop":
      return <FiCpu className="w-5 h-5" />;
    case "tools":
      return <FiTool className="w-5 h-5" />;
    default:
      return <FiTool className="w-5 h-5" />;
  }
};

const getGridStyles = (category) => {
  switch (category.toLowerCase()) {
    case "frontend":
      return "md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent";
    case "backend":
      return "md:col-span-1 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent";
    case "database":
      return "md:col-span-1 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent";
    case "desktop":
      return "md:col-span-1 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent";
    case "qa automation":
      return "md:col-span-1 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent";
    case "tools":
      return "md:col-span-1 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent";
    default:
      return "md:col-span-1";
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

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(160px,_auto)]"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between ${getGridStyles(
                skill.category
              )}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    {getIcon(skill.category)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>

                {/* Subtitle / Context description */}
                {skill.category.toLowerCase() === "frontend" && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    Building immersive, accessible, and high-performance user interfaces with modern reactive logic.
                  </p>
                )}
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/40 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-250 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;