import React from 'react';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';

const Kitchen = () => {
  const firstFiveImages = kitchenData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h2>Kitchen</h2>
      </div>
      <div
        className="proSection"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center',
        }}
      >
        {firstFiveImages.map((item) => {
          return (
            <div
              key={item.id}
              className="imgBox"
              style={{
                width: 'calc(20% - 15px)',
                marginBottom: '15px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
            >
              <Link
                to={`/kitchen/${item.id}`}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  height: '100%',
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

export default Kitchen;
