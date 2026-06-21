const Button = ({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-95 shadow-md hover:shadow-lg hover:shadow-indigo-500/15 focus:ring-indigo-500",

    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700/80 focus:ring-slate-500 shadow-sm",

    outline:
      "border border-slate-200 text-slate-700 hover:border-indigo-500/40 hover:text-indigo-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-indigo-400/40 dark:hover:text-indigo-400 focus:ring-indigo-500 hover:bg-indigo-500/[0.02] dark:hover:bg-indigo-500/[0.02]",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary
        } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;