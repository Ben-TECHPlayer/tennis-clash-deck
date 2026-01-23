import React, { useState, useEffect } from 'react';
import '../styles/Lineup.css';
import SelectCard from '../components/SelectCard';
import ChosenLineup from '../components/ChosenLineup';

import OsakaTable from '../components/players/legends/select/OsakaTable';
import PaoliniTable from '../components/players/legends/select/PaoliniTable';
import SabalenkaTable from '../components/players/legends/select/SabalenkaTable';
import PaulTable from '../components/players/legends/select/PaulTable';
import KyrgiosTable from '../components/players/legends/select/KyrgiosTable';

import JonahTable from '../components/players/champions/select/JonahTable';
import HopeTable from '../components/players/champions/select/HopeTable';
import FlorenceTable from '../components/players/champions/select/FlorenceTable';
import LeoTable from '../components/players/champions/select/LeoTable';
import ViktoriaTable from '../components/players/champions/select/ViktoriaTable';
import KaitoTable from '../components/players/champions/select/KaitoTable';
import AntonTable from '../components/players/champions/select/AntonTable';
import DianaTable from '../components/players/champions/select/DianaTable';
import IngridTable from '../components/players/champions/select/IngridTable';
import DiegoTable from '../components/players/champions/select/DiegoTable';
import HyunJunTable from '../components/players/champions/select/HyunJunTable';
import MarkTable from '../components/players/champions/select/MarkTable';
import AbekeTable from '../components/players/champions/select/AbekeTable';
import MeiLiTable from '../components/players/champions/select/MeiLiTable';
import LucTable from '../components/players/champions/select/LucTable';
import OmarTable from '../components/players/champions/select/OmarTable';

import StarterRacketTable from '../components/attributes/racket/select/StarterRacketTable';
import EagleTable from '../components/attributes/racket/select/EagleTable';
import PantherTable from '../components/attributes/racket/select/PantherTable';
import PatriotTable from '../components/attributes/racket/select/PatriotTable';
import OutbackTable from '../components/attributes/racket/select/OutbackTable';
import HammerTable from '../components/attributes/racket/select/HammerTable';
import SamuraiTable from '../components/attributes/racket/select/SamuraiTable';
import ZeusTable from '../components/attributes/racket/select/ZeusTable';
import BullseyeTable from '../components/attributes/racket/select/BullseyeTable';

import StarterGripTable from '../components/attributes/grip/select/StarterGripTable';
import CobraTable from '../components/attributes/grip/select/CobraTable';
import ForgeTable from '../components/attributes/grip/select/ForgeTable';
import KatanaTable from '../components/attributes/grip/select/KatanaTable';
import MacheteTable from '../components/attributes/grip/select/MacheteTable';
import TacticalGripTable from '../components/attributes/grip/select/TacticalGripTable';
import TalonTable from '../components/attributes/grip/select/TalonTable';
import TitanTable from '../components/attributes/grip/select/TitanTable';
import WarriorTable from '../components/attributes/grip/select/WarriorTable';

import StarterShoeTable from '../components/attributes/shoe/select/StarterShoeTable';
import AnvilTable from '../components/attributes/shoe/select/AnvilTable';
import BallisticTable from '../components/attributes/shoe/select/BallisticTable';
import FeatherTable from '../components/attributes/shoe/select/FeatherTable';
import HadesTable from '../components/attributes/shoe/select/HadesTable';
import HunterTable from '../components/attributes/shoe/select/HunterTable';
import PiranhaTable from '../components/attributes/shoe/select/PiranhaTable';
import RaptorTable from '../components/attributes/shoe/select/RaptorTable';
import ShurikenTable from '../components/attributes/shoe/select/ShurikenTable';

import StarterBandTable from '../components/attributes/wristband/select/StarterBandTable';
import GladiatorTable from '../components/attributes/wristband/select/GladiatorTable';
import JollyRogerTable from '../components/attributes/wristband/select/JollyRogerTable';
import KodiakTable from '../components/attributes/wristband/select/KodiakTable';
import KoiTable from '../components/attributes/wristband/select/KoiTable';
import MacawTable from '../components/attributes/wristband/select/MacawTable';
import RocketTable from '../components/attributes/wristband/select/RocketTable';
import ShieldTable from '../components/attributes/wristband/select/ShieldTable';
import TomahawkTable from '../components/attributes/wristband/select/TomahawkTable';

