import React, { useEffect, useState } from "react";
import "./style.css";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
/* 
import Construction from "../../assets/construction.jpeg";
import Interior from "../../assets/interior.jpeg";
import Projects from "../../assets/projects.jpeg";
import Blog from "../../assets/blog.jpeg";
import pmc from "../../assets/pmc.jpeg";
import Testimonials from "../../assets/testimonials.jpeg"; */

const Categories = ({ betterCoCategories }) => {
  // console.log(betterCoCategories);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    betterCoCategories &&
      setCategories([
        {
          title: "Construction",
          image: betterCoCategories?.construction,
          to: "/construction",
        },
        {
          title: "Concept Housing",
          image: betterCoCategories?.conceptHousing,
          to: "/concept-housing",
        },
        {
          title: "Projects",
          image: betterCoCategories?.projects,
          to: "/projects",
        },
        {
          title: "Testimonials",
          image: betterCoCategories?.testimonials,
          to: "/testimonials",
        },
        {
          title: "Budget Calculator",
          image: betterCoCategories?.budgetCalculator,
          to: "/budget-calculator",
        },
        {
          title: "PMC",
          image: betterCoCategories?.PMC,
          to: "/pmc",
        },
      ]);
  }, [betterCoCategories]);
  return (
    <div className="categories-section" id="categories">
      <div className="categories">
        {categories.map(({ to, title, image: { name, url } }, index) => (
          <LinkS to="categories" smooth={true} duration={500} className="footer-link" key={index}>
            <LinkR to={to} className="catergories-link">
              <div
                className="categories-item"
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="categories-title">
                  <span>{title}</span>
                </div>
              </div>
            </LinkR>
          </LinkS>
        ))}
      </div>
    </div>
  );
};

export default Categories;
