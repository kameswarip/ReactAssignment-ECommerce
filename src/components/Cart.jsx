import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onIncrement, onDecrement }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h5>{item.title}</h5>
                <p>Price: ${item.price}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-secondary me-2" onClick={() => onDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary ms-2" onClick={() => onIncrement(item.id)}>+</button>
                </div>
              </div>
              <div>
                <button className="btn btn-danger" onClick={() => onRemoveFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
