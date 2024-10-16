import React from "react";
import { useNavigate } from "react-router-dom";
import navConstants from "../constants/navStrings";

const NewsCategoryCard = ({ newsCategory }) => {
  const navigate = useNavigate();

  const redirectToNewsCategory = () => {
    navigate(`${navConstants.CATEGORIES}/${newsCategory?.value}`);
  };

  return (
    <h4
      className="heading-lg grid place-items-center rounded-lg w-full bg-orange-600 flex-1 px-0 py-10 hover:underline underline-offset-4 decoration-2 cursor-pointer text-center"
      onClick={redirectToNewsCategory}
    >
      {newsCategory?.label}
    </h4>
  );
};

export default NewsCategoryCard;
