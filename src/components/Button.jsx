import React from "react";

const Button = ({ children, className = "", ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`heading-md bg-orange-600 cursor-pointer rounded-lg px-6 py-2 text-black disabled:bg-slate-400 disabled:text-slate-700 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
