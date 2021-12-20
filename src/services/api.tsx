import axios from 'axios';

export const coinApi = axios.create({
    baseURL: 'https://coinranking1.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'ff3a1cd0f7msh2d6a18d1ec5f9f9p1d7d43jsn3f84ed2849b7'
    }
})