import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../assets/icons/downArrow.svg";
import { throttle } from "lodash";

const ScrollToTopButton = () => {
  const MIN_SCROLL_TOP_TO_SHOW_BTN = 100;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const throttledScroll = useCallback(
    throttle(() => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > MIN_SCROLL_TOP_TO_SHOW_BTN) {
        setVisible(true);
      } else if (scrolled <= MIN_SCROLL_TOP_TO_SHOW_BTN) {
        setVisible(false);
      }
    }, 500),
    []
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Arrow
      className={`${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity ease-in-out duration-500 fixed bottom-2 right-2 w-8 h-8 p-[6px] rotate-180 cursor-pointer rounded-full bg-orange-600 stroke-black`}
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopButton;
