import React, { useState } from 'react';
import { womanData } from '../data/woman';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const WomanSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = womanData.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart');
      return;
    }
    addToCart({ ...product, size: selectedSize });
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
          gap: '1rem', // Reduced gap for better proximity
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
            maxWidth: '400px',
            padding: '1rem',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{ margin: '0', color: '#333' }}>{product.brand}</h2>
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

          {/* Dropdown for selecting size */}
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="size"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#444',
              }}
            >
              Choose a size:
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '5px',
                border: '1px solid #ddd',
                fontSize: '1rem',
              }}
            >
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

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
            disabled={!selectedSize} // Disable button until a size is selected
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default WomanSingle;
