import React from "react";
import AuthorCard from "./AuthorCard";

const VerticalNewsCard = ({ news }) => {
  const { urlToImage, source, title, author } = news;

  return (
    <>
      <div className="flex flex-col gap-4 mb-5">
        <div className="flex-1">
          <img
            src={urlToImage}
            alt={title}
            className="w-full rounded-lg shadow-md object-cover aspect-[4/3]"
          />
        </div>
        <div className="flex-[1.5] flex flex-col justify-evenly">
          <AuthorCard author={author} />
          <h4 className="heading-md line-clamp-2 mt-2 mb-1">{title}</h4>
          <p className="flex gap-1 items-center line-clamp-1">
            {!!source?.name && (
              <>
                <span className="heading-sm highlight">{source?.name}</span>{" "}
                <span className="text-black">| </span>
              </>
            )}
            <span className="time_ago">6 min ago</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default VerticalNewsCard;
