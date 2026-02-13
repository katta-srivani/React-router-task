import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  // TOTAL PRICE
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  // ITEM COUNT
  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-50">
      
      <Link to="/" className="font-bold text-lg">
        Shopping
      </Link>

      <div className="flex items-center gap-6">
        
        {/* TOTAL VALUE */}
        <p className="font-semibold text-green-400">
          Total: ${total.toFixed(2)}
        </p>

        {/* CART LINK */}
        <Link
          to="/cart"
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Cart ({count})
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
