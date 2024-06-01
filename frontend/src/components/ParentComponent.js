import React, { useState, useEffect } from 'react';
import ArtworkList from './ArtworkList';

const ParentComponent = () => {
  // State to store artworks and loading status
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch artworks from the API
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('https://api.example.com/artworks');
        if (!response.ok) {
          throw new Error('Failed to fetch artworks');
        }
        const data = await response.json();
        setArtworks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artworks:', error);
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []); // Empty dependency array to fetch data only once

  return (
    <div>
      <h1>Artwork List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ArtworkList artworks={artworks} />
      )}
    </div>
  );
};

export default ParentComponent;
