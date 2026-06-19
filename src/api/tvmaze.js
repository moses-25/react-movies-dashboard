import axios from "axios";

const API_URL = "https://api.tvmaze.com/search/shows";

export const searchShows = async (query) => {
    const response = await axios.get(`${API_URL}?q=${query}`);
    return response.data;
};