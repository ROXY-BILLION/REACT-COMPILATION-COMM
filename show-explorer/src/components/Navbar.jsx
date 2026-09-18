function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="brand-icon">
          <i className="fa-solid fa-clapperboard"></i>
        </div>

        <div>
          <h2>Show Explorer</h2>
          <span>Discover your next favorite show</span>
        </div>
      </div>

      <div className="nav-links">
        <a href="#home" className="active">
          <i className="fa-solid fa-house"></i>
          Home
        </a>

        <a href="#popular">
          <i className="fa-solid fa-fire"></i>
          Popular
        </a>

        <a href="#top-rated">
          <i className="fa-solid fa-star"></i>
          Top Rated
        </a>

        <a href="#explore">
          <i className="fa-solid fa-compass"></i>
          Explore
        </a>
      </div>

      <button className="theme-button" type="button">
        <i className="fa-solid fa-moon"></i>
      </button>
    </nav>
  );
}

export default Navbar;