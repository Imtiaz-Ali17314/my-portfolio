import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-10 group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
        <FiSearch className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search projects by title, stack, features..."
        className="w-full pl-11 pr-4 py-4 bg-[#ffffff] dark:bg-[#160f38] border border-slate-200 dark:border-[#2d1e5a] text-slate-900 dark:text-[#f0ebff] rounded-2xl outline-none transition-all duration-300 hover:shadow-[0_4px_20px_rgba(99,102,241,0.03)] dark:hover:shadow-[0_4px_20px_rgba(167,92,255,0.08)] hover:border-indigo-500/50 dark:hover:border-indigo-500/50 focus:bg-white dark:focus:bg-[#11092e] focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 text-sm font-semibold placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;