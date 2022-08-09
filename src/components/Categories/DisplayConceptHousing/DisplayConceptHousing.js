import React, { useState, useEffect } from "react";
import { Modal } from "../assets/Modal";
import "./DisplayConceptHousing.css";
import Carousel from "react-elastic-carousel";
import { Link as LinkS } from "react-scroll";
import DisplayAbout from "./conceptHousingContent/DisplayAbout";
import DisplayConceptProcess from "./conceptHousingContent/DisplayConceptProcess";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import golden1 from "../../../assets/golden (1).webp";
import golden2 from "../../../assets/golden (2).webp";
import golden3 from "../../../assets/golden (3).webp";
import sapphire1 from "../../../assets/sapphire (1).webp";
import sapphire2 from "../../../assets/sapphire (2).webp";
import sapphire3 from "../../../assets/sapphire (3).webp";

const content = [
  {
    name: "The Golden Orchard",
    floor: "G+2",
    bhk: "3 BHK",
    price: "55L onwards",
    buarea: "2890",
    area: "30x40",
    facing: "North",
    theme: "Timeless",
    description:
      "A well-planned spacious house with and natural ventilation that will make your home, a staycation. 1 BHK on the ground floor along with a spacious entertainment area, kitchen, and a lotus pond. 2 BHK on the 1st floor with an additional kitchen. 1 big room with attached bathroom, mini home theatre, a terrace garden with a fountain on the 2nd floor.",
    image: golden1,
  },
  {
    name: "The Sapphire",
    floor: "G+1",
    bhk: "3 BHK",
    price: "45L onwards",
    buarea: "1975",
    area: "30x40",
    facing: "West",
    theme: "Modern",
    description:
      "Cosy house design suited for a nuclear family. 1 BHK on the ground floor along with a spacious entertainment area and large kitchen. 2 BHK on the 1st floor along with a spacious balcony.",
    image: sapphire1,
  },
];

const images = [
  {
    name: "The Golden Orchard",
    image: golden1,
  },
  {
    name: "The Golden Orchard",
    image: golden2,
  },
  {
    name: "The Golden Orchard",
    image: golden3,
  },
  {
    name: "The Sapphire",
    image: sapphire1,
  },
  {
    name: "The Sapphire",
    image: sapphire2,
  },
  {
    name: "The Sapphire",
    image: sapphire3,
  },
];

