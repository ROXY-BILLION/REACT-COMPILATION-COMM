function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo">
          TaskFlow
        </a>

        <span className="navbar-text">
          React Task Manager
        </span>
      </div>
    </nav>
  );
}

export default Navbar;