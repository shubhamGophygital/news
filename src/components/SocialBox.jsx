import React from "react";
import SocialItem from "./SocialItem";

const SocialBox = () => {
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
      link: "https://github.com/shubhamsalunkhe16",
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

export default SocialBox;
