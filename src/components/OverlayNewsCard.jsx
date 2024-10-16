import React from "react";

const OverlayNewsCard = ({ news }) => {
  const { urlToImage, url, title, content } = news;

  const navigateToNews = () => {
    window.open(url, "_blank");
  };

  return (
    <section
      className={`relative aspect-video w-full flex items-end justify-start text-left bg-cover bg-center flex-1 rounded-lg overflow-hidden shadow-md my-2 group cursor-pointer`}
      style={{ backgroundImage: `url(${urlToImage})` }}
      onClick={navigateToNews}
    >
      <div className="absolute top-0 mt-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
      <main className="p-5 z-10">
        <h4 className="heading-md text-white line-clamp-2 group-hover:underline">
          {title}
        </h4>
        <p className="para-sm text-gray-400 line-clamp-2 lg:line-clamp-2 mt-2">
          {content}
        </p>
      </main>
    </section>
  );
};

export default OverlayNewsCard;
