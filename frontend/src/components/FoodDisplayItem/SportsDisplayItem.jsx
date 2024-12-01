import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const SportsDisplayItem = ({ id, name, description, image, price }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleBuyNow = () => {
        addToCart(id);
        // Add checkout navigation logic here
    };

    return (
        <div className="sports-item" 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            
            <div className="sports-item-image-container">
                <img className="sports-item-image" src={image} alt={name} />
                <div className="discount-badge">-20% OFF</div>
            </div>

            <div className="sports-item-info">
                <div className="sports-item-header">
                    <h3 className="sports-item-name">{name}</h3>
                    <div className="sports-item-rating">
                        <img src={assets.rating_starts} alt="rating" />
                    </div>
                </div>

                <p className="sports-item-desc">{description}</p>
                <p className="sports-item-price">₹{price}</p>

                <div className="sports-item-actions">
                    <button className="buy-now-btn" onClick={handleBuyNow}>
                        Buy Now
                    </button>

                    <div className="cart-controls">
                        {!cartItems[id] ? (
                            <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
                                Add to Cart
                            </button>
                        ) : (
                            <div className="quantity-controls">
                                <button onClick={() => removeFromCart(id)} className="quantity-btn">
                                    <img src={assets.remove_icon_red} alt="remove" />
                                </button>
                                <span className="quantity-display">{cartItems[id]}</span>
                                <button onClick={() => addToCart(id)} className="quantity-btn">
                                    <img src={assets.add_icon_green} alt="add" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsDisplayItem;