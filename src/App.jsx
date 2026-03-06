import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ExpandReach from "./components/ExpandReach";
import Misions from "./components/Misions";
import BeforeServecis from "./components/BeforeServecis";
import Vision from "./components/Vision";
import Core from "./components/Core";
import Advantage from "./components/Advantage";
import Comitment from "./components/Comitment";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Vision */}
      <div id="vision">
        <Vision />
      </div>

      {/* Mission */}
      <div id="mission">
        <Misions />
      </div>

      {/* Core Values */}
      <div id="core">
        <Core />
      </div>

      {/* Before Services */}
      <div id="before">
        <BeforeServecis />
      </div>

      {/* Services */}
      <div id="services">
        <Services />
      </div>

      {/* Advantage */}
      <div id="advantage">
        <Advantage />
      </div>

      {/* Commitment */}
      <div id="commitment">
        <Comitment />
      </div>

      {/* Contact */}
      <div id="contact">
        <Contact />
      </div>

      {/* CTA Section */}
      <ExpandReach />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
