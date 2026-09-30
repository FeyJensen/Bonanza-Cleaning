const TESTIMONIALS = [
  {
    quote:
      "Bonanza Cleaning has been servicing my home for two years now and I've never had a bad experience. They're always on time and incredibly thorough.",
    name: 'Sarah M.',
    role: 'Homeowner',
  },
  {
    quote:
      'We switched our office cleaning to Bonanza and the difference was immediate. Professional, reliable, and great communication.',
    name: 'David R.',
    role: 'Office Manager',
  },
  {
    quote:
      'Used them for a move-out clean and got my full deposit back. Worth every penny.',
    name: 'Priya K.',
    role: 'Renter',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial-card">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-card__name">{testimonial.name}</span>
                <span className="testimonial-card__role">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
