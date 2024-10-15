import React from "react";
import data from "../data/topHeadline.json";
import VerticalNewsCard from "./VerticalNewsCard";

const VerticalNewsList = () => {
  let otherNews = data?.articles?.slice(12, 16);
  return (
    <div className="grid max-[480px]:grid-cols-1 max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
      {otherNews?.map((news) => (
        <VerticalNewsCard key={news?.title} news={news} />
      ))}
    </div>
  );
};

export default VerticalNewsList;
