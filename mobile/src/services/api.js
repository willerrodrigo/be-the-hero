import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.0.105:3333" // Muda de acordo com o que aparecer no expo.
});

export default api;