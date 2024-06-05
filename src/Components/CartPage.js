import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckout = () => {
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
              <div>
                <span>{item.name} - ${item.price}</span>
                <div className="d-flex align-items-center mt-2">
                  <Input type="number" value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value))} min="1" className="mr-2" style={{ width: '70px' }} />
                </div>
              </div>
            </div>
            <Button color="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center">
        <Button color="primary" className="mt-3 px-4" onClick={handleCheckout}>Checkout</Button>
      </div>
      {showMessage && (
        <p className="text-success text-center mt-3 fs-4">Thank you for your purchase!</p>
      )}
    </div>
  );
};

export default CartPage;
