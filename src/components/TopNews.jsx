import React from "react";
import AuthorCard from "../components/AuthorCard";
import data from "../data/topHeadline.json";
import HorizontalNewsList from "../components/HorizontalNewsList";

const TopNews = () => {
  let latestNews = data?.articles?.[0];
  const { author, source, urlToImage, title } = latestNews;

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <AuthorCard author={author} />
          <h2 className="heading-2xl mt-3 mb-1">{title}</h2>
          <p className="flex gap-1 items-center line-clamp-1">
            {!!source?.name && (
              <>
                <span className="heading-sm highlight">{source?.name}</span>
                <span className="text-black">|</span>
              </>
            )}
            <span className="time_ago">6 min ago</span>
          </p>
          <img
            src={urlToImage}
            alt={title}
            className="rounded-lg w-full mt-3 shadow-md object-cover"
          />
        </div>
        <div className="flex-1">
          <HorizontalNewsList />
        </div>
      </div>
    </section>
  );
};

export default TopNews;
