const SERVICES = [
  {
    icon: '🏠',
    title: 'Residential Cleaning',
    description:
      'Recurring or one-time cleans for houses and apartments, tailored to your schedule.',
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    description:
      'Offices, retail spaces, and facilities kept spotless with flexible after-hours service.',
  },
  {
    icon: '🧼',
    title: 'Deep Cleaning',
    description:
      'A top-to-bottom clean covering baseboards, appliances, grout, and hard-to-reach spots.',
  },
  {
    icon: '📦',
    title: 'Move In/Out Cleaning',
    description:
      'Get your deposit back or start fresh with a thorough move-in or move-out clean.',
  },
  {
    icon: '🪟',
    title: 'Window Cleaning',
    description:
      'Streak-free interior and exterior window cleaning for homes and businesses.',
  },
  {
    icon: '🛋️',
    title: 'Carpet & Upholstery',
    description:
      'Professional-grade steam cleaning that lifts stains and refreshes fabric.',
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">
          Straightforward pricing, no long-term contracts, and cleaners you can trust.
        </p>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card">
              <span className="service-card__icon">{service.icon}</span>
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
