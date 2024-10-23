import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card mb-4" style={{ width: '100%', height: '400px' }}> {/* Set card height */}
      <img
        src={product.image}
        className="card-img-top img-thumbnail"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column" style={{ height: '200px' }}>
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <div className="mt-auto">
          <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
