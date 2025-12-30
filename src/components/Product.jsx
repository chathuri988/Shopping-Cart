import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-card-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
