import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useCreatePaymentMutation } from '../../../redux/api/payment/paymentApi';
import { StyledPaymentFormContainer } from './PaymentForm.style';
import { getTokenFromLocalStorage } from 'core/helpers/storage';
import { jwtDecode } from "jwt-decode";
import useStripeScript from './useStripeScript'; // Import the custom hook
import CheckoutForm from './CheckoutForm/CheckoutForm';

function PaymentForm(props) {
  const stripePromise = useStripeScript();
  const [clientSecret, setClientSecret] = useState('');
  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const payerId = decodedToken?.id;
  const payerType = decodedToken?.role;
  const [createPayment] = useCreatePaymentMutation();

  const paymentData = {
    amount: Number(props.totalCost) * 100, // Convert to cents
    currency: 'eur',
    customer: props.stripe_id,
    confirm: false,
    payerId: payerId,
    payerType: payerType,
  };

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const result = await createPayment({ paymentData }).unwrap();
        const { client_secret } = result.data;
        setClientSecret(client_secret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        props.setError('There was an issue processing your payment. Please try again.');
      }
    };
    
    if (stripePromise) {
      fetchClientSecret();
    }
  }, [stripePromise]);



  return (
    <StyledPaymentFormContainer>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Suspense fallback={<div>Loading payment form...</div>}>
            <CheckoutForm
              setStatusStripePayment={props.setStatusStripePayment}
              loading={props.loading}
              setLoading={props.setLoading}
              setError={props.setError}
              setOrderId={props.setOrderId}
            />
          </Suspense>
        </Elements>
      )}
    </StyledPaymentFormContainer>
  );
}

export default PaymentForm;