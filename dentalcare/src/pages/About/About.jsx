import "./About.css";
import MissionVision from "../../components/About/MissionVision";
import aboutImage from "../../assets/images/about.jpg";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}

      <section className="about-hero">

        <div className="about-container">

          <h1>About Our Clinic</h1>

          <div className="about-line"></div>

          <p>
            We are dedicated to providing high-quality dental care with
            experienced professionals, advanced technology, and
            compassionate treatment for every patient.
          </p>

        </div>

      </section>

      {/* About Content */}

      <section className="about-section">

        <div className="about-content">

          {/* Image */}

          <div className="about-image">

            <img
              src={aboutImage}
              alt="Dental Clinic"
            />

          </div>

          {/* Text */}

          <div className="about-text">

            <h2>
              Welcome to SmileCraft Dental Clinic
            </h2>

            <div className="about-line-small"></div>

            <p>

              SmileCraft Dental Clinic provides complete dental
              treatments for children and adults. Our experienced
              dentists use advanced equipment to ensure safe,
              comfortable, and pain-free procedures.

            </p>

            <p>

              Whether you need a routine check-up, cosmetic dentistry,
              dental implants, or emergency care, our team is committed
              to helping you achieve a healthy and confident smile.

            </p>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <MissionVision />

    </div>
  );
}

export default About;