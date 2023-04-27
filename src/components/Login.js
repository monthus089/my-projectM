import React, { useContext, useState } from "react";
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
import Swal from "sweetalert2";

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
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [icon, setIcon] = useState(true);
  const [errors, setErrors] = useState("");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setIcon(!icon);
  };

  const navigate = useNavigate();

  const LoginFunc = async (e) => {
    e.preventDefault();
    let payload = {
      memberUserEmail: email,
      memberUserPassword: pass,
    };
    const emailRegex = (/^\d+\d{11}@dpu.ac.th$/.test(email) || /^\w+@dpu.ac.th$/.test(email));
    const passwordRegex =
      /^(?=.*[0-9]).{8,24}$/;
    let newErrors = {};

    if (!emailRegex) {
      alert('Please enter a valid email address! \n "Uppercase letter or @dpu.ac.th"');
    } else if (!passwordRegex.test(pass)){
      alert('Password enter a valid!')
    }

    setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
      // alert(Object.values(newErrors).join(", "));
      try {
        await login(payload);
        if (user.role === "PM00") {
          navigate("/Admin");
        } else if (user.role === "PM01") {
          navigate("/Advisor");
        } else if (user.role === "PM02") {
          navigate("/Advisor");
        } else if (user.role === "PM03") {
          navigate("/Student");
        } else {
          navigate("");
        }
      } catch (error) {
        console.log(error);
      }
    // }
  };

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
              onChange={(e) => setPass(e.target.value)}
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
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [icon, setIcon] = useState(true);
  const [confirmicon, setConfirmIcon] = useState(true);
  const [errors, setErrors] = useState({});


  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setIcon(!icon);
  };
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
    setConfirmIcon(!confirmicon);
  }; 

  //validate
  const validate = () => {
    let newErrors = {};

    const emailRegex = (/^\d+\d{11}@dpu.ac.th$/.test(email) || /^\w+@dpu.ac.th$/.test(email));
    const passwordRegex = /^(?=.*[0-9]).{8,24}$/;

    if (!emailRegex) {
      newErrors.email = "Please enter a valid email";
    }
    if (!fname) {
      newErrors.firstName = "Please enter your first name";
    }
    if (!lname) {
      newErrors.lastName = "Please enter your last name";
    }
    if (!phone) {
      newErrors.lastName = "Please enter your Phone Number";
    }

    if (!passwordRegex.test(pass)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter";
    }
    if (pass !== confirmPass) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 

  const handlerSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      memberUserEmail: email,
      memberUserPassword: pass,
      phoneNumber: phone,
      fristname: fname,
      lastname: lname,
    };
    if (validate()) {
      try {
        const response = await axios.post("https://localhost:7120/api/MemberUser", payload);
        // console.log(response.data);
        props.onFromSwitch("login");
      } catch (error) {
        console.error(error);
      }
    }
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
              onChange={(e) => setEmail(e.target.value)}
              required
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
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="ldiv">
            <input
              type="text"
              placeholder="Last Name"
              className="input"
              value={lname}
              onChange={(e) => setLastName(e.target.value)}
              required
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={pass}
              onChange={(e) => setPass(e.target.value)}
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
        <div className="input-div pass">
          <i className="i">
            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
          </i>
          <div className="div">
            <input
              type={confirmPasswordShown ? "text" : "password"}
              placeholder="Confirm Password"
              className="input"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
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
