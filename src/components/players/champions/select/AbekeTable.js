import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function AbekeTable() {
    const ITEM_ID = "players/champions/database/Abeke";

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
                <table className="abeke">
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
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="abeke">
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
                            {renderSkillCell(2, '8')}
                            {renderSkillCell(3, '10')}
                            {renderSkillCell(4, '12')}
                            {renderSkillCell(5, '14')}
                            {renderSkillCell(6, '16')}
                            {renderSkillCell(7, '17')}
                            {renderSkillCell(8, '19')}
                            {renderSkillCell(9, '21')}
                            {renderSkillCell(10, '23')}
                            {renderSkillCell(11, '25')}
                            {renderSkillCell(12, '26')}
                            {renderSkillCell(13, '28')}
                            {renderSkillCell(14, '30')}
                            {renderSkillCell(15, '32')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '7')}
                            {renderSkillCell(2, '8')}
                            {renderSkillCell(3, '9')}
                            {renderSkillCell(4, '10')}
                            {renderSkillCell(5, '12')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '14')}
                            {renderSkillCell(8, '15')}
                            {renderSkillCell(9, '16')}
                            {renderSkillCell(10, '18')}
                            {renderSkillCell(11, '19')}
                            {renderSkillCell(12, '20')}
                            {renderSkillCell(13, '22')}
                            {renderSkillCell(14, '23')}
                            {renderSkillCell(15, '24')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '7')}
                            {renderSkillCell(6, '8')}
                            {renderSkillCell(7, '9')}
                            {renderSkillCell(8, '10')}
                            {renderSkillCell(9, '11')}
                            {renderSkillCell(10, '12')}
                            {renderSkillCell(11, '13')}
                            {renderSkillCell(12, '13')}
                            {renderSkillCell(13, '14')}
                            {renderSkillCell(14, '15')}
                            {renderSkillCell(15, '16')}
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
                            {renderSkillCell(14, '10')}
                            {renderSkillCell(15, '10')}
                        </tr>
                        <tr>
                            <td>Forehand</td>
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
                            {renderSkillCell(13, '12')}
                            {renderSkillCell(14, '12')}
                            {renderSkillCell(15, '12')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '9')}
                            {renderSkillCell(6, '10')}
                            {renderSkillCell(7, '11')}
                            {renderSkillCell(8, '12')}
                            {renderSkillCell(9, '13')}
                            {renderSkillCell(10, '14')}
                            {renderSkillCell(11, '15')}
                            {renderSkillCell(12, '16')}
                            {renderSkillCell(13, '16')}
                            {renderSkillCell(14, '16')}
                            {renderSkillCell(15, '17')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '26', true)}
                            {renderSkillCell(2, '32', true)}
                            {renderSkillCell(3, '39', true)}
                            {renderSkillCell(4, '45', true)}
                            {renderSkillCell(5, '52', true)}
                            {renderSkillCell(6, '59', true)}
                            {renderSkillCell(7, '64', true)}
                            {renderSkillCell(8, '71', true)}
                            {renderSkillCell(9, '78', true)}
                            {renderSkillCell(10, '84', true)}
                            {renderSkillCell(11, '91', true)}
                            {renderSkillCell(12, '96', true)}
                            {renderSkillCell(13, '101', true)}
                            {renderSkillCell(14, '106', true)}
                            {renderSkillCell(15, '111', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default AbekeTable;