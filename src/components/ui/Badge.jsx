const Badge = ({ text }) => {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
      {text}
    </span>
  );
};

export default Badge;