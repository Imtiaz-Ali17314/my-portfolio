const FilterButton = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-sm border
        ${active
          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-transparent shadow-[0_4px_12px_rgba(99,102,241,0.18)] scale-105"
          : "bg-[#ffffff] dark:bg-[#160f38] text-slate-700 dark:text-[#beafdc] border-slate-200 dark:border-[#2d1e5a] hover:border-indigo-500/30 hover:shadow-md"
        }`}
    >
      {children}
    </button>
  );
};

export default FilterButton;