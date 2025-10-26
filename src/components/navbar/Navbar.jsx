import React from 'react'
import { createPortal } from 'react-dom'
import './Navbar.css'
import logo from '/assets/logo.svg'
import vetricText from '/assets/VETRIC.svg'
import globe from '/assets/Globe.svg'

const Navbar = () => {
  const [isLight, setIsLight] = React.useState(() => {
    try {
      return document.documentElement.classList.contains('light')
    } catch {
      return false
    }
  })

  const toggleTheme = () => {
    const root = document.documentElement
    const willBeLight = !root.classList.contains('light')
    if (willBeLight) root.classList.add('light')
    else root.classList.remove('light')
    setIsLight(willBeLight)
  }

  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('home')

  const toggleMenu = () => setMenuOpen(v => !v)
  const closeMenu = () => setMenuOpen(false)

  const scrollToSection = (id, { close = false } = {}) => {
    try {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.location.hash = `#${id}`
    } catch {
      window.location.hash = `#${id}`
    }
    if (close) closeMenu()
  }

  // lock body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // close on Escape
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeMenu() }
    if (menuOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // scrollspy: observe sections and update active nav link
  React.useEffect(() => {
    const ids = ['home', 'pricing', 'features', 'contact']
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      // pick the entry with largest intersectionRatio
      const visible = entries.filter(e => e.isIntersecting)
      if (visible.length) {
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        setActiveSection(visible[0].target.id)
      } else {
        // if none intersecting, find the closest by bounding rect
        const distances = sections.map(s => ({ id: s.id, top: Math.abs(s.getBoundingClientRect().top) }))
        distances.sort((a, b) => a.top - b.top)
        setActiveSection(distances[0].id)
      }
    }, { root: null, threshold: [0.35, 0.5, 0.75] })

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-icon" />
          <img src={vetricText} alt="Vetric" className="vetric-logo" />
        </div>

        <nav className="navlinks" aria-label="Main navigation">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }} className={activeSection === 'pricing' ? 'active' : ''}>Pricing</a>
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features') }} className={activeSection === 'features' ? 'active' : ''}>Features</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>

        <div className="accessibility">
          <a className="login-link" href="#login">Login</a>
          <a className="signup-btn" href="#signup">Sign up</a>
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isLight ? (
              // show moon when light mode is active
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            ) : (
              // show sun by default
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
              </svg>
            )}
          </button>
          <button className="locale-btn" aria-label="Change language">
            <img src={globe} alt="" className="globe" />
            <svg className="chev" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <button className="burger" aria-label="Open menu" onClick={toggleMenu} aria-expanded={menuOpen}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.75h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M0 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M0 12.25h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="mobile-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isLight ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* mobile overlay menu rendered via portal to avoid stacking/stacking-context issues */}
      {menuOpen && createPortal(
        <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" onClick={closeMenu}>
          <div className="overlay-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" aria-label="Close menu" onClick={closeMenu}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="overlay-links">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home', { close: true }) }} className={activeSection === 'home' ? 'active' : ''}>Home</a>
              <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing', { close: true }) }} className={activeSection === 'pricing' ? 'active' : ''}>Pricing</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features', { close: true }) }} className={activeSection === 'features' ? 'active' : ''}>Features</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact', { close: true }) }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </div>

            <div className="overlay-actions">
              <a className="login-link" href="#login" onClick={closeMenu}>Login</a>
              <a className="signup-btn" href="#signup" onClick={closeMenu}>Sign up</a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default Navbar
