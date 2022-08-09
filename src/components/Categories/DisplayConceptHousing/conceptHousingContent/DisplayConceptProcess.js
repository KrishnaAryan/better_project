import React from 'react';
import './ConceptContent.css'
import ConceptProcess from '../../../../assets/ConceptProcess.jpeg';
import { Helmet } from "react-helmet";

const DisplayConceptProcess = () => {
    return (
        <div className="concept-process-container">
        <Helmet>
          <meta
          name="description"
          content="Select the house design, tell us the modification and get your house construction started. It is that simple."
          />
          <title>House Construction and Process of Concept Housing</title>
          <meta
            name="Keywords"
            content="House Construction Design, Architectural Designs, 2D Designs, 3D Designs,"
          />
      </Helmet>
            <img className="concept-process-img" src={ConceptProcess} alt={"concept"} />
        </div>
    )
}

export default DisplayConceptProcess
