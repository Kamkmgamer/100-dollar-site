import { delay } from '@/lib/delays';
import { TemplateLayout } from '@/components/TemplateLayout';

export default async function ContactPage() {
  await delay(1500);

  return (
    <TemplateLayout>
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>

      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><strong>Address:</strong> 123 Main Street, Anytown, USA 12345</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@bellaitalia.example.com</p>
            
            <h3 style={{ marginTop: '30px' }}>Hours</h3>
            <p>Mon-Thu: 11:00 AM - 9:00 PM</p>
            <p>Fri-Sat: 11:00 AM - 10:00 PM</p>
            <p>Sunday: 12:00 PM - 8:00 PM</p>

            <div className="map-placeholder">
              Map Loading...
            </div>
          </div>
        </div>
      </div>
    </TemplateLayout>
  );
}
