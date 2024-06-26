import React, { useState } from 'react';
import ProductsPage from './Components/ProductsList';
import CartPage from './Components/CartPage';
import AccountPage from './Components/AccountPage'; // Import the new AccountPage component
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems([...cartItems, { ...item, id: cartItems.length + 1 }]);
  };

  const removeFromCart = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Priyam's iPearl</Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">My Account</Link> {/* Add a link to the AccountPage */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/account" element={<AccountPage />} /> {/* Add a route for the AccountPage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
