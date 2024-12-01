import React, { useEffect } from 'react';
import './ProductSection.css'; // ProductSection styles

const ProductSection = ({ category, price, color, size, gender }) => {
  // Sample product data
  const sampleData = [
    { id: 1, name: 'Running Shoes', category: 'Footwear', price: 300, color: 'Red', size: 'Medium', gender: 'Men' },
    { id: 2, name: 'Training T-Shirt', category: 'Clothing', price: 100, color: 'Blue', size: 'Small', gender: 'Women' },
    { id: 3, name: 'Yoga Mat', category: 'Accessories', price: 50, color: 'Green', size: 'Large', gender: 'Women' },
    { id: 4, name: 'Basketball', category: 'Equipment', price: 150, color: 'Orange', size: 'Medium', gender: 'Children' },
    { id: 5, name: 'Soccer Ball', category: 'Equipment', price: 120, color: 'White', size: 'Medium', gender: 'Men' },
    { id: 6, name: 'Track Jacket', category: 'Clothing', price: 200, color: 'Black', size: 'Medium', gender: 'Men' },
    { id: 7, name: 'Gym Bag', category: 'Accessories', price: 500, color: 'Blue', size: 'Large', gender: 'Women' },
    { id: 8, name: 'Wristbands', category: 'Accessories', price: 30, color: 'Blue', size: 'Small', gender: 'Children' },
    { id: 9, name: 'Running Cap', category: 'Accessories', price: 50, color: 'Black', size: 'Small', gender: 'Men' },
    { id: 10, name: 'Compression Shorts', category: 'Clothing', price: 250, color: 'Red', size: 'Large', gender: 'Women' },
    { id: 11, name: 'Fitness Tracker', category: 'Accessories', price: 200, color: 'Black', size: 'Medium', gender: 'Men' },
    { id: 12, name: 'Cycling Gloves', category: 'Accessories', price: 120, color: 'White', size: 'Small', gender: 'Women' },
  ];

  // Filter products based on the selected filters
  const filteredProducts = sampleData.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesGender = !gender || product.gender === gender;
    const matchesPrice = !price || product.price <= price;
    const matchesColor = !color || product.color === color;
    const matchesSize = !size || product.size === size;
    return matchesCategory && matchesGender && matchesPrice && matchesColor && matchesSize;
  });

  useEffect(() => {
    console.log("Filtered Products:", filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="product-section">
      <h2>Products</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Color: {product.color}</p>
              <p>Size: {product.size}</p>
              <p>Gender: {product.gender}</p>
            </div>
          ))
        ) : (
          <p>No products found matching your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
