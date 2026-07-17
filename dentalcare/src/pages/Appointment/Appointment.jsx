import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { createAppointment } from "../../api/appointmentApi";

import "./Appointment.css";

function Appointment() {

  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    fullName: user?.fullName || "",

    email: user?.email || "",

    age: "",

    gender: "",

    phone: "",

    service: "",

    doctor: "",

    date: "",

    time: "",

    message: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await createAppointment({

        fullName: formData.fullName,

        email: formData.email,

        age: formData.age,

        gender: formData.gender,

        phone: formData.phone,

        doctor: formData.doctor,

        treatment: formData.service,

        appointmentDate: formData.date,

        appointmentTime: formData.time,

        message: formData.message,

      });

      alert("Appointment Booked Successfully!");

      setFormData({

        fullName: user.fullName,

        email: user.email,

        age: "",

        gender: "",

        phone: "",

        service: "",

        doctor: "",

        date: "",

        time: "",

        message: "",

      });

    } catch (error) {

      alert(

        error.response?.data?.message ||

        "Failed to book appointment."

      );

    } finally {

      setLoading(false);

    }

  };
    return (

    <div className="appointment-page">

      {/* Hero */}

      <section className="appointment-hero">

        <div className="appointment-container">

          <h1>Book an Appointment</h1>

          <div className="appointment-line"></div>

          <p>

            Schedule your visit with our experienced dentists in just a few
            simple steps.

          </p>

        </div>

      </section>

      {/* Form */}

      <section className="appointment-section">

        <div className="appointment-container">

          <div className="form-card">

            <h2>Appointment Form</h2>

            <form
              className="appointment-form"
              onSubmit={handleSubmit}
            >

              {/* Name & Email */}

              <div className="row">

                <div className="form-group">

                  <label>Full Name</label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    readOnly
                  />

                </div>

                <div className="form-group">

                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    readOnly
                  />

                </div>

              </div>

              {/* Age & Gender */}

              <div className="row">

                <div className="form-group">

                  <label>Age</label>

                  <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Gender</label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >

                    <option value="">Select Gender</option>

                    <option value="Male">Male</option>

                    <option value="Female">Female</option>

                    <option value="Other">Other</option>

                  </select>

                </div>

              </div>

              {/* Phone & Treatment */}

              <div className="row">

                <div className="form-group">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Treatment</label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">Select Treatment</option>

                    <option>Dental Cleaning</option>

                    <option>Root Canal</option>

                    <option>Dental Implant</option>

                    <option>Tooth Extraction</option>

                    <option>Teeth Whitening</option>

                    <option>Braces & Aligners</option>

                    <option>Dental Filling</option>

                    <option>Smile Makeover</option>

                  </select>

                </div>

              </div>

              {/* Doctor & Date */}

              <div className="row">

                <div className="form-group">

                  <label>Select Doctor</label>

                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >

                    <option value="">Select Doctor</option>

                    <option>Dr. Sarah Johnson</option>

                    <option>Dr. James Wilson</option>

                    <option>Dr. Emily Brown</option>

                    <option>Dr. Michael Smith</option>

                  </select>

                </div>

                <div className="form-group">

                  <label>Appointment Date</label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>              {/* Time & Notes */}

              <div className="row">

                <div className="form-group">

                  <label>Select Time</label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >

                    <option value="">Select Time</option>

                    <option>09:00 AM</option>

                    <option>09:30 AM</option>

                    <option>10:00 AM</option>

                    <option>10:30 AM</option>

                    <option>11:00 AM</option>

                    <option>11:30 AM</option>

                    <option>12:00 PM</option>

                    <option>01:00 PM</option>

                    <option>02:00 PM</option>

                    <option>02:30 PM</option>

                    <option>03:00 PM</option>

                    <option>03:30 PM</option>

                    <option>04:00 PM</option>

                    <option>04:30 PM</option>

                    <option>05:00 PM</option>

                  </select>

                </div>

                <div className="form-group">

                  <label>Additional Notes</label>

                  <textarea

                    rows="5"

                    name="message"

                    placeholder="Describe your dental problem or write any additional notes..."

                    value={formData.message}

                    onChange={handleChange}

                  ></textarea>

                </div>

              </div>

              {/* Submit Button */}

              <button

                type="submit"

                className="submit-btn"

                disabled={loading}

              >

                {

                  loading

                    ? "Booking Appointment..."

                    : "Confirm Appointment"

                }

              </button>

            </form>

          </div>

        </div>

      </section>

    </div>

  );

}

export default Appointment;