import { useEffect, useState } from "react";

import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaSearch,
  FaEye,
  FaTimesCircle,
} from "react-icons/fa";

import {
  getMyAppointments,
} from "../../../api/appointmentApi";

import "./Appointments.css";

function Appointments() {

  const [appointments, setAppointments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [selectedAppointment, setSelectedAppointment] =
    useState(null);

  useEffect(() => {

    fetchAppointments();

  }, []);

  const fetchAppointments = async () => {

    try {

      const res = await getMyAppointments();

      setAppointments(res.data.appointments);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const filteredAppointments =
    appointments.filter((item) => {

      const searchValue = search.toLowerCase();

      const matchSearch =

        item.treatment
          ?.toLowerCase()
          .includes(searchValue)

        ||

        item.doctor
          ?.toLowerCase()
          .includes(searchValue);

      const matchFilter =

        filter === "All"

          ? true

          : item.status === filter;

      return matchSearch && matchFilter;

    });

  if (loading) {

    return (

      <div className="appointments-page">

        <h2>Loading Appointments...</h2>

      </div>

    );

  }  return (

    <div className="appointments-page">

      {/* Header */}

      <div className="appointments-header">

        <div>

          <h2>My Appointments</h2>

          <p>

            View and manage all your dental appointments.

          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="appointment-stats">

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

        <div className="appointment-stat">

          <h3>

            {

              appointments.filter(

                item => item.status === "Cancelled"

              ).length

            }

          </h3>

          <span>Cancelled</span>

        </div>

      </div>

      {/* Toolbar */}

      <div className="appointment-toolbar">

        <div className="search-box">

          <FaSearch />

          <input

            type="text"

            placeholder="Search doctor or treatment..."

            value={search}

            onChange={(e) =>

              setSearch(e.target.value)

            }

          />

        </div>

        <select

          value={filter}

          onChange={(e) =>

            setFilter(e.target.value)

          }

        >

          <option>All</option>

          <option>Pending</option>

          <option>Approved</option>

          <option>Completed</option>

          <option>Cancelled</option>

        </select>

      </div>

      {/* Appointment Cards */}

      <div className="appointment-list">

        {

          filteredAppointments.length === 0 ?

          (

            <div className="no-appointments">

              <h3>

                No Appointments Found

              </h3>

              <p>

                Book your first appointment to see it here.

              </p>

            </div>

          )

          :

          filteredAppointments.map((item) => (            <div
              key={item._id}
              className="appointment-card"
            >

              <div className="appointment-left">

                <h3>

                  {item.treatment}

                </h3>

                <p>

                  <FaUserMd />

                  <span>{item.doctor}</span>

                </p>

                <p>

                  <FaCalendarAlt />

                  <span>

                    {new Date(
                      item.appointmentDate
                    ).toLocaleDateString()}

                  </span>

                </p>

                <p>

                  <FaClock />

                  <span>

                    {item.appointmentTime}

                  </span>

                </p>

              </div>

              <div className="appointment-right">

                <span
                  className={`status ${item.status.toLowerCase()}`}
                >

                  {item.status}

                </span>

                <button
                  className="view-btn"
                  onClick={() =>
                    setSelectedAppointment(item)
                  }
                >

                  <FaEye />

                  View Details

                </button>

                {

                  item.status === "Pending" && (

                    <button
                      className="cancel-btn"
                    >

                      <FaTimesCircle />

                      Cancel

                    </button>

                  )

                }

              </div>

            </div>

          ))

        }

      </div>      {

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

                  <strong>Treatment:</strong>

                  {selectedAppointment.treatment}

                </p>

                <p>

                  <strong>Doctor:</strong>

                  {selectedAppointment.doctor}

                </p>

                <p>

                  <strong>Date:</strong>

                  {new Date(
                    selectedAppointment.appointmentDate
                  ).toLocaleDateString()}

                </p>

                <p>

                  <strong>Time:</strong>

                  {selectedAppointment.appointmentTime}

                </p>

                <p>

                  <strong>Status:</strong>

                  {selectedAppointment.status}

                </p>

                <p>

                  <strong>Phone:</strong>

                  {selectedAppointment.phone}

                </p>

                <p>

                  <strong>Email:</strong>

                  {selectedAppointment.email}

                </p>

                <p>

                  <strong>Age:</strong>

                  {selectedAppointment.age}

                </p>

                <p>

                  <strong>Gender:</strong>

                  {selectedAppointment.gender}

                </p>

                <p>

                  <strong>Notes:</strong>

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