import React from "react";
import { Avatar } from "react-lorem-ipsum";

const AuthorCard = ({ author }) => {
  return (
    <div className="flex items-center gap-2 overflow-hidden">
      <Avatar
        gender="all"
        className="rounded-lg"
        width="45"
        height="45"
        alt="Avatar"
        loading="lazy"
      />
      <div className="flex flex-col w-full">
        <p className="heading-sm line-clamp-2">{author || "Anonymous"}</p>
        <p className="para-sm">Author</p>
      </div>
    </div>
  );
};

export default AuthorCard;
