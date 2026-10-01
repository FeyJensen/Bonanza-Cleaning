import aboutImage from '../../src/assets/kitchen.jpg'

const STATS = [
  { value: '15+', label: 'Years in business' },
  { value: '5,000+', label: 'Cleans completed' },
  { value: '5/5', label: 'Stars on Yelp!' },
]

function About() {
  return (
    <section id="about" className="about">
      <img src={aboutImage} alt="A clean rustic kitchen with wooden accents" className="about__bg-image"/>
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
            <li>Flexible scheduling, including evenings and weekends</li>
            <li>100% satisfaction guarantee on every clean</li>
            <li>Transparent, upfront pricing with no hidden fees</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
