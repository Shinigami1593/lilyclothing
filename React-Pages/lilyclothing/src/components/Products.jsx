import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Products.css'; // Import your CSS file for styling

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'placeholder.png',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 150,
      image: 'placeholder.png',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 200,
      image: 'placeholder.png',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 250,
      image: 'placeholder.png',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 300,
      image: 'placeholder.png',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 350,
      image: 'placeholder.png',
    },
  ];

  return (
    <section className="product-grid">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductGrid;
