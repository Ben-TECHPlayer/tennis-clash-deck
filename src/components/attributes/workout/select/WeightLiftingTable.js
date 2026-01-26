import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext'; 

function WeightLiftingTable() {
    const ITEM_ID = "attributes/workout/database/WeightLifting";

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
                <table className="weight-lifting">
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
                            <td>2k</td>
                            <td>4k</td>
                            <td>7k</td>
                            <td>15k</td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>10.9k</td>
                            <td>12k</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>58.4k</td>
                            <td>75k</td>
                            <td>87.5k</td>
                            <td>104.2k</td>
                            <td>183.4k</td>
                            <td>500k</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="weight-lifting">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(15)].map((_, index) => renderSkillCell(index + 1, index + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '3')}
                            {renderSkillCell(2, '4')}
                            {renderSkillCell(3, '5')}
                            {renderSkillCell(4, '6')}
                            {renderSkillCell(5, '6')}
                            {renderSkillCell(6, '6')}
                            {renderSkillCell(7, '6')}
                            {renderSkillCell(8, '7')}
                            {renderSkillCell(9, '7')}
                            {renderSkillCell(10, '8')}
                            {renderSkillCell(11, '8')}
                            {renderSkillCell(12, '9')}
                            {renderSkillCell(13, '10')}
                            {renderSkillCell(14, '10')}
                            {renderSkillCell(15, '11')}
                        </tr>
                        <tr>
                            <td>Serve</td>
                            {renderSkillCell(1, '4')}
                            {renderSkillCell(2, '6')}
                            {renderSkillCell(3, '7')}
                            {renderSkillCell(4, '8')}
                            {renderSkillCell(5, '11')}
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
                            {renderSkillCell(1, '7', true)}
                            {renderSkillCell(2, '10', true)}
                            {renderSkillCell(3, '12', true)}
                            {renderSkillCell(4, '14', true)}
                            {renderSkillCell(5, '17', true)}
                            {renderSkillCell(6, '22', true)}
                            {renderSkillCell(7, '27', true)}
                            {renderSkillCell(8, '30', true)}
                            {renderSkillCell(9, '32', true)}
                            {renderSkillCell(10, '36', true)}
                            {renderSkillCell(11, '38', true)}
                            {renderSkillCell(12, '42', true)}
                            {renderSkillCell(13, '45', true)}
                            {renderSkillCell(14, '48', true)}
                            {renderSkillCell(15, '51', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>   
        </div>      
    );
}

export default WeightLiftingTable;