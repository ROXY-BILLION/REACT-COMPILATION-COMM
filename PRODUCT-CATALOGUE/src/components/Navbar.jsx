function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo">
          TechStore
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#products">Products</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;