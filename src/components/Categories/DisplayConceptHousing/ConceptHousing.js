import React, { useState } from "react";
import { Modal } from "../assets/Modal";
import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DisplayProjects from "../DisplayProjects";
import './DisplayConceptHousing.css';
import { Helmet } from "react-helmet";

import DisplayConceptHousing from "./DisplayConceptHousing";

const constructionNav = [
    {
        title: "Concepts",
        state: "concepts",
        to:'/concept-housing/concepts'
      },
  {
    title: "About",
    state: "about",
    to:'/concept-housing/about'
  },
  {
    title: "Process",
    state: "process",
    to:'/concept-housing/process'
  },
];

const ConceptHousing = ({ showInfo, onClose }) => {
  const [list, setList] = useState("concepts");

  return (
    <Modal
      open={showInfo}
      onClose={onClose}
      title="CONCEPT HOUSING"
      id="construction"
    >
      <div className="construction">
      <Helmet>
          <meta
          name="description"
          content="Our new venture of concept housing provides you house construction designs which are ready to go. The architectural designs are 2D designs and 3D designs."
          />
          <title>House Construction with a New Concept and Choice of Options</title>
          <meta
            name="Keywords"
            content="House Construction Design, Architectural Designs, 2D Designs, 3D Designs,"
          />
      </Helmet>
        <div className="construction-nav">
          {constructionNav.map((item, index) => (
            <NavLink className="navLink" to={item.to}>
              <div key={index} onClick={() => setList(`${item.state}`)} className={`construction-nav-item ${list === `${item.state}` ? "active-list" : "" }`} >
                  {item.title}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="disp-concept-content">
          <DisplayConceptHousing  list={list} />
        </div>
      </div>
      <div>{}</div>
    </Modal>
  );
};

export default ConceptHousing;