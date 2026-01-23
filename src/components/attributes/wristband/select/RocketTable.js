import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function RocketTable() {
    const ITEM_ID = "attributes/wristband/database/Rocket";

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
                <table className="the-rocket">
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
                            <td>2</td>
                            <td>4</td>
                            <td>10</td>
                            <td>20</td>
                            <td>50</td>
                            <td>150</td>
                            <td>400</td>
                            <td>800</td>
                            <td>1k</td>
                            <td>2k</td>
                            <td>4k</td>
                            <td>8k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>0.6k</td>
                            <td>1.4k</td>
                            <td>2.5k</td>
                            <td>4.6k</td>
                            <td>7.2k</td>
                            <td>10.9K</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>45.9k</td>
                            <td>58k</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="the-rocket">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(13)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '2')}
                            {renderSkillCell(2, '3')}
                            {renderSkillCell(3, '3')}
                            {renderSkillCell(4, '3')}
                            {renderSkillCell(5, '3')}
                            {renderSkillCell(6, '3')}
                            {renderSkillCell(7, '3')}
                            {renderSkillCell(8, '3')}
                            {renderSkillCell(9, '4')}
                            {renderSkillCell(10, '4')}
                            {renderSkillCell(11, '7')}
                            {renderSkillCell(12, '7')}
                            {renderSkillCell(13, '8')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '0')}
                            {renderSkillCell(2, '1')}
                            {renderSkillCell(3, '3')}
                            {renderSkillCell(4, '12')}
                            {renderSkillCell(5, '14')}
                            {renderSkillCell(6, '17')}
                            {renderSkillCell(7, '19')}
                            {renderSkillCell(8, '22')}
                            {renderSkillCell(9, '24')}
                            {renderSkillCell(10, '27')}
                            {renderSkillCell(11, '29')}
                            {renderSkillCell(12, '32')}
                            {renderSkillCell(13, '34')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '2', true)}
                            {renderSkillCell(2, '4', true)}
                            {renderSkillCell(3, '6', true)}
                            {renderSkillCell(4, '15', true)}
                            {renderSkillCell(5, '17', true)}
                            {renderSkillCell(6, '20', true)}
                            {renderSkillCell(7, '22', true)}
                            {renderSkillCell(8, '25', true)}
                            {renderSkillCell(9, '28', true)}
                            {renderSkillCell(10, '31', true)}
                            {renderSkillCell(11, '36', true)}
                            {renderSkillCell(12, '39', true)}
                            {renderSkillCell(13, '42', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>                                  
    );
}

export default RocketTable;