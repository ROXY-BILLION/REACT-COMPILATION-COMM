function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-icon">
            <i className="fa-solid fa-clapperboard"></i>
          </div>

          <div>
            <h3>Show Explorer</h3>
            <p>Discover your next favorite show.</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#popular">Popular</a>
          <a href="#explore">Explore</a>
        </div>

        <div className="social-links">
          <a href="#github" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="#twitter" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a href="#instagram" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Powered by TVmaze API · Built with React
        </p>
      </div>
    </footer>
  );
}

export default Footer;