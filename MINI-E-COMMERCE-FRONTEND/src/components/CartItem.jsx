import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-icon">
          {item.name.charAt(0)}
        </div>

        <div>
          <h3>{item.name}</h3>
          <span>{item.category}</span>
        </div>
      </div>

      <div className="cart-item-price">
        ₦{item.price.toLocaleString()}
      </div>

      <div className="quantity-control">
        <button onClick={() => onDecrease(item.id)}>
          <FontAwesomeIcon icon={faMinus} />
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => onIncrease(item.id)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <strong className="item-subtotal">
        ₦{(item.price * item.quantity).toLocaleString()}
      </strong>

      <button
        className="remove-button"
        onClick={() => onRemove(item.id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </article>
  );
}

export default CartItem;