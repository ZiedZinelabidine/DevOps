import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import {
  getTokenFromLocalStorage,
  sendNotificationEmail,
} from "../core/helpers/storage";
import { useGenrateInvoicingMutation } from "../redux/api/genrateInvoicing/genrateInvoicingApi";
import { useAddInvoicingMutation } from "../redux/api/invoicing/invoicingApi";
import { useRefundStripePaymentMutation } from "../redux/api/payment/paymentApi";
import {
  useUpdateProposalEntrepriseMutation,
  useUpdateProposalMutation,
} from "../redux/api/proposals/proposalApi";

const useHandleSubmitUpdateProposal = (proposal, formMethods) => {
  const [updateEntrepriseProposal] = useUpdateProposalEntrepriseMutation();
  const [updateProposalShareTask] = useUpdateProposalMutation();
  const [refundStripe] = useRefundStripePaymentMutation();
  const [createInvoice] = useAddInvoicingMutation();
  const [loading, setLoading] = useState(false);
  const [generateInvoicing] = useGenrateInvoicingMutation();
  const token = getTokenFromLocalStorage();
  const decodedToken = token ? jwtDecode(token) : null;
  const payerId = decodedToken?.id;
  const payerType = decodedToken?.role;
  const payerEmail = decodedToken?.email;
  const payerName =
    payerType === "ENTREPRISE"
      ? decodedToken?.username
      : decodedToken?.name + " " + decodedToken?.first_name;
  const date = new Date();  // returns the number of milliseconds since Jan 1, 1970
  const now = String(`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`);


  const updateProposal = async (
    status,
    additionalData,
    typeProposal,
    comment
  ) => {
    try {
      const updateBody = {
        proposalData: { status, ...additionalData },
        comment: comment,
      };

      const response =
        typeProposal === "COMPOSED_FREELANCE"
          ? await updateEntrepriseProposal({
            body: updateBody,
            id: proposal.id,
          }).unwrap()
          : await updateProposalShareTask({
            body: updateBody,
            id: proposal.id,
          }).unwrap();
      return response;
    } catch (error) {
      console.error("Error during proposal update:", error);
      return null;
    }
  };

  const handleDecline = async () => {
    try {
      setLoading(true);
      // Update the proposal status to 'DECLINED' with a reason comment
      const declineResponse = await updateProposal(
        "DECLINED",
        {
          proposal_description:
            "Reason decline: " + formMethods.getValues("comment"),
        },
        proposal.type
      );

      // Check if the proposal was successfully declined
      if (declineResponse && declineResponse.data && declineResponse.data.status === "DECLINED" && proposal.orderID) {
        try {
          await refundStripe({
            body: { paymentIntentId: proposal.orderID, amount: Number(proposal.totalPrice) * 100 },
          }).unwrap();

          // Create an invoice reflecting the refund
          const invoice = await createInvoice({
            payerId: payerId,
            payerType: payerType,
            payerName: payerName,
            payerEmail: payerEmail,
            payerCountryDetails: "",
            price: declineResponse.data.totalPrice.toFixed(2),
            paymentType: "card",
            targetProductType: declineResponse.data.type,
            targetProductId: declineResponse.data.id,
            orderId: proposal.orderID || "on the first step",
            invoicingDescription: "Proposal Declined",
            status: "REFUND",
          });

          const sendInvoicing = await generateInvoicing({
            fileFolder: "invoices/" + invoice.data.type + "s",
            fileName: "facture" + invoice.data.id + ".pdf",
            id: invoice.data.id,
            status: "Rembourssement",
            date: now,
            items: [
              {
                title: invoice.data.invoicingDescription,
                price: (invoice.data.price / 1.2).toFixed(2),
                tax: 20,
              },
            ],
            customer: {
              summary: invoice.data.payerName,
              address_line_1: invoice.data.payerCountryDetails,
              email: invoice.data.payerEmail,
            },
          });

          await sendNotificationEmail(
            declineResponse.user.email,
            "NOTIFICATION_PROPOSAL_DENIED"
          );
          setLoading(false);

          window.location.href = `/projects`;

          return { success: true };
        } catch (error) {
          console.error("Error during refund or invoicing:", error);
        } finally {
          setLoading(false);
        }
      } else if (declineResponse && declineResponse.data && declineResponse.data.status === "DECLINED" && !proposal.orderID) {

        await sendNotificationEmail(
          declineResponse.user.email,
          "NOTIFICATION_PROPOSAL_DENIED"
        );
        setLoading(false);
        window.location.href = `/projects`;
      }
    } catch (error) {
      console.error("Error updating proposal:", error.message);
    } finally {
      setLoading(false);
    }

    return { success: false };
  };

  const handleActivateSubmit = async (orderID, setLoading) => {

    setLoading(true);
    const submitResponse = await updateProposal(
      "VALIDATED",
      { orderID: orderID },
      proposal.type
    );
    if (
      submitResponse &&
      submitResponse.data &&
      submitResponse.data.status === "VALIDATED"
    ) {
      await sendNotificationEmail(
        submitResponse.user.email,
        "NOTIFICATION_PROPOSAL_ACCEPTED"
      );

      return {
        success: true,
        url: "projects",
        targetProductType: submitResponse.data.type,
        targetProductId: submitResponse.data.id,
        invoicingDescription: "VALIDATED the proposal",
      };
    }
    setLoading(false);
    return {
      success: false,
      targetProductType: proposal.type,
      targetProductId: proposal.id,
      invoicingDescription: "REFUND : error create proposal ",
    };
  };

  const handleFinishSubmit = async (comment, starts) => {
    setLoading(true);
    const submitResponse = await updateProposal("FINISHED", {}, proposal.type, {
      stars: starts,
      comment_text: comment,
    });
    if (
      submitResponse &&
      submitResponse.data &&
      submitResponse.data.status === "FINISHED"
    ) {
      try {
        await sendNotificationEmail(
          submitResponse.user.email,
          "NOTIFICATION_PROPOSAL_FINISHED"
        );
        setLoading(false);
        return { success: true, url: "projects" };
      } catch (error) {
        setLoading(false);
        console.error("Error during message sending:", error.message);
        return { success: false };
      }
    }

    return { success: false };
  };

  return {
    handleDecline,
    handleActivateSubmit,
    handleFinishSubmit,
    loading,
    setLoading,

  };
};

export default useHandleSubmitUpdateProposal;
