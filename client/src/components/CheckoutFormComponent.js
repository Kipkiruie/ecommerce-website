import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutFormComponent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));
    if (error) {
      setError(error.message);
      return;
    }

    try {
      await axios.post('/api/checkout', { token: token.id });
      setSuccess('Payment successful!');
    } catch (error) {
      setError('Payment failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default CheckoutFormComponent;
