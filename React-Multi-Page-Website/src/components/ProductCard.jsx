import { Link } from "react-router-dom";

function ProductCard({
  id,
  name,
  category,
  price,
  icon,
  description,
}) {
  return (
    <article className="product-card">
      <div className="product-icon">
        <i className={`fa-solid ${icon}`}></i>
      </div>

      <span className="product-category">
        {category}
      </span>

      <h3>{name}</h3>

      <p>{description}</p>

      <div className="product-card-bottom">
        <strong>${price}</strong>

        <Link
          to={`/products/${id}`}
          className="details-button"
        >
          View Details
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;