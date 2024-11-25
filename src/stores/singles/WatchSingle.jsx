import React from 'react';
import { watchData } from '../data/watch';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const WatchSingle = () => {
  const { id } = useParams();

  const { addToCart, cartItems } = useCart();

  const product = watchData.find((item) => item.id === id);

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

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
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
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default WatchSingle;
