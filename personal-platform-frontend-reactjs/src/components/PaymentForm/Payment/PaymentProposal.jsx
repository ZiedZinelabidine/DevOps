import { getTokenFromLocalStorage } from "core/helpers/storage";
import useHandleSubmitUpdateProposal from "hooks/useHandleSubmitUpdateProposal";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGenrateInvoicingMutation } from "../../../redux/api/genrateInvoicing/genrateInvoicingApi";
import { useAddInvoicingMutation } from "../../../redux/api/invoicing/invoicingApi";
import {
  useRefundStripePaymentMutation,
} from "../../../redux/api/payment/paymentApi";
import { Section, StyledContainer } from "./Payment.style";
import PaymentForm from "./PaymentForm";

const PaymentProposal = (props) => {
  const [paymentStatus, setPaymentStatus] = useState("inprogress");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusStripePayment, setStatusStripePayment] = useState('INITIAL');
  const [orderId, setOrderId] = useState(null);
  const [urlNavigate, setUrlNavigate] = useState("");
  const [createInvoice] = useAddInvoicingMutation();
  const [refundStripe] = useRefundStripePaymentMutation();
  const [generateInvoicing] = useGenrateInvoicingMutation();

  const navigate = useNavigate();
  const date = new Date(); 
  const now = String(`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`);
  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const payerId = decodedToken?.id;
  const payerType = decodedToken?.role;
  const stripe_id = decodedToken?.stripe_id;
  const payerEmail = decodedToken?.email;
  const payerName =
    payerType === "ENTREPRISE"
      ? decodedToken?.username
      : decodedToken?.name + " " + decodedToken?.first_name;


  const handleError = (errorMessage) => {
    setError(errorMessage);
    setTimeout(() => setError(null), 2000); // Clear error after 2 seconds
  };

  const { handleActivateSubmit } = useHandleSubmitUpdateProposal(
    props.proposal,
    props.formMethods
  );

  useEffect(() => {
    const processPayment = async () => {
      if (statusStripePayment === 'SUCCESS_PAYMENT_STRIPE' && orderId) {

        try {
          const productCreationSuccess = await handleActivateSubmit(orderId , setLoading);

          if (productCreationSuccess.success) {
            const invoice = await createInvoice({ 
              payerId,
              payerType,
              payerName,
              payerEmail,
              payerCountryDetails: productCreationSuccess.payerCountryDetails, // Assuming this comes back from productCreationSuccess
              price: props.totalCost,
              paymentType: 'card', // Update to reflect the correct payment method
              targetProductType: productCreationSuccess.targetProductType,
              targetProductId: productCreationSuccess.targetProductId,
              // Assuming orderId should be derived from productCreationSuccess directly
              orderId: orderId,
              invoicingDescription: productCreationSuccess.invoicingDescription,
            }).unwrap(); // Ensure unwrapping to access the actual data

            console.log("Invoice created:", invoice);

            const sendInvoicing = await generateInvoicing({
              fileFolder: `invoices/${invoice.type}s`,
              fileName: `facture_${invoice.id}.pdf`,
              id: invoice.id,
              status: "Payé",
              date: now,
              items: [{
                title: invoice.invoicingDescription,
                price: (invoice.price / 1.2), // Adjusting price if needed
                tax: 20,
              }],
              customer: {
                summary: invoice.payerName,
                address_line_1: invoice.payerCountryDetails,
                email: invoice.payerEmail,
              },
            }).unwrap(); // Ensure unwrapping here as well 

            setLoading(false);
            // console.log("Send invoice success:", sendInvoicing);
            setUrlNavigate(productCreationSuccess.url); // Navigate to a success url
            setPaymentStatus('success');
          } else {
            // If the product creation fails, handle the refund and create a refund invoice.
            await refundStripe({
              body: { paymentIntentId: orderId, amount: Number(props.totalCost) * 100 },
            }).unwrap();

            const refundInvoice = await createInvoice({
              payerId,
              payerType,
              payerName,
              payerEmail,
              payerCountryDetails: productCreationSuccess.payerCountryDetails,
              price: props.totalCost,
              paymentType: 'card',
              orderId: orderId,
              invoicingDescription: productCreationSuccess.invoicingDescription,
              status: "REFUND",
            }).unwrap();

            console.log("Refund invoice created:", refundInvoice);

            const sendRefundInvoicing = await generateInvoicing({
              fileFolder: `invoices/${refundInvoice.type}s`,
              fileName: `facture_${refundInvoice.id}.pdf`,
              id: refundInvoice.id,
              status: "Rembourssement",
              date: now,
              items: [{
                title: refundInvoice.invoicingDescription,
                price: props.totalCost,
                tax: 20,
              }],
              customer: {
                summary: refundInvoice.payerName,
                address_line_1: refundInvoice.payerCountryDetails,
                email: refundInvoice.payerEmail,
              },
            }).unwrap();
            setLoading(false);
            console.log("Send refund invoice success:", sendRefundInvoicing);
          }
        } catch (error) {
          setLoading(false);
          handleError("An error occurred while processing the payment.");
          setPaymentStatus('error');
        }
      }
    };
    processPayment(); // Call the async function defined above

  }, [statusStripePayment, orderId]); // Dependency array should contain all necessary states


  useEffect(() => {
    if (paymentStatus === "success" && urlNavigate) {
      const timer = setTimeout(() => {
        window.location.href = `${urlNavigate}`;
      }, 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [paymentStatus, urlNavigate, navigate]);

  return (
    <StyledContainer>
      {paymentStatus === "inprogress" && (
        <Section>
          <h3 style={{ marginLeft: '20%', marginBottom: '15px' }}> {props.title} </h3>
          <p style={{ marginLeft: '20%', marginBottom: '10px', color: '#666' }}>
            {props.note}
          </p>
          <PaymentForm stripe_id={stripe_id} totalCost={props.totalCost} setStatusStripePayment={setStatusStripePayment} loading={loading} setLoading={setLoading}  setError={setError} setOrderId={setOrderId} />

          {loading && <p>Loading, please wait...</p>}
        </Section>
      )}
      {/* Success/Error Messages */}
      {paymentStatus === "success" && (
        <div
          style={{
            paddingLeft: "150px",
            fontWeight: "501",
            color: "green",
            marginBottom: "15px",
            fontFamily: "Inter",
            fontSize: "30px",
          }}
        >
          {" "}
          Payment processed successfully!
        </div>
      )}
      {paymentStatus === "error" && (
        <div
          style={{
            paddingLeft: "150px",
            fontWeight: "501",
            color: "red",
            marginBottom: "15px",
            fontFamily: "Inter",
            fontSize: "30px",
          }}
        >
          {" "}
          Payment capture failed. Please try again.{" "}
        </div>
      )}
      {/* Error Message Display */}
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </StyledContainer>
  );
};

export default PaymentProposal;
