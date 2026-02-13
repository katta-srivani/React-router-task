import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const {
    cart,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const isAdded = cart.some(
    (item) => item.id === product.id
  );

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">

      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="font-semibold mt-2 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-lg font-bold mt-1">
        ${product.price}
      </p>

      {isAdded ? (
        <button
          onClick={() =>
            removeFromCart(product.id)
          }
          className="w-full bg-red-500 text-white px-4 py-2 mt-3 rounded"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() =>
            addToCart(product)
          }
          className="w-full bg-blue-500 text-white px-4 py-2 mt-3 rounded"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
