import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.10.23:3333" // Muda de acordo com o que aparecer no expo.
});

export default api;