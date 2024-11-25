import React, { useEffect } from 'react';
import { womanData } from '../data/woman';
import { Link } from 'react-router-dom';

const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5); // Get first 5 products

  // Apply transparent background to the body when the component mounts
  useEffect(() => {
    document.body.style.backgroundColor = 'transparent';

    // Clean up and reset when the component unmounts
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default when the component is unmounted
    };
  }, []);

  return (
    <>
      <div className="proTitle">
        <h2>Woman Dressing</h2>
      </div>
      <div
        className="proSection"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px', // Small gap between images
          justifyContent: 'center',
        }}
      >
        {firstFiveImages.map((item) => {
          return (
            <div
              key={item.id}
              className="imgBox"
              style={{
                width: 'calc(20% - 15px)', // Adjust width for 5 items in a row (100% / 5 = 20%)
                marginBottom: '15px', // Small margin between rows
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
                borderRadius: '8px', // Rounded corners
                overflow: 'hidden', // To ensure image and text are contained
                transition: 'transform 0.3s ease', // Smooth transition for hover effect
                backgroundColor: 'transparent', // Transparent background
              }}
            >
              <Link
                to={`/woman/${item.id}`}
                style={{
                  textDecoration: 'none',
                  display: 'block', // Make the entire box clickable
                  height: '100%', // Ensure full height is clickable
                }}
              >
                <img
                  className="proImage"
                  src={item.image}
                  alt={item.model}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
                <h3
                  style={{
                    fontSize: '14px',
                    marginTop: '10px',
                    color: '#333',
                  }}
                >
                  {item.brand} {item.model}
                </h3>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#888',
                  }}
                >
                  ₹{item.price}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Woman;
