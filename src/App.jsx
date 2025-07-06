import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Summary from "./components/Summary";
import TechnicalSkills from "./components/TechnicalSkills";
import Responsibilities from "./components/Responsibilities";
import Expertise from "./components/Expertise";
import WorkExperience from "./components/WorkExperience";
import Others from "./components/Others";
import Qualification from "./components/Qualification";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border border-blue-800 rounded-md">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center p-3 bg-[#001d3d] text-left text-white font-semibold hover:bg-[#002244] transition"
    >
      <span>{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-300" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-300" />
      )}
    </button>
    {isOpen && (
      <div className="bg-[#000814]/90 text-gray-200 p-4 border-t border-blue-700">
        {children}
      </div>
    )}
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "summary":
        return <Summary />;
      case "skills":
        return <TechnicalSkills />;
      case "responsibilities":
        return <Responsibilities />;
      case "expertise":
        return <Expertise />;
      case "experience":
        return <WorkExperience />;
      case "others":
        return <Others />;
      case "qualification":
        return <Qualification />;
      case "contact":
        return <ContactForm />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-gray-100 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow bg-[#001d3d]/90 backdrop-blur-sm border-b border-blue-900 text-white rounded-b-xl">
        <button
          onClick={() => {
            setActiveSection("");
            setMobileOpen("home");
            window.scrollTo({ top: 0, behavior: "smooth" }); // optional
          }}
          className="flex items-center space-x-4 group focus:outline-none"
          title="Go to Home"
        >
          <img
            src="/me1.png"
            alt="Bhaskar"
            className="h-12 w-12 rounded-full cursor-pointer border group-hover:scale-105 transition"
          />
          <h1 className="text-xl cursor-pointer font-bold group-hover:text-red-400 transition">
            Bhaskar Banerjee
          </h1>
        </button>

        <nav className="space-x-4 text-sm font-semibold hidden md:flex">
          <h2>My Projects:-</h2>
          <a href="#react" className="hover:text-blue-400 transition">
            React.js
          </a>
          <a href="#node" className="hover:text-blue-400 transition">
            Node.js
          </a>
          <a href="#mongo" className="hover:text-blue-400 transition">
            MongoDB
          </a>
        </nav>
      </header>

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar for Desktop */}
        <aside className="hidden md:block w-60 bg-[#000814]/90 backdrop-blur border-r border-blue-900 text-gray-200 p-4 shadow-md rounded-r-2xl">
          {/* <nav className="flex flex-col space-y-3 text-sm font-medium">
            <button
              onClick={() => setActiveSection("")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection("summary")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Summary
            </button>
            <button
              onClick={() => setActiveSection("skills")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveSection("responsibilities")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Responsibilities
            </button>
            <button
              onClick={() => setActiveSection("expertise")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Expertise
            </button>
            <button
              onClick={() => setActiveSection("experience")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveSection("others")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Others
            </button>
            <button
              onClick={() => setActiveSection("qualification")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Qualification
            </button>
            <a
              href="/docs/CV.pdf"
              download
              className="hover:text-blue-400 text-left"
            >
              Download CV
            </a>
            <button
              onClick={() => setActiveSection("contact")}
              className="text-left hover:text-[#ff4d4f]"
            >
              Contact Me
            </button>
          </nav> */}
          <nav className="flex flex-col space-y-3 text-sm font-medium">
  <button
    onClick={() => setActiveSection("")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Home
  </button>
  <button
    onClick={() => setActiveSection("summary")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "summary" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Summary
  </button>
  <button
    onClick={() => setActiveSection("skills")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "skills" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Technical Skills
  </button>
  <button
    onClick={() => setActiveSection("responsibilities")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "responsibilities" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Responsibilities
  </button>
  <button
    onClick={() => setActiveSection("expertise")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "expertise" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Expertise
  </button>
  <button
    onClick={() => setActiveSection("experience")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "experience" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Work Experience
  </button>
  <button
    onClick={() => setActiveSection("others")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "others" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Others
  </button>
  <button
    onClick={() => setActiveSection("qualification")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "qualification" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Qualification
  </button>
  <a
    href="/docs/CV.pdf"
    download
    className="px-3 py-1 rounded hover:text-blue-400 text-left transition"
  >
    Download CV
  </a>
  <button
    onClick={() => setActiveSection("contact")}
    className={`text-left px-3 py-1 rounded transition ${
      activeSection === "contact" ? "bg-white text-black font-bold shadow" : "hover:text-[#ff4d4f]"
    }`}
  >
    Contact Me
  </button>
</nav>

        </aside>

        {/* Main Content for Desktop */}
        <main className="hidden md:block flex-1 p-6 overflow-y-auto">
          {renderSection()}
        </main>

        {/* Accordion View for Mobile */}
        <div className="md:hidden w-full p-4 space-y-4">
          <AccordionItem
            title="Home"
            isOpen={mobileOpen === "home"}
            onClick={() => setMobileOpen("home")}
          >
            <Home />
          </AccordionItem>
          <AccordionItem
            title="Summary"
            isOpen={mobileOpen === "summary"}
            onClick={() => setMobileOpen("summary")}
          >
            <Summary />
          </AccordionItem>
          <AccordionItem
            title="Technical Skills"
            isOpen={mobileOpen === "skills"}
            onClick={() => setMobileOpen("skills")}
          >
            <TechnicalSkills />
          </AccordionItem>
          <AccordionItem
            title="Responsibilities"
            isOpen={mobileOpen === "responsibilities"}
            onClick={() => setMobileOpen("responsibilities")}
          >
            <Responsibilities />
          </AccordionItem>
          <AccordionItem
            title="Expertise"
            isOpen={mobileOpen === "expertise"}
            onClick={() => setMobileOpen("expertise")}
          >
            <Expertise />
          </AccordionItem>
          <AccordionItem
            title="Work Experience"
            isOpen={mobileOpen === "experience"}
            onClick={() => setMobileOpen("experience")}
          >
            <WorkExperience />
          </AccordionItem>
          <AccordionItem
            title="Others"
            isOpen={mobileOpen === "others"}
            onClick={() => setMobileOpen("others")}
          >
            <Others />
          </AccordionItem>
          <AccordionItem
            title="Qualification"
            isOpen={mobileOpen === "qualification"}
            onClick={() => setMobileOpen("qualification")}
          >
            <Qualification />
          </AccordionItem>
          <AccordionItem
            title="Contact Me"
            isOpen={mobileOpen === "contact"}
            onClick={() => setMobileOpen("contact")}
          >
            <ContactForm />
          </AccordionItem>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
