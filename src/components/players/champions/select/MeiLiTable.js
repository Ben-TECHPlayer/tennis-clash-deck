import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function MeiLiTable() {
    const ITEM_ID = "players/champions/database/MeiLi";

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
                <table className="mei-li">
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
                            <td>52K</td>
                            <td>66K</td>
                            <td>86K</td>
                            <td>110K</td>
                            <td>140K</td>
                            <td>180K</td>
                            <td>210K</td>
                            <td>250K</td>
                            <td>280K</td>
                            <td>360K</td>
                            <td>440K</td>
                            <td>700K</td>
                            <td>2.5M</td>
                            <td>10M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="mei-li">
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
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '8')}
                            {renderSkillCell(4, '9')}
                            {renderSkillCell(5, '11')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '15')}
                            {renderSkillCell(8, '15')}
                            {renderSkillCell(9, '17')}
                            {renderSkillCell(10, '20')}
                            {renderSkillCell(11, '21')}
                            {renderSkillCell(12, '23')}
                            {renderSkillCell(13, '24')}
                            {renderSkillCell(14, '26')}
                            {renderSkillCell(15, '27')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '6')}
                            {renderSkillCell(6, '7')}
                            {renderSkillCell(7, '8')}
                            {renderSkillCell(8, '9')}
                            {renderSkillCell(9, '10')}
                            {renderSkillCell(10, '10')}
                            {renderSkillCell(11, '11')}
                            {renderSkillCell(12, '12')}
                            {renderSkillCell(13, '12')}
                            {renderSkillCell(14, '13')}
                            {renderSkillCell(15, '14')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '7')}
                            {renderSkillCell(6, '8')}
                            {renderSkillCell(7, '9')}
                            {renderSkillCell(8, '9')}
                            {renderSkillCell(9, '10')}
                            {renderSkillCell(10, '11')}
                            {renderSkillCell(11, '12')}
                            {renderSkillCell(12, '13')}
                            {renderSkillCell(13, '13')}
                            {renderSkillCell(14, '14')}
                            {renderSkillCell(15, '16')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '6')}
                            {renderSkillCell(4, '7')}
                            {renderSkillCell(5, '8')}
                            {renderSkillCell(6, '9')}
                            {renderSkillCell(7, '10')}
                            {renderSkillCell(8, '10')}
                            {renderSkillCell(9, '11')}
                            {renderSkillCell(10, '13')}
                            {renderSkillCell(11, '14')}
                            {renderSkillCell(12, '14')}
                            {renderSkillCell(13, '15')}
                            {renderSkillCell(14, '16')}
                            {renderSkillCell(15, '16')}
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '6')}
                            {renderSkillCell(4, '7')}
                            {renderSkillCell(5, '8')}
                            {renderSkillCell(6, '9')}
                            {renderSkillCell(7, '10')}
                            {renderSkillCell(8, '12')}
                            {renderSkillCell(9, '13')}
                            {renderSkillCell(10, '14')}
                            {renderSkillCell(11, '15')}
                            {renderSkillCell(12, '16')}
                            {renderSkillCell(13, '17')}
                            {renderSkillCell(14, '18')}
                            {renderSkillCell(15, '19')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '7')}
                            {renderSkillCell(6, '8')}
                            {renderSkillCell(7, '9')}
                            {renderSkillCell(8, '10')}
                            {renderSkillCell(9, '11')}
                            {renderSkillCell(10, '12')}
                            {renderSkillCell(11, '13')}
                            {renderSkillCell(12, '14')}
                            {renderSkillCell(13, '15')}
                            {renderSkillCell(14, '16')}
                            {renderSkillCell(15, '17')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '23', true)}
                            {renderSkillCell(2, '30', true)}
                            {renderSkillCell(3, '35', true)}
                            {renderSkillCell(4, '41', true)}
                            {renderSkillCell(5, '47', true)}
                            {renderSkillCell(6, '54', true)}
                            {renderSkillCell(7, '61', true)}
                            {renderSkillCell(8, '65', true)}
                            {renderSkillCell(9, '72', true)}
                            {renderSkillCell(10, '80', true)}
                            {renderSkillCell(11, '86', true)}
                            {renderSkillCell(12, '92', true)}
                            {renderSkillCell(13, '96', true)}
                            {renderSkillCell(14, '103', true)}
                            {renderSkillCell(15, '109', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default MeiLiTable;