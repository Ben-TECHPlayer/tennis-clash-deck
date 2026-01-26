import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { LevelProvider } from './context/LevelContext';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Card from './pages/Card';
import Lineup from './pages/Lineup';
import Clubs from './pages/Clubs';
import Games from './pages/Games';

// Legends
import Osaka from './components/players/legends/database/Osaka';
import Sabalenka from './components/players/legends/database/Sabalenka';
import Paul from './components/players/legends/database/Paul';
import Paolini from './components/players/legends/database/Paolini';
import Kyrgios from './components/players/legends/database/Kyrgios';
// Champions (Assure-toi que ces fichiers existent bien dans ce dossier)
import Jonah from './components/players/champions/database/Jonah';
import Hope from './components/players/champions/database/Hope';
import Florence from './components/players/champions/database/Florence';
import Leo from './components/players/champions/database/Leo';
import Viktoria from './components/players/champions/database/Viktoria';
import Kaito from './components/players/champions/database/Kaito';
import Diana from './components/players/champions/database/Diana';
import Omar from './components/players/champions/database/Omar';
import Anton from './components/players/champions/database/Anton';
import Ingrid from './components/players/champions/database/Ingrid';
import Diego from './components/players/champions/database/Diego';
import HyunJun from './components/players/champions/database/HyunJun';
import Mark from './components/players/champions/database/Mark';
import Abeke from './components/players/champions/database/Abeke';
import MeiLi from './components/players/champions/database/MeiLi';
import Luc from './components/players/champions/database/Luc';

import StarterRacket from './components/attributes/racket/database/StarterRacket';
import Eagle from './components/attributes/racket/database/Eagle';
import Bullseye from './components/attributes/racket/database/Bullseye';
import Hammer from './components/attributes/racket/database/Hammer';
import Outback from './components/attributes/racket/database/Outback';
import Patriot from './components/attributes/racket/database/Patriot';
import Samurai from './components/attributes/racket/database/Samurai';
import Zeus from './components/attributes/racket/database/Zeus';
import Panther from './components/attributes/racket/database/Panther';

import StarterGrip from './components/attributes/grip/database/StarterGrip';
import Cobra from './components/attributes/grip/database/Cobra';
import Forge from './components/attributes/grip/database/Forge';
import Katana from './components/attributes/grip/database/Katana';
import Machete from './components/attributes/grip/database/Machete';
import TacticalGrip from './components/attributes/grip/database/TacticalGrip';
import Talon from './components/attributes/grip/database/Talon';
import Titan from './components/attributes/grip/database/Titan';
import Warrior from './components/attributes/grip/database/Warrior';

import StarterShoe from './components/attributes/shoe/database/StarterShoe';
import Feather from './components/attributes/shoe/database/Feather';
import Raptor from './components/attributes/shoe/database/Raptor';
import Hunter from './components/attributes/shoe/database/Hunter';
import Piranha from './components/attributes/shoe/database/Piranha';
import Shuriken from './components/attributes/shoe/database/Shuriken';
import Anvil from './components/attributes/shoe/database/Anvil';
import Ballistic from './components/attributes/shoe/database/Ballistic';
import Hades from './components/attributes/shoe/database/Hades';

import StarterBand from './components/attributes/wristband/database/StarterBand';
import JollyRoger from './components/attributes/wristband/database/JollyRoger';
import Kodiak from './components/attributes/wristband/database/Kodiak';
import Koi from './components/attributes/wristband/database/Koi';
import Macaw from './components/attributes/wristband/database/Macaw';
import Rocket from './components/attributes/wristband/database/Rocket';
import Shield from './components/attributes/wristband/database/Shield';
import Tomahawk from './components/attributes/wristband/database/Tomahawk';
import Gladiator from './components/attributes/wristband/database/Gladiator';

import StarterProtein from './components/attributes/nutrition/database/StarterProtein';
import Antioxidants from './components/attributes/nutrition/database/Antioxidants';
import Carboload from './components/attributes/nutrition/database/Carboload';
import IncreasedHydration from './components/attributes/nutrition/database/IncreasedHydration';
import KetoSourcing from './components/attributes/nutrition/database/KetoSourcing';
import LeanProtein from './components/attributes/nutrition/database/LeanProtein';
import Macrobiotic from './components/attributes/nutrition/database/Macrobiotic';
import NaturalEnergy from './components/attributes/nutrition/database/NaturalEnergy';
import VeganDiet from './components/attributes/nutrition/database/VeganDiet';

