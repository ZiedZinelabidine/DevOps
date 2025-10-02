import { useState } from "react";
import { useCreateProjectMutation } from "../redux/api/projects/projectApi";

const useHandleSubmitProjectCreation = (formData) => {
  const [loading, setLoading] = useState(false); // State to control loading
  const [createProject, { isLoading }] = useCreateProjectMutation();

  const handleSubmit = async (orderID, sharesTotalPrice) => {
    setLoading(true); // Start loading
    let response;
    let success = false;
    formData.orderID = orderID;
    formData.sharesTotalPrice = sharesTotalPrice;
    try {
      response = await createProject(formData);

      if (response && response.data && response.data.id) {
        success = true;
        return {
          success: success,
          url: "projects",
          targetProductType: "SHARETASK",
          targetProductId: response.data.id,
          invoicingDescription: "Share Project with the community ItGalaxy",
        };
      } else {
        return {
          success: false,
          targetProductType: "SHARETASK",
          targetProductId: 0,
          invoicingDescription: "REFUND : error create project ",
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

export default useHandleSubmitProjectCreation;
