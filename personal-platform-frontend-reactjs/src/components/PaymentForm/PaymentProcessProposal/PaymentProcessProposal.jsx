import {
  AcceptProposalButton,
  ButtonContainer,
  DeclinedProposalButton,
  DeclineProposalButton,
  FinishProposalButton,
} from "./PaymentProcessProposal.style";

export default function PaymentProcessProposal(props) {

  // Handle activating the payment in versement
  const handleModalActiveVersement = () => {
    if (props.setSelectedItem) {
      props.setSelectedItem(props.proposal);
    }
    props.setShowModalActiveVersement(true);
    props.setShowModalPaymentModal(false);
    props.setShowModalDecline(false);
    props.setShowModalProposal(false);
  };

  // Handle opening the payment modal
  const handlePaymentModal = () => {
    if (props.setSelectedItem) {
      props.setSelectedItem(props.proposal);
    }
    props.setShowModalPaymentModal(true);
    props.setShowModalDecline(false);
    props.setShowModalActiveVersement(false);
    props.setShowModalProposal(false);
  };

  // Handle declination of the proposal
  const handleDeclineModal = () => {
    if (props.setSelectedItem) {
      props.setSelectedItem(props.proposal);
    }
    props.setShowModalActiveVersement(false);
    props.setShowModalPaymentModal(false);
    props.setShowModalDecline(true);
    props.setShowModalProposal(false);
  };

  // Render buttons based on the presence of a payment intent ID
  return (
    <>
      {props.proposal.status !== "FINISHED" &&
      props.proposal.status !== "DECLINED" ? (
        props.proposal.orderID ? (
          <ButtonContainer>
            <DeclineProposalButton onClick={handleDeclineModal}>
              Decline versement
            </DeclineProposalButton>
            <AcceptProposalButton onClick={handleModalActiveVersement}>
              Activate versement
            </AcceptProposalButton>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <DeclineProposalButton onClick={handleDeclineModal}>
              Decline
            </DeclineProposalButton>
            <AcceptProposalButton onClick={handlePaymentModal}>
              Accept
            </AcceptProposalButton>
          </ButtonContainer>
        )
      ) : props.proposal.status === "FINISHED" ? ( // Use === for exact comparison
        <ButtonContainer>
          <FinishProposalButton>Proposal Finished</FinishProposalButton>
        </ButtonContainer>
      ) : props.proposal.status === "DECLINED" ? ( // Added additional check for DECLINED
        <ButtonContainer>
          <DeclinedProposalButton>Proposal Declined</DeclinedProposalButton>
        </ButtonContainer>
      ) : null}{" "}
      {/* Fallback for cases not covered */}
    </>
  );
}
