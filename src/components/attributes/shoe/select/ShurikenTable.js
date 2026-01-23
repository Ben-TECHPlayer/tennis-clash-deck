import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function ShurikenTable(){

    const ITEM_ID = "attributes/shoe/database/Shuriken";
    
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
                <table className="the-shuriken">
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
                            <td>500</td>
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
                <table className="the-shuriken">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '11')}
                            {renderSkillCell(5, '11')}
                            {renderSkillCell(6, '12')}
                            {renderSkillCell(7, '12')}
                            {renderSkillCell(8, '13')}
                            {renderSkillCell(9, '14')}
                            {renderSkillCell(10, '15')}
                            {renderSkillCell(11, '16')}
                            {renderSkillCell(12, '17')}
                            {renderSkillCell(13, '18')}
                            {renderSkillCell(14, '19')}
                            {renderSkillCell(15, '20')}
                        </tr>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '12')}
                            {renderSkillCell(6, '17')}
                            {renderSkillCell(7, '20')}
                            {renderSkillCell(8, '23')}
                            {renderSkillCell(9, '26')}
                            {renderSkillCell(10, '29')}
                            {renderSkillCell(11, '32')}
                            {renderSkillCell(12, '35')}
                            {renderSkillCell(13, '38')}
                            {renderSkillCell(14, '41')}
                            {renderSkillCell(15, '44')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '19', true)}
                            {renderSkillCell(5, '23', true)}
                            {renderSkillCell(6, '29', true)}
                            {renderSkillCell(7, '32', true)}
                            {renderSkillCell(8, '35', true)}
                            {renderSkillCell(9, '40', true)}
                            {renderSkillCell(10, '45', true)}
                            {renderSkillCell(11, '48', true)}
                            {renderSkillCell(12, '52', true)}
                            {renderSkillCell(13, '56', true)}
                            {renderSkillCell(14, '60', true)}
                            {renderSkillCell(15, '64', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>   
    );
}

export default ShurikenTable;