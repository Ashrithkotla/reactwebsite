import React, { useEffect } from 'react';
import { mobileData } from '../data/mobiles';
import { Link } from 'react-router-dom';

const Mobiles = () => {
  // Select the first 7 items to display
  const firstSevenImages = mobileData.slice(0, 7);

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
        <h2>Mobiles</h2>
      </div>
      <div
        className="proSection"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px', // Reduced gap for smaller distance
          justifyContent: 'center',
        }}
      >
        {firstSevenImages.map((item) => {
          return (
            <div
              key={item.id}
              className="imgBox"
              style={{
                width: 'calc(14.28% - 15px)', // Adjust width for gap
                marginBottom: '15px', // Ensure small space between rows
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
                borderRadius: '8px', // Rounded corners
                overflow: 'hidden', // To ensure image and text are contained
                transition: 'transform 0.3s ease', // Smooth transition for hover effect
                backgroundColor: 'transparent', // Set background to transparent
              }}
            >
              <Link
                to={`/mobiles/${item.id}`}
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
                  {item.company} {item.model}
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

export default Mobiles;
