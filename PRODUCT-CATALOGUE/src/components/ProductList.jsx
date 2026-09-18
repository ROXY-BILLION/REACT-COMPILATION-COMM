import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      name: "MacBook Pro",
      price: 1999,
      category: "Laptop",
      description:
        "Powerful laptop for software development and professional work.",
    },
    {
      name: "iPhone 16",
      price: 999,
      category: "Smartphone",
      description:
        "Modern smartphone with a powerful processor and excellent camera.",
    },
    {
      name: "Sony Headphones",
      price: 349,
      category: "Audio",
      description:
        "Wireless headphones with premium sound and noise cancellation.",
    },
    {
      name: "iPad Air",
      price: 599,
      category: "Tablet",
      description:
        "Lightweight tablet suitable for work, study, and entertainment.",
    },
  ];

  return (
    <section className="products" id="products">
      <div className="container">
        <p className="section-label">Our Products</p>

        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;