import React from "react";

const Button = ({ children, className = "", ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`heading-md bg-orange-500 cursor-pointer rounded-lg px-6 py-2 text-black ${className} disabled:bg-slate-400 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export default Button;
