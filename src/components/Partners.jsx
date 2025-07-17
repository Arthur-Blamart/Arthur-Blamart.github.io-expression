import './Partners.css'

function Partners() {
  const partners = [
    {
      name: 'TNT',
      logo: '🟠',
      description: 'Sure we can'
    },
    {
      name: 'GLS',
      logo: '🟡',
      description: 'General Logistics Systems'
    },
    {
      name: 'DPD',
      logo: '🔴',
      description: 'Dynamic Parcel Distribution'
    },
    {
      name: 'Relais Colis',
      logo: '🟢',
      description: 'Réseau de proximité'
    },
    {
      name: 'FedEx',
      logo: '🟣',
      description: 'Express delivery'
    }
  ]

  return (
    <section className="partners">
      <div className="container">
        <h2>Nos Partenaires</h2>
        <p className="section-subtitle">
          Nous travaillons avec les plus grands acteurs du transport
        </p>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo">{partner.logo}</div>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
