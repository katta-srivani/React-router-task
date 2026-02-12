import ProductCard from "./Productcard";

function ProductList({ products, addToCart, cart }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </div>
  );
}

export default ProductList;
