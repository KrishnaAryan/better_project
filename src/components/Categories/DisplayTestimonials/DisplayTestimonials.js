import React, { useRef } from "react";
import Reviews from "./Reviews";
import { Modal } from "../assets/Modal";
import "./DisplayTestimonials.css";
import { Helmet } from "react-helmet";
import { logDOM } from "@testing-library/dom";
import HorizontalScroll from "../assets/Horizontal Scroll";

const testimonialsData = [
  {
    id: 1,
    title: "Mr. Mithlesh's Better Experience",
    src: "https://www.youtube.com/embed/z6uq5EPVkEw",
  },
  {
    id: 2,
    title: "Mr. Rakesh's Better Experience",
    src: "https://www.youtube.com/embed/yVbhwZTnXEY",
  },
  {
    id: 3,
    title: "Mr. Ravi's Better Experience",
    src: "https://www.youtube.com/embed/G81qoWxldyw",
  },
];

const DisplayTestimonials = ({ showInfo, onClose, testimonials, testimonialsVideo }) => {
  const testimonialInnerContainer = useRef();

  return (
    <Modal open={showInfo} onClose={onClose} title="TESTIMONIALS">
      <div className="testimonial-wrapper">
        <Helmet>
          <meta
            name="description"
            content="We are the Better choice for house construction. Read the reviews and testimonials by our clients on our website for better understanding."
          />
          <title>House Construction Testimonials and Reviews in Bangalore</title>
          <meta name="Keywords" content="House Construction, Testimonials, Reviews, Construction Companies" />
        </Helmet>
        <div className="container">
          {/* <div class="testimonial-btns"> */}
          <HorizontalScroll refElem={testimonialInnerContainer} />
          {/* </div> */}
          <div className="horizontal-container" ref={testimonialInnerContainer}>
            {testimonialsVideo &&
              testimonialsVideo.map((item, index) => (
                <div className="video-card" key={index}>
                  <iframe
                    className="video"
                    width="445"
                    height="250"
                    src={item.url}
                    title="YouTube video player"
                    npm
                    start
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
          </div>
        </div>
        <Reviews testimonials={testimonials} />
      </div>
    </Modal>
  );
};

export default DisplayTestimonials;
