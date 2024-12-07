import React from 'react';
import "./CategoriesCard.css";
import { useNavigate } from 'react-router-dom';

const CategoriesCard = (props) => {

  const navigate = useNavigate();

  const navigateToRingneckBirds = () => {
    navigate('/ringNeckBirds');
  };

  const navigateToLoveBirds = () => {
    navigate('/loveBirds');
  };


  return (
    <main id='mainContainer'>
         <div className='Content'>
      <h2>{props.title}</h2>
      <p> {` ${props.description} `} </p>
    </div>

    <div className='buttonsDiv'>
      <button  className='Button' onClick={navigateToLoveBirds}> Love Birds </button>
      <button className='Button' id='RingBirds' onClick={navigateToRingneckBirds}> Ring Birds </button>
    </div>
    </main>
  )
}

export default CategoriesCard;

