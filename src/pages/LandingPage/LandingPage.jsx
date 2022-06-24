import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
import { hero } from '../../assets'

const LandingPage = () => {
    return (
        <div className='container'>
            <div className="landing-page">
                <div className="header">
                    <h1 className='header_title'><span className='black-text'>Note</span>Beat</h1>
                    <div className='header_text'>
                        <h3>Take Note With NoteBeat <br /> A Note Taking app</h3>
                        <p>Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
                    </div>
                    <Link className='header_btn' to="/home">Start Now</Link>
                </div>
                <div className="hero-image">
                    <img src='/hero.svg' alt="hero" />
                </div>
            </div>
        </div>
    )
}

export { LandingPage }