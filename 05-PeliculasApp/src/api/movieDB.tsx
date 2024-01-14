import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'cac5e47f91389d1644a8da650c02bfc5',
        language: 'es_ES'
    }
});

export default movieDB;