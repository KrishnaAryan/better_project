import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import ModalImage from "react-modal-image";
import { InsertDriveFileRounded } from "@material-ui/icons";
import axios from "axios";
import "./styles.css";

// https://better-co-admin.herokuapp.com
// http://localhost:3001

const Messages = ({ sendMsg, _id }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Array.isArray(sendMsg)
      ? setMessages(messages => [...messages, ...sendMsg])
      : setMessages(messages => [...messages, sendMsg]);
  }, [sendMsg]);

  useEffect(() => {
    _id &&
      axios.get(`https://better-co-admin.herokuapp.com/fetchEscalationComments/${_id}`).then(({ data }) => {
        // console.log(data);
        setMessages(data);
      });
  }, [_id]);

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
                  className="comment"
                  style={{ alignItems: id === localStorage.getItem("clientID") ? "flex-end" : "flex-start" }}
                >
                  {type === "image/png" || type === "image/jpeg" ? (
                    links.map(({ link, name: imgname }, index) => (
                      <div
                        key={index}
                        style={{
                          background:
                            id === localStorage.getItem("clientID") ? "var(--color-palette-1)" : "#ebebeb",
                          color:
                            id === localStorage.getItem("clientID") ? "#ebebeb" : "var(--color-palette-1)",
                          padding: "5px 5px 0px 5px",
                        }}
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
                    <div
                      style={{
                        background:
                          id === localStorage.getItem("clientID") ? "var(--color-palette-1)" : "#ebebeb",
                        color: id === localStorage.getItem("clientID") ? "#ebebeb" : "var(--color-palette-1)",
                      }}
                    >
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
                      {msg}
                      <p className="time">{time}</p>
                    </div>
                  ) : (
                    links.map(({ link, name: docname }, index) => (
                      <div
                        key={index}
                        style={{
                          background:
                            id === localStorage.getItem("clientID") ? "var(--color-palette-1)" : "#ebebeb",
                          color:
                            id === localStorage.getItem("clientID") ? "#ebebeb" : "var(--color-palette-1)",
                          padding: "5px 5px 0px 5px",
                        }}
                      >
                        <p style={{ margin: "1", fontSize: "11px", opacity: "0.8" }}>{name}</p>
                        <p>
                          <span style={{ display: "flex", alignItems: "center" }}>
                            <InsertDriveFileRounded fontSize="small" className="message-file-icon" />
                            <a
                              href={link}
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color:
                                  id === localStorage.getItem("clientID")
                                    ? "#ebebeb"
                                    : "var(--color-palette-1)",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                              }}
                            >
                              {docname}
                            </a>
                          </span>
                        </p>
                        <p className="time">{time}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
          <div className="padding"></div>
        </>
      ) : (
        <div className="no-messages">
          <p>No Comments</p>
        </div>
      )}
    </ScrollToBottom>
  );
};

export default Messages;
