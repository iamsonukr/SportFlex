import React from 'react';
import './popularProducts.css';

const products = [
  {
    name: 'Custom Balloon  Bands ',
    image: './popularProducts/custom-balloon.webp',
    price: '$2.00'
  },
  {
    name: 'Custom Banner Proactive',
    image: './popularProducts/custom-banner.webp',
    price: '$5.00'
  },
  {
    name: 'Custom Button Advance',
    image: './popularProducts/custom-button.webp',
    price: '$1.50'
  },
  {
    name: 'Custom Can Sleeve Pro',
    image: './popularProducts/custom-cansleeve.webp',
    price: '$3.00'
  },
  {
    name: 'Custom Drawstring Bag',
    image: './popularProducts/custom-drawstring-bag.webp',
    price: '$8.00'
  },
  {
    name: 'Custom Lanyard',
    image: './popularProducts/custom-lanyard.webp',
    price: '$2.50'
  },
  {
    name: 'Custom Lapel Pin',
    image: './popularProducts/custom-lapelpin.webp',
    price: '$4.00'
  },
  {
    name: 'Custom PVC Card',
    image: './popularProducts/custom-pvc-card.webp',
    price: '$1.00'
  },
  {
    name: 'Custom PVC Card (1)',
    image: './popularProducts/custom-pvc-card (1).webp',
    price: '$1.00'
  },
  {
    name: 'Custom Sticker ',
    image: './popularProducts/custom-sticker.webp',
    price: '$0.50'
  },
  {
    name: 'Custom Tattoo',
    image: './popularProducts/custom-tattoo.webp',
    price: '$1.00'
  },
  {
    name: 'Custom Totebag',
    image: './popularProducts/custom-totebag.webp',
    price: '$10.00'
  },
  {
    name: 'Custom Wristband',
    image: './popularProducts/custom-wristband.webp',
    price: '$1.00'
  }
];

const PopularProducts = () => {
  return (
    <div className="popular-products">
      <h2>Popular Products</h2>
      <div className="product-cards">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="productDetails">
              <h3 >{product.name}</h3>
              <p className="product-price">{product.price}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;