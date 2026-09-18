function PageHeader() {
  return (
    <section className="page-header" id="home">
      <div className="hero-content">
        <p className="hero-label">
          <i className="fa-solid fa-film"></i>
          API POWERED EXPLORER
        </p>

        <h1>
          Find Your Next
          <span> Great Show</span>
        </h1>

        <p className="hero-description">
          Search thousands of shows, discover new favorites,
          and explore detailed information all in one place.
        </p>
      </div>

      <div className="hero-decoration">
        <i className="fa-solid fa-clapperboard"></i>
      </div>
    </section>
  );
}

export default PageHeader;