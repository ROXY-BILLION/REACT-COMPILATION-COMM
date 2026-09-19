import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="page-container">
        <section className="not-found-inline">
          <div className="large-icon">
            <i className="fa-solid fa-box-open"></i>
          </div>

          <h1>Product Not Found</h1>

          <p>
            We couldn't find a product with ID {id}.
          </p>

          <Link
            to="/products"
            className="primary-button"
          >
            Back to Products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <i className="fa-solid fa-chevron-right"></i>

        <Link to="/products">Products</Link>

        <i className="fa-solid fa-chevron-right"></i>

        <span>{product.name}</span>
      </div>

      <section className="product-details">
        <div className="details-visual">
          <div className="details-icon">
            <i
              className={`fa-solid ${product.icon}`}
            ></i>
          </div>
        </div>

        <div className="details-content">
          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="details-price">
            ${product.price}
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <div className="features">
            <h3>Key Features</h3>

            {product.features.map((feature) => (
              <div className="feature-item" key={feature}>
                <i className="fa-solid fa-circle-check"></i>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="details-actions">
            <button className="primary-button">
              <i className="fa-solid fa-cart-shopping"></i>
              Add to Cart
            </button>

            <Link
              to="/products"
              className="secondary-button"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;