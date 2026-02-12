function ProductCard({ product, addToCart, cart }) {
  const isAdded = cart.some((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        disabled={isAdded}
        className={`px-4 py-2 mt-2 ${
          isAdded ? "bg-gray-400" : "bg-blue-500 text-white"
        }`}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
