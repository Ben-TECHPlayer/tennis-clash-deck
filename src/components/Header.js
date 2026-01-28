import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
//   const location = useLocation(); 
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header>
      <div className="header-container">
        <div className='home'>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          <img src={`${process.env.PUBLIC_URL}/assets/tennis-clash.png`} alt="Gmail" />
        </NavLink>
        </div>
        <div className="right-side">
          <button class="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
          <nav className={`menu ${menuOpen ? "show" : ""}`}>
            <NavLink to="/card" className={({ isActive }) => isActive ? "active" : ""}>
              Cards
            </NavLink>
            <NavLink to="/lineup" className={({ isActive }) => isActive ? "active" : ""}>
              Lineups
            </NavLink>
            <NavLink to="/clubs" className={({ isActive }) => isActive ? "active" : ""}>
              Clubs
            </NavLink>
            <NavLink to="/games" className={({ isActive }) => isActive ? "active" : ""}>
              Games
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}




export default Header;
