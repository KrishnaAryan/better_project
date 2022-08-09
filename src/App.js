import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import Home from "./pages";
import Aboutus from "./components/Aboutus";
import axios from "axios";
import FooterNav from "./components/FooterNav";
import Navbar from "./components/Navbar";
import LeadGen from "./components/LeadGen/LeadGen";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import Careers from "./components/Careers/Careers";
// import OfferSection from "./components/OfferSection";
// import Banner from "./components/Banner";
import Categories from "./components/Categories";

// import Reviews from "./components/Reviews";
import DisplayConstruction from "./components/Categories/DisplayConstruction/DisplayConstruction";
/* import DisplayProcess from "./components/Categories/DisplayConstruction/ConstructionContent/DisplayProcess";
import ConstructionInfo from "./components/Categories/DisplayConstruction/ConstructionInfo";
import {
  DisplayPremium,
  DisplayStandard,
} from "./components/Categories/DisplayConstruction/ConstructionContent/DisplayPackage"; */
// import DisplayInterior from "./components/Categories/DisplayInterior/DisplayInterior";
import DisplayProjects from "./components/Categories/DisplayProjects/DisplayProjects";
import DisplayPmc from "./components/Categories/DisplayPMC/Pmc";
import DisplayTestimonials from "./components/Categories/DisplayTestimonials/DisplayTestimonials";
// import DisplayBlog from "./components/Categories/DisplayBlog/DisplayBlog";
import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/Header";
import FrontBanner from "./components/FrontBanner";
import Whyus from "./components/Whyus";
// import Gallery from "./components/Gallery";
// import DisplayConceptHousing from "./components/Categories/DisplayConceptHousing/DisplayConceptHousing";
import ConceptHousing from "./components/Categories/DisplayConceptHousing/ConceptHousing";
import DisplayBudgetCalculator from "./components/Categories/DisplayBudgetCalculator/DisplayBudgetCalculator";
// import { SliderData } from "./data/SliderData";
import Login from "./components/Login";
import MyProfile from "./components/Account";
import { useDispatch, useSelector } from "react-redux";
import { storeAuth, storeCategoryData } from "./Redux/Actions";

//SEO
import SEO from "./components/SEO";

//Thank you
import ThankYou from "./ThankYou";

// https://better-co-admin.herokuapp.com
// http://localhost:3001

function App() {
  const dispatch = useDispatch();
  const [webData, setWebData] = useState({});
  useEffect(() => {
    // console.log('triggered');
    dispatch(storeAuth(Boolean(localStorage.getItem("clientID"))));
  }, [dispatch]);

  useEffect(() => {
    axios.get("https://better-co-admin.herokuapp.com/webData").then(({ data }) => {
      setWebData(data);
      // console.log(data);
      dispatch(
        storeCategoryData({
          construction: data.construction,
          conceptHousing: data.conceptHousing,
          conceptHousingAbout: data.conceptHousingAbout,
          displayProjects: data.displayProjects,
          pmcs: data.pmcs,
        })
      );
    });
  }, []);

  const auth = useSelector(state => state.auth);
  return (
    <div className="master-home">
      <Helmet>
        <meta
          name="description"
          content="We are a house construction company based in Bangalore & Ahmedabad, with the best architects in Bangalore, providing home construction with best materials."
        />
        <meta name="Title" content="House Construction Services in Bangalore, Ahemadabad & Hyderabad" />
        <title>House Construction Services in Bangalore, Ahemadabad & Hyderabad</title>
        <meta
          name="Keywords"
          content="House Construction, Architects in Bangalore, Construction Contractors, Construction Companies"
        />
      </Helmet>
      <div id="dummy"></div>
      <div className="home-1">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <Categories betterCoCategories={webData.betterCoCategories} />
              <div id="dummy3"></div>
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/quote">
              <Navbar />
              <Header />
              <LeadGen />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route
              path="/blog"
              render={() => {
                window.location = "https://blog.thebetterconstruction.com/";
                return null;
              }}
            ></Route>
            <Route path="/privacy-policy">
              <Navbar />
              <Header />
              <Privacy />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/careers">
              <Navbar />
              <Header />
              <Careers />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/terms-and-conditions">
              <Navbar />
              <Header />
              <Terms />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/construction">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayConstruction />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/construction/packages">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayConstruction />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/construction/process">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayConstruction />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/material-list">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayConstruction />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/concept-housing">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <ConceptHousing />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/projects">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayProjects />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/testimonials">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayTestimonials
                testimonials={webData.testimonials}
                testimonialsVideo={webData.testimonialsVideo}
              />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/budget-calculator">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayBudgetCalculator />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>
            <Route path="/pmc">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <div id="dummy2"></div>
              <DisplayPmc />
              <Aboutus aboutUs={webData.aboutUs?.content} />
              <Whyus whyUs={webData.whyUs} ourPartners={webData.ourPartners} inTheNews={webData.inTheNews} />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>

            <Route path="/thankyou">
              <Navbar />
              <Header />
              <FrontBanner frontBanner={webData.frontBanner} />
              <ThankYou />
              <FooterNav addresses={webData.addresses} footerSEO={webData.footerSEO} />
            </Route>

            <Route path="/login">{auth ? <Redirect to="/myProfile"></Redirect> : <Login />}</Route>
            <Route path="/myProfile">{auth ? <MyProfile /> : <Redirect to="/login"></Redirect>}</Route>

            <SEO
              frontBanner={webData.frontBanner}
              addresses={webData.addresses}
              footerSEO={webData.footerSEO}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
