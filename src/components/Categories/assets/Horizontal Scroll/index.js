import React from "react";
import "./styles.css";
import Chevron from "../Chevron";

const index = ({ refElem, style }) => {
  const leftBtn = () => {
    refElem.current.scrollLeft -= refElem.current.offsetWidth;
  };

  const rightBtn = () => {
    refElem.current.scrollLeft += refElem.current.offsetWidth;
  };
  return (
    <>
      <div className="testimonials-left" onClick={leftBtn} style={style}>
        <Chevron fill={"white"} className="listaccordian-icon rotate180" />
      </div>
      <div className="testimonials-right" onClick={rightBtn} style={style}>
        <Chevron fill={"white"} className="listaccordian-icon rotate90 " />
      </div>
    </>
  );
};

export default index;
