import React, { useState, useEffect } from "react";
import "./LeadGen.css";
import { motion } from "framer-motion";
import arc2 from "../../assets/whyusImages/arc2.png";
import { Link as LinkS } from "react-scroll";
import {useHistory} from "react-router-dom"
import axios from "axios";
// https://better-co.herokuapp.com
// http://localhost:3001

const LeadGen = () => {
  const [quote, setQuote] = useState({
    name: "",
    number: "",
    email: "",
    location: "",
    floors: "",
    time: "",
    size: "",
    direction: "",
    parking: "",
    budget: "",
    length: "",
    breadth: "",
  });

  const history = useHistory();

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const moveLeft = () => {
    window.location.reload();
  };

  const moveRight = e => {
    e.preventDefault();
    const cont1 = document.getElementById("lead-container-one");
    const cont2 = document.getElementById("lead-container-two");
    cont1.classList.add("active1");
    cont2.classList.add("active2");
    // const btn = document.getElementById('lead-btn-wrap')
    // btn.style.opacity = '0'
  };

  const moveLeftthree = () => {
    const cont2 = document.getElementById("lead-container-two");
    const cont3 = document.getElementById("lead-container-three");
    cont2.classList.remove("active2");
    cont2.classList.add("active2");
    cont3.classList.add("active3");
  };

  const moveCardthree = e => {
    e.preventDefault();
    setQuote({ ...quote, [e.target.name]: e.target.innerText });
    const cont2 = document.getElementById("lead-container-two");
    const cont3 = document.getElementById("lead-container-three");
    cont2.classList.remove("active2");
    cont2.classList.add("active1");
    cont3.classList.remove("active3");
    cont3.classList.add("active2");
  };

  const moveLeftfour = () => {
    const cont3 = document.getElementById("lead-container-three");
    const cont4 = document.getElementById("lead-container-four");
    cont3.classList.remove("active2");
    cont3.classList.add("active2");
    cont4.classList.add("active3");
  };

  const moveCardfour = e => {
    e.preventDefault();
    setQuote({ ...quote, [e.target.name]: e.target.innerText });
    const cont3 = document.getElementById("lead-container-three");
    const cont4 = document.getElementById("lead-container-four");
    cont3.classList.remove("active2");
    cont3.classList.add("active1");
    cont4.classList.remove("active3");
    cont4.classList.add("active2");
  };

  const moveLeftfive = () => {
    const cont4 = document.getElementById("lead-container-four");
    const cont5 = document.getElementById("lead-container-five");
    cont4.classList.remove("active2");
    cont4.classList.add("active2");
    cont5.classList.add("active3");
  };

  const moveCardfive = e => {
    e.preventDefault();
    setQuote({ ...quote, [e.target.name]: e.target.innerText });
    const cont4 = document.getElementById("lead-container-four");
    const cont5 = document.getElementById("lead-container-five");
    cont4.classList.remove("active2");
    cont4.classList.add("active1");
    cont5.classList.remove("active3");
    cont5.classList.add("active2");
  };

  const moveLeftsix = () => {
    const cont5 = document.getElementById("lead-container-five");
    const cont6 = document.getElementById("lead-container-six");
    cont5.classList.remove("active2");
    cont5.classList.add("active2");
    cont6.classList.add("active3");
  };

  const moveCardsix = e => {
    e.preventDefault();
    setQuote({ ...quote, [e.target.name]: e.target.innerText });
    const cont5 = document.getElementById("lead-container-five");
    const cont6 = document.getElementById("lead-container-six");
    cont5.classList.remove("active2");
    cont5.classList.add("active1");
    cont6.classList.remove("active3");
    cont6.classList.add("active2");
  };

  const moveLeftseven = () => {
    const cont6 = document.getElementById("lead-container-six");
    const cont7 = document.getElementById("lead-container-seven");
    cont6.classList.remove("active2");
    cont6.classList.add("active2");
    cont7.classList.add("active3");
  };

  const moveCardseven = e => {
    e.preventDefault();
    setQuote({ ...quote, [e.target.name]: e.target.innerText });
    const cont6 = document.getElementById("lead-container-six");
    const cont7 = document.getElementById("lead-container-seven");
    cont6.classList.remove("active2");
    cont6.classList.add("active1");
    cont7.classList.remove("active3");
    cont7.classList.add("active2");
  };

  const moveLefteight = () => {
    const cont7 = document.getElementById("lead-container-seven");
    const cont8 = document.getElementById("lead-container-eight");
    cont7.classList.remove("active2");
    cont7.classList.add("active2");
    cont8.classList.add("active3");
  };

  const moveCardeight = e => {
    e.preventDefault();
    setQuote({ ...quote, [e.target.name]: e.target.innerText });
/*     const cont7 = document.getElementById("lead-container-seven");
    const cont8 = document.getElementById("lead-container-eight");
    cont7.classList.remove("active2");
    cont7.classList.add("active1");
    cont8.classList.remove("active3");
    cont8.classList.add("active2"); */
    history.push("/thankyou")
  };

  function submitForm(e) {
    e.preventDefault();
    // window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lead", "gtm.elementId": "nextButton", "gtm.element": "leadButton" });
    moveRight(e);
    e.target.reset();
  }

  // const clearState = () => {
  //     setQuote({
  //         name: '',
  //         number: '',
  //         email: '',
  //         location: '',
  //         floors: '',
  //         time: '',
  //         size: '',
  //         direction: '',
  //         parking: '',
  //         budget: '',
  //         length: '',
  //         breadth: '',
  //     })
  // }

  useEffect(() => {
    quote.name &&
      axios
        .post("https://better-co.herokuapp.com/quote", quote)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
  }, [quote]);

  return (
    <div className="lead-wrap">
      <img className="lead-img" src={arc2} alt="arc" />
      <div className="motion-wrap">
        <div className="lead-container-one" id="lead-container-one">
          <motion.h1
            initial={{ top: -150 }}
            animate={{ top: -30 }}
            transition={{ duration: 1 }}
            className="header-cont1"
          >
            We would love to assist you in making your dream home a reality.<br></br> Just let us know your
            details and a few preferences of your so our representatives can get in touch with you.
          </motion.h1>
          <motion.h1
            initial={{ top: -300 }}
            animate={{ top: -30 }}
            transition={{ duration: 1 }}
            className="header-cont-mob"
          >
            We would love to assist you in making your dream home a reality.<br></br> Just let us know your
            details and a few preferences of your so our representatives can get in touch with you.
          </motion.h1>
          <div className="cont1-wrap">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={variants}
              className="cont-1"
            >
              <form
                onSubmit={e => {
                  submitForm(e);
                }}
                className="form-cont1"
              >
                <div className="wrap-cont1">
                  <input
                    className="input-cont1"
                    onChange={e => setQuote({ ...quote, [e.target.name]: e.target.value })}
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                  ></input>
                </div>

                <div className="wrap-cont1">
                  <input
                    className="input-cont1"
                    onChange={e => setQuote({ ...quote, [e.target.name]: e.target.value })}
                    type="text"
                    name="number"
                    pattern="[7-9]{1}[0-9]{9}"
                    placeholder="Number*"
                    required
                  ></input>
                </div>

                <div className="wrap-cont1">
                  <input
                    className="input-cont1"
                    type="email"
                    onChange={e => setQuote({ ...quote, [e.target.name]: e.target.value })}
                    name="email"
                    placeholder="Email*"
                    required
                  ></input>
                </div>

                <div className="wrap-cont1">
                  <input
                    className="input-cont1"
                    type="text"
                    onChange={e => setQuote({ ...quote, [e.target.name]: e.target.value })}
                    name="location"
                    placeholder="Where is your plot located?"
                  ></input>
                </div>
                <motion.div
                  initial={{ top: 100 }}
                  animate={{ top: 10 }}
                  transition={{ duration: 1 }}
                  className="lead-btn-wrap"
                  id="lead-btn-wrap"
                  type="submit"
                  name="button"
                >
                  <button className="lead-btn" type="submit" name="button">
                    Next
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="lead-container-two mob" id="lead-container-two">
          <h1 className="header-cont2">How many floors are you planning to build? </h1>
          <div className="cont2-wrap">
            <button onClick={moveLeft} className="back">
              Back
            </button>
            <div className="cont-2 floors">
              <form className="form-cont2">
                <div className="wrap-cont2">
                  <div className="lead-option-wrap">
                    <button
                      onClick={e => moveCardthree(e)}
                      name="floors"
                      className="lead-option"
                      id="lead-option"
                    >
                      Ground floor
                    </button>
                    <button
                      onClick={e => moveCardthree(e)}
                      name="floors"
                      className="lead-option"
                      id="lead-option"
                    >
                      Ground Floor + 1
                    </button>
                    <button onClick={e => moveCardthree(e)} className="lead-option" id="lead-option">
                      Ground Floor + 2
                    </button>
                    <button
                      onClick={e => moveCardthree(e)}
                      name="floors"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      Ground Floor + 3
                    </button>
                    <button
                      onClick={e => moveCardthree(e)}
                      name="floors"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      Ground Floor + 4
                    </button>
                  </div>
                  <div className="lead-option-wrap">
                    <button
                      onClick={e => moveCardthree(e)}
                      name="floors"
                      className="lead-option"
                      id="lead-option"
                    >
                      Ground Floor + 3
                    </button>
                    <button
                      onClick={e => moveCardthree(e)}
                      name="floors"
                      className="lead-option"
                      id="lead-option"
                    >
                      Ground Floor + 4
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <button onClick={moveCardthree} className="skip">
              Skip
            </button>
          </div>
        </div>

        <div className="lead-container-three mob" id="lead-container-three">
          <h1 className="header-cont2">When are you planning to construct your Dream Home? </h1>
          <div className="cont2-wrap">
            <button onClick={moveLeftthree} className="back">
              Back
            </button>
            <div className="cont-2">
              <form className="form-cont2">
                <div className="wrap-cont2">
                  <div className="lead-option-wrap2">
                    <button
                      onClick={e => moveCardfour(e)}
                      name="time"
                      className="lead-option"
                      id="lead-option"
                    >
                      Immediately
                    </button>
                    <button
                      onClick={e => moveCardfour(e)}
                      name="time"
                      className="lead-option"
                      id="lead-option"
                    >
                      Within 15 Days
                    </button>
                    <button
                      onClick={e => moveCardfour(e)}
                      name="time"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      Within 1 Month
                    </button>
                    <button
                      onClick={e => moveCardfour(e)}
                      name="time"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      Within 3 Months
                    </button>
                  </div>
                  <div className="lead-option-wrap">
                    <button
                      onClick={e => moveCardfour(e)}
                      name="time"
                      className="lead-option"
                      id="lead-option"
                    >
                      Within 1 Month
                    </button>
                    <button
                      onClick={e => moveCardfour(e)}
                      name="time"
                      className="lead-option"
                      id="lead-option"
                    >
                      Within 3 Months
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <button onClick={moveCardfour} className="skip">
              Skip
            </button>
          </div>
        </div>

        <div className="lead-container-four mob" id="lead-container-four">
          <h1 className="header-cont2">What is the plot size that you own?</h1>
          <div className="cont3-wrap">
            <button onClick={moveLeftfour} className="back">
              Back
            </button>
            <div className="cont-3">
              <form className="form-cont3">
                <div className="wrap-cont3">
                  <div className="lead-option-wrap4">
                    <button
                      onClick={e => moveCardfive(e)}
                      name="size"
                      className="lead-option"
                      id="lead-option"
                    >
                      30*40
                    </button>
                    <button
                      onClick={e => moveCardfive(e)}
                      name="size"
                      className="lead-option"
                      id="lead-option"
                    >
                      30*50
                    </button>
                    <button
                      onClick={e => moveCardfive(e)}
                      name="size"
                      className="lead-option"
                      id="lead-option"
                    >
                      30*60
                    </button>
                  </div>
                  <div className="lead-option-wrap4">
                    <button
                      onClick={e => moveCardfive(e)}
                      name="size"
                      className="lead-option"
                      id="lead-option"
                    >
                      40*50
                    </button>
                    <button
                      onClick={e => moveCardfive(e)}
                      name="size"
                      className="lead-option"
                      id="lead-option"
                    >
                      40*60
                    </button>
                    <button
                      onClick={e => moveCardfive(e)}
                      name="size"
                      className="lead-option"
                      id="lead-option"
                    >
                      50*60
                    </button>
                  </div>
                  <div className="lead-option-wrap custom-wrap">
                    <div onClick={e => e.preventDefault()} className="custom" id="lead-option-custom">
                      Custom
                      <input
                        className="custom-input"
                        type="number"
                        name="length"
                        onChange={e => setQuote({ ...quote, [e.target.name]: e.target.value })}
                        placeholder="Length"
                      ></input>
                      <input
                        className="custom-input"
                        type="number"
                        name="breadth"
                        onChange={e => setQuote({ ...quote, [e.target.name]: e.target.value })}
                        placeholder="Breadth"
                      ></input>
                    </div>
                  </div>
                  <button onClick={moveCardfive} className="submit-custom">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <button onClick={moveCardfive} className="skip">
              Skip
            </button>
          </div>
        </div>

        <div className="lead-container-five mob" id="lead-container-five">
          <h1 className="header-cont2">Which direction is your plot facing? </h1>
          <div className="cont2-wrap">
            <button onClick={moveLeftfive} className="back">
              Back
            </button>
            <div className="cont-2">
              <form className="form-cont2">
                <div className="wrap-cont2">
                  <div className="lead-option-wrap2">
                    <button
                      onClick={e => moveCardsix(e)}
                      name="direction"
                      className="lead-option"
                      id="lead-option"
                    >
                      North
                    </button>
                    <button
                      onClick={e => moveCardsix(e)}
                      name="direction"
                      className="lead-option"
                      id="lead-option"
                    >
                      South
                    </button>
                    <button
                      onClick={e => moveCardsix(e)}
                      name="direction"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      East
                    </button>
                    <button
                      onClick={e => moveCardsix(e)}
                      name="direction"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      West
                    </button>
                  </div>
                  <div className="lead-option-wrap">
                    <button
                      onClick={e => moveCardsix(e)}
                      name="direction"
                      className="lead-option"
                      id="lead-option"
                    >
                      East
                    </button>
                    <button
                      onClick={e => moveCardsix(e)}
                      name="direction"
                      className="lead-option"
                      id="lead-option"
                    >
                      West
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <button onClick={moveCardsix} className="skip">
              Skip
            </button>
          </div>
        </div>

        <div className="lead-container-six mob" id="lead-container-six">
          <h1 className="header-cont2">How many car parking spaces do you need? </h1>
          <div className="cont2-wrap">
            <button onClick={moveLeftsix} className="back">
              Back
            </button>
            <div className="cont-2">
              <form className="form-cont2">
                <div className="wrap-cont2">
                  <div className="lead-option-wrap2">
                    <button
                      onClick={e => moveCardseven(e)}
                      name="parking"
                      className="lead-option"
                      id="lead-option"
                    >
                      0 Car Parking
                    </button>
                    <button
                      onClick={e => moveCardseven(e)}
                      name="parking"
                      className="lead-option"
                      id="lead-option"
                    >
                      1 Car Parking
                    </button>
                    <button
                      onClick={e => moveCardseven(e)}
                      name="parking"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      2 Car Parking
                    </button>
                    <button
                      onClick={e => moveCardseven(e)}
                      name="parking"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      3 Car Parking
                    </button>
                  </div>
                  <div className="lead-option-wrap">
                    <button
                      onClick={e => moveCardseven(e)}
                      name="parking"
                      className="lead-option"
                      id="lead-option"
                    >
                      2 Car Parking
                    </button>
                    <button
                      onClick={e => moveCardseven(e)}
                      name="parking"
                      className="lead-option"
                      id="lead-option"
                    >
                      3 Car Parking
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <button onClick={moveCardseven} className="skip">
              Skip
            </button>
          </div>
        </div>

        <div className="lead-container-seven mob" id="lead-container-seven">
          <h1 className="header-cont2">What is the Budget you have for your Dream Home Construction?</h1>
          <div className="cont2-wrap">
            <button onClick={moveLeftseven} className="back">
              Back
            </button>
            <div className="cont-4">
              <form className="form-cont2">
                <div className="wrap-cont4">
                  <div className="lead-option-wrap">
                    <button
                      onClick={e => moveCardeight(e)}
                      name="budget"
                      className="lead-option"
                      id="lead-option"
                    >
                      30L-50L
                    </button>
                    <button
                      onClick={e => moveCardeight(e)}
                      name="budget"
                      className="lead-option"
                      id="lead-option"
                    >
                      51L-80L
                    </button>
                    <button
                      onClick={e => moveCardeight(e)}
                      name="budget"
                      className="lead-option"
                      id="lead-option"
                    >
                      81L-1Cr
                    </button>
                    <button
                      onClick={e => moveCardeight(e)}
                      name="budget"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      1Cr - 1.5Cr
                    </button>
                    <button
                      onClick={e => moveCardeight(e)}
                      name="budget"
                      className="lead-option mob-op"
                      id="lead-option"
                    >
                      1.5Cr and above
                    </button>
                  </div>
                  <div className="lead-option-wrap">
                    <button
                      onClick={e => moveCardeight(e)}
                      name="budget"
                      className="lead-option"
                      id="lead-option"
                    >
                      1Cr - 1.5Cr
                    </button>
                    <button
                      onClick={e => moveCardeight(e)}
                      name="budget"
                      className="lead-option"
                      id="lead-option"
                    >
                      1.5Cr and above
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <button onClick={moveCardeight} className="skip">
              Skip
            </button>
          </div>
        </div>

        <div className="lead-container-eight" id="lead-container-eight">
          <h1 className="header-cont2">
            Thank you for reaching out to us. Our representative will get back to you shortly.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LeadGen;
