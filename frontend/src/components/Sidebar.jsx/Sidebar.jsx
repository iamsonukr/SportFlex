import React, { useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ gender, setGender, category, setCategory, price, setPrice, color, setColor, size, setSize }) => {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  useEffect(() => {
    console.log("Current Filters:", {
      gender,
      category,
      price,
      color,
      size
    });
    setGender(gender)
  }, [gender, category, price, color, size]);

  return (
    <div className="sidebar">
      <h3>Filter Options</h3>

      {/* Gender Filter */}
      <div className="filter-section">
        <h4>Gender</h4>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Children">Children</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <h4>Category</h4>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Equipment">Equipment</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <h4>Price</h4>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={price || 0}
          onChange={handlePriceChange}
        />
        <span>{price || 0}</span>
      </div>

      {/* Color Filter */}
      <div className="filter-section">
        <h4>Color</h4>
        <select value={color} onChange={handleColorChange}>
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>
      </div>

      {/* Size Filter */}
      <div className="filter-section">
        <h4>Size</h4>
        <select value={size} onChange={handleSizeChange}>
          <option value="">All</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
