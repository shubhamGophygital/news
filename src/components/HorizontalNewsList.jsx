import React from "react";
import data from "../data/topHeadline.json";
import HorizontalNewsCard from "./HorizontalNewsCard";

const HorizontalNewsList = () => {
  let otherNews = data?.articles?.slice(5, 8);
  return (
    <>
      {otherNews?.map((news) => (
        <HorizontalNewsCard key={news?.title} news={news} />
      ))}
    </>
  );
};

export default HorizontalNewsList;
