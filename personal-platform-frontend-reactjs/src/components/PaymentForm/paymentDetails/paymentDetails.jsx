import { useState } from "react";
import Payment from "../Payment/Payment";
import PaymentProposal from "../Payment/PaymentProposal";
import {
  ButtonShowPayment,
  Container,
  DetailRow,
  Label,
  Title,
  Value,
} from "./paymentDetails.style";

const PaymentDetails = (props) => {
  const [showModalPayment, setShowModalPayment] = useState(false);

  // Corrected function name
  const handleModalPayment = () => {
    setShowModalPayment(true);
  };

  // Calculate Tax (20% of price)
  const taxRate = 0.2; // 20%
  const feeRate = 0.15; // 10%
  const taxe = props.price * taxRate; // Tax calculated directly as 20% of price
  const feeItgalaxy = props.price * feeRate;
  const totalCost = props.paymentProposal ? props.price + taxe + feeItgalaxy  :  props.price + taxe  ; // Total cost includes price + Tax

  return (
    <>
      {!showModalPayment ? (
        <>
          <Container>
            <Title>{props.title}</Title>
            <DetailRow>
              <Label>Price:</Label>
              <Value>{props.price.toFixed(2)} €</Value>
            </DetailRow>
            {props.paymentProposal && (
              <DetailRow>
                <Label>ItGalaxy Fees (15%):</Label>
                <Value>{feeItgalaxy.toFixed(2)} €</Value>
              </DetailRow>
            )}
            <DetailRow>
              <Label>Value Added Tax (20%):</Label>
              <Value>{taxe.toFixed(2)} €</Value>
            </DetailRow>
            <hr style={{ margin: "10px 0", border: "1px solid #ccc" }} />
            <DetailRow>
              <Label>
                <strong>Total Cost:</strong>
              </Label>
              <Value>
                <strong>{totalCost.toFixed(2)} €</strong>
              </Value>
            </DetailRow>
          </Container>
          <ButtonShowPayment onClick={handleModalPayment}>
            Payment
          </ButtonShowPayment>
        </>
      ) : props.paymentProposal ? (
        <PaymentProposal
          totalCost={totalCost.toFixed(2)}
          onSubmit={props.onSubmit}
          formMethods={props.formMethods}
          proposal={props.proposal}
        />
      ) : (
        <Payment
          totalCost={totalCost.toFixed(2)}
          title={props.title}
          note={props.note}
          onSubmit={props.onSubmit}
        />
      )}
    </>
  );
};

export default PaymentDetails;
