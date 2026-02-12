function CartModal({
  cart,
  closeModal,
  removeFromCart,
  increaseQty,
  decreaseQty,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const finalPrice = total - total * 0.1;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-3 mb-3 rounded"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price}</p>
              <p>
                Item Total: $
                {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 bg-gray-300"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 bg-gray-300"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="mt-6 text-lg font-semibold">
            <p>Total: ${total.toFixed(2)}</p>
            <p className="text-green-600">
              Final (10% Discount): ${finalPrice.toFixed(2)}
            </p>
          </div>
        )}

        <button
          onClick={closeModal}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
