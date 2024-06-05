import React, { useState } from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckout = () => {
    // Perform any necessary checkout logic here (e.g., sending data to a server)
    const confirmed = window.confirm("Are you sure you want to checkout?");
    if (confirmed) {
      setShowMessage(true);
    }
  };

  return (
    <div className="cart-page container bg-light py-5">
      <h2 className="text-center my-4">Shopping Cart</h2>
      <ul className="list-group cart-items rounded shadow border-0">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center border-bottom">
            <div className="d-flex align-items-center">
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
              <span>{item.name} - ${item.price}</span>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-3 px-4" onClick={handleCheckout}>Checkout</button>
      </div>
      {showMessage && (
        <p className="text-success text-center mt-3 fs-4">Thank you for your purchase!</p>
      )}
    </div>
  );
};

export default CartPage;
