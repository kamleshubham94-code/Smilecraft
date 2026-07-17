import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaTooth,
  FaEye,
  FaTimesCircle,
} from "react-icons/fa";

function AppointmentCard({ appointment, onView }) {
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
    <div className="appointment-card">

      {/* Left */}

      <div className="appointment-left">

        <div className="appointment-icon">
          <FaTooth />
        </div>

        <div className="appointment-info">

          <h3>{appointment.service}</h3>

          <div className="appointment-details">

            <p>
              <FaUserMd />
              {appointment.doctor}
            </p>

            <p>
              <FaCalendarAlt />
              {appointment.date}
            </p>

            <p>
              <FaClock />
              {appointment.time}
            </p>

          </div>

          <p className="appointment-notes">
            {appointment.notes}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="appointment-right">

        <span className={getStatusClass(appointment.status)}>
          {appointment.status}
        </span>

        <div className="appointment-actions">

          <button
            className="view-btn"
            onClick={onView}
          >
            <FaEye />
            View
          </button>

          {appointment.status !== "Completed" &&
            appointment.status !== "Cancelled" && (
              <button className="cancel-btn">
                <FaTimesCircle />
                Cancel
              </button>
            )}

        </div>

      </div>

    </div>
  );
}

export default AppointmentCard;