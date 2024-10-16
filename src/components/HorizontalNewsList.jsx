import React from "react";
import data from "../data/topHeadline.json";
import HorizontalNewsCard from "./HorizontalNewsCard";

const HorizontalNewsList = ({ newsList }) => {
  return (
    <>
      {newsList?.map((news) => (
        <HorizontalNewsCard key={news?.title} news={news} />
      ))}
    </>
  );
};

export default HorizontalNewsList;
