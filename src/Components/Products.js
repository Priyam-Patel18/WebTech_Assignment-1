import React, { useState } from 'react';
import { Card, Button, Input } from 'reactstrap';

const Product = ({ id, name, description, image, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    setQuantity(e.target.value);
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
            <Button color="success" onClick={() => addToCart({ id, name, image, price, quantity: parseInt(quantity) })} className="btn-sm">Add to Cart</Button>
          </div>
          <p className="card-text text-dark font-weight-bold">${price}</p>
        </div>
      </div>
    </Card>
  );
};

export default Product;
