import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./Style/App.css";
import "./Style/Login.css";

import app_icon from "../img/app_icon.png";
import bg from "../img/bg.svg";
import mirror from "../img/mirror.svg";
import { useNavigate } from "react-router-dom";
import AuthContext from "./Auth/AuthProvider";
import axios from "axios";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <img src={mirror} className="wave" alt="" />
      <div className="mycontainer container w-screen h-screen grid grid-cols-2 gap-28 px-8">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <div className="login-content">
          {currentForm === "login" ? (
            <Login onFromSwitch={toggleForm} />
          ) : (
            <Register onFromSwitch={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
};

const Login = (props) => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [icon, setIcon] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setIcon(!icon);
  };

  const navigate = useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
        },[]);

  const LoginFunc = async (e) => {
    e.preventDefault();
    let payload = {
      "memberUserEmail": email,
      "memberUserPassword": pass
    };
    await login(payload);

    // try {
    //   const response = await axios.post("https://localhost:7120/api/Authenticate/Authenticate",
    //   JSON.stringify(payload),{
    //     headers: {"content-type" : "application/json"},
    //     withCredentials: false
    //   });
    //   console.log(JSON.stringify(response?.data));
    //   const accessToken = response?.data?.accessToken;
    //   const role = response?.data?.role;
    //   setAuth({ accessToken, email, role});
    // } catch (err) {
    //   if(!err?.response) {
    //     console.log(err.message);
    //   }else if(err.response?.status === 401){
    //     console.log("Missing email or password");
    //   }else {
    //     console.log("error");
    //   }
    // }
    // fetch("https://localhost:7120/api/Authenticate/Authenticate",{
    //   method: "POST",
    //   headers: {"content-type" : "application/json"},
    //   body:JSON.stringify(input)
    // }).then((res) => res.json()).then((resp) => {
    //   sessionStorage.setItem("email", email);
    //   sessionStorage.setItem("token", resp.accessToken);
    //   navigate("/Admin")

    // }).catch((err) => console.log(err.message))
  }
  return (
    <>
      <form className="login-form" onSubmit={LoginFunc}>
        <img src={app_icon} alt="" />
        <h2 className="title">Welcome</h2>
        <div className="input-div one">
          <i className="i">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </i>
          <div className="div">
            <input
              type="text"
              placeholder="Email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="input-div pass">
          <i className="i">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </i>
          <div className="div">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              className="input"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <i className="i ihover">
            <FontAwesomeIcon
              icon={icon ? faEyeSlash : faEye}
              onClick={togglePassword}
              style={{ cursor: "pointer" }}
            ></FontAwesomeIcon>
          </i>
        </div>
        <input type="submit" className="btn" value={"Login"}></input>
        <div className="signup_link">
          Now Member?{" "}
          <a onClick={() => props.onFromSwitch("register")}> Registers </a>
        </div>
      </form>
    </>
  );
};

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [icon, setIcon] = useState(true);
  const [confirmicon, setConfirmIcon] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setIcon(!icon);
  };
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
    setConfirmIcon(!confirmicon);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass, fname, lname);
  };
  return (
    <>
      <form className="login-form" onSubmit={handlerSubmit}>
        <img src={app_icon} alt="" />
        <h2 className="title">Register</h2>
        <div className="input-div one">
          <i className="i">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </i>
          <div className="div">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
            />
          </div>
        </div>
        <div className="input-div-name one">
          <i className="i">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </i>
          <div className="fdiv">
            <input
              type="text"
              placeholder="First Name"
              className="input"
              value={fname}
            />
          </div>
          <div className="ldiv">
            <input
              type="text"
              placeholder="Last Name"
              className="input"
              value={lname}
            />
          </div>
        </div>
        <div className="input-div one">
          <i className="i">
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          </i>
          <div className="div">
            <input
              type="phone"
              placeholder="Phone"
              className="input"
              value={pass}
            />
          </div>
        </div>
        <div className="input-div pass">
          <i className="i">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </i>
          <div className="div">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              className="input"
            />
          </div>
          <i className="i ihover">
            <FontAwesomeIcon
              icon={icon ? faEyeSlash : faEye}
              onClick={togglePassword}
              style={{ cursor: "pointer" }}
            ></FontAwesomeIcon>
          </i>
        </div>
        <div className="input-div pass">
          <i className="i">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </i>
          <div className="div">
            <input
              type={confirmPasswordShown ? "text" : "password"}
              placeholder="Confirm Password"
              className="input"
            />
          </div>
          <i className="i ihover">
            <FontAwesomeIcon
              icon={confirmicon ? faEyeSlash : faEye}
              onClick={toggleConfirmPassword}
              style={{ cursor: "pointer" }}
            ></FontAwesomeIcon>
          </i>
        </div>
        <input type="submit" className="btn" value={"REGISTER"}></input>
        <div className="signup_link">
          Already have an account?{" "}
          <a onClick={() => props.onFromSwitch("login")}>Login </a>
        </div>
      </form>
    </>
  );
};

export default App;
