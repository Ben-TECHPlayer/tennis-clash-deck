import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function NaturalEnergyTable() {
    const ITEM_ID = "attributes/nutrition/database/NaturalEnergy";

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

    return (
        <div className="table-container-scrollable">
            <div className="table-container">
                <table className="natural-energy">
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
                            <td>5k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td><td></td><td></td>
                            <td>210k</td><td>230k</td><td>250K</td><td>300k</td><td>380k</td>
                            <td>450k</td><td>530k</td><td>560k</td><td>600k</td><td>700k</td><td>1.85m</td><td>7.5m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="natural-energy">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {/* On génère les headers 1 à 15 cliquables */}
                            {[...Array(15)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '5')}
                            {renderSkillCell(5, '5')}
                            {renderSkillCell(6, '6')}
                            {renderSkillCell(7, '6')}
                            {renderSkillCell(8, '6')}
                            {renderSkillCell(9, '7')}
                            {renderSkillCell(10, '7')}
                            {renderSkillCell(11, '8')}
                            {renderSkillCell(12, '8')}
                            {renderSkillCell(13, '9')}
                            {renderSkillCell(14, '9')}
                            {renderSkillCell(15, '9')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '')}
                            {renderSkillCell(2, '')}
                            {renderSkillCell(3, '3')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '9')}
                            {renderSkillCell(6, '13')}
                            {renderSkillCell(7, '17')}
                            {renderSkillCell(8, '19')}
                            {renderSkillCell(9, '21')}
                            {renderSkillCell(10, '23')}
                            {renderSkillCell(11, '26')}
                            {renderSkillCell(12, '28')}
                            {renderSkillCell(13, '30')}
                            {renderSkillCell(14, '32')}
                            {renderSkillCell(15, '34')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '8', true)}
                            {renderSkillCell(4, '11', true)}
                            {renderSkillCell(5, '14', true)}
                            {renderSkillCell(6, '19', true)}
                            {renderSkillCell(7, '23', true)}
                            {renderSkillCell(8, '25', true)}
                            {renderSkillCell(9, '28', true)}
                            {renderSkillCell(10, '30', true)}
                            {renderSkillCell(11, '34', true)}
                            {renderSkillCell(12, '36', true)}
                            {renderSkillCell(13, '39', true)}
                            {renderSkillCell(14, '41', true)}
                            {renderSkillCell(15, '43', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default NaturalEnergyTable;