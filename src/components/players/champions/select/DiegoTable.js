import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function DiegoTable() {
    const ITEM_ID = "players/champions/database/Diego";

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
            <table className="diego">
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
            <table className="diego">
                <caption>Skills Table</caption>
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
                        <td>Agility</td>
                        {renderSkillCell(1, '6')}
                        {renderSkillCell(2, '8')}
                        {renderSkillCell(3, '10')}
                        {renderSkillCell(4, '12')}
                        {renderSkillCell(5, '14')}
                        {renderSkillCell(6, '15')}
                        {renderSkillCell(7, '17')}
                        {renderSkillCell(8, '19')}
                        {renderSkillCell(9, '21')}
                        {renderSkillCell(10, '23')}
                        {renderSkillCell(11, '25')}
                        {renderSkillCell(12, '27')}
                        {renderSkillCell(13, '29')}
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
                        {renderSkillCell(9, '10')}
                        {renderSkillCell(10, '11')}
                        {renderSkillCell(11, '12')}
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
                        {renderSkillCell(9, '6')}
                        {renderSkillCell(10, '7')}
                        {renderSkillCell(11, '7')}
                        {renderSkillCell(12, '8')}
                        {renderSkillCell(13, '8')}
                        {renderSkillCell(14, '9')}
                        {renderSkillCell(15, '10')}
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
                        <td>Backhand</td>
                        {renderSkillCell(1, '3')}
                        {renderSkillCell(2, '3')}
                        {renderSkillCell(3, '4')}
                        {renderSkillCell(4, '5')}
                        {renderSkillCell(5, '6')}
                        {renderSkillCell(6, '7')}
                        {renderSkillCell(7, '7')}
                        {renderSkillCell(8, '8')}
                        {renderSkillCell(9, '8')}
                        {renderSkillCell(10, '9')}
                        {renderSkillCell(11, '10')}
                        {renderSkillCell(12, '11')}
                        {renderSkillCell(13, '12')}
                        {renderSkillCell(14, '13')}
                        {renderSkillCell(15, '14')}
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        {renderSkillCell(1, '26', true)}
                        {renderSkillCell(2, '30', true)}
                        {renderSkillCell(3, '37', true)}
                        {renderSkillCell(4, '44', true)}
                        {renderSkillCell(5, '51', true)}
                        {renderSkillCell(6, '57', true)}
                        {renderSkillCell(7, '62', true)}
                        {renderSkillCell(8, '69', true)}
                        {renderSkillCell(9, '73', true)}
                        {renderSkillCell(10, '81', true)}
                        {renderSkillCell(11, '87', true)}
                        {renderSkillCell(12, '94', true)}
                        {renderSkillCell(13, '101', true)}
                        {renderSkillCell(14, '107', true)}
                        {renderSkillCell(15, '114', true)}
                    </tr>
                </tfoot>
            </table>
            </div>
    );
}

export default DiegoTable;