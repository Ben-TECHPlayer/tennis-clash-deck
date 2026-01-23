import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function KoiTable() {
    const ITEM_ID = "attributes/wristband/database/Koi";

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
                <table className="the-koi">
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
                            <td>21.7K</td>
                            <td>27.5K</td>
                            <td>35.9K</td>
                            <td>45.9K</td>
                            <td>58.4K</td>
                            <td>75K</td>
                            <td>87.5K</td>
                            <td>104.2k</td>
                            <td>183.4k</td>
                            <td>500k</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-koi">
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
                            {renderSkillCell(7, '10')}
                            {renderSkillCell(8, '10')}
                            {renderSkillCell(9, '11')}
                            {renderSkillCell(10, '12')}
                            {renderSkillCell(11, '12')}
                            {renderSkillCell(12, '12')}
                            {renderSkillCell(13, '13')}
                            {renderSkillCell(14, '14')}
                            {renderSkillCell(15, '14')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '2')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '9')}
                            {renderSkillCell(7, '14')}
                            {renderSkillCell(8, '16')}
                            {renderSkillCell(9, '18')}
                            {renderSkillCell(10, '20')}
                            {renderSkillCell(11, '22')}
                            {renderSkillCell(12, '24')}
                            {renderSkillCell(13, '26')}
                            {renderSkillCell(14, '28')}
                            {renderSkillCell(15, '30')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '9', true)}
                            {renderSkillCell(5, '12', true)}
                            {renderSkillCell(6, '16', true)}
                            {renderSkillCell(7, '24', true)}
                            {renderSkillCell(8, '26', true)}
                            {renderSkillCell(9, '29', true)}
                            {renderSkillCell(10, '32', true)}
                            {renderSkillCell(11, '34', true)}
                            {renderSkillCell(12, '36', true)}
                            {renderSkillCell(13, '39', true)}
                            {renderSkillCell(14, '42', true)}
                            {renderSkillCell(15, '44', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
    );
}

export default KoiTable;