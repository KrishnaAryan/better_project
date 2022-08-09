import React from "react";
import Aboutus from "../components/Aboutus";
// import Footer from "../components/Footer";
import FooterNav from "../components/FooterNav";
import Navbar from "../components/Navbar";
import OfferSection from "../components/OfferSection";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import "./style.css";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Categories />
      <Aboutus />
      <Reviews />
      <OfferSection />
      <FooterNav />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
