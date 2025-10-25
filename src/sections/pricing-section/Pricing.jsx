import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2 className="pricing-title">Pricing</h2>
      <p className="subtle" style={{textAlign:'center', marginTop:'6px'}}>Explore our pricing plans tailored to fit your needs.</p>
      <div className="pricing-container">
        <div className="pricing-card">
          <div className="card-inner">
            <h3 className="pricing-plan">Basic</h3>
            <p className="pricing-price">$9.99 <span style={{fontSize:'0.9rem', color:'var(--muted)'}}>/month</span></p>
            <button className="pricing-button">Get Started with Basic</button>

            <ul className="pricing-features">
              <li>Basic Platform Access</li>
              <li>Email Support</li>
              <li>Limited Data Storage</li>
            </ul>
          </div>
        </div>

        <div className="pricing-card">
          <div className="card-inner">
            <div className="popular-badge">Most popular</div>
            <h3 className="pricing-plan">Pro</h3>
            <p className="pricing-price">$19.99 <span style={{fontSize:'0.9rem', color:'var(--muted)'}}>/month</span></p>
            <button className="pricing-button">Get Started with Pro</button>

            <ul className="pricing-features">
              <li>Full Platform Access</li>
              <li>Email and Chat Support</li>
              <li>Unlimited Data Storage</li>
            </ul>
          </div>
        </div>

        <div className="pricing-card">
          <div className="card-inner">
            <h3 className="pricing-plan">Premium</h3>
            <p className="pricing-price">$29.99 <span style={{fontSize:'0.9rem', color:'var(--muted)'}}>/month</span></p>
            <button className="pricing-button">Get Started with Premium</button>

            <ul className="pricing-features">
              <li>Advanced Platform Access</li>
              <li>24/7 Support via Chat, and Phone</li>
              <li>Customized Features</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pricing-cta">
        <div>
          <h3>Unlock the Power of Web3 Today!</h3>
          <p>Join us on the journey to the decentralized future.</p>
        </div>
        <div>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
