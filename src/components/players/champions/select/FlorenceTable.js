import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function FlorenceTable() {
    const ITEM_ID = "players/champions/database/Florence";

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
                <table className="florence">
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
                            <td>200</td>
                            <td>600</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>400</td>
                            <td>1.4K</td>
                            <td>3.2K</td>
                            <td>6K</td>
                            <td>11K</td>
                            <td>17.2K</td>
                            <td>26K</td>
                            <td>36K</td>
                            <td>52K</td>
                            <td>66K</td>
                            <td>110K</td>
                            <td>250K</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="florence">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(13)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '5')}
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
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '7')}
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
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '2')}
                            {renderSkillCell(2, '2')}
                            {renderSkillCell(3, '3')}
                            {renderSkillCell(4, '4')}
                            {renderSkillCell(5, '4')}
                            {renderSkillCell(6, '5')}
                            {renderSkillCell(7, '5')}
                            {renderSkillCell(8, '6')}
                            {renderSkillCell(9, '7')}
                            {renderSkillCell(10, '7')}
                            {renderSkillCell(11, '8')}
                            {renderSkillCell(12, '9')}
                            {renderSkillCell(13, '9')}
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '7')}
                            {renderSkillCell(6, '7')}
                            {renderSkillCell(7, '9')}
                            {renderSkillCell(8, '9')}
                            {renderSkillCell(9, '10')}
                            {renderSkillCell(10, '11')}
                            {renderSkillCell(11, '13')}
                            {renderSkillCell(12, '13')}
                            {renderSkillCell(13, '13')}
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
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '21', true)}
                            {renderSkillCell(2, '27', true)}
                            {renderSkillCell(3, '33', true)}
                            {renderSkillCell(4, '39', true)}
                            {renderSkillCell(5, '43', true)}
                            {renderSkillCell(6, '50', true)}
                            {renderSkillCell(7, '56', true)}
                            {renderSkillCell(8, '62', true)}
                            {renderSkillCell(9, '68', true)}
                            {renderSkillCell(10, '72', true)}
                            {renderSkillCell(11, '81', true)}
                            {renderSkillCell(12, '86', true)}
                            {renderSkillCell(13, '91', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default FlorenceTable;