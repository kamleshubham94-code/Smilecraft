import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <main className="contact-page">

      {/* Hero Section */}

      <section className="contact-hero">

        <div className="contact-container">

          <div className="contact-header">

            <h1>Contact Us</h1>

            <div className="contact-line"></div>

            <p>
              We'd love to hear from you. Book an appointment or visit our
              clinic for expert dental care and a healthier smile.
            </p>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-grid">

            {/* Left */}

            <div className="contact-info">

              <h2>Get In Touch</h2>

              <p className="contact-description">
                Contact us for appointments, emergency dental care,
                or any questions regarding our treatments.
              </p>

              <div className="contact-items">

                <div className="contact-item">

                  <div className="contact-icon green">
                    <FaMapMarkerAlt />
                  </div>

                  <div className="contact-details">

                    <h3>Address</h3>

                    <p>
                      123 Dental Street
                      <br />
                      Hyderabad, Telangana
                    </p>

                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-icon orange">
                    <FaPhoneAlt />
                  </div>

                  <div className="contact-details">

                    <h3>Phone</h3>

                    <p>+91 98765 43210</p>

                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-icon green">
                    <FaEnvelope />
                  </div>

                  <div className="contact-details">

                    <h3>Email</h3>

                    <p>info@smilecraft.com</p>

                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-icon orange">
                    <FaClock />
                  </div>

                  <div className="contact-details">

                    <h3>Working Hours</h3>

                    <p>
                      Monday – Saturday
                      <br />
                      9:00 AM – 8:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="contact-form">

              <h2>Send a Message</h2>

              <form>

                <div className="form-group">

                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                  />

                </div>

                <div className="form-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                  />

                </div>

                <div className="form-group">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                  />

                </div>

                <div className="form-group">

                  <label>Your Message</label>

                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="contact-btn"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Map */}

      <section className="map-section">

        <div className="contact-container">

          <div className="map">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;