import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-lg hover:shadow-md transition">
      <h4 className="text-md font-semibold text-gray-800 dark:text-white">
        {skill.name}
      </h4>

      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded mt-2">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>

      <p className="text-xs text-gray-500 mt-1">{skill.level}%</p>
    </div>
  );
};

export default SkillCard;