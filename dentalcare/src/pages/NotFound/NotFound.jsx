import "./NotFound.css";
import { Link } from "react-router-dom";
import { FaTooth } from "react-icons/fa";

function NotFound() {
  return (
    <div className="notfound-page min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 via-white to-orange-50">

      <div className="text-center">

        <div className="flex justify-center">

          <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">

            <FaTooth className="text-5xl text-green-700" />

          </div>

        </div>

        <h1 className="text-8xl font-bold text-orange-500 mt-8">
          404
        </h1>

        <h2 className="text-4xl font-bold text-slate-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-600 mt-6 max-w-lg mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;