import React, { useState, useRef } from "react";
import "./Accordian.css";
import Chevron from "./Chevron";

const Accordian = ({ title, content, handleClick, active }) => {
  // const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordian-icon");

  const contentRef = useRef(null);

  const toggleAccordian = () => {
    // setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setRotate(active === "active" ? "accordian-icon" : "accordian-icon rotate");
  };

  return (
    <div className="accodian-section">
      <button className={`accordian ${active}`} onClick={() => {toggleAccordian(); handleClick()}}>
        <Chevron className={`${rotate}`} width={10} fill={"black"} />
        <p className="accordian-title">{title}</p>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="accordian-content"
      >
        <div
          className="accordian-text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Accordian;
