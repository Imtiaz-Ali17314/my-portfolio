import React from "react";
import { useNavigate } from "react-router-dom";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent routing if user clicked an external link icon or anchor tag
    if (e.target.tagName.toLowerCase() === "a" || e.target.closest("a")) {
      return;
    }
    navigate(`/projects/${project.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group flex flex-col h-full bg-white dark:bg-[#121218] rounded-2xl overflow-hidden border border-slate-200 dark:border-[#262630] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-indigo-500/5 hover:border-indigo-500/40 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs font-semibold text-white tracking-wider uppercase bg-indigo-600 px-2.5 py-1 rounded">
            View Details
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-5 space-y-3">
        {/* Category Tag */}
        {project.category && (
          <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
            {project.category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-500">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.stack.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-350 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Bottom Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-[#262630]/60 text-sm">
          {/* Detailed CTA */}
          <span className="text-xs font-bold text-indigo-500 group-hover:underline">
            Details &rarr;
          </span>

          <div className="flex items-center gap-3">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-600 dark:text-slate-450 hover:text-indigo-500 dark:hover:text-indigo-400 font-semibold transition-colors"
                title="Live Demo"
              >
                <FiExternalLink className="text-base" />
                <span className="text-xs">Live</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-semibold transition-colors"
                title="View Codebase"
              >
                <FiGithub className="text-base" />
                <span className="text-xs">Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
