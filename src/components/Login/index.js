import React, { useState, useEffect } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import { storeAuth } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import BetterLogo from "../../assets/Better Logo Vertical.png";
import BgImgLeft from "../../assets/LoginPageBg.jpg";
import BgImgRight from "../../assets/whyusImages/arc2.png";
import "./style.css";

// https://better-co-admin.herokuapp.com
// http://localhost:3001

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      flexDirection: "column",
    },
  },
  buttonField: {
    margin: "10px 15px",
    borderRadius: "20px",
  },
  textField: {
    margin: "10px 15px",
    [`& fieldset`]: {
      height: 40,
      borderRadius: 20,
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState({});
  const [inputError, setInputError] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    axios.post("https://better-co-admin.herokuapp.com/clientSignIn", inputValue).then(({ data }) => {
      if (data === "wrong email") {
        setInputError({ ...inputError, email: true });
      } else if (data === "wrong passwd") {
        setInputError({ password: true, email: false });
      } else {
        setInputError({ password: false, email: false });
        history.push("/myProfile");
        localStorage.setItem("clientID", data.clientID);
        dispatch(storeAuth(true));
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keypress", e => {
      if (e.keyCode === 13) {
        axios.post("https://better-co-admin.herokuapp.com/clientSignIn", inputValue).then(({ data }) => {
          if (data === "wrong email") {
            setInputError({ ...inputError, email: true });
          } else if (data === "wrong passwd") {
            setInputError({ password: true, email: false });
          } else {
            setInputError({ password: false, email: false });
            history.push("/myProfile");
            localStorage.setItem("clientID", data.clientID);
            dispatch(storeAuth(true));
          }
        });
      }
    });
  });

  return (
    <div className="login-main-container">
      <section className="login-left-section">
        <div className="login-page-blob1"></div>
        <div className="login-page-blob2">
          <img src={BetterLogo} alt="" className="login-better-logo" />
          <img src={BgImgLeft} alt="" className="login-bg-img-left" />
        </div>
      </section>
      <section className="login-right-section">
        <form>
          <h5>Login</h5>
          <TextField
            type="email"
            className={classes.textField}
            variant="filled"
            size="small"
            label="Email"
            name="personalEmail"
            error={inputError.email}
            helperText={inputError.email && "Invalid Email"}
            required
            onChange={e => setInputValue({ ...inputValue, [e.target.name]: e.target.value })}
          />
          <TextField
            type="password"
            className={classes.textField}
            variant="filled"
            size="small"
            label="Password"
            name="password"
            error={inputError.password}
            helperText={inputError.password && "Incorrect Password"}
            required
            onChange={e => setInputValue({ ...inputValue, [e.target.name]: e.target.value })}
          />
          <Button
            color="primary"
            variant="contained"
            className={classes.buttonField}
            style={{ background: "var(--dark-color)" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
        {/* <img src={BgImgRight} alt="" className="login-bg-img-right" /> */}
      </section>
    </div>
  );
};

export default Login;
