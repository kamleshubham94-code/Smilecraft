import "./CTA.css";
import { Link } from "react-router-dom";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";

function CTA() {
  return (
    <section className="cta">

      <div className="cta__container">

        <div className="cta__card">

          {/* Left Side */}

          <div className="cta__content">

            <span className="cta__badge">
              <FaCalendarCheck />
              Book Your Visit Today
            </span>

            <h2 className="cta__title">
              Ready For A Healthier &
              <br />
              Brighter Smile?
            </h2>

            <p className="cta__text">
              Schedule your appointment with our experienced dentists
              and enjoy comfortable, affordable, and high-quality dental
              care using the latest technology.
            </p>

            <div className="cta__actions">

              <Link
                to="/appointment"
                className="cta__btn cta__btn-primary"
              >
                Book Appointment
              </Link>

              <Link
                to="/contact"
                className="cta__btn cta__btn-secondary"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="cta__aside">

            <div className="cta__aside-card">

              <FaCalendarCheck
                style={{
                  fontSize: "70px",
                  marginBottom: "20px",
                }}
              />

              <h3>Same Day</h3>

              <p>
                Appointments Available
              </p>

              <hr
                style={{
                  margin: "25px 0",
                  opacity: ".25",
                }}
              />

              <FaPhoneAlt
                style={{
                  fontSize: "35px",
                  marginBottom: "15px",
                }}
              />

              <h4>Emergency Care</h4>

              <p>
                +91 98765 43210
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;