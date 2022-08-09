import React, { useEffect, useState } from "react";
import MenuIcon from "../Menu Icon";
import "./style.css";
import {
  Button,
  MenuItem,
  TextField,
  Modal,
  Backdrop,
  Fade,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { AddRounded, AutorenewRounded, DoneRounded, CloseRounded } from "@material-ui/icons";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import ModalContents from "./ModalContents";
import { motion } from "framer-motion";

const allFloors = ["Ground Floor", "First Floor", "Second Floor", "Third Floor", "Fourth Floor"];

// https://better-co-admin.herokuapp.com
// http://localhost:3001

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const raiseRequestContainerVariants = {
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

const raiseRequestItemVariants = {
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

const RaiseRequest = ({ props: { elevation, projectID, projectName, userName }, setDrawerState, bg }) => {
  const [floor, setFloor] = useState([]);
  const [requestData, setRequestData] = useState({});
  const [requestsContainerLoader, setRequestsContainerLoader] = useState(true);
  const [allRequests, setAllRequests] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [requestClicked, setRequestClicked] = useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState({});
  const [raiseRequestVisibility, setRaiseRequestVisibility] = useState(false);
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

  useEffect(() => {
    switch (elevation) {
      case "Ground Floor": {
        return setFloor(allFloors.slice(0, 1));
      }
      case "Ground+1 Floor": {
        return setFloor(allFloors.slice(0, 2));
      }
      case "Ground+2 Floor": {
        return setFloor(allFloors.slice(0, 3));
      }
      case "Ground+3 Floor": {
        return setFloor(allFloors.slice(0, 4));
      }
      case "Ground+4 Floor": {
        return setFloor(allFloors.slice(0, 5));
      }
      default: {
        return null;
      }
    }
  }, [elevation]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  useEffect(() => {
    axios.get(`https://better-co-admin.herokuapp.com/myRequests/${projectID}`).then(({ data }) => {
      if (data) {
        setAllRequests([...data].reverse());
        setRequestsContainerLoader(false);
      }
    });
  }, [projectID]);

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
      .post("https://better-co-admin.herokuapp.com/storeRequest", {
        ...requestData,
        projectID,
        projectName,
        userName,
        time: timeFormat(new Date()),
        date: dateFormat(new Date()),
      })
      .then(({ data }) => {
        if (data) {
          setRaiseRequestVisibility(prev => !prev);
          setAllRequests([data, ...allRequests]);
          setSnackbarMsg({ alertMsg: "Request Raised", severity: "success" });
          setAlertOpen(true);
        }
      })
      .catch(() => {
        // console.log(false);
        setSnackbarMsg({ alertMsg: "Failed to Raise Request!", severity: "error" });
        setAlertOpen(true);
      });
  };

  return (
    <div className="raiseRequest" style={{ background: `url(${bg})` }}>
      <MenuIcon setDrawerState={setDrawerState} color="var(--light-color)" />
      <h2>Raise Request</h2>
      <div className="raiseRequest-form">
        {!raiseRequestVisibility ? (
          <Button
            variant="contained"
            className="raiseRequest-button"
            endIcon={<AddRounded />}
            onClick={() => setRaiseRequestVisibility(prev => !prev)}
          >
            Raise Request
          </Button>
        ) : (
          <motion.div initial={{ height: 0, width: "100%" }} animate={{ height: "initial" }}>
            <form className="raise-request-container" onSubmit={e => handleSubmit(e)}>
              <h3>New Request</h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  variant="outlined"
                  size="small"
                  select
                  required
                  label="Category"
                  name="category"
                  style={{ width: "45%" }}
                  onChange={e => setRequestData({ ...requestData, [e.target.name]: e.target.value })}
                >
                  <MenuItem value="Structural">Structural</MenuItem>
                  <MenuItem value="Electrical">Electrical</MenuItem>
                  <MenuItem value="Plumbing">Plumbing</MenuItem>
                  <MenuItem value="Floor Plans">Floor Plans</MenuItem>
                  <MenuItem value="Doors">Doors</MenuItem>
                  <MenuItem value="Windows">Windows</MenuItem>
                </TextField>
                <TextField
                  variant="outlined"
                  size="small"
                  select
                  required
                  label="Floor"
                  name="floor"
                  style={{ width: "45%" }}
                  onChange={e => setRequestData({ ...requestData, [e.target.name]: e.target.value })}
                >
                  {floor.map((floorName, i) => {
                    return (
                      <MenuItem key={i} value={floorName}>
                        {floorName}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </div>
              <TextField
                multiline
                rows={4}
                required
                placeholder="Type request here..."
                variant="outlined"
                name="request"
                style={{ width: "100%", marginTop: "20px" }}
                onChange={e => setRequestData({ ...requestData, [e.target.name]: e.target.value })}
              />
              <div className="raiseRequest-buttons">
                <Button
                  variant="outlined"
                  color="primary"
                  type="button"
                  onClick={() => setRaiseRequestVisibility(prev => !prev)}
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
        variants={raiseRequestContainerVariants}
        initial="hidden"
        animate="visible"
        className="requests-container"
      >
        {requestsContainerLoader ? (
          <CircularProgress size={30} />
        ) : allRequests.length === 0 ? (
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
                  uniqueID={allRequests[requestClicked || 0]._id}
                  projectID={projectID}
                  userName={userName}
                  status={allRequests[requestClicked || 0].status}
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
            <motion.section className="allrequest-container" variants={raiseRequestContainerVariants}>
              {allRequests.map(({ status, date, time, category, floor, request }, i) => {
                return (
                  <motion.div
                    variants={raiseRequestItemVariants}
                    initial="hidden"
                    animate="visible"
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
                    <ul className="request-item-info">
                      <ul>
                        Category: <strong>{category}</strong>
                      </ul>
                      <ul>
                        Floor: <strong>{floor}</strong>
                      </ul>
                    </ul>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                      <div
                        className="request-item-request"
                        /*                       style={{
                            border:
                              (status === "pending" && "1px solid rgb(255 204 0 / 30%)") ||
                              (status === "accepted" && "1px solid rgb(40 255 0 / 30%)") ||
                              (status === "rejected" && "1px solid rgb(217 217 217 / 100%)"),
                          }} */
                      >
                        {request}
                      </div>
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
