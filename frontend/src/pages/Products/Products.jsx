import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar.jsx/Sidebar';
import ProductSection from '../../components/ProductSection/ProductSection';
import './Products.css'; // Link the CSS file
import { useParams } from 'react-router-dom';

const Products = () => {
  // State variables for filtering
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [gender, setGender] = useState();

  const params = useParams(); // Get the URL parameters

  useEffect(() => {
    if (params.id) {
      // Capitalize the gender value before setting it
      let filterGender = params.id.charAt(0).toUpperCase() + params.id.slice(1).toLowerCase();
      setGender(filterGender); // Set the gender based on the URL parameter
      CheckParams(filterGender); // Call function with the capitalized gender
    }
    
  }, [params.id]); // Only re-run when params.id changes

  const CheckParams = (cate) => {
    console.log("Category from URL:", gender);
    console.log(gender)
  };

  return (
    <div className="products-page">
      <div className="sidebar">
        <Sidebar
        gender={gender}
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
          setColor={setColor}
          size={size}
          setSize={setSize}
          setGender={setGender}
        />
      </div>
      <div className="product-section">
        <ProductSection
          category={category}
          price={price}
          color={color}
          size={size}
          gender={gender}
        />
      </div>
    </div>
  );
};

export default Products;
