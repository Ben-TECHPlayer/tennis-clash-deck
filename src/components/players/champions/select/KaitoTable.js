import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function KaitoTable() {
    const ITEM_ID = "players/champions/database/Kaito";

    // On récupère updateLevel au lieu de setCurrentLevel
    const { savedLevels, updateLevel, setActiveItemPath } = useContext(LevelContext);
    
    // Initialisation
    const initialLevel = savedLevels ? savedLevels[ITEM_ID] : null;
    const [selectedLevel, setSelectedLevel] = useState(initialLevel || null);

    // Gestion du Clic
    const handleLevelClick = (level) => {
        let newLevel = level;
        
        if (selectedLevel === level) {
            // Si on clique sur le même, on désactive
            newLevel = null;
        }

        setSelectedLevel(newLevel); // Mise à jour visuelle (local)
        updateLevel(ITEM_ID, newLevel); // Mise à jour mémoire (global)
        setActiveItemPath(ITEM_ID);
    };

    // Synchro au chargement
    useEffect(() => {
        setActiveItemPath(ITEM_ID);
    }, [setActiveItemPath]);

    const renderSkillCell = (level, content, isHeader = false) => {
        const isSelected = selectedLevel === level;
        const className = `clickable ${isSelected ? 'selected-col' : ''}`;
        const Tag = isHeader ? 'th' : 'td';

        return (
            <Tag 
                key={level} 
                className={className} 
                onClick={() => handleLevelClick(level)} 
            >
                {content}
            </Tag>
        );
    };

    return(
        <div className="table-container-scrollable">
            <div className="table-container">
                <table className="kaito">
                    <caption>Upgrade Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up Cards</td>
                            <td></td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>8</td>
                            <td>10</td>
                            <td>20</td>
                            <td>40</td>
                            <td>60</td>
                            <td>100</td>
                            <td>150</td>
                            <td>300</td>
                            <td>450</td>
                            <td>750</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>6K</td>
                            <td>11K</td>
                            <td>17.2K</td>
                            <td>26K</td>
                            <td>36K</td>
                            <td>52K</td>
                            <td>66K</td>
                            <td>86K</td>
                            <td>110K</td>
                            <td>140K</td>
                            <td>180K</td>
                            <td>250K</td>
                            <td>3.5M</td>
                            <td>10M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="kaito">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '6')}
                            {renderSkillCell(2, '7')}
                            {renderSkillCell(3, '9')}
                            {renderSkillCell(4, '11')}
                            {renderSkillCell(5, '12')}
                            {renderSkillCell(6, '14')}
                            {renderSkillCell(7, '16')}
                            {renderSkillCell(8, '18')}
                            {renderSkillCell(9, '20')}
                            {renderSkillCell(10, '21')}
                            {renderSkillCell(11, '23')}
                            {renderSkillCell(12, '25')}
                            {renderSkillCell(13, '27')}
                            {renderSkillCell(14, '28')}
                            {renderSkillCell(15, '30')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '6')}
                            {renderSkillCell(2, '8')}
                            {renderSkillCell(3, '9')}
                            {renderSkillCell(4, '10')}
                            {renderSkillCell(5, '11')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '14')}
                            {renderSkillCell(8, '15')}
                            {renderSkillCell(9, '16')}
                            {renderSkillCell(10, '17')}
                            {renderSkillCell(11, '19')}
                            {renderSkillCell(12, '20')}
                            {renderSkillCell(13, '21')}
                            {renderSkillCell(14, '22')}
                            {renderSkillCell(15, '24')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '1')}
                            {renderSkillCell(2, '2')}
                            {renderSkillCell(3, '2')}
                            {renderSkillCell(4, '3')}
                            {renderSkillCell(5, '3')}
                            {renderSkillCell(6, '4')}
                            {renderSkillCell(7, '4')}
                            {renderSkillCell(8, '5')}
                            {renderSkillCell(9, '5')}
                            {renderSkillCell(10, '6')}
                            {renderSkillCell(11, '7')}
                            {renderSkillCell(12, '7')}
                            {renderSkillCell(13, '8')}
                            {renderSkillCell(14, '8')}
                            {renderSkillCell(15, '9')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '2')}
                            {renderSkillCell(2, '3')}
                            {renderSkillCell(3, '4')}
                            {renderSkillCell(4, '4')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '6')}
                            {renderSkillCell(7, '6')}
                            {renderSkillCell(8, '7')}
                            {renderSkillCell(9, '8')}
                            {renderSkillCell(10, '8')}
                            {renderSkillCell(11, '9')}
                            {renderSkillCell(12, '10')}
                            {renderSkillCell(13, '10')}
                            {renderSkillCell(14, '11')}
                            {renderSkillCell(15, '12')}
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '7')}
                            {renderSkillCell(6, '8')}
                            {renderSkillCell(7, '8')}
                            {renderSkillCell(8, '9')}
                            {renderSkillCell(9, '10')}
                            {renderSkillCell(10, '11')}
                            {renderSkillCell(11, '13')}
                            {renderSkillCell(12, '13')}
                            {renderSkillCell(13, '13')}
                            {renderSkillCell(14, '14')}
                            {renderSkillCell(15, '16')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '5')}
                            {renderSkillCell(5, '6')}
                            {renderSkillCell(6, '7')}
                            {renderSkillCell(7, '8')}
                            {renderSkillCell(8, '9')}
                            {renderSkillCell(9, '10')}
                            {renderSkillCell(10, '10')}
                            {renderSkillCell(11, '11')}
                            {renderSkillCell(12, '12')}
                            {renderSkillCell(13, '13')}
                            {renderSkillCell(14, '14')}
                            {renderSkillCell(15, '15')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '21', true)}
                            {renderSkillCell(2, '28', true)}
                            {renderSkillCell(3, '34', true)}
                            {renderSkillCell(4, '39', true)}
                            {renderSkillCell(5, '44', true)}
                            {renderSkillCell(6, '52', true)}
                            {renderSkillCell(7, '56', true)}
                            {renderSkillCell(8, '63', true)}
                            {renderSkillCell(9, '69', true)}
                            {renderSkillCell(10, '73', true)}
                            {renderSkillCell(11, '82', true)}
                            {renderSkillCell(12, '87', true)}
                            {renderSkillCell(13, '92', true)}
                            {renderSkillCell(14, '97', true)}
                            {renderSkillCell(15, '106', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default KaitoTable;