import "./MissionVision.css";
import {
  FaBullseye,
  FaEye,
  FaHeart,
} from "react-icons/fa";

function MissionVision() {
  return (
    <section className="mission">

      <div className="mission__container">

        {/* Heading */}

        <div className="mission__heading">

          <h2>Our Mission & Vision</h2>

          <div className="mission__divider"></div>

          <p>
            We believe every patient deserves exceptional dental care in a
            comfortable, modern, and friendly environment where their oral
            health always comes first.
          </p>

        </div>

        {/* Cards */}

        <div className="mission__grid">

          {/* Mission */}

          <div className="mission__card">

            <div className="mission__icon green">

              <FaBullseye />

            </div>

            <h3>Our Mission</h3>

            <p>
              To provide high-quality, affordable dental care using advanced
              technology while ensuring every patient feels comfortable,
              confident, and cared for throughout their treatment journey.
            </p>

          </div>

          {/* Vision */}

          <div className="mission__card">

            <div className="mission__icon orange">

              <FaEye />

            </div>

            <h3>Our Vision</h3>

            <p>
              To become the most trusted dental clinic by delivering
              exceptional oral healthcare with compassion, innovation,
              professionalism, and long-term patient relationships.
            </p>

          </div>

          {/* Values */}

          <div className="mission__card">

            <div className="mission__icon green">

              <FaHeart />

            </div>

            <h3>Our Values</h3>

            <p>
              Integrity, patient care, innovation, teamwork, safety,
              excellence, and continuous improvement guide everything we do
              to create confident and healthy smiles.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;