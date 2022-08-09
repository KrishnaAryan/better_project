import React, {useEffect} from 'react';
import './Careers.css';
import bd from '../../assets/career-bd.png'
import arc from '../../assets/career-arc.png'
import graphic from '../../assets/career-graphic.png'
import { Helmet } from "react-helmet";

// const careers = [
//     {
//         title:"Business Development Executive",
//         image:bd
//     },
//     {
//         title:"Graphic Designer",
//         image:graphic
//     },
//     {
//         title:"Architectural Intern",
//         image:arc
//     },
// ]

const Careers = () => {

    useEffect(() => {
        fetch('https://thebetterco.online/wp-json/wp/v2/posts' )
        .then(res => res.json())
        .then(res => console.log(res, 'api data'))
    },[])

    return (
        <div className="career-container">
        <Helmet>
          <meta
          name="description"
          content="Apply to jobs in the real estate sector. We are providing job opportunities in architecture, business development, interior designing & civil engineering."
          />
          <title>Find Jobs in Real Estate Sector From Civil to Sales | The Better Co</title>
          <meta
            name="Keywords"
            content="Architectural Jobs, Civil Engineering Jobs, Interior Designers Jobs, Architecture Jobs, Architects jobs"
          />
      </Helmet>
            <div className="career-wrap">
                <div className="career-headline">
                    <h5>Join Us</h5>
                </div>
                <div className="career-bg">
                    <div className="career-card-wrap">
                        <div className="career-card" onClick={() => window.open("https://www.linkedin.com/jobs/search/?currentJobId=2546133955&f_C=66337761&geoId=92000000&utm_source=Website&utm_medium=Careers&utm_campaign=BusinessDevelopmentExecutive", "_blank")}>
                            <div className="card-inner">
                                <div className="career-img-wrap">
                                    <img className="career-img" src={bd} alt="bd" />
                                </div>
                                <h4 className="career-title bd">Business Development Executive</h4>
                            </div>
                        </div>
                        <div className="career-card" onClick={() => window.open("https://www.linkedin.com/jobs/search/?currentJobId=2547008779&f_C=66337761&geoId=92000000&utm_source=Website&utm_medium=Careers&utm_campaign=GraphicDesigner", "_blank")}>
                            <div className="card-inner">
                                <div className="career-img-wrap">
                                    <img className="career-img" src={graphic} alt="bd" />
                                </div>
                                <h4 className="career-title">Graphic Designer</h4>
                            </div>
                        </div>
                        <div className="career-card" onClick={() => window.open("https://www.linkedin.com/jobs/search/?currentJobId=2555522875&f_C=66337761&geoId=92000000&utm_source=Website&utm_medium=Careers&utm_campaign=ArchitecturalIntern", "_blank")}>
                            <div className="card-inner">
                                <div className="career-img-wrap">
                                    <img className="career-img" src={arc} alt="bd" />
                                </div>
                                <h4 className="career-title">Architectural Intern</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
