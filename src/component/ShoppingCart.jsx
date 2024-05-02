import React from 'react';
import Drawer from '@mui/material/Drawer';
import TableContainer from '@mui/material/TableContainer';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import { useContextApi } from './Cartcontaxt';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Shoppingcart = ({
  cartItems,
  totalPrice,
  toggleCartDrawer,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  products
}) => {
  const { isCartOpen, setIsCartOpen } = useContextApi();

  const handleCloseDrawer = () => {
    setIsCartOpen(false);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/viewCart");
  };

  const handleCheckOut = () => {
    navigate('/checkout');
  };

  return (
    <Drawer anchor="right" open={isCartOpen} onClose={toggleCartDrawer}>
      <div style={{ width: 430 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <h2 style={{ marginRight: '215px', marginTop: '3px', fontWeight: '500' }}>Shopping Cart</h2>
          <button onClick={handleCloseDrawer} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}><Close /></button>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell style={{ textAlign: 'center' }}>Product Name</TableCell>
                <TableCell></TableCell>
                <TableCell style={{ textAlign: 'center' }}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={item.image} style={{ width: 50, height: 50 }} />
                  </TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ marginBottom: '5px' }}>{item.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button style={{ backgroundColor: "white", border: "1px solid #000", width: "30px", height: "30px" }} onClick={() => decreaseQuantity(index)}>-</button>
                        <span style={{ border: "1px solid #000", padding: '4px', minWidth: "30px", textAlign: "center" }}>{item.quantity}</span>
                        <button style={{ backgroundColor: "white", border: "1px solid #000", width: "30px", height: "30px" }} onClick={() => increaseQuantity(index)}>+</button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <button style={{ border: 'none', backgroundColor: 'white', marginBottom: '5px' }} onClick={() => removeFromCart(index)}><CancelOutlinedIcon /></button>
                      {/* Find the product in the products array and calculate the price */}
                      <div>{item.price}</div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total Price:</TableCell>
                {/* Calculate the total price */}
                <TableCell style={{ textAlign: 'center' }}>Total: ${totalPrice}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        {/* Buttons with Customized Border Color */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button
            type="submit"
            variant="outlined"
            onClick={handleNavigate}
            sx={{
              width: '50ch',
              margin: '15px',
              padding: '10px',
              borderColor: '#205048', // Set border color to #205048
              color: '#205048'
            }}
          >
            View Cart
          </Button>
          <Button
            type="submit"
            variant="outlined"
            onClick={handleCheckOut}
            sx={{
              width: '50ch',
              margin: '15px',
              padding: '10px',
              borderColor: '#205048', // Set border color to #205048
              color: '#205048'
            }}
          >
            Check Out
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
