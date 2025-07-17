import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <div className="content-sections">
        <div id="services" className="section-wrapper">
          <Services />
        </div>
        <div id="about" className="section-wrapper">
          <About />
        </div>
      </div>
    </div>
  )
}

export default Home
