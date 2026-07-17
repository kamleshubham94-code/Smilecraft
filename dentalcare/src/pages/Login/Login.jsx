import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  FaUserCircle,
  FaCheckCircle,
} from "react-icons/fa";

import "./Login.css";
import { loginUser } from "../../api/authApi";

function Login() {

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.email || !formData.password) {

      setError("Please fill all fields.");

      return;

    }

    try {

      setLoading(true);

      const response = await loginUser(formData);

      // Save JWT

      login(
  response.data.token,
  response.data.user
);

      alert(response.data.message);

      // Redirect

      // Redirect based on role

const user = response.data.user;

if (user.role === "admin") {

  navigate("/admin-dashboard", {
    replace: true,
  });

} else {

  const from =
    location.state?.from?.pathname ||
    "/patient-dashboard";

  navigate(from, {
    replace: true,
  });

}

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login Failed."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <main className="login-page">

      <div className="login-container">

        {/* LEFT */}

        <div className="login-left">

          <div className="login-logo">

            <FaUserCircle />

          </div>

          <h1>Welcome Back!</h1>

          <p>

            Login to access your appointments,
            dental reports and secure dashboard.

          </p>

          <div className="login-features">

            <div className="login-feature">

              <FaCheckCircle />

              <span>Book Appointments</span>

            </div>

            <div className="login-feature">

              <FaCheckCircle />

              <span>Dental Records</span>

            </div>

            <div className="login-feature">

              <FaCheckCircle />

              <span>Secure Dashboard</span>

            </div>

            <div className="login-feature">

              <FaCheckCircle />

              <span>24×7 Access</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <div className="auth-card">

            <h2>Login</h2>

            <p>

              Sign in to your SmileCraft account.

            </p>

            <form
              className="auth-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label>Email</label>

                <input

                  type="email"

                  name="email"

                  placeholder="Enter your email"

                  value={formData.email}

                  onChange={handleChange}

                />

              </div>

              <div className="form-group">

                <label>Password</label>

                <input

                  type="password"

                  name="password"

                  placeholder="Enter your password"

                  value={formData.password}

                  onChange={handleChange}

                />

              </div>

              {error && (

                <div className="error-message">

                  {error}

                </div>

              )}

              <div className="auth-options">

                <label>

                  <input type="checkbox" />

                  Remember Me

                </label>

                <Link to="/forgot-password">

                  Forgot Password?

                </Link>

              </div>

              <button
                type="submit"
                className="login-btn"
                disabled={loading}
              >

                {

                  loading

                    ? "Logging In..."

                    : "Login"

                }

              </button>

            </form>

            <div className="auth-footer">

              Don't have an account?

              <Link to="/register">

                Register

              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}

export default Login;