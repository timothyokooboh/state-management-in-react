import { createContext } from "react";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const userDetails = { firstName: "timothy", surname: "jon", age: 29 }

    return <UserContext.Provider value={{ ...userDetails }}>
        { children }
    </UserContext.Provider>
    
}

export default UserContextProvider