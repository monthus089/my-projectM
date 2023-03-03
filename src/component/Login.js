import React, { useState } from 'react';
import app_icon from "../img/app_icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock ,faEnvelope} from '@fortawesome/free-solid-svg-icons'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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
                        <input type="text" placeholder="Email" className="input" value={email} />
                    </div>
                </div>
                <div className="input-div pass">
                    <i className="i">
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                    </i>
                    <div className="div">
                        <input type="password" placeholder="Password" className="input" value={pass} />
                    </div>
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