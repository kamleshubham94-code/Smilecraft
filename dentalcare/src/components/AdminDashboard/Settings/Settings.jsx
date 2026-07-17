import { useContext, useState } from "react";
import "./Settings.css";

import {
  FaUserShield,
  FaLock,
  FaBell,
  FaMoon,
  FaSun,
  FaSave,
} from "react-icons/fa";

import { useTheme } from "../../../Context/ThemeContext";
import { AuthContext } from "../../../context/AuthContext";

function Settings() {

  const { darkMode, toggleTheme } = useTheme();

  const { user } = useContext(AuthContext);

  const [admin, setAdmin] = useState({

    fullName: user?.fullName || "",

    email: user?.email || "",

    phone: user?.phone || "",

  });

  const [password, setPassword] = useState({

    currentPassword: "",

    newPassword: "",

    confirmPassword: "",

  });

  const [emailNotification, setEmailNotification] =
    useState(true);

  const [loading, setLoading] = useState(false);

  const handleProfileChange = (e) => {

    setAdmin({

      ...admin,

      [e.target.name]: e.target.value,

    });

  };

  const handlePasswordChange = (e) => {

    setPassword({

      ...password,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // await updateAdmin(admin);

      alert("Profile Updated Successfully");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  const updatePassword = () => {

    if (

      password.newPassword !==
      password.confirmPassword

    ) {

      return alert("Passwords do not match.");

    }

    if (

      password.newPassword.length < 6

    ) {

      return alert(
        "Password should be at least 6 characters."
      );

    }

    alert(
      "Password update API will be connected later."
    );

  };

  return (

    <div className="admin-settings">

      <div className="settings-header">

        <h2>Settings</h2>

        <p>

          Manage your profile and application settings.

        </p>

      </div>

      {/* Profile */}

      <div className="settings-card">

        <div className="card-title">

          <FaUserShield />

          <h3>Admin Profile</h3>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div>

              <label>Full Name</label>

              <input

                type="text"

                name="fullName"

                value={admin.fullName}

                onChange={handleProfileChange}

              />

            </div>

            <div>

              <label>Email</label>

              <input

                type="email"

                name="email"

                value={admin.email}

                onChange={handleProfileChange}

              />

            </div>

            <div>

              <label>Phone</label>

              <input

                type="text"

                name="phone"

                value={admin.phone}

                onChange={handleProfileChange}

              />

            </div>

          </div>

          <button

            className="save-btn"

            type="submit"

          >

            <FaSave />

            {

              loading

                ? "Saving..."

                : "Save Changes"

            }

          </button>

        </form>

      </div>      {/* Change Password */}

      <div className="settings-card">

        <div className="card-title">

          <FaLock />

          <h3>Change Password</h3>

        </div>

        <div className="form-grid">

          <input

            type="password"

            name="currentPassword"

            placeholder="Current Password"

            value={password.currentPassword}

            onChange={handlePasswordChange}

          />

          <input

            type="password"

            name="newPassword"

            placeholder="New Password"

            value={password.newPassword}

            onChange={handlePasswordChange}

          />

          <input

            type="password"

            name="confirmPassword"

            placeholder="Confirm Password"

            value={password.confirmPassword}

            onChange={handlePasswordChange}

          />

        </div>

        <button

          className="save-btn"

          onClick={updatePassword}

        >

          <FaLock />

          Update Password

        </button>

      </div>

      {/* Preferences */}

      <div className="settings-card">

        <div className="card-title">

          <FaBell />

          <h3>Preferences</h3>

        </div>

        <div className="setting-row">

          <div>

            <h4>Email Notifications</h4>

            <p>

              Receive appointment updates and important notifications.

            </p>

          </div>

          <input

            type="checkbox"

            checked={emailNotification}

            onChange={() =>

              setEmailNotification(

                !emailNotification

              )

            }

          />

        </div>

        <div className="setting-row">

          <div>

            <h4>Dark Mode</h4>

            <p>

              Change the appearance of the dashboard.

            </p>

          </div>

          <button

            className="theme-toggle"

            onClick={toggleTheme}

          >

            {

              darkMode

                ?

                <>

                  <FaSun />

                  Light Mode

                </>

                :

                <>

                  <FaMoon />

                  Dark Mode

                </>

            }

          </button>

        </div>

      </div>

      {/* Account Information */}

      <div className="settings-card">

        <div className="card-title">

          <FaUserShield />

          <h3>Account Information</h3>

        </div>

        <div className="account-info">

          <div className="info-row">

            <span>Role</span>

            <strong>

              {user?.role || "Admin"}

            </strong>

          </div>

          <div className="info-row">

            <span>Email</span>

            <strong>

              {user?.email}

            </strong>

          </div>

          <div className="info-row">

            <span>Account Status</span>

            <strong className="active-status">

              Active

            </strong>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Settings;