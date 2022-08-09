import React, { useEffect, useState } from "react";
import MenuIcon from "../Menu Icon";
import "./style.css";
import { Button, TextField, Modal, Backdrop, Fade, Snackbar, CircularProgress } from "@material-ui/core";
import { AddRounded, AutorenewRounded, DoneRounded, CloseRounded } from "@material-ui/icons";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import ModalContents from "./ModalContents";
import { motion } from "framer-motion";

// https://better-co-admin.herokuapp.com
// http://localhost:3001

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const raiseEscalationContainerVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

const raiseEscalationItemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {},
  },
};

const RaiseRequest = ({ props: { userID, userName }, setDrawerState, bg }) => {
  const [escalationData, setEscalationData] = useState();
  const [escalationsContainerLoader, setEscalationsContainerLoader] = useState(true);
  const [myEscalations, setMyEscalations] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [requestClicked, setRequestClicked] = useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState({});
  const [raiseEscalationVisibility, setRaiseEscalationVisibility] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  useEffect(() => {
    axios.get(`https://better-co-admin.herokuapp.com/myEscalations/${userID}`).then(({ data }) => {
      if (data) {
        setMyEscalations([...data].reverse());
        setEscalationsContainerLoader(false);
      }
    });
  }, [userID]);

  const handleSubmit = e => {
    e.preventDefault();

    function timeFormat(time) {
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }

    function dateFormat(date) {
      return `${date.toString().slice(4, 7)} ${date.toString().slice(8, 10)}, ${date
        .toString()
        .slice(11, 15)}`;
    }

    axios
      .post("https://better-co-admin.herokuapp.com/storeEscalation", {
        ...escalationData,
        userID,
        userName,
        time: timeFormat(new Date()),
        date: dateFormat(new Date()),
      })
      .then(({ data }) => {
        if (data) {
          setRaiseEscalationVisibility(prev => !prev);
          setMyEscalations([data, ...myEscalations]);
          setSnackbarMsg({ alertMsg: "Escalation Raised", severity: "success" });
          setAlertOpen(true);
        }
      })
      .catch(() => {
        // console.log(false);
        setSnackbarMsg({ alertMsg: "Failed to Raise Escalation!", severity: "error" });
        setAlertOpen(true);
      });
  };

  return (
    <div className="raiseEscalation" style={{ background: `url(${bg.Location})` }}>
      <MenuIcon setDrawerState={setDrawerState} color="var(--light-color)" />
      <h2>Raise Escalation</h2>
      <div className="raiseRequest-form">
        {!raiseEscalationVisibility ? (
          <Button
            variant="contained"
            className="raiseRequest-button"
            endIcon={<AddRounded />}
            onClick={() => setRaiseEscalationVisibility(prev => !prev)}
          >
            Raise Escalation
          </Button>
        ) : (
          <motion.div initial={{ height: 0, width: "100%" }} animate={{ height: "initial" }}>
            <form className="raise-escalation-container" onSubmit={e => handleSubmit(e)}>
              <h3>New Escalation</h3>
              <TextField
                multiline
                rows={4}
                required
                placeholder="Type here..."
                variant="outlined"
                name="escalation"
                style={{ width: "100%", marginTop: "20px" }}
                onChange={e => setEscalationData({ [e.target.name]: e.target.value })}
              />
              <div className="raiseRequest-buttons">
                <Button
                  variant="outlined"
                  color="primary"
                  type="button"
                  onClick={() => setRaiseEscalationVisibility(prev => !prev)}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
      <motion.div
        variants={raiseEscalationContainerVariants}
        initial="hidden"
        animate="visible"
        className="escalations-container"
      >
        {escalationsContainerLoader ? (
          <CircularProgress size={30} />
        ) : myEscalations.length === 0 ? (
          <p className="no-requests-msg">No Requests</p>
        ) : (
          <>
            <Modal
              // className={classes.modal}
              open={modalState}
              onClose={() => setModalState(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Fade in={modalState}>
                {/* <section className="request-comment-modal"> */}
                <ModalContents
                  uniqueID={myEscalations[requestClicked || 0]._id}
                  userID={userID}
                  userName={userName}
                  status={myEscalations[requestClicked || 0].status}
                  modalState={modalState}
                  setModalState={setModalState}
                />
                {/* </section> */}
              </Fade>
            </Modal>
            <Snackbar
              open={alertOpen}
              autoHideDuration={4000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: windowSize < 480 ? "center" : "left" }}
              // TransitionComponent={SlideTransition}
              // key="bottom left"
            >
              <Alert onClose={handleClose} severity={snackbarMsg.severity}>
                {snackbarMsg.alertMsg}
              </Alert>
            </Snackbar>
            <motion.section
              className="allEscalations-container"
              varaints={raiseEscalationContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {myEscalations.map(({ status, date, time, escalation }, i) => {
                return (
                  <motion.div
                    variants={raiseEscalationItemVariants}
                    key={i}
                    className="request-item"
                    style={{
                      border:
                        (status === "pending" && "2px solid #ffcd00") ||
                        (status === "accepted" && "2px solid #28ff00") ||
                        (status === "rejected" && "2px solid #dadada"),
                      background:
                        (status === "pending" && "rgb(255 204 0 / 10%)") ||
                        (status === "accepted" && "rgb(40 255 0 / 10%)") ||
                        (status === "rejected" && "rgb(217 217 217 / 50%)"),
                      color: status === "rejected" && "#bbbbbb",
                    }}
                    onClick={() => {
                      setModalState(!modalState);
                      setRequestClicked(i);
                    }}
                  >
                    <ul
                      className="request-status"
                      style={{
                        background:
                          (status === "pending" && "#ffcd00") ||
                          (status === "accepted" && "#28ff00") ||
                          (status === "rejected" && "#dadada"),
                        textTransform: "capitalize",
                      }}
                    >
                      {status}
                      {(status === "pending" && <AutorenewRounded className="request-status-icon" />) ||
                        (status === "accepted" && <DoneRounded className="request-status-icon" />) ||
                        (status === "rejected" && <CloseRounded className="request-status-icon" />)}
                    </ul>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                      <div className="request-item-request">{escalation}</div>
                    </div>
                    <div className="request-dateNtime">
                      {date}
                      <b>,</b> at {time}
                    </div>
                  </motion.div>
                );
              })}
            </motion.section>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default RaiseRequest;
