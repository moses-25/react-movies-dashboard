// Import the React modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Import the API connection
import { getShowById } from "../api/tvmaze";
// Import the components
import MovieDetails from "../components/MovieDetails";
import LoadingSpinner from "../components/LoadingSpinner";

export default function DetailsPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { loadMovie(); }, []);

    const loadMovie = async () => {
        const data = await getShowById(id);
        setMovie(data);
        setLoading(false);
    };

    if (loading) {
        return ( 
            <LoadingSpinner />
        );
    }

    return ( 
        <MovieDetails movie={movie} />
    );
}