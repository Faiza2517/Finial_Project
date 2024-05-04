import React, { useState } from 'react'
import { aboutimg } from '../assets'
import { Button, TextField, Snackbar, FormControl } from '@mui/material';

export const CheckOut = () => {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',

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
            <div class="page-header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="page-header-content">
                                <h2 class="page-header-title" style={{ textAlign: 'left' }}>CheckOut</h2>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home //</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">CheckOut</li>
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

            <div className='container-fluid'>
    <div className="section-space shop-checkout-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div>
                        <h2 style={{ textAlign: 'left' }}>CheckOut</h2>
                        <h4 style={{ textAlign: 'left' }}>Customer information</h4>
                    </div>
                    <FormControl>
                        <TextField
                            required
                            sx={{ margin: '15px', width: '80ch' }}
                            name="usernameOrEmail"
                            label="Username or Email"
                            type="text"
                            value={formData.usernameOrEmail}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <div style={{ textAlign: 'left', marginLeft: '15px' }}>
                        <h3>Billing Detail</h3>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            sx={{ margin: '10px', width: 'calc(50% - 20px)' }}
                            name="firstName"
                            label="First Name"
                            type="text"
                            value={formData.firstName}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                        <TextField
                            sx={{ margin: '10px', width: 'calc(50% - 20px)' }}
                            name="lastName"
                            label="Last Name"
                            type="text"
                            value={formData.lastName}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            sx={{ margin: '15px', width: 'calc(50% - 20px)' }}
                            name="companyName"
                            label="Company Name"
                            type="text"
                            value={formData.companyName}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                        <TextField
                            required
                            sx={{ margin: '15px', width: 'calc(50% - 20px)' }}
                            name="country"
                            label="Country"
                            type="text"
                            value={formData.country}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            sx={{ margin: '15px', width: '80ch' }}
                            name="region"
                            label="Region"
                            type="text"
                            value={formData.region}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            sx={{ margin: '15px', width: 'calc(50% - 20px)' }}
                            name="city"
                            label="City/Town"
                            type="text"
                            value={formData.city}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                        <TextField
                            required
                            sx={{ margin: '15px', width: 'calc(50% - 20px)' }}
                            name="state"
                            label="State"
                            type="text"
                            value={formData.state}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            sx={{ margin: '15px', width: '80ch' }}
                            name="zipcode"
                            label="Zipcode"
                            type="text"
                            value={formData.zipcode}
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="col-lg-5">
                    {/* Your content here */}
                </div>
            </div>
        </div>
    </div>
</div>


        </>
    )
}
