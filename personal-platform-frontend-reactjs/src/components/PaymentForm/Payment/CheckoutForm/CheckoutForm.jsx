import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { GridContainer, GridItem, FormStyle, SubmitButton } from "./CheckoutForm.style";
import { CreditCard } from 'lucide-react';

export default function CheckoutForm(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setLoading(true);
        setErrorMessage(null); // Reset any existing errors on new submission

        if (!stripe || !elements) {
            setErrorMessage("Stripe has not loaded correctly.");
            props.setLoading(false);
            return;
        }

        // Confirm the payment using the PaymentElement
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {},
            redirect: "if_required",
        });

        if (error) {
            props.setError(error.message); // Display error message to user
            props.setLoading(false); // Stop processing if there's an error
            return;
        } 

        // Proceed with the successful payment
        const orderId = paymentIntent?.id;
        props.setOrderId(orderId);
        props.setStatusStripePayment('SUCCESS_PAYMENT_STRIPE');
    };

    const paymentElementOptions = {
        style: {
            base: {
                color: '#32325d',
                fontSize: '2rem', // Larger font size for better readability
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
        layout: 'tabs', // Layout suitable for card number separation
    };

    return (
        <FormStyle id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement options={paymentElementOptions} />
            <SubmitButton
                disabled={props.loading || !stripe || !elements}
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginBottom: '10px',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                }}
            >
                <CreditCard size={25} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> 
                {props.loading ? "Processing ..." : "Pay now"}
            </SubmitButton>
            {error && <div className="payment-error">{error}</div>}
        </FormStyle>
    );
}
