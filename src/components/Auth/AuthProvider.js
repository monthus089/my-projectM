import { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import notyf from "../../js/Notyf";
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
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/Authenticate/Authenticate`,
            payload);
            let token = (jwt_decode(response.data.accessToken));
            setUser(token);
            localStorage.setItem("tokens", JSON.stringify(response?.data));
        } catch (error) {
            console.log(error);
            if(error.response?.status === 401){
                notyf.error("Your email or password is incorrect.")
            }
        }
        
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