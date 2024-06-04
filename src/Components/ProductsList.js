import React from 'react';
import Product from './Products';
import product1 from '../Images/apple_airpods.jpeg';
import product2 from '../Images/apple_iphone_15.jpg';
import product3 from '../Images/apple_watch.jpeg';
import product4 from '../Images/apple_macbook.jpeg';
import product5 from '../Images/apple_imac.jpeg';
import product6 from '../Images/apple_macStudio.jpeg';

const products = [
    { id: 1, name: 'Airpods Pro', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna et justo sagittis sodales in ac arcu.', image: product1, price: 499 },
    { id: 2, name: 'Iphone 15 Pro Max', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna et justo sagittis sodales in ac arcu.', image: product2, price: 1599 },
    { id: 3, name: 'Watch Series 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna et justo sagittis sodales in ac arcu.', image: product3, price: 899 },
    { id: 4, name: 'Macbook Pro M3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna et justo sagittis sodales in ac arcu.', image: product4, price: 2499 },
    { id: 5, name: 'iMac 2024', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna et justo sagittis sodales in ac arcu.', image: product5, price: 1699 },
    { id: 6, name: 'Mac Studio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna et justo sagittis sodales in ac arcu.', image: product6, price: 1999 },
  ];

const ProductsPage = ({ addToCart }) => {
  return (
    <div className="container">
      <h2 className="my-4">Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <Product {...product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;