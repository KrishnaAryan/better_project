import React from "react";
import "./style.css";
// import BannerImg from "../../assets/banner1.jpg";

const Banner = () => {
  const dark = () => {
    return (
      document.documentElement.style.setProperty("--light-color", "#383d5e"),
      document.documentElement.style.setProperty("--dark-color", "#f6feff")
    );
  };
  const light = () => {
    return (
      document.documentElement.style.setProperty("--light-color", "#f6feff"),
      document.documentElement.style.setProperty("--dark-color", "#383d5e")
    );
  };
  //  --light-color: #f6feff;
  // --dark-color: #383d5e;
  // --color-palette-1: #3596B5;
  // --color-palette-2: #faa639;
  return (
    <div>
      <div className="section1">
        {/* <div className="sect1-intro">
        <img
          src={BannerImg}
          alt="banner"
          height="100px"
          width="800px"
          style={{ borderRadius: "24px" }}
        />
       
      </div> */}
        <div onClick={dark} className="sect1-payment">
          <span>Concept Housing</span>
        </div>
        <div className="sect1-payment between">
          <span>Get Consultation</span>
        </div>
        <div onClick={light} className="sect1-payment">
          <span>Budget Calculator</span>
        </div>
      </div>
      <div id="dummy"></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Banner;
