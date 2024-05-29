// services/artworkService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/artworks';

const fetchArtworks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default { fetchArtworks };
