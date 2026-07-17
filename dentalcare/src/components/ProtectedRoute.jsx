import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRole }) {

  const { user } = useContext(AuthContext);

  const location = useLocation();

  // User not logged in
  if (!user) {

    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );

  }

  // Wrong role
  if (
    allowedRole &&
    user.role !== allowedRole
  ) {

    return <Navigate to="/" replace />;

  }

  return children;

}

export default ProtectedRoute;