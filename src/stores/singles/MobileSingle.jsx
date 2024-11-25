import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const MobileSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = mobileData.find((item) => item.id === id);

  const [selectedOption, setSelectedOption] = useState('');

  const handleAddToCart = () => {
    addToCart({ ...product, selectedOption });
    alert('Added to the cart successfully!');
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '2rem',
          padding: '2rem',
        }}
      >
        {/* Product Image */}
        <div style={{ flex: '1', maxWidth: '400px' }}>
          <img
            src={product.image}
            alt={product.model}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        {/* Product Details */}
        <div
          style={{
            flex: '1',
            maxWidth: '500px',
            padding: '1rem',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{ margin: '0', color: '#333' }}>{product.company}</h2>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ margin: '0', color: '#555' }}>{product.model}</h3>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{ margin: '0', color: '#007bff' }}>₹{product.price}</h2>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ margin: '0', color: '#666' }}>{product.description}</p>
          </div>

          {/* Dropdown for selecting RAM and storage */}
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="options"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#444',
              }}
            >
              Choose RAM and Storage:
            </label>
            <select
              id="options"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '5px',
                border: '1px solid #ddd',
                fontSize: '1rem',
              }}
            >
              <option value="" disabled>
                Select an option
              </option>
              {product.options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            disabled={!selectedOption} // Disable button until an option is selected
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSingle;
