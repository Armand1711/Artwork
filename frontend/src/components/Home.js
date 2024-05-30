// src/components/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then(response => response.json())
      .then(data => {
        setArtworks(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching artworks:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to the Art Shop</h1>
        <p>Discover and purchase beautiful artworks from our collection.</p>
      </div>
      <div className="home-content">
        <div className="featured-artworks">
          <h2>Featured Artworks</h2>
          <div className="artwork-cards">
            {artworks.slice(0, 3).map(artwork => (
              <div key={artwork.id} className="artwork-card">
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                  alt={artwork.title}
                />
                <p>{artwork.title}</p>
                <p>{artwork.artist_title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to our Art Shop! We offer a wide range of beautiful artworks
            from various artists around the world. Browse our collection and
            find the perfect piece for your home or office.
          </p>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to reach
            out to us at{' '}
            <a href="mailto:support@artshop.com">support@artshop.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
