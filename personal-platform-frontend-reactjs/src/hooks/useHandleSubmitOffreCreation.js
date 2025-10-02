import { useState } from "react";
import { useCreateAppelOffreMutation } from "../redux/api/appeloffres/appeloffreApi";

const useHandleSubmitOffreCreation = (formData) => {
  const [loading, setLoading] = useState(false); // State to control loading
  const [createOffre, { isLoading }] = useCreateAppelOffreMutation();

  const handleSubmit = async (orderID, sharesTotalPrice) => {
    setLoading(true); // Start loading
    let response;
    let success = false;
    formData.orderID = orderID;
    formData.sharesTotalPrice = sharesTotalPrice;
    try {
      response = await createOffre(formData); // Handle promise
      if (response && response.data && response.data.id) {
        success = true;
        return {
          success: success,
          url: "projects",
          targetProductType: "Contrat",
          targetProductId: response.data.id,
          invoicingDescription: "Share Offre with the community ItGalaxy",
        };
      } else {
        return {
          success: false,
          targetProductType: "Contrat",
          targetProductId: 0,
          invoicingDescription: "REFUND : error create offre ",
        };
      }
    } catch (error) {
      // Handle error properly (you can also set error state if needed)
      console.error("Error during proposal creation:", error);
    } finally {
      setLoading(false); // Stop loading regardless of the outcome
    }
  };

  return { handleSubmit, loading }; // Return loading state
};

export default useHandleSubmitOffreCreation;
