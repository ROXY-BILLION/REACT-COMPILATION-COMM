import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faLaptop,
  faDesktop,
  faKeyboard,
  faComputerMouse,
  faHeadphones,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";

function ProductCard({ product, onAddToCart }) {
  const icons = {
    laptop: faLaptop,
    desktop: faDesktop,
    keyboard: faKeyboard,
    "computer-mouse": faComputerMouse,
    headphones: faHeadphones,
    "tablet-screen-button": faTabletScreenButton,
  };

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image">
        <FontAwesomeIcon icon={icons[product.icon]} />
      </Link>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>₦{product.price.toLocaleString()}</strong>

          <button
            className="add-button"
            onClick={() => onAddToCart(product)}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;