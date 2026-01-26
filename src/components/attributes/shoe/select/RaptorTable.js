import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function RaptorTable(){

    const ITEM_ID = "attributes/shoe/database/Raptor";
    
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
                <table className="the-raptor">
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
                            <td>4</td>
                            <td>10</td>
                            <td>20</td>
                            <td>50</td>
                            <td>150</td>
                            <td>400</td>
                            <td>800</td>
                            <td>1k</td>
                            <td>2k</td>
                            <td>4k</td>
                            <td>8k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>0.6k</td>
                            <td>1.4k</td>
                            <td>2.5k</td>
                            <td>4.6k</td>
                            <td>7.2k</td>
                            <td>10.9k</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>45.9k</td>
                            <td>140k</td>
                            <td>280k</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="the-raptor">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(13)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '4')}
                            {renderSkillCell(4, '5')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '5')}
                            {renderSkillCell(7, '6')}
                            {renderSkillCell(8, '6')}
                            {renderSkillCell(9, '7')}
                            {renderSkillCell(10, '7')}
                            {renderSkillCell(11, '8')}
                            {renderSkillCell(12, '8')}
                            {renderSkillCell(13, '9')}
                        </tr>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '1')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '10')}
                            {renderSkillCell(5, '15')}
                            {renderSkillCell(6, '20')}
                            {renderSkillCell(7, '24')}
                            {renderSkillCell(8, '27')}
                            {renderSkillCell(9, '30')}
                            {renderSkillCell(10, '34')}
                            {renderSkillCell(11, '37')}
                            {renderSkillCell(12, '40')}
                            {renderSkillCell(13, '44')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '4', true)}
                            {renderSkillCell(2, '8', true)}
                            {renderSkillCell(3, '11', true)}
                            {renderSkillCell(4, '15', true)}
                            {renderSkillCell(5, '20', true)}
                            {renderSkillCell(6, '25', true)}
                            {renderSkillCell(7, '30', true)}
                            {renderSkillCell(8, '33', true)}
                            {renderSkillCell(9, '37', true)}
                            {renderSkillCell(10, '41', true)}
                            {renderSkillCell(11, '45', true)}
                            {renderSkillCell(12, '48', true)}
                            {renderSkillCell(13, '53', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default RaptorTable;