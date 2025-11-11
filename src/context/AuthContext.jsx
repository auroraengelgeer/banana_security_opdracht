import React, {createContext} from "react";




export const AuthContext = createContext(null);

function AuthContextProvider({children}) {


    const [isAuthenticated, toggleIsAuthenticated] = React.useState(false);

    const data = {
        isAuthenticated,
        toggleIsAuthenticated,
    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;