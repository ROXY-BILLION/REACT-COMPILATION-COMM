import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <main className="page-container">
      <section className="page-hero">
        <p className="eyebrow">OUR CATALOGUE</p>

        <h1>Explore our products.</h1>

        <p>
          Technology and accessories designed for modern
          workflows.
        </p>
      </section>

      <section className="catalogue">
        <div className="catalogue-header">
          <h2>All Products</h2>

          <span>
            {products.length} products
          </span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
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

export default Products;