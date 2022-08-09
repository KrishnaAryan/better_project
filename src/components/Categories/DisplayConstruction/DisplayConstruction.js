import React, { useState } from "react";
import "./DisplayConstruction.css";
import { Modal } from "../assets/Modal";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DisplayProjects from "../DisplayProjects";

import ConstructionInfo from "./ConstructionInfo";

const constructionNav = [
  {
    title: "Packages",
    state: "packages",
    to:'/construction/packages'
  },
  {
    title: "Process",
    state: "process",
    to:'/construction/process'
  },
];

const DisplayConstruction = ({ showInfo, onClose }) => {
  const [list, setList] = useState("packages");
  // const [showInfo, setShowInfo] = useState("");

  return (
    <Modal
      open={showInfo}
      onClose={onClose}
      title="CONSTRUCTION"
      id="construction"
    >
      <div className="construction">
      <Helmet>
          <meta
          name="description"
          content="We are house construction contractors with most affordable construction cost in Bangalore. We have experienced engineers and architects in Bangalore."
          />
          <title>House Construction Services in Bangalore at Afforable Rates</title>
          <meta
            name="Keywords"
            content="House Construction, Architects in Bangalore, Construction Contractors, Construction Companies"
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
        <div className="construction-content">
          <ConstructionInfo list={list} />
        </div>
      </div>
      <div>{}</div>
    </Modal>
  );
};

export default DisplayConstruction;
