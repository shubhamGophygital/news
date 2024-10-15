import React from "react";

const NewsCategoryCard = ({ newsCategory }) => {
  return (
    <h4 className="heading-lg grid place-items-center rounded-lg w-full bg-orange-500 flex-1 px-0 py-10 hover:underline underline-offset-4 decoration-2 cursor-pointer text-center">
      {newsCategory?.label}
    </h4>
  );
};

export default NewsCategoryCard;
