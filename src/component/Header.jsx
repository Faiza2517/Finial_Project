import React, { useState } from 'react';
import './Style.css';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from './Logout';
import { ChangePassword } from './ChangePassword';
import { Shoppingcart } from './ShoppingCart';
import Drawer from '@mui/material/Drawer';
import { CartListung } from './CartListung';
import { Shop } from './Shop';
import { Button } from '@mui/material';
import { useContextApi } from './Cartcontaxt';



export const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cartItems, setCartItems] = useState([]);
  
  const [showCart, setShowCart] = useState(false);
  const [showDropdown,setShowDropdown]=useState('')
const {isCartOpen,setIsCartOpen}=useContextApi()
 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const success = await Logout(navigate);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem('token');
      const success = await ChangePassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
        token: token
      });
      if (success) {
        alert('Password changed successfully!');
        setIsModalOpen(false);
      } else {
        alert('Failed to change password. Please try again.');
      }
    } catch (error) {
      console.error('Error changing password:', error.response);
      alert('Failed to change password. Please try again.');
    }
  };

  

  //handle login component
  const handleLogin = () => {
    navigate('/login')
  }

  //handle signIn component
  const handleSignIn = () => {
    navigate('/singup')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navback" style={{ backgroundColor: '#F1F4F1' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><span>E</span>Commerce</a>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop' className="nav-link">Shop</Link>
              </li>
                <li className="nav-item">
                  <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <Link  className="nav-link">Pages</Link>
                    {showDropdown && (
                      <div className="dropdown-content">
                        <Link to='/account' className="dropdown-link" onClick={handleMenuClose}>Account</Link>
                        <Link to='/pagenotfound' className="dropdown-link" onClick={handleMenuClose}>Page Not Found</Link>
                      </div>
                    )}
                  </div>
                </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <IconButton>
              <Link to='/whistList'><FavoriteBorderIcon sx={{ color: 'black' }} aria-label="favorite" /></Link>
            </IconButton>
            <IconButton>
              <Button onClick={()=>setIsCartOpen(true)}>
                <ShoppingCartIcon sx={{ color: 'black' }} aria-label="cart" />
                <span>{cartItems.length}</span> {/* Display count of items in the cart */}
              </Button>
            </IconButton>

            <IconButton
              sx={{ color: 'black' }}
              aria-label="profile"
              onClick={handleMenuOpen}
            >
              <PersonOutlineIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleOpenModal}>Change password</MenuItem>
              <MenuItem onClick={handleSignIn}>SignIn</MenuItem>
              <MenuItem onClick={handleLogin}>Login</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            <Modal
              open={isModalOpen}
              onClose={handleCloseModal}
              aria-labelledby="change-password-modal"
              aria-describedby="change-password-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <ChangePassword
                  oldPassword={oldPassword}
                  newPassword={newPassword}
                  setOldPassword={setOldPassword}
                  setNewPassword={setNewPassword}
                  setConfirmPassword={setConfirmPassword}
                  handleChangePassword={handleChangePassword}
                />
              </Box>
            </Modal>
          </div>
        </div>
       < style jsx>{`
        .nav-link {
            color: black; /* Set nav link color to black */
        }
        .nav-link:hover {
            color: red; /* Change nav link hover color to red */
        }
    `}</style>
      </nav>
      {/* Conditionally render cart listing */}
     
    </>
  );
};
