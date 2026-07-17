import "./Services.css";
import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaUserMd,
  FaNotesMedical,
  FaArrowRight,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const services = [
  {
    icon: <FaTooth />,
    title: "Teeth Cleaning",
    description:
      "Professional cleaning to remove plaque, tartar, and stains while maintaining healthy teeth and gums.",
  },
  {
    icon: <FaSmile />,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with advanced cosmetic whitening treatments that are safe and effective.",
  },
  {
    icon: <FaUserMd />,
    title: "Root Canal",
    description:
      "Pain-free root canal treatment using modern dental technology to save damaged teeth.",
  },
  {
    icon: <FaTeeth />,
    title: "Dental Implants",
    description:
      "Permanent and natural-looking replacement for missing teeth with durable implants.",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Braces & Aligners",
    description:
      "Straighten your teeth comfortably with modern braces and clear aligner solutions.",
  },
  {
    icon: <FaNotesMedical />,
    title: "Dental Check-up",
    description:
      "Routine dental examinations and preventive care for long-lasting oral health.",
  },
];

function Services() {
  return (
    <section className="services">

      <div className="services__container">

        {/* Heading */}

        <div className="services__heading">

          <span className="services__subtitle">
            Our Treatments
          </span>

          <h2>
            Complete Dental Care Services
          </h2>

          <p>
            We provide comprehensive dental treatments using advanced
            technology, experienced specialists, and personalized care
            to keep your smile healthy and beautiful.
          </p>

        </div>

        {/* Services Grid */}

        <div className="services__grid">

          {services.map((service, index) => (

            <div
              className="services__card"
              key={index}
            >

              <div className="services__icon">
                {service.icon}
              </div>

              <h3 className="services__title">
                {service.title}
              </h3>

              <p className="services__text">
                {service.description}
              </p>

              
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;