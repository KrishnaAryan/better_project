import React, { useRef } from "react";
import "./style.css";
import HorizontalScroll from "../../assets/Horizontal Scroll";

const reviewItem = [
  {
    qoute:
      "Exceeded my expectations. Client service is on top priority. Quality of materials, best workmanship, value driven output. Many thanks to Karthik Gowda, Fahim Alam and Hussain. They put a lot of efforts.",
    author: "Mithilesh Singh",
    dp: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute: "Excellent service. The team is very proactive and supportive.",
    author: "Veena R",
    dp: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute:
      "Getting my home construction done by Better Co. It has been a wonderful experience till now. They follow the schedule even during the pandemic. Very well planned and professional. Good quality materials used and value for money. Really appreciate and I recommend them for whoever is planning to construct.",
    author: "Maheshwari Selvakumar",
    dp: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
  {
    qoute:
      "My home construction is in process.It has been a wonderful experience till now. The architectural & structural design team is very professional. The work is in progress even during this pandamic and the team is always on top to listen to the inputs and get it incorporated.Great customer experience. Thanks to Mr Amit, Mr Karthik & team.",
    author: "Mohammed Yacoob Tabrez",
    dp: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Bangalore",
  },
];

const Reviews = ({ testimonials }) => {
  const reviewInnerContainer = useRef();

  return (
    <div className="review-wrapper">
      <div className="category-heading">
        <span>REVIEWS</span>
      </div>
      <div className="container">
        <HorizontalScroll refElem={reviewInnerContainer}  style={{ top: "30%" }} />
        <div className="review" ref={reviewInnerContainer}>
          {testimonials &&
            testimonials.map((item, index) => (
              <figure className="snip1192" key={index}>
                <blockquote>{item.qoute}</blockquote>
                <div className="author">
                  <img src={item.authorDp.url} alt={item.authorDp.name} />
                  <h5>
                    {item.author}
                    <span>{item.location}</span>
                  </h5>
                </div>
              </figure>
            ))}
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Reviews;
