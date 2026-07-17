import { useEffect, useState } from "react";
import "./Patients.css";

import {
  FaSearch,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import {
  getPatients,
  deletePatient,
} from "../../../api/patientApi";

function Patients() {

  const [patients, setPatients] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedPatient, setSelectedPatient] =
    useState(null);

  useEffect(() => {

    fetchPatients();

  }, []);

  const fetchPatients = async () => {

    try {

      const res = await getPatients();

      setPatients(res.data.patients);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this patient?"
    );

    if (!confirmDelete) return;

    try {

      await deletePatient(id);

      fetchPatients();

    } catch (error) {

      console.log(error);

    }

  };

  const filteredPatients = patients.filter((patient) => {

    const value = search.toLowerCase();

    return (

      patient.fullName
        ?.toLowerCase()
        .includes(value)

      ||

      patient.email
        ?.toLowerCase()
        .includes(value)

      ||

      patient.phone
        ?.toLowerCase()
        .includes(value)

    );

  });

  if (loading) {

    return (

      <div className="patients-page">

        <h2>Loading Patients...</h2>

      </div>

    );

  }

  return (

    <div className="patients-page">

      {/* Header */}

      <div className="patients-header">

        <div>

          <h2>Patients</h2>

          <p>

            Manage all registered patients.

          </p>

        </div>

      </div>

      {/* Search */}

      <div className="patient-toolbar">

        <div className="search-box">

          <FaSearch />

          <input

            type="text"

            placeholder="Search patient..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

          />

        </div>

      </div>

      {/* Table */}

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Role</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>            {filteredPatients.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="no-data"
                >

                  No Patients Found

                </td>

              </tr>

            ) : (

              filteredPatients.map((patient) => (

                <tr key={patient._id}>

                  <td>{patient.fullName}</td>

                  <td>{patient.email}</td>

                  <td>

                    {patient.phone || "Not Available"}

                  </td>

                  <td>

                    <span className="role-badge">

                      {patient.role}

                    </span>

                  </td>

                  <td className="actions">

                    <button

                      className="view-btn"

                      title="View Patient"

                      onClick={() =>
                        setSelectedPatient(patient)
                      }

                    >

                      <FaEye />

                    </button>

                    <button

                      className="delete-btn"

                      title="Delete Patient"

                      onClick={() =>
                        handleDelete(patient._id)
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

      {/* Patient Details Modal */}

      {

        selectedPatient && (

          <div
            className="patient-modal"
            onClick={() =>
              setSelectedPatient(null)
            }
          >

            <div
              className="patient-modal-content"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <h2>

                Patient Details

              </h2>

              <div className="patient-details">

                <p>

                  <strong>Full Name:</strong>

                  {selectedPatient.fullName}

                </p>

                <p>

                  <strong>Email:</strong>

                  {selectedPatient.email}

                </p>

                <p>

                  <strong>Phone:</strong>

                  {

                    selectedPatient.phone ||

                    "Not Available"

                  }

                </p>

                <p>

                  <strong>Role:</strong>

                  {selectedPatient.role}

                </p>

                <p>

                  <strong>Verified:</strong>

                  {

                    selectedPatient.isVerified

                      ? "Yes"

                      : "No"

                  }

                </p>

                <p>

                  <strong>Joined On:</strong>

                  {

                    new Date(

                      selectedPatient.createdAt

                    ).toLocaleDateString()

                  }

                </p>

              </div>

              <button

                className="close-btn"

                onClick={() =>
                  setSelectedPatient(null)
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

export default Patients;