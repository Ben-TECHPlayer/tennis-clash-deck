import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';
import SelectCard from '../components/SelectCard';

function Card() {
  const navigate = useNavigate();

  // Cette fonction sera appelée par SelectCard quand on clique sur une image
  const handleCardClick = (cardId, routePath) => {
    if (routePath) {
          // On ajoute "/card/" devant car tes routes dans App.js commencent par "/card/..."
          navigate(`/card/${routePath}`);
      } else {
          console.error("Aucun chemin reçu pour :", cardId);
      }
  };
  
  return (
      <main>
        <h1>Cards Database</h1>
        <SelectCard setSelectedCardTable={handleCardClick} />
        <p style={{marginTop: '20px', fontStyle: 'italic'}}>
          Note: Missing data for some item statistics will be updated soon.
        </p>
        </main>
    );
}

export default Card;
