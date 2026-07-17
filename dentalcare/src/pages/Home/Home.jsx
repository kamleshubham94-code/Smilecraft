import "./Home.css";

import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import CTA from "../../components/CTA/CTA";

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="home-section">
        <Hero />
      </section>

      {/* Services Section */}
      <section className="home-section">
        <Services />
      </section>

      {/* Call To Action */}
      <section className="home-section">
        <CTA />
      </section>

    </main>
  );
}

export default Home;