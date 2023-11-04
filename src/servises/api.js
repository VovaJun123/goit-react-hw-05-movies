import axios from "axios";

const baseURL = 'https://api.themoviedb.org';
const API_KEY = 'bd6023ae3d7655a9ba206f8d576c79ae';

export const fetchTrendMovies = async () => {
    const { data } = await axios.get(`${baseURL}/3/trending/movie/day?api_key=${API_KEY}`);

    return data;
};

export const fetchMovieByName = async query => {
    const { data } = await axios.get(
        `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    return data;
};

export const fetchMovieById = async movieId => {
    const { data } = await axios.get(
        `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return data;
};


export const fetchMovieCast = async movieId => {
    const { data } = await axios.get(
        `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
};

export const fetchMovieReviews = async movieId => {
    const { data } = await axios.get(
        `${baseURL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    return data;
};