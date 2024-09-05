import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product Listings</h1>
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Home;
