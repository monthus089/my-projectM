import React, { useState } from 'react';
import bg from "./img/bg.svg";
import mirror from "./img/mirror.svg";
import "./css/App.css";
import "./css/Login.css";
import "./js/Login.js"
// import { Login } from "./component/Login.js"
// import { Register } from "./component/Register"
import app_icon from "./img/app_icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <img src={mirror} className="wave" alt="" />
      <div className="container">
        <div className="img">
          <img src={bg} alt="" />
        </div>
        <div className="login-content">
          {
            currentForm === "login" ? <Login onFromSwitch={toggleForm} /> : <Register onFromSwitch={toggleForm} />
          }
        </div>
      </div>
    </div>
  );
}

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
      setPasswordShown(!passwordShown);
  };

  const handlerSubmit = (e) => {
      e.preventDefault();
      console.log(email)
  }
  return (
      <div>
          <form className="login-form" onSubmit={handlerSubmit}>
              <img src={app_icon} alt="" />
              <h2 className="title">Welcome</h2>
              <div className="input-div one">
                  <i className="i">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </i>
                  <div className="div">
                      <input type="text" placeholder="Email" className="input" />
                  </div>
              </div>
              <div className="input-div pass">
                  <i className="i">
                      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </i>
                  <div className="div">
                      <input type={passwordShown ? "text" : "password"} placeholder="Password" className="input" />

                  </div>
                  <i className="i">
                      <FontAwesomeIcon icon={faEye} onClick={togglePassword}></FontAwesomeIcon>
                  </i>
              </div>
              <input type="submit" class="btn" value={"Login"}></input>
              <div class="signup_link">
                  Now Member? <a onClick={() => props.onFromSwitch("register")}> Registers </a>
              </div>
          </form>
      </div>
  );
}

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = () => {
      setPasswordShown(!passwordShown);
  };
  const toggleConfirmPassword = () => {
      setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handlerSubmit = (e) => {
      e.preventDefault();
      console.log(email)
  }
  return (
      <div>
          <form className="login-form" onSubmit={handlerSubmit}>
              <img src={app_icon} alt="" />
              <h2 className="title">Register</h2>
              <div className="input-div one">
                  <i className="i">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </i>
                  <div className="div">
                      <input type="text" placeholder="Email" className="input" />
                  </div>
              </div>
              <div className="input-div-name one">
                  <i className="i">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </i>
                  <div className="fdiv">
                      <input type="text" placeholder="First Name" className="input" />
                  </div>
                  <div className="ldiv">
                      <input type="text" placeholder="Last Name" className="input" />
                  </div>
              </div>
              <div className="input-div pass">
                  <i className="i">
                      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </i>
                  <div className="div">
                      <input type={passwordShown ? "text" : "password"} placeholder="Password" className="input" />
                  </div>
                  <i className="i">
                      <FontAwesomeIcon icon={faEye} onClick={togglePassword}></FontAwesomeIcon>
                  </i>
              </div>
              <div className="input-div pass">
                  <i className="i">
                      <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </i>
                  <div className="div">
                      <input type={confirmPasswordShown ? "text" : "password"} placeholder="Confirm Password" className="input" />

                  </div>
                  <i className="i">
                      <FontAwesomeIcon icon={faEye} onClick={toggleConfirmPassword}></FontAwesomeIcon>
                  </i>
              </div>
              <input type="submit" class="btn" value={"REGISTER"}></input>
              <div class="signup_link">
                  Already have an account? <a onClick={() => props.onFromSwitch("login")}>Login </a>
              </div>
          </form>
      </div>
  )
}

export default App;
