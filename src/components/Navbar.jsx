import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Menu', '/menu'],
  ['Gallery', '/gallery'],
  ['Reservations', '/reservations'],
  ['Contact', '/contact'],
];

function Navbar() {
  // useState remembers whether the mobile navigation is open.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink
          className="brand"
          to="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Delicious Hub home"
        >
          <span className="brand-mark">D</span>
          <span>
            Delicious <i>Hub</i>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;