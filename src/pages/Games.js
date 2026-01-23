import React, { useState } from 'react';
import '../styles/Games.css';

function Games() {
    const [selectedCategoryGames, setSelectedCategoryGames] = useState("regular");
    return (
        <main>
            <div className="choice-category-games">
                <button onClick={() => setSelectedCategoryGames("grand-tour")}>Grand Tour</button>
                <button onClick={() => setSelectedCategoryGames("regular")}>Regular</button>
                <button onClick={() => setSelectedCategoryGames("tournaments")}>Tournaments</button>
            </div>

            {selectedCategoryGames === "regular" && (
            <div className="select-choice-category-games">
                <h1>📅 Season matches (Regular)</h1>
                <h2>Available mode with every characters, also those who have less than 2200 trophies.</h2>
                <p>We play only in the highest tour you have unlocked.</p>
                <p>Ideal to training lower characters or testing new equipments</p>
                <p>These trophies won doesn't take into account in Grand Tour, but can help to reach 2200.</p>
            </div>
            )}

            {selectedCategoryGames === "grand-tour" && (
            <div className="select-choice-category-games">
                <h1>🌍 Grand Tour</h1>
                <h2>Tennis Clash's principal competitive mode.</h2>
                <p>Only available with a character who has at least 2200 trophies.</p>
                <p>Trophies taken into account are those of Grand Tour, no those of Regular mode.</p>
                <p>It allows us to earn coins, cards and contribute in club rankings.</p>
                <p>Each win raise trophies of the character used.</p>
            </div>
            )}

            {selectedCategoryGames === "tournaments" && (
            <div className="select-choice-category-games">
                <h1>🏅 Tournois</h1>
                <h2>Free competitive events with rewards according to your ranking.</h2>
                <h3>5 levels :</h3>
                <ul>
                    <li>🎯 Beginner – Max level 4 (if Tour 4 no unlocked)</li>
                    <li>🥉 Rookie – Max level 6</li>
                    <li>🥈 Junior – Max level 9</li>
                    <li>🥇 Challenger – Max level 12</li>
                    <li>🏆 Master – Max level 15</li>
                </ul>
                <p>More my ranking is high, better will be my reward(coins, cards, gems).</p>
                <p>Tournaments are often linked to special events or seasons.</p>
            </div>
            )}
        </main>
    );
}

export default Games;
