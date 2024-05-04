import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom'; // Import Link if needed
import { pic7, pic5, pic6, aboutimg } from '../assets';

export const ViewCart = ({
  cartItems,
  totalPrice,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  products
}) => {
  return (
    <>
      <div className='container-fluid'>
        <div style={{ margin: '20px', textAlign: 'left' }}>
          <h1 className='viewcart'>Cart</h1>
        </div>
        <div className='row' style={{ display: 'flex' }}>
          <div className='col-12 col-sm-8'>
            <table style={{ border: '1px solid #ddd', width: '100%', marginBottom: '20px' }}>
              <thead>
                <tr style={{ backgroundColor: '#e8e8e8', height: '65px' }}>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems && cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button style={{ backgroundColor: 'white', border: 'none' }} onClick={() => removeFromCart(index)}>
                        <HighlightOffIcon style={{ color: '#205048' }} />
                      </button>
                    </td>
                    <td>
                      <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px' }} />
                      <span>{item.name}</span>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={() => decreaseQuantity(index)}>-</button>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                      />
                      <button onClick={() => increaseQuantity(index)}>+</button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-12 col-sm-4' style={{ display: 'flex', flexDirection: 'column' }}>
            <table style={{ border: '1px solid #ddd', width: '100%', marginBottom: '20px' }}>
              <thead>
                <tr style={{ backgroundColor: '#e8e8e8', height: '65px' }}>
                  <th style={{ verticalAlign: 'middle' }}>Cart Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'left', padding: '20px' }}>
                    <p>Subtotal: ${cartItems && cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2) : 0}</p>
                    <hr />
                    <p>Shipping: $10.00</p>
                    <hr />
                    <p>Total: ${totalPrice}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
