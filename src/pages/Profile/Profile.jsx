import React from 'react'
import { Sidebar } from '../../components'
import { useAuth } from '../../context'
import { showToast } from '../../utils/toast'
import './Profile.css'

const Profile = () => {
    const { user, setUser, setToken, setIsLoggedIn } = useAuth();
    const logoutHandler = () => {
        setIsLoggedIn(false);
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        showToast("success", "You logged out")
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