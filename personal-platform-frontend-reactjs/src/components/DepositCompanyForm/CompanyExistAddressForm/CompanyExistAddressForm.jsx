import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useUpdateCompanyMutation } from "../../../redux/api/company/companyApi";
import { useUpdateRequestCompanyCreationMutation } from "../../../redux/api/requestCompanyCreation/requestCompanyCreationApi";
import { getURL, s3Upload } from "../../../redux/api/uploads/uploadSlice";
import { fileToBase64, s3UrlToFile } from "../../../utils/fileConvertion"; // Make sure this utility function exists
import { depositCompanyFormConfig } from "../DepositCompanyForm.config";
import { SearchFilterRegion, StyledLabel,StyledIdentityInputsContainerFile } from "../DepositCompanyForm.style";

const CompanyExistAddressForm = ({
  isEdit = true,
  data,
  companyType,
  onValidate,
  onCancel,
  formMethods,
  disableStep,
  refetchCompany,
  refetchCompanyRequestCreation,
}) => {
  const [showError, setShowError] = useState(false);
  const watchCompanyCountry = formMethods.watch("companyCountry");
  const watchCompanyAddress = formMethods.watch("companyAddress");
  const watchcompanyAddressProofAttachment = formMethods.watch(
    "companyAddressProofAttachment"
  );
  const status = (data && data[0]) ? data[0].company_location_status  : "INITIAL";

  const defaultValue = data
    ? [
        {
          title: data[0]?.company_country,
          label: data[0]?.company_country,
          value: data[0]?.company_country,
        },
      ]
    : [];

  const folder =
    companyType === "Company Exist" ? "company" : "request_company_creation";
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [updateCompany] = useUpdateCompanyMutation();
  const [updateRequestCompany] = useUpdateRequestCompanyCreationMutation();

  // Fetch URL data for company location
  const getUrlData = async () => {
    try {
      const result = await dispatch(
        getURL({ location: `${folder}/${data[0]?.id}/companyAddress/` })
      );
      const companyLocationPath = result?.Contents?.[0]?.Key;

     if (companyLocationPath) {
        const partsLocation = companyLocationPath.split(
                `${folder}/${data[0]?.id}/companyAddress/`
        );
        const nameLocation = partsLocation.length > 1 ? partsLocation[1] : "";
        const imageUrltoFileLocation = await s3UrlToFile(
            
          `${process.env.REACT_APP_S3_URL}/${companyLocationPath}`,
          nameLocation);
                
        formMethods.setValue("companyAddressProofAttachment", imageUrltoFileLocation.file, {
                          shouldValidate: true,
                          shouldDirty: true,
                          shouldTouch: true,
         });
      
      } 

    } catch (error) {
      console.error("Error fetching URL data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUrlData();
  }, [data]);

  const handleValidateClick = async () => {
    // Check if required fields are empty
    if (
      !watchCompanyCountry ||
      !watchCompanyAddress ||
      !watchcompanyAddressProofAttachment
    ) {
      setShowError(true);
      return; // Exit the function if validation fails
    } else {
      setShowError(false);
    }

    if (status === "ACTION_REQUIRED") {
      const body = {
        company_location_status: "VERIFICATION",
        company_country: watchCompanyCountry.value,
        company_location: watchCompanyAddress,
      };

      let response;
      try {
        if (folder === "company") {
          response = await updateCompany({
            companyId: data[0]?.id,
            companyData: body,
          });
          const basePath = `company/${response.data.id}/`;
          await uploadAddressProof(basePath);
        } else if (folder === "request_company_creation") {
          response = await updateRequestCompany({
            requestCompanyCreationId: data[0]?.id,
            requestCompanyCreationData: body,
          });
          const basePath = `request_company_creation/${response.data.id}/`;
          await uploadAddressProof(basePath);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
      onValidate(); // Call onValidate after successful update
    } else {
      onValidate(); // Call onValidate after successful update
    }
  };

  const uploadAddressProof = async (basePath) => {
    await dispatch(
      s3Upload({
        file: watchcompanyAddressProofAttachment,
        type: "companyAddress/", // Ensure this matches
        base64URL: await fileToBase64(watchcompanyAddressProofAttachment),
        location: basePath,
        onepart: true,        
      })
    );
  };

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>1. What's your company country?</StyledLabel>
      <SearchFilterRegion>
        <GenericInput
          inputObject={{
            ...depositCompanyFormConfig.companyCountry,
            defaultValue: defaultValue, // Default value here if your GenericInput supports it
          }}
          disabledForm={disableStep}
        />
      </SearchFilterRegion>

      <StyledLabel>2. What's your company address?</StyledLabel>
      
      <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.companyAddress,
        }}
        disabledForm={disableStep}
        label="What's your company address?"
      />
       <StyledIdentityInputsContainerFile>

      <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.companyAddressProofAttachment,
        }}
        disabledForm={disableStep}
        label="Upload your address proof?"
        isEdit={!disableStep}
        value={watchcompanyAddressProofAttachment}
      />
      </StyledIdentityInputsContainerFile>

      {/* Error message section */}
      {showError && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Please fill in all required fields.</strong>
        </div>
      )}
      {(status === "ACTION_REQUIRED" || status === "INITIAL")  && (

      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick}
          disabled={
            (!status && !watchCompanyCountry) ||
            (!status && !watchCompanyAddress) ||
            (!status && !watchcompanyAddressProofAttachment) 
          } // Disable if inputs are empty
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

export default CompanyExistAddressForm;
