import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../Context/ThemeContext";

import {
  FaMoon,
  FaBell,
  FaLock,
  FaLanguage,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTrash,
  FaCog,
} from "react-icons/fa";

import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const { darkMode, toggleTheme } = useTheme();

  const [notifications, setNotifications] = useState({
    appointment: true,
    email: true,
    sms: false,
  });

  const [language, setLanguage] = useState("English");

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleNotification = (field) => {
    setNotifications({
      ...notifications,
      [field]: !notifications[field],
    });
  };

  const handlePassword = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login");
    }
  };

  const handleDelete = () => {
    alert("Delete Account feature will be connected to backend later.");
  };

  const handleSavePassword = () => {
    alert("Password update will be connected with backend later.");

    setPassword({
      current: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="settings-page">

      <div className="settings-header">

        <FaCog />

        <div>

          <h2>Settings</h2>

          <p>
            Manage your account preferences and security.
          </p>

        </div>

      </div>

      {/* Appearance */}

      <div className="settings-card">

        <h3>

          <FaMoon />

          Appearance

        </h3>

        <div className="settings-item">

          <span>Dark Mode</span>

          <label className="switch">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />

            <span className="slider"></span>

          </label>

        </div>

      </div>

      {/* Notifications */}

      <div className="settings-card">

        <h3>

          <FaBell />

          Notifications

        </h3>

        <div className="settings-item">

          <span>Appointment Reminder</span>

          <input
            type="checkbox"
            checked={notifications.appointment}
            onChange={() => handleNotification("appointment")}
          />

        </div>

        <div className="settings-item">

          <span>Email Notifications</span>

          <input
            type="checkbox"
            checked={notifications.email}
            onChange={() => handleNotification("email")}
          />

        </div>

        <div className="settings-item">

          <span>SMS Notifications</span>

          <input
            type="checkbox"
            checked={notifications.sms}
            onChange={() => handleNotification("sms")}
          />

        </div>

      </div>

      {/* Security */}

      <div className="settings-card">

        <h3>

          <FaLock />

          Change Password

        </h3>

        <input
          type="password"
          name="current"
          placeholder="Current Password"
          value={password.current}
          onChange={handlePassword}
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={password.newPassword}
          onChange={handlePassword}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={password.confirmPassword}
          onChange={handlePassword}
        />

        <button
          className="save-password-btn"
          onClick={handleSavePassword}
        >
          Save Password
        </button>

      </div>

      {/* Language */}

      <div className="settings-card">

        <h3>

          <FaLanguage />

          Language

        </h3>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >

          <option>English</option>

          <option>Hindi</option>

          <option>Telugu</option>

        </select>

      </div>

      {/* Help */}

      <div className="settings-card">

        <h3>

          <FaQuestionCircle />

          Help & Support

        </h3>

        <button className="link-btn">

          Contact Clinic

        </button>

        <button className="link-btn">

          Help Center

        </button>

        <button className="link-btn">

          Privacy Policy

        </button>

        <button className="link-btn">

          Terms & Conditions

        </button>

      </div>

      {/* Account */}

      <div className="settings-card danger">

        <h3>Account</h3>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >

          <FaTrash />

          Delete Account

        </button>

      </div>

    </div>
  );
}

export default Settings;