// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from './ProductCard';
import Loader from './Loader';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 col-sm-6 col-xs-12 d-flex align-items-stretch" key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
