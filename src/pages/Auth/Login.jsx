import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context';
import './Auth.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { loginUser } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();
        loginUser(email, password, setError);
    }

    const dummyHandler = async (e) => {
        e.preventDefault();
        setEmail('manojsoni@gmail.com');
        setPassword('manoj123');
        loginUser('manojsoni@gmail.com', 'manoj123');
    }

    return (
        <>
            <div className="main-section">
                <main className="auth-container">
                    <form onSubmit={(e) => loginHandler(e)}>
                        <h2 className="form-title">Login</h2>
                        <div className="auth-input-container">
                            <label htmlFor="email">Email Address *</label>
                            <input type="text" id="email" value={email} className="input" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" required />
                        </div>
                        <div className="auth-input-container">
                            <label htmlFor="password">Password *</label>
                            <input type="password" value={password} id="password" className="input" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
                        </div>
                        <button className="guest-btn" onClick={(e) => dummyHandler(e)}>Use Guest Credentials</button>
                        <button className="auth-btn">Login</button>
                        {error && <p>Invalid Email or Password</p>}
                        <div className="flex-center">
                            <Link to="/signup"> Create New Account <i className="fa fa-chevron-right"></i></Link>
                        </div>
                    </form>
                </main>
            </div>

        </>
    )
}

export { Login }