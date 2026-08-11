import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-intro"><Link className="brand brand--footer" to="/"><span className="brand-mark">D</span><span>Delicious <i>Hub</i></span></Link><p>Thoughtful food, warm hospitality, and an open invitation to gather in the heart of New Delhi.</p><div className="social-links"><a href="https://instagram.com" aria-label="Follow Delicious Hub on Instagram">ig</a><a href="https://facebook.com" aria-label="Follow Delicious Hub on Facebook">f</a><a href="https://x.com" aria-label="Follow Delicious Hub on X">x</a></div></div>
        <div className="footer-links"><h3>Explore</h3><Link to="/about">Our story</Link><Link to="/menu">Menu</Link><Link to="/gallery">Gallery</Link><Link to="/reservations">Reservations</Link></div>
        <div><h3>Opening hours</h3><p>Tuesday – Thursday<br /><strong>12pm – 10pm</strong></p><p>Friday – Saturday<br /><strong>12pm – 11pm</strong></p><p>Sunday<br /><strong>12pm – 9pm</strong></p></div>
        <div><h3>Visit us</h3><p>42 Connaught Place<br />New Delhi, India 110001</p><a className="footer-contact" href="tel:+911155500184">+91 11 5550 0184</a><a className="footer-contact" href="mailto:hello@delicioushub.in">hello@delicioushub.in</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Delicious Hub. All rights reserved.</span><span>Made for good gatherings.</span></div>
    </footer>
  );
}

export default Footer;
