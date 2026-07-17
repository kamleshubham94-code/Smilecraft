import "./Sidebar.css";
import {
  FaCalendarAlt,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaTooth,
  FaCog,
} from "react-icons/fa";

function Sidebar({
  activePage,
  setActivePage,
  user,
  handleLogout,
}) {
  return (
    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-header">

        <div className="sidebar-logo">

          <FaTooth />

        </div>

        <div>

          <h2>SmileCraft</h2>

          <p>Dental Clinic</p>

        </div>

      </div>

      {/* User */}

      <div className="sidebar-user">

        <div className="user-avatar">

          {user?.fullName?.charAt(0).toUpperCase()}

        </div>

        <h3>{user?.fullName}</h3>

        <span>Patient</span>

      </div>

      {/* Navigation */}

      <nav className="sidebar-menu">

        <button
          className={
            activePage === "dashboard"
              ? "active"
              : ""
          }
          onClick={() =>
            setActivePage("dashboard")
          }
        >
          <FaHome />

          Dashboard
        </button>

        <button
          className={
            activePage === "appointments"
              ? "active"
              : ""
          }
          onClick={() =>
            setActivePage("appointments")
          }
        >
          <FaCalendarAlt />

          Appointments
        </button>

      

        <button
          className={
            activePage === "profile"
              ? "active"
              : ""
          }
          onClick={() =>
            setActivePage("profile")
          }
        >
          <FaUser />

          Profile
        </button>
        <button
           className={
            activePage === "settings"
            ? "active"
            : ""
             }
            onClick={() =>
            setActivePage("settings")
             }
             >
             <FaCog />
              Settings
             </button>
      </nav>

      {/* Logout */}

      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;