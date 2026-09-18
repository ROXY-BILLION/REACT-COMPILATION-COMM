function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div>
          <a href="#" className="logo">
            <i className="fa-solid fa-layer-group"></i>
            ReactForm
          </a>

          <p>
            A frontend React form handling project.
          </p>
        </div>

        <div className="social-links">
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ReactForm. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;