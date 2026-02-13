const testimonials = [
  { text: 'The best restaurant in town! Love the food.', author: 'John D.' },
  { text: 'Amazing atmosphere and great service.', author: 'Sarah M.' },
  { text: 'My favorite place to dine. Highly recommend!', author: 'Mike R.' },
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <div className="decorative-line"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-text">"{item.text}"</p>
              <span className="testimonial-author">- {item.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
