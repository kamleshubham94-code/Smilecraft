import { useState } from "react";
import "./AdminDashboard.css";

import Sidebar from "../../components/AdminDashboard/Sidebar/Sidebar";
import DashboardHome from "../../components/AdminDashboard/DashboardHome/DashboardHome";
import Patients from "../../components/AdminDashboard/Patients/Patients";
import Appointments from "../../components/AdminDashboard/Appointments/Appointments";
import Settings from "../../components/AdminDashboard/Settings/Settings";

function AdminDashboard() {

    const [activePage, setActivePage] =
        useState("dashboard");

    return (

        <div className="admin-dashboard">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />

            <main className="admin-content">

                {activePage === "dashboard" &&
                    <DashboardHome />
                }

                {activePage === "patients" &&
                    <Patients />
                }

                {activePage === "appointments" &&
                    <Appointments />
                }

                {activePage === "settings" &&
                    <Settings />
                }

            </main>

        </div>

    );

}

export default AdminDashboard;