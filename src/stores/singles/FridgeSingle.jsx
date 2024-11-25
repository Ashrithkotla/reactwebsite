import React from 'react';
import { fridgeData } from '../data/fridge';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const FridgeSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = fridgeData.find((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart(product);
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
          gap: '1rem',
          padding: '2rem',
        }}
      >
        {/* Fridge Image */}
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

        {/* Fridge Details */}
        <div
          style={{
            flex: '1',
            maxWidth: '400px',
            padding: '1rem',
          }}
        >
          <h2 style={{ marginBottom: '1rem', color: '#333' }}>
            {product.brand}
          </h2>
          <h3 style={{ marginBottom: '1rem', color: '#555' }}>
            {product.model}
          </h3>
          <h2 style={{ marginBottom: '1rem', color: '#007bff' }}>
            ₹{product.price}
          </h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>
            {product.description}
          </p>

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
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FridgeSingle;
