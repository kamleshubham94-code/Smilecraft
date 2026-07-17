import { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCheckCircle,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";

import "./Profile.css";

function Profile() {

  const storedUser =
    JSON.parse(localStorage.getItem("user")) || {};

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    fullName: storedUser.fullName || "Shubham Kamle",
    email: storedUser.email || "shubham@gmail.com",
    phone: storedUser.phone || "+91 9876543210",
    gender: storedUser.gender || "Male",
    role: storedUser.role || "Patient",
    isVerified:
      storedUser.isVerified ?? true,
    createdAt:
      storedUser.createdAt || "15 July 2026",
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  const saveProfile = () => {

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setEditing(false);

    alert("Profile Updated Successfully");

  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        {/* Profile Header */}

        <div className="profile-header">

          <div className="profile-avatar">

            {user.fullName.charAt(0)}

          </div>

          <div>

            <h2>{user.fullName}</h2>

            <p>Patient</p>

          </div>

        </div>

        {/* Personal Information */}

        <div className="profile-section">

          <h3>Personal Information</h3>

          <div className="profile-grid">

            <div className="profile-field">

              <label>

                <FaUser />

                Full Name

              </label>

              <input
                type="text"
                name="fullName"
                value={user.fullName}
                disabled={!editing}
                onChange={handleChange}
              />

            </div>

            <div className="profile-field">

              <label>

                <FaEnvelope />

                Email

              </label>

              <input
                type="email"
                value={user.email}
                disabled
              />

            </div>

            <div className="profile-field">

              <label>

                <FaPhoneAlt />

                Phone

              </label>

              <input
                type="text"
                name="phone"
                value={user.phone}
                disabled={!editing}
                onChange={handleChange}
              />

            </div>

            <div className="profile-field">

              <label>

                Gender

              </label>

              <select
                name="gender"
                value={user.gender}
                disabled={!editing}
                onChange={handleChange}
              >

                <option>Male</option>

                <option>Female</option>

                <option>Other</option>

              </select>

            </div>

            <div className="profile-field">

              <label>

                Role

              </label>

              <input
                value={user.role}
                disabled
              />

            </div>

            <div className="profile-field">

              <label>

                Account Status

              </label>

              <input
                value={
                  user.isVerified
                    ? "Verified"
                    : "Not Verified"
                }
                disabled
              />

            </div>

            <div className="profile-field full-width">

              <label>

                Member Since

              </label>

              <input
                value={user.createdAt}
                disabled
              />

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="profile-actions">

          {!editing ? (

            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >

              <FaEdit />

              Edit Profile

            </button>

          ) : (

            <>

              <button
                className="save-btn"
                onClick={saveProfile}
              >

                <FaSave />

                Save

              </button>

              <button
                className="cancel-btn"
                onClick={() => setEditing(false)}
              >

                <FaTimes />

                Cancel

              </button>

            </>

          )}

        </div>

      </div>

    </div>

  );

}

export default Profile;