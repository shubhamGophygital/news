import React from "react";

const SectionHeader = ({ className, children }) => {
  return (
    <h2 className={`heading-2xl text-3xl mt-6 mb-4 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeader;
