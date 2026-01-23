import React, { useContext, useState, useMemo, useEffect } from 'react';
import { LevelContext } from '../context/LevelContext'; 
import { CARDS_DATA } from '../data/cardData'; 

function ChosenLineup() {
    const { savedLevels } = useContext(LevelContext);
    
    // États
    const [gameMode, setGameMode] = useState("grand-tour"); 
    const [levelCap, setLevelCap] = useState(15); 
    const [selectedLineupIdx, setSelectedLineupIdx] = useState(0); 

    // PETITE ASTUCE : Quand on change de mode, on met une valeur par défaut cohérente
    useEffect(() => {
        if (gameMode === 'tournament') setLevelCap(9); // Junior par défaut
        if (gameMode === 'grand-tour') setLevelCap(15);
    }, [gameMode]);

    // --- ALGORITHME DE CALCUL ---
    const lineups = useMemo(() => {
        if (!savedLevels) return [];

        // 1. Récupération des items
        const itemsByCategory = {
            Character: [], Racket: [], Grip: [], Shoe: [], 
            Wristband: [], Nutrition: [], Workout: []
        };

        Object.keys(savedLevels).forEach(path => {
            const trueLevel = savedLevels[path];
            const data = CARDS_DATA[path];
            
            if (data && trueLevel > 0) {
                const itemObj = {
                    id: path, name: data.name, category: data.type, 
                    trueLevel: trueLevel, rawStats: data.stats 
                };
                if (itemsByCategory[data.type]) itemsByCategory[data.type].push(itemObj);
            }
        });

        // 2. Combler les trous
        const categories = Object.keys(itemsByCategory);
        categories.forEach(cat => {
            if (itemsByCategory[cat].length === 0) {
                itemsByCategory[cat].push({ name: "-", category: cat, trueLevel: 0, rawStats: {} });
            }
        });

        // 3. Combinaisons
        const generateCombinations = (catsIndex, currentBuild) => {
            if (catsIndex === categories.length) return [currentBuild];
            const category = categories[catsIndex];
            const items = itemsByCategory[category];
            let results = [];
            items.forEach(item => {
                const nextBuilds = generateCombinations(catsIndex + 1, { ...currentBuild, [category]: item });
                results = results.concat(nextBuilds);
            });
            return results;
        };

        let allLineups = generateCombinations(0, {});

        // 4. Calcul des Stats avec Règles de Cap
        allLineups = allLineups.map((lineupItems, index) => {
            
            // DÉTERMINATION DU CAP
            let currentCap = 15; 

            if (gameMode === 'regular') {
                const char = lineupItems['Character'];
                const charLevel = (char && char.trueLevel) ? char.trueLevel : 0;
                currentCap = charLevel > 0 ? charLevel + 2 : 15; 
            } else {
                // Pour Grand Tour ET Tournaments, on utilise la valeur fixée par le select (levelCap)
                currentCap = levelCap;
            }

            // APPLICATION DU CAP
            const calculatedItems = {}; 
            const totalStats = { ag:0, st:0, se:0, vo:0, fo:0, ba:0 };

            Object.keys(lineupItems).forEach(cat => {
                const item = lineupItems[cat];
                const effectiveLevel = item.trueLevel > 0 ? Math.min(item.trueLevel, currentCap) : 0;
                
                const stats = {
                    ag: (item.rawStats.agility && item.rawStats.agility[effectiveLevel-1]) || 0,
                    st: (item.rawStats.stamina && item.rawStats.stamina[effectiveLevel-1]) || 0,
                    se: (item.rawStats.serve && item.rawStats.serve[effectiveLevel-1]) || 0,
                    vo: (item.rawStats.volley && item.rawStats.volley[effectiveLevel-1]) || 0,
                    fo: (item.rawStats.forehand && item.rawStats.forehand[effectiveLevel-1]) || 0,
                    ba: (item.rawStats.backhand && item.rawStats.backhand[effectiveLevel-1]) || 0,
                };

                totalStats.ag += stats.ag;
                totalStats.st += stats.st;
                totalStats.se += stats.se;
                totalStats.vo += stats.vo;
                totalStats.fo += stats.fo;
                totalStats.ba += stats.ba;

                calculatedItems[cat] = { ...item, level: effectiveLevel, stats: stats };
            });

            const totalPower = Object.values(totalStats).reduce((a, b) => a + b, 0);
            return { id: index + 1, items: calculatedItems, totals: totalStats, totalPower };
        });

        return allLineups.sort((a, b) => b.totalPower - a.totalPower);

    }, [savedLevels, levelCap, gameMode]);

    // --- RENDU ---
    const emptyLineup = { items: {}, totals: { ag:0, st:0, se:0, vo:0, fo:0, ba:0 }, totalPower: 0 };
    const activeLineup = lineups[selectedLineupIdx] || (lineups.length > 0 ? lineups[0] : emptyLineup);
    const dv = (val) => val > 0 ? val : "-";
    const getItem = (cat) => activeLineup.items[cat] || { name: "-", level: 0, stats: {} };
    const statLabels = [
        { label: 'Agility', key: 'ag' }, { label: 'Stamina', key: 'st' },
        { label: 'Serve', key: 'se' }, { label: 'Volley', key: 'vo' },
        { label: 'Forehand', key: 'fo' }, { label: 'Backhand', key: 'ba' }
    ];

    // CONTENU DU MENU DÉROULANT SELON LE MODE
    const renderCapSelector = () => {
        if (gameMode === 'regular') {
            return <span style={{fontStyle:'italic', color:'#666'}}>Auto (Character Level + 2)</span>;
        }

        if (gameMode === 'tournament') {
            return (
                <select 
                    value={levelCap} 
                    onChange={(e) => setLevelCap(parseInt(e.target.value))}
                    style={{padding:'5px', fontSize:'1rem'}}
                >
                    <option value={6}>Rookie (Level 6)</option>
                    <option value={9}>Junior (Level 9)</option>
                    <option value={12}>Challenger (Level 12)</option>
                    <option value={15}>Master (Level 15)</option>
                </select>
            );
        }

        // Par défaut (Grand Tour)
        return (
            <select 
                value={levelCap} 
                onChange={(e) => setLevelCap(parseInt(e.target.value))}
                style={{padding:'5px', fontSize:'1rem'}}
            >
                {[...Array(15)].map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                ))}
            </select>
        );
    };

    return(
        <div className="selected-choice-lineup">
            <h2 style={{textAlign: 'left'}}>Find your dream lineup</h2>

            {/* Boutons de Mode */}
            <div className="choice-category-games-lineup">
                <button style={{ opacity: gameMode === "grand-tour" ? 1 : 0.6 }} onClick={() => setGameMode('grand-tour')}>Grand Tour</button>
                <button style={{ opacity: gameMode === "regular" ? 1 : 0.6 }} onClick={() => setGameMode('regular')}>Regular</button>
                <button style={{ opacity: gameMode === "tournament" ? 1 : 0.6 }} onClick={() => setGameMode('tournament')}>Tournaments</button>
            </div>

            {/* Sélecteur de Cap Dynamique */}
            <div style={{ marginBottom: '15px', display:'flex', alignItems:'center', gap:'10px' }}>
                <label style={{fontWeight:'bold'}}>Set Level Cap : </label>
                {renderCapSelector()}
            </div>

            {/* GRILLE (Choices) */}
            {lineups.length > 0 && (
                <div className="best-lineup-grid-container" style={{overflowX: 'auto', marginBottom: '20px'}}>
                    <table className="best-lineup-table">
                        <thead>
                            <tr>
                                <th colSpan={2} style={{textAlign:'left', paddingLeft:'10px', backgroundColor:'#999'}}>Set Preferred Power</th>
                                {lineups.map((l, idx) => (
                                    <th key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{cursor: 'pointer', minWidth: '40px'}}>
                                        #{idx + 1}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {statLabels.map(({label, key}) => (
                                <tr key={key}>
                                    <td style={{textAlign:'left', fontWeight:'bold', color:'blue', backgroundColor:'#fff'}}>{label}</td>
                                    <td style={{backgroundColor:'#fff'}}>
                                        <select style={{border:'1px solid #ccc', borderRadius:'3px', padding:'2px'}}>
                                            <option>min 1</option>
                                        </select>
                                    </td>
                                    {lineups.map((l, idx) => (
                                        <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{cursor: 'pointer'}}>
                                            {l.totals[key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr className="row-total-power">
                                <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Total Power (Desc):</td>
                                {lineups.map((l, idx) => (
                                    <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{fontWeight:'bold', cursor:'pointer'}}>
                                        {l.totalPower}
                                    </td>
                                ))}
                            </tr>
                            <tr style={{backgroundColor: '#666', color: 'white'}}>
                                <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Character:</td>
                                {lineups.map((l, idx) => {
                                    const char = l.items.Character;
                                    const charName = (char && char.name !== "-") ? char.name : "-";
                                    return (
                                        <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{cursor: 'pointer'}}>
                                            {charName !== "-" ? charName.substring(0, 2) : "-"}
                                        </td>
                                    );
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* DÉTAILS (Lineup Selected) */}
            <table className='chosen-lineup'>
                <caption>Lineup selected {lineups.length > 0 ? `#${selectedLineupIdx + 1}` : ""}</caption>
                <thead>
                    <tr>
                        <th>Category</th><th>Selected Item Name</th><th>Ag</th><th>St</th><th>Se</th><th>Vo</th><th>Fo</th><th>Ba</th>
                    </tr>
                </thead>
                <tbody>
                    {['Character', 'Racket', 'Grip', 'Shoe', 'Wristband', 'Nutrition', 'Workout'].map(cat => {
                        const item = getItem(cat);
                        const s = item.stats || { ag:0, st:0, se:0, vo:0, fo:0, ba:0 };
                        return (
                            <tr key={cat}>
                                <td>{cat}</td>
                                <td>{item.name !== "-" ? <strong>{item.name} ({item.level})</strong> : ""}</td>
                                <td>{dv(s.ag)}</td><td>{dv(s.st)}</td><td>{dv(s.se)}</td>
                                <td>{dv(s.vo)}</td><td>{dv(s.fo)}</td><td>{dv(s.ba)}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2}>Total Power ({activeLineup.totalPower}):</th>
                        <th>{activeLineup.totals.ag}</th><th>{activeLineup.totals.st}</th><th>{activeLineup.totals.se}</th>
                        <th>{activeLineup.totals.vo}</th><th>{activeLineup.totals.fo}</th><th>{activeLineup.totals.ba}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ChosenLineup;