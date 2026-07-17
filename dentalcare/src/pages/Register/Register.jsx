import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaCheckCircle,
} from "react-icons/fa";

import "./Register.css";
import { registerUser } from "../../api/authApi";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error while typing
    setError("");
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to Login
      navigate("/login");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration Failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <main className="register-page">

      <div className="register-container">

        {/* LEFT SIDE */}

        <div className="register-left">

          <div className="register-logo">
            <FaUserPlus />
          </div>

          <h1>Create Your Account</h1>

          <p>
            Join SmileCraft Dental Clinic and manage appointments,
            dental reports, and your complete oral healthcare journey.
          </p>

          <div className="register-features">

            <div className="register-feature">
              <FaCheckCircle />
              <span>Book Appointments Online</span>
            </div>

            <div className="register-feature">
              <FaCheckCircle />
              <span>Access Dental Records</span>
            </div>

            <div className="register-feature">
              <FaCheckCircle />
              <span>Secure Patient Dashboard</span>
            </div>

            <div className="register-feature">
              <FaCheckCircle />
              <span>Instant Appointment Updates</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="register-right">

          <div className="register-card">

            <h2>Create Account</h2>

            <p>
              Fill in your details below to create your SmileCraft account.
            </p>

            <form
              className="register-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label>Full Name</label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Confirm Password</label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

              </div>

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="register-btn"
                disabled={loading}
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

            </form>

            <div className="register-footer">

              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Register;