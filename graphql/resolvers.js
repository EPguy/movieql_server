import { people, getById } from './db';
import axios from 'axios';

const reslovers = {
    Query: {
        people: () => people,
        person: (_,{ id }) => getById(id)
    }
};

export default reslovers;