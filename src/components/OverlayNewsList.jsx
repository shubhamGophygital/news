import React from "react";
import data from "../data/topHeadline.json";
import OverlayNewsCard from "./OverlayNewsCard";

const OverlayNewsList = () => {
  let otherNews = data?.articles?.slice(9, 11);
  return (
    <div className="flex gap-5 lg:gap-8 items-center flex-col md:flex-row my-4">
      {otherNews?.map((news) => (
        <OverlayNewsCard key={news?.title} news={news} />
      ))}
    </div>
  );
};

export default OverlayNewsList;
