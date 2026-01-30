import { useState } from "react";
import {
  FaVideo,
  FaBell,
  FaUserShield,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    
    <nav className="navbar">
      <div className="navbar-left">
        <FaBars
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <FaUserShield className="logo-icon" />
        <span className="logo-text">Smart Exam Monitor</span>
      </div>

      <div className={`navbar-right ${menuOpen ? "show" : ""}`}>
        {/* Live Indicator */}
        <div className="nav-item live">
          <span className="live-dot"></span>
          <FaVideo />
          <span>LIVE</span>
        </div>

        {/* Alerts */}
        <div className="nav-item alert">
          <FaBell />
          <span className="badge">3</span>
        </div>

        {/* Theme Toggle */}
        <div className="nav-item" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>

        {/* Admin */}
        <div className="admin">
          <span className="admin-name">Admin</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="admin"
            className="avatar"
          />
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
