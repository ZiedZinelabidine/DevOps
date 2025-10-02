import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { priceProductCloud } from "data/priceProductCloud";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { productCloudForm } from "../../ItGalaxyProductCloudForm.config";
import { SearchFilterRegion, StyledLabel } from "../../style";

const TypeServerForm = ({
  type,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
}) => {
  const [showError, setShowError] = useState(false);
  const watchTypeServer = formMethods.watch("typeServer");
  let price_hours = 0;
  let totalPrice = 0; // Initialize totalPrice

  const handleValidateClick = () => {
    // Check if the company name is empty
    if (!watchTypeServer) {
      setShowError(true); // Show error message if the field is empty
    } else {
      setShowError(false); // Clear error if valid
      onValidate(); // Proceed to validation logic
    }
  };

  // Access the price directly in your component
  switch (watchTypeServer?.value) {
    case "nano":
      price_hours = priceProductCloud[`server_${type}_nano`];
      break;
    case "micro":
      price_hours = priceProductCloud[`server_${type}_micro`];
      break;
    case "small":
      price_hours = priceProductCloud[`server_${type}_small`];
      break;
    case "medium":
      price_hours = priceProductCloud[`server_${type}_medium`];
      break;
    default:
      console.warn("Unknown server type"); // Handle unexpected values
      break;
  }

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>2. Choice the capacity of your server ?</StyledLabel> <br />
      <SearchFilterRegion>
        <GenericInput
          inputObject={{
            ...productCloudForm.typeServer,
          }}
          disabledForm={disableStep}
          placeholder="Choice the type of your server?"
        />
      </SearchFilterRegion>
      <p style={{ color: "red", fontWeight: 501, marginTop: "10px" }}>
        {" "}
        The price of {watchTypeServer?.value} server : {price_hours} euro per
        hour
      </p>
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
          disabled={disableStep || !watchTypeServer} // Disable if company name is empty
        >
          Confirm
        </Button>
      </div>
    </FormProvider>
  );
};

export default TypeServerForm;
