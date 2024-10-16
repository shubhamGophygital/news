import React from "react";
import AuthorCard from "./AuthorCard";
import HorizontalNewsList from "./HorizontalNewsList";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

const BannerNews = ({ bannerNews, newsList }) => {
  const { author, url, source, urlToImage, title } = bannerNews;

  const navigateToNews = () => {
    window.open(url, "_blank");
  };

  return (
    <section className="flex flex-col md:flex-row gap-10">
      <div className="flex-1 group cursor-pointer" onClick={navigateToNews}>
        <AuthorCard author={author} />
        <h2
          className="heading-2xl mt-3 mb-1 line-clamp-2 group-hover:underline"
          title={title}
        >
          {title}
        </h2>
        <p className="flex gap-1 items-center line-clamp-1">
          {!!source?.name && (
            <>
              <span className="heading-sm highlight">{source?.name}</span>
              {/* <span className="text-black">|</span> */}
            </>
          )}
          {/* <span className="time_ago">6 min ago</span> */}
        </p>
        <ImageWithPlaceholder
          src={urlToImage}
          alt={title}
          className="rounded-lg w-full mt-3 shadow-md object-cover aspect-[4/3]"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <HorizontalNewsList newsList={newsList} />
      </div>
    </section>
  );
};

export default BannerNews;
