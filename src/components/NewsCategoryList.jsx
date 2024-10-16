import React from "react";
import NewsCategoryCard from "./NewsCategoryCard";

const NewsCategoryList = ({ NewsCategoriesData }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {NewsCategoriesData?.map((newsCategory) => (
        <NewsCategoryCard
          newsCategory={newsCategory}
          key={newsCategory?.value}
        />
      ))}
    </div>
  );
};

export default NewsCategoryList;
