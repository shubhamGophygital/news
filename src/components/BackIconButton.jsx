import React from "react";

const BackIconButton = ({ className, children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`bg-orange-600 cursor-pointer rounded-full w-9 h-9 grid place-items-center disabled:bg-slate-400 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default BackIconButton;
