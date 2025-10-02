import PaymentDetails from "components/PaymentForm/paymentDetails/paymentDetails";
import { priceProductCloud } from "data/priceProductCloud";

const ProductPaymentServerForm = ({ type, formMethods, handleSubmit }) => {
  let price_hours = 0;
  let totalPrice = 0; // Initialize totalPrice
  const formValues = formMethods.getValues();

  // Access the price directly in your component
  switch (formValues.typeServer.value) {
    case "nano":
      price_hours = priceProductCloud[`server_${type}_nano`];
      break;
    case "micro":
      price_hours = priceProductCloud[`server_${type}_micro`];
      break;
    case "small":
      price_hours = priceProductCloud[`server_${type}_small`];
      break;
    case "medium":
      price_hours = priceProductCloud[`server_${type}_medium`];
      break;
    default:
      console.warn("Unknown server type"); // Handle unexpected values
      break;
  }

  if (formValues.reservationDuration) {
    totalPrice = price_hours * formValues.reservationDuration; // Compute total price
  }

  return (
    <div style={{width: '100%'}}>
    <PaymentDetails
      title={"PAYMENT PRODUCT"}
      note={"Note that if problem with the product you can demand a refund"}
      price={totalPrice} // Pass the calculated totalPrice instead of price_hours
      onSubmit={handleSubmit}
    />
    </div>
  );
};

export default ProductPaymentServerForm;
