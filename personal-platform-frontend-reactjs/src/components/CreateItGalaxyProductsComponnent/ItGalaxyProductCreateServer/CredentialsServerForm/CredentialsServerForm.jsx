import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { productCloudForm } from "../../ItGalaxyProductCloudForm.config";
import { StyledLabel, StyleInputCred } from "../../style";

const CredentialsServerForm = ({
  isEdit = true,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
  refetchCompany,
  refetchCompanyRequestCreation,
}) => {
  const [showError, setShowError] = useState(false);
  const watchCredentialUsername = formMethods.watch("credentialUsername");
  const watchCredentialPassword = formMethods.watch("credentialPassword");

  const handleValidateClick = () => {
    // Check if the company name is empty
    if (!watchCredentialUsername || !watchCredentialPassword) {
      setShowError(true); // Show error message if the field is empty
    } else {
      setShowError(false); // Clear error if valid
      onValidate(); // Proceed to validation logic
    }
  };

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>
        3. Set up the credentials of your server , it will be used for
        connection{" "}
      </StyledLabel>{" "}
      <br />
      <StyleInputCred>
        <GenericInput
          inputObject={{
            ...productCloudForm.credentialUsername,
          }}
        />
      </StyleInputCred>
      <StyleInputCred>
        <GenericInput
          inputObject={{
            ...productCloudForm.credentialPassword,
          }}
        />
      </StyleInputCred>
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
          disabled={
            disableStep || !watchCredentialUsername || !watchCredentialPassword
          } // Disable if company name is empty
        >
          Confirm
        </Button>
      </div>
    </FormProvider>
  );
};

export default CredentialsServerForm;
