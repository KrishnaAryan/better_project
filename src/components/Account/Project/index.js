import React from "react";
import Chat from "../Chat App/Chat";
import MenuIcon from "../Menu Icon";
import { InsertDriveFileRounded } from "@material-ui/icons";
import ModalImage from "react-modal-image";
import "./style.css";
import { motion } from "framer-motion";
import defaultHouse from "../../../assets/defaultHouse.jpg";

const projectInfoList = [
  { name: "ID", keyName: "projectID" },
  { name: "Elevation", keyName: "projectElevation" },
  { name: "Plot Address", keyName: "projectPlotAddress" },
  { name: "Plot Facing", keyName: "projectPlotFacing" },
  { name: "Plot Size", keyName: "projectPlotSize" },
  { name: "Plot Super-Buildup Area", keyName: "projectSuperBuiltupArea" },
  { name: "Package", keyName: "projectPackage" },
  { name: "Total Cost", keyName: "projectCost" },
];

const projectDocList = [
  { name: "Booking Agreement", keyName: "bookingAgreement" },
  { name: "Service Agreement", keyName: "serviceAgreement" },
  { name: "Architectural Designs", keyName: "architecturalDesigns" },
  { name: "Structural Designs", keyName: "structuralDesigns" },
  { name: "3D Designs", keyName: "threedDesigns" },
  { name: "Project RAs", keyName: "RAs" },
  { name: "Payment Schedule", keyName: "paymentSchedule" },
  { name: "Work Schedule", keyName: "workSchedule" },
];

const projectDataContainerVaraints = {
  hidden: {},
  visible: { transition: { when: "beforeChildren", staggerChildren: 0.05 } },
};

const projectDataItemVaraints = {
  hidden: { opacity: 0, y: "5vh", originX: "left" },
  visible: { opacity: 1, y: "0vh", transition: { duration: 0.2, type: "tween" } },
};

const Project = ({ props, setDrawerState, msgCount, setMsgCount }) => {
  const { projectData, clientData } = props;
  // console.log(projectData);
  return (
    <div className="project">
      <section className="section-nav">
        <MenuIcon setDrawerState={setDrawerState} color="var(--light-color)" />
        <h2 className="section-title" style={{ color: "var(--light-color)" }}>
          Project Details
          <p className="projectStatus">
            Status:{" "}
            <span
              style={{ fontWeight: "500", color: projectData.projectStatus === "active" ? "#2ce81d" : "red" }}
            >
              {projectData.projectStatus}
            </span>
          </p>
        </h2>
      </section>
      <img
        className="project-featured-img"
        src={projectData?.projectFeaturedImage?.Location || defaultHouse}
        alt={projectData?.projectFeaturedImage?.Key || "Default img"}
      />
      <div className="project-featured-img-gradient"></div>
      <section className="project-info-container">
        <motion.section
          className="project-info-section"
          variants={projectDataContainerVaraints}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={projectDataItemVaraints} className="project-subtitle">
            Project Name:
          </motion.h3>
          <motion.p variants={projectDataItemVaraints} className="project-info-value projectName">
            {projectData.projectName}
          </motion.p>
        </motion.section>
        <motion.section
          className="project-info-section"
          variants={projectDataContainerVaraints}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 className="project-subtitle" variants={projectDataItemVaraints}>
            Project Info
          </motion.h3>
          <ul className="projects-info-items-container" variants={projectDataContainerVaraints}>
            {projectInfoList.map(
              ({}, i) =>
                i % 3 === 0 && (
                  <li key={i}>
                    {projectInfoList.slice(i, i + 3).map(({ name, keyName }, j) => (
                      <motion.div key={j} variants={projectDataItemVaraints}>
                        <div className="project-info-name">{name}:</div> {keyName === "projectCost" && "₹"}
                        <div className="project-info-value">{projectData[keyName]}</div>
                      </motion.div>
                    ))}
                  </li>
                )
            )}
          </ul>
        </motion.section>
        <motion.section
          className="project-info-section"
          variants={projectDataContainerVaraints}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 className="project-subtitle" variants={projectDataItemVaraints}>
            Project Documents
          </motion.h3>
          <motion.ul className="projects-info-items-container" variants={projectDataContainerVaraints}>
            {projectDocList.map(
              ({}, i) =>
                i % 3 === 0 && (
                  <li key={i}>
                    {projectDocList.slice(i, i + 3).map(({ name, keyName }, j) => (
                      <motion.div key={j} variants={projectDataItemVaraints}>
                        <motion.div
                          className="project-info-name project-doc-name"
                          variants={projectDataItemVaraints}
                        >
                          {name}:
                        </motion.div>{" "}
                        {keyName === "projectCost" && "₹"}
                        {Array.isArray(projectData[keyName])
                          ? projectData[keyName].map(
                              ({ Key, Location }, i) =>
                                Key && (
                                  <a
                                    href={Location}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-docs-items"
                                    key={i}
                                  >
                                    <InsertDriveFileRounded />
                                    <p>{Key}</p>
                                  </a>
                                )
                            )
                          : projectData[keyName] && (
                              <a
                                href={projectData[keyName].Location}
                                target="_blank"
                                rel="noreferrer"
                                className="project-docs-items"
                              >
                                <InsertDriveFileRounded />
                                <p>{projectData[keyName].Key}</p>
                              </a>
                            )}
                      </motion.div>
                    ))}
                  </li>
                )
            )}
          </motion.ul>
        </motion.section>
      </section>
      <Chat
        props={{
          id: projectData.projectID,
          clientID: props.clientData.clientID,
          name: clientData.name,
          stage: projectData.projectStage,
        }}
        msgCount={msgCount}
        setMsgCount={setMsgCount}
      />
    </div>
  );
};

export default Project;
