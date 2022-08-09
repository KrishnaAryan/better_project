import React, { useState } from "react";
import Accordian from "../../assets/Accordian";
import "./ConceptContent.css";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const aboutContent = [
  {
    title: "What are Concept Houses",
    content: `Concept houses are conceptualized designs based on different themes. These concepts are idealistic designs for a perfect house and designed considering individual taste for a perfect and joyful life. With the pre-planned complete furniture layout, electrical & plumbing layouts, you get a sense of what the house would look like and to live in. Each and every inch of the house can be visualized by these concept houses and can be rearranged based on the personal needs.<br></br> 
        The concept houses are ready to execute design plans which reduces your overall construction time by omitting the design time and providing you with various house design options. 
        `,
  },
  {
    title: "What do you get in Concept House",
    content: `You get ready to construct designs with 2 iterations for any personal modifications. These concept houses come with the following line items for you to review:<br></br> 
        <li>2D Floor Plans</li>
        <li>Working Drawings</li>
        <li>Furniture Layout & Orientation</li>
        <li>Structural Plans</li>
        <li>Electrical Drawings</li>
        <li>Plumbing Drawings</li>
        <li>3D Elevation</li>
        <li>Elevation Working Drawings</li><br></br> 
        Note: - The copyright of the concept will always remain with the Company and the Architect. The company can modify or upgrade your plans as per need. 
        . 
        `,
  },
  {
    title: "Why Choose Concept House",
    content: `Design concepts are idealistic designs for everyone who is exploring to get their home constructed. These designs come in various themes, floors, plot area, super built-up area, creativity, and family needs. <br></br> 

        You can choose your perfect home based on needs or take recommendations from our design consultants who can guide you to choose it understanding your needs and vision. These concept house designs are made by expert architects who understand the science behind vastu and are dedicated to provide a Better living solution to everyone with a work-life balance. This also helps you come up with new ideas.
        `,
  },
];

const DisplayAbout = () => {
  const [active, setActive] = useState("");
  const { conceptHousingAbout } = useSelector(state => state.categoryData);

  const handleClick = () => {
    console.log("clicked");
    setActive(active === "" ? "active" : "");
  };

  return (
    <div className="concept-about-container">
      <Helmet>
        <meta
          name="description"
          content="With the new Concept Housing you can choose from multiple house designs and get your house construction done in Bangalore."
        />
        <title>House Construction and What is Concept Housing</title>
        <meta
          name="Keywords"
          content="House Construction Design, Architectural Designs, 2D Designs, 3D Designs,"
        />
      </Helmet>
      {conceptHousingAbout.map((item, index) => (
        <Accordian
          active={active}
          handleClick={handleClick}
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default DisplayAbout;
