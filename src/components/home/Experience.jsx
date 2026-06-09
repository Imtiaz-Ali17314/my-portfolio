import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="space-y-6">
        {experience.map((item, index) => (
          <div key={index} className="border-l border-gray-700 pl-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.company}</p>
            <p className="text-sm text-gray-400">{item.duration}</p>
            <p className="text-gray-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