import StarterProteinTable from '../components/attributes/nutrition/select/StarterProteinTable';
import AntioxidantsTable from '../components/attributes/nutrition/select/AntioxidantsTable';
import CarboloadTable from '../components/attributes/nutrition/select/CarboloadTable';
import IncreasedHydrationTable from '../components/attributes/nutrition/select/IncreasedHydrationTable';
import KetoSourcingTable from '../components/attributes/nutrition/select/KetoSourcingTable';
import LeanProteinTable from '../components/attributes/nutrition/select/LeanProteinTable';
import MacrobioticTable from '../components/attributes/nutrition/select/MacrobioticTable';
import NaturalEnergyTable from '../components/attributes/nutrition/select/NaturalEnergyTable';
import VeganDietTable from '../components/attributes/nutrition/select/VeganDietTable';

import StarterTrainingTable from '../components/attributes/workout/select/StarterTrainingTable';
import EnduranceTable from '../components/attributes/workout/select/EnduranceTable';
import LungesTable from '../components/attributes/workout/select/LungesTable';
import MountainClimberTable from '../components/attributes/workout/select/MountainClimberTable';
import PlyometricsTable from '../components/attributes/workout/select/PlyometricsTable';
import PowerliftingTable from '../components/attributes/workout/select/PowerliftingTable';
import ResistanceBandTable from '../components/attributes/workout/select/ResistanceBandTable';
import SprintTable from '../components/attributes/workout/select/SprintTable';
import WeightLiftingTable from '../components/attributes/workout/select/WeightLiftingTable';


function Lineup() {
    const [selectedCardTable, setSelectedCardTable] = useState(null); 
    return (
        <main>
            <h1>Lineups</h1>
            <SelectCard setSelectedCardTable={setSelectedCardTable} />
            <div className="select-cards-container">
                <div className="select-cards-character">
                    <div className="select-cards-character-legends-attributes">
                        {selectedCardTable === "osaka-table" && <OsakaTable/>}
                        {selectedCardTable === "paul-table" && <PaulTable/>}
                        {selectedCardTable === "sabalenka-table" && <SabalenkaTable/>}
                        {selectedCardTable === "paolini-table" && <PaoliniTable/>}
                        {selectedCardTable === "kyrgios-table" && <KyrgiosTable/>}
                    </div>
                    <div className="select-cards-character-champions-attributes">
                        {selectedCardTable === "jonah-table" && <JonahTable/>}
                        {selectedCardTable === "hope-table" && <HopeTable/>}
                        {selectedCardTable === "florence-table" && <FlorenceTable/>}
                        {selectedCardTable === "leo-table" && <LeoTable/>}
                        {selectedCardTable === "viktoria-table" && <ViktoriaTable/>}
                        {selectedCardTable === "kaito-table" && <KaitoTable/>}
                        {selectedCardTable === "diana-table" && <DianaTable/>}
                        {selectedCardTable === "anton-table" && <AntonTable/>}
                        {selectedCardTable === "ingrid-table" && <IngridTable/>}
                        {selectedCardTable === "diego-table" && <DiegoTable/>}
                        {selectedCardTable === "hyunjun-table" && <HyunJunTable/>}
                        {selectedCardTable === "mark-table" && <MarkTable/>}
                        {selectedCardTable === "abeke-table" && <AbekeTable/>}
                        {selectedCardTable === "meili-table" && <MeiLiTable/>}
                        {selectedCardTable === "luc-table" && <LucTable/>}
                        {selectedCardTable === "omar-table" && <OmarTable/>}
                    </div>
                    
                </div>
                <div className="select-cards-categories">
                    <div className="select-cards-categories-racket">
                        <div className="select-cards-categories-racket-cards-attributes">
                            {selectedCardTable === "starter-racket-table" && <StarterRacketTable/>}
                            {selectedCardTable === "eagle-table" && <EagleTable/>}
                            {selectedCardTable === "patriot-table" && <PatriotTable/>}
                            {selectedCardTable === "outback-table" && <OutbackTable/>}
                            {selectedCardTable === "panther-table" && <PantherTable/>}
                            {selectedCardTable === "samurai-table" && <SamuraiTable/>}
                            {selectedCardTable === "hammer-table" && <HammerTable/>}
                            {selectedCardTable === "bullseye-table" && <BullseyeTable/>}
                            {selectedCardTable === "zeus-table" && <ZeusTable/>}
                        </div>
                        
                    </div>
                    <div className="select-cards-categories-grip">
                        <div className="select-cards-categories-racket-cards-attributes">
                            {selectedCardTable === "starter-grip-table" && <StarterGripTable/>}
                            {selectedCardTable === "warrior-table" && <WarriorTable/>}
                            {selectedCardTable === "talon-table" && <TalonTable/>}
                            {selectedCardTable === "machete-table" && <MacheteTable/>}
                            {selectedCardTable === "cobra-table" && <CobraTable/>}
                            {selectedCardTable === "katana-table" && <KatanaTable/>}
                            {selectedCardTable === "forge-table" && <ForgeTable/>}
                            {selectedCardTable === "tactical-grip-table" && <TacticalGripTable/>}
                            {selectedCardTable === "titan-table" && <TitanTable/>}
                        </div>
                    </div>
                    <div className="select-cards-categories-shoe">
                        <div className="select-cards-categories-shoe-cards-attributes">
                            {selectedCardTable === "starter-shoe-table" && <StarterShoeTable/>}
                            {selectedCardTable === "feather-table" && <FeatherTable/>}
                            {selectedCardTable === "raptor-table" && <RaptorTable/>}
                            {selectedCardTable === "hunter-table" && <HunterTable/>}
                            {selectedCardTable === "piranha-table" && <PiranhaTable/>}
                            {selectedCardTable === "shuriken-table" && <ShurikenTable/>}
                            {selectedCardTable === "anvil-table" && <AnvilTable/>}
                            {selectedCardTable === "ballistic-table" && <BallisticTable/>}
                            {selectedCardTable === "hades-table" && <HadesTable/>}
                        </div>
                        
                    </div>
                    <div className="select-cards-categories-wristband">
                        <div className="select-cards-categories-racket-cards-attributes">                           
                            {selectedCardTable === "starter-band-table" && <StarterBandTable/>}
                            {selectedCardTable === "tomahawk-table" && <TomahawkTable/>}
                            {selectedCardTable === "rocket-table" && <RocketTable/>}
                            {selectedCardTable === "jolly-roger-table" && <JollyRogerTable/>}
                            {selectedCardTable === "macaw-table" && <MacawTable/>}
                            {selectedCardTable === "koi-table" && <KoiTable/>}
                            {selectedCardTable === "kodiak-table" && <KodiakTable/>}
                            {selectedCardTable === "gladiator-table" && <GladiatorTable/>}
                            {selectedCardTable === "shield-table" && <ShieldTable/>}
                        </div>
                        
                    </div>
                    <div className="select-cards-categories-nutrition">
                        <div className="select-cards-categories-nutrition-cards-attributes">
                            {selectedCardTable === "starter-protein-table" && <StarterProteinTable/>}
                            {selectedCardTable === "lean-protein-table" && <LeanProteinTable/>}
                            {selectedCardTable === "increased-hydration-table" && <IncreasedHydrationTable/>}
                            {selectedCardTable === "macrobiotic-table" && <MacrobioticTable/>}
                            {selectedCardTable === "vegan-diet-table" && <VeganDietTable/>}
                            {selectedCardTable === "keto-sourcing-table" && <KetoSourcingTable/>}
                            {selectedCardTable === "antioxidants-table" && <AntioxidantsTable/>}
                            {selectedCardTable === "carboload-table" && <CarboloadTable/>}
                            {selectedCardTable === "natural-energy-table" && <NaturalEnergyTable/>}
                        </div>
                        
                    </div>
                    <div className="select-cards-categories-workout">
                        <div className="select-cards-categories-shoe-workout-attributes">
                            {selectedCardTable === "starter-training-table" && <StarterTrainingTable/>}
                            {selectedCardTable === "endurance-table" && <EnduranceTable/>}
                            {selectedCardTable === "sprint-table" && <SprintTable/>}
                            {selectedCardTable === "plyometrics-table" && <PlyometricsTable/>}
                            {selectedCardTable === "powerlifting-table" && <PowerliftingTable/>}
                            {selectedCardTable === "weight-lifting-table" && <WeightLiftingTable/>}
                            {selectedCardTable === "resistance-band-table" && <ResistanceBandTable/>}
                            {selectedCardTable === "mountain-climber-table" && <MountainClimberTable/>}
                            {selectedCardTable === "lunges-table" && <LungesTable/>}
                        </div>
                    </div>
                </div>
            </div>
            <ChosenLineup />            
        </main>
    );
}

export default Lineup;
