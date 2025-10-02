import { useState } from "react";
import { useAddSoldedProductsMutation } from "../redux/api/soldedProducts/soldedProductsApi";
import { sendNotificationEmail } from "core/helpers/storage";


const useHandleSubmitSoldedProductCreation = (
  formData
) => {
  const [loading, setLoading] = useState(false); // State to control loading
  const [createSoldedProduct, { isLoading }] = useAddSoldedProductsMutation();

  const handleSubmit = async (orderID , price) => {
    setLoading(true); // Start loading
    let response;
    let success = false;
    formData.orderID =  orderID ;
    try {
      response = await createSoldedProduct(formData);  
     
      if( response && response.data && response.data.id) {   
      success = true;

     await sendNotificationEmail(
        formData.email,
          "NOTIFICATION_NEW_SOLDED_PRODUCT"
        ); 

      return {
        success: success,
        url: `/productPurchased/${response.data.product.display}/`,   
        targetProductType: 'PRODUCT',
        targetProductId: response.data.id,    
        invoicingDescription:"Purchased a Product ItGalaxy",
      };
    } else {
      return {
         success: false,
         targetProductType: 'PRODUCT',
         targetProductId: 0,
         invoicingDescription: "REFUND : error Purchased a Product ItGalaxy ", 
      }
    }
    } catch (error) {
      console.error('Error during Purchased a Product ItGalaxy creation:', error);

    } finally {
      setLoading(false); // Stop loading regardless of the outcome
    }
  };

  return { handleSubmit, loading }; // Return loading state
};

export default useHandleSubmitSoldedProductCreation;

