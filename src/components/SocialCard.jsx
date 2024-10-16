import React from "react";
import SocialItem from "./SocialItem";

const SocialCard = () => {
  const socialMeta = [
    {
      icon: "github",
      link: "https://github.com/shubhamsalunkhe16",
    },
    {
      icon: "whatsapp",
      link: "https://wa.me/+919004409190",
    },
    {
      icon: "instagram",
      link: "https://github.com/shubhamsalunkhe16",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/shubham-b-salunkhe",
    },
  ];

  return (
    <>
      <section className="flex gap-2 items-center">
        {socialMeta.map((data) => (
          <SocialItem {...data} key={data?.icon} />
        ))}
      </section>
    </>
  );
};

export default SocialCard;
