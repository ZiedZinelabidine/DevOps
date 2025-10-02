import { getTokenFromLocalStorage } from 'core/helpers/storage';
import { jwtDecode } from "jwt-decode";
import { Wallet } from "lucide-react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBalanceFromLocalStorage } from '../../../core/helpers/storage';
import { useGenrateInvoicingMutation } from '../../../redux/api/genrateInvoicing/genrateInvoicingApi';
import { useAddInvoicingMutation } from '../../../redux/api/invoicing/invoicingApi';
import { useRefundWalletPaymentMutation, useRefundStripePaymentMutation, useCreatePaymentWithWalletMutation } from "../../../redux/api/payment/paymentApi";
import {
    BalanceAmount,
    BalanceTitle,
    Section,
    StyledContainer,
    SubmitButton,
    WalletBalance,
    WalletDetails
} from './Payment.style';
import PaymentForm from './PaymentForm';
import { CreditCard } from 'lucide-react';
import { Spinner } from "react-bootstrap";


const Payment = (props) => {

    const [showPaymentWallet, setShowPaymentWallet] = useState(false);
    const [showPaymentCard, setShowPaymentCard] = useState(false);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [statusStripePayment, setStatusStripePayment] = useState('INITIAL');
    const [paymentStatus, setPaymentStatus] = useState("inprogress");
    const [orderId, setOrderId] = useState(null);
    const [createPaymentWallet] = useCreatePaymentWithWalletMutation();
    const [createInvoice] = useAddInvoicingMutation();
    const [refundWalletPayment] = useRefundWalletPaymentMutation();
    const [refundStripe] = useRefundStripePaymentMutation();
    const [generateInvoicing] = useGenrateInvoicingMutation();

    const balance = getBalanceFromLocalStorage();

    const token = getTokenFromLocalStorage();
    const decodedToken = token ? jwtDecode(token) : null;
    const payerId = decodedToken?.id;
    const payerType = decodedToken?.role;
    const stripe_id = decodedToken?.stripe_id;
    const payerEmail = decodedToken?.email;
    const payerName = payerType === 'ENTREPRISE' ? decodedToken?.username : decodedToken?.name + " " + decodedToken?.first_name;
    const date = new Date();  // returns the number of milliseconds since Jan 1, 1970
    const now = String(`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`);


    const navigate = useNavigate();
    const [urlNavigate, setUrlNavigate] = useState();

    const handleWalletPayment = () => {
        setShowPaymentWallet(true)
        setShowPaymentCard(false)

    };
    const handleStripePayment = () => {
        setShowPaymentWallet(false);
        setShowPaymentCard(true);
    };

    useEffect(() => {
        const processPayment = async () => {
            if (statusStripePayment === 'SUCCESS_PAYMENT_STRIPE' && orderId) {
                try {
                    const productCreationSuccess = await props.onSubmit(orderId, props.totalCost , setLoading);

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
                        // console.log("Send invoice success:", sendInvoicing);
                        setLoading(false);
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

                        const sendRefundInvoicing = await generateInvoicing({
                            fileFolder: `invoices/${refundInvoice.type}s`,
                            fileName: `facture_${refundInvoice.id}.pdf`,
                            id: refundInvoice.id,
                            status: "Rembourssement",
                            date: now,
                            items: [{
                                title: refundInvoice.invoicingDescription,
                                price: (refundInvoice.price / 1.2),
                                tax: 20,
                            }],
                            customer: {
                                summary: refundInvoice.payerName,
                                address_line_1: refundInvoice.payerCountryDetails,
                                email: refundInvoice.payerEmail,
                            },
                        }).unwrap();

                        console.log("Send refund invoice success:", sendRefundInvoicing);
                    }
                } catch (error) {
                    handleError("An error occurred while processing the payment.");
                    setPaymentStatus('error');
                }
            }
        };

        processPayment(); // Call the async function defined above

    }, [statusStripePayment, orderId]); // Dependency array should contain all necessary states


    useEffect(() => {
        if (paymentStatus === 'success' && urlNavigate) {
            const timer = setTimeout(() => {
                window.location.href = `${urlNavigate}`;
            }, 1000);
        }
    }, [paymentStatus, urlNavigate, navigate]);


    const handleWalletSubmit = async () => {
        setLoading(true);
        let productCreationSuccess;
        try {
            const orderData = await createPaymentWallet({
                amount: Number(props.totalCost),
                customerId: payerId,
                customerType: payerType
            }).unwrap();

            if (orderData.status === "success") {
                productCreationSuccess = await props.onSubmit("wallet" + orderData.id, Number(props.totalCost));
            } else {
                const refund = await refundWalletPayment({
                    amount: Number(props.totalCost),
                    payerId: payerId,
                    payerType: payerType,
                }).unwrap();
                setPaymentStatus('error');
            }
        } catch (error) {
            handleError('Payment capture failed. Please try again.');
            setPaymentStatus('error');
        } finally {
            setPaymentStatus('success');
            setUrlNavigate(productCreationSuccess.url);
            setLoading(false);
        }
    };

    const handleError = (errorMessage) => {
        setError(errorMessage);
        setTimeout(() => setError(null), 5000); // Clear error after 5 seconds
    };

    return (
        <StyledContainer>
            {paymentStatus === 'inprogress' && (
                <Section>
                    <h3 style={{ marginBottom: '15px', textAlign: 'center' }}> {props.title} </h3>
                    <p style={{ marginLeft: '20%', marginBottom: '10px', color: '#666' }}>
                        {props.note}
                    </p>

                    {payerType !== "ENTREPRISE" && (
                        <SubmitButton
                            onClick={handleStripePayment}
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                marginBottom: '10px',
                                fontFamily: 'Inter',
                                fontWeight: '501',
                                width: "50%",
                                marginLeft: "25%"
                            }}
                        >
                            <CreditCard size={25} style={{ marginRight: '8px', verticalAlign: 'middle' }} />Pay by Card
                        </SubmitButton>
                    )}

                    {showPaymentCard && !showPaymentWallet && payerType !== "ENTREPRISE" && (

                        <PaymentForm stripe_id={stripe_id} totalCost={props.totalCost} setStatusStripePayment={setStatusStripePayment} loading={loading} setLoading={setLoading} setError={setError} setOrderId={setOrderId} />
                    )}

                    {payerType !== "ENTREPRISE" && (
                        <SubmitButton
                            onClick={handleWalletPayment}
                            style={{
                                backgroundColor: 'white',
                                color: 'black',
                                border: '1px solid black',
                                borderRadius: '4px',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                marginBottom: '10px',
                                fontFamily: 'Inter',
                                fontWeight: '501',
                                width: "50%",
                                marginLeft: "25%"
                            }}
                        >
                            <Wallet size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            {"Pay by Wallet "}
                        </SubmitButton>
                    )}


                    {payerType === "ENTREPRISE" && (
                        <PaymentForm
                            stripe_id={stripe_id}
                            totalCost={props.totalCost}
                            setStatusStripePayment={setStatusStripePayment}
                            setError={setError}
                            setOrderId={setOrderId}
                            loading={loading}
                            setLoading={setLoading}

                        />
                    )}
                    {showPaymentWallet && !showPaymentCard && payerType !== "ENTREPRISE" && (
                        <Section style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'
                        }}>
                            <WalletDetails>
                                <WalletBalance>
                                    <BalanceTitle>Balance in euro</BalanceTitle>
                                    <BalanceAmount>{Number(balance).toFixed(2)}</BalanceAmount>
                                </WalletBalance>
                            </WalletDetails>
                            <SubmitButton
                                onClick={handleWalletSubmit}
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
                                    fontWeight: '501'
                                }}
                            >
                                {loading ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        <Wallet size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                        {"Pay by Wallet Now"}
                                    </>
                                )}
                            </SubmitButton>
                        </Section>
                    )
                    }
                    {loading && <p>Loading, this action can take a 3 minutes please wait...</p>}
                </Section >)}
            {
                paymentStatus === 'success' && (
                    <div style={{ paddingLeft: '150px', fontWeight: '501', color: 'green', marginBottom: '15px', fontFamily: 'Inter', fontSize: '30px' }}>
                        Payment processed successfully!
                    </div>
                )
            }
            {
                paymentStatus === 'error' && (
                    <div style={{ paddingLeft: '150px', fontWeight: '501', color: 'red', marginBottom: '15px', fontFamily: 'Inter', fontSize: '30px' }}>
                        Payment capture failed. Please try again.
                    </div>
                )
            }
        </StyledContainer >
    );
};

export default Payment;
