function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <a href="#" className="brand">
            <span className="brand-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </span>

            <span>EduTrack</span>
          </a>

          <p>
            Simple student management for modern education.
          </p>
        </div>

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 EduTrack. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;