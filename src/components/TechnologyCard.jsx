function TechnologyCard({ name, description }) {
  return (
    <div className="technology-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TechnologyCard;