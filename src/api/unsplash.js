import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qjMW-osIn_-PKf2nCzjx5_A-vyvTvRa11GRt4XpXHhg'
    }
});