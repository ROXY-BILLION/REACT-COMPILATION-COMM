function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <span className="section-label">React Forms</span>

        <h1>
          Build Your
          <span> Account</span>
        </h1>

        <p>
          A simple and professional registration experience built with
          React controlled components.
        </p>

        <a href="#register" className="hero-button">
          Register Now
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;