export function FeaturedSection() {
  const features = [
    { icon: '🍽️', title: 'Fresh Food', desc: 'Made daily' },
    { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Professional team' },
    { icon: '⭐', title: 'Great Service', desc: '5-star rated' },
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
