import React from 'react'
import './Navbar.css'
import { MdOutlineEditNote } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-title">
                    <MdOutlineEditNote color='primary' size="2.3rem"/>
                    <h2><span className="primary-text">NoteBeat</span></h2>
                </div>
            </div>
        </>
    )
}

export { Navbar }