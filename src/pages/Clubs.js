import React, { useState } from 'react';
import '../styles/Clubs.css';

function Clubs() {
    const [selectedCategoryGamesClubs, setSelectedCategoryGamesClubs] = useState("rules");
    return (
        <main>
            <div className="choice-category-games-clubs">
                <button style={{ opacity: selectedCategoryGamesClubs === "rules" ? 1 : 0.6 }} onClick={() => setSelectedCategoryGamesClubs("rules")}>Rules</button>
                <button style={{ opacity: selectedCategoryGamesClubs === "league-clubs" ? 1 : 0.6 }} onClick={() => setSelectedCategoryGamesClubs("league-clubs")}>League Clubs</button>
                <button style={{ opacity: selectedCategoryGamesClubs === "club-chelem" ? 1 : 0.6 }} onClick={() => setSelectedCategoryGamesClubs("club-chelem")}>Club Chelem</button>
            </div>

            {selectedCategoryGamesClubs === "rules" && (
            <div className="select-choice-category-games-clubs">
                <h1>Rules</h1>
                <p>Each club can contain 50 members max</p>
                <p>Each member who search a club, can go in request, or open but no closed. In several clubs, it have to reach a number of trophies to entry.</p>
                <p>We can of course create our dream club, it give us the possibility to accept or refuse request of players who want entry or are here.</p>
                <p>To have rewards bags, we have to join a club in first 48 hours of league.</p>
                <p>Available to win points clubs in Grand Tour, Tournaments and Regular Matches.</p>
            </div>
            )}

            {selectedCategoryGamesClubs === "league-clubs" && (
            <div className="select-choice-category-games-clubs">
                <h1>📊 League Clubs</h1>
                <p>Seasonal ranking is based on the number of points won by members of the club</p>
                <p>The clubs are grouped in leagues(Challenger, Master...) with their performs.</p>
                <p>The best clubs up and the worst down</p>
                <p>Each season take one week. In the end, rewards bags will be here.</p>
                <p>Chaque tableau contient 100 clubs avec un classement indépendant.</p>
            </div>
            )}

            {selectedCategoryGamesClubs === "club-chelem" && (
            <div className="select-choice-category-games-clubs">
                <h1>🎾 Challenge Chelem</h1>
                <h2>Individual challenge for the club : 4 games to play each day(2 on hard, 1 on clay, and 1 on grass).</h2>
                <p>Each character used must wait 24h before playing again.</p>
                <p>It allow to contribue in Chelem score and earn rewards.</p>
            </div>
            )}

        </main>
    );
}

export default Clubs;
