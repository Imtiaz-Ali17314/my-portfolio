const SkillCard = ({ category, items }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-5">
      <h3 className="text-xl font-semibold mb-4">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full border border-gray-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;