import { useState } from "react";
import { useAddMarketplaceItgalaxyMutation } from "../redux/api/marketplaceItgalaxy/marketplaceItgalaxyApi";


const useHandleSubmitItGalaxyProduct = (
  userId,
  userType,
  formMethods,
  os
) => {
  const [createMarketplaceProduct, { isLoading }] = useAddMarketplaceItgalaxyMutation();
  const formValues = formMethods.getValues();

  const handleServerSubmit = async (orderID, totalPrice , setLoading) => {
    let response;
    let success = false;

    try {
      response = await createMarketplaceProduct({
        buyerId: userId,
        buyerType: userType,
        productType: "SERVER",
        details: {
          TYPE: formValues.typeServer.value,
          OS: os,
          USER: formValues.credentialUsername,
          PASSWORD: formValues.credentialPassword,
          RESERVATION_TIME: parseInt(formValues.reservationDuration)
        },
        orderID: orderID,
        totalPrice: totalPrice
      });
      if (response && response.data && response.data.id) {
        success = true;
        return {
          success: success,
          url: `itgalaxyProductPurchased/${response.data.display}`,     
          targetProductType: 'marketplaceProduct',
          targetProductId: response.data.id,
          invoicingDescription: 'ItGalaxy Product : ' + os + ' Server',
        };
      } else {
        return {
          success: false,
          targetProductType: 'marketplaceProduct',
          targetProductId: response.data.id,
          invoicingDescription: "REFUND : error ItGalaxy Product : " + os + " Server ",
        }
      }
    } catch (error) {
      // Handle error properly (you can also set error state if needed)
      console.error('Error during product creation:', error);

    } 
  };

  const handleDatabaseSubmit = async (orderID, totalPrice , setLoading) => {
    setLoading(true);
    let response;
    let success = false;
    let json_version = formValues[`database${os}Version`] ;
    try {
      response = await createMarketplaceProduct({
        buyerId: userId,
        buyerType: userType,
        productType: "DATABASE",
        details: {
          RESSOURCE: "databases",
          TYPE: os,
          VERSION: json_version.value, // Correctly accessing the dynamic version
          RESSOURCE_CAPACITY: formValues.databaseCapacity.value,
          RESSOURCE_STORAGE: formValues.databaseStorage.value,
          RESSOURCE_PASSWORD: formValues.credentialPassword,
          RESSOURCE_USERNAME: formValues.credentialUsername,
          RESSOURCE_DATABASE_NAME: formValues.databaseName,
          RESERVATION_TIME: parseInt(formValues.reservationDuration, 10) // Specify base 10 for clarity
        },
        orderID: orderID,
        totalPrice: totalPrice
      });

      if (response && response.data && response.data.id) {
        success = true;
        return {
          success: success,
          url: `itgalaxyProductPurchased/${response.data.display}`,     
          targetProductType: 'MARKETPLACE',
          targetProductId: response.data.id,
          invoicingDescription: 'ItGalaxy Product : ' + os + 'Database',
        };
      } else {
        return {
          success: false,
          targetProductType: 'MARKETPLACE',
          targetProductId: response.data.id,
          invoicingDescription: "REFUND : error ItGalaxy Product : " + os + " Server ",
        }
      }
    } catch (error) {
      // Handle error properly (you can also set error state if needed)
      console.error('Error during product creation:', error);

    } 
  };

  return { handleServerSubmit, handleDatabaseSubmit }; // Return loading state
};

export default useHandleSubmitItGalaxyProduct;

