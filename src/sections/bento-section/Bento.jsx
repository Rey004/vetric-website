import React from 'react'
import './Bento.css'

const Chip = ({ icon, children }) => (
  <span className="chip">{icon}{children}</span>
)

const Bento = () => {
  return (
    <section className="bento-section">
      <h2 className="bento-title">Explore Our Feature</h2>
      <p className="bento-sub">Discover the powerful features that make our platform stand out</p>

      <div className="bento-top">
        <article className="bento-card large left">
          <div className="overlay" aria-hidden="true"></div>
          <div className="card-inner">
            <h3>Ready to go services</h3>
            <p className="muted">Streamlining solutions for swift success</p>

            <div className="chips">
              <Chip><img src="/assets/code_icon.svg" alt="" className="chips-icon" />Powerful APIs</Chip>
              <Chip><img src="/assets/string_icon.svg" alt="" className="chips-icon blend" />For Design</Chip>
              <Chip><img src="/assets/locker_icon.svg" alt="" className="chips-icon blend" />Cybersecurity</Chip>
              <Chip><img src="/assets/screen_icon.svg" alt="" className="chips-icon blend" />Decentralized</Chip>
              <Chip><img src="/assets/hand.svg" alt="" className="chips-icon blend" />Collaborative teams</Chip>
              <Chip><img src="/assets/locker_icon.svg" alt="" className="chips-icon blend" />Safe Space</Chip>
              <Chip><img src="/assets/rocket_icon.svg" alt="" className="chips-icon" />Revolution</Chip>
              <Chip><img src="/assets/scale_icon.svg" alt="" className="chips-icon blend" />Scalable</Chip>
              <Chip><img src="/assets/people_icon.svg" alt="" className="chips-icon blend" />For Teams</Chip>
              <Chip><img src="/assets/cube_icon.svg" alt="" className="chips-icon" />Decentralized</Chip>
              <Chip><img src="/assets/locker_icon.svg" alt="" className="chips-icon blend" />Cybersecurity</Chip>
              <Chip><img src="/assets/code_icon.svg" alt="" className="chips-icon blend" />Powerful APIs</Chip>
            </div>
          </div>
        </article>

        <article className="bento-card large right">
          <div className="overlay" aria-hidden="true"></div>
          <div className="card-inner">
            <h3>For growing teams</h3>
            <p className="muted">Tailored support to give you progress</p>

            <div className="cta-pill-wrap">
              <button className="pill"><img src="/assets/mail.svg" alt="" className="mail-icon" />Invite user to this team</button>
              <img src="/assets/gradient_line.svg" alt="" className="line" />
            </div>
          </div>
        </article>
      </div>

      <div className="bento-grid">
        <div className="bento-small code-card">
          <h4>Powerful APIs for developers</h4>
          <p className="muted">Seamless Integration for your company</p>
          <pre className="code-block"><code>
            <span className="token comment">// SPDX-License-Identifier: MIT</span>
            <br />
            <span className="token keyword">pragma</span> <span className="token type">solidity</span> <span className="token number">^0.8.0</span>;
            <br />
            <br />
            <span className="token keyword">import</span> <span className="token string">"./IERC20.sol"</span>;
            <br />
            <br />
            <span className="token keyword">contract</span> <span className="token function">MyToken</span> <span className="token keyword">is</span> <span className="token type">IERC20</span> {'{'}
            <br />
            &nbsp;&nbsp;<span className="token type">string</span> <span className="token keyword">public</span> <span className="token var">name</span> = <span className="token string">"MyToken"</span>;
            <br />
            &nbsp;&nbsp;<span className="token type">string</span> <span className="token keyword">public</span> <span className="token var">symbol</span> = <span className="token string">"MT"</span>;
            <br />
            {'}'}
          </code></pre>
        </div>

        <div className="bento-small icons-card">
          <h4>The best blockchains out there</h4>
          <p className="muted">Pioneering paths in decentralized solutions</p>
          <img src="/assets/icon_circle.svg" alt="" className="icon-circle" />
        </div>

        <div className="bento-small tags-card">
          <h4>Web 3.0 development</h4>
          <p className="muted">Crafting tomorrow's digital landscape today</p>

          <div className="chips">
            <Chip>Web 3.0 development</Chip>
            <Chip>Growth</Chip>
            <Chip>APIs</Chip>
            <Chip>Go-to-Market Solutions</Chip>
            <Chip>Easy-to-use interface</Chip>
            <Chip>Scalable</Chip>
            <Chip>Fast Integrations</Chip>
            <Chip>Accessibility</Chip>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bento
