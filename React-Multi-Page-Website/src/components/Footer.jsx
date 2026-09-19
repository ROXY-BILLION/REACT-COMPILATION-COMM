import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-icon">
            <i className="fa-solid fa-cube"></i>
          </div>

          <div>
            <h3>NexaStore</h3>
            <p>Modern technology for modern creators.</p>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="social-links">
          <a href="#github" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="#x" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a href="#instagram" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NexaStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;