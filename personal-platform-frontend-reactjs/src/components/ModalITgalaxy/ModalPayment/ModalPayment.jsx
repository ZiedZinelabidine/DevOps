import PaymentDetails from "../../PaymentForm/paymentDetails/paymentDetails";
import ModalComponent from "../ModalComponent";
import { StyledTitle } from "./ModalPayment.style";

const ModalPayment = (props) => {
  const renderModalPaymentHeader = <StyledTitle>Details Payment</StyledTitle>;

  const renderModalPaymentBody = (
    <PaymentDetails
      title={props.title}
      note={props.note}
      price={props.price}
      onSubmit={props.onSubmit}
      paymentProposal={props.paymentProposal}
      formMethods={props.formMethods}
      proposal={props.proposal}
    />
  );

  return (
    <ModalComponent
      show={props.showModalPayment}
      closeModal={props.handleCloseShowModal}
      body={renderModalPaymentBody}
      header={renderModalPaymentHeader}
      bodyPadding={"0 10px 0 0px"}
      Height={"auto"} // Toggle full height based on modal state
      footerpaddingtop={"0"}
      footerpaddingbottom={"0px"}
    />
  );
};

export default ModalPayment;
