import PropTypes from "prop-types";

const SectionTitle = ({
  title,
  subtitle,
  center = true,
  className = "",
}) => {
  return (
    <div
      className={`mb-12 ${
        center ? "text-center" : "text-left"
      } ${className}`}
    >
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div
        className={`mt-5 flex ${
          center ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-1 w-20 rounded-full bg-blue-600 dark:bg-blue-400" />
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
};

export default SectionTitle;