import { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        if(localStorage.getItem("tokens")) {
            let tokenData = JSON.parse(localStorage.getItem("tokens"));
            let token = (jwt_decode(tokenData.accessToken));
            return token;
        }
        return null;
    });
    const login = async (payload) => {
        const response = await axios.post("https://localhost:7120/api/Authenticate/Authenticate",
        payload);
        console.log(response.data)
        let token = (jwt_decode(response.data.accessToken));
        console.log(token);
        setUser(token);
        localStorage.setItem("tokens", JSON.stringify(response?.data));
    }

    const logout = () => {
        localStorage.removeItem("tokens");
        setUser(null);
    }

    return <AuthContext.Provider value={{login, user, logout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;