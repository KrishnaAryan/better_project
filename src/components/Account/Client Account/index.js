import React, { useState } from "react";
import MenuIcon from "../Menu Icon";
import ModalImage from "react-modal-image";
import { Button, TextField, MenuItem } from "@material-ui/core";
import { EditRounded, InsertDriveFileRounded } from "@material-ui/icons";
import axios from "axios";
import "./style.css";
import { motion } from "framer-motion";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import defaultProfile from "../../../assets/ProfilePic.jpg";

const userInfoList = [
  { name: "Name", keyName: "name" },
  { name: "Email", keyName: "personalEmail" },
  { name: "Address", keyName: "address" },
  { name: "D.O.B.", keyName: "dob" },
  { name: "Gender", keyName: "gender" },
  { name: "Designation", keyName: "clientDesignation" },
  { name: "Company", keyName: "clientCompany" },
];

const userDataContainerVaraints = {
  hidden: {},
  visible: { transition: { when: "beforeChildren", staggerChildren: 0.05 } },
};

const userDataItemVaraints = {
  hidden: { opacity: 0, y: "5vh", originX: "left" },
  visible: { opacity: 1, y: "0vh", transition: { duration: 0.2, type: "tween" } },
};

const Account = ({ props, setDrawerState, bg }) => {
  let changedFields = {_id:props._id};
  const [clientData, setClientData] = useState(props);
   const history = useHistory();
  const handleChange = e => {
    const imgData = new FormData();
    imgData.append("profilePic", e.target.files[0]);
    imgData.append("Key", props.profilePic.Key);
    axios.post("https://better-co-admin.herokuapp.com/updatePfp", imgData).then(({ data }) => {});
  };

  const handleUpdate = () => {
    // console.log(changedFields);
    const form = new FormData();
    form.append("data", JSON.stringify(changedFields));

    axios.post("https://better-co-admin.herokuapp.com/updateClient", form).then(({ data }) => {
      if (data) {
        history.push("/myProfile/myAccount");
        setClientData(prev=>({...prev,...changedFields}))
      }
    });
  };

  return (
    <div className="myAccount" style={{ background: `url(${bg})` }}>
      <section className="section-nav nav-myAccount" style={{ alignSelf: "start" }}>
        <MenuIcon setDrawerState={setDrawerState} color="var(--light-color)" />
        <h2 className="section-title">
          My Account
          <p className="projectStatus">
            ID: #<span style={{ color: "#2ce81d", fontWeight: "500" }}>{props.clientID}</span>{" "}
          </p>
        </h2>
      </section>
      <section className="account-details">
        <Switch>
          <Route path="/myProfile/myAccount" exact>
            <ul className="edit-pfp">
              <li style={{ position: "relative" }}>
                <div className="edit-pfp-btn">
                  <label htmlFor="change-pfp" style={{ cursor: "pointer" }}>
                    <EditRounded fontSize="small" />
                  </label>
                  <input
                    type="file"
                    hidden
                    id="change-pfp"
                    accept={".jpg" || ".png"}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <ModalImage
                  small={props.profilePic.Location || defaultProfile}
                  medium={props.profilePic.Location || defaultProfile}
                  large={props.profilePic.Location || defaultProfile}
                  // alt={props.profilePic.Key}
                />
              </li>
            </ul>
            <motion.ul
              variants={userDataContainerVaraints}
              initial="hidden"
              animate="visible"
              style={{ marginBottom: "30px" }}
            >
              <motion.h3 className="account-info-subtitle" variants={userDataItemVaraints}>
                Personal Info
              </motion.h3>
              <li className="projects-info-items-container">
                {userInfoList.map(
                  ({}, i) =>
                    i % 3 === 0 && (
                      <motion.li key={i} variants={userDataItemVaraints}>
                        {userInfoList.slice(i, i + 3).map(({ name, keyName }, j) => (
                          <div key={j}>
                            <div className="project-info-name">{name}:</div>{" "}
                            {keyName === "projectCost" && "₹"}
                            <div className="project-info-value">{clientData[keyName]}</div>
                          </div>
                        ))}
                      </motion.li>
                    )
                )}
              </li>
{/*               <li style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/myProfile/myAccount/editProfile" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<EditRounded />}
                    disableElevation
                    className="profile-edit-btn"
                  >
                    Edit
                  </Button>
                </Link>
              </li> */}
            </motion.ul>
            {props.adhaarCard || props.panCard || props.identityProofCard ? (
              <motion.ul variants={userDataContainerVaraints} initial="hidden" animate="visible">
                <motion.h3 className="account-info-subtitle" variants={userDataItemVaraints}>
                  KYC Documents
                </motion.h3>
                <motion.section
                  className="kyc-docs"
                  style={{ marginBottom: "30px" }}
                  variants={userDataContainerVaraints}
                  initial="hidden"
                  animate="visible"
                >
                  {props.adhaarCard && (
                    <motion.div variants={userDataItemVaraints}>
                      <div className="kyc-doc-title">Adhaar Card</div>
                      <a
                        href={props.adhaarCard.Location}
                        target="_blank"
                        rel="noreferrer"
                        className="kyc-docs-items"
                      >
                        <InsertDriveFileRounded />
                        <p>{props.adhaarCard.Key}</p>
                      </a>
                    </motion.div>
                  )}
                  {props.panCard && (
                    <motion.div variants={userDataItemVaraints}>
                      <div className="kyc-doc-title">Pan Card</div>
                      <a
                        href={props.panCard.Location}
                        target="_blank"
                        rel="noreferrer"
                        className="kyc-docs-items"
                      >
                        <InsertDriveFileRounded />
                        <p>{props.panCard.Key}</p>
                      </a>
                    </motion.div>
                  )}
                  {props.identityProofCard && (
                    <motion.div variants={userDataItemVaraints}>
                      <div className="kyc-doc-title">Identity Proof</div>
                      <a
                        href={props.identityProofCard.Location}
                        target="_blank"
                        rel="noreferrer"
                        className="kyc-docs-items"
                      >
                        <InsertDriveFileRounded />
                        <p>{props.identityProofCard.Key}</p>
                      </a>
                    </motion.div>
                  )}
                </motion.section>
              </motion.ul>
            ) : null}
          </Route>
          <Route path="/myProfile/myAccount/editProfile" exact>
            <h3 className="editProfile-title">Edit Profile</h3>
            <div className="edit-profile-fields">
              <TextField
                variant="filled"
                className="edit-profile-field"
                size="small"
                label="Name"
                defaultValue={clientData.name}
                name="name"
                onChange={e => (changedFields = { ...changedFields, [e.target.name]: e.target.value })}
              />
              <TextField
                variant="filled"
                className="edit-profile-field"
                size="small"
                label="Address"
                defaultValue={clientData.address}
                name="address"
                onChange={e => (changedFields = { ...changedFields, [e.target.name]: e.target.value })}
              />
              <TextField
                type="date"
                variant="filled"
                className="edit-profile-field"
                size="small"
                label="D.O.B."
                defaultValue={clientData.dob}
                name="dob"
                onChange={e => (changedFields = { ...changedFields, [e.target.name]: e.target.value })}
              />
              <TextField
                select
                variant="filled"
                className="edit-profile-field"
                size="small"
                label="Gender"
                defaultValue={clientData.gender}
                name="dob"
                onChange={e => (changedFields = { ...changedFields, [e.target.name]: e.target.value })}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>

              <TextField
                variant="filled"
                className="edit-profile-field"
                size="small"
                label="Designation"
                defaultValue={clientData.clientDesignation}
                name="clientDesignation"
                onChange={e => (changedFields = { ...changedFields, [e.target.name]: e.target.value })}
              />
              <TextField
                variant="filled"
                className="edit-profile-field"
                size="small"
                label="Company"
                defaultValue={clientData.clientCompany}
                name="clientCompany"
                onChange={e => (changedFields = { ...changedFields, [e.target.name]: e.target.value })}
              />
            </div>
            <div className="updateProfile-btns">
              <Button variant="outlined" disableElevation className="outlined-variant" onClick={handleUpdate}>
                Update
              </Button>
              <Link to="/myProfile/myAccount" style={{ textDecoration: "none" }}>
                <Button variant="outlined" disableElevation className="outlined-variant">
                  Back
                </Button>
              </Link>
            </div>
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Account;
