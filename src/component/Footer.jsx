import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email'; // Import the Email icon from Material-UI
import './Style.css';


export const Footer = () => {
  return (
    <div>
      <footer className="footer-container" style={{ backgroundColor: 'black', color: 'white', marginTop: '50px', paddingTop: 30, paddingBottom: 30 }}>
        <div className="container">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6 footer-column">
              <h5 style={{color:'white'}}>Follow us</h5>
              <p>Stay connected with Luxury Hotel</p>
              <div className="col-lg-6 col-md-6">
                <ul className="list-inline social-icons">
                  <li className="list-inline-item"><i className="fab fa-facebook-f"></i></li>
                  <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                  <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                  <li className="list-inline-item"><i className="fab fa-linkedin"></i></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-column">
              <h5 className="mb-3" style={{color:'white'}}>Contact</h5>
              <ul className="list-unstyled">
                <li><PhoneIcon /> <span>+1234567890</span></li>
                <li><MailIcon /> <span>example@example.com</span></li>
                <li><LocationOnIcon /> <span>123 Street, City, Country</span></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-column">
              <h5 className="mb-3" style={{color:'white'}}>Stay up to date</h5>
              <div className="col-lg-4 col-md-6">
                <form>
                  <div className="d-flex div-margin">
                      <input type="text" value="Your email address" className="input-write" />
                    <div className='footer-column'>
                      <button type="button" className="btn blue-button">
                        <EmailIcon/>
                      </button>
                    </div>

                  </div>
                </form>
              </div>

            </div>
            <div className='col-lg-2 col-md-6 footer-column'>
              <h5 className="mb-3" style={{color:'white'}}>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{color:'white',textDecoration:'none'}}>Home</a></li>
                <li><a href="#" style={{color:'white',textDecoration:'none'}}>Rooms</a></li>
                <li><a href="#" style={{color:'white',textDecoration:'none'}}>Services</a></li>
                <li><a href="#" style={{color:'white',textDecoration:'none'}}>About Us</a></li>
                <li><a href="#" style={{color:'white',textDecoration:'none'}}>Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>&copy; 2024 Lexuary Hotel. All Rights Reserved</p>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="list-inline social-icons">
                  <li className="list-inline-item"><i className="fab fa-facebook-f"></i></li>
                  <li className="list-inline-item"><i className="fab fa-twitter"></i></li>
                  <li className="list-inline-item"><i className="fab fa-instagram"></i></li>
                  <li className="list-inline-item"><i className="fab fa-linkedin"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
