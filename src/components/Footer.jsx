import React from "react";

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="bg-[#001d3d]/90 backdrop-blur p-4 border-t border-blue-900 text-xs text-center text-gray-300 rounded-t-xl">
      <div className="space-y-1">
        <p>
          <button
            onClick={() => setActiveSection("contact")}
            className="text-white hover:underline font-semibold cursor-pointer"
          >
            Bhaskar Banerjee
          </button>{" "}
          | MERN Stack Developer
        </p>
        <p>Mobile: +91-8130639920 | Address: Noida, Uttar Pradesh</p>
        <p>
          <a
            href="https://linkedin.com/in/bhaskarbanerjee-developer"
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/sbbhaskar"
            className="text-white hover:underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
