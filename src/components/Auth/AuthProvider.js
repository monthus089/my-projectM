import { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const login = async (payload) => {
        const response = await axios.post("https://localhost:7120/api/Authenticate/Authenticate",
        payload);
        console.log(response.data)
        let token = (jwt_decode(response.data.accessToken));
        console.log(token);
        setUser(token);

        // if(user.role === "PM00"){
        //     navigate("/Admin");
        // }else if(user.role === "PM01"){
        //     navigate("/Advisor");
        // }else if(user.role === "PM02"){
        //     navigate("/Advisor");
        // }else if(user.role === "PM03"){
        //     navigate("/Student");
        // }else {
        //     console.log("Missing your role");
        // }
    }

    return <AuthContext.Provider value={{login, user}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;