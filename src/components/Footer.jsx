import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><a className="brand brand--footer" href="#top"><span className="brand-mark">D</span><span>Delicious <i>Hub</i></span></a><p>A neighbourhood table for seasonal ingredients, warm conversation, and unhurried meals.</p></div>
        <div><h3>Explore</h3><Link to="/about">Our story</Link><Link to="/menu">Menu</Link><Link to="/gallery">Gallery</Link></div>
        <div><h3>Hours</h3><p>Tue – Thu: 12pm – 10pm<br />Fri – Sat: 12pm – 11pm<br />Sunday: 12pm – 9pm</p></div>
        <div><h3>Visit us</h3><p>42 Connaught Place<br />New Delhi, India 110001<br />+91 11 5550 0184</p><a href="mailto:hello@delicioushub.in">hello@delicioushub.in</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Delicious Hub</span><span>Made for good gatherings.</span></div>
    </footer>
  );
}

export default Footer;
