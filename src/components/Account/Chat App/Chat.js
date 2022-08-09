import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Messages from "./Messages/Messages";
import "./Chat.css";
import { Fab } from "@material-ui/core";
import { ClearRounded, ChatBubbleRounded, InsertDriveFileRounded, SendRounded } from "@material-ui/icons";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { socket } from "../index";
import Compressor from "compressorjs";

let ENDPOINT = "https://better-co-admin.herokuapp.com";

// https://better-co-admin.herokuapp.com
// http://localhost:3001

export let opened;
const Chat = ({ props, msgCount, setMsgCount }) => {
  // console.log(props.id);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState("");
  const [sendMsg, setSendMsg] = useState();
  const [chatBox, setChatBox] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [uploading, setUploading] = useState([]);

  useEffect(() => {
    opened = chatBox;
    if (chatBox && msgCount > 0) {
      setMsgCount(0);
      axios
        .post("https://better-co-admin.herokuapp.com/resetMsgCount", { clientID: props.clientID })
        .then(({ data }) => {});
    }
  }, [chatBox, msgCount]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*   useEffect(() => {
    socket = io(ENDPOINT);

    return () => {
      socket.off();
    };
  }, []); */

  /*   useEffect(() => {
    "id" in socket
      ? chatBox
        ? (socket = io(ENDPOINT))
        : socket.disconnect()
      : chatBox && (socket = io(ENDPOINT));

    return () => {
      chatBox && socket.off();
    };
  }, [chatBox]); */

  /*   useEffect(() => {
    socket = io(ENDPOINT);
  }, []); */

  useEffect(() => {
    // console.log("join room");

    /* chatBox && */ props.id && socket.emit("joinRoom", props.id);
    return () => {
      /* chatBox && */ socket.off();
    };
  }, [props.id]);

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
  const handleSubmit = async e => {
    if (files) {
      // console.log("send file");
      const form = new FormData();
      Array.from(files).forEach((file, index) => {
        form.append(`chatDocs${index}`, file);
        form.append(`type${index}`, file.type);
        setUploading(prev => [
          ...prev,
          { fileName: file.name, time: timeFormat(new Date()), name: props.name },
        ]);
      });

      /* const compressedImages = new Promise((resolve, reject) => {
        Array.from(files).forEach((file, index) => {
          if (file["type"].split("/")[0] === "image") {
            new Compressor(file, {
              quality: 0.6,
              success(result) {
                console.log(result.name, result.type);
                form.append(`chatDocs${index}`, result, result.name);
                form.append(`type${index}`, result.type);
                setUploading(prev => [
                  ...prev,
                  { fileName: result.name, time: timeFormat(new Date()), name: props.name },
                ]);
                Array.from(files).length - 1 === index && resolve("Resolved!");
              },
            });
          } else {
            form.append(`chatDocs${index}`, file);
            form.append(`type${index}`, file.type);
            setUploading(prev => [
              ...prev,
              { fileName: file.name, time: timeFormat(new Date()), name: props.name },
            ]);
            Array.from(files).length - 1 === index && resolve("Resolved!");
          }
        });
      });

      await compressedImages.then(data => console.log(data)); */

      form.append("id", localStorage.getItem("clientID"));
      form.append("props.name", props.name);
      form.append("time", timeFormat(new Date()));
      form.append("date", dateFormat(new Date()));
      form.append("room", props.id);
      form.append("stage", props.stage);
      axios.post("https://better-co-admin.herokuapp.com/chatImgUpload", form).then(({ data }) => {
        //console.log(data);
      });
      setFiles(null);
    } else if (!message.replace(/\s/g, "").length <= 0) {
      // console.log("send msg");
      socket.emit(
        "sendMsg",
        {
          message,
          id: localStorage.getItem("clientID"),
          name: props.name,
          time: timeFormat(new Date()),
          date: dateFormat(new Date()),
          type: "text",
          stage: props.stage,
        },
        props.id,
        "",
        () => {
          setSendMsg({
            message,
            id: localStorage.getItem("clientID"),
            name: props.name,
            time: timeFormat(new Date()),
            date: dateFormat(new Date()),
            type: "text",
            stage: props.stage,
          });
          setMessage("");
        }
      );
    }
  };

  useEffect(
    () => {
      // console.log("recieve msg");
      // chatBox &&
      socket.on("recieveMsg", msg => {
        setSendMsg(msg);
        setMessage("");
        setUploading([]);
        // console.log("recieved");
        setMsgCount(prev => prev + 1);
        return () => {
          /* chatBox && */ socket.off();
        };
      });
    },
    [
      /* chatBox */
    ]
  );

  /*   useEffect(() => {
    console.log(message);
  }, [message]); */

  useEffect(() => {
    files && document.getElementById("chatInputArea").focus();
  }, [files]);

  return (
    <motion.div
      initial={{ y: "10vh", opacity: 0.5, scale: 0 }}
      animate={{ y: "0vh", opacity: 1, scale: 1 }}
      style={{ position: "fixed", bottom: "10px", right: "50px", zIndex: "1" }}
    >
      <AnimatePresence>
        {chatBox && (
          <motion.div
            initial={{ y: "30vh", opacity: 0.5, scale: 0.5, originX: windowSize > 480 ? "right" : "center" }}
            animate={{ y: "0vh", opacity: 1, scale: 1 }}
            exit={{ y: "30vh", opacity: 0, scale: 0.5, transition: { type: "tween", duration: 0.2 } }}
            // transition={{ type: windowSize < 480 ? "tween" : "spring" }}
            className="chatbox"
          >
            <section
              style={{
                padding: "10px 20px",
                background: "#1daeff",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Hi {props.name}!{windowSize < 480 && <ClearRounded onClick={() => setChatBox(!chatBox)} />}
            </section>
            <section style={{ overflowY: "auto", height: "100%" }}>
              <Messages sendMsg={sendMsg} projectID={props.id} uploading={uploading} />
            </section>
            <section>
              <div className="input-area">
                <input
                  type="text"
                  id="chatInputArea"
                  value={message}
                  placeholder="Type..."
                  autoComplete="off"
                  onChange={e => {
                    setMessage(e.target.value);
                    setFiles(null);
                  }}
                  onKeyUp={async e => {
                    if (e.keyCode === 13 || e.key === 13 || e.keyIdentifier === 13) {
                      if (files) {
                        // console.log("send file");
                        const form = new FormData();
                        Array.from(files).forEach((file, index) => {
                          form.append(`chatDocs${index}`, file);
                          form.append(`type${index}`, file.type);
                          setUploading(prev => [
                            ...prev,
                            { fileName: file.name, time: timeFormat(new Date()), name: props.name },
                          ]);
                        });

                        /* const compressedImages = new Promise((resolve, reject) => {
                          Array.from(files).forEach((file, index) => {
                            if (file["type"].split("/")[0] === "image") {
                              new Compressor(file, {
                                quality: 0.6,
                                success(result) {
                                  console.log(result.name, result.type);
                                  form.append(`chatDocs${index}`, result, result.name);
                                  form.append(`type${index}`, result.type);
                                  setUploading(prev => [
                                    ...prev,
                                    { fileName: result.name, time: timeFormat(new Date()), name: props.name },
                                  ]);
                                  Array.from(files).length - 1 === index && resolve("Resolved!");
                                },
                              });
                            } else {
                              form.append(`chatDocs${index}`, file);
                              form.append(`type${index}`, file.type);
                              setUploading(prev => [
                                ...prev,
                                { fileName: file.name, time: timeFormat(new Date()), name: props.name },
                              ]);
                              Array.from(files).length - 1 === index && resolve("Resolved!");
                            }
                          });
                        });

                        await compressedImages.then(data => console.log(data)); */

                        form.append("id", localStorage.getItem("clientID"));
                        form.append("name", props.name);
                        form.append("time", timeFormat(new Date()));
                        form.append("date", dateFormat(new Date()));
                        // form.append("type", file.type);
                        form.append("room", props.id);
                        form.append("stage", props.stage);
                        axios
                          .post("https://better-co-admin.herokuapp.com/chatImgUpload", form)
                          .then(({ data }) => {
                            //console.log(data);
                            setMessage("");
                          });
                        setFiles(null);
                      } else if (!message.replace(/\s/g, "").length <= 0) {
                        // console.log("send msg");
                        socket.emit(
                          "sendMsg",
                          {
                            message,
                            id: localStorage.getItem("clientID"),
                            name: props.name,
                            time: timeFormat(new Date()),
                            date: dateFormat(new Date()),
                            type: "text",
                            stage: props.stage,
                          },
                          props.id,
                          "",
                          () => {
                            setSendMsg({
                              message,
                              id: localStorage.getItem("clientID"),
                              name: props.name,
                              time: timeFormat(new Date()),
                              date: dateFormat(new Date()),
                              type: "text",
                              stage: props.stage,
                            });
                            setMessage("");
                          }
                        );
                      }
                    }
                  }}
                />
                <div onClick={e => handleSubmit(e)} id="sendMsg">
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
                          setFiles(e.target.files);
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
        )}
      </AnimatePresence>
      {windowSize > 480 ? (
        <Fab
          color="primary"
          style={{
            background: "var(--color-gradient)",
            height: "60px",
            width: "60px",
            position: "relative",
            float: "right",
            margin: "15px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setChatBox(!chatBox)}
        >
          {chatBox ? (
            <motion.div
              key="collapse"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="chatIcon"
            >
              <ClearRounded />
            </motion.div>
          ) : (
            <motion.div
              key="expand"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="chatIcon"
            >
              <ChatBubbleRounded />
              {msgCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="notification-bubble"
                >
                  {msgCount < 10 ? msgCount : "9+"}
                </motion.div>
              )}
            </motion.div>
          )}
        </Fab>
      ) : (
        !chatBox && (
          <Fab
            color="primary"
            style={{
              background: "var(--color-gradient)",
              height: "60px",
              width: "60px",
              position: "relative",
              float: "right",
              margin: "15px 0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setChatBox(!chatBox)}
          >
            <ChatBubbleRounded />
            {msgCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
                className="notification-bubble"
              >
                {msgCount < 10 ? msgCount : "9+"}
              </motion.div>
            )}
          </Fab>
        )
      )}
    </motion.div>
  );
};

export default Chat;
