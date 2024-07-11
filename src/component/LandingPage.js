import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {
  const horses = [
    { name: 'Horse 1', image: 'horse.jpg' },
    { name: 'Horse 2', image: 'horse2.jpg' },
    { name: 'Horse 3', image: 'horse3.jpg' },
    { name: 'Horse 4', image: 'horse4.jpg' },
  ];

  const horseStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    transition: 'transform 0.3s ease',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
  };

  const horseImgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  const linkStyle = {
    display: 'block',
    backgroundColor: '#5f9ea0',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#4682b4',
  };

  return (
    <div className="container">
      <header  className="header">
        <h1>Horse Ride Booking System</h1>
      </header>
      <div className="horses" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {horses.map(horse => (
          <div key={horse.name} style={horseStyle}>
            <img src={horse.image} alt={horse.name} style={horseImgStyle} />
            <h2>{horse.name}</h2>
            <Link to="/booking" style={linkStyle}>Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
