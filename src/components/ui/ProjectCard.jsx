import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.stack?.map((stack, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="text-sm text-blue-500 hover:underline"
            >
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-sm text-gray-500 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
