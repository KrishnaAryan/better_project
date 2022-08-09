import React, { useEffect, useState } from "react";
import { Modal, Stepper, Step, StepLabel, Backdrop, Fade, makeStyles } from "@material-ui/core";
import { ClearRounded } from "@material-ui/icons";
import { commonUpper, gf, gp1f, gp2f, gp3f, gp4f, commonLower } from "./Phases";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import MenuIcon from "../Menu Icon";
import Messages from "../Chat App/Messages/Messages";
import Chat from "../Chat App/Chat";
import "./style.css";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  stepper: {
    "& .MuiStepIcon-active": { color: "#2ce81d" },
    "& .MuiStepIcon-completed": {
      color: "#6af3fd",
    },
    "& .Mui-disabled .MuiStepIcon-root": {},
    "& .MuiStepLabel-completed": {
      color: "var(--light-color) !important",
    },
    "& .MuiStepLabel-active": {
      color: "var(--light-color) !important",
    },
    "& .MuiStepLabel-label": {
      color: "#737583",
    },
  },
}));

const messageModalVariants = {
  hidden: { scale: 0, y: "100vh" },
  visible: { scale: 1, y: "0vh", transition: { type: "tween" } },
  exit: { scale: 0, y: "100vh" },
};

const dashboardCardVariants = {
  hidden: { opacity: 0, y: "5vh", scale: 0.9 },
  visible: { opacity: 1, y: "0vh", scale: 1, transition: {} },
};

