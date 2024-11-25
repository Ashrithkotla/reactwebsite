import React, { useState } from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';

const UserCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    village: '',
    doorNo: '',
    paymentMethod: 'cod', // Default payment method
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setShowForm(false);
    setFormData({
      name: '',
      country: '',
      village: '',
      doorNo: '',
      paymentMethod: 'cod',
    });
    alert('Order placed successfully! Cash on Delivery selected.');
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  // Inline styles for buttons and form
  const buttonStyles = {
    padding: '12px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  };

  const removeButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#ff6347',
    color: 'white',
    fontWeight: '600',
    width: '100px',
    textAlign: 'center',
  };

  const removeButtonHoverStyles = {
    ...removeButtonStyles,
    backgroundColor: '#e04e3c',
  };

  const checkoutButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: '600',
    width: 'auto', // Adjust to content width
    marginTop: '20px',
    marginLeft: '61rem',
    padding: '10px 25px', // Adjust padding to make it more compact
    display: 'inline-block', // Make button wrap based on content width
  };

  const checkoutButtonHoverStyles = {
    ...checkoutButtonStyles,
    backgroundColor: '#218838',
  };

  const formContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    marginTop: '20px',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyles = {
    padding: '12px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
    width: '100%',
  };

  const submitButtonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    padding: '12px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const submitButtonHoverStyles = {
    ...submitButtonStyles,
    backgroundColor: '#0056b3',
  };

  return (
    <>
      <Navbar />
      <div className="cart-container" style={{ padding: '30px' }}>
        <h2
          className="y-cart"
          style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '30px' }}
        >
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="empty" style={{ fontSize: '1.2rem', color: '#777' }}>
            Your Cart is Empty
          </p>
        ) : showForm ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={formContainerStyles}>
              <h2 style={{ marginBottom: '15px' }}>
                Address and Payment Details
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    style={{ fontSize: '1rem', marginBottom: '5px' }}
                  >
                    Full Name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={inputStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    style={{ fontSize: '1rem', marginBottom: '5px' }}
                  >
                    Country:
                  </label>
                  <input
                    id="country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    style={inputStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="village"
                    style={{ fontSize: '1rem', marginBottom: '5px' }}
                  >
                    Village:
                  </label>
                  <input
                    id="village"
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    required
                    style={inputStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="doorNo"
                    style={{ fontSize: '1rem', marginBottom: '5px' }}
                  >
                    Door No:
                  </label>
                  <input
                    id="doorNo"
                    type="text"
                    name="doorNo"
                    value={formData.doorNo}
                    onChange={handleInputChange}
                    required
                    style={inputStyles}
                  />
                </div>
                <div>
                  <label
                    htmlFor="paymentMethod"
                    style={{ fontSize: '1rem', marginBottom: '5px' }}
                  >
                    Payment Method:
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    style={inputStyles}
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="online">Online Payment</option>
                  </select>
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#555',
                    marginTop: '15px',
                    marginBottom: '15px',
                  }}
                >
                  ** Note: Cash on Delivery (COD) will be selected for delivery.
                  Please ensure availability for payment at the time of
                  delivery.
                </p>
                <button
                  type="submit"
                  style={submitButtonStyles}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      submitButtonHoverStyles.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      submitButtonStyles.backgroundColor)
                  }
                >
                  Submit Order
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '30px', // Increased margin to space out products
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff',
                  maxWidth: '600px', // Reduce width of product container
                  margin: '0 auto', // Center-align product container
                }}
              >
                <div className="cart-img">
                  <img
                    src={item.image}
                    alt={item.product}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginRight: '15px',
                    }}
                  />
                </div>
                <div className="cart-details" style={{ flexGrow: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#333',
                    }}
                  >
                    {item.product}
                  </h3>
                  <h2 style={{ fontSize: '1.5rem', color: '#28a745' }}>
                    ₹{item.price}
                  </h2>
                  <h4 style={{ fontSize: '1rem', color: '#777' }}>
                    {item.model}
                  </h4>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  style={removeButtonStyles}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      removeButtonHoverStyles.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      removeButtonStyles.backgroundColor)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            {/* Display Total Price */}
            <div
              style={{
                marginTop: '20px',
                fontSize: '1.2rem',
                fontWeight: '600',
                textAlign: 'center',
                color: '#333',
              }}
            >
              <h3>Total Price: ₹{totalPrice}</h3>
            </div>
            {/* Checkout Button */}
            <button
              onClick={() => setShowForm(true)}
              style={checkoutButtonStyles}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  checkoutButtonHoverStyles.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor =
                  checkoutButtonStyles.backgroundColor)
              }
            >
              Proceed to Pay
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
