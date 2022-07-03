import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import { useFeature } from '../../context';
import { sidebarData } from '../../static-data'
import './Sidebar.css'

const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "700" : "",
});

const Sidebar = () => {
    const { setShowAddNote } = useFeature();;
    const { pathname } = useLocation();
    return (
        <div className="sidebar">
            <div>
                <ul>
                    {sidebarData.map((item) => (
                        <li key={item._id}>
                            <NavLink style={getActiveStyle} to={item.path}>
                                <i className={item.icon} ></i>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {pathname == '/home' &&
                    <button className='note-editor-btn' onClick={() => setShowAddNote(true)} >Create New Note</button>}
            </div>

            <div className="profile">
                <Link to="/profile">
                    <div className="align-center">
                        <i className="fas fa-user-circle"></i>
                        <span>Profile</span>
                    </div>
                </Link>
                <i className="fas fa-sign-out-alt"></i>
            </div>

        </div>

    )
}

export { Sidebar }