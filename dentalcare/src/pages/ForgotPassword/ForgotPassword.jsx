import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

function ForgotPassword() {
  return (
    <div className="forgot-password-page min-h-screen bg-gradient-to-r from-green-50 via-white to-orange-50 flex items-center justify-center px-6">

      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10">

        <div className="flex justify-center">

          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">

            <FaEnvelope className="text-3xl text-green-700" />

          </div>

        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800 mt-8">
          Forgot Password
        </h1>

        <p className="text-center text-slate-500 mt-4">
          Enter your registered email address and we'll send you a password reset link.
        </p>

        <form className="mt-8">

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full border rounded-xl p-4 outline-none focus:border-green-600"
          />

          <button
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition"
          >
            Send Reset Link
          </button>

        </form>

        <p className="text-center mt-8">

          <Link
            to="/login"
            className="text-green-700 font-semibold"
          >
            ← Back to Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;