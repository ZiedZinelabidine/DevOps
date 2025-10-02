import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { depositCompanyFormConfig } from "../DepositCompanyForm.config";
import { StyledFormContainer } from "./CompanyNewCreateForm.style";

const CompanyNewCreateForm = ({
  isEdit = true,
  onValidate,
  onCancel,
  setItems,
  formMethods,
  disableStep,
}) => {
  const [createNewCompany, setCreateNewCompany] = useState(false);
  const watchCreateNewCompany = formMethods.watch("createNewCompany");

  const handleConfirm = () => {
    if (watchCreateNewCompany === 2) {
      // Assuming 'No' has value 2
      const confirmation = window.confirm(
        "Are you sure you want to proceed with 'No'? This will redirect you to the chat."
      );
      if (confirmation) {
        window.location.href = "/"; // Redirect if user confirms
      }
    } else {
      // Call the validation function if 'Yes' is selected
      onValidate();
    }
  };

  return (
    <FormProvider {...formMethods}>
      <StyledFormContainer>
        <GenericInput
          inputObject={{
            ...depositCompanyFormConfig.createNewCompany,
          }}
          disabledForm={disableStep}
          label="Yes"
          onChange={(value) => setCreateNewCompany(value)}
          value={watchCreateNewCompany}
        />
      </StyledFormContainer>
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          disabled={!watchCreateNewCompany}
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleConfirm} // Use the confirmation handler
        >
          Confirm
        </Button>
      </div>
    </FormProvider>
  );
};

export default CompanyNewCreateForm;
