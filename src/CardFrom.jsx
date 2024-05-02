import React from 'react';
import { Form } from 'react-bootstrap'; // Assuming you're using react-bootstrap for forms
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'; // Import from @stripe/react-stripe-js
// import stripePromise from './stripe'; // Ensure this path is correct

export const CardFrom = () => { // Rename to CardFrom
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, token } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Token:', token);
      // Send token to your server for further processing
    }
  };

  return (
    <div className='card mt-5' style={{height:'200px',width:'450px'}}>
    <Form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </Form>
    </div>
  );
};

