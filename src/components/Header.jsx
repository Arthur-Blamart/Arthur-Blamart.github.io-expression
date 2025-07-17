import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, on y retourne d'abord
      window.location.href = `/#${sectionId}`
    } else {
      // Si on est sur la page d'accueil, on scroll vers la section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMenu()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h1>Transports <span className="highlight">EXPRESS</span>ION</h1>
            <p className="location">29000 QUIMPER</p>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>À propos</a></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
