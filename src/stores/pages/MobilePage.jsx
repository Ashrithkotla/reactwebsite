import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
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
      ? mobileData
      : mobileData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start', // Changed to 'flex-start' to align both sections without space
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
            marginRight: '30px', // Removed margin to have no gap
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
            Filter by Company
          </h3>

          {mobileData.map((phone) => {
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
                    checked={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                  />
                  {phone.company}
                </label>
              </div>
            );
          })}
        </div>

        {/* Mobile Items Section (on the right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            width: '100%',
            maxWidth: '1200px',
            padding: '20px 0',
            backgroundColor: '#f5f5f5', // Keep the overall background light gray for the mobile items section
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
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  padding: '10px',
                }}
              >
                <Link to={`/mobiles/${item.id}`}>
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.model}
                      style={{
                        objectFit: 'contain',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        backgroundColor: 'transparent', // Remove background color from the image
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
                  {item.company}, {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobilePage;
