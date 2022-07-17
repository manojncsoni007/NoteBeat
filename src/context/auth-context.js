import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { showToast } from "../utils/toast";

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
                setToken(encodedToken);
                setIsLoggedIn(true);
                setUser(foundUser);
                navigate("/home");
                localStorage.setItem("token", encodedToken);
                showToast("success","Logged in successfully")
            }
        } catch (error) {
            showToast("error",error)
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
            showToast("success","Signed up successfully")
        } catch (error) {
            showToast("error",error)
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