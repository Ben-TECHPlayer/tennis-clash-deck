import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function AnvilTable(){

    const ITEM_ID = "attributes/shoe/database/Anvil";
    
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
                <table className="the-anvil">
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
                            <td>1.5k</td>
                            <td>5k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>58.4k</td>
                            <td>75k</td>
                            <td>87.5k</td>
                            <td>104.2k</td>
                            <td>116.7k</td>
                            <td>150k</td>
                            <td>183.4k</td>
                            <td>216.7k</td>
                            <td>750k</td>
                            <td>5m</td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-anvil">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '4')}
                            {renderSkillCell(4, '5')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '6')}
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
                            <td>Agility</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '10')}
                            {renderSkillCell(5, '13')}
                            {renderSkillCell(6, '19')}
                            {renderSkillCell(7, '25')}
                            {renderSkillCell(8, '27')}
                            {renderSkillCell(9, '30')}
                            {renderSkillCell(10, '33')}
                            {renderSkillCell(11, '36')}
                            {renderSkillCell(12, '40')}
                            {renderSkillCell(13, '43')}
                            {renderSkillCell(14, '46')}
                            {renderSkillCell(15, '48')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '11', true)}
                            {renderSkillCell(4, '15', true)}
                            {renderSkillCell(5, '18', true)}
                            {renderSkillCell(6, '25', true)}
                            {renderSkillCell(7, '31', true)}
                            {renderSkillCell(8, '34', true)}
                            {renderSkillCell(9, '37', true)}
                            {renderSkillCell(10, '41', true)}
                            {renderSkillCell(11, '44', true)}
                            {renderSkillCell(12, '49', true)}
                            {renderSkillCell(13, '53', true)}
                            {renderSkillCell(14, '56', true)}
                            {renderSkillCell(15, '59', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
    );
}

export default AnvilTable;