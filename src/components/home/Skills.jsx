import skills from "../../data/skills";
import SkillCard from "../ui/SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            category={skill.category}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;