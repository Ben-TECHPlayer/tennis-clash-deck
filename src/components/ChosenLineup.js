import React, { useContext, useMemo, useState } from "react";
import { LevelContext } from "../context/LevelContext";
import { CARDS_DATA } from "../data/cardData";

export default function ChosenLineup() {
  const { savedLevels } = useContext(LevelContext);

  const [gameMode, setGameMode] = useState("grand-tour");
  const [levelCap, setLevelCap] = useState(15);
  const [selectedLineupIdx, setSelectedLineupIdx] = useState(0);
  const [tournamentLevel, setTournamentLevel] = useState("master");

  const [minStats, setMinStats] = useState({
    ag: "",
    st: "",
    se: "",
    vo: "",
    fo: "",
    ba: "",
  });

  const statLabels = [
    { label: "Agility", key: "ag" },
    { label: "Stamina", key: "st" },
    { label: "Serve", key: "se" },
    { label: "Volley", key: "vo" },
    { label: "Forehand", key: "fo" },
    { label: "Backhand", key: "ba" },
  ];

  const handleMinStatChange = (key, value) => {
    const v = value.replace(/[^0-9]/g, "");
    setMinStats((prev) => ({ ...prev, [key]: v }));
  };

  // ---------- Felix Halim logic ----------
  const computeStats = (stats, level) => {
    const i = Math.max(0, level - 1);
    const safe = (v) => (v === "-" || v == null ? 0 : Number(v));
    return {
      ag: safe(stats.agility?.[i]),
      st: safe(stats.stamina?.[i]),
      se: safe(stats.serve?.[i]),
      vo: safe(stats.volley?.[i]),
      fo: safe(stats.forehand?.[i]),
      ba: safe(stats.backhand?.[i]),
    };
  };

  const totalPower = (s) =>
    s.ag + s.st + s.se + s.vo + s.fo + s.ba;

  const getEffectiveLevel = (item) => {

    // 🔥 MODE TOURNAMENT → cap manuel
    if (gameMode === "tournament") {
        return Math.min(item.level, levelCap);
    }

    // 🔥 MODE REGULAR → AUTO
    if (gameMode === "regular") {

        if (item.category === "Character") {

            // Règle spéciale demandée :
            if (item.level >= 15) return 15;
            if (item.level === 14) return 14;

            // Sinon : +2
            return Math.min(item.level + 2, 15);
        }

        // Les équipements gardent leur niveau réel
        return item.level;
    }

    // 🔥 MODE GRAND TOUR → cap manuel
    if (gameMode === "grand-tour") {
        return Math.min(item.level, levelCap);
    }

    return item.level;
};


  const bestItems = useMemo(() => {
    if (!savedLevels || Object.keys(savedLevels).length === 0) return {};

    const cats = {
      Character: [],
      Racket: [],
      Grip: [],
      Shoe: [],
      Wristband: [],
      Nutrition: [],
      Workout: [],
    };

    Object.keys(savedLevels).forEach((path) => {
      const level = savedLevels[path];
      const data = CARDS_DATA[path];
      if (data && level > 0) {
        cats[data.type].push({
          id: path,
          name: data.name,
          category: data.type,
          level,
          stats: data.stats,
        });
      }
    });

    const result = {};

    Object.keys(cats).forEach((cat) => {
      const processed = cats[cat].map((item) => {
        const eff = getEffectiveLevel(item);
        const s = computeStats(item.stats, eff);
        return {
          ...item,
          effectiveLevel: eff,
          stats: s,
          totalPower: totalPower(s),
        };
      });

      processed.sort((a, b) => b.totalPower - a.totalPower);
      result[cat] = processed;
    });

    return result;
  }, [savedLevels, gameMode, levelCap]);

  const lineups = useMemo(() => {
    if (!bestItems.Character?.length) return [];

    const chars = bestItems.Character.slice(0, 10);
    const rackets = bestItems.Racket.slice(0, 10);
    const grips = bestItems.Grip.slice(0, 10);
    const shoes = bestItems.Shoe.slice(0, 5);
    const wrists = bestItems.Wristband.slice(0, 5);
    const nutritions = bestItems.Nutrition.slice(0, 5);
    const workouts = bestItems.Workout.slice(0, 5);

    const minAg = parseInt(minStats.ag || 0);
    const minSt = parseInt(minStats.st || 0);
    const minSe = parseInt(minStats.se || 0);
    const minVo = parseInt(minStats.vo || 0);
    const minFo = parseInt(minStats.fo || 0);
    const minBa = parseInt(minStats.ba || 0);

    const result = [];

    chars.forEach((c) => {
      rackets.forEach((r) => {
        grips.forEach((g) => {
          shoes.forEach((s) => {
            wrists.forEach((w) => {
              nutritions.forEach((n) => {
                workouts.forEach((wk) => {
                  const totals = {
                    ag: c.stats.ag + r.stats.ag + g.stats.ag + s.stats.ag + w.stats.ag + n.stats.ag + wk.stats.ag,
                    st: c.stats.st + r.stats.st + g.stats.st + s.stats.st + w.stats.st + n.stats.st + wk.stats.st,
                    se: c.stats.se + r.stats.se + g.stats.se + s.stats.se + w.stats.se + n.stats.se + wk.stats.se,
                    vo: c.stats.vo + r.stats.vo + g.stats.vo + s.stats.vo + w.stats.vo + n.stats.vo + wk.stats.vo,
                    fo: c.stats.fo + r.stats.fo + g.stats.fo + s.stats.fo + w.stats.fo + n.stats.fo + wk.stats.fo,
                    ba: c.stats.ba + r.stats.ba + g.stats.ba + s.stats.ba + w.stats.ba + n.stats.ba + wk.stats.ba,
                  };

                  if (
                    totals.ag >= minAg &&
                    totals.st >= minSt &&
                    totals.se >= minSe &&
                    totals.vo >= minVo &&
                    totals.fo >= minFo &&
                    totals.ba >= minBa
                  ) {
                    result.push({
                      items: {
                        Character: c,
                        Racket: r,
                        Grip: g,
                        Shoe: s,
                        Wristband: w,
                        Nutrition: n,
                        Workout: wk,
                      },
                      totals,
                      totalPower: totalPower(totals),
                    });
                  }
                });
              });
            });
          });
        });
      });
    });

    result.sort((a, b) => b.totalPower - a.totalPower);
    return result.slice(0, 200);
  }, [bestItems, minStats]);

  const dv = (v) => (v > 0 ? v : "-");

  if (!savedLevels || Object.keys(savedLevels).length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#888" }}>
        Please select items in the calculator above.
      </div>
    );
  }

  const selected = lineups[selectedLineupIdx];

  return (
    <div className="selected-choice-lineup" style={{ padding: "10px" }}>
      <h2 style={{textAlign: 'left'}}>Find your dream lineup</h2>

      {/* GAME MODE + LEVEL CAP */}
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{marginBottom: "-20px"}}>Game Mode</h3>
        <div className="choice-category-games-lineup">
            <button style={{ opacity: gameMode === "grand-tour" ? 1 : 0.6 }} onClick={() => setGameMode('grand-tour')}>Grand Tour</button>
            <button style={{ opacity: gameMode === "regular" ? 1 : 0.6 }} onClick={() => setGameMode('regular')}>Regular</button>
            <button style={{ opacity: gameMode === "tournament" ? 1 : 0.6 }} onClick={() => setGameMode('tournament')}>Tournaments</button>
        </div>

        {gameMode === "grand-tour" && (
            <div style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "1rem",
            }}>
                <span style={{ fontWeight: "bold" }}>Level Cap</span>

                <input
                    type="number"
                    min="1"
                    max="15"
                    value={levelCap}
                    onChange={(e) =>
                        setLevelCap(Math.min(15, Math.max(1, Number(e.target.value))))
                    }
                    style={{
                        width: "70px",
                        padding: "5px",
                        boxSizing: "border-box",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        textAlign: "center"
                    }}
                />
            </div>
        )}


        {gameMode === "tournament" && (
          <div className="choice-category-level-tournament-lineup" style={{ marginTop: "10px" }}>
            <button style={{opacity: tournamentLevel === "rookie" ? 1 : 0.6}} onClick={() => { setLevelCap(6); setTournamentLevel("rookie"); }}>Rookie (6)</button>
            <button style={{opacity: tournamentLevel === "junior" ? 1 : 0.6}} onClick={() => { setLevelCap(9); setTournamentLevel("junior"); }}>Junior (9)</button>
            <button style={{opacity: tournamentLevel === "challenger" ? 1 : 0.6}} onClick={() => { setLevelCap(12); setTournamentLevel("challenger"); }}>Challenger (12)</button>
            <button style={{opacity: tournamentLevel === "master" ? 1 : 0.6}} onClick={() => { setLevelCap(15); setTournamentLevel("master"); }}>Master (15)</button>
          </div>
        )}

        {gameMode === "regular" && (
          <p style={{ fontStyle: "italic" }}>Auto (Character Lvl + 2)</p>
        )}
      </div>

        {/* TABLEAU DES LINEUPS */}
        {lineups.length === 0 && (
        <div style={{padding:'20px', color:'red', border:'1px solid red', margin:'10px 0'}}>
            No lineup matches your minimum stat requirements. Try lowering the filters.
        </div>
    )}

    <div className="best-lineup-grid-container" style={{overflowX: 'auto', marginBottom:'20px'}}>
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
                            <input
                                type="number"
                                min="0"
                                max="200"
                                value={minStats[key]}
                                onChange={(e) => handleMinStatChange(key, e.target.value)}
                                style={{
                                    width:'60px',
                                    padding:'4px',
                                    border:'1px solid #ccc',
                                    borderRadius:'3px',
                                    backgroundColor: minStats[key] ? '#e3f2fd' : 'white',
                                    fontWeight: minStats[key] ? 'bold' : 'normal'
                                }}
                            />

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


      {/* SELECTED LINEUP */}
      <div className='chosen-lineup-scrollable'>
        {selected ? (
            <table className='chosen-lineup'>
                <caption>
                    Lineup selected #{selectedLineupIdx + 1}
                    {/* <span style={{fontSize:'0.8em', fontWeight:'normal', marginLeft:'10px'}}>
                        (Power: {selected.totalPower})
                    </span> */}
                </caption>

                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Selected Item Name</th>
                        <th>Ag</th><th>St</th><th>Se</th><th>Vo</th><th>Fo</th><th>Ba</th>
                    </tr>
                </thead>

                <tbody>
                    {['Character','Racket','Grip','Shoe','Wristband','Nutrition','Workout'].map(cat => {
                        const item = selected.items?.[cat] || { name: "-", level: 0, stats: {} };
                        const s = item.stats || { ag:0, st:0, se:0, vo:0, fo:0, ba:0 };

                        const effectiveLevel = (levelCap && item.level > levelCap) ? levelCap : item.level;
                        
                        return (
                            <tr key={cat}>
                                <td>{cat}</td>
                                <td>
                                    {item.name !== "-" ? (
                                        <>
                                            <strong>{item.name}</strong>
                                            <span style={{color:'#666', fontSize:'0.9em', marginLeft:'5px'}}>
                                                (Lvl {effectiveLevel})
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

                {selected && (
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Total Power({selected.totalPower}):</th>
                            <th>{selected.totals.ag}</th>
                            <th>{selected.totals.st}</th>
                            <th>{selected.totals.se}</th>
                            <th>{selected.totals.vo}</th>
                            <th>{selected.totals.fo}</th>
                            <th>{selected.totals.ba}</th>
                        </tr>
                    </tfoot>
                )}
            </table>
        ) : (
            <div style={{padding:'20px', textAlign:'center', color:'#666'}}>
                No lineup selected.
            </div>
        )}
    </div>

    </div>
  );
}