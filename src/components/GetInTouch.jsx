import React from "react";
import SocialBox from "./SocialBox";

const GetInTouch = () => {
  return (
    <div>
      <h4 className="text-lg mb-2">Get in touch</h4>
      <div className="mb-2">
        <SocialBox />
      </div>
      <p>
        Mobile: <a href="tel:+919004409190">9004409190</a>
      </p>
      <p>
        Email:
        <a href="mailto:salunkheshubham0@gmail.com">
          salunkheshubham0@gmail.com
        </a>
      </p>
    </div>
  );
};

export default GetInTouch;
