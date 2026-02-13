import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useMemo, useState } from "react";

import Products from "./pages/Products";
import { CartContext } from "./context/CartContext";

function App() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  // 🪟 POPUP STATE
  const [showCart, setShowCart] = useState(false);

  // 💰 TOTAL PRICE
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  // 🛒 ITEM COUNT
  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const finalPrice = total - total * 0.1;

  return (
    <BrowserRouter>
      {/* 🔝 NAVBAR */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0 z-50">
        <h1 className="text-xl font-bold">
          Guvi Shopping
        </h1>

        <div className="flex items-center gap-6">
          {/* TOTAL VALUE */}
          <p className="font-semibold text-green-400">
            Total: ${total.toFixed(2)}
          </p>

          {/* CART BUTTON */}
          <button
            onClick={() => setShowCart(true)}
            className="bg-blue-500 px-4 py-2 rounded"
          >
            Cart ({itemCount})
          </button>
        </div>
      </nav>

      {/* 📄 ROUTES */}
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>

      {/* 🪟 CART POPUP MODAL */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          
          <div className="bg-white w-[600px] max-h-[80vh] overflow-y-auto p-6 rounded shadow-lg relative">
            
            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              X
            </button>

            <h2 className="text-xl font-bold mb-4">
              Cart Summary
            </h2>

            {/* 💰 TOTAL */}
            <div className="bg-gray-100 p-3 rounded mb-4">
              <p>Total Price: ${total.toFixed(2)}</p>

              <p className="text-green-600 font-semibold">
                Final Price (10% OFF): $
                {finalPrice.toFixed(2)}
              </p>
            </div>

            {/* EMPTY */}
            {cart.length === 0 && (
              <p>Cart is empty</p>
            )}

            {/* ITEMS */}
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
                      item.price *
                      item.quantity
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
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
