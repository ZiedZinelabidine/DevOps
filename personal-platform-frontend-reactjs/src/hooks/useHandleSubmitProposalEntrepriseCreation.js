import { useState } from "react";
import {
  removeProjectProposalEntrepriseCreationLocalStorage,
  removeProposalEntrepriseCreationFromLocalStorage,
  sendNotificationEmail,
} from "../core/helpers/storage";
import { useAddProposalEntrepriseMutation } from "../redux/api/proposals/proposalApi";

const useHandleSubmitProposalEntrepriseCreation = (
  requestproposalEntreprise
) => {
  const [loading, setLoading] = useState(false); // State to control loading
  const [createProposalEntreprise, { isLoading }] =
    useAddProposalEntrepriseMutation();

  const handleSubmit = async (orderID,price) => {
    setLoading(true); // Start loading
    let success = false;
    let response;

    requestproposalEntreprise.projectData.orderID = orderID ;
    requestproposalEntreprise.projectData.sharesTotalPrice = price ;

    try {
      response = await createProposalEntreprise(requestproposalEntreprise);

      const { project, proposals } = response?.data || {};

      // Check if the response is valid and project status is ACTIVE
      if (project && project.status === "ACTIVE") {
        const notificationPromises = proposals.map((proposal) =>
          sendNotificationEmail(
            proposal.user.email,
            "NOTIFICATION_NEW_PROPOSAL"
          )
        );

        await Promise.all(notificationPromises); // Ensure all emails are sent

        removeProjectProposalEntrepriseCreationLocalStorage();
        removeProposalEntrepriseCreationFromLocalStorage();
        success = true;

        return {
          success: success,
          url: "projects",
          targetProductType: "COMPOSED_FREELANCE",
          targetProductId: response.data.project.id,
          invoicingDescription: "Share Job with the community ItGalaxy",
        };
      } else {
        return {
          success: false,
          targetProductType: "COMPOSED_FREELANCE",
          targetProductId: 0,
          invoicingDescription: "REFUND : error create proposal entreprise  ",
        };
      }
    } catch (error) {
      // Log and handle errors properly
      console.error("Error during proposal creation:", error);
    } finally {
      setLoading(false); // Stop loading regardless of outcome
    }

    // In case of failure, return an object indicating failure
    return {
      success: false,
    };
  };

  return { handleSubmit, loading }; // Return loading state
};

export default useHandleSubmitProposalEntrepriseCreation;
