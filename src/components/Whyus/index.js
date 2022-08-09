import React from "react";
import "./style.css";
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
/* import whyus1 from "../../assets/whyusImages/whyus1.webp";
import whyus2 from "../../assets/whyusImages/whyus2.webp";
import whyus3 from "../../assets/whyusImages/whyus3.webp";
import whyus4 from "../../assets/whyusImages/whyus4.webp"; */

import partnerLogo from "../../assets/partner-logo.webp";
import wall5 from "../../assets/whyusImages/wall5.png";

import dh from "../../assets/news-logos/dh.PNG";
import cw from "../../assets/news-logos/cw.png";
import dailyhunt from "../../assets/news-logos/dailyhunt.PNG";
import deccan from "../../assets/news-logos/deccan.PNG";
import et from "../../assets/news-logos/et.webp";
import fe from "../../assets/news-logos/fe.PNG";
import mb from "../../assets/news-logos/mb.png";
import tt from "../../assets/news-logos/tt.png";

const whyusList = [
  {
    title: "Payment Flexibility",
    content:
      "We understand the uncertain and fluctuating market and thus we do not want payment to be a hinderance towards achieving dreams so we have flexible payment options.",
    // icon: faStopwatch,
  },
  {
    title: "Quality Assurance",
    content:
      " Our experienced team with over 25+ years of collective experience can make sure and maintain the quality with different quality tests.",
    // icon: faCheckDouble,
  },
  {
    title: "In-House Execution Team",
    content:
      "We have in-house architects, engineers, designers and the entire experience and execution team to provide seamless execution.",
    // icon: faPencilRuler,
  },
  {
    title: "On-Time Delivery",
    content:
      " We understand the pain of delays. Thus we make sure we stay committed to our deadlines and deliver the project on time.",
    // icon: faCheck,
  },
  // {
  //   title: "Tech-Enabled",
  //   icon: faDesktop,
  // },
  // {
  //   title: "In-House Site Engineers",
  //   icon: faHardHat,
  // },
  // {
  //   title: "Dedicated Project Managers",
  //   icon: faTasks,
  // },
  // {
  //   title: "Dedicated Experience Team",
  //   icon: faUserCheck,
  // },
  // {
  //   title: "Seemless Execution",
  //   icon: faPaperPlane,
  // },
  // {
  //   title: "Flexible Payment",
  //   icon: faWallet,
  // },
];

const baseHost = "https://www.shadesstudio.in";
const relativeURL = "?utm_source=The%20Better%20Co&utm_medium=Website&utm_campaign=Partners";
const absoulteUrl = new URL(relativeURL, baseHost).href;

const Whyus = ({ whyUs, ourPartners, inTheNews }) => {
  // const size = "3x";
  return (
    <div className="whyus-section">
      <div className="whyus-wrapper">
        <h2>WHY US</h2>
        <div className="whyus-allitems">
          {whyUs &&
            whyUs.map(({ url, name, contentTitle, content }, i) =>
              i % 2 === 0 ? (
                <div className="whyus-item" key={i}>
                  <div className="item-icon">
                    <img src={url} alt={name} />
                    <div className="wall-wrap1 wall-close">
                      <img className="wall" src={wall5} alt="wall" />
                    </div>
                  </div>
                  <div className="item-content">
                    <span>{contentTitle}</span>
                    <p>{content}</p>
                  </div>
                </div>
              ) : (
                <div className="whyus-item" key={i}>
                  <div className="item-content">
                    <span>{contentTitle}</span>
                    <p>{content}</p>
                  </div>
                  <div className="item-icon">
                    <img src={url} alt={name} />
                    <div className="wall-wrap1 wall-close">
                      <img className="wall" src={wall5} alt="wall" />
                    </div>
                  </div>
                </div>
              )
            )}
          {/*           <div className="whyus-item">
            <div className="item-content">
              <span>{whyUs?.section2.contentTitle}</span>
              <p>{whyUs?.section2.content}</p>
            </div>
            <div className="item-icon">
              <img src={whyUs?.section2.url} alt={whyUs?.section2.name} />
              <div className="wall-wrap2 wall-close">
                <img className="wall flip" src={wall5} alt="wall" />
              </div>
            </div>
          </div>
          <div className="whyus-item">
            <div className="item-icon">
              <img src={whyUs?.section3.url} alt={whyUs?.section3.name} />
              <div className="wall-wrap3 wall-close">
                <img className="wall" src={wall5} alt="wall" />
              </div>
            </div>
            <div className="item-content">
              <span>{whyUs?.section3.contentTitle}</span>
              <p>{whyUs?.section3.content}</p>
            </div>
          </div>
          <div className="whyus-item">
            <div className="item-content">
              <span>{whyUs?.section4.contentTitle}</span>
              <p>{whyUs?.section4.content}</p>
            </div>
            <div className="item-icon">
              <img src={whyUs?.section4.url} alt={whyUs?.section4.name} />
              <div className="wall-wrap4 wall-close">
                <img className="wall flip" src={wall5} alt="wall" />
              </div>
            </div>
          </div> */}
        </div>
        <div className="partners">
          <h1>OUR PARTNERS</h1>
          <div className="partner-logo-wrap">
            {ourPartners &&
              ourPartners.map(({ redirectionUrl, imgUrl, imgName }, i) => {
                return (
                  <a
                    href={redirectionUrl}
                    target="_blank"
                    rel={"noopener noreferrer external"}
                    style={{ margin: "0px 25px" }}
                    key={i}
                  >
                    <img className="partner-img" src={imgUrl} alt={imgName} />
                  </a>
                );
              })}
          </div>
        </div>
        <div className="news">
          <h1>IN THE NEWS</h1>
          <div className="news-logo-wrap">
            {inTheNews &&
              inTheNews.map(({ redirectionUrl, imgName, imgUrl }, i) => {
                // console.log(inTheNews);
                return (
                  <a href={redirectionUrl} target="_blank" rel={"noopener noreferrer external"} key={i}>
                    <img className="news-img" src={imgUrl} alt={imgName} />
                  </a>
                );
              })}
            {/*             <a
              href={
                "https://www.deccanherald.com/city/top-bengaluru-stories/80-bengalureans-think-about-building-a-house-in-their-30s-survey-1008272.html"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img" src={dh} alt={"partner logo"} />
            </a>
            <a
              href={
                "https://m.dailyhunt.in/news/india/english/news+patrolling-epaper-newspatr/over+58+of+individuals+want+their+home-newsid-n297719894"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img" src={dailyhunt} alt={"partner logo"} />
            </a>
            <a
              href={
                "https://www.constructionweekonline.in/people/18581-over-58-of-individuals-want-their-home-to-be-constructed-within-3-months-the-better-cos-survey"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img" src={cw} alt={"partner logo"} />
            </a>
            <a
              href={
                "https://deccan.news/the-construction-company-the-better-co-will-set-up-office-in-hyderabad/"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img" src={deccan} alt={"partner logo"} />
            </a>
            <a
              href={
                "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/majority-of-it-workers-thinking-of-constructing-home-survey/articleshow/84404706.cms"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img" src={et} alt={"partner logo"} />
            </a>
            <a
              href={
                "https://www.financialexpress.com/money/prospective-homebuyers-looking-for-spacious-homes-want-home-construction-to-begin-soon-survey/2289958/"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img" src={fe} alt={"partner logo"} />
            </a>
            <a
              href={
                "https://content.magicbricks.com/property-news/industry-buzz/other-cities-industry-buzz/the-better-co-aims-to-foray-into-new-markets-unveils-plans-to-expand-into-ahmedabad-hyderabad-mysore-chennai-and-delhi-in-2021/122068.html"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img" src={mb} alt={"partner logo"} />
            </a>
            <a
              href={
                "https://telanganatoday.com/construction-firm-the-better-co-to-set-up-office-in-hyderabad"
              }
              target="_blank"
              rel={"noopener noreferrer external"}
            >
              <img className="news-img tt" src={tt} alt={"partner logo"} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whyus;
