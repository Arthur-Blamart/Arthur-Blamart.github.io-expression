import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Transport Express</h2>
          <h3>Votre partenaire logistique en Bretagne</h3>
          
          <div className="about-points">
            <div className="point">
              <h4>📍 Finistère (29)</h4>
              <p>40+ véhicules et chauffeurs</p>
            </div>
            
            <div className="point">
              <h4>🚛 Livraison express</h4>
              <p>Toute la région</p>
            </div>
            
            <div className="point">
              <h4>📦 Tous colis</h4>
              <p>Solutions adaptées</p>
            </div>
            
            <div className="point">
              <h4>🌍 Toutes distances</h4>
              <p>Local et national</p>
            </div>
            
            <div className="point">
              <h4>⏰ Tournées</h4>
              <p>Partenaires fiables</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
