// src/components/ArtworkList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ArtworkList.css';

function ArtworkList() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_display')
      .then(response => {
        setArtworks(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching the artworks', error);
      });
  }, []);

  return (
    <div className="artwork-list">
      {artworks.map(artwork => (
        <div key={artwork.id} className="artwork">
          <h3>{artwork.title}</h3>
          {artwork.image_id && (
            <img 
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`} 
              alt={artwork.title} 
            />
          )}
          <p>{artwork.artist_display}</p>
        </div>
      ))}
    </div>
  );
}

export default ArtworkList;
