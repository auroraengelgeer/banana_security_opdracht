import React, {createContext} from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null);

function AuthContextProvider({children}) {


    const [isAuthenticated, toggleIsAuthenticated] = React.useState(false);
    const navigate = useNavigate();


    function logIn () {
        toggleIsAuthenticated(true);
        console.log("De gebruiker is ingelogd!")
        navigate("/profile");
    }

    function logOut () {
        toggleIsAuthenticated(false);
        console.log("De gebruiker is uitgelogd!")
        navigate("/");
    }

    const data = {
        isAuthenticated,
        logIn,
        logOut,
    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;