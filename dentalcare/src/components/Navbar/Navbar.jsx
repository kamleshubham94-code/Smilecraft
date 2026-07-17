import "./Navbar.css";

import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  FaMoon,
  FaSun,
  FaTooth,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

import { useTheme } from "../../Context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

  const navigate = useNavigate();

  const { darkMode, toggleTheme } = useTheme();

  const { user, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLink = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  const handleLogout = () => {

    logout();

    closeMenu();

    navigate("/");

  };

  return (

    <header className="navbar">

      <div className="navbar__container">

        {/* Logo */}

        <Link
          to="/"
          className="navbar__brand"
        >

          <div className="navbar__logo">

            <FaTooth />

          </div>

          <div>

            <h2>SmileCraft</h2>

            <p>Dental Clinic</p>

          </div>

        </Link>

        {/* Desktop Navigation */}

        <nav className="navbar__menu">

          <NavLink to="/" className={navLink}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLink}>
            About
          </NavLink>

          <NavLink to="/services" className={navLink}>
            Services
          </NavLink>

          <NavLink to="/contact" className={navLink}>
            Contact
          </NavLink>

        </nav>

        {/* Right Side */}

        <div className="navbar__actions">

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

          {/* ================= Guest ================= */}

          {!user && (

            <>

              <Link
                to="/login"
                className="login-btn"
              >
                Login
              </Link>

              <Link
                to="/appointment"
                className="book-btn"
              >
                Book Appointment
              </Link>

            </>

          )}

          {/* ================= Patient ================= */}

          {user?.role === "patient" && (

            <>

              <Link
                to="/patient-dashboard"
                className="login-btn"
              >
                Dashboard
              </Link>

              <Link
                to="/appointment"
                className="book-btn"
              >
                Book Appointment
              </Link>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >

                <FaSignOutAlt />

              </button>

            </>

          )}

          {/* ================= Admin ================= */}

          {user?.role === "admin" && (

            <>

              <Link
                to="/admin-dashboard"
                className="book-btn"
              >
                Admin Panel
              </Link>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >

                <FaSignOutAlt />

              </button>

            </>

          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          className="navbar__mobile-toggle"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen
            ? <HiOutlineX />
            : <HiOutlineMenu />}

        </button>

      </div>

      {/* ================= Mobile Menu ================= */}

      {menuOpen && (

        <div className="navbar__mobile">

          <NavLink
            to="/"
            className={navLink}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLink}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={navLink}
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={navLink}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {!user && (

            <>

              <Link
                to="/login"
                className="login-btn"
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                to="/appointment"
                className="book-btn"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>

            </>

          )}

          {user?.role === "patient" && (

            <>

              <Link
                to="/patient-dashboard"
                className="login-btn"
                onClick={closeMenu}
              >
                Dashboard
              </Link>

              <Link
                to="/appointment"
                className="book-btn"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </>

          )}

          {user?.role === "admin" && (

            <>

              <Link
                to="/admin-dashboard"
                className="book-btn"
                onClick={closeMenu}
              >
                Admin Panel
              </Link>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </>

          )}

        </div>

      )}

    </header>

  );

}

export default Navbar;