import React from "react";
import { motion } from "framer-motion";
import { 
  FiBriefcase, 
  FiCalendar, 
  FiDownload, 
  FiCheckCircle, 
  FiLayers, 
  FiFileText,
  FiExternalLink
} from "react-icons/fi";
import skills from "../data/skills";
import experience from "../data/experience";
import Button from "../components/common/Button";

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

const Resume = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-transparent py-12 pt-28 px-4 md:px-8 relative overflow-hidden transition-colors duration-300">
      
      {/* Glow Blur Nodes */}
      <div className="glow-node w-[400px] h-[400px] bg-indigo-500/5 left-[-100px] top-[20%] rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-node w-[400px] h-[400px] bg-pink-500/5 right-[-100px] bottom-[10%] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-2">
              Credentials
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Professional Resume
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Review qualifications, career timelines, and core skills profile.
            </p>
          </div>

          <a href="/resume/resume.pdf" download className="shrink-0">
            <Button
              variant="primary"
              className="flex items-center gap-2 px-6 py-3.5 shadow-lg shadow-indigo-500/10"
            >
              <FiDownload className="text-lg" />
              <span>Download PDF Resume</span>
            </Button>
          </a>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-10"
        >
          
          {/* Left: Timeline & Summary */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Professional Summary */}
            <motion.div variants={itemVariants} className="glass-panel p-6 md:p-8 rounded-2xl space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FiFileText className="text-indigo-500" />
                <span>Professional Profile</span>
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Detail-oriented and results-driven Full Stack Software Engineer currently working at Softleed Company. Experienced in designing, building, and maintaining production-grade web systems using Laravel, React, Vue, and MySQL/PostgreSQL databases. Developed a robust portfolio of 29 personal projects including frontend dashboards, SaaS workflows, and cross-platform desktop utilities.
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                <FiBriefcase className="text-indigo-500" />
                <span>Work Experience</span>
              </h2>

              <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-8">
                {experience.map((item) => (
                  <div key={item.id} className="relative pl-8 group">
                    
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white dark:bg-[#0a0a0c] border-2 border-indigo-500 dark:border-indigo-400 group-hover:bg-indigo-500 transition-colors shadow-sm" />

                    <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-indigo-500/20 transition-all duration-300">
                      
                      {/* Title Bar */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
                            {item.role}
                          </h3>
                          <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400">
                            {item.company}
                          </span>
                        </div>

                        {/* Date Tag */}
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full w-fit">
                          <FiCalendar />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Accomplishments */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 mt-3">
                          <ul className="space-y-1.5">
                            {item.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <FiCheckCircle className="text-indigo-500 dark:text-indigo-400 shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right: Skills Bento Grid & Document Preview */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Technical Skills Bento Grid */}
            <motion.div variants={itemVariants} className="glass-panel p-6 md:p-8 rounded-2xl space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FiLayers className="text-indigo-500" />
                <span>Technical Stack</span>
              </h2>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {skill.category}
                    </h3>
                    
                    {/* Tags container */}
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/40 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Document Preview & Embed Hub */}
            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative group flex items-center justify-center">
                
                {/* Embed PDF Preview */}
                <iframe
                  src="/resume/resume.pdf#toolbar=0"
                  className="w-full h-full border-0 rounded-xl"
                  title="PDF Resume Preview"
                />

                {/* Cover Overlay for quick action */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 bg-white text-slate-900 rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5 pointer-events-auto">
                    <span>Full Screen Preview</span>
                    <FiExternalLink />
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 pt-2">
                <div className="text-xs text-slate-450 dark:text-slate-500">
                  <p>Document Format: PDF</p>
                  <p>Last Updated: June 2026</p>
                </div>

                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-indigo-500 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <span>Open in Tab</span>
                  <FiExternalLink />
                </a>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Resume;