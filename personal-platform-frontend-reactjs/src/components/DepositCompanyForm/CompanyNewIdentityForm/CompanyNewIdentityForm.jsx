import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormProvider, useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getURL, s3Upload } from "../../../redux/api/uploads/uploadSlice";
import { depositCompanyFormConfig } from "../DepositCompanyForm.config";
import { SearchFilterRegion, StyledLabel } from "../DepositCompanyForm.style";
import { StyledIdentityInputsContainer,StyledIdentityInputsContainerFile } from "./CompanyNewIdentityForm.style";
import { fileToBase64, s3UrlToFile } from "utils/fileConvertion";
import { useUpdateCompanyMutation } from "../../../redux/api/company/companyApi";
import { useUpdateRequestCompanyCreationMutation } from "../../../redux/api/requestCompanyCreation/requestCompanyCreationApi";

const CompanyNewIdentityForm = ({
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

  const watchIdentityType = formMethods.watch("identityType");
  const watchIdentityNumber = formMethods.watch("identityNumber");
  const watchIdentityFrontProofAttachment = formMethods.watch(
    "cardIdentityFrontProofAttachment"
  ); 
  const watchIdentityBackProofAttachment = formMethods.watch(
    "cardIdentityBackProofAttachment"
  ); 
  const status_ID_Front = (data && data[0]) ? data[0]?.identity_front_status : "INITIAL";
  const status_ID_Back = (data && data[0]) ? data[0]?.identity_back_status : "INITIAL";

  const defaultValue = data
    ? [
        {
          title: data[0]?.identity_type,
          label: data[0]?.identity_type,
          value: data[0]?.identity_type,
        },
      ]
    : []; // Default value here if your GenericInput supports it

  const defaultValueNumber = data ? data[0]?.identity_number : ""; // Default value here if your GenericInput supports it
  const folder =
    companyType === "Company Exist" ? "company" : "request_company_creation";
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [updateCompany] = useUpdateCompanyMutation();
  const [updateRequestCompany] = useUpdateRequestCompanyCreationMutation();


 const uploadIdentity = async (basePath) => {
    await dispatch(
      s3Upload({
        file: watchIdentityFrontProofAttachment,
        type: "identityFront/", // Ensure this matches
        base64URL: await fileToBase64(watchIdentityFrontProofAttachment),
        location: basePath,
        onepart: true,        
      })
    );

    await dispatch(
      s3Upload({
        file: watchIdentityBackProofAttachment,
        type: "identityBack/", // Ensure this matches
        base64URL: await fileToBase64(watchIdentityBackProofAttachment),
        location: basePath,
        onepart: true,        
      })
    );
  };

  const handleValidateClick = async () => {
    setLoading(true); // Set loading state to true
    if (
      !watchIdentityType ||
      !watchIdentityNumber ||
      !watchIdentityFrontProofAttachment
    ) {
      setShowError(true);
      return; // Exit the function if validation fails
    } else {
      setShowError(false);
    }

    if ((status_ID_Front === "INITIAL" || status_ID_Front === "ACTION_REQUIRED") || (status_ID_Back === "INITIAL" || status_ID_Back === "ACTION_REQUIRED" )) {
      const body = {
        identity_front_status: "VERIFICATION",
        identity_back_status: "VERIFICATION",
        identity_number: watchIdentityNumber,
      };

      let response;
      try {
        if (folder === "company") {
          response = await updateCompany({
            companyId: data[0]?.id,
            companyData: body,
          });
          const basePath = `company/${response.data.id}/`;
          await uploadIdentity(basePath);

        } else if (folder === "request_company_creation") {
          response = await updateRequestCompany({
            requestCompanyCreationId: data[0]?.id,
            requestCompanyCreationData: body,
          });
          const basePath = `request_company_creation/${response.data.id}/`;
          await uploadIdentity(basePath);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
      setLoading(false); // Set loading state to true
      onValidate(); // Call onValidate after successful update
    } else {
      onValidate(); // Call onValidate after successful update
    }
  };
  
  const getUrlData = async () => {
    const fetchUrlData = async (location) => {
      try {
        const result = await dispatch(getURL({ location }));
        return result;
      } catch (error) {
        console.error(`Failed to fetch data from ${location}`, error);
        return null;
      }
    };
      const urlIdentityFrontCard = data
        ? await fetchUrlData(`${folder}/${data[0]?.id}/identityFront/`)
        : null;
      const IdentityFrontCardPath = urlIdentityFrontCard?.Contents?.[0]?.Key;
    
    if (IdentityFrontCardPath) {

      const parts = IdentityFrontCardPath.split(
        `${folder}/${data[0]?.id}/identityFront/`
      );
      const name = parts.length > 1 ? parts[1] : "";

       const imageUrltoFile = await s3UrlToFile(
          `${process.env.REACT_APP_S3_URL}/${IdentityFrontCardPath}`,
                  name
                );
        formMethods.setValue("cardIdentityFrontProofAttachment", imageUrltoFile.file, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
        });
       } 

      const urlIdentityBackCard = data
        ? await fetchUrlData(`${folder}/${data[0]?.id}/identityBack/`)
        : null;

        const IdentityBackCardPath = urlIdentityBackCard?.Contents?.[0]?.Key;
     if (IdentityBackCardPath) {
        const partsBack = IdentityBackCardPath.split(
          `${folder}/${data[0]?.id}/identityBack/`
        );
        const nameBack = partsBack.length > 1 ? partsBack[1] : "";

        const imageUrltoFileBack = await s3UrlToFile(
            `${process.env.REACT_APP_S3_URL}/${IdentityBackCardPath}`,
            nameBack
                  );
          formMethods.setValue("cardIdentityBackProofAttachment", imageUrltoFileBack.file, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
          });

      } 
  };

  useEffect(() => {
    getUrlData();
  }, []);

  // State for error message visibility
  const [showError, setShowError] = useState(false);

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>1. What's your identity card type?</StyledLabel>
      <StyledIdentityInputsContainer>
        <SearchFilterRegion>
          <GenericInput
            inputObject={{
              ...depositCompanyFormConfig.identityType,
              defaultValue: defaultValue, // Default value here if your GenericInput supports it
            }}
            disabledForm={disableStep}
            value={watchIdentityType || "CIN"}
          />
        </SearchFilterRegion>
      </StyledIdentityInputsContainer>

      <StyledLabel>2. What's your identity Number?</StyledLabel>
      <StyledIdentityInputsContainer>
        <GenericInput
          inputObject={{
            ...depositCompanyFormConfig.identityNumber,
            defaultValue: defaultValueNumber,
          }}
          disabledForm={disableStep}
          value={watchIdentityNumber || ""}
        />
      </StyledIdentityInputsContainer>

      <StyledLabel>3. Upload your identity proof (Front):</StyledLabel>
      <StyledIdentityInputsContainerFile> 
      <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.identityFrontCardProofAttachment,
        }}
        disabledForm={disableStep}
        isEdit={isEdit}
        placeholder="Upload identity proof document"
        value={watchIdentityFrontProofAttachment}
      />
      </StyledIdentityInputsContainerFile>

      {watchIdentityType && watchIdentityType.value !== "Passport" && (
        <>
          <StyledLabel>4. Upload your identity proof (Back):</StyledLabel>
          <StyledIdentityInputsContainerFile>
          <GenericInput
            inputObject={{
              ...depositCompanyFormConfig.identityBackCardProofAttachment,
            }}
            disabledForm={disableStep}
            isEdit={isEdit}
            placeholder="Upload identity proof document"
            value={watchIdentityBackProofAttachment}

          />
           </StyledIdentityInputsContainerFile>
        </>
      )}

      {/* Error message section */}
      {showError && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Please fill in all required fields.</strong>
        </div>
      )}
      {((status_ID_Front === "ACTION_REQUIRED"  || status_ID_Front ==="INITIAL" ) ||  (status_ID_Back === "ACTION_REQUIRED" || status_ID_Back ==="INITAL" )) && (
      <div style={{ float: "right", marginTop: "10%" }}>
        <Button variant="light" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          style={{ marginLeft: "15px" }}
          variant="primary"
          onClick={handleValidateClick}
          disabled={
            !watchIdentityType ||
            !watchIdentityNumber ||
            !watchIdentityFrontProofAttachment
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

export default CompanyNewIdentityForm;
