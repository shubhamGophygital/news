import React from "react";

const NewsSourceCard = ({ newsSource }) => {
  const redirectToSource = () => {
    window.open(newsSource?.url, "_blank");
  };

  return (
    <div
      className="grid place-items-center rounded-lg bg-orange-600 flex-1 px-1 py-10 cursor-pointer group"
      onClick={redirectToSource}
    >
      <h4 className="heading-lg text-ellipsis text-center group-hover:underline underline-offset-4 decoration-2">
        {newsSource?.name}
      </h4>
      {newsSource?.category && (
        <h3 className="heading-md text-ellipsis">
          ({newsSource?.category} - {newsSource?.country} -{" "}
          {newsSource?.language})
        </h3>
      )}
    </div>
  );
};

export default NewsSourceCard;
