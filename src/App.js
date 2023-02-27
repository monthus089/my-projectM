import bg from "./img/bg.svg";
import mirror from "./img/mirror.svg";
import app_icon from "./img/app_icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import "./App.css";

function App() {
  return (
    <div>
      <img src={mirror} className ="fixed hidden lg:block inset-0 h-full " style={{ zIndex: "-1" }} alt="logo" />
      <div className= "w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img src={bg} className="hidden lg:block w-4/5 transition-all duration-500 transform mx-auto" alt=""/>
        <form className="flex flex-col justify-center items-center w-1/2">
          <img src={app_icon} className="w-33" alt=""/>
          <h2 className="my-8 font-display  text-6xl text-gray-700 text-center">WELCOME</h2>
          <div className="relative">
            <i className="absolute text-purple-600 text-2xl"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> </i>
            <input type="text" placeholder="Email" className="pl-8 border-b-2 font-display focus:outline-none focus:border-purple-600 transition-all duration-500 capitalize text-xl"/>
          </div>
          <div className="relative mt-8">
            <i className="absolute text-purple-600 text-2xl"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></i>
            <input type="password" placeholder="Password" className="pl-8 border-b-2 font-display focus:outline-none focus:border-purple-600 transition-all duration-500 capitalize text-xl"/>
          </div>
          <div className="p-5"></div>
          <a href=" " className="py-3 px-20 bg-purple-600 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Login</a>
          <div className="self-center mt-4 text-gray-600 font-bold">Now Member?<a href=" " className="self-center mt-4 text-blue-500 font-bold" > Register</a></div>
        </form>
      </div>
    </div>
  );
}

export default App;
