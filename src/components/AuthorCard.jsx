import React from "react";
import { Avatar } from "react-lorem-ipsum";

const AuthorCard = ({ author }) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar
        gender="all"
        className="rounded-lg"
        width="45"
        height="45"
        alt="Avatar"
      />
      <div className="flex flex-col">
        <div className="heading-sm">{author || "Anonymous"}</div>
        <div className="para-sm">Author</div>
      </div>
    </div>
  );
};

export default AuthorCard;
