// src/components/Checkout.jsx
import React, { useState } from 'react';

const Checkout = ({ cartItems, onCheckout }) => {
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Checkout</h3>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input type="text" name="address" className="form-control" onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Payment Details</label>
        <input type="text" name="payment" className="form-control" onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-success">Confirm Order</button>
    </form>
  );
};

export default Checkout;
