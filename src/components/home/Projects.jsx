import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import Button from "../common/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  const navigate = useNavigate();
  // Display the top 6 premium/full-stack projects on the home page
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#0a0a0c]">
      {/* Glow highlight node */}
      <div className="glow-node w-[500px] h-[500px] bg-pink-500/5 right-[-200px] bottom-[10%] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Action */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            onClick={() => {
              navigate("/projects");
              window.scrollTo(0, 0);
            }}
            className="px-8 py-3.5 border-indigo-500 text-indigo-500 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white transition-all shadow-md"
          >
            Explore All 29 Projects &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
