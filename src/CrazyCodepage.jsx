import React from 'react';
import './CrazyCodePage.css'; // Import the CSS file

const CrazyCodePage = () => {
  const handleMouseMove = (e) => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;
  };

  return (
    <div className="crazy-page-container">
      <div className="crazy-page" onMouseMove={handleMouseMove}>
        <h1>Welcome to the BookStore Page!</h1>
        <p>"Bookstores are literary sanctuaries that ignite imagination, inspire discovery, and foster a sense of community."</p>
        <div className="crazy-element" />
      </div>
    </div>
  );
};

export default CrazyCodePage;
