import React, { useState, useRef } from "react";
import Attibelle from "../../../assets/Attibelle.jpeg";
import ComingSoon from "../../../assets/ComingSoon.jpeg";
import Jigani from "../../../assets/Jigani.jpeg";
import Kanakapura from "../../../assets/Kanakapura.jpeg";
import Kengeri from "../../../assets/Kengeri.jpeg";
// import Kengeri2 from "../../../assets/Kengeri2.jpeg";
import KRPuram from "../../../assets/KRPuram.jpeg";
import Mandur from "../../../assets/Mandur.jpeg";
import Hennur from "../../../assets/Hennur.jpeg";
import Indiranagar from "../../../assets/Indiranagar.jpeg";
import Tumkur from "../../../assets/Tumkur.jpeg";
import { Modal } from "../assets/Modal";
import "./DisplayProject.css";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import ImgCarousel from "./ImgCarousel";
import HorizontalScroll from "../assets/Horizontal Scroll"

const projectData = [
  {
    image: Kengeri,
    location: "Kengeri",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 2 floors",
    SuperBUArea: "2880",
  },
  {
    image: Mandur,
    location: "Mandur",
    size: "30*50",
    pack: "Standard",
    elevation: "Ground",
    SuperBUArea: "1200",
  },
  {
    image: ComingSoon,
    location: "Mandur-2",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 1 floor",
    SuperBUArea: "1920",
  },
  {
    image: KRPuram,
    location: "KR Puram",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 1 floor",
    SuperBUArea: "1920",
  },
  {
    image: ComingSoon,
    location: "Nagnathpura",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 2 floors",
    SuperBUArea: "2880",
  },
  {
    image: Hennur,
    location: "Hennur",
    size: "30*19",
    pack: "Standard",
    elevation: "Ground + 1 floor",
    SuperBUArea: "912",
  },
  {
    image: ComingSoon,
    location: "Hennur-2",
    size: "53*44",
    pack: "Standard",
    elevation: "Ground + 1",
    SuperBUArea: "3731",
  },
  {
    image: Kanakapura,
    location: "Kanakapura",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 1 floor",
    SuperBUArea: "1920",
  },
  {
    image: Attibelle,
    location: "Attibelle",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground",
    SuperBUArea: "960",
  },
  {
    image: Jigani,
    location: "Jigani",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 1 floor",
    SuperBUArea: "1920",
  },
  {
    image: Tumkur,
    location: "Tumkuru",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 2 floors",
    SuperBUArea: "2880",
  },
  {
    image: ComingSoon,
    location: "Hulimavu",
    size: "17.6*40",
    pack: "Standard",
    elevation: "Ground + 2 floors",
    SuperBUArea: "1689",
  },
  {
    image: Indiranagar,
    location: "Indiranagar",
    size: "25*40",
    pack: "Standard",
    elevation: "Ground + 2 floors",
    SuperBUArea: "2400",
  },
  {
    image: ComingSoon,
    location: "Mallur",
    size: "30*40",
    pack: "Standard",
    elevation: "Ground + 1 floor",
    SuperBUArea: "1920",
  },
];

const DisplayProjects = ({ showInfo, onClose }) => {
  const slideRef = useRef();
  const projectsInnerContainer = useRef();
  const { displayProjects } = useSelector(state => state.categoryData);
  const [carousel, setCarousel] = useState([]);
  const [slide, setSlide] = useState(false);
  const name = useRef("");

  const location = location => {
    name.current = location;
  };

  const openSlide = () => {
    setSlide(prev => !prev);
  };

  const closeSlide = e => {
    if (slideRef.current === e.target) {
      openSlide();
    }
  };

  return (
    <Modal open={showInfo} onClose={onClose} title="PROJECTS">
      <div className="project-wrapper">
        <Helmet>
          <meta
            name="description"
            content="Check out our house construction projects across Bangalore and Ahmedabad for better understanding of house construction packages and plans."
          />
          <title>House Construction Projects in Bangalore by The Better Co</title>
          <meta
            name="Keywords"
            content="House Construction in Bangalore, House Construction in Ahmedabad,
            Home Construction"
          />
        </Helmet>
        {slide ? (
          <ImgCarousel closeSlide={closeSlide} name={name} slideRef={slideRef} carousel={carousel} />
        ) : null}
        <HorizontalScroll refElem={projectsInnerContainer} />
        <div className="horizontal-container" ref={projectsInnerContainer}>
          {displayProjects &&
            displayProjects.map((item, index) => (
              <div
                className="project-card"
                id="project-card"
                key={index}
                onClick={() => {
                  openSlide();
                  location(item.location);
                  setCarousel(item.carousel);
                }}
              >
                <div className="project-image" style={{ backgroundImage: `url(${item.image.url})` }}></div>
                <div className="card-text">
                  <h2>{item.location}</h2>
                  <p className="card-description"></p>
                </div>
                <div className="card-stat-stack">
                  <div className="card-stats">
                    <div className="stat">
                      <div className="value">{item.elevation}</div>
                      <div className="type">Plot Elevation</div>
                    </div>
                    <div className="stat border">
                      <div className="value">{item.SuperBUArea}</div>
                      <div className="type">Super Built-up Area</div>
                    </div>
                  </div>
                  <div className="card-stats">
                    <div className="stat">
                      <div className="value">{item.size}</div>
                      <div className="type">Plot Size</div>
                    </div>
                    <div className="stat border">
                      <div className="value">{item.pack}</div>
                      <div className="type">Package</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default DisplayProjects;