const DisplayConceptHousing = ({ list }) => {
  const [concept, setConcept] = useState({
    name: "",
    number: "",
    email: "",
    cname: "The Golden Orchard",
  });

  const [btn, setBtn] = useState(false);
  const conceptHousing = useSelector(state => state.categoryData.conceptHousing);

  const expand = () => {
    // let img = document.getElementById("reel-img");
    // let img2 = document.getElementById("reel-img2");
    let wrap = document.getElementById("concept-wrap");
    let content = document.getElementById("concept-content");
    let reel = document.getElementById("concept-reel");
    reel.classList.remove("reel-expand"); // reduce height of thumbnail container
    // img.classList.remove("img-expand");
    // img2.classList.remove("img-expand2");
    wrap.classList.remove("init"); //height of container
    content.classList.remove("content-none"); //animation
    document.querySelectorAll(".concept-reel .img-expand").forEach(n => n.classList.remove("img-expand"));
  };

  /*   const name = cont => {
    setConcept({ ...concept, cname: cont });
  }; */

  const openForm = () => {
    document.getElementById("concept-form-wrap").classList.add("form-wrap-show");
    axios
      .post("https://better-co.herokuapp.com/concept-housing", concept)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  const closeForm = () => {
    document.getElementById("concept-form-wrap").classList.remove("form-wrap-show");
    document.getElementById("concept-form-wrap").classList.add("concept-form-wrap");
  };

  function submitForm(e) {
    e.preventDefault();
    closeForm();
    setBtn(prev => !prev);
    axios
      .post("https://better-co.herokuapp.com/concept-housing", concept)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  // https://better-landing.herokuapp.com/concept-housing
  // useEffect(() => {
  //   axios.post('http://localhost:3000/concept-housing', concept)
  //   .then(response => {
  //       console.log(response)
  // }).catch(error => {
  //       console.log(error.response)
  // })
  // },[btn])

  //   <LinkS
  //   to={"dummy2"}
  //   smooth={true}
  //   duration={800}
  // >
  // </LinkS>
  if (list === "concepts") {
    return (
      <div className="concept-wrap init" id="concept-wrap">
        <Helmet>
          <meta
            name="description"
            content="Concept housing provides you house construction designs which are ready to go. The architectural 2D & 3D designs allow you to choose from multiple options."
          />
          <title>House Construction with Multiple Choice of House Designs</title>
          <meta
            name="Keywords"
            content="House Construction Design, Architectural Designs, 2D Designs, 3D Designs,"
          />
        </Helmet>
        <div className="concept-container">
          <div className="concept-reel reel-expand" id="concept-reel">
            {conceptHousing &&
              conceptHousing.map(({ images, name }, i) => (
                <img
                  key={i}
                  onClick={() => {
                    setConcept({ ...concept, cname: name });
                    expand();
                  }}
                  id="reel-img"
                  className="reel-img img-expand"
                  src={images[0].url}
                  alt={images[0].name}
                />
              ))}
            {/*             <img
              onClick={() => {
                name("The Sapphire");
                expand();
              }}
              id="reel-img2"
              className="reel-img2 img-expand2"
              src={content[1].image}
              alt="golden"
            /> */}
          </div>
          <div className="concept-content content-none" id="concept-content">
            <div className="concept-info-container">
              <div className="concept-carousel">
                <Carousel
                  style={{ position: "absolute", height: "100%", width: "160%", left: "-190px", top: "0px" }}
                >
                  {conceptHousing &&
                    conceptHousing.map(data => {
                      if (concept.cname === data.name) {
                        return data.images.map((data, i) => (
                          <img className="concept-img" src={data.url} alt={data.name} key={i} />
                        ));
                      }
                    })}
                </Carousel>
              </div>
              <div className="concept-carousel2">
                {conceptHousing &&
                  conceptHousing.map(data => {
                    if (concept.cname === data.name) {
                      return data.images.map((data, i) => (
                        <img className="concept-img" src={data.url} alt={data.name} key={i} />
                      ));
                    }
                  })}
              </div>
              {conceptHousing &&
                conceptHousing.map((item, i) => {
                  if (concept.cname === item.name) {
                    return (
                      <div className="concept-info-wrap" key={i}>
                        <div className="info-card">
                          <div className="items-main">{item.name}</div>
                        </div>
                        <div className="info-card">
                          <div className="items">{item.floor} floors</div>
                          <div className="items">{item.bhk}</div>
                          <div className="items">{item.facing} facing</div>
                        </div>
                        <div className="info-card">
                          <div className="items-main">{item.price}</div>
                        </div>
                        <div className="info-card">
                          <div className="items">{item.area}</div>
                          <div className="items">{item.buarea} sqft.</div>
                          <div className="items">{item.theme} Theme</div>
                        </div>
                        <div className="info-card">
                          <div className="desc">{item.description}</div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
          <div className="concept-button-wrap">
            <button onClick={openForm} className="concept-btn">
              REQUEST CALLBACK
            </button>
          </div>

          <div className="concept-form-wrap" id="concept-form-wrap">
            <svg
              onClick={closeForm}
              xmlns="http://www.w3.org/2000/svg"
              class="exit"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div className="concept-cont1">
              <form
                onSubmit={e => {
                  submitForm(e);
                }}
                className="concept-form"
              >
                <div className="wrap-cont1">
                  <input
                    className="input-cont1"
                    type="text"
                    name="name"
                    placeholder="Name*"
                    onChange={e => setConcept({ ...concept, [e.target.name]: e.target.value })}
                    required
                  ></input>
                </div>

                <div className="wrap-cont1">
                  <input
                    className="input-cont1"
                    type="text"
                    name="number"
                    pattern="[7-9]{1}[0-9]{9}"
                    placeholder="Number*"
                    onChange={e => setConcept({ ...concept, [e.target.name]: e.target.value })}
                    required
                  ></input>
                </div>

                <div className="wrap-cont1">
                  <input
                    className="input-cont1"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    onChange={e => setConcept({ ...concept, [e.target.name]: e.target.value })}
                    required
                  ></input>
                </div>

                <div className="lead-btn-wrap" id="lead-btn-wrap" type="submit" name="button">
                  <button className="lead-btn" type="submit" name="button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (list === "about") {
    return (
      <div>
        <DisplayAbout />
      </div>
    );
  } else if (list === "process") {
    return (
      <div>
        <DisplayConceptProcess />
      </div>
    );
  }
};

export default DisplayConceptHousing;
