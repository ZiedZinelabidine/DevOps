import GenericInput from "components/Inputs/GenericInput/GenericInput";
import {
  COMPANY_EXIST,
  COMPANY_EXIST_ITEMS,
  COMPANY_NEW,
  COMPANY_NEW_ITEMS,
} from "core/constants/depositCompanyForm.constants";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTypeCompany } from "../../../redux/slice/CompanyCreation/companyCreationSlice";
import { depositCompanyFormConfig } from "../DepositCompanyForm.config";
import { StyledFormContainer } from "./CompanyExistForm.style";

const CompanyExistForm = ({
  isEdit = true,
  onValidate,
  onCancel,
  setItems,
  formMethods,
  companyDataType,
  disableStep,
}) => {
  const dispatch = useDispatch();
  const watchCompanyExist = formMethods.watch("companyExist");
  const [showError, setShowError] = useState(false);

  const handleValidateClick = () => {
    if (!watchCompanyExist) {
      setShowError(true); // Show error message if not filled
    } else {
      setShowError(false); // Clear error if valid
      onValidate(); // Proceed to validation logic
    }
  };
  return (
    <FormProvider {...formMethods}>
      <StyledFormContainer>
        <GenericInput
          inputObject={{
            ...depositCompanyFormConfig.companyExist,
          }}
          disabledForm={disableStep}
          label="Yes"
          value={watchCompanyExist}
          defaultValue={companyDataType === COMPANY_EXIST}
          onChange={(value) => {
            if (value === 1) {
              dispatch(addTypeCompany(COMPANY_EXIST));
              setItems(COMPANY_EXIST_ITEMS);
            } else {
              dispatch(addTypeCompany(COMPANY_NEW));
              setItems(COMPANY_NEW_ITEMS);
            }
          }}
        />
        {showError && (
          <div style={{ color: "red", marginTop: "10px" }}>
            <strong>Please select an option.</strong>
          </div>
        )}
      </StyledFormContainer>
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          disabled={!watchCompanyExist} // Disable if no option selected
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
        >
          Confirm
        </Button>
      </div>
    </FormProvider>
  );
};

export default CompanyExistForm;
