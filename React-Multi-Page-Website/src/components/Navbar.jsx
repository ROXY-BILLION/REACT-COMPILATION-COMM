import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <div className="brand-icon">
          <i className="fa-solid fa-cube"></i>
        </div>

        <span>NexaStore</span>
      </Link>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/products" onClick={closeMenu}>
          Products
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <i
          className={`fa-solid ${
            menuOpen ? "fa-xmark" : "fa-bars"
          }`}
        ></i>
      </button>
    </header>
  );
}

export default Navbar;