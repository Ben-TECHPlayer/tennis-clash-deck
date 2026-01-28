import React, { useState, useContext } from 'react';
import { LevelContext } from '../context/LevelContext';

function SelectCard({ setSelectedCardTable, selectedCardTable }){
    const [selectedCategory, setSelectedCategory] = useState("character"); 
    const [selectedCharacterType, setSelectedCharacterType] = useState("legends");

    // 1. ON RECUPERE LA MÉMOIRE (savedLevels), pas le currentLevel
    const { savedLevels } = useContext(LevelContext);

    // 2. FONCTION CORRIGÉE
    const displayName = (name, path) => {
        // On vérifie si un niveau existe dans la mémoire pour cet ID spécifique
        // On utilise ?. pour éviter le crash si savedLevels est vide au début
        const saved = savedLevels ? savedLevels[path] : null;
        
        if (saved) {
            // Si trouvé, on l'affiche (ex: "Natural Energy (7)")
            return `${name} (${saved})`;
        }
        return name;
    };

    return(
        <div className="cards-container" style={{marginTop: "2rem"}}>
            <div className="cards-name">
                <button onClick={() => { setSelectedCategory("character"); setSelectedCharacterType("legends"); }} style={{ opacity: selectedCategory === "character" ? 1 : 0.6 }}>Character</button>
                <button onClick={() => setSelectedCategory("racket")} style={{ opacity: selectedCategory === "racket" ? 1 : 0.6 }}>Racket</button>
                <button onClick={() => setSelectedCategory("grip")} style={{ opacity: selectedCategory === "grip" ? 1 : 0.6 }}>Grip</button>
                <button onClick={() => setSelectedCategory("shoe")} style={{ opacity: selectedCategory === "shoe" ? 1 : 0.6 }}>Shoe</button>
                <button onClick={() => setSelectedCategory("wristband")} style={{ opacity: selectedCategory === "wristband" ? 1 : 0.6 }}>Wristband</button>
                <button onClick={() => setSelectedCategory("nutrition")} style={{ opacity: selectedCategory === "nutrition" ? 1 : 0.6 }}>Nutrition</button>
                <button onClick={() => setSelectedCategory("workout")} style={{ opacity: selectedCategory === "workout" ? 1 : 0.6 }}>Workout</button>
            </div>
            {selectedCategory === "character" && (
            <div className="cards-character">
                <h2>Characters</h2>
                <div className="cards-character-category">
                    <button onClick={() => setSelectedCharacterType("legends")} style={{ opacity: selectedCharacterType === "legends" ? 1 : 0.6 }}>Legends</button>
                    <button onClick={() => setSelectedCharacterType("champions")} style={{ opacity: selectedCharacterType === "champions" ? 1 : 0.6 }}>Champions</button>
                </div>
                {selectedCategory === "character" && selectedCharacterType === "legends" && (
                <div className="cards-character-legends">
                    <div onClick={() => setSelectedCardTable("osaka-table", "players/legends/database/Osaka")} 
                        style={{ 
                            color: selectedCardTable === "osaka-table" ? '#007bff' : 'black'
                        }}
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/osaka.svg`} alt="Naomi Osaka" />
                        <p>{displayName("Naomi Osaka", "players/legends/database/Osaka")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("sabalenka-table", "players/legends/database/Sabalenka")}
                        style={{ 
                            color: selectedCardTable === "sabalenka-table" ? '#007bff' : 'black'
                        }}    
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/sabalenka.svg`} alt="Aryna Sabalenka" />
                        <p>{displayName("Aryna Sabalenka", "players/legends/database/Sabalenka")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("paul-table", "players/legends/database/Paul")}
                        style={{ 
                            color: selectedCardTable === "paul-table" ? '#007bff' : 'black'
                        }}     
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/paul.svg`} alt="Tommy Paul" />
                        <p>{displayName("Tommy Paul", "players/legends/database/Paul")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("paolini-table", "players/legends/database/Paolini")}
                        style={{ 
                            color: selectedCardTable === "paolini-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/paolini.svg`} alt="Jasmine Paolini" />
                        <p>{displayName("Jasmine Paolini", "players/legends/database/Paolini")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("kyrgios-table", "players/legends/database/Kyrgios")}
                        style={{ 
                            color: selectedCardTable === "kyrgios-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/kyrgios.svg`} alt="Nick Kyrgios" />
                        <p>{displayName("Nick Kyrgios", "players/legends/database/Kyrgios")}</p>
                    </div>
                </div>
                )}
                {selectedCategory === "character" && selectedCharacterType === "champions" && (
                <div className="cards-character-champions">
                    <div onClick={() => setSelectedCardTable("jonah-table", "players/champions/database/Jonah")}
                        style={{ 
                            color: selectedCardTable === "jonah-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/jonah.svg`} alt="Jonah" />
                        <p>{displayName("Jonah", "players/champions/database/Jonah")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("hope-table", "players/champions/database/Hope")}
                        style={{ 
                            color: selectedCardTable === "hope-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/hope.svg`} alt="Hope" />
                        <p>{displayName("Hope", "players/champions/database/Hope")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("florence-table", "players/champions/database/Florence")}
                        style={{ 
                            color: selectedCardTable === "florence-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/florence.svg`} alt="Florence" />
                        <p>{displayName("Florence", "players/champions/database/Florence")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("leo-table", "players/champions/database/Leo")}
                        style={{ 
                            color: selectedCardTable === "leo-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/leo.svg`} alt="Leo" />
                        <p>{displayName("Leo", "players/champions/database/Leo")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("kaito-table", "players/champions/database/Kaito")}
                        style={{ 
                            color: selectedCardTable === "kaito-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/kaito.svg`} alt="Kaito" />
                        <p>{displayName("Kaito", "players/champions/database/Kaito")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("viktoria-table", "players/champions/database/Viktoria")}
                        style={{ 
                            color: selectedCardTable === "viktoria-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/viktoria.svg`} alt="Viktoria" />
                        <p>{displayName("Viktoria", "players/champions/database/Viktoria")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("diana-table", "players/champions/database/Diana")}
                        style={{ 
                            color: selectedCardTable === "diana-table" ? '#007bff' : 'black'
                        }}
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/diana.svg`} alt="Diana" />
                        <p>{displayName("Diana", "players/champions/database/Diana")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("omar-table", "players/champions/database/Omar")}
                        style={{ 
                            color: selectedCardTable === "omar-table" ? '#007bff' : 'black'
                        }}
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/omar.svg`} alt="Omar" />
                        <p>{displayName("Omar", "players/champions/database/Omar")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("anton-table", "players/champions/database/Anton")}
                        style={{ 
                            color: selectedCardTable === "anton-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/anton.svg`} alt="Anton" />
                        <p>{displayName("Anton", "players/champions/database/Anton")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("ingrid-table", "players/champions/database/Ingrid")}
                        style={{ 
                            color: selectedCardTable === "ingrid-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/ingrid.svg`} alt="Ingrid" />
                        <p>{displayName("Ingrid", "players/champions/database/Ingrid")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("diego-table", "players/champions/database/Diego")}
                        style={{ 
                            color: selectedCardTable === "diego-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/diego.svg`} alt="Diego" />
                        <p>{displayName("Diego", "players/champions/database/Diego")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("hyunjun-table", "players/champions/database/HyunJun")}
                        style={{ 
                            color: selectedCardTable === "hyunjun-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/hyun-jun.svg`} alt="Hyun-Jun" />
                        <p>{displayName("Hyun-Jun", "players/champions/database/HyunJun")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("mark-table", "players/champions/database/Mark")}
                        style={{ 
                            color: selectedCardTable === "mark-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/mark.svg`} alt="Mark" />
                        <p>{displayName("Mark", "players/champions/database/Mark")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("abeke-table", "players/champions/database/Abeke")}
                        style={{ 
                            color: selectedCardTable === "abeke-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/abeke.svg`} alt="Abeke" />
                        <p>{displayName("Abeke", "players/champions/database/Abeke")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("meili-table", "players/champions/database/MeiLi")}
                        style={{ 
                            color: selectedCardTable === "meili-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/mei-li.svg`} alt="Mei-Li" />
                        <p>{displayName("Mei-Li", "players/champions/database/MeiLi")}</p>
                    </div>
                    <div onClick={() => setSelectedCardTable("luc-table", "players/champions/database/Luc")}
                        style={{ 
                            color: selectedCardTable === "luc-table" ? '#007bff' : 'black'
                        }}   
                    >
                        <img src={`${process.env.PUBLIC_URL}/assets/luc.svg`} alt="Luc" />
                        <p>{displayName("Luc", "players/champions/database/Luc")}</p>
                    </div>
                </div>
                )}
            </div>
            )}
            {selectedCategory === "racket" && (
            <div className="cards-racket">
                <div onClick={() => setSelectedCardTable("starter-racket-table", "attributes/racket/database/StarterRacket")}
                    style={{ 
                        color: selectedCardTable === "starter-racket-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/starter-racket.svg`} alt="Starter Racket" />
                    <p>{displayName("Starter Racket", "attributes/racket/database/StarterRacket")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("eagle-table", "attributes/racket/database/Eagle")}
                    style={{ 
                        color: selectedCardTable === "eagle-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-eagle.svg`} alt="The Eagle" />
                    <p>{displayName("The Eagle", "attributes/racket/database/Eagle")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("patriot-table", "attributes/racket/database/Patriot")}
                    style={{ 
                        color: selectedCardTable === "patriot-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-patriot.svg`} alt="The Patriot" />
                    <p>{displayName("The Patriot", "attributes/racket/database/Patriot")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("outback-table", "attributes/racket/database/Outback")}
                    style={{ 
                        color: selectedCardTable === "outback-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-outback.svg`} alt="The Outback" />
                    <p>{displayName("The Outback", "attributes/racket/database/Outback")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("panther-table", "attributes/racket/database/Panther")}
                    style={{ 
                        color: selectedCardTable === "panther-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-panther.svg`} alt="The Panther" />
                    <p>{displayName("The Panther", "attributes/racket/database/Panther")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("samurai-table", "attributes/racket/database/Samurai")}
                    style={{ 
                        color: selectedCardTable === "samurai-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-samurai.svg`} alt="The Samurai" />
                    <p>{displayName("The Samurai", "attributes/racket/database/Samurai")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("hammer-table", "attributes/racket/database/Hammer")}
                    style={{ 
                        color: selectedCardTable === "hammer-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-hammer.svg`} alt="The Hammer" />
                    <p>{displayName("The Hammer", "attributes/racket/database/Hammer")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("bullseye-table", "attributes/racket/database/Bullseye")}
                    style={{ 
                        color: selectedCardTable === "bullseye-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-bullseye.svg`} alt="The Bullseye" />
                    <p>{displayName("The Bullseye", "attributes/racket/database/Bullseye")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("zeus-table", "attributes/racket/database/Zeus")}
                    style={{ 
                        color: selectedCardTable === "zeus-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/zeus.svg`} alt="Zeus" />
                    <p>{displayName("Zeus", "attributes/racket/database/Zeus")}</p>
                </div>
            </div>
            )}
            {selectedCategory === "grip" && (
            <div className="cards-grip">
                <div onClick={() => setSelectedCardTable("starter-grip-table", "attributes/grip/database/StarterGrip")}
                    style={{ 
                        color: selectedCardTable === "starter-grip-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/starter-grip.svg`} alt="Starter Grip" />
                    <p>{displayName("Starter Grip", "attributes/grip/database/StarterGrip")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("warrior-table", "attributes/grip/database/Warrior")}
                    style={{ 
                        color: selectedCardTable === "warrior-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-warrior.svg`} alt="The Warrior" />
                    <p>{displayName("The Warrior", "attributes/grip/database/Warrior")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("talon-table", "attributes/grip/database/Talon")}
                    style={{ 
                        color: selectedCardTable === "talon-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-talon.svg`} alt="The Talon" />
                    <p>{displayName("The Talon", "attributes/grip/database/Talon")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("machete-table", "attributes/grip/database/Machete")}
                    style={{ 
                        color: selectedCardTable === "machete-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-machete.svg`} alt="The Machete" />
                    <p>{displayName("The Machete", "attributes/grip/database/Machete")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("cobra-table", "attributes/grip/database/Cobra")}
                    style={{ 
                        color: selectedCardTable === "cobra-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-cobra.svg`} alt="The Cobra" />
                    <p>{displayName("The Cobra", "attributes/grip/database/Cobra")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("katana-table", "attributes/grip/database/Katana")}
                    style={{ 
                        color: selectedCardTable === "katana-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-katana.svg`} alt="The Katana" />
                    <p>{displayName("The Katana", "attributes/grip/database/Katana")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("forge-table", "attributes/grip/database/Forge")}
                    style={{ 
                        color: selectedCardTable === "forge-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-forge.svg`} alt="The Forge" />
                    <p>{displayName("The Forge", "attributes/grip/database/Forge")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("tactical-grip-table", "attributes/grip/database/TacticalGrip")}
                    style={{ 
                        color: selectedCardTable === "tactical-grip-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/tactical-grip.svg`} alt="Tactical Grip" />
                    <p>{displayName("Tactical Grip", "attributes/grip/database/TacticalGrip")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("titan-table", "attributes/grip/database/Titan")}
                    style={{ 
                        color: selectedCardTable === "titan-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-titan.svg`} alt="The Titan" />
                    <p>{displayName("The Titan", "attributes/grip/database/Titan")}</p>
                </div>
            </div>
            )}
            {selectedCategory === "shoe" && (
            <div className="cards-shoe">
                <div onClick={() => setSelectedCardTable("starter-shoe-table", "attributes/shoe/database/StarterShoe")}
                    style={{ 
                        color: selectedCardTable === "starter-shoe-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/starter-shoe.svg`} alt="Starter Shoes" />
                    <p>{displayName("Starter Shoes", "attributes/shoe/database/StarterShoe")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("feather-table", "attributes/shoe/database/Feather")}
                    style={{ 
                        color: selectedCardTable === "feather-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-feather.svg`} alt="The Feather" />
                    <p>{displayName("The Feather", "attributes/shoe/database/Feather")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("raptor-table", "attributes/shoe/database/Raptor")}
                    style={{ 
                        color: selectedCardTable === "raptor-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-raptor.svg`} alt="The Raptor" />
                    <p>{displayName("The Raptor", "attributes/shoe/database/Raptor")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("hunter-table", "attributes/shoe/database/Hunter")}
                    style={{ 
                        color: selectedCardTable === "hunter-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-hunter.svg`} alt="The Hunter" />
                    <p>{displayName("The Hunter", "attributes/shoe/database/Hunter")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("piranha-table", "attributes/shoe/database/Piranha")}
                    style={{ 
                        color: selectedCardTable === "piranha-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-piranha.svg`} alt="The Piranha" />
                    <p>{displayName("The Piranha", "attributes/shoe/database/Piranha")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("shuriken-table", "attributes/shoe/database/Shuriken")}
                    style={{ 
                        color: selectedCardTable === "shuriken-table" ? '#007bff' : 'black'
                    }}  
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-shuriken.svg`} alt="The Shurinken" />
                    <p>{displayName("The Shuriken", "attributes/shoe/database/Shuriken")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("anvil-table", "attributes/shoe/database/Anvil")}
                    style={{ 
                        color: selectedCardTable === "anvil-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-anvil.svg`} alt="The Anvil" />
                    <p>{displayName("The Anvil", "attributes/shoe/database/Anvil")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("ballistic-table", "attributes/shoe/database/Ballistic")}
                    style={{ 
                        color: selectedCardTable === "ballistic-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-ballistic.svg`} alt="The Ballistic" />
                    <p>{displayName("The Ballistic", "attributes/shoe/database/Ballistic")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("hades-table", "attributes/shoe/database/Hades")}
                    style={{ 
                        color: selectedCardTable === "hades-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/hades.svg`} alt="The Hades treads" />
                    <p>{displayName("The Hades treads", "attributes/shoe/database/Hades")}</p>
                </div>
            </div>
            )}
            {selectedCategory === "wristband" && (
            <div className="cards-wristband">
                <div onClick={() => setSelectedCardTable("starter-band-table", "attributes/wristband/database/StarterBand")}
                    style={{ 
                        color: selectedCardTable === "starter-band-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/starter-band.svg`} alt="Starter Band" />
                    <p>{displayName("Starter Band", "attributes/wristband/database/StarterBand")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("tomahawk-table", "attributes/wristband/database/Tomahawk")}
                    style={{ 
                        color: selectedCardTable === "tomahawk-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-tomahawk.svg`} alt="The Tomahawk" />
                    <p>{displayName("The Tomahawk", "attributes/wristband/database/Tomahawk")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("rocket-table", "attributes/wristband/database/Rocket")}
                    style={{ 
                        color: selectedCardTable === "rocket-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-rocket.svg`} alt="The Rocket" />
                    <p>{displayName("The Rocket", "attributes/wristband/database/Rocket")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("jolly-roger-table", "attributes/wristband/database/JollyRoger")}
                    style={{ 
                        color: selectedCardTable === "jolly-roger-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/jolly-roger.svg`} alt="Jolly Roger" />
                    <p>{displayName("Jolly Roger", "attributes/wristband/database/JollyRoger")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("macaw-table", "attributes/wristband/database/Macaw")}
                    style={{ 
                        color: selectedCardTable === "macaw-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-macaw.svg`} alt="The Macaw" />
                    <p>{displayName("The Macaw", "attributes/wristband/database/Macaw")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("koi-table", "attributes/wristband/database/Koi")}
                    style={{ 
                        color: selectedCardTable === "koi-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-koi.svg`} alt="The Koi" />
                    <p>{displayName("The Koi", "attributes/wristband/database/Koi")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("kodiak-table", "attributes/wristband/database/Kodiak")}
                    style={{ 
                        color: selectedCardTable === "kodiak-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-kodiak.svg`} alt="The Kodiak" />
                    <p>{displayName("The Kodiak", "attributes/wristband/database/Kodiak")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("gladiator-table", "attributes/wristband/database/Gladiator")}
                    style={{ 
                        color: selectedCardTable === "gladiator-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-gladiator.svg`} alt="The Gladiator" />
                    <p>{displayName("The Gladiator", "attributes/wristband/database/Gladiator")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("shield-table", "attributes/wristband/database/Shield")}
                    style={{ 
                        color: selectedCardTable === "shield-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/the-shield.svg`} alt="The Shield" />
                    <p>{displayName("The Shield", "attributes/wristband/database/Shield")}</p>
                </div>
            </div>
            )}
            {selectedCategory === "nutrition" && (
            <div className="select-cards-categories-nutrition-cards">
                <div onClick={() => setSelectedCardTable("starter-protein-table", "attributes/nutrition/database/StarterProtein")}
                    style={{ 
                        color: selectedCardTable === "starter-protein-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/starter-protein.svg`} alt="Starter Protein" />
                    <p>{displayName("Starter Protein", "attributes/nutrition/database/StarterProtein")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("lean-protein-table", "attributes/nutrition/database/LeanProtein")}
                    style={{ 
                        color: selectedCardTable === "lean-protein-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/lean-protein.svg`} alt="Lean Protein" />
                    <p>{displayName("Lean Protein", "attributes/nutrition/database/LeanProtein")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("increased-hydration-table", "attributes/nutrition/database/IncreasedHydration")}
                    style={{ 
                        color: selectedCardTable === "increased-hydration-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/increased-hydration.svg`} alt="Increased Hydration" />
                    <p>{displayName("Increased Hydration", "attributes/nutrition/database/IncreasedHydration")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("macrobiotic-table", "attributes/nutrition/database/Macrobiotic")}
                    style={{ 
                        color: selectedCardTable === "macrobiotic-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/macrobiotic.svg`} alt="Macrobiotic" />
                    <p>{displayName("Macrobiotic", "attributes/nutrition/database/Macrobiotic")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("vegan-diet-table", "attributes/nutrition/database/VeganDiet")}
                    style={{ 
                        color: selectedCardTable === "vegan-diet-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/vegan-diet.svg`} alt="Vegan Diet" />
                    <p>{displayName("Vegan Diet", "attributes/nutrition/database/VeganDiet")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("keto-sourcing-table", "attributes/nutrition/database/KetoSourcing")}
                    style={{ 
                        color: selectedCardTable === "keto-sourcing-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/keto-sourcing.svg`} alt="Keto Sourcing" />
                    <p>{displayName("Keto Sourcing", "attributes/nutrition/database/KetoSourcing")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("antioxidants-table", "attributes/nutrition/database/Antioxidants")}
                    style={{ 
                        color: selectedCardTable === "antioxidants-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/antioxidants.svg`} alt="Antioxidants" />
                    <p>{displayName("Antioxidants", "attributes/nutrition/database/Antioxidants")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("carboload-table", "attributes/nutrition/database/Carboload")}
                    style={{ 
                        color: selectedCardTable === "carboload-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/carboload.svg`} alt="Carboload" />
                    <p>{displayName("Carboload", "attributes/nutrition/database/Carboload")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("natural-energy-table", "attributes/nutrition/database/NaturalEnergy")}
                    style={{ 
                        color: selectedCardTable === "natural-energy-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/natural-energy.svg`} alt="Natural Energy" />
                    <p>{displayName("Natural Energy", "attributes/nutrition/database/NaturalEnergy")}</p>
                </div>
            </div>
            )}
            {selectedCategory === "workout" && (
            <div className="select-cards-categories-workout-cards">
                <div onClick={() => setSelectedCardTable("starter-training-table", "attributes/workout/database/StarterTraining")}
                    style={{ 
                        color: selectedCardTable === "starter-training-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/starter-training.svg`} alt="Starter Training" />
                    <p>{displayName("Starter Training", "attributes/workout/database/StarterTraining")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("endurance-table", "attributes/workout/database/Endurance")}
                    style={{ 
                        color: selectedCardTable === "endurance-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/endurance.svg`} alt="Endurance" />
                    <p>{displayName("Endurance", "attributes/workout/database/Endurance")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("sprint-table", "attributes/workout/database/Sprint")}
                    style={{ 
                        color: selectedCardTable === "sprint-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/sprint.svg`} alt="Sprint" />
                    <p>{displayName("Sprint", "attributes/workout/database/Sprint")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("plyometrics-table", "attributes/workout/database/Plyometrics")}
                    style={{ 
                        color: selectedCardTable === "plyometrics-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/plyometrics.svg`} alt="Plyometrics" />
                    <p>{displayName("Plyometrics", "attributes/workout/database/Plyometrics")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("powerlifting-table", "attributes/workout/database/Powerlifting")}
                    style={{ 
                        color: selectedCardTable === "powerlifting-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/powerlifting.svg`} alt="Powerlifting" />
                    <p>{displayName("Powerlifting", "attributes/workout/database/Powerlifting")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("weight-lifting-table", "attributes/workout/database/WeightLifting")}
                    style={{ 
                        color: selectedCardTable === "weight-lifting-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/weight-lifting.svg`} alt="Weight Lifting" />
                    <p>{displayName("Weight Lifting", "attributes/workout/database/WeightLifting")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("resistance-band-table", "attributes/workout/database/ResistanceBand")}
                    style={{ 
                        color: selectedCardTable === "resistance-band-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/resistance-band.svg`} alt="Resistance Band" />
                    <p>{displayName("Resistance Band", "attributes/workout/database/ResistanceBand")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("mountain-climber-table", "attributes/workout/database/MountainClimber")}
                    style={{ 
                        color: selectedCardTable === "mountain-climber-table" ? '#007bff' : 'black'
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/mountain-climber.svg`} alt="Mountain Climber" />
                    <p>{displayName("Mountain Climber", "attributes/workout/database/MountainClimber")}</p>
                </div>
                <div onClick={() => setSelectedCardTable("lunges-table", "attributes/workout/database/Lunges")}
                    style={{ 
                        color: selectedCardTable === "lunges-table" ? '#007bff' : 'black'
                    }}   
                >
                    <img src={`${process.env.PUBLIC_URL}/assets/lunges.svg`} alt="Lunges" />
                    <p>{displayName("Lunges", "attributes/workout/database/Lunges")}</p>
                </div>
            </div>
            )}
        </div>
    );
}

export default SelectCard;