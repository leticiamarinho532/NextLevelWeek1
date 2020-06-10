import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://192.168.2.7:3333'
});

export default backend;