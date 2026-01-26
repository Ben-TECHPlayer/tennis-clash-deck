import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function KodiakTable() {
    const ITEM_ID = "attributes/wristband/database/Kodiak";

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
                <table className="the-kodiak">
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
                            <td>1.5k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
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
                            <td>291.7k</td>
                            <td>750k</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="the-kodiak">
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
                            {renderSkillCell(3, '2')}
                            {renderSkillCell(4, '3')}
                            {renderSkillCell(5, '3')}
                            {renderSkillCell(6, '3')}
                            {renderSkillCell(7, '3')}
                            {renderSkillCell(8, '4')}
                            {renderSkillCell(9, '4')}
                            {renderSkillCell(10, '4')}
                            {renderSkillCell(11, '5')}
                            {renderSkillCell(12, '5')}
                            {renderSkillCell(13, '5')}
                            {renderSkillCell(14, '6')}
                            {renderSkillCell(15, '6')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '9')}
                            {renderSkillCell(4, '12')}
                            {renderSkillCell(5, '14')}
                            {renderSkillCell(6, '17')}
                            {renderSkillCell(7, '19')}
                            {renderSkillCell(8, '21')}
                            {renderSkillCell(9, '24')}
                            {renderSkillCell(10, '26')}
                            {renderSkillCell(11, '28')}
                            {renderSkillCell(12, '31')}
                            {renderSkillCell(13, '33')}
                            {renderSkillCell(14, '36')}
                            {renderSkillCell(15, '38')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '11', true)}
                            {renderSkillCell(4, '15', true)}
                            {renderSkillCell(5, '17', true)}
                            {renderSkillCell(6, '20', true)}
                            {renderSkillCell(7, '22', true)}
                            {renderSkillCell(8, '25', true)}
                            {renderSkillCell(9, '28', true)}
                            {renderSkillCell(10, '30', true)}
                            {renderSkillCell(11, '33', true)}
                            {renderSkillCell(12, '36', true)}
                            {renderSkillCell(13, '38', true)}
                            {renderSkillCell(14, '42', true)}
                            {renderSkillCell(15, '44', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default KodiakTable;