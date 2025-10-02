import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getURL } from "../../../redux/api/uploads/uploadSlice";
import { depositCompanyFormConfig } from "../DepositCompanyForm.config";

const CompanyNewIBANForm = ({
  isEdit = true,
  companyType,
  data,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
  refetchCompanyRequestCreation,
}) => {
  const [showError, setShowError] = useState(false);
  const watchCompanyIBAN = formMethods.watch("companyIBAN");
  const watchIBANProofAttachment = formMethods.watch(
    "companyIBANProofAttachment"
  );

  const [previewCompanyIBAN, setPreviewCompanyIBAN] = useState(null);

  const folder =
    companyType === "Company Exist" ? "company" : "request_company_creation";
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getUrlData = async () => {
    setLoading(true); // Set loading state to true

    const fetchUrlData = async (location) => {
      try {
        const result = await dispatch(getURL({ location }));
        return result;
      } catch (error) {
        console.error(`Failed to fetch data from ${location}`, error);
        return null;
      }
    };
    try {
      const urlCompanyLocation = data
        ? await fetchUrlData(`${folder}/${data[0]?.id}/companyIBAN/`)
        : null;
      const companyLocationPath = urlCompanyLocation?.Contents?.[0]?.Key;

      if (companyLocationPath) {
        setPreviewCompanyIBAN(
          `${process.env.REACT_APP_S3_URL}/${companyLocationPath}`
        );
      } else {
        console.error("Company Location contents not found");
        setPreviewCompanyIBAN(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUrlData();
  }, []);

  const handleValidateClick = () => {
    // Check if required fields are empty
    if (!watchCompanyIBAN || !watchIBANProofAttachment) {
      setShowError(true); // Show error message if any field is empty
    } else {
      setShowError(false); // Clear error if valid
      onValidate(); // Proceed to validation logic
    }
  };

  return (
    <FormProvider {...formMethods}>
      <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.companyIBAN,
        }}
        disabledForm={disableStep}
        placeholder="Enter your IBAN"
      />
      <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.companyIBANProofAttachment,
        }}
        isEdit={isEdit}
        disabledForm={disableStep}
        previewInput={previewCompanyIBAN}
        placeholder="Upload IBAN proof document"
      />
      {/* Error message section */}
      {showError && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Please fill in all required fields.</strong>
        </div>
      )}
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick} // Use the validation handler
          disabled={!watchCompanyIBAN || !watchIBANProofAttachment} // Disable if required inputs are empty
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
      </div>
    </FormProvider>
  );
};

export default CompanyNewIBANForm;
