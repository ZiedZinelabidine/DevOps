import PaymentDetails from "components/PaymentForm/paymentDetails/paymentDetails";
import { priceProductCloud } from "data/priceProductCloud";

const ProductPaymentDatabaseForm = ({ formMethods, handleSubmit }) => {
  let totalPrice = 0;
  const formValues = formMethods.getValues();
  const priceKey = `database_${formValues.databaseCapacity.value}_${formValues.databaseStorage.value}`;
  const price = priceProductCloud[priceKey];
  totalPrice = formValues.reservationDuration * price;

  return (
    <PaymentDetails
      title={"PAYMENT PRODUCT"}
      note={"Note that if problem with the product you can demand a refund"}
      price={totalPrice} // Pass the calculated totalPrice instead of price_hours
      onSubmit={handleSubmit}
    />
  );
};

export default ProductPaymentDatabaseForm;
