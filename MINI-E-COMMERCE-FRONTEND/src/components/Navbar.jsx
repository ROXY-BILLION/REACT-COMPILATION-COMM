import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <FontAwesomeIcon icon={faStore} />
          <span>NovaStore</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Products</Link>

          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
        </div>

        <button className="mobile-menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;