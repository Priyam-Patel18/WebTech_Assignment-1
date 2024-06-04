import React, { useState } from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckout = () => {
    // Perform any necessary checkout logic here (e.g., sending data to a server)
    setShowMessage(true);
  };

  return (
    <div className="cart-page container">
      <h2 className="my-4">Shopping Cart</h2>
      <ul className="list-group cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.name} - ${item.price}</span>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleCheckout}>Checkout</button>
      {showMessage && <p className="mt-3">Thank you for your purchase!</p>}
    </div>
  );
};

export default CartPage;