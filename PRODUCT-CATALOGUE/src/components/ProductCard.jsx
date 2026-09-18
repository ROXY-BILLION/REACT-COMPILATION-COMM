function ProductCard({ name, price, category, description }) {
  return (
    <article className="product-card">
      <span className="product-category">{category}</span>

      <h3>{name}</h3>

      <p className="product-description">{description}</p>

      <p className="product-price">${price}</p>

      <button className="product-btn">
        View Product
      </button>
    </article>
  );
}

export default ProductCard;