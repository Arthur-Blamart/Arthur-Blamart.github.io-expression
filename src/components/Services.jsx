import './Services.css'

function Services() {
  const services = [
    {
      icon: '🚚',
      title: 'Transport Express',
      description: 'Livraison rapide et sécurisée de vos colis et marchandises dans toute la région.'
    },
    {
      icon: '📦',
      title: 'Messagerie',
      description: 'Service de messagerie professionnel pour tous vos envois urgents.'
    },
    {
      icon: '🏢',
      title: 'Transport B2B',
      description: 'Solutions de transport dédiées aux entreprises et professionnels.'
    },
    {
      icon: '⏰',
      title: 'Livraison Programmée',
      description: 'Planifiez vos livraisons selon vos besoins avec notre service flexible.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nos Services</h2>
        <p className="section-subtitle">
          Nous proposons une gamme complète de services de transport et livraison
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
