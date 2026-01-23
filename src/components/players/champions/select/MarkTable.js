import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function MarkTable() {
    const ITEM_ID = "players/champions/database/Mark";

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
        <div className="table-container">
            <table className="mark">
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
            <table className="mark">
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
                        {renderSkillCell(1, '3')}
                        {renderSkillCell(2, '5')}
                        {renderSkillCell(3, '6')}
                        {renderSkillCell(4, '7')}
                        {renderSkillCell(5, '9')}
                        {renderSkillCell(6, '10')}
                        {renderSkillCell(7, '12')}
                        {renderSkillCell(8, '13')}
                        {renderSkillCell(9, '15')}
                        {renderSkillCell(10, '16')}
                        {renderSkillCell(11, '18')}
                        {renderSkillCell(12, '19')}
                        {renderSkillCell(13, '20')}
                        {renderSkillCell(14, '22')}
                        {renderSkillCell(15, '23')}
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
                        {renderSkillCell(8, '8')}
                        {renderSkillCell(9, '9')}
                        {renderSkillCell(10, '10')}
                        {renderSkillCell(11, '11')}
                        {renderSkillCell(12, '11')}
                        {renderSkillCell(13, '12')}
                        {renderSkillCell(14, '12')}
                        {renderSkillCell(15, '13')}
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
                        {renderSkillCell(8, '10')}
                        {renderSkillCell(9, '11')}
                        {renderSkillCell(10, '12')}
                        {renderSkillCell(11, '13')}
                        {renderSkillCell(12, '14')}
                        {renderSkillCell(13, '15')}
                        {renderSkillCell(14, '16')}
                        {renderSkillCell(15, '17')}
                    </tr>
                    <tr>
                        <td>Volley</td>
                        {renderSkillCell(1, '3')}
                        {renderSkillCell(2, '3')}
                        {renderSkillCell(3, '4')}
                        {renderSkillCell(4, '5')}
                        {renderSkillCell(5, '6')}
                        {renderSkillCell(6, '6')}
                        {renderSkillCell(7, '7')}
                        {renderSkillCell(8, '8')}
                        {renderSkillCell(9, '9')}
                        {renderSkillCell(10, '9')}
                        {renderSkillCell(11, '10')}
                        {renderSkillCell(12, '11')}
                        {renderSkillCell(13, '12')}
                        {renderSkillCell(14, '12')}
                        {renderSkillCell(15, '13')}
                    </tr>
                    <tr>
                        <td>Forehand</td>
                        {renderSkillCell(1, '7')}
                        {renderSkillCell(2, '8')}
                        {renderSkillCell(3, '9')}
                        {renderSkillCell(4, '11')}
                        {renderSkillCell(5, '12')}
                        {renderSkillCell(6, '13')}
                        {renderSkillCell(7, '15')}
                        {renderSkillCell(8, '16')}
                        {renderSkillCell(9, '18')}
                        {renderSkillCell(10, '19')}
                        {renderSkillCell(11, '20')}
                        {renderSkillCell(12, '22')}
                        {renderSkillCell(13, '23')}
                        {renderSkillCell(14, '25')}
                        {renderSkillCell(15, '26')}
                    </tr>
                    <tr>
                        <td>Backhand</td>
                        {renderSkillCell(1, '5')}
                        {renderSkillCell(2, '6')}
                        {renderSkillCell(3, '8')}
                        {renderSkillCell(4, '9')}
                        {renderSkillCell(5, '10')}
                        {renderSkillCell(6, '11')}
                        {renderSkillCell(7, '12')}
                        {renderSkillCell(8, '13')}
                        {renderSkillCell(9, '15')}
                        {renderSkillCell(10, '16')}
                        {renderSkillCell(11, '17')}
                        {renderSkillCell(12, '18')}
                        {renderSkillCell(13, '20')}
                        {renderSkillCell(14, '21')}
                        {renderSkillCell(15, '22')}
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        {renderSkillCell(1, '25', true)}
                        {renderSkillCell(2, '31', true)}
                        {renderSkillCell(3, '37', true)}
                        {renderSkillCell(4, '44', true)}
                        {renderSkillCell(5, '50', true)}
                        {renderSkillCell(6, '55', true)}
                        {renderSkillCell(7, '63', true)}
                        {renderSkillCell(8, '68', true)}
                        {renderSkillCell(9, '77', true)}
                        {renderSkillCell(10, '82', true)}
                        {renderSkillCell(11, '89', true)}
                        {renderSkillCell(12, '95', true)}
                        {renderSkillCell(13, '102', true)}
                        {renderSkillCell(14, '108', true)}
                        {renderSkillCell(15, '114', true)}
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default MarkTable;