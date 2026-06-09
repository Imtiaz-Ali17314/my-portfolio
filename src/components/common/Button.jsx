import React from "react";

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
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg",

    secondary:
      "bg-slate-800 text-white hover:bg-slate-900 focus:ring-slate-600 shadow-md hover:shadow-lg dark:bg-slate-700 dark:hover:bg-slate-600",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${
        variants[variant] || variants.primary
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;