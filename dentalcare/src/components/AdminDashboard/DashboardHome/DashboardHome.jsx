import { useEffect, useState } from "react";
import "./DashboardHome.css";

import {
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaUserCheck,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { getDashboardStats } from "../../../api/dashboardApi";

function DashboardHome() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({

    totalPatients: 0,

    totalAppointments: 0,

    todayAppointments: 0,

    pendingAppointments: 0,

    recentAppointments: [],

  });

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await getDashboardStats();

      setStats({

        totalPatients: res.data.totalPatients,

        totalAppointments: res.data.totalAppointments,

        todayAppointments: res.data.todayAppointments,

        pendingAppointments: res.data.pendingAppointments,

        recentAppointments: res.data.recentAppointments,

      });

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="admin-home">

        <h2>Loading Dashboard...</h2>

      </div>

    );

  }

  return (

    <div className="admin-home">

      {/* Welcome */}

      <div className="welcome-card">

        <h1>Welcome, Admin 👋</h1>

        <p>

          Manage patients, appointments and monitor clinic activities from one place.

        </p>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon patients">

            <FaUsers />

          </div>

          <div>

            <h2>{stats.totalPatients}</h2>

            <p>Total Patients</p>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon appointments">

            <FaCalendarAlt />

          </div>

          <div>

            <h2>{stats.totalAppointments}</h2>

            <p>Total Appointments</p>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon today">

            <FaClock />

          </div>

          <div>

            <h2>{stats.todayAppointments}</h2>

            <p>Today's Appointments</p>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon pending">

            <FaUserCheck />

          </div>

          <div>

            <h2>{stats.pendingAppointments}</h2>

            <p>Pending Requests</p>

          </div>

        </div>

      </div>

      {/* Bottom Grid */}

      <div className="admin-grid">

        {/* Recent Appointments */}

        <div className="dashboard-card">

          <h3>Recent Appointments</h3>

          <table>

            <thead>

              <tr>

                <th>Patient</th>

                <th>Doctor</th>

                <th>Treatment</th>

                <th>Date</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {

                stats.recentAppointments.length > 0 ? (

                  stats.recentAppointments.map((item) => (

                    <tr key={item._id}>

                      <td>{item.fullName}</td>

                      <td>{item.doctor}</td>

                      <td>{item.treatment}</td>

                      <td>

                        {

                          new Date(

                            item.appointmentDate

                          ).toLocaleDateString()

                        }

                      </td>

                      <td>

                        <span
                          className={`status ${item.status.toLowerCase()}`}
                        >

                          {item.status}

                        </span>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="5"
                      style={{ textAlign: "center" }}
                    >

                      No Appointments Found

                    </td>

                  </tr>

                )

              }

            </tbody>

          </table>

        </div>

        {/* Quick Actions 

<div className="dashboard-card">

  <h3>Quick Actions</h3>

  <div className="quick-actions">

    <button
      onClick={() =>
        navigate("/admin-dashboard/patients")
      }
    >
      👥 View Patients
    </button>

    <button
      onClick={() =>
        navigate("/admin-dashboard/appointments")
      }
    >
      📅 Manage Appointments
    </button>

    <button
      onClick={() =>
        navigate("/admin-dashboard/settings")
      }
    >
      ⚙ Settings
    </button>

    <button
      onClick={() =>
        navigate("/")
      }
    >
      🏠 Visit Website
    </button>

  </div>

</div>   */}

      </div>

    </div>

  );

}

export default DashboardHome;