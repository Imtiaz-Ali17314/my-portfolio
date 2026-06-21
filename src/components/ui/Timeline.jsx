const Timeline = ({ items }) => {
  return (
    <div className="border-l border-gray-300 dark:border-gray-700 pl-6 space-y-6">
      {items.map((item, index) => (
        <div key={index} className="relative">

          {/* Dot */}
          <div className="absolute -left-3 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>

          {/* Content */}
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            {item.title}
          </h4>

          <p className="text-sm text-gray-500">{item.duration}</p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;