export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img
                src={movie.show.image?.medium}
                alt={movie.show.name}
            />

            <div className="movie-content">
                <h5>{movie.show.name}</h5>

                <p>
                    Rating:
                    {" "}
                    {movie.show.rating.average || "N/A"}
                </p>

                <p>
                    Premiered:
                    {" "}
                    {movie.show.premiered}
                </p>
            </div>
        </div>
    );
}