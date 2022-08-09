import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Comments from "./Comments";
import "./Chat.css";
import { ClearRounded, SendRounded, InsertDriveFileRounded } from "@material-ui/icons";
import axios from "axios";
import { motion } from "framer-motion";

let ENDPOINT = "https://better-co-admin.herokuapp.com";

// https://better-co-admin.herokuapp.com
// http://localhost:3001

const modalVariants = {
  hidden: { scale: 0, y: "100vh" },
  visible: { scale: 1, y: "0vh", transition: { type: "tween" } },
  exit: { scale: 0, y: "100vh" },
};

let socket = {};

const Chat = ({ uniqueID, projectID, userName, comments, status, setModalState }) => {
  // console.log(props.id);
  const [message, setMessage] = useState("");
  const [sendMsg, setSendMsg] = useState([]);
  const [file, setFile] = useState("");

  /*   useEffect(() => {
    "id" in socket
      ? 
        ? (socket = io(ENDPOINT))
        : socket.disconnect()
      :  && (socket = io(ENDPOINT));

    return () => {
       && socket.off();
    };
  }, []); */

  useEffect(() => {
    if (!("id" in socket)) {
      socket = io(ENDPOINT);
    }

    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    // console.log("join room");

    projectID && socket.emit("joinRoom", projectID);
    return () => {
      socket.off();
    };
  }, [projectID]);

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
    return `${date.toString().slice(4, 7)} ${date.toString().slice(8, 10)}, ${date.toString().slice(11, 15)}`;
  }
  const handleSubmit = e => {
    if (file) {
      const form = new FormData();
      Array.from(file).forEach((file, index) => {
        form.append(`chatDocs${index}`, file);
        form.append(`type${index}`, file.type);
      });
      form.append("_id", uniqueID);
      form.append("id", localStorage.getItem("clientID"));
      form.append("name", userName);
      form.append("time", timeFormat(new Date()));
      form.append("date", dateFormat(new Date()));
      form.append("room", projectID);
      axios.post("https://better-co-admin.herokuapp.com/commentDocsUpload", form).then(({ data }) => {
        setMessage("");
        // setSendMsg(data);
      });
      setFile(null);
    } else if (!message.replace(/\s/g, "").length <= 0) {
      // console.log("send msg");
      socket.emit(
        "sendComment",
        uniqueID,
        {
          message,
          id: localStorage.getItem("clientID"),
          name: userName,
          time: timeFormat(new Date()),
          date: dateFormat(new Date()),
          type: "text",
        },
        projectID,
        () => {
          setSendMsg({
            message,
            id: localStorage.getItem("clientID"),
            name: userName,
            time: timeFormat(new Date()),
            date: dateFormat(new Date()),
            type: "text",
          });
          setMessage("");
        }
      );
    }
  };

  useEffect(() => {
    // console.log("recieve msg");
    socket.on("recieveComment", msg => {
      setSendMsg(msg);
      setMessage("");
      return () => {
        socket.off();
      };
    });
  }, []);

  /*   useEffect(() => {
    console.log(message);
  }, [message]); */

  useEffect(() => {
    file && document.getElementById("chatInputArea").focus();
  }, [file]);

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="commentBox"
    >
      <section
        style={{
          padding: "10px 20px",
          background: "var(--color-palette-1)",
          display: "flex",
          justifyContent: "space-between",
          color: "var(--light-color)",
        }}
      >
        {/* Hi {userName}!{windowSize < 480 && <ClearRounded onClick={() => null} />} */}
        Comments
        <ClearRounded style={{ cursor: "pointer" }} onClick={() => setModalState(false)} />
      </section>
      <section style={{ overflowY: "auto", height: "100%" }}>
        <Comments sendMsg={sendMsg} _id={uniqueID} />
      </section>
      <section>
        <div className="input-area">
          <input
            type="text"
            id="chatInputArea"
            value={message}
            placeholder="Comment..."
            autoComplete="off"
            onChange={e => {
              setMessage(e.target.value);
            }}
            onKeyUp={e => {
              if (e.keyCode === 13 || e.key === 13 || e.keyIdentifier === 13) {
                if (file) {
                  // console.log("send file");
                  const form = new FormData();
                  Array.from(file).forEach((file, index) => {
                    form.append(`chatDocs${index}`, file);
                    form.append(`type${index}`, file.type);
                  });
                  // form.append("image", file);
                  form.append("_id", uniqueID);
                  form.append("id", localStorage.getItem("clientID"));
                  form.append("name", userName);
                  form.append("time", timeFormat(new Date()));
                  form.append("date", dateFormat(new Date()));
                  // form.append("type", file.type);
                  form.append("room", projectID);
                  axios
                    .post("https://better-co-admin.herokuapp.com/commentDocsUpload", form)
                    .then(({ data }) => {
                      //console.log(data);
                      // setSendMsg(data);
                      setMessage("");
                    });
                  setFile(null);
                } else if (!message.replace(/\s/g, "").length <= 0) {
                  // console.log("send msg");
                  socket.emit(
                    "sendComment",
                    uniqueID,
                    {
                      message,
                      id: localStorage.getItem("clientID"),
                      name: userName,
                      time: timeFormat(new Date()),
                      date: dateFormat(new Date()),
                      type: "text",
                    },
                    projectID,
                    () => {
                      setSendMsg({
                        message,
                        id: localStorage.getItem("clientID"),
                        name: userName,
                        time: timeFormat(new Date()),
                        date: dateFormat(new Date()),
                        type: "text",
                      });
                      setMessage("");
                    }
                  );
                }
              }
            }}
          />
          <div onClick={e => handleSubmit(e)} id="sendMsg" style={{ background: "var(--color-palette-1)" }}>
            {message ? (
              <label className="chatImageLabel">
                <SendRounded />
              </label>
            ) : (
              <>
                <label htmlFor="chatimage" className="chatImageLabel">
                  <InsertDriveFileRounded />
                </label>
                <input
                  type="file"
                  hidden
                  id="chatimage"
                  multiple
                  // accept=".jpg"
                  onChange={e => {
                    setFile(e.target.files);
                    e.target.files.length > 1
                      ? setMessage(`${e.target.files.length} files selected`)
                      : setMessage(e.target.files[0].name);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Chat;