const Dashboard = ({ props, setDrawerState, bg, msgCount, setMsgCount }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [elevation, setElevation] = useState([]);
  const [percentCompleted, setPercentCompleted] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [stage, setStage] = useState();
  const [phasesToggle, setPhasesToggle] = useState(false);
  const [phasesContainerAnim, setPhasesContainerAnim] = useState({});
  const [phasesAnim, setPhasesAnim] = useState({});
  const [cardsAnim, setCardsAnim] = useState({});

  const classes = useStyles();

  useEffect(() => {
    if (phasesToggle) {
      setPhasesContainerAnim({
        marginTop: "20px",
        borderRadius: "30px",
        cursor: "initial",
      });
      setPhasesAnim({
        height: "100%",
      });
      setCardsAnim({ height: "0px", margin: "0px", padding: "0px 0px" });
    } else {
      setPhasesContainerAnim({
        marginTop: 0,
        borderRadius: "10px",
        cursor: "pointer",
      });
      setPhasesAnim({
        height: "0px",
      });
      setCardsAnim({ height: "auto", margin: "30px -15px", padding: "20px 30px" });
    }
  }, [phasesToggle]);

  useEffect(() => {
    //   console.log(props.projectData.projectElevation);
    switch (props.projectData.projectElevation) {
      case "Ground Floor":
        return setElevation(gf);
      case "Ground+1 Floor":
        return setElevation(gp1f);
      case "Ground+2 Floor":
        return setElevation(gp2f);
      case "Ground+3 Floor":
        return setElevation(gp3f);
      case "Ground+4 Floor":
        return setElevation(gp4f);
      default: {
        return null;
      }
    }
  }, [props.projectData]);

  useEffect(() => {
    //   console.log(props.projectData.projectStage);
    if (commonUpper.indexOf(props.projectData.projectStage) !== -1) {
      //   console.log("first");
      setActiveStep(commonUpper.indexOf(props.projectData.projectStage));
    }
    if (elevation.indexOf(props.projectData.projectStage) !== -1) {
      //   console.log("middle");
      setActiveStep(commonUpper.length + elevation.indexOf(props.projectData.projectStage));
    } else if (commonLower.indexOf(props.projectData.projectStage) !== -1) {
      //   console.log("last");
      if (props.projectData.projectStage === "Finished!") {
        // console.log(commonUpper.length + elevation.length + commonLower.length);
        setActiveStep(commonUpper.length + elevation.length + commonLower.length);
      } else {
        setActiveStep(
          commonUpper.length + elevation.length + commonLower.indexOf(props.projectData.projectStage)
        );
      }
    }
  }, [props.projectData, elevation]);
  // console.log(activeStep);

  useEffect(() => {
    setPercentCompleted((activeStep / (commonUpper.length + elevation.length + commonLower.length)) * 100);
  }, [activeStep, elevation]);

  return (
    <div className="dashboard" style={{ background: `url(${bg})` }}>
      <Chat
        props={{
          id: props.projectData.projectID,
          name: props.clientData.name,
          clientID: props.clientData.clientID,
          stage: props.projectData.projectStage,
        }}
        msgCount={msgCount}
        setMsgCount={setMsgCount}
      />
      <Modal
        // className={classes.modal}
        open={modalState}
        onClose={() => setModalState(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        <Fade in={modalState}>
          <motion.section
            variants={messageModalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              overflowY: "auto",
              height: "80%",
              width: "90%",
              background: "white",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 5px 40px",
              outline: "none",
            }}
          >
            <Messages projectID={props.projectData.projectID} stage={stage} /* style="dashboard-message" */ />
          </motion.section>
        </Fade>
      </Modal>
      <MenuIcon
        style={{ position: "relative !important" }}
        setDrawerState={setDrawerState}
        color="var(--light-color)"
      />
      <h2>Dashboard</h2>
      <motion.section
        animate={cardsAnim}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="dashboard-cards"
      >
        <div className="dashboard-card-1">
          <motion.div variants={dashboardCardVariants} initial="hidden" animate="visible">
            <h5>Total Amount Paid</h5>
            <h2>₹{props.projectData.totalAmountPayed}</h2>
          </motion.div>
          <motion.div variants={dashboardCardVariants} initial="hidden" animate="visible">
            <h5>Next RA/Payment Amount</h5>
            <h2>₹{props.projectData.nextRAamount}</h2>
          </motion.div>
        </div>
        <div className="dashboard-card-2">
          <motion.div variants={dashboardCardVariants} initial="hidden" animate="visible">
            <h5>Total Cost</h5>
            <h2>₹{props.projectData.projectCost}</h2>
          </motion.div>
          <motion.div variants={dashboardCardVariants} initial="hidden" animate="visible">
            <SemiCircleProgressBar
              percentage={Math.round(percentCompleted)}
              showPercentValue
              stroke="#2ce81d"
              strokeWidth={15}
            />
          </motion.div>
        </div>
        <div className="dashboard-card-3">
          <motion.div variants={dashboardCardVariants} initial="hidden" animate="visible">
            <h5>Remaining Amount</h5>
            <h2>₹{props.projectData.projectCost - props.projectData.totalAmountPayed}</h2>
          </motion.div>
          <motion.div variants={dashboardCardVariants} initial="hidden" animate="visible">
            <h5>RA/Payment Due Date</h5>
            <h2>{props.projectData.nextRAdate}</h2>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        onClick={e => (phasesToggle ? e.preventDefault : setPhasesToggle(true))}
        animate={{ ...phasesContainerAnim }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        className="dashboad-phases"
      >
        {phasesToggle ? (
          <section className="phases-header">
            <h2 className="phases">Phases</h2>
            <div onClick={() => setPhasesToggle(false)}>
              <ClearRounded style={{ cursor: "pointer" }} />
            </div>
          </section>
        ) : (
          <motion.div
            variants={dashboardCardVariants}
            initial="hidden"
            animate="visible"
            className="dashboard-subheading"
          >
            <h2>Ongoing Work: </h2>
            <div>{props.projectData.projectStage}</div>
          </motion.div>
        )}
        <motion.div
          style={{ height: "0px" }}
          animate={phasesAnim}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
        >
          <Stepper className={classes.stepper} activeStep={activeStep} orientation="vertical">
            {commonUpper.map((data, i) => {
              return (
                <Step
                  key={i}
                  onClick={() => {
                    i <= activeStep && setModalState(true);
                    i <= activeStep && setStage(data);
                    // console.log(data);
                  }}
                  className="project-phases"
                >
                  <StepLabel>{data}</StepLabel>
                </Step>
              );
            })}
            {elevation.map((data, i) => {
              return (
                <Step
                  key={i}
                  onClick={() => {
                    i <= activeStep && setModalState(true);
                    i <= activeStep && setStage(data);
                  }}
                  className="project-phases"
                >
                  <StepLabel>{data}</StepLabel>
                </Step>
              );
            })}
            {commonLower.map((data, i) => {
              return (
                <Step
                  key={i}
                  onClick={() => {
                    i <= activeStep && setModalState(true);
                    i <= activeStep && setStage(data);
                  }}
                  className="project-phases"
                >
                  <StepLabel>{data}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Dashboard;
