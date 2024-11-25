import React, { useState } from 'react';
import { watchData } from '../data/watch';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const WatchPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? watchData
      : watchData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start', // Align both sections without space
          padding: '20px',
          backgroundColor: '#f5f5f5', // Overall page background color (light gray)
        }}
      >
        {/* Filters Section (on the left) */}
        <div
          style={{
            width: '250px',
            padding: '20px',
            backgroundColor: '#fff', // White background for the filter section
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            marginRight: '30px', // Space between filter and product section
          }}
        >
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '15px',
              color: '#333',
            }}
          >
            Filter by Brand
          </h3>

          {watchData.map((watch) => {
            return (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '10px',
                }}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(watch.brand)}
                    onChange={() => companyHandler(watch.brand)}
                  />
                  {watch.brand}
                </label>
              </div>
            );
          })}
        </div>

        {/* Watches Items Section (on the right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
            padding: '20px 0',
            backgroundColor: '#f5f5f5',
            flex: 1,
          }}
        >
          {filteredProduct.map((item) => {
            return (
              <div
                style={{
                  backgroundColor: '#fff', // White background for each product card
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  padding: '10px',
                }}
              >
                <Link to={`/watch/${item.id}`}>
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'default', // No cursor change over the image
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        objectFit: 'contain',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        backgroundColor: 'transparent',
                      }}
                    />
                  </div>
                </Link>
                <div
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#333',
                    textAlign: 'center',
                    backgroundColor: '#f9f9f9',
                    marginTop: '10px',
                  }}
                >
                  {item.brand}, {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WatchPage;
