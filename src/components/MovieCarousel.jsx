import MovieCard from "./MovieCard";

export default function MovieCarousel({ movies }) {
    return (
        <div className="carousel-wrapper">
            {
                movies.map((movie) => (
                    <MovieCard
                        key={movie.show.id}
                        movie={movie}
                    />
                ))
            }
        </div>
    );
}