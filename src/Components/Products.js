// src/components/Product.js
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Products = ({ product, addToCart }) => {
  return (
    <Card className="mb-4">
      <div className="text-center">
        <CardImg top src={product.image} alt={product.name} style={{ width: '300px', height: '300px', objectFit: 'contain' }} />
      </div>
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardText>${product.price}</CardText>
        <Button color="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

export default Products;
