import "./DashboardHome.css";

import {
    FaCalendarAlt,
    FaUserMd,
    FaClipboardCheck,
    FaSmile,
} from "react-icons/fa";

function DashboardHome({ user }) {

    return (

        <div className="dashboard-home">

            {/* Welcome */}

            <div className="welcome-card">

                <h1>

                    Welcome back,
                    {user?.fullName}

                    👋

                </h1>

                <p>

                    Manage your appointments,
                    profile and dental care
                    from one place.

                </p>

            </div>

            {/* Stats */}

            <div className="stats-grid">

                <div className="stat-card">

                    <div className="stat-icon">

                        <FaCalendarAlt />

                    </div>

                    <h2>3</h2>

                    <p>

                        Upcoming Appointments

                    </p>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">

                        <FaClipboardCheck />

                    </div>

                    <h2>8</h2>

                    <p>

                        Completed Visits

                    </p>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">

                        <FaUserMd />

                    </div>

                    <h2>2</h2>

                    <p>

                        Assigned Doctors

                    </p>

                </div>

                <div className="stat-card">

                    <div className="stat-icon">

                        <FaSmile />

                    </div>

                    <h2>98%</h2>

                    <p>

                        Oral Health Score

                    </p>

                </div>

            </div>

            {/* Bottom */}

            <div className="dashboard-grid">

                <div className="dashboard-card">

                    <h3>

                        Next Appointment

                    </h3>

                    <div className="appointment-box">

                        <h4>

                            Teeth Cleaning

                        </h4>

                        <p>

                            📅 25 July 2026

                        </p>

                        <p>

                            🕒 10:30 AM

                        </p>

                        <p>

                            👨‍⚕️ Dr. Sarah Johnson

                        </p>

                    </div>

                </div>

                <div className="dashboard-card">

                    <h3>

                        Quick Actions

                    </h3>

                    <div className="quick-actions">

                        <button className="quick-btn">

                            Book Appointment

                        </button>

                        <button className="quick-btn">

                            View Appointments

                        </button>

                        <button className="quick-btn">

                            Update Profile

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DashboardHome;