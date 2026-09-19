import { Link } from "react-router-dom";

function About() {
  return (
    <main className="page-container">
      <section className="page-hero">
        <p className="eyebrow">ABOUT NEXASTORE</p>

        <h1>Technology that works for you.</h1>

        <p>
          We believe great technology should make work,
          creativity, and everyday life simpler.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <div className="large-icon">
            <i className="fa-solid fa-lightbulb"></i>
          </div>

          <h2>Our Mission</h2>

          <p>
            NexaStore exists to make modern technology
            easier to discover. We focus on useful products
            that combine performance, reliability, and
            thoughtful design.
          </p>
        </div>

        <div className="about-card">
          <div className="large-icon">
            <i className="fa-solid fa-users"></i>
          </div>

          <h2>Built for Everyone</h2>

          <p>
            Whether you're a developer building your next
            project, a creator producing content, or someone
            upgrading your setup, our catalogue is designed
            around real-world needs.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div>
          <strong>6+</strong>
          <span>Products</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Support</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Quality Focus</span>
        </div>
      </section>

      <div className="center-button">
        <Link to="/products" className="primary-button">
          Explore Our Products
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </main>
  );
}

export default About;