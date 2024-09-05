import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFormComponent from './CheckoutFormComponent';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutFormComponent />
  </Elements>
);

export default CheckoutForm;
