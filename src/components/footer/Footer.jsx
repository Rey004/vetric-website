import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/logo.svg" alt="" className="logo" />
          <img src="/assets/VETRIC.svg" alt="" className="logo-text" />
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="copyright">VETRIC - 2024</div>

        <div className="center-pill">
          <span className="pill-dot" aria-hidden="true" />
          <span className="pill-text">Operating System</span>
        </div>

        <div className="socials">
          {/* placeholders for icons - links empty as requested */}
          <img className="icon" src="/assets/instagram.svg" alt="instagram" />
          <img className="icon" src="/assets/facebook.svg" alt="facebook" />
          <img className="icon" src="/assets/youtube.svg" alt="youtube" />
          <img className="icon" src="/assets/linkedin.svg" alt="linkedin" />
          <img className="icon" src="/assets/twitter.svg" alt="twitter" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
