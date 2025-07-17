import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre message ! Nous vous répondrons rapidement.')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contactez-nous</h2>
        <p className="section-subtitle">
          Besoin d'un transport express ? Contactez-nous dès maintenant
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informations de contact</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Adresse</h4>
                <p>7 rue Lavoisier<br />29500 ERGUÉ GABÉRIC</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Téléphone</h4>
                <p>02 98 91 50 50</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>contact@transports-expression.fr</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h4>Horaires</h4>
                <p>Lundi - Vendredi: 8h00 - 18h00<br />Samedi: 8h00 - 12h00</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
