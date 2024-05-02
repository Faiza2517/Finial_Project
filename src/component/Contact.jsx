import React, { useState } from 'react'
import './Style.css';
import { pic2, pic1,aboutimg } from '../assets';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Button, TextField ,Snackbar} from '@mui/material';


export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple form validation (you can expand this as needed)
    if (formData.firstName.trim() === '' || formData.lastName.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate form submission (you can replace this with your actual form submission logic)
    // Here, we just set submit success to true after validation
    setSubmitSuccess(true);

    // Optional: You can reset the form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSubmitSuccess(false);
  };

  return (
    <>
          <div className='about' >
        {/*about section*/}
        <div class="page-header-area">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="page-header-content">
                <h2 class="page-header-title" style={{ textAlign: 'left' }}>Contact Us</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home //</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="page-header-thumb">
                <img src={aboutimg} alt="Image-HasTech" width="546" height="281" />
              </div>
            </div>
          </div>
        </div>
      </div>
        {/*end about section*/}
      </div>
      <div className='row list'>
        < div className='col-12 col-sm-5'>
          <div className='container'>
            <h4 className='contactss' style={{marginTop:'90px'}}></h4>
            <h3 className='contact'>Contact With Us</h3>
            <p style={{ textAlign: 'left' }}>
              Share some details here. This is a flexible section where you can share anything you want. It could be details or some information.
            </p>
            <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
              <div className='col-8'>
                <RoomIcon style={{ marginRight: '10px', color: '#205048' }} /> {/* Location icon */}
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  Address
                </span>
                <p style={{ marginRight: '-179px' }}> 123 Example Street, City, Country</p>
              </div>
            </div>
            <hr /> {/* Divider */}
            <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
              <div className='col-8'>
                <CallIcon style={{ marginRight: '10px', color: '#205048' }} /> {/* Location icon */}
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  Phone
                </span>
                <p style={{ marginRight: '-109px' }}> (+91) 987 654 321
                </p>
              </div>
            </div>
            <hr />
            <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
              <div className='col-8'>
                <EmailIcon style={{ marginRight: '12px', color: '#205048' }} /> {/* Location icon */}
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  Email
                </span>
                <p style={{ marginRight: '-109px' }}>info@contact.com
                </p>
              </div>
            </div>
            <hr />
            <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
              <div className='col-8'>
                <h6 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  FOLLOW
                </h6>
                <div class="social-icons" style={{ marginRight: '-5px' }}>
                <li className="list-inline-item"><i className="fab fa-facebook-f"></i></li>
                  <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                  <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                  <li className="list-inline-item"><i className="fab fa-linkedin"></i></li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*start form*/}
        <div className='col-12 col-sm-7 contact-form' style={{ backgroundColor: '#F1F4F1' }}>
          <div style={{ padding: '20px', marginTop: '20px', paddingBottom: '84px' }}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <h6 style={{ marginRight: '415px' }}>Name</h6>
              <TextField
                sx={{ margin: '15px', width: '25ch' }}
                name="firstName"
                label="First Name"
                type="text"
                value={formData.firstName}
                variant="outlined"
                onChange={handleInputChange}
              />
              <TextField
                sx={{ margin: '15px', width: '25ch' }}
                name="lastName"
                label="Last Name"
                type="text"
                value={formData.lastName}
                variant="outlined"
                onChange={handleInputChange}
              />
              <br />
              <h6 style={{ marginRight: '415px', marginTop: '15px' }}>Email</h6>
              <TextField
                sx={{ width: '55ch', margin: '15px' }}
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                variant="outlined"
                onChange={handleInputChange}
              />
              <br />
              <h6 style={{ marginRight: '340px', marginTop: '15px' }}>Contact Message</h6>
              <TextField
                sx={{ width: '55ch', margin: '15px' }}
                name="message"
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                variant="outlined"
                onChange={handleInputChange}
              />
              <br />
              <div style={{ marginTop: '15px' }}>
                <Button
                  type='submit'
                  variant='contained'
                  style={{ backgroundColor: '#025048', color: 'white' }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Snackbar for displaying success message */}
          <Snackbar
            open={submitSuccess}
            autoHideDuration={3000} // Adjust duration as needed
            onClose={handleCloseSnackbar}
            message="Message sent successfully!"
          />
        </div>

      </div>
     

    </>
  )
}
