import { Link } from "react-router-dom";
import { FaReact, FaRoute, FaCloud, FaBootstrap, FaTv } from "react-icons/fa";
import "../styles/Aboutpage.css";
import TechnologyCard from "../components/TechnologyCard";

function AboutPage() {
  const technologies = [
    {
      name: "React",
      description: "JavaScript library for building user interfaces.",
      icon: FaReact
    },
    {
      name: "React Router",
      description: "Provides navigation between pages.",
      icon: FaRoute
    },
    {
      name: "Axios",
      description: "Makes HTTP requests to APIs.",
      icon: FaCloud
    },
    {
      name: "Bootstrap",
      description: "Responsive CSS framework.",
      icon: FaBootstrap
    },
    {
      name: "TVMaze API",
      description: "Provides TV show information.",
      icon: FaTv
    }
  ];

  return (
    <div className="container mt-4">
      <h1>About React Movies Dashboard</h1>

      <p>
        This application allows users to search and discover TV shows
        using data from the TVMaze API.
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
        {technologies.map((tech, index) => (
          <div className="col" key={index}>
            <TechnologyCard
              name={tech.name}
              description={tech.description}
              icon={tech.icon}
            />
          </div>
        ))}
      </div>

      <Link to="/" className="btn btn-primary mt-3">&#8592; Back to Home</Link>
    </div>
  );
}

export default AboutPage;