import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { priceProductCloud } from "data/priceProductCloud";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { productCloudForm } from "../../ItGalaxyProductCloudForm.config";
import { StyledLabel } from "../../style";

const ReservedDurationServerForm = ({
  type,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
}) => {
  const [showError, setShowError] = useState(false);
  const watchReservationDuration = formMethods.watch("reservationDuration");

  const handleValidateClick = () => {
    // Check if the company name is empty
    if (!watchReservationDuration) {
      setShowError(true); // Show error message if the field is empty
    } else {
      setShowError(false); // Clear error if valid
      onValidate(); // Proceed to validation logic
    }
  };
  let price_hours = 0;
  let totalPrice = 0; // Initialize totalPrice
  const formValues = formMethods.getValues();

  // Access the price directly in your component
  switch (formValues.typeServer.value) {
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

  if (formValues.reservationDuration) {
    totalPrice = price_hours * watchReservationDuration; // Compute total price
  }

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>4. How long did you need the server (hours)? </StyledLabel>{" "}
      <br />
      <GenericInput
        inputObject={{
          ...productCloudForm.reservationDuration,
        }}
        disabledForm={disableStep}
      />
      <p style={{ color: "white", marginTop: "10px", fontWeight: 501 }}>
        {" "}
        The reservation costs : {totalPrice.toFixed(2)} euro.{" "}
      </p>
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
          disabled={disableStep || !watchReservationDuration} // Disable if company name is empty
        >
          Confirm
        </Button>
      </div>
    </FormProvider>
  );
};

export default ReservedDurationServerForm;
