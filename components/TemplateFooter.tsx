export function TemplateFooter() {
  return (
    <footer className="template-footer">
      <div className="footer-widgets">
        <div className="widget">
          <h4>About Us</h4>
          <p>Bella Italia is your destination for authentic Italian cuisine. We serve the best pasta, pizza, and more!</p>
        </div>

        <div className="widget">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="widget">
          <h4>Contact Info</h4>
          <p>123 Main Street</p>
          <p>Anytown, USA 12345</p>
          <p>(555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Bella Italia. All Rights Reserved.</p>
        <p className="template-credit">
          Restaurant Theme by <a href="#">ThemeForestAuthor</a>
        </p>
        <div className="social-icons">
          <a href="#" className="social-icon">FB</a>
          <a href="#" className="social-icon">IG</a>
          <a href="#" className="social-icon">TW</a>
        </div>
      </div>
    </footer>
  );
}
