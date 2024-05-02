import React, { useState } from 'react'
import '@fontsource/roboto/500.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Snackbar, TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { logo, sign } from '../assets';
import './Style.css';

export const Login = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
//handle Api in login customer
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email.trim() === '') {
      setErrorMsg('Email is required');
      return;
    }

    const requestObj = {
      email: formData.email,
      password: formData.password,
      type: 0
    };

    const headers = { "Content-Type": "application/json" };

    try {
      const response = await axios.post(
        "http://146.190.164.174:4000/api/app_api/login",
        requestObj,
        { headers }
      );
      if (response.status === 200) {
        localStorage.setItem('email', formData.email);
        localStorage.setItem('token', response.data.token);
        setSuccessAlert(true);
        navigate('/');
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Login error:', error.response);
      setErrorAlert(true);
      let errorMessage = 'An unexpected error occurred';
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      setErrorMessage(errorMessage);
    }
  };
//show alert message
  const handleCloseAlert = () => {
    setSuccessAlert(false);
    setErrorAlert(false);
    setErrorMessage('');
  };

  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-sm-12'>
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <h3 className='txt'>Sign in to your E-commerece account</h3>
                <br />
                <p className='txt'>Don't have an account yet? <span><Link to='/signIn' className='color'>Sign up</Link></span></p>
                <TextField
                  name='email'
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  onChange={handleChange}
                  error={errorMsg !== ''}
                  helperText={errorMsg}
                />
              </FormControl>

              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  name='password'
                  onChange={handleChange}
                  size="medium"
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <br />
                <div style={{ textAlign: 'right' }}>
                  <Link to='/forgetPassword' style={{ textDecoration: 'none' }}>
                    <p style={{ color: 'green' }}>Forgot your password?</p>
                  </Link>
                </div>
              </FormControl>

              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <Button
                  className='btn'
                  type="submit"
                  variant="contained"
                  size="medium"
                  required
                  style={{ textTransform: 'capitalize' ,backgroundColor:'#205048'}}
                >
                  Sign in
                </Button>
              </FormControl>
            </form>
          </div>

          <div className='col-lg-5 col-sm-12'>
            <img src={sign} className='w-100' />
          </div>
        </div>
      </div>

      <Snackbar
        open={successAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        message="Customer login successful"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Snackbar
        open={errorAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        message={errorMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </div>
  );
};


