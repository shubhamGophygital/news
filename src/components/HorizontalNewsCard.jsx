import React from "react";

const HorizontalNewsCard = ({ news }) => {
  const { urlToImage, source, title, content } = news;
  return (
    <>
      <div className="flex gap-2 sm:gap-4 mb-5">
        <div className="flex-[1.5] flex flex-col justify-evenly">
          <h4 className="heading-md line-clamp-2">{title}</h4>
          <p className="para-sm line-clamp-2 lg:line-clamp-3">{content}</p>
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
        <div className="flex-1">
          <img
            src={urlToImage}
            alt={title}
            className="w-full rounded-lg shadow-md object-cover aspect-[4/3]"
          />
        </div>
      </div>
      <hr className="divider last:hidden" />
    </>
  );
};

export default HorizontalNewsCard;
