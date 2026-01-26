import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function KetoSourcingTable(){

    const ITEM_ID = "attributes/nutrition/database/KetoSourcing";
    
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
                <table className="keto-sourcing">
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>2</td>
                            <td>4</td>
                            <td>10</td>
                            <td>20</td>
                            <td>40</td>
                            <td>60</td>
                            <td>100</td>
                            <td>150</td>
                            <td>300</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>58.4k</td>
                            <td>75k</td>
                            <td>87.5k</td>
                            <td>104.2k</td>
                            <td>183.4k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="keto-sourcing">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '18')}
                            {renderSkillCell(5, '20')}
                            {renderSkillCell(6, '23')}
                            {renderSkillCell(7, '26')}
                            {renderSkillCell(8, '29')}
                            {renderSkillCell(9, '32')}
                            {renderSkillCell(10, '35')}
                            {renderSkillCell(11, '38')}
                            {renderSkillCell(12, '41')}
                            {renderSkillCell(13, '44')}
                            {renderSkillCell(14, '47')}
                            {renderSkillCell(15, '49')}
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '18', true)}
                            {renderSkillCell(5, '20', true)}
                            {renderSkillCell(6, '23', true)}
                            {renderSkillCell(7, '26', true)}
                            {renderSkillCell(8, '29', true)}
                            {renderSkillCell(9, '32', true)}
                            {renderSkillCell(10, '35', true)}
                            {renderSkillCell(11, '38', true)}
                            {renderSkillCell(12, '41', true)}
                            {renderSkillCell(13, '44', true)}
                            {renderSkillCell(14, '47', true)}
                            {renderSkillCell(15, '49', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>    
        </div>              
    );
}

export default KetoSourcingTable;