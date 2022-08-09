import React from "react";
import "./style.css";
import Offer1 from "../../assets/offer1.png";
// import Offer2 from "../../assets/offer2.png";
import Offer3 from "../../assets/offer3.png";

const offerCards = [
  {
    src: Offer1,
    alt: "Offer1",
  },
  {
    src: Offer3,
    alt: "Offer3",
  },
];

const OfferSection = () => {
  return (
    <div className="offer-section">
      <div className="offer-wrapper">
        <h1 className="offer-header">OFFERS & CONTESTS</h1>
        <div className="offer-items">
          {offerCards.map((item, index) => (
            <div className="offer-card" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                style={{ borderRadius: "24px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
