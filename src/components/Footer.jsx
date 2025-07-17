import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Transports <span className="highlight">EXPRESS</span>ION</h3>
            <p>Votre partenaire de confiance pour tous vos transports express et livraisons en Bretagne et partout en France.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/#services">Transport Express</a></li>
              <li><a href="/#services">Messagerie</a></li>
              <li><a href="/#services">Transport B2B</a></li>
              <li><a href="/#services">Livraison Programmée</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📍 7 rue Lavoisier, 29500 ERGUÉ GABÉRIC</li>
              <li>📞 02 98 91 50 50</li>
              <li>✉️ contact@transports-expression.fr</li>
              <li><Link to="/contact">📝 Formulaire de contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Horaires</h4>
            <ul>
              <li>Lundi - Vendredi: 8h00 - 18h00</li>
              <li>Samedi: 8h00 - 12h00</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Transports Expression. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
