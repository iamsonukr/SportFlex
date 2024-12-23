import React, { useEffect, useState } from 'react';
import './ProductSection.css';
import SampleProducts from '../../../public/SampleProducts';


const ProductSection = ({ category, price, color, size, gender }) => {
  const [sampleProducts,setSampleProducts]=useState(SampleProducts)
  
    // Sample product data with images
   
  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesGender = !gender || product.gender === gender;
    const matchesPrice = !price || product.price <= price;
    const matchesColor = !color || product.color === color;
    const matchesSize = !size || product.size === size;
    return matchesCategory && matchesGender && matchesPrice && matchesColor && matchesSize;
  });

  // Function to render star rating
  const renderRating = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="product-section">
      <h2>Featured Products</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-badge">{product.category}</div>
                <button className="wishlist-button">♡</button>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <span className="stars">{renderRating(product.rating)}</span>
                  <span className="review-count">({product.reviews})</span>
                </div>
                <div className="product-details">
                  <span className="product-color" style={{ backgroundColor: product.color.toLowerCase() }}></span>
                  <span className="product-size">{product.size}</span>
                  <span className="product-gender">{product.gender}</span>
                </div>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">
            <p>No products found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;