import StarterTraining from './components/attributes/workout/database/StarterTraining';
import Endurance from './components/attributes/workout/database/Endurance';
import Lunges from './components/attributes/workout/database/Lunges';
import MountainClimber from './components/attributes/workout/database/MountainClimber';
import Plyometrics from './components/attributes/workout/database/Plyometrics';
import Powerlifting from './components/attributes/workout/database/Powerlifting';
import ResistanceBand from './components/attributes/workout/database/ResistanceBand';
import Sprint from './components/attributes/workout/database/Sprint';
import WeightLifting from './components/attributes/workout/database/WeightLifting';

import './styles/Footer.css';
import './styles/Home.css';
import './styles/Card.css';
import './styles/Lineup.css';
import './styles/Header.css';
import './styles/index.css';
import './styles/Clubs.css';
import './styles/Games.css';

// const styleDeFond = {
//   backgroundColor: 'snow'
// };

function App() {
  return (
    <div>
      <LevelProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card" element={<Card/>} />
                <Route path="/lineup" element={<Lineup />} />
                <Route path="/clubs" element={<Clubs/>} />
                <Route path="/games" element={<Games />} />

                {/* --- ROUTES DES LEGENDS --- */}
                {/* Le path ici doit correspondre EXACTEMENT au 2ème argument dans SelectCard.js */}
                <Route path="/card/players/legends/database/Osaka" element={<Osaka />} />
                <Route path="/card/players/legends/database/Sabalenka" element={<Sabalenka />} />
                <Route path="/card/players/legends/database/Paul" element={<Paul />} />
                <Route path="/card/players/legends/database/Paolini" element={<Paolini />} />
                <Route path="/card/players/legends/database/Kyrgios" element={<Kyrgios />} />

                {/* --- ROUTES DES CHAMPIONS --- */}
                <Route path="/card/players/champions/database/Jonah" element={<Jonah />} />
                <Route path="/card/players/champions/database/Hope" element={<Hope />} />
                <Route path="/card/players/champions/database/Florence" element={<Florence />} />
                <Route path="/card/players/champions/database/Leo" element={<Leo />} />
                <Route path="/card/players/champions/database/Viktoria" element={<Viktoria />} />
                <Route path="/card/players/champions/database/Kaito" element={<Kaito />} />
                <Route path="/card/players/champions/database/Diana" element={<Diana />} />
                <Route path="/card/players/champions/database/Omar" element={<Omar />} />
                <Route path="/card/players/champions/database/Anton" element={<Anton />} />
                <Route path="/card/players/champions/database/Ingrid" element={<Ingrid />} />
                <Route path="/card/players/champions/database/Diego" element={<Diego />} />
                <Route path="/card/players/champions/database/HyunJun" element={<HyunJun />} />
                <Route path="/card/players/champions/database/Mark" element={<Mark />} />
                <Route path="/card/players/champions/database/Abeke" element={<Abeke />} />
                <Route path="/card/players/champions/database/MeiLi" element={<MeiLi />} />
                <Route path="/card/players/champions/database/Luc" element={<Luc />} />

                <Route path="/card/attributes/racket/database/StarterRacket" element={<StarterRacket />} />
                <Route path="/card/attributes/racket/database/Eagle" element={<Eagle />} />
                <Route path="/card/attributes/racket/database/Patriot" element={<Patriot />} />
                <Route path="/card/attributes/racket/database/Outback" element={<Outback />} />
                <Route path="/card/attributes/racket/database/Panther" element={<Panther />} />
                <Route path="/card/attributes/racket/database/Samurai" element={<Samurai />} />
                <Route path="/card/attributes/racket/database/Hammer" element={<Hammer />} />
                <Route path="/card/attributes/racket/database/Bullseye" element={<Bullseye />} />
                <Route path="/card/attributes/racket/database/Zeus" element={<Zeus />} />

                <Route path="/card/attributes/grip/database/StarterGrip" element={<StarterGrip />} />
                <Route path="/card/attributes/grip/database/Cobra" element={<Cobra />} />
                <Route path="/card/attributes/grip/database/Forge" element={<Forge />} />
                <Route path="/card/attributes/grip/database/Katana" element={<Katana />} />
                <Route path="/card/attributes/grip/database/Machete" element={<Machete />} />
                <Route path="/card/attributes/grip/database/TacticalGrip" element={<TacticalGrip />} />
                <Route path="/card/attributes/grip/database/Talon" element={<Talon />} />
                <Route path="/card/attributes/grip/database/Titan" element={<Titan />} />
                <Route path="/card/attributes/grip/database/Warrior" element={<Warrior />} />

                <Route path="/card/attributes/shoe/database/StarterShoe" element={<StarterShoe />} />
                <Route path="/card/attributes/shoe/database/Feather" element={<Feather />} />
                <Route path="/card/attributes/shoe/database/Anvil" element={<Anvil />} />
                <Route path="/card/attributes/shoe/database/Ballistic" element={<Ballistic />} />
                <Route path="/card/attributes/shoe/database/Hades" element={<Hades />} />
                <Route path="/card/attributes/shoe/database/Hunter" element={<Hunter />} />
                <Route path="/card/attributes/shoe/database/Piranha" element={<Piranha />} />
                <Route path="/card/attributes/shoe/database/Shuriken" element={<Shuriken />} />
                <Route path="/card/attributes/shoe/database/Raptor" element={<Raptor />} />

                <Route path="/card/attributes/wristband/database/StarterBand" element={<StarterBand />} />
                <Route path="/card/attributes/wristband/database/Gladiator" element={<Gladiator />} />
                <Route path="/card/attributes/wristband/database/JollyRoger" element={<JollyRoger />} />
                <Route path="/card/attributes/wristband/database/Kodiak" element={<Kodiak />} />
                <Route path="/card/attributes/wristband/database/Koi" element={<Koi />} />
                <Route path="/card/attributes/wristband/database/Macaw" element={<Macaw />} />
                <Route path="/card/attributes/wristband/database/Rocket" element={<Rocket />} />
                <Route path="/card/attributes/wristband/database/Shield" element={<Shield />} />
                <Route path="/card/attributes/wristband/database/Tomahawk" element={<Tomahawk />} />

                <Route path="/card/attributes/nutrition/database/StarterProtein" element={<StarterProtein />} />
                <Route path="/card/attributes/nutrition/database/Antioxidants" element={<Antioxidants />} />
                <Route path="/card/attributes/nutrition/database/Carboload" element={<Carboload />} />
                <Route path="/card/attributes/nutrition/database/IncreasedHydration" element={<IncreasedHydration />} />
                <Route path="/card/attributes/nutrition/database/KetoSourcing" element={<KetoSourcing />} />
                <Route path="/card/attributes/nutrition/database/LeanProtein" element={<LeanProtein />} />
                <Route path="/card/attributes/nutrition/database/Macrobiotic" element={<Macrobiotic />} />
                <Route path="/card/attributes/nutrition/database/NaturalEnergy" element={<NaturalEnergy />} />
                <Route path="/card/attributes/nutrition/database/VeganDiet" element={<VeganDiet />} />

                <Route path="/card/attributes/workout/database/StarterTraining" element={<StarterTraining />} />
                <Route path="/card/attributes/workout/database/Endurance" element={<Endurance />} />
                <Route path="/card/attributes/workout/database/Lunges" element={<Lunges />} />
                <Route path="/card/attributes/workout/database/MountainClimber" element={<MountainClimber />} />
                <Route path="/card/attributes/workout/database/Plyometrics" element={<Plyometrics />} />
                <Route path="/card/attributes/workout/database/Powerlifting" element={<Powerlifting />} />
                <Route path="/card/attributes/workout/database/ResistanceBand" element={<ResistanceBand />} />
                <Route path="/card/attributes/workout/database/Sprint" element={<Sprint />} />
                <Route path="/card/attributes/workout/database/WeightLifting" element={<WeightLifting />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LevelProvider>
    </div>
  );
}

export default App;
