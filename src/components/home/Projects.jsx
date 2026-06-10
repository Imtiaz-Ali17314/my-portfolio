import { Link } from "react-router-dom";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block"
          >
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md 
  border border-gray-200 dark:border-gray-800 
  transition-all duration-300 ease-out
  hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/40 cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 relative">
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors group-hover:text-blue-500">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 line-clamp-3 transition-all duration-300 group-hover:text-gray-300">
                  {project.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-3 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
