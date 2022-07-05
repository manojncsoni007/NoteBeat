import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        try {
            const {
                data: { foundUser, encodedToken }, status
            } = await axios.post('/api/auth/login', { email, password });
            if (status === 200) {
                console.log(foundUser);
                setToken(encodedToken);
                setIsLoggedIn(true);
                setUser(foundUser);
                navigate("/home");
                localStorage.setItem("token", encodedToken);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const signupUser = async (firstName, lastName, email, password,) => {
        try {
            const {
                data: { createdUser, encodedToken }
            } = await axios.post('/api/auth/signup', {
                firstName, lastName, email, password
            });
            setIsLoggedIn(true);
            setToken(encodedToken);
            localStorage.setItem("token", encodedToken);
            setUser(createdUser);
            navigate('/home');
        } catch (error) {
           console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn, 
            setIsLoggedIn, 
            token, 
            setToken, 
            user, 
            setUser, 
            loginUser, 
            signupUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }