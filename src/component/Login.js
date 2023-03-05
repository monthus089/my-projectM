import React, { useState } from 'react';
import app_icon from "../img/app_icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export const Login = (props) => {
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
export default Login;