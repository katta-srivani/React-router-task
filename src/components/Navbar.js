import { useMemo } from "react";

function Navbar({ cart, openCart }) {
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Guvi Shopping</h1>

      <div className="flex items-center gap-6">
        <p className="font-semibold">
          Total: ${total.toFixed(2)}
        </p>

        <button
          onClick={openCart}
          className="relative bg-blue-500 px-4 py-2 rounded"
        >
          Cart
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full animate-bounce">
            {cart.length}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

