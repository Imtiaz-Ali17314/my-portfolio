import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-500 mt-2">{project.description}</p>

      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full mt-6 rounded-lg shadow"
      />

      {/* Details */}
      <div className="mt-8 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <p>{project.tech.join(", ")}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-disc ml-5">
            {project.features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="px-4 py-2 bg-gray-800 text-white rounded"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;