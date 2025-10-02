import PaymentDetails from "components/PaymentForm/paymentDetails/paymentDetails";
import { Spinner } from "react-bootstrap";
import { LoadingContainer, LoadingMessage } from "../AddPrice/AddPrice.style";

const TrainerNewPaymentForm = ({
  price,
  onSubmit,
  loading,
}) => {
  if (typeof onSubmit !== "function") {
    console.error(
      "onSubmit is not a function in TrainerNewPaymentForm:",
      onSubmit
    );
  }

  return (
    <div style={{width: '100%'}}>
      <PaymentDetails
        price={price}
        title={"PAYMENT TO SHARE THE PRODUCT"}
        note={
          "To share this product with community you need to pay the service."
        }
        onSubmit={onSubmit}
        paymentProposal={false}
      />   
        {loading && (
            <LoadingContainer>
            <LoadingMessage>
                Please wait while we process your request. Refreshing the page may result in loss of unsaved content.
            </LoadingMessage>
            <Spinner />
          </LoadingContainer>)}
     </div>
  );
};

export default TrainerNewPaymentForm;
