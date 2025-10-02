import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { depositCompanyFormConfig } from "../DepositCompanyForm.config";
import { useUpdateCompanyMutation } from "../../../redux/api/company/companyApi";
import { useUpdateRequestCompanyCreationMutation } from "../../../redux/api/requestCompanyCreation/requestCompanyCreationApi";
import { StyledInput } from "../DepositCompanyForm.style";

const CompanyExistNameForm = ({
  isEdit = true,
  companyType,
  data,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
  refetchCompany,
  refetchCompanyRequestCreation,
}) => {
  const [showError, setShowError] = useState(false);
  const [updateCompany] = useUpdateCompanyMutation();
  const [updateRequestCompany] = useUpdateRequestCompanyCreationMutation();
  const folder =
  companyType === "Company Exist" ? "company" : "request_company_creation";
  const [loading, setLoading] = useState(false);   
  const watchCompanyName = formMethods.watch("companyName");
  const status = (data && data[0]) ? data[0].company_name_status : "INITIAL";


  console.log('========watchCompanyName========',watchCompanyName);

  const handleValidateClick = async () => {
    // Check if required fields are empty
    if (
      !watchCompanyName
    ) {
      setShowError(true);
      return; // Exit the function if validation fails
    } else {
      setShowError(false);
    }

    if (status === "ACTION_REQUIRED") {
      const body = {
        company_name_status: "VERIFICATION",
        company_name: watchCompanyName,
      };

      let response;
      try {
        if (folder === "company") {
          response = await updateCompany({
            companyId: data[0]?.id,
            companyData: body,
          });
        } else if (folder === "request_company_creation") {
          response = await updateRequestCompany({
            requestCompanyCreationId: data[0]?.id,
            requestCompanyCreationData: body,
          });
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      onValidate(); // Call onValidate after successful update
    }
  };


  return (
    <FormProvider {...formMethods}>
     <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.companyName,
        }}
        disabledForm={disableStep}
        placeholder="What's the name of your company?"
      />


      {/* Error message section */}
      {showError && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Please enter the name of your company.</strong>
        </div>
      )}
      { ((status === "INITIAL") || (status === "ACTION_REQUIRED")) && (
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
          disabled={!watchCompanyName} // Disable if company name is empty
        >
       {loading ? (
              <>
         <Spinner animation="border" size="sm" />{" "}
           {/* Spinner for loading indicator */}
          <span style={{ marginLeft: "5px" }}>Updating...</span>
          </>
            ) : (
         "Confirm"
        )}  
        </Button>
      </div>)}
    </FormProvider>
  );
};

export default CompanyExistNameForm;
