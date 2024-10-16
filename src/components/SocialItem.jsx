import React from "react";

const SocialItem = ({ icon, link }) => {
  return (
    <a href={link} target="_blank">
      <img
        src={require(`../assets/icons/${icon}.svg`)}
        alt={icon}
        className="w-6 hover:scale-110 transition duration-250 invert aspect-square"
        loading="lazy"
      />
    </a>
  );
};

export default SocialItem;
