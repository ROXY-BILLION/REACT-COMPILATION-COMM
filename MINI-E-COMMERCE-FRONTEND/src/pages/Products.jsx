import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products({ onAddToCart }) {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">NOVA STORE</span>

          <h1>Modern Products.</h1>

          <p>
            Discover carefully selected technology products for work,
            creativity, and everyday life.
          </p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">COLLECTION</span>
              <h2>Featured Products</h2>
            </div>

            <span className="product-count">
              {products.length} Products
            </span>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;