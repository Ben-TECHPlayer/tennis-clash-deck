import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function ResistanceBandTable() {
    const ITEM_ID = "attributes/workout/database/ResistanceBand";

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
                <table className="resistance-band">
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
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="resistance-band">
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
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '9')}
                            {renderSkillCell(6, '10')}
                            {renderSkillCell(7, '10')}
                            {renderSkillCell(8, '11')}
                            {renderSkillCell(9, '12')}
                            {renderSkillCell(10, '13')}
                            {renderSkillCell(11, '14')}
                            {renderSkillCell(12, '15')}
                            {renderSkillCell(13, '15')}
                            {renderSkillCell(14, '16')}
                            {renderSkillCell(15, '17')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '9')}
                            {renderSkillCell(5, '11')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '15')}
                            {renderSkillCell(8, '17')}
                            {renderSkillCell(9, '20')}
                            {renderSkillCell(10, '22')}
                            {renderSkillCell(11, '24')}
                            {renderSkillCell(12, '26')}
                            {renderSkillCell(13, '28')}
                            {renderSkillCell(14, '30')}
                            {renderSkillCell(15, '32')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '17', true)}
                            {renderSkillCell(5, '20', true)}
                            {renderSkillCell(6, '23', true)}
                            {renderSkillCell(7, '25', true)}
                            {renderSkillCell(8, '28', true)}
                            {renderSkillCell(9, '32', true)}
                            {renderSkillCell(10, '35', true)}
                            {renderSkillCell(11, '37', true)}
                            {renderSkillCell(12, '39', true)}
                            {renderSkillCell(13, '43', true)}
                            {renderSkillCell(14, '46', true)}
                            {renderSkillCell(15, '49', true)}
                        </tr>
                    </tfoot>
                </table>
            </div> 
    );
}

export default ResistanceBandTable;