import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">${item.price} x {item.quantity}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

