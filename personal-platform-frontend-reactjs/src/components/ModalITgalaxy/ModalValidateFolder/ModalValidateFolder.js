import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useUpdateAccountingJobsMutation } from "../../../redux/api/accounting/accountingApi";
import {
  copyFilesRecursively,
  s3Upload,
} from "../../../redux/api/uploads/uploadSlice";
import { fileToBase64 } from "../../../utils/fileConvertion";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalValidateFolder.constants";
import {
  Bloc1,
  StyledFormText,
  ValdiateFoldeButton,
} from "./ModalValidateFolder.style";

const ModalValidateFolder = (props) => {
  const methods = useForm();
  const { handleSubmit, control } = methods;

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [updateAccountingJob] = useUpdateAccountingJobsMutation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    status: "",
    comment: "",
    companyBINcreated: "",
  });

  const watchCompanyBIN = methods.watch("companyBIN");
  const watchcompanyBINProofAttachment = methods.watch(
    "companyBINProofAttachment"
  );

  const convertJSONtoFile = (jsonFile) => {
    const content = new Blob([" ".repeat(jsonFile?.size)], {
      type: jsonFile?.type,
    });
    return new File([content], jsonFile?.name, {
      lastModified: jsonFile?.lastModified,
      type: jsonFile?.type,
      lastModifiedDate: jsonFile?.lastModifiedDate,
      webkitRelativePath: jsonFile?.webkitRelativePath,
      size: jsonFile?.size,
    });
  };

  const handleChangeStatus = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      status: event.value,
    }));
  };

  const handleChangeComment = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      comment: event.target.value,
    }));
  };

  async function updateAccountingJobFunc() {
    const accountingData = {
      status: formData.status,
      comment: formData.comment,
      companyBINcreated: watchCompanyBIN,
    };

    try {
      // Update the accounting job with the new data
      const result = await updateAccountingJob({
        accountingjobId: props.id,
        accountingData,
      }).unwrap();

      // Check if the status indicates a company has been created
      if (formData.status === "COMPANY_CREATED") {
        const uploadPromises = [];

        uploadPromises.push(
          dispatch(
            s3Upload({
              file: convertJSONtoFile(watchcompanyBINProofAttachment),
              type: "companyBIN/",
              location: `company/${result.id}/`,
              base64URL: await fileToBase64(watchcompanyBINProofAttachment),
            })
          )
        );

        // Call the function to copy files
        await copyFilesRecursively(
          `request_company_creation/${props.job.id}/`,
          `company/${result.id}/`
        );
      }

      // Refetch the data to update the UI
      window.location.reload();
      // Show success modal
      setShowSuccessModal(true);
    } catch (e) {
      console.error("Error while updating the accounting job.", e);
      const errorMessage = e.data?.error || "Please check the inputs.";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  const handleApplySubmit = async () => {
    await updateAccountingJobFunc();
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    props.closeModal();
  };

  const RenderHeader = (
    <div style={{ fontWeight: "bold", fontSize: "25px" }}>
      Validation Working Folder
    </div>
  );

  const RenderBodyModalApply = (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleApplySubmit)}>
        <Bloc1>
          <StyledFormText>1. Add a Status for this folder</StyledFormText>
          {props.job.type === "COMPANY" ? (
            <GenericInput
              inputObject={{
                ...formConfig.status_company,
                label: "status",
              }}
              onChange={handleChangeStatus}
              disabledForm={false}
              control={control}
            />
          ) : (
            <GenericInput
              inputObject={{
                ...formConfig.status_request_company_creation,
                label: "status",
              }}
              onChange={handleChangeStatus}
              disabledForm={false}
              control={control}
            />
          )}
        </Bloc1>

        {formData.status === "COMPANY_CREATED" && (
          <>
            <StyledFormText>2. What's Company created BIN ?</StyledFormText>
            <GenericInput
              inputObject={{
                ...formConfig.companyBIN,
              }}
              disabledForm={false}
            />
            <StyledFormText>2. Add a Company Identity document</StyledFormText>

            <GenericInput
              inputObject={{
                ...formConfig.companyBINProofAttachment,
                label: "companyBINProofAttachment", // Change label if needed
              }}
              disabledForm={false}
              control={control}
            />
          </>
        )}

        {formData.status !== "COMPANY_CREATED" && (
          <>
            <StyledFormText>2. Add a comment</StyledFormText>
            <GenericInput
              inputObject={{
                ...formConfig.comment,
                label: "comment",
              }}
              onChange={handleChangeComment}
              disabledForm={false}
              control={control}
            />
          </>
        )}
      </form>
    </FormProvider>
  );

  const RenderFooter = (
    <ValdiateFoldeButton onClick={handleSubmit(handleApplySubmit)}>
      Confirm
    </ValdiateFoldeButton>
  );

  return (
    <>
      <ModalComponent
        show={props.confirmShow && !showSuccessModal}
        closeModal={props.closeModal}
        body={RenderBodyModalApply}
        header={RenderHeader}
        footer={RenderFooter}
        bodyPadding={"15px 10px 0px 10px"}
        minWidth={"50vw"}
        Height={"70vh"}
        footerpaddingtop={"0"}
        footerpaddingbottom={"1px"}
      />

      {showSuccessModal && (
        <ModalComponent
          show={showSuccessModal}
          closeModal={handleCloseSuccessModal}
          body={
            <div>
              Thank you for your submission! We'll get back to you soon.
            </div>
          }
          header={<div>Submission Successful</div>}
          footer={
            <ValdiateFoldeButton onClick={handleCloseSuccessModal}>
              Close
            </ValdiateFoldeButton>
          }
          bodyPadding={"15px 10px"}
          minWidth={"40vw"}
          footerpaddingtop={"0"}
          footerpaddingbottom={"1px"}
        />
      )}
    </>
  );
};

export default ModalValidateFolder;
