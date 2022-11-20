import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helpers';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import Navigation from "./components/Navigation"
const App = () => {
  const [cart, setCart] = useState({});
  useEffect(() => {
    getCart().then(cart => {
      setCart(JSON.parse(cart));
    })
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart])

  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/products" element={<Products />} exact></Route>
          <Route path="/products/:_id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartContext.Provider>
    </Router>
  )
}

export default App;
