import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero" id='home'>
            <div className="glow"></div>
            <h1 className="hero-title">Build the Future
                with Web</h1>
            <p className="hero-description">Discover how we can help you connect with the next generation of the internet.</p>
            <div className="connect">
                <a href="#signup" className="signup">Sign up</a>
                <a href="#contact" className="contact">Contact sales</a>
            </div>
        </div>
    )
}

export default Hero