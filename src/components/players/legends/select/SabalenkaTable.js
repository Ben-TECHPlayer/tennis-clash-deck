import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function SabalenkaTable() {
    const ITEM_ID = "players/legends/database/Sabalenka";

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
                <table className="sabalenka">
                    <caption>Sabalenka's Upgrade Table</caption>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>6K</td>
                            <td>11K</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="sabalenka">
                    <caption>Sabalenka's Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '')}
                            {renderSkillCell(5, '')}
                            {renderSkillCell(6, '')}
                            {renderSkillCell(7, '')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '')}
                            {renderSkillCell(12, '')}
                            {renderSkillCell(13, '')}
                            {renderSkillCell(14, '')}
                            {renderSkillCell(15, '26')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '')}
                            {renderSkillCell(5, '')}
                            {renderSkillCell(6, '')}
                            {renderSkillCell(7, '')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '')}
                            {renderSkillCell(12, '')}
                            {renderSkillCell(13, '')}
                            {renderSkillCell(14, '')}
                            {renderSkillCell(15, '18')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '')}
                            {renderSkillCell(5, '')}
                            {renderSkillCell(6, '')}
                            {renderSkillCell(7, '')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '')}
                            {renderSkillCell(12, '')}
                            {renderSkillCell(13, '')}
                            {renderSkillCell(14, '')}
                            {renderSkillCell(15, '20')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '2')}
                            {renderSkillCell(2, '3')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '')}
                            {renderSkillCell(5, '')}
                            {renderSkillCell(6, '')}
                            {renderSkillCell(7, '')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '')}
                            {renderSkillCell(12, '')}
                            {renderSkillCell(13, '')}
                            {renderSkillCell(14, '')}
                            {renderSkillCell(15, '12')}
                        </tr>
                        <tr>
                            <td>Forehand</td>
                            {renderSkillCell(1, '8')}
                            {renderSkillCell(2, '10')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '')}
                            {renderSkillCell(5, '')}
                            {renderSkillCell(6, '')}
                            {renderSkillCell(7, '')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '')}
                            {renderSkillCell(12, '')}
                            {renderSkillCell(13, '')}
                            {renderSkillCell(14, '')}
                            {renderSkillCell(15, '31')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '6')}
                            {renderSkillCell(2, '7')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '')}
                            {renderSkillCell(5, '')}
                            {renderSkillCell(6, '')}
                            {renderSkillCell(7, '')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '')}
                            {renderSkillCell(12, '')}
                            {renderSkillCell(13, '')}
                            {renderSkillCell(14, '')}
                            {renderSkillCell(15, '24')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '30', true)}
                            {renderSkillCell(2, '38', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '', true)}
                            {renderSkillCell(5, '', true)}
                            {renderSkillCell(6, '', true)}
                            {renderSkillCell(7, '', true)}
                            {renderSkillCell(8, '', true)}
                            {renderSkillCell(9, '', true)}
                            {renderSkillCell(10, '', true)}
                            {renderSkillCell(11, '', true)}
                            {renderSkillCell(12, '', true)}
                            {renderSkillCell(13, '', true)}
                            {renderSkillCell(14, '', true)}
                            {renderSkillCell(15, '131', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default SabalenkaTable;