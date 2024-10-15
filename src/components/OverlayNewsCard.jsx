import React from "react";

const OverlayNewsCard = ({ news }) => {
  const { urlToImage, title, content } = news;
  return (
    <div
      className={`relative aspect-video w-full flex items-end justify-start text-left bg-cover bg-center flex-1 rounded-lg overflow-hidden shadow-md`}
      style={{ backgroundImage: `url(${urlToImage})` }}
    >
      <div className="absolute top-0 mt-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
      <main className="p-5 z-10">
        <h4 className="heading-md text-white line-clamp-2">{title}</h4>
        <p className="para-sm text-gray-400 line-clamp-2 lg:line-clamp-2 mt-2">
          {content}
        </p>
      </main>
    </div>
  );
};

export default OverlayNewsCard;
