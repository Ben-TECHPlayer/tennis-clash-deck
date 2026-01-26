import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function PaulTable() {
    const ITEM_ID = "players/legends/database/Paul";

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
                <table className="paul">
                    <caption>Paul's Upgrade Table</caption>
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
                            <td>4</td>
                            <td>5</td>
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
                            <td>36K</td>
                            <td>52K</td>
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
                <table className="paul">
                    <caption>Paul's Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '8')}
                            {renderSkillCell(4, '10')}
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
                            {renderSkillCell(15, '28')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '8')}
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
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '5')}
                            {renderSkillCell(3, '6')}
                            {renderSkillCell(4, '7')}
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
                            {renderSkillCell(15, '17')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '8')}
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
                            <td>Forehand</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '7')}
                            {renderSkillCell(3, '8')}
                            {renderSkillCell(4, '9')}
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
                            {renderSkillCell(15, '22')}
                        </tr>
                        <tr>
                            <td>Backhand</td>
                            {renderSkillCell(1, '5')}
                            {renderSkillCell(2, '7')}
                            {renderSkillCell(3, '8')}
                            {renderSkillCell(4, '9')}
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
                            {renderSkillCell(15, '22')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '29', true)}
                            {renderSkillCell(2, '37', true)}
                            {renderSkillCell(3, '44', true)}
                            {renderSkillCell(4, '51', true)}
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
                            {renderSkillCell(15, '127', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default PaulTable;