// src/components/ProductList.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import productsData from '../Hardcoded Data/productsData';
import Product from './Products';

const ProductsList = ({ addToCart }) => {
  return (
    <Container>
      <Row>
        {productsData.map(product => (
          <Col key={product.id} xs="12" sm="6" md="4" lg="3" className="mb-4">
            <Product product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
