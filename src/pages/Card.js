import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';
import '../styles/SelectCard.css';
import '../styles/Tableau.css';
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

        {/* Afficher l'ensemble des cartes */}
        <SelectCard setSelectedCardTable={handleCardClick} />

        {/* Informer aux utilisateurs que certains données sont incomplets ou incorrects, et seront mises à jour dès que possible */}
        <p style={{marginTop: '20px', fontStyle: 'italic'}}>
          Note: Missing data for some item statistics will be updated soon.
        </p>

      </main>
    );
}

export default Card;