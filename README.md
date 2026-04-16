# 🎾 Tennis Clash - FInd your dream lineup

Une application React avancée permettant aux joueurs de *Tennis Clash* de calculer et d'optimiser leur équipement ("Build") en fonction des niveaux de leurs cartes et des règles de tournoi.

## ✨ Fonctionnalités

Cette application résout le problème complexe du choix d'équipement parmi des centaines de combinaisons possibles.

* **Gestion des Cartes & Niveaux** : Sélectionnez vos objets (Raquettes, Grips, Chaussures, etc.) et définissez leur niveau actuel.
* **Persistance des Données** : Utilisation de `Context API` pour conserver les choix de l'utilisateur lors de la navigation entre les pages.
* **Calculateur de Lineup Intelligent** : Un algorithme récursif génère toutes les combinaisons possibles (produit cartésien) basées sur les items sélectionnés.
* **Gestion des "Level Caps" (Plafonds)** :
    * **Grand Tour** : Niveaux réels (1-15).
    * **Regular** : Règle dynamique (Niveau du personnage + 2).
    * **Tournaments** : Plafonds fixes (Rookie, Junior, Challenger, Master).
* **Comparaison Dynamique** : Visualisez plusieurs configurations côte à côte et sélectionnez la meilleure pour voir les détails.

## 🛠️ Stack Technique

Le projet est construit avec une architecture moderne et modulaire :

* **Framework** : [React.js](https://reactjs.org/)
* **Langage** : JavaScript (ES6+)
* **State Management** : React Context API (`LevelContext`)
* **Performance** : Utilisation de `useMemo` pour optimiser les calculs lourds de combinaisons.
* **Styling** : CSS3 (Flexbox/Grid)

## 📂 Structure du Projet

L'architecture suit les principes de séparation des responsabilités (SoC) et une organisation par domaine métier.

```text
src/
├── components/
│   ├── attributes/         # Composants par type d'équipement (Grip, Shoe, etc.)
│   ├── players/            # Gestion des personnages (Champions, Legends)
│   ├── ChosenLineup.js     # Le cerveau : Algorithme de calcul et affichage des résultats
│   ├── SelectCard.js       # Interface de sélection des cartes
│   └── ...
├── context/
│   └── LevelContext.js     # État global de l'application
├── data/
│   └── cardData.js         # Base de données statique (Stats, Noms, Types)
├── pages/                  # Vues principales (Home, Games, Lineup...)
└── App.js

