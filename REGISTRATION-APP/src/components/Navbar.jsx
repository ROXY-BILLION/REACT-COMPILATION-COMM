function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          <i className="fa-solid fa-layer-group"></i>
          ReactForm
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#register">Register</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#register" className="nav-button">
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;