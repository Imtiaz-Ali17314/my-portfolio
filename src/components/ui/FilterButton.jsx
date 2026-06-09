import React from "react";

const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition border 
        ${
          active
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-700"
        }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;