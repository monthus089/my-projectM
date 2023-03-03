import React, { useState } from 'react';
import bg from "./img/bg.svg";
import mirror from "./img/mirror.svg";
import "./css/App.css";
import "./css/Login.css";
import "./js/Login.js"
import { Login } from "./component/Login.js"
import { Register } from "./component/Register"



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

export default App;
