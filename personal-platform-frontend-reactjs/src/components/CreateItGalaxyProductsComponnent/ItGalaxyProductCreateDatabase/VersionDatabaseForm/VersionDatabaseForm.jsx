import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { productCloudForm } from "../../ItGalaxyProductCloudForm.config";
import { SearchFilterRegion, StyledLabel } from "../../style";

const VersionDatabaseForm = ({
  type,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
}) => {
  const [showError, setShowError] = useState(false);
  const watchDatabaseMongodbVersion = formMethods.watch(
    "databasemongodbVersion"
  );
  const watchDatabasePostgresVersion = formMethods.watch(
    "databasepostgresVersion"
  );
  const watchDatabaseMysqlVersion = formMethods.watch("databasemysqlVersion");

  const handleValidateClick = () => {
    if (
      !watchDatabaseMongodbVersion &&
      !watchDatabasePostgresVersion &&
      !watchDatabaseMysqlVersion
    ) {
      setShowError(true); // Show error message if the field is empty
    } else {
      setShowError(false); // Clear error if valid
      onValidate(); // Proceed to validation logic
    }
  };

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>1. Choice the version of your database ?</StyledLabel> <br />
      <SearchFilterRegion>
        {type === "mongodb" && (
          <GenericInput
            inputObject={{
              ...productCloudForm.databasemongodbVersion,
            }}
          />
        )}

        {type === "postgres" && (
          <GenericInput
            inputObject={{
              ...productCloudForm.databasepostgresVersion,
            }}
          />
        )}

        {type === "mysql" && (
          <GenericInput
            inputObject={{
              ...productCloudForm.databasemysqlVersion,
            }}
          />
        )}
      </SearchFilterRegion>
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
          disabled={
            disableStep ||
            (!watchDatabasePostgresVersion &&
              !watchDatabaseMongodbVersion &&
              !watchDatabaseMysqlVersion)
          } // Disable if company name is empty
        >
          Confirm
        </Button>
      </div>
    </FormProvider>
  );
};

export default VersionDatabaseForm;
