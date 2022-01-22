import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext"

const Home = () => {
   const { isAuthenticated, toggleAuth } = useContext(AuthContext);
   const { firstName } = useContext(UserContext);
    return ( 
        <div>
            This is the home view { firstName }. 
            <p>You are { isAuthenticated ? "logged in" : "logged out" } </p>
            <button onClick={toggleAuth}>Toggle Auth</button>
        </div>
    );
}
 
export default Home;