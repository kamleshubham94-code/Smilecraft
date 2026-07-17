import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTooth,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer__container">

        {/* ================= Left ================= */}

        <div className="footer__section">

          <div className="footer__brand">

            <div className="footer__logo">

              <FaTooth />

            </div>

            <div>

              <h2>SmileCraft</h2>

              <span>Dental Clinic</span>

            </div>

          </div>

          <p className="footer__description">

            We provide affordable and modern
            dental care using advanced technology,
            experienced doctors and personalized
            treatment plans.

          </p>

          <div className="footer__social">

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>

            <a href="/">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* ================= Links ================= */}

        <div className="footer__section">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>About</li>

            <li>Services</li>

            <li>Appointment</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* ================= Services ================= */}

        <div className="footer__section">

          <h3>Services</h3>

          <ul>

            <li>Teeth Cleaning</li>

            <li>Dental Implant</li>

            <li>Root Canal</li>

            <li>Braces</li>

            <li>Whitening</li>

          </ul>

        </div>

        {/* ================= Contact ================= */}

        <div className="footer__section">

          <h3>Contact</h3>

          <div className="footer__contact">

            <p>

              <FaMapMarkerAlt />

              Hyderabad, Telangana

            </p>

            <p>

              <FaPhoneAlt />

              +91 98765 43210

            </p>

            <p>

              <FaEnvelope />

              info@smilecraft.com

            </p>

          </div>

        </div>

      </div>

      <div className="footer__bottom">

        <p>

          © 2026 SmileCraft Dental Clinic.
          All Rights Reserved.

        </p>

        <p>

          Designed with ❤️ using React

        </p>

      </div>

    </footer>

  );

}

export default Footer;