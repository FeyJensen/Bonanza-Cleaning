import heroImage from '../assets/hero-living-room.jpeg'

function Hero() {
  return (
    <section id="top" className="hero">
      <img src={heroImage} alt="" className="hero__bg-image" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">A warm welcome home</p>
          <h1>Come home to a clean that feels like family.</h1>
          <p className="hero__subtitle">
            Bonanza Cleaning brings warmth and care to every visit &mdash;
            friendly, trustworthy cleaners who treat your home like their own.
            Fully insured, background-checked, and backed by a 100%
            satisfaction guarantee.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Get a Free Quote
            </a>
            <a href="#services" className="btn btn--ghost">
              View Services
            </a>
          </div>
          <ul className="hero__badges">
            <li>✔ Insured & Bonded</li>
            <li>✔ Satisfaction Guaranteed</li>
            <li>✔ Eco-Friendly Products</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
