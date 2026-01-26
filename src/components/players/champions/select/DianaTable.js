import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function DianaTable() {
    const ITEM_ID = "players/champions/database/Diana";

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
                <table className="diana">
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
                <table className="diana">
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
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '10')}
                            {renderSkillCell(6, '11')}
                            {renderSkillCell(7, '13')}
                            {renderSkillCell(8, '14')}
                            {renderSkillCell(9, '16')}
                            {renderSkillCell(10, '17')}
                            {renderSkillCell(11, '19')}
                            {renderSkillCell(12, '20')}
                            {renderSkillCell(13, '22')}
                            {renderSkillCell(14, '24')}
                            {renderSkillCell(15, '25')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '1')}
                            {renderSkillCell(2, '2')}
                            {renderSkillCell(3, '2')}
                            {renderSkillCell(4, '3')}
                            {renderSkillCell(5, '3')}
                            {renderSkillCell(6, '4')}
                            {renderSkillCell(7, '4')}
                            {renderSkillCell(8, '4')}
                            {renderSkillCell(9, '5')}
                            {renderSkillCell(10, '5')}
                            {renderSkillCell(11, '6')}
                            {renderSkillCell(12, '6')}
                            {renderSkillCell(13, '7')}
                            {renderSkillCell(14, '7')}
                            {renderSkillCell(15, '8')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '9')}
                            {renderSkillCell(6, '10')}
                            {renderSkillCell(7, '11')}
                            {renderSkillCell(8, '12')}
                            {renderSkillCell(9, '13')}
                            {renderSkillCell(10, '15')}
                            {renderSkillCell(11, '16')}
                            {renderSkillCell(12, '17')}
                            {renderSkillCell(13, '18')}
                            {renderSkillCell(14, '19')}
                            {renderSkillCell(15, '20')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '6')}
                            {renderSkillCell(2, '7')}
                            {renderSkillCell(3, '8')}
                            {renderSkillCell(4, '9')}
                            {renderSkillCell(5, '11')}
                            {renderSkillCell(6, '12')}
                            {renderSkillCell(7, '13')}
                            {renderSkillCell(8, '14')}
                            {renderSkillCell(9, '16')}
                            {renderSkillCell(10, '17')}
                            {renderSkillCell(11, '18')}
                            {renderSkillCell(12, '19')}
                            {renderSkillCell(13, '20')}
                            {renderSkillCell(14, '22')}
                            {renderSkillCell(15, '24')}
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
                            {renderSkillCell(10, '10')}
                            {renderSkillCell(11, '11')}
                            {renderSkillCell(12, '13')}
                            {renderSkillCell(13, '13')}
                            {renderSkillCell(14, '14')}
                            {renderSkillCell(15, '15')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '7')}
                            {renderSkillCell(6, '7')}
                            {renderSkillCell(7, '8')}
                            {renderSkillCell(8, '9')}
                            {renderSkillCell(9, '10')}
                            {renderSkillCell(10, '11')}
                            {renderSkillCell(11, '13')}
                            {renderSkillCell(12, '13')}
                            {renderSkillCell(13, '14')}
                            {renderSkillCell(14, '14')}
                            {renderSkillCell(15, '17')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '22', true)}
                            {renderSkillCell(2, '28', true)}
                            {renderSkillCell(3, '34', true)}
                            {renderSkillCell(4, '40', true)}
                            {renderSkillCell(5, '47', true)}
                            {renderSkillCell(6, '52', true)}
                            {renderSkillCell(7, '57', true)}
                            {renderSkillCell(8, '62', true)}
                            {renderSkillCell(9, '70', true)}
                            {renderSkillCell(10, '75', true)}
                            {renderSkillCell(11, '89', true)}
                            {renderSkillCell(12, '88', true)}
                            {renderSkillCell(13, '94', true)}
                            {renderSkillCell(14, '100', true)}
                            {renderSkillCell(15, '115', true)}
                        </tr>
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
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default DianaTable;