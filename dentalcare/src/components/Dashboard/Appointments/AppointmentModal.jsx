import {
  FaTimes,
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaTooth,
  FaStickyNote,
} from "react-icons/fa";

function AppointmentModal({ appointment, onClose }) {
  if (!appointment) return null;

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status pending";
      case "Confirmed":
        return "status confirmed";
      case "Completed":
        return "status completed";
      case "Cancelled":
        return "status cancelled";
      default:
        return "status";
    }
  };

  return (
    <div className="modal-overlay">

      <div className="appointment-modal">

        {/* Header */}

        <div className="modal-header">

          <h2>Appointment Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}

        <div className="modal-body">

          <div className="detail-row">

            <FaTooth className="detail-icon" />

            <div>
              <h4>Service</h4>
              <p>{appointment.service}</p>
            </div>

          </div>

          <div className="detail-row">

            <FaUserMd className="detail-icon" />

            <div>
              <h4>Doctor</h4>
              <p>{appointment.doctor}</p>
            </div>

          </div>

          <div className="detail-row">

            <FaCalendarAlt className="detail-icon" />

            <div>
              <h4>Date</h4>
              <p>{appointment.date}</p>
            </div>

          </div>

          <div className="detail-row">

            <FaClock className="detail-icon" />

            <div>
              <h4>Time</h4>
              <p>{appointment.time}</p>
            </div>

          </div>

          <div className="detail-row">

            <FaStickyNote className="detail-icon" />

            <div>
              <h4>Notes</h4>
              <p>{appointment.notes}</p>
            </div>

          </div>

          <div className="status-wrapper">

            <span className={getStatusClass(appointment.status)}>
              {appointment.status}
            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="modal-footer">

          <button
            className="close-modal-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default AppointmentModal;