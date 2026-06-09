import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative flex items-center justify-center
        w-10 h-10 rounded-full
        bg-gray-200 dark:bg-gray-800
        text-gray-800 dark:text-white
        transition-all duration-300
        hover:scale-105
        active:scale-95
        shadow-md
      "
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;