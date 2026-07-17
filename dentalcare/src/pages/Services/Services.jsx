import "./Services.css";
import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaUserMd,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTooth />,
    title: "Teeth Cleaning",
    duration: "30 - 45 Minutes",
    description:
      "Professional cleaning removes plaque, tartar, and stains while improving overall oral hygiene.",
  },
  {
    icon: <FaSmile />,
    title: "Teeth Whitening",
    duration: "45 - 60 Minutes",
    description:
      "Safe cosmetic whitening treatment that gives you a brighter and more confident smile.",
  },
  {
    icon: <FaTeeth />,
    title: "Dental Implants",
    duration: "2 - 3 Visits",
    description:
      "Permanent replacement for missing teeth using advanced implant technology.",
  },
  {
    icon: <FaUserMd />,
    title: "Root Canal Treatment",
    duration: "60 - 90 Minutes",
    description:
      "Pain-free treatment to save infected teeth and eliminate discomfort.",
  },
];

function Services() {
  return (
    <div className="services-page">

      {/* Hero Section */}

      <section className="services-hero">

        <div className="services-container services-header">

          <h1>Our Dental Services</h1>

          <div className="services-line"></div>

          <p>
            We provide a complete range of modern dental treatments
            designed to keep your smile healthy, beautiful, and confident.
          </p>

        </div>

      </section>

      {/* Services Section */}

      <section className="services-section">

        <div className="services-container">

          <div className="services-grid">

            {services.map((service, index) => (

              <div
                key={index}
                className="service-card"
              >

                {/* Card Top */}

                <div className="service-top">

                  <div className="service-icon">

                    {service.icon}

                  </div>

                  <h2>{service.title}</h2>

                  <p className="duration">
                    Duration: {service.duration}
                  </p>

                </div>

                {/* Card Body */}

                <div className="service-body">

                  <p>
                    {service.description}
                  </p>

                  <div className="features">

                    <div>✔ Modern Equipment</div>

                    <div>✔ Experienced Dentists</div>

                    <div>✔ Comfortable Treatment</div>

                  </div>

                  <button className="book-btn">

                    Book Appointment

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Services;