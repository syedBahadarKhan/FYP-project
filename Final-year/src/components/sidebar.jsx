import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaVideo,
  FaBell,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className="menu-item">
          <FaTachometerAlt />
          <span className="menu-text">Dashboard</span>
        </NavLink>

        <NavLink to="/monitoring" className="menu-item">
          <FaVideo />
          <span className="menu-text">Live Monitoring</span>
        </NavLink>

        <NavLink to="/alerts" className="menu-item">
          <FaBell />
          <span className="menu-text">AI Alerts</span>
        </NavLink>

        <NavLink to="/reports" className="menu-item">
          <FaFileAlt />
          <span className="menu-text">Reports</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <FaSignOutAlt />
          <span className="menu-text">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
