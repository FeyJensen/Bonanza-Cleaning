const STATS = [
  { value: '12+', label: 'Years in business' },
  { value: '5,000+', label: 'Cleans completed' },
  { value: '4.9/5', label: 'Average rating' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <h2>Why Families Trust Bonanza Cleaning</h2>
          <p>
            For over a decade, Bonanza Cleaning has helped neighbors turn
            houses into homes they love coming back to. Our team is
            warm-hearted, fully vetted, and equipped with gentle,
            eco-friendly supplies &mdash; because what touches your home should
            feel as good as it looks.
          </p>
          <ul className="about__list">
            <li>Background-checked and insured cleaning professionals</li>
            <li>Flexible scheduling, including evenings and weekends</li>
            <li>100% satisfaction guarantee on every clean</li>
            <li>Transparent, upfront pricing with no hidden fees</li>
          </ul>
        </div>
        <div className="about__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
