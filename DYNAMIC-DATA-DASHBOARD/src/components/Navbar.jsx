function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">
          <i className="fa-solid fa-chart-line"></i>
        </div>

        <span>DataFlow</span>
      </div>

      <div className="navbar-status">
        <span className="status-dot"></span>
        Live Data
      </div>
    </nav>
  );
}

export default Navbar;