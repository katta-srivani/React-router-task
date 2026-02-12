import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import CartModal from "./components/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar
        cart={cart}
        openCart={() => setIsCartOpen(true)}
      />

      {isCartOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={products}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
