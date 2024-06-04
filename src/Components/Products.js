import React from 'react';

const Product = ({ id, name, description, price, image, addToCart }) => {
  return (
    <div className="card h-100 product">
      <img src={image} className="card-img-top product-img" alt={name} style={{ height: '300px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary" onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;