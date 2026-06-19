import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLayers, FiCheckCircle, FiInfo } from "react-icons/fi";
import projects from "../data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-white dark:bg-transparent px-6">
        <div className="space-y-6 max-w-md">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Project Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400">
            The project workspace you are looking for does not exist or has been relocated.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
          >
            <FiArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-transparent py-12 pt-28 px-4 md:px-8 relative overflow-hidden transition-colors duration-300">
      
      {/* Background glow node */}
      <div className="glow-node w-[400px] h-[400px] bg-indigo-500/5 left-[-100px] top-[20%] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group mb-8"
        >
          <FiArrowLeft className="group-hover:-translate-x-1.5 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Layout container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-10"
        >
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Title / Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              {project.category && (
                <span className="text-xs font-extrabold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">
                  {project.category}
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </motion.div>

            {/* Screen Mockup Image */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-[#262630]/60 bg-slate-100 dark:bg-slate-900 aspect-[16/9]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Key Features card */}
            {project.features && project.features.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="glass-panel rounded-2xl p-6 md:p-8 space-y-6"
              >
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <FiCheckCircle className="text-indigo-500 dark:text-indigo-400" />
                  <span>Key Features &amp; Implementation Details</span>
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <FiCheckCircle className="text-indigo-500 dark:text-indigo-400 w-4.5 h-4.5 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

          </div>

          {/* Sidebar Action Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CTA project links card */}
            <motion.div
              variants={itemVariants}
              className="glass-panel rounded-2xl p-6 space-y-5 shadow-sm"
            >
              <h3 className="text-md font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Resource Links
              </h3>

              <div className="flex flex-col gap-3">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 text-white rounded-xl font-bold transition-all shadow-md"
                  >
                    <FiExternalLink />
                    <span>Launch Live Demo</span>
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl font-bold transition-all shadow-sm"
                  >
                    <FiGithub />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Tech Stack items card */}
            {project.stack && project.stack.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="glass-panel rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-md font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2">
                  <FiLayers />
                  <span>Technologies Used</span>
                </h3>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/40 dark:border-slate-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quick specifications context */}
            <motion.div
              variants={itemVariants}
              className="glass-panel rounded-2xl p-6 space-y-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              <h4 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 uppercase tracking-wider">
                <FiInfo /> Project Specifications
              </h4>
              <p>
                This workspace is maintained as part of Imtiaz Ali's active code portfolio. 
                All components are verified locally for responsive layouts and fast client-side performance.
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectDetails;