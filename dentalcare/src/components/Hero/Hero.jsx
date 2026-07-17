import "./Hero.css";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaUserMd,
  FaAward,
} from "react-icons/fa";

import dentist from "../../assets/images/dentist.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero__inner">

        <div className="hero__grid">

          {/* Left Content */}

          <div className="hero__content">

            <span className="hero__badge">
              ✨ Trusted Dental Clinic
            </span>

            <h1 className="hero__heading">
              Your Smile,
              <br />
              <span>Our Priority</span>
            </h1>

            <p className="hero__text">
              We provide premium dental care with experienced dentists,
              modern technology, and personalized treatments to help you
              achieve a healthy and confident smile.
            </p>

            <div className="hero__features">

              <div className="feature">
                <FaCheckCircle />
                <span>Pain-Free Treatment</span>
              </div>

              <div className="feature">
                <FaCheckCircle />
                <span>Experienced Dentists</span>
              </div>

              <div className="feature">
                <FaCheckCircle />
                <span>Modern Equipment</span>
              </div>

            </div>

            <div className="hero__actions">

              <Link
                to="/appointment"
                className="hero__btn hero__btn-primary"
              >
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="hero__btn hero__btn-outline"
              >
                Our Services
              </Link>

            </div>
            
           </div>

          </div>

          {/* Right Side */}

          <div className="hero__illustration">

            <div className="hero__blob"></div>

            <img
              src={dentist}
              alt="Dentist"
              className="hero__image"
            />

          
        </div>

      </div>

    </section>
  );
}

export default Hero;