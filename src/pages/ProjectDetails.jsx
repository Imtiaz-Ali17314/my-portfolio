import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <Link to="/projects" className="text-blue-500 mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <Link
          to="/projects"
          className="text-sm text-gray-500 hover:text-black dark:hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid lg:grid-cols-3 gap-8">

          {/* Left (Main Content) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            {/* Features */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Key Features
              </h2>

              <ul className="space-y-2 list-disc ml-5 text-gray-600 dark:text-gray-300">
                {project.features?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* CTA Card */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Project Links
              </h3>

              <div className="flex flex-col gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-center transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.stack?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;