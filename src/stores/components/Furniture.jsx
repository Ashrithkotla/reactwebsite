import React from 'react';
import { furnitureData } from '../data/furniture';
import { Link } from 'react-router-dom';

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0, 5); // Get first 5 furniture items

  return (
    <>
      <div className="proTitle">
        <h2>Furniture</h2>
      </div>
      <div
        className="proSection"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px', // Small gap between items
          justifyContent: 'center',
        }}
      >
        {firstFiveImages.map((item) => {
          return (
            <div
              key={item.id}
              className="imgBox"
              style={{
                width: 'calc(20% - 15px)', // Each item takes 20% width of the row
                marginBottom: '15px', // Margin between rows
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for a neat effect
                borderRadius: '8px', // Rounded corners for the image box
                overflow: 'hidden', // Ensure image is contained within the rounded box
                transition: 'transform 0.3s ease', // Smooth transition for hover effect
              }}
            >
              <Link
                to={`/furniture/${item.id}`}
                style={{
                  textDecoration: 'none', // Remove underline from link
                  display: 'block', // Make entire box clickable
                  height: '100%', // Ensure full height is clickable
                }}
              >
                <img
                  className="proImage"
                  src={item.image}
                  alt={item.model}
                  style={{
                    width: '100%', // Ensure the image takes full width
                    height: 'auto', // Maintain aspect ratio of the image
                    borderRadius: '8px', // Rounded corners on the image
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

export default Furniture;
