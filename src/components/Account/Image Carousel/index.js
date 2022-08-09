import React, { useEffect, useState } from "react";
import MenuIcon from "../Menu Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, Thumbs } from "swiper";
import "./style.css";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.scss";

import { motion } from "framer-motion";

SwiperCore.use([Pagination, Navigation, Autoplay, Thumbs]);

const carouselVariantsLeft = {
  initial: { x: "0%" },
  move: {
    x: "-50%",
    transition: {
      duration: 40,
      repeat: Infinity,
      type: "tween",
      ease: "linear",
    },
  },
};

const carouselVariantsRight = {
  initial: { x: "-50%" },
  move: {
    x: "0%",
    transition: {
      duration: 40,
      repeat: Infinity,
      type: "tween",
      ease: "linear",
    },
  },
};

const ImageCarousel = ({ props, setDrawerState, bg }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    props = props.filter(chats => chats.type === "image/png" || chats.type === "image/jpeg");
    props = props.map(data => data.links[0]);
    // console.log(props);
    let arrGrp = [];
    let counter = 0;
    let times = (props.length / 3) % 1 === 0 ? props.length / 3 : parseInt(props.length / 3) + 1;
    // console.log(times);
    for (let i = 1; i <= 3; i++) {
      arrGrp.push(props.slice(counter, counter + times));
      // console.log(arr.slice(counter, counter + times));
      counter += times;
    }
    // console.log(arrGrp);
    setImages(arrGrp);
    // props.slice(0,4)
  }, [props]);

  return (
    <div className="image-gallery">
      <section>
        <MenuIcon setDrawerState={setDrawerState} color="var(--light-color)" />
        <h2>Gallery</h2>
      </section>
      <section className="carousel-container">
        <motion.div
          className="carousel-inner-container"
          variants={carouselVariantsLeft}
          // initial="initial"
          animate="move"
        >
          {images[0]&&images[0].map(({ link, name }, i) => (
            <img src={link} alt={name} key={i} className="carousel-images" />
          ))}
          {images[0]&&images[0].map(({ link, name }, i) => (
            <img src={link} alt={name} key={i} className="carousel-images" />
          ))}
        </motion.div>
        <motion.div
          className="carousel-inner-container"
          variants={carouselVariantsRight}
          initial="initial"
          animate="move"
        >
          {images[1]&&images[1].map(({ link, name }, i) => (
            <img src={link} alt={name} key={i} className="carousel-images" />
          ))}
          {images[1]&&images[1].map(({ link, name }, i) => (
            <img src={link} alt={name} key={i} className="carousel-images" />
          ))}
        </motion.div>
        <motion.div
          className="carousel-inner-container"
          variants={carouselVariantsLeft}
          // initial="initial"
          animate="move"
        >
          {images[2]&&images[2].map(({ link, name }, i) => (
            <img src={link} alt={name} key={i} className="carousel-images" />
          ))}
          {images[2]&&images[2].map(({ link, name }, i) => (
            <img src={link} alt={name} key={i} className="carousel-images" />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ImageCarousel;
