import React, { useEffect, useState } from "react";
import axios from "axios";
import ScrollToBottom from "react-scroll-to-bottom";
import ModalImage from "react-modal-image";
import { CircularProgress } from "@material-ui/core";
import { InsertDriveFileRounded } from "@material-ui/icons";
import "./Messages.css";

// https://better-co-admin.herokuapp.com
// http://localhost:3001

const Messages = ({ sendMsg, projectID, stage, style, uploading }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    projectID &&
      axios.get(`https://better-co-admin.herokuapp.com/chats/${projectID}`).then(({ data }) => {
        if (data) {
          // console.table(data[data.length-1].stage ," AND ", stage);
          // console.log(data.filter(msg => msg.stage === stage));
          // console.log(data);
          stage ? setMessages(data.filter(msg => msg.stage === stage)) : setMessages(data);
        }
      });
  }, [projectID, stage]);

  useEffect(() => {
    sendMsg &&
      (Array.isArray(sendMsg)
        ? setMessages(messages => [...messages, ...sendMsg])
        : setMessages(messages => [...messages, sendMsg]));
  }, [sendMsg]);

  let prevDate = "";

  return (
    <ScrollToBottom className="messages">
      {messages.length !== 0 ? (
        <>
          <div className="padding"></div>
          {messages.map(({ message: msg, id, name, time, date, links, type }, index) => {
            return (
              <div key={index}>
                {date !== prevDate ? <p className="date">{date}</p> : null}
                <div style={{ display: "none" }}>{date !== prevDate ? (prevDate = date) : null}</div>

                <div
                  className="message"
                  style={{ alignItems: id === localStorage.getItem("clientID") ? "flex-end" : "flex-start" }}
                >
                  {type?.split("/")[0] === "image" ? (
                    links.map(({ link, name: imgname }, index) => (
                      <div
                        key={index}
                        style={{
                          background: id === localStorage.getItem("clientID") ? "" : "#b228f9",
                          padding: "5px 5px 0px 5px",
                        }}
                        className={style}
                      >
                        <p style={{ margin: "1", fontSize: "11px", opacity: "0.8" }}>{name}</p>
                        <ModalImage
                          small={link}
                          medium={link}
                          large={link}
                          alt={imgname}
                          // style={{ borderRadius: "10px", width: "100%", objectFit: "cover" }}
                        />
                        <p className="time">{time}</p>
                      </div>
                    ))
                  ) : type === "text" ? (
                    <div style={{ background: id === localStorage.getItem("clientID") ? "" : "#b228f9" }}>
                      <p style={{ margin: "0", fontSize: "11px", opacity: "0.8" }}>{name}</p>
                      {msg}
                      <p className="time">{time}</p>
                    </div>
                  ) : (
                    links.map(({ link, name: docname }, index) => (
                      <div
                        key={index}
                        style={{
                          background: id === localStorage.getItem("clientID") ? "" : "#b228f9",
                          padding: "5px 5px 0px 5px",
                        }}
                      >
                        <p style={{ margin: "1", fontSize: "11px", opacity: "0.8" }}>{name}</p>
                        <p>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <InsertDriveFileRounded fontSize="small" className="message-file-icon" />
                            <a
                              href={link}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                textDecoration: "none",
                                color: "white",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              {docname}
                            </a>
                          </div>
                        </p>
                        <p className="time">{time}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
          {uploading?.length > 0 &&
            uploading.map(({ name, time, fileName }, i) => {
              return (
                <div className="message" key={i}>
                  <div>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "11px",
                        opacity: "0.8",
                        width: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {name}
                    </p>
                    <div className="uploading">
                      <div style={{ marginRight: "10px" }}>
                        <CircularProgress size={15} color="white" />
                      </div>
                      <div>{fileName}</div>
                    </div>
                    <p className="time">{time}</p>
                  </div>
                </div>
              );
            })}
          <div className="padding"></div>
        </>
      ) : (
        <div className="no-messages">
          <p>No Messages</p>
        </div>
      )}
    </ScrollToBottom>
  );
};

export default Messages;
