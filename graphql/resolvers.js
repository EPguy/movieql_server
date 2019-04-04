import { getMovies } from './db';
import axios from 'axios';

const reslovers = {
    Query: {
        movies: (_,{rating, limit}) => getMovies(limit, rating),
    },
};

export default reslovers;