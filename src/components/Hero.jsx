import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Vos livraisons, <span className="highlight">notre métier</span> !!!</h2>
          <p>Service professionnel de transport express et livraison</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Demander un devis</Link>
            <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="road-animation">
          <div className="road"></div>
          <div className="vehicle"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
