import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            MODERN TECHNOLOGY
          </p>

          <h1>
            Build your world with
            <span> better technology.</span>
          </h1>

          <p className="hero-text">
            Discover carefully selected technology and
            accessories designed for developers, creators,
            professionals, and everyday users.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-button">
              Explore Products
              <i className="fa-solid fa-arrow-right"></i>
            </Link>

            <Link to="/about" className="secondary-button">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <i className="fa-solid fa-microchip"></i>
          </div>

          <div className="floating-card floating-card-one">
            <i className="fa-solid fa-laptop"></i>
            <span>Powerful</span>
          </div>

          <div className="floating-card floating-card-two">
            <i className="fa-solid fa-bolt"></i>
            <span>Fast</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>

          <div>
            <h3>Quality Products</h3>
            <p>
              Carefully selected technology built for
              everyday performance.
            </p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-truck-fast"></i>
          </div>

          <div>
            <h3>Fast Delivery</h3>
            <p>
              Get your technology delivered quickly and
              safely.
            </p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <i className="fa-solid fa-headset"></i>
          </div>

          <div>
            <h3>Customer Support</h3>
            <p>
              We're available whenever you need help.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED</p>
            <h2>Popular Products</h2>
          </div>

          <Link to="/products" className="view-all">
            View all
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;