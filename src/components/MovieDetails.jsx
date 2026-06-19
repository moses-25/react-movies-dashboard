import { useNavigate } from "react-router-dom";

function MovieDetails({ movie }) {
    const navigate = useNavigate();

    if (!movie) {
        return (
            <div className="container py-5">
                <h2>Loading movie...</h2>
            </div>
        );
    }

    return (
        <div className="details-page">
            <button
                className="btn btn-dark mb-4"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <div className="details-card">
                <div className="details-poster">
                    <img
                        src={
                            movie.image?.original ||
                            movie.image?.medium
                        }
                        alt={movie.name}
                    />
                </div>

                <div className="details-info">
                    <h1>{movie.name}</h1>

                    <div className="genre-list">
                        {movie.genres?.map(
                            (genre) => (
                                <span
                                    key={genre}
                                    className="genre-badge"
                                >
                                    {genre}
                                </span>
                            )
                        )}
                    </div>

                    <p>
                        <strong>Rating:</strong>
                        {" "}
                        {movie.rating?.average ??
                            "N/A"}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        {" "}
                        {movie.status}
                    </p>

                    <p>
                        <strong>Premiered:</strong>
                        {" "}
                        {movie.premiered}
                    </p>

                    <p>
                        <strong>Language:</strong>
                        {" "}
                        {movie.language}
                    </p>

                    <p>
                        <strong>Type:</strong>
                        {" "}
                        {movie.type}
                    </p>

                    <div
                        className="movie-summary"
                        dangerouslySetInnerHTML={{
                            __html:
                                movie.summary ||
                                "<p>No summary available.</p>"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;