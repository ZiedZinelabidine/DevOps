import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { priceProductCloud } from "data/priceProductCloud";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { productCloudForm } from "../../ItGalaxyProductCloudForm.config";
import { SearchFilterRegion, StyledLabel } from "../../style";

const CapacityDatabaseForm = ({
  type,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
}) => {
  const [showError, setShowError] = useState(false);
  const watchDatabaseCapacity = formMethods.watch("databaseCapacity");
  const watchDatabaseStorage = formMethods.watch("databaseStorage");
  const [priceHours, setPriceHours] = useState(0);

  const handleValidateClick = () => {
    if (!watchDatabaseCapacity || !watchDatabaseStorage) {
      setShowError(true);
    } else {
      setShowError(false);
      onValidate();
    }
  };

  useEffect(() => {
    const priceKey = `database_${watchDatabaseCapacity?.value}_${watchDatabaseStorage?.value}`;
    const price = priceProductCloud[priceKey];
    setPriceHours(price ? price : 0);
  }, [watchDatabaseCapacity, watchDatabaseStorage]);

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>1. Choose the type of your database:</StyledLabel>
      <br />

      <SearchFilterRegion>
        <GenericInput
          inputObject={{
            ...productCloudForm.databaseCapacity,
          }}
        />
      </SearchFilterRegion>

      <StyledLabel>2. Choose the storage of your database:</StyledLabel>
      <br />

      <SearchFilterRegion>
        <GenericInput
          inputObject={{
            ...productCloudForm.databaseStorage,
          }}
        />
      </SearchFilterRegion>

      <p style={{ color: "white", marginTop: "10px" }}>
        The reservation costs: {priceHours?.toFixed(2)} euro per hour.
      </p>

      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
          disabled={
            disableStep || !watchDatabaseCapacity || !watchDatabaseStorage
          } // Disable if fields are empty
        >
          Confirm
        </Button>
      </div>
    </FormProvider>
  );
};

export default CapacityDatabaseForm;
