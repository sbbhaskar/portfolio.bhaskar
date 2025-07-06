import React from "react";
import {
  Code2,
  Braces,
  Server,
  Database,
  Cloud,
  GitBranch
} from "lucide-react";

const TechnicalSkills = () => {
  return (
    <section id="skills" className="p-4 text-white space-y-6">
      {/* Main Heading */}
      <h2 className="text-2xl font-bold flex items-center gap-2 text-red-400">
        <Code2 className="w-6 h-6" />
        Technical Skills
      </h2>

      {/* Front-End */}
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-300">
          <Braces className="w-5 h-5" />
          Front-End
        </h3>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          <li>HTML5, CSS3, Flexbox, Grid</li>
          <li>JavaScript (ES6+), React.js, Redux, React Router</li>
          <li>Tailwind CSS, Bootstrap</li>
        </ul>
      </div>

      {/* Back-End */}
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 text-green-300">
          <Server className="w-5 h-5" />
          Back-End
        </h3>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          <li>Node.js, Express.js, REST APIs, Middleware</li>
        </ul>
      </div>

      {/* Database */}
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 text-yellow-300">
          <Database className="w-5 h-5" />
          Database
        </h3>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          <li>MongoDB, MongoDB Atlas, Compass</li>
        </ul>
      </div>

      {/* Tools & Deployment */}
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 text-purple-300">
          <Cloud className="w-5 h-5" />
          Tools & Deployment
        </h3>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          <li>Git & GitHub, Netlify, Vercel, Render</li>
        </ul>
      </div>
    </section>
  );
};

export default TechnicalSkills;
