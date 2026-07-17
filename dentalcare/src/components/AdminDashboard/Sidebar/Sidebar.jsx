import "./Sidebar.css";

import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Sidebar({
  activePage,
  setActivePage,
}) {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <aside className="admin-sidebar">

      {/* Header */}

      <div className="admin-sidebar-header">

        <div className="admin-logo">

          <FaUserShield />

        </div>

        <div>

          <h2>SmileCraft</h2>

          <p>Admin Panel</p>

        </div>

      </div>

      {/* Menu */}

      <nav className="admin-menu">

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
            activePage === "patients"
              ? "active"
              : ""
          }
          onClick={() =>
            setActivePage("patients")
          }
        >

          <FaUsers />

          Patients

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

      {/* Footer */}

      <div className="admin-sidebar-footer">

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