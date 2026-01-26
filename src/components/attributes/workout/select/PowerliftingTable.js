import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function PowerliftingTable() {
    const ITEM_ID = "attributes/workout/database/Powerlifting";

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
                <table className="powerlifting">
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
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>58.4k</td>
                            <td>75k</td>
                            <td>104.2k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="powerlifting">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(13)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '12')}
                            {renderSkillCell(5, '12')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '13')}
                            {renderSkillCell(8, '14')}
                            {renderSkillCell(9, '15')}
                            {renderSkillCell(10, '16')}
                            {renderSkillCell(11, '17')}
                            {renderSkillCell(12, '18')}
                            {renderSkillCell(13, '20')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '10')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '17')}
                            {renderSkillCell(8, '19')}
                            {renderSkillCell(9, '21')}
                            {renderSkillCell(10, '23')}
                            {renderSkillCell(11, '26')}
                            {renderSkillCell(12, '29')}
                            {renderSkillCell(13, '31')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '18', true)}
                            {renderSkillCell(5, '22', true)}
                            {renderSkillCell(6, '26', true)}
                            {renderSkillCell(7, '30', true)}
                            {renderSkillCell(8, '33', true)}
                            {renderSkillCell(9, '36', true)}
                            {renderSkillCell(10, '39', true)}
                            {renderSkillCell(11, '43', true)}
                            {renderSkillCell(12, '47', true)}
                            {renderSkillCell(13, '51', true)}
                        </tr>
                    </tfoot>
                </table> 
            </div>
        </div>                    
    );
}

export default PowerliftingTable;