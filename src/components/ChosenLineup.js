import React, { useContext, useState, useMemo, useEffect } from 'react';
import { LevelContext } from '../context/LevelContext'; 
import { CARDS_DATA } from '../data/cardData'; 

function ChosenLineup() {
    const { savedLevels } = useContext(LevelContext);
    
    // --- ÉTATS ---
    const [gameMode, setGameMode] = useState("grand-tour"); // 'grand-tour', 'regular', 'tournament'
    const [levelCap, setLevelCap] = useState(15); 
    const [selectedLineupIdx, setSelectedLineupIdx] = useState(0); 

    // État pour les filtres "Min Stats"
    const [minStats, setMinStats] = useState({
        ag: 0, st: 0, se: 0, vo: 0, fo: 0, ba: 0
    });

    // --- EFFETS ---
    // Reset des paramètres quand on change de mode
    useEffect(() => {
        if (gameMode === 'tournament') setLevelCap(9); // Junior par défaut
        if (gameMode === 'grand-tour') setLevelCap(15);
        // On remet le cap "Auto" pour Regular implicitement via la logique de calcul
        setSelectedLineupIdx(0);
    }, [gameMode]);

    // Gestion du changement de filtre stat
    const handleMinStatChange = (key, value) => {
        const val = parseInt(value, 10);
        setMinStats(prev => ({ ...prev, [key]: val }));
        setSelectedLineupIdx(0); // Important : reset l'index pour éviter les crashs
    };

    // --- CŒUR DU CALCUL (useMemo) ---
    const lineups = useMemo(() => {
        if (!savedLevels || Object.keys(savedLevels).length === 0) return [];

        // 1. Regrouper les items par catégorie
        const itemsByCategory = {
            Character: [], Racket: [], Grip: [], Shoe: [], 
            Wristband: [], Nutrition: [], Workout: []
        };

        Object.keys(savedLevels).forEach(path => {
            const trueLevel = savedLevels[path];
            const data = CARDS_DATA[path];
            
            if (data && trueLevel > 0) {
                const itemObj = {
                    id: path, 
                    name: data.name, 
                    category: data.type, 
                    trueLevel: trueLevel, 
                    rawStats: data.stats 
                };
                if (itemsByCategory[data.type]) {
                    itemsByCategory[data.type].push(itemObj);
                }
            }
        });

        // 2. Combler les catégories vides
        const categories = Object.keys(itemsByCategory);
        categories.forEach(cat => {
            if (itemsByCategory[cat].length === 0) {
                itemsByCategory[cat].push({ name: "-", category: cat, trueLevel: 0, rawStats: {} });
            }
        });

        // 3. Générer toutes les combinaisons (Récursif)
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

        const rawLineups = generateCombinations(0, {});

        // 4. Calculer les Stats + Appliquer les Caps + Calculer le Total
        let processedLineups = rawLineups.map((lineupItems, index) => {
            
            // Définition du Cap pour ce lineup spécifique
            let currentCap = levelCap;
            if (gameMode === 'regular') {
                const char = lineupItems['Character'];
                const charLevel = (char && char.trueLevel) ? char.trueLevel : 0;
                currentCap = charLevel > 0 ? charLevel + 2 : 15; 
            }

            const totalStats = { ag:0, st:0, se:0, vo:0, fo:0, ba:0 };
            const calculatedItems = {}; 

            // Somme des stats
            Object.keys(lineupItems).forEach(cat => {
                const item = lineupItems[cat];
                // Si l'item existe, on applique le Cap (min entre niveau réel et cap)
                const effectiveLevel = item.trueLevel > 0 ? Math.min(item.trueLevel, currentCap) : 0;
                
                // Récupération sécurisée des stats (si tableau vide ou undefined -> 0)
                const stats = {
                    ag: (item.rawStats.agility?.[effectiveLevel-1]) || 0,
                    st: (item.rawStats.stamina?.[effectiveLevel-1]) || 0,
                    se: (item.rawStats.serve?.[effectiveLevel-1]) || 0,
                    vo: (item.rawStats.volley?.[effectiveLevel-1]) || 0,
                    fo: (item.rawStats.forehand?.[effectiveLevel-1]) || 0,
                    ba: (item.rawStats.backhand?.[effectiveLevel-1]) || 0,
                };

                // Ajout au total
                totalStats.ag += stats.ag;
                totalStats.st += stats.st;
                totalStats.se += stats.se;
                totalStats.vo += stats.vo;
                totalStats.fo += stats.fo;
                totalStats.ba += stats.ba;

                calculatedItems[cat] = { ...item, level: effectiveLevel, stats: stats };
            });

            const totalPower = Object.values(totalStats).reduce((a, b) => a + b, 0);
            
            return { 
                id: index + 1, 
                items: calculatedItems, 
                totals: totalStats, 
                totalPower 
            };
        });

        // 5. FILTRAGE (C'est ici que tes <select> agissent)
        processedLineups = processedLineups.filter(l => {
            return (
                l.totals.ag >= minStats.ag &&
                l.totals.st >= minStats.st &&
                l.totals.se >= minStats.se &&
                l.totals.vo >= minStats.vo &&
                l.totals.fo >= minStats.fo &&
                l.totals.ba >= minStats.ba
            );
        });

        // 6. Tri par puissance décroissante
        return processedLineups.sort((a, b) => b.totalPower - a.totalPower);

    }, [savedLevels, levelCap, gameMode, minStats]); // Recalcule si minStats change

    // --- PRÉPARATION DU RENDU ---
    const activeLineup = lineups[selectedLineupIdx] || (lineups.length > 0 ? lineups[0] : null);
    
    // Labels pour la boucle d'affichage
    const statLabels = [
        { label: 'Agility', key: 'ag' }, { label: 'Stamina', key: 'st' },
        { label: 'Serve', key: 'se' }, { label: 'Volley', key: 'vo' },
        { label: 'Forehand', key: 'fo' }, { label: 'Backhand', key: 'ba' }
    ];

    // Helper pour afficher "-" si 0
    const dv = (val) => val > 0 ? val : "-";

    // --- RENDER DU CAP SELECTOR ---
    const renderCapSelector = () => {
        if (gameMode === 'regular') return <span style={{fontStyle:'italic', color:'#666'}}>Auto (Character Level + 2)</span>;
        
        // Options pour Tournament ou Grand Tour
        const options = gameMode === 'tournament' 
            ? [ {v:6, l:'Rookie (6)'}, {v:9, l:'Junior (9)'}, {v:12, l:'Challenger (12)'}, {v:15, l:'Master (15)'} ]
            : [...Array(15)].map((_, i) => ({v: i+1, l: i+1}));

        return (
            <select 
                value={levelCap} 
                onChange={(e) => setLevelCap(parseInt(e.target.value))}
                style={{padding:'5px', fontSize:'1rem'}}
            >
                {options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
            </select>
        );
    };

    return (
        <div className="selected-choice-lineup">
            <h2 style={{textAlign: 'left'}}>Find your dream lineup</h2>

            {/* BOUTONS MODE */}
            <div className="choice-category-games-lineup">
                <button style={{ opacity: gameMode === "grand-tour" ? 1 : 0.6 }} onClick={() => setGameMode('grand-tour')}>Grand Tour</button>
                <button style={{ opacity: gameMode === "regular" ? 1 : 0.6 }} onClick={() => setGameMode('regular')}>Regular</button>
                <button style={{ opacity: gameMode === "tournament" ? 1 : 0.6 }} onClick={() => setGameMode('tournament')}>Tournaments</button>
            </div>

            {/* SÉLECTEUR CAP */}
            <div style={{ marginBottom: '15px', display:'flex', alignItems:'center', gap:'10px' }}>
                <label style={{fontWeight:'bold'}}>Set Level Cap : </label>
                {renderCapSelector()}
            </div>

            {/* MESSAGE SI VIDE (Pas de cartes ou tout filtré) */}
            {(!savedLevels || Object.keys(savedLevels).length === 0) && (
                <div style={{padding:'20px', fontStyle:'italic'}}>Please select cards in the calculator above first.</div>
            )}

            {/* GRILLE PRINCIPALE */}
            {Object.keys(savedLevels || {}).length > 0 && (
                <>
                    {lineups.length === 0 ? (
                        <div style={{padding:'20px', color:'red', border:'1px solid red', margin:'10px 0'}}>
                            No lineup matches your minimum stat requirements. Try lowering the filters.
                        </div>
                    ) : (
                        <div className="best-lineup-grid-container" style={{overflowX: 'auto', marginBottom: '20px'}}>
                            <table className="best-lineup-table">
                                <thead>
                                    <tr>
                                        {/* Header Filtres */}
                                        <th style={{textAlign:'left', paddingLeft:'10px', backgroundColor:'#999', minWidth:'100px'}}>Stat</th>
                                        <th style={{textAlign:'center', backgroundColor:'#999', minWidth:'100px'}}>Min Filter</th>
                                        
                                        {/* Header Colonnes Résultats */}
                                        {lineups.map((l, idx) => (
                                            <th key={idx} 
                                                onClick={() => setSelectedLineupIdx(idx)} 
                                                className={selectedLineupIdx === idx ? "col-selected" : "clickable"} 
                                                style={{cursor: 'pointer', minWidth: '40px'}}
                                            >
                                                #{idx + 1}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* BOUCLE SUR LES STATS (Agility, Stamina...) */}
                                    {statLabels.map(({label, key}) => (
                                        <tr key={key}>
                                            {/* Nom Stat */}
                                            <td style={{textAlign:'left', fontWeight:'bold', color:'blue', backgroundColor:'#fff', paddingLeft:'10px'}}>
                                                {label}
                                            </td>
                                            
                                            {/* Sélecteur MIN (1 à 100) */}
                                            <td style={{backgroundColor:'#fff'}}>
                                                <select 
                                                    value={minStats[key]}
                                                    onChange={(e) => handleMinStatChange(key, e.target.value)}
                                                    style={{
                                                        width:'100%', 
                                                        border:'1px solid #ccc', 
                                                        borderRadius:'3px', 
                                                        padding:'4px',
                                                        backgroundColor: minStats[key] > 0 ? '#e3f2fd' : '#fff', // Visuel actif
                                                        fontWeight: minStats[key] > 0 ? 'bold' : 'normal'
                                                    }}
                                                >
                                                    <option value={0}>Any</option>
                                                    {Array.from({length: 100}, (_, i) => i + 1).map(val => (
                                                        <option key={val} value={val}>min {val}</option>
                                                    ))}
                                                </select>
                                            </td>

                                            {/* Valeurs des lineups */}
                                            {lineups.map((l, idx) => (
                                                <td key={idx} 
                                                    onClick={() => setSelectedLineupIdx(idx)} 
                                                    className={selectedLineupIdx === idx ? "col-selected" : "clickable"} 
                                                    style={{
                                                        cursor: 'pointer',
                                                        // Vert si correspond au filtre actif
                                                        color: (minStats[key] > 0 && l.totals[key] >= minStats[key]) ? '#2e7d32' : 'inherit',
                                                        fontWeight: (selectedLineupIdx === idx) ? 'bold' : 'normal'
                                                    }}
                                                >
                                                    {l.totals[key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}

                                    {/* TOTAL POWER */}
                                    <tr className="row-total-power">
                                        <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Total Power (Desc):</td>
                                        {lineups.map((l, idx) => (
                                            <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{fontWeight:'bold', cursor:'pointer'}}>
                                                {l.totalPower}
                                            </td>
                                        ))}
                                    </tr>

                                    {/* NOM DU PERSONNAGE */}
                                    <tr style={{backgroundColor: '#666', color: 'white'}}>
                                        <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Character:</td>
                                        {lineups.map((l, idx) => {
                                            const char = l.items.Character;
                                            const charName = (char && char.name !== "-") ? char.name : "-";
                                            return (
                                                <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{cursor: 'pointer', fontSize:'0.8rem'}}>
                                                    {charName}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

            {/* DÉTAILS DU LINEUP SÉLECTIONNÉ */}
            {activeLineup && (
                <div className='chosen-lineup-scrollable'>
                    <table className='chosen-lineup'>
                        <caption>
                            Lineup selected #{selectedLineupIdx + 1} 
                            <span style={{fontSize:'0.8em', fontWeight:'normal', marginLeft:'10px'}}>
                                (Power: {activeLineup.totalPower})
                            </span>
                        </caption>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Selected Item Name</th>
                                <th>Ag</th><th>St</th><th>Se</th><th>Vo</th><th>Fo</th><th>Ba</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['Character', 'Racket', 'Grip', 'Shoe', 'Wristband', 'Nutrition', 'Workout'].map(cat => {
                                const item = activeLineup.items[cat] || { name: "-", level: 0, stats: {} };
                                const s = item.stats || { ag:0, st:0, se:0, vo:0, fo:0, ba:0 };
                                return (
                                    <tr key={cat}>
                                        <td>{cat}</td>
                                        <td>
                                            {item.name !== "-" ? (
                                                <>
                                                    <strong>{item.name}</strong> 
                                                    <span style={{color:'#666', fontSize:'0.9em', marginLeft:'5px'}}>
                                                        (Lvl {item.level})
                                                    </span>
                                                </>
                                            ) : "-"}
                                        </td>
                                        <td>{dv(s.ag)}</td><td>{dv(s.st)}</td><td>{dv(s.se)}</td>
                                        <td>{dv(s.vo)}</td><td>{dv(s.fo)}</td><td>{dv(s.ba)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={2}>Totals:</th>
                                <th>{activeLineup.totals.ag}</th><th>{activeLineup.totals.st}</th><th>{activeLineup.totals.se}</th>
                                <th>{activeLineup.totals.vo}</th><th>{activeLineup.totals.fo}</th><th>{activeLineup.totals.ba}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ChosenLineup;