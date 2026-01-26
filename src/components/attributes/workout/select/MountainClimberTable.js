import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function MountainClimberTable() {
    const ITEM_ID = "attributes/workout/database/MountainClimber";

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
                <table className="mountain-climber">
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
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>87.5k</td>
                            <td>104k</td>
                            <td>116k</td>
                            <td>150k</td>
                            <td>183.4k</td>
                            <td>216.7k</td>
                            <td>250k</td>
                            <td>291.7k</td>
                            <td>333.4k</td>
                            <td>416.7k</td>
                            <td>1.2m</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="mountain-climber">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '3')}
                            {renderSkillCell(4, '4')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '5')}
                            {renderSkillCell(7, '5')}
                            {renderSkillCell(8, '5')}
                            {renderSkillCell(9, '6')}
                            {renderSkillCell(10, '6')}
                            {renderSkillCell(11, '7')}
                            {renderSkillCell(12, '7')}
                            {renderSkillCell(13, '7')}
                            {renderSkillCell(14, '7')}
                            {renderSkillCell(15, '8')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '11')}
                            {renderSkillCell(4, '13')}
                            {renderSkillCell(5, '14')}
                            {renderSkillCell(6, '16')}
                            {renderSkillCell(7, '21')}
                            {renderSkillCell(8, '23')}
                            {renderSkillCell(9, '25')}
                            {renderSkillCell(10, '28')}
                            {renderSkillCell(11, '30')}
                            {renderSkillCell(12, '33')}
                            {renderSkillCell(13, '35')}
                            {renderSkillCell(14, '38')}
                            {renderSkillCell(15, '40')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '14', true)}
                            {renderSkillCell(4, '17', true)}
                            {renderSkillCell(5, '19', true)}
                            {renderSkillCell(6, '21', true)}
                            {renderSkillCell(7, '26', true)}
                            {renderSkillCell(8, '28', true)}
                            {renderSkillCell(9, '31', true)}
                            {renderSkillCell(10, '34', true)}
                            {renderSkillCell(11, '37', true)}
                            {renderSkillCell(12, '40', true)}
                            {renderSkillCell(13, '42', true)}
                            {renderSkillCell(14, '45', true)}
                            {renderSkillCell(15, '48', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default MountainClimberTable;