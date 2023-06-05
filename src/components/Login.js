import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import "./Style/App.css";
import "./Style/Login.css";

import app_icon from "../img/app_icon.png";
import bg from "../img/bg.svg";
import mirror from "../img/mirror.svg";
import { useNavigate } from "react-router-dom";
import AuthContext from "./Auth/AuthProvider";
import notyf from "../js/Notyf";

const Login = () => {
  const { login } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [icon, setIcon] = useState(true);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const routes = {
    PM00: "/Admin",
    PM01: "/Advisor",
    PM02: "/Advisor",
    PM03: "/Student",
    "": "/",
    null: "/",
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setIcon(!icon);
  };

  const LoginFunc = async (e) => {
    e.preventDefault();
    let payload = {
      memberUserEmail: email,
      memberUserPassword: pass,
    };
    const emailRegex =
      /^\d+\d{11}@dpu.ac.th$/.test(email) || /^\w+@dpu.ac.th$/.test(email);
    let newErrors = {};

    if (!emailRegex) {
      notyf.error("Please enter a valid email address.")
      return;
    } 

    setErrors(newErrors);

    try {
      await login(payload) 
      navigate(routes[user?.role] ?? "/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img src={mirror} className="wave" alt="" />
      <div className="mycontainer container w-screen h-screen grid grid-cols-2 gap-28 px-8">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <div className="login-content">
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
              onChange={(e) => setEmail(e.target.value.trim())}
              required
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
              onChange={(e) => setPass(e.target.value.trim())}
              required
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
      </form>
        </div>
      </div>
    </>
  );
};

export default Login;
