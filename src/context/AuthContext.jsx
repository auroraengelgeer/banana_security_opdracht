import React, {createContext} from "react";




export const AuthContext = createContext(null);

function AuthContextProvider({children}) {

    const [user, setUser] = React.useState({
        username: "Aurora",
        password: "aurora123",
    });

    const data = {
        user,
        setUser,
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;