import React, { useState, useEffect } from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../CSS/carts.css";
import SellingLayout from '../../Layout/SellingLayout';

const Carts = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);

    const initialQuantities = {};
    savedCartItems.forEach(item => {
      initialQuantities[item.title] = 1; // Default quantity
    });
    setQuantities(initialQuantities);
  }, []);

  const handleIncrease = (title) => {
    setQuantities(prev => ({
      ...prev,
      [title]: (prev[title] || 1) + 1
    }));
  };

  const handleDecrease = (title) => {
    setQuantities(prev => ({
      ...prev,
      [title]: Math.max(1, (prev[title] || 1) - 1)
    }));
  };

  const handleRemoveFromCart = (title) => {
    const updatedCartItems = cartItems.filter(item => item.title !== title);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[title];
    setQuantities(updatedQuantities);
  };

  const totalPrice = (price, qty) => (price * qty).toFixed(2);

  return (
    <div className="container" >
      <Header />
      <div className="content" >
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <SellingLayout >
            <div key={index} className="cardContainer">
              <div className="cardContent">
                <div className="imageSection">
                  <img src={item.image} alt="Product" className="productImage" />
                </div>
                <div className="detailsSection">
                  <h2 className="productTitle">{item.title}</h2>
                  <p className="productDescription">{item.description}</p>
                  <div className="priceAndControls">
                    <span className="priceText">{`$${totalPrice(item.price, quantities[item.title] || 1)}`}</span>
                    <div className="quantityControls">
                      <button className="quantityButton" onClick={() => handleDecrease(item.title)}>-</button>
                      <span className="quantityDisplay">{quantities[item.title] || 1}</span>
                      <button className="quantityButton" onClick={() => handleIncrease(item.title)}>+</button>
                    </div>
                    <button className="removeButton" onClick={() => handleRemoveFromCart(item.title)}>Remove from Cart</button>
                  </div>
                </div>
              </div>
            </div>

            </SellingLayout>

          ))
        ) : (
          <SellingLayout >
            <div className="cardContainer">
            <p id='noItemsText'> No item in cart</p>
            </div>
          </SellingLayout>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Carts;
