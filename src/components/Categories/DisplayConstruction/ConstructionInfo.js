import React, { useState, useEffect } from "react";
// import DisplayGallery from "./ConstructionContent/DisplayGallery";
import { FormControl, InputLabel, Select, makeStyles, MenuItem, TextField } from "@material-ui/core";
import DisplayMaterials from "./ConstructionContent/DisplayMaterials";
import { DisplayPremium, DisplayStandard } from "./ConstructionContent/DisplayPackage";
import DisplayProcess from "./ConstructionContent/DisplayProcess";
import "./DisplayConstruction.css";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const selectPackageData = [
//   {
//     title: "STANDARD",
//     price: "Rs.1625/sqft + Rs.50/sqft + GST",
//   },
//   {
//     title: "PREMIUM",
//     price: "Rs.2200/sqft + Rs.75/sqft + GST",
//   },
// ];

const budgetBanglore = {
  title: "BUDGET",
  price: "Rs. 1550/sqft. + Rs. 50/sqft. (Designs)",
};

const standardBanglore = {
  title: "STANDARD",
  price: "Rs. 1725/sqft. + Rs. 50/sqft. (Designs)",
};

const budgetHyderabad = {
  title: "BUDGET",
  price: "Rs. 1650/sqft. + Rs. 50/sqft. (Designs)",
};

const standardHyderabad = {
  title: "STANDARD",
  price: "Rs. 1800/sqft. + Rs. 50/sqft. (Designs)",
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: "25px 25px 0px 25px",
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ConstructionInfo = ({ list }) => {
  const classes = useStyles();
  const { construction } = useSelector(state => state.categoryData);
  const [cityID, setCityID] = useState();
  const [packageByCity, setPackageByCity] = useState({
    budget: cityID && construction.map(data => data._id === cityID && data.budgetPrice)[0],
    standard: cityID && construction.map(data => data._id === cityID && data.standardPrice)[0],
  });

  useEffect(() => {
    setPackageByCity({
      budget: cityID && construction.filter(data => data._id === cityID).map(data => data.budgetPrice)[0],
      standard: cityID && construction.filter(data => data._id === cityID).map(data => data.standardPrice)[0],
    });
  }, [cityID]);
  
  useEffect(() => {
    construction && setCityID(construction[0]._id);
  }, [construction]);

  if (list === "packages") {
    return (
      <div className="container-wrap">
        <FormControl className={classes.formControl}>
          {/* <InputLabel id="cityLabel">Select City</InputLabel> */}
          <TextField
            select
            native
            labelId="cityLabel"
            label="Select City"
            value={cityID || ""}
            // defaultValue={cityID}
            onChange={e => setCityID(e.target.value)}
          >
            {construction &&
              construction.map(({ city, _id }, i) => (
                <MenuItem value={_id} key={i}>
                  {city}
                </MenuItem>
              ))}
          </TextField>
        </FormControl>
        <div className="carousel-wrap">
          <div className="select-packages-container stan">
            <div className="select-packages active-package">
              <span>BUDGET</span>
              <p>{packageByCity.budget}</p>
            </div>
            <div className="accordian-packages standard-active">
              {cityID && <DisplayStandard _id={cityID} />}
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="construction-arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>

          <div className="select-packages-container prem">
            <div className="select-packages active-package">
              <span>STANDARD</span>
              <p>{packageByCity.standard}</p>
            </div>
            <div className="accordian-packages standard-active">
              {cityID && <DisplayPremium _id={cityID} />}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (list === "material") {
    return (
      <div className="material-table-container">
        <DisplayMaterials />
      </div>
    );
  } else if (list === "process") {
    return (
      <div>
        <DisplayProcess />
      </div>
    );
  }
};

export default ConstructionInfo;
