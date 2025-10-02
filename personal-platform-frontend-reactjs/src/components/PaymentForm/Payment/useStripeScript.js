import { useEffect, useState } from 'react';

const useStripeScript = () => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    // Check if the script is already loaded
    if (!window.Stripe) {
      // Create a script element
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3';
      script.async = true;
      script.onload = () => {
        setStripe(window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY));
      };
      // Append the script to the document body
      document.body.appendChild(script);
      
      // Cleanup the script from the DOM if component unmounts
      return () => {
        document.body.removeChild(script);
      };
    } else {
      setStripe(window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY));
    }
  }, []);

  return stripe;
};

export default useStripeScript;