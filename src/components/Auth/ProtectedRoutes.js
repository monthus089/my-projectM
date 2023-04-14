import { useContext } from "react"
import AuthContext from "./AuthProvider"

const ProtectedRoutes = ({ children, accessBy }) => {
    const { user } = useContext(AuthContext);

    if(accessBy === "non-authenticated") {
        if(!user) {
            return children;
        }
    }else if(accessBy === "authenticated") {
        if(user) {
            return children;
        }
    }
}

export default ProtectedRoutes