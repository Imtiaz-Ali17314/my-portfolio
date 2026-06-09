import skills from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border border-gray-700 rounded-lg text-center"
          >
            <p className="font-medium">{skill.name}</p>
            <p className="text-sm text-gray-500">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
