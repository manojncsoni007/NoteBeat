import React from 'react'
import { Sidebar } from '../../components'
import { useAuth } from '../../context'
import './Profile.css'

const Profile = () => {
    const { user, setUser, setToken, setIsLoggedIn } = useAuth();
    const logoutHandler = () => {
        setIsLoggedIn(false);
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
    }
    return (
        <>
            <div className="main-section">
                <div className="grid-container">
                    <aside>
                        <Sidebar />
                    </aside>
                    <div className="main-page">
                        <div className="profile-page">
                            <div className="profile-container">
                                <h3>Profile</h3>
                                <div className='profile-field'>
                                    <p>Name : {user.firstName} {user.lastName}</p>
                                    <p>Email : {user.email}</p>
                                </div>
                                <button className='logout-btn' onClick={logoutHandler}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Profile }