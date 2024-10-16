import React from "react";

import OverlayNewsCard from "./OverlayNewsCard";

const OverlayNewsList = ({ newsList }) => {
  return (
    <div className="flex gap-5 lg:gap-8 items-center flex-col md:flex-row my-4">
      {newsList?.map((news) => (
        <OverlayNewsCard key={news?.title} news={news} />
      ))}
    </div>
  );
};

export default OverlayNewsList;
