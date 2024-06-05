import React, { useState } from 'react';
import { Card, Button, Input, Alert } from 'reactstrap';

const Product = ({ id, name, description, image, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleQuantityChange = e => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ id, name, image, price, quantity: parseInt(quantity) });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
  };

  return (
    <Card className="product-card shadow border-0 rounded overflow-hidden">
      <img src={image} alt={name} className="product-img img-fluid mx-auto d-block" style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column justify-content-between bg-light p-4">
        <div>
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="d-flex align-items-center">
            <Input type="number" value={quantity} onChange={handleQuantityChange} min="1" className="mr-2" style={{ width: '70px', marginRight: '10px' }} />
            <Button color="success" onClick={handleAddToCart} className="btn-sm">Add to Cart</Button>
          </div>
          <strong><p className="card-text text-dark">${price}</p></strong>
        </div>
      </div>
      {showAlert && (
        <Alert color="success" className="mt-3">Item added to cart!</Alert>
      )}
    </Card>
  );
};

export default Product;
