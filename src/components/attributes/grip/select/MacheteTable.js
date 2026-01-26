import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function MacheteTable(){

    const ITEM_ID = "attributes/grip/database/Machete";
    
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
            <table className="the-machete">
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
                        <td></td>
                        <td></td>
                        <td>2</td>
                        <td>4</td>
                        <td>10</td>
                        <td>30</td>
                        <td>60</td>
                        <td>150</td>
                        <td>400</td>
                        <td>800</td>
                        <td>2000</td>
                        <td>4000</td>
                    </tr>
                    <tr>
                        <td>Price Upgrade</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>7.2k</td>
                        <td>10.9k</td>
                        <td>15k</td>
                        <td>21.7k</td>
                        <td>27.5k</td>
                        <td>35.9k</td>
                        <td>45.9k</td>
                        <td>75k</td>
                        <td>200k</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="table-container">
            <table className="the-machete">
                <caption>Skills Table</caption>
                <thead>
                    <tr>
                        <th>Level</th>
                        {[...Array(13)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Backhand</td>
                        {renderSkillCell(1, '')}
                        {renderSkillCell(2, '')}
                        {renderSkillCell(3, '17')}
                        {renderSkillCell(4, '18')}
                        {renderSkillCell(5, '20')}
                        {renderSkillCell(6, '26')}
                        {renderSkillCell(7, '29')}
                        {renderSkillCell(8, '32')}
                        {renderSkillCell(9, '36')}
                        {renderSkillCell(10, '39')}
                        {renderSkillCell(11, '42')}
                        {renderSkillCell(12, '45')}
                        {renderSkillCell(13, '48')}
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Power</th>
                        {renderSkillCell(1, '')}
                        {renderSkillCell(2, '')}
                        {renderSkillCell(3, '17')}
                        {renderSkillCell(4, '18')}
                        {renderSkillCell(5, '20')}
                        {renderSkillCell(6, '26')}
                        {renderSkillCell(7, '29')}
                        {renderSkillCell(8, '32')}
                        {renderSkillCell(9, '36')}
                        {renderSkillCell(10, '39')}
                        {renderSkillCell(11, '42')}
                        {renderSkillCell(12, '45')}
                        {renderSkillCell(13, '48')}
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
    );
}

export default MacheteTable;