import ProductList from "../components/Productlist";

function Products({ products, addToCart, cart }) {
  return (
    <ProductList
      products={products}
      addToCart={addToCart}
      cart={cart}
    />
  );
}

export default Products;
