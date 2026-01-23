import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function CobraTable(){

    const ITEM_ID = "attributes/grip/database/Cobra";
    
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
                <table className="the-cobra">
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
                            <td></td>
                            <td>2</td>
                            <td>4</td>
                            <td>10</td>
                            <td>30</td>
                            <td>60</td>
                            <td>120</td>
                            <td>240</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>21.7K</td>
                            <td>27.5K</td>
                            <td>35.9K</td>
                            <td>45.9K</td>
                            <td>58.4K</td>
                            <td>75K</td>
                            <td>104.2K</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-cobra">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(13)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '12')}
                            {renderSkillCell(5, '12')}
                            {renderSkillCell(6, '12')}
                            {renderSkillCell(7, '13')}
                            {renderSkillCell(8, '14')}
                            {renderSkillCell(9, '15')}
                            {renderSkillCell(10, '17')}
                            {renderSkillCell(11, '17')}
                            {renderSkillCell(12, '18')}
                            {renderSkillCell(13, '20')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '15')}
                            {renderSkillCell(6, '17')}
                            {renderSkillCell(7, '20')}
                            {renderSkillCell(8, '22')}
                            {renderSkillCell(9, '23')}
                            {renderSkillCell(10, '27')}
                            {renderSkillCell(11, '29')}
                            {renderSkillCell(12, '32')}
                            {renderSkillCell(13, '35')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '19', true)}
                            {renderSkillCell(5, '26', true)}
                            {renderSkillCell(6, '29', true)}
                            {renderSkillCell(7, '33', true)}
                            {renderSkillCell(8, '36', true)}
                            {renderSkillCell(9, '38', true)}
                            {renderSkillCell(10, '44', true)}
                            {renderSkillCell(11, '46', true)}
                            {renderSkillCell(12, '50', true)}
                            {renderSkillCell(13, '55', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
    );
}

export default CobraTable;