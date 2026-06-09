import projects from "../../data/projects";

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;