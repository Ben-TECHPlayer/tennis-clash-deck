import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function AntioxidantsTable(){

    const ITEM_ID = "attributes/nutrition/database/Antioxidants";
    
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
                <table className="antioxidants">
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
                            <td>4</td>
                            <td>10</td>
                            <td>20</td>
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>400</td>
                            <td>800</td>
                            <td>1k</td>
                            <td>2k</td>
                            <td>4k</td>
                            <td>7k</td>
                            <td>25k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>21.7K</td>
                            <td>27.5k</td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>58.4k</td>
                            <td>75k</td>
                            <td>87.5k</td>
                            <td>104.2k</td>
                            <td>116.7k</td>
                            <td>150k</td>
                            <td>183.4k</td>
                            <td>291.7k</td>
                            <td>750k</td>
                            <td>3m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="antioxidants">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '3')}
                            {renderSkillCell(3, '4')}
                            {renderSkillCell(4, '5')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '5')}
                            {renderSkillCell(7, '5')}
                            {renderSkillCell(8, '5')}
                            {renderSkillCell(9, '6')}
                            {renderSkillCell(10, '6')}
                            {renderSkillCell(11, '7')}
                            {renderSkillCell(12, '7')}
                            {renderSkillCell(13, '7')}
                            {renderSkillCell(14, '8')}
                            {renderSkillCell(15, '8')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '0')}
                            {renderSkillCell(2, '1')}
                            {renderSkillCell(3, '3')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '9')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '17')}
                            {renderSkillCell(8, '19')}
                            {renderSkillCell(9, '21')}
                            {renderSkillCell(10, '23')}
                            {renderSkillCell(11, '26')}
                            {renderSkillCell(12, '28')}
                            {renderSkillCell(13, '30')}
                            {renderSkillCell(14, '32')}
                            {renderSkillCell(15, '34')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '3', true)}
                            {renderSkillCell(2, '9', true)}
                            {renderSkillCell(3, '7', true)}
                            {renderSkillCell(4, '11', true)}
                            {renderSkillCell(5, '14', true)}
                            {renderSkillCell(6, '18', true)}
                            {renderSkillCell(7, '22', true)}
                            {renderSkillCell(8, '24', true)}
                            {renderSkillCell(9, '27', true)}
                            {renderSkillCell(10, '29', true)}
                            {renderSkillCell(11, '33', true)}
                            {renderSkillCell(12, '35', true)}
                            {renderSkillCell(13, '37', true)}
                            {renderSkillCell(14, '40', true)}
                            {renderSkillCell(15, '42', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default AntioxidantsTable;