import achievements from "../../data/achievements";

const Achievements = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Achievements</h2>

      <ul className="space-y-4">
        {achievements.map((item, index) => (
          <li key={index} className="text-gray-400">
            • {item.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;