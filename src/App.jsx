// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutData, setCheckoutData] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const handleCheckout = (data) => {
    setCheckoutData(data);
    alert(`Order placed! Name: ${data.name}, Address: ${data.address}`);
    setCartItems([]); // Clear cart after checkout
  };

  return (
    <div className="container">
      <h1 className="my-4">Simple E-Commerce App</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      {cartItems.length > 0 && <Checkout cartItems={cartItems} onCheckout={handleCheckout} />}
      {checkoutData && <h4>Thank you for your order, {checkoutData.name}!</h4>}
    </div>
  );
};

export default App;
