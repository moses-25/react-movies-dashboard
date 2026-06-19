// Import the react hooks
import { useEffect, useState } from "react";
// import the API connection
import { searchShows } from "../api/tvmaze";
// import the components
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import MovieCarousel from "../components/MovieCarousel";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Dashboard() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("marvel");

    const fetchMovies = async (query) => {
        try {
            setLoading(true);
            setError("");

            const data = await searchShows(query);

            setMovies(data);
        } catch {
            setError("Failed to load data.");
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        fetchMovies(searchTerm);
    };

    useEffect(() => { 
        fetchMovies("marvel");
    }, []);

    return (

        <div className="container py-5">
            <Hero />

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
            />

            {
                loading && <LoadingSpinner /> 
            }

            {
                error && <ErrorMessage message={error}/>
            }

            {
                !loading && !error && ( <MovieCarousel movies={movies}/> )
            }

        </div>
    );
}