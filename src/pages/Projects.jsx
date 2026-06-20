import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import FilterButton from "../components/ui/FilterButton";
import SearchBar from "../components/ui/SearchBar";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const categories = [
    "all",
    "html",
    "css",
    "javascript",
    "typescript",
    "vue",
    "react",
    "laravel",
    "node",
    "tailwind",
    "bootstrap",
    "electron",
  ];

  const filteredProjects = projects.filter((project) => {
    const searchText = search.toLowerCase().trim();

    // SEARCH
    const matchSearch =
      project.title?.toLowerCase().includes(searchText) ||
      project.description?.toLowerCase().includes(searchText) ||
      project.stack?.some((tech) => tech.toLowerCase().includes(searchText));

    // CATEGORY
    const matchCategory =
      filter === "all" ||
      project.stack?.some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      );

    return matchSearch && matchCategory;
  });

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent min-h-screen">
      {/* Background ambient space glow highlights */}
      <div className="glow-node w-[500px] h-[500px] bg-pink-500/5 left-[5%] top-[10%] rounded-full blur-[120px] pointer-events-none" />
      <div className="glow-node w-[400px] h-[400px] bg-indigo-500/5 right-[5%] bottom-[20%] rounded-full blur-[110px] pointer-events-none" />
      <div className="glow-node w-[350px] h-[350px] bg-cyan-400/5 left-[40%] bottom-[5%] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 pt-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-3 select-none">
            Complete Archives
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            All Built Projects
          </h1>
          <div className="h-1.5 w-28 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-5 rounded-full shadow-sm" />
        </div>

        {/* Search Control */}
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

        {/* Filter Selection Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-16 select-none">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              active={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </div>

        {/* Staggered Grid Content */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${filter}-${search}`} // Force re-render of container variant animation when state shifts
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  variants={cardVariants}
                  key={project.id}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="text-center py-20 bg-slate-50/50 dark:bg-[#160f38] border border-slate-200 dark:border-[#2d1e5a] rounded-3xl p-8 max-w-lg mx-auto"
            >
              <p className="text-base text-slate-600 dark:text-[#beafdc] font-semibold mb-2">
                No matching projects found
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Try refining your keywords or checking another category tab.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
