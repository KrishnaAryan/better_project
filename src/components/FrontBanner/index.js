import React, { useState, useRef, useEffect } from "react";
import "./style.css";

// import { IoArrowForward, IoArrowBack } from "react-icons/io5";

// import ImageOne from "../../assets/construction-1.png";
import ImageTwo from "../../assets/big building day-website.jpeg";

const sliderData = [
  {
    image: ImageTwo,
    alt: "House",
  },
];

const FrontBanner = ({ frontBanner }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const timeout = useRef(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 6000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <div className="pre-wrap">
      <div className="hero-section-wrapper">
        <section className="hero-section" id="dummy1">
          <div className="hero-wrapper">
            <img
              className="hero-image"
              src={windowSize < 480 ? frontBanner?.frontBannerS?.url : frontBanner?.frontBannerL?.url}
              alt={windowSize < 480 ? frontBanner?.frontBannerS?.name : frontBanner?.frontBannerL?.name}
            ></img>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrontBanner;
