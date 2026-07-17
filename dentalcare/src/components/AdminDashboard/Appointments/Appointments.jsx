import { useEffect, useState } from "react";
import "./Appointments.css";

import {
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import {
  getAppointments,
  updateStatus,
  deleteAppointment,
} from "../../../api/adminAppointmentApi";

function Appointments() {

  const [appointments, setAppointments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedAppointment, setSelectedAppointment] =
    useState(null);

  useEffect(() => {

    fetchAppointments();

  }, []);

  const fetchAppointments = async () => {

    try {

      const res = await getAppointments();

      setAppointments(res.data.appointments);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  const handleStatusUpdate = async (id, status) => {

    try {

      await updateStatus(id, status);

      fetchAppointments();

    } catch (err) {

      console.log(err);

    }

  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) return;

    try {

      await deleteAppointment(id);

      fetchAppointments();

    } catch (err) {

      console.log(err);

    }

  };

  const filteredAppointments = appointments.filter((item) => {

    const searchText = search.toLowerCase();

    return (

      item.fullName?.toLowerCase().includes(searchText) ||

      item.doctor?.toLowerCase().includes(searchText) ||

      item.treatment?.toLowerCase().includes(searchText)

    );

  });

  if (loading) {

    return (

      <div className="admin-appointments">

        <h2>Loading Appointments...</h2>

      </div>

    );

  }

  return (

    <div className="admin-appointments">

      <div className="appointments-header">

        <div>

          <h2>Appointments</h2>

          <p>

            Manage all patient appointments.

          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="appointment-stats">

        <div className="appointment-stat">

          <h3>{appointments.length}</h3>

          <span>Total</span>

        </div>

        <div className="appointment-stat">

          <h3>

            {

              appointments.filter(

                item => item.status === "Pending"

              ).length

            }

          </h3>

          <span>Pending</span>

        </div>

        <div className="appointment-stat">

          <h3>

            {

              appointments.filter(

                item => item.status === "Approved"

              ).length

            }

          </h3>

          <span>Approved</span>

        </div>

        <div className="appointment-stat">

          <h3>

            {

              appointments.filter(

                item => item.status === "Completed"

              ).length

            }

          </h3>

          <span>Completed</span>

        </div>

      </div>

      {/* Search */}

      <div className="toolbar">

        <div className="search-box">

          <FaSearch />

          <input

            type="text"

            placeholder="Search patient, doctor or treatment..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

          />

        </div>

      </div>

      {/* Table */}

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>

              <th>Patient</th>

              <th>Treatment</th>

              <th>Doctor</th>

              <th>Date</th>

              <th>Time</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>            {filteredAppointments.length === 0 ? (

              <tr>

                <td colSpan="7" className="no-data">

                  No appointments found.

                </td>

              </tr>

            ) : (

              filteredAppointments.map((item) => (

                <tr key={item._id}>

                  <td>{item.fullName}</td>

                  <td>{item.treatment}</td>

                  <td>{item.doctor}</td>

                  <td>

                    {new Date(
                      item.appointmentDate
                    ).toLocaleDateString()}

                  </td>

                  <td>

                    {item.appointmentTime}

                  </td>

                  <td>

                    <span
                      className={`status ${item.status.toLowerCase()}`}
                    >

                      {item.status}

                    </span>

                  </td>

                  <td className="actions">

                    <button
                      className="view-btn"
                      title="View Details"
                      onClick={() =>
                        setSelectedAppointment(item)
                      }
                    >

                      <FaEye />

                    </button>

                    {

                      item.status !== "Approved" && (

                        <button
                          className="approve-btn"
                          title="Approve"
                          onClick={() =>
                            handleStatusUpdate(
                              item._id,
                              "Approved"
                            )
                          }
                        >

                          <FaCheckCircle />

                        </button>

                      )

                    }

                    {

                      item.status !== "Completed" && (

                        <button
                          className="complete-btn"
                          title="Complete"
                          onClick={() =>
                            handleStatusUpdate(
                              item._id,
                              "Completed"
                            )
                          }
                        >

                          ✓

                        </button>

                      )

                    }

                    {

                      item.status !== "Cancelled" && (

                        <button
                          className="cancel-btn"
                          title="Cancel"
                          onClick={() =>
                            handleStatusUpdate(
                              item._id,
                              "Cancelled"
                            )
                          }
                        >

                          <FaTimesCircle />

                        </button>

                      )

                    }

                    <button
                      className="delete-btn"
                      title="Delete"
                      onClick={() =>
                        handleDelete(item._id)
                      }
                    >

                      <FaTrash />

                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

      {/* Appointment Details Modal */}

      {

        selectedAppointment && (

          <div
            className="appointment-modal"
            onClick={() =>
              setSelectedAppointment(null)
            }
          >

            <div
              className="appointment-modal-content"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <h2>

                Appointment Details

              </h2>

              <div className="details-grid">

                <p>

                  <strong>Patient :</strong>

                  {selectedAppointment.fullName}

                </p>

                <p>

                  <strong>Email :</strong>

                  {selectedAppointment.email}

                </p>

                <p>

                  <strong>Phone :</strong>

                  {selectedAppointment.phone}

                </p>

                <p>

                  <strong>Age :</strong>

                  {selectedAppointment.age}

                </p>

                <p>

                  <strong>Gender :</strong>

                  {selectedAppointment.gender}

                </p>

                <p>

                  <strong>Doctor :</strong>

                  {selectedAppointment.doctor}

                </p>

                <p>

                  <strong>Treatment :</strong>

                  {selectedAppointment.treatment}

                </p>

                <p>

                  <strong>Date :</strong>

                  {new Date(
                    selectedAppointment.appointmentDate
                  ).toLocaleDateString()}

                </p>

                <p>

                  <strong>Time :</strong>

                  {selectedAppointment.appointmentTime}

                </p>

                <p>

                  <strong>Status :</strong>

                  {selectedAppointment.status}

                </p>

                <p>

                  <strong>Notes :</strong>

                  {selectedAppointment.message ||
                    "No notes added."}

                </p>

              </div>

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedAppointment(null)
                }
              >

                Close

              </button>

            </div>

          </div>

        )

      }

    </div>

  );

}

export default Appointments;