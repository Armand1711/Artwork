// components/ArtworkList.js
import React, { useState, useEffect } from 'react';
import './ArtworkList.css'; 
import axios from 'axios';

const ArtworkList = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await axios.get('https://api.artic.edu/api/v1/artworks');
                setArtworks(response.data.data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };
        fetchArtworks();
    }, []);

    return (
        <div>
            <h2>Artwork List</h2>
            <ul>
                {artworks.map(artwork => (
                    <li key={artwork.id}>
                        <h3>{artwork.title}</h3>
                        <p>{artwork.artist_display}</p>
                        {/* Add other artwork details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArtworkList;
