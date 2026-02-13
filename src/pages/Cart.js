import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const finalPrice = total - total * 0.1;

  return (
    <div className="p-6">

      {/* 🔝 SUMMARY TOP */}
      <div className="bg-gray-100 p-4 rounded mb-6 shadow">
        <h2 className="text-xl font-bold mb-2">
          Cart Summary
        </h2>

        <p>Total Price: ${total.toFixed(2)}</p>

        <p className="text-green-600 font-semibold">
          Final Price (10% OFF): $
          {finalPrice.toFixed(2)}
        </p>
      </div>

      {/* CART ITEMS */}
      {cart.length === 0 && (
        <p>Cart is empty</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border p-3 mb-3 rounded"
        >
          <div>
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p>${item.price}</p>

            <p>
              Item Total: $
              {(
                item.price * item.quantity
              ).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            
            <button
              onClick={() =>
                decreaseQty(item.id)
              }
              className="px-2 bg-gray-300"
            >
              -
            </button>

            {item.quantity}

            <button
              onClick={() =>
                increaseQty(item.id)
              }
              className="px-2 bg-gray-300"
            >
              +
            </button>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
