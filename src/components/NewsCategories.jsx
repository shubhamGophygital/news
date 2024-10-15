import React from "react";
import NewsCategoriesData from "../constants/NewsCategories";
import NewsCategoryCard from "./NewsCategoryCard";

const NewsCategories = () => {
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

export default NewsCategories;
