function Cart({ cart, removeFromCart, increaseQty, decreaseQty }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 mb-4"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>

          <div className="flex gap-2 items-center">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 py-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-6 text-xl">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <p className="text-green-600">
            Final Price (10% Discount): ${finalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
