import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

function Cards(props) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const numericPrice = parseFloat(props.price.replace(/[^0-9.-]+/g, ''));

    const item = {
      image: props.image,
      title: props.title,
      description: props.description,
      price: numericPrice,
    };

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Check if item already exists in the cart
    const itemIndex = cartItems.findIndex(cartItem => cartItem.title === item.title);
    
    if (itemIndex === -1) {
      cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    navigate('/carts');
  };

  return (
    <div className='CardMainContainer'>
      <div className='imageDiv'>
        <img src={props.image} alt="Image not loaded" />
      </div>
      <div className='mainContents'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h2 id='price'>{` Price : ${props.price} `}</h2>
      </div>

      <div className='btnsDiv'>
        <button className='Btn'> Buy Now </button>
        <button className='Btn' id='Explore' onClick={handleAddToCart}> Add to Cart </button>
      </div>
    </div>
  );
}

export default Cards;
