import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import CartItem from "../components/CartItem";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <div className="container">
          <div className="empty-cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>

          <h1>Your Cart Is Empty</h1>

          <p>
            You haven't added anything to your cart yet.
          </p>

          <Link to="/" className="primary-button">
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        <Link to="/" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} />
          Continue Shopping
        </Link>

        <div className="cart-header">
          <div>
            <span className="eyebrow">SHOPPING CART</span>
            <h1>Your Cart</h1>
          </div>

          <span>
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="cart-layout">
          <section className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))}
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>₦{subtotal.toLocaleString()}</strong>
            </div>

            <button className="checkout-button">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;