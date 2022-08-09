import React from 'react';
import Process from '../../../../assets/Process.jpeg'
import './DisplayProcess.css';
import { Helmet } from "react-helmet";

const DisplayProcess = () => {
    return (
        <div className="process-container">
        <Helmet>
          <meta
          name="description"
          content="Don’t worry about how to start house construction for your dream home. The Better Co provides a seamless process of house construction for your ease. "
          />
          <title>House Construction in Bangalore with Seemless Process</title>
          <meta
            name="Keywords"
            content="House Construction, How to Start House Construction,"
          />
      </Helmet>
            <div className="process-img-wrap">
                <img className="process-img" src={Process} alt="process" />
            </div>
        </div>
    )
}

export default DisplayProcess
