function TechnologyCard({ name, description, icon: Icon }) {
  return (
    <div className="card h-100 text-center p-3 border-0 shadow-sm technology-card">
      {Icon && <Icon className="technology-icon mb-2" />}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default TechnologyCard;