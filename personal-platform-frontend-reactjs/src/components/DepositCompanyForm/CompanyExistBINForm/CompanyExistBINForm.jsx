import GenericInput from "components/Inputs/GenericInput/GenericInput";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getURL, s3Upload } from "../../../redux/api/uploads/uploadSlice";
import { depositCompanyFormConfig } from "../DepositCompanyForm.config";
import {
  SearchFilterRegion,
  StyledButtondownland,
  StyledIdentityInputsContainerFile,
  StyledLabel,
} from "../DepositCompanyForm.style";
import { fileToBase64, s3UrlToFile } from "utils/fileConvertion";
import { useUpdateCompanyMutation } from "../../../redux/api/company/companyApi";
import { useUpdateRequestCompanyCreationMutation } from "../../../redux/api/requestCompanyCreation/requestCompanyCreationApi";

const CompanyExistBINForm = ({
  isEdit = true,
  onValidate,
  data,
  companyType,
  onCancel,
  formMethods,
  disableStep,
  refetchCompany,
}) => {
  const [showError, setShowError] = useState(false);
  const watchCompanyIdentity = formMethods.watch("identityCompanyType");
  const watchCompanyBIN = formMethods.watch("companyBIN");
  const watchCompanyBINProofAttachment = formMethods.watch(
    "companyBINProofAttachment"
  );
  const status = (data && data[0]) ? data[0].company_siren_status  : "INITIAL";
  const [previewCompanyBIN, setPreviewCompanyBIN] = useState(null);


  const folder =
    companyType === "Company Exist" ? "company" : "request_company_creation";
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [updateCompany] = useUpdateCompanyMutation();
  const [updateRequestCompany] = useUpdateRequestCompanyCreationMutation();

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
    try {
      const urlCompanyLocation = await fetchUrlData(
        `${folder}/${data[0]?.id}/companyBIN/`
      );
      const companyLocationPath = urlCompanyLocation?.Contents?.[0]?.Key;

      if (companyLocationPath) {
        const partsLocation = companyLocationPath.split(
          `${folder}/${data[0]?.id}/companyBIN/`
        );
        const nameLocation = partsLocation.length > 1 ? partsLocation[1] : "";
        const imageUrltoFileLocation = await s3UrlToFile(

          `${process.env.REACT_APP_S3_URL}/${companyLocationPath}`,
          nameLocation);

        formMethods.setValue("companyBINProofAttachment", imageUrltoFileLocation.file, {
          shouldValidate: true,
          shouldDirty: true,
          shouldTouch: true,
        });
      }

    } catch (e) {
      console.error("Company Location contents not found");
      setPreviewCompanyBIN(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUrlData();
  }, []);

    const uploadBinProof = async (basePath) => {
      await dispatch(
        s3Upload({
          file: watchCompanyBINProofAttachment,
          type: "companyBIN/", // Ensure this matches
          base64URL: await fileToBase64(watchCompanyBINProofAttachment),
          location: basePath,
          onepart: true,        
        })
      );
    };

  const handleValidateClick = async () => {
    // Check if required fields are empty
    setLoading(true);
    if (
      !watchCompanyIdentity ||
      !watchCompanyBIN ||
      !watchCompanyBINProofAttachment
    ) {
      setShowError(true);
      return; // Exit the function if validation fails
    } else {
      setShowError(false);
    }

    if (status === "ACTION_REQUIRED") {
      const body = {
        company_siren_status: "VERIFICATION",
        identity_company_type: watchCompanyIdentity,
        company_siren: watchCompanyBIN,
      };

      let response;
      try {
        if (folder === "company") {
          response = await updateCompany({
            companyId: data[0]?.id,
            companyData: body,
          });
          const basePath = `company/${response.data.id}/`;
          await uploadBinProof(basePath);
        } else if (folder === "request_company_creation") {
          response = await updateRequestCompany({
            requestCompanyCreationId: data[0]?.id,
            requestCompanyCreationData: body,
          });
          const basePath = `request_company_creation/${response.data.id}/`;
          await uploadBinProof(basePath);
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
      setLoading(false);
    } else {
      onValidate(); // Call onValidate after successful update
    }
  };

  return (
    <FormProvider {...formMethods}>
      <StyledLabel>1. What's your Company identity type?</StyledLabel>

      <SearchFilterRegion>
        <GenericInput
          inputObject={{
            ...depositCompanyFormConfig.identityCompanyType,
          }}
          disabledForm={disableStep}
          label="What's your Company identity type?"
        />
      </SearchFilterRegion>

      <StyledLabel>2. What's your Company BIN?</StyledLabel>
      <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.companyBIN,
        }}
        disabledForm={disableStep}
        value={watchCompanyBIN}
      />
       <StyledIdentityInputsContainerFile>

      <GenericInput
        inputObject={{
          ...depositCompanyFormConfig.companyBINProofAttachment,
        }}
        isEdit={isEdit}
        disabledForm={disableStep}
        value={watchCompanyBINProofAttachment}
      />
      </StyledIdentityInputsContainerFile> 
      {status === "VALIDATED" && (
        <StyledButtondownland
          href={previewCompanyBIN}
          download={previewCompanyBIN}
        >
          Download BIN
        </StyledButtondownland>
      )}

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
            !watchCompanyIdentity ||
            !watchCompanyBIN ||
            !watchCompanyBINProofAttachment
          } // Disable if required inputs are empty
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

export default CompanyExistBINForm;
