import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function ZeusTable(){

    const ITEM_ID = "attributes/racket/database/Zeus";
    
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
                <table className="zeus">
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
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>400</td>
                            <td>800</td>
                            <td>1k</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>210k</td>
                            <td>250k</td>
                            <td>300k</td>
                            <td>380k</td>
                            <td>450k</td>
                            <td>530k</td>
                            <td>560k</td>
                            <td>600k</td>
                            <td>700k</td>
                            <td>1.85m</td>
                            <td>7m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="zeus">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '7')}
                            {renderSkillCell(5, '7')}
                            {renderSkillCell(6, '7')}
                            {renderSkillCell(7, '7')}
                            {renderSkillCell(8, '8')}
                            {renderSkillCell(9, '9')}
                            {renderSkillCell(10, '9')}
                            {renderSkillCell(11, '10')}
                            {renderSkillCell(12, '10')}
                            {renderSkillCell(13, '11')}
                            {renderSkillCell(14, '12')}
                            {renderSkillCell(15, '12')}
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '10')}
                            {renderSkillCell(6, '14')}
                            {renderSkillCell(7, '18')}
                            {renderSkillCell(8, '21')}
                            {renderSkillCell(9, '23')}
                            {renderSkillCell(10, '25')}
                            {renderSkillCell(11, '27')}
                            {renderSkillCell(12, '29')}
                            {renderSkillCell(13, '32')}
                            {renderSkillCell(14, '34')}
                            {renderSkillCell(15, '36')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '13', true)}
                            {renderSkillCell(5, '17', true)}
                            {renderSkillCell(6, '21', true)}
                            {renderSkillCell(7, '25', true)}
                            {renderSkillCell(8, '29', true)}
                            {renderSkillCell(9, '32', true)}
                            {renderSkillCell(10, '34', true)}
                            {renderSkillCell(11, '37', true)}
                            {renderSkillCell(12, '39', true)}
                            {renderSkillCell(13, '43', true)}
                            {renderSkillCell(14, '46', true)}
                            {renderSkillCell(15, '48', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default ZeusTable;