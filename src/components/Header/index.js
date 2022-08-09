import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";
import { Link as LinkR } from "react-router-dom";

const baseHost = 'https://blog.thebetterconstruction.com/';
const absoulteUrl = new URL(baseHost).href

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-wrapper">
        {/* <div className="header"> */}
        <div className="header-info">
          <span>TECH BETTER SERVICES PVT LTD</span>
        </div>

        <div className="header-tel">
          <span>
            <a href="tel:+919980509797" className="header-link">
              <FontAwesomeIcon icon={faPhoneAlt} size="sm" /> +91-9980509797
            </a>
          </span>
          <span>
              <LinkR to='/blog'>

                <span>Blog</span>

              </LinkR>
          </span>
        </div>
        <div className="header-social">
          <a
            href="https://www.facebook.com/thebetterco.online/"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="sm" />
          </a>
          <a
            href="https://www.instagram.com/thebetterco.online/"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
          <a
            href="https://in.linkedin.com/company/the-better-co"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="sm" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCAQySyjwX6fLVIn3lO6XHLw"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="sm" />
          </a>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;

// <a
// className="blog-link"
// href={absoulteUrl}
// target="_self"
// rel={'noopener noreferrer external'}
// >
// </a>
