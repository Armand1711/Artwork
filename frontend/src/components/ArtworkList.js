// src/components/ArtworkList.js
import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './ArtworkList.css';

const ArtworkList = () => {
  const { addItemToCart } = useCart();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        if (!response.ok) {
          throw new Error('Failed to fetch artworks');
        }
        const data = await response.json();
        setArtworks(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artworks:', error);
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="artwork-page">
      <h1>Artworks</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="artwork-container">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card">
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
                className="artwork-image"
              />
              <div className="artwork-details">
                <h2>{artwork.title}</h2>
                <p>{artwork.artist_title}</p>
                <p>Price: {convertToZAR(artwork.price)}</p>
                <button onClick={() => addItemToCart(artwork)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const convertToZAR = (price) => {
  if (!price || isNaN(price)) {
    return 'Price not available'; 
  }
  
  const exchangeRate = 14.62; 
  const priceInZAR = price * exchangeRate;
  return `ZAR ${priceInZAR.toFixed(2)}`; 
};

export default ArtworkList;
