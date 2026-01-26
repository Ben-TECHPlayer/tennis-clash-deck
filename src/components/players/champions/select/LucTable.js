import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function LucTable() {
    const ITEM_ID = "players/champions/database/Luc";

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
                <table className="luc">
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
                <table className="luc">
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
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '7')}
                            {renderSkillCell(5, '8')}
                            {renderSkillCell(6, '9')}
                            {renderSkillCell(7, '11')}
                            {renderSkillCell(8, '12')}
                            {renderSkillCell(9, '13')}
                            {renderSkillCell(10, '15')}
                            {renderSkillCell(11, '16')}
                            {renderSkillCell(12, '17')}
                            {renderSkillCell(13, '19')}
                            {renderSkillCell(14, '20')}
                            {renderSkillCell(15, '21')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '2')}
                            {renderSkillCell(2, '3')}
                            {renderSkillCell(3, '4')}
                            {renderSkillCell(4, '4')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '5')}
                            {renderSkillCell(7, '6')}
                            {renderSkillCell(8, '7')}
                            {renderSkillCell(9, '7')}
                            {renderSkillCell(10, '8')}
                            {renderSkillCell(11, '8')}
                            {renderSkillCell(12, '9')}
                            {renderSkillCell(13, '10')}
                            {renderSkillCell(14, '10')}
                            {renderSkillCell(15, '11')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '6')}
                            {renderSkillCell(4, '7')}
                            {renderSkillCell(5, '8')}
                            {renderSkillCell(6, '9')}
                            {renderSkillCell(7, '10')}
                            {renderSkillCell(8, '11')}
                            {renderSkillCell(9, '12')}
                            {renderSkillCell(10, '13')}
                            {renderSkillCell(11, '14')}
                            {renderSkillCell(12, '15')}
                            {renderSkillCell(13, '16')}
                            {renderSkillCell(14, '17')}
                            {renderSkillCell(15, '18')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '2')}
                            {renderSkillCell(2, '3')}
                            {renderSkillCell(3, '3')}
                            {renderSkillCell(4, '4')}
                            {renderSkillCell(5, '4')}
                            {renderSkillCell(6, '5')}
                            {renderSkillCell(7, '6')}
                            {renderSkillCell(8, '6')}
                            {renderSkillCell(9, '7')}
                            {renderSkillCell(10, '8')}
                            {renderSkillCell(11, '8')}
                            {renderSkillCell(12, '9')}
                            {renderSkillCell(13, '10')}
                            {renderSkillCell(14, '11')}
                            {renderSkillCell(15, '11')}
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '6')}
                            {renderSkillCell(2, '7')}
                            {renderSkillCell(3, '9')}
                            {renderSkillCell(4, '10')}
                            {renderSkillCell(5, '11')}
                            {renderSkillCell(6, '12')}
                            {renderSkillCell(7, '14')}
                            {renderSkillCell(8, '15')}
                            {renderSkillCell(9, '16')}
                            {renderSkillCell(10, '18')}
                            {renderSkillCell(11, '19')}
                            {renderSkillCell(12, '20')}
                            {renderSkillCell(13, '21')}
                            {renderSkillCell(14, '22')}
                            {renderSkillCell(15, '24')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '6')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '9')}
                            {renderSkillCell(6, '10')}
                            {renderSkillCell(7, '11')}
                            {renderSkillCell(8, '12')}
                            {renderSkillCell(9, '13')}
                            {renderSkillCell(10, '14')}
                            {renderSkillCell(11, '15')}
                            {renderSkillCell(12, '16')}
                            {renderSkillCell(13, '17')}
                            {renderSkillCell(14, '18')}
                            {renderSkillCell(15, '19')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '21', true)}
                            {renderSkillCell(2, '27', true)}
                            {renderSkillCell(3, '33', true)}
                            {renderSkillCell(4, '40', true)}
                            {renderSkillCell(5, '45', true)}
                            {renderSkillCell(6, '50', true)}
                            {renderSkillCell(7, '58', true)}
                            {renderSkillCell(8, '63', true)}
                            {renderSkillCell(9, '68', true)}
                            {renderSkillCell(10, '76', true)}
                            {renderSkillCell(11, '80', true)}
                            {renderSkillCell(12, '86', true)}
                            {renderSkillCell(13, '93', true)}
                            {renderSkillCell(14, '98', true)}
                            {renderSkillCell(15, '104', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default LucTable;