import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PatientDashboard.css";

import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHome from "../../components/Dashboard/DashboardHome/DashboardHome";

// (We'll create these components in the next steps)
import Appointments from "../../components/Dashboard/Appointments/Appointments";
import Profile from "../../components/Dashboard/Profile/Profile";
import Settings from "../../components/Dashboard/Settings/Settings";
import { AuthContext } from "../../Context/AuthContext";

function PatientDashboard() {

  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const [activePage, setActivePage] = useState("dashboard");

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (

    <div className="patient-dashboard">

      {/* Sidebar */}

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        user={user}
        handleLogout={handleLogout}
      />
<main className="dashboard-content">

  {activePage === "dashboard" && (
    <DashboardHome user={user} />
  )}

  {activePage === "appointments" && (
    <Appointments />
  )}

  {activePage === "profile" && (
    <Profile user={user} />
  )}

  {activePage === "settings" && (
    <Settings />
  )}

</main>

    </div>

  );

}

export default PatientDashboard;