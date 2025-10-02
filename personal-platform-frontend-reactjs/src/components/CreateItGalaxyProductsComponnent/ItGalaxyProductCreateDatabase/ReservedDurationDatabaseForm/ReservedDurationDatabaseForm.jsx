import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { priceProductCloud } from "data/priceProductCloud";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { productCloudForm } from "../../ItGalaxyProductCloudForm.config";
import { StyledLabel } from "../../style";

const ReservedDurationDatabaseForm = ({
  type,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
}) => {
  const [showError, setShowError] = useState(false);
  const watchReservationDuration = formMethods.watch("reservationDuration");
  const [priceHours, setPriceHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const formValues = formMethods.getValues();

  const handleValidateClick = () => {
    if (!watchReservationDuration) {
      setShowError(true);
    } else {
      setShowError(false); // Clear error if valid
      onValidate(); // Proceed to validation logic
    }
  };

  useEffect(() => {
    const priceKey = `database_${formValues.databaseCapacity.value}_${formValues.databaseStorage.value}`;
    const price = priceProductCloud[priceKey];

    setPriceHours(price ? price : 0);
    setTotalPrice(
      watchReservationDuration ? priceHours * watchReservationDuration : 0
    );
  }, [watchReservationDuration]);

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>4. How long did you need the server (hours)? </StyledLabel>{" "}
      <br />
      <GenericInput
        inputObject={{
          ...productCloudForm.reservationDuration,
        }}
      />
      <p style={{ color: "white", marginTop: "10px", fontWeight: 501 }}>
        {" "}
        The reservation costs : {totalPrice?.toFixed(2)} euro.{" "}
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

export default ReservedDurationDatabaseForm;
