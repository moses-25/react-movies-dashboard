import TechnologyCard from "../components/TechnologyCard";

function AboutPage() {
  const technologies = [
    {
      name: "React",
      description: "JavaScript library for building user interfaces."
    },
    {
      name: "React Router",
      description: "Provides navigation between pages."
    },
    {
      name: "Axios",
      description: "Makes HTTP requests to APIs."
    },
    {
      name: "Bootstrap",
      description: "Responsive CSS framework."
    },
    {
      name: "TVMaze API",
      description: "Provides TV show information."
    }
  ];

  return (
    <div className="container mt-4">
      <h1>About React Movies Dashboard</h1>

      <p>
        This application allows users to search and discover TV shows
        using data from the TVMaze API.
      </p>

      <div className="technology-grid">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            name={tech.name}
            description={tech.description}
          />
        ))}
      </div>
      
    </div>
  );
}

export default AboutPage;