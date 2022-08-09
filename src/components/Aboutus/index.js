import React from "react";
import "./style.css";
import arc2 from "../../assets/whyusImages/arc2.png";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheck,
//   faCheckDouble,
//   faDesktop,
//   faHardHat,
//   faPaperPlane,
//   faPencilRuler,
//   faStopwatch,
//   faTasks,
//   faUserCheck,
//   faWallet,
// } from "@fortawesome/free-solid-svg-icons";

const Aboutus = ({ aboutUs }) => {
  // const size = "3x";
  return (
    <div className="aboutus-section">
      <div className="aboutus-wrapper">
        <div className="arc-wrap">
          <img className="arc" src={arc2} alt="arc" />
        </div>

        <h2>ABOUT US</h2>
        <p style={{ textAlign: "center" }}>{aboutUs}</p>
      </div>
    </div>
  );
};
export default Aboutus;

/* The Better Co is a home construction company which helps you build
          your dream home and do your home interiors on one platform. We have an
          experienced team consisting of Designers, Architects, Engineers,
          Experience management, Quality assurance, etc., to provide you with
          the best home construction possible within your budget. We supply you
          with the best service and leave no chance for disappointment. Quality
          and experience is our priority over everything else. Serving all
          client needs of building their dream home within their budget is our
          speciality. We envision providing people the power of design, track
          work progress, quality and regulate their budget to bring forth the
          home of their dreams into a tangible material via Product, Material,
          Financial and Technological innovations. Customer Satisfaction is our
          go-to motive. */
