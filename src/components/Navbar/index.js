import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import { Link as LinkR, NavLink } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { storeAuth } from "../../Redux/Actions";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
    const dispatch = useDispatch();
  
  useEffect(() => {
    // console.log('triggered');
    dispatch(storeAuth(Boolean(localStorage.getItem("clientID"))));
  }, [dispatch]);
  
  const auth = useSelector(state => state.auth);

  const handleScroll = useCallback(() => {
    setPrevScrollPos(document.body.getBoundingClientRect().top);
    setVisible(document.body.getBoundingClientRect().top > prevScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      className={`navbar-container`}
      // style={{ top: visible ? "0" : "-100px" }}
    >
      <div className="navbar">
        <div className="navbar-nav">
          <LinkS to="dummy" smooth={true} duration={500} className="footer-link">
            <LinkR to="/">
              <img src="https://i.ibb.co/HHn3V8j/logo.png" className="navbar-logo" alt="Better" />
            </LinkR>
          </LinkS>
        </div>

        {/* <div className="navbar-nav"></div> */}
        <div className="navbar-nav">
          {/* <FontAwesomeIcon icon={faSearch} size="2x" className="search-input" /> */}
          <LinkS to="dummy" smooth={true} duration={800} className="footer-link">
            <NavLink to={"/quote"}>
              <button className="btn blue" id="quoteBtn" >
                Get a Qoute
              </button>
            </NavLink>
          </LinkS>
          <NavLink to="/login">
            <button className="btn login" onClick={null}>
              {auth?"My Account":"Login"}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
// () => window.open("http://18.191.123.37/#/", "_blank")
export default Navbar;
