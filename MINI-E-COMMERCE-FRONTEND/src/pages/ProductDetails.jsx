import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCartPlus,
  faLaptop,
  faDesktop,
  faKeyboard,
  faComputerMouse,
  faHeadphones,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";

import products from "../data/products";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const icons = {
    laptop: faLaptop,
    desktop: faDesktop,
    keyboard: faKeyboard,
    "computer-mouse": faComputerMouse,
    headphones: faHeadphones,
    "tablet-screen-button": faTabletScreenButton,
  };

  if (!product) {
    return (
      <main className="not-found">
        <div className="container">
          <h1>Product Not Found</h1>

          <p>
            The product you're looking for does not exist.
          </p>

          <Link to="/" className="primary-button">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="details-page">
      <div className="container">
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Products
        </Link>

        <div className="details-card">
          <div className="details-image">
            <FontAwesomeIcon icon={icons[product.icon]} />
          </div>

          <div className="details-content">
            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className="details-description">
              {product.description}
            </p>

            <div className="details-price">
              ₦{product.price.toLocaleString()}
            </div>

            <button
              className="primary-button"
              onClick={() => onAddToCart(product)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;