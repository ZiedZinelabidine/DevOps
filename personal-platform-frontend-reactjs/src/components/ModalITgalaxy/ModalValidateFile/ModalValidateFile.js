import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdateCompanyMutation } from "../../../redux/api/company/companyApi";
import { useUpdateRequestCompanyCreationMutation } from "../../../redux/api/requestCompanyCreation/requestCompanyCreationApi";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalValidateFile.constants";
import { StyledFormText, ValdiateFoldeButton } from "./ModalValidateFile.style";

const ModalValidateFile = (props) => {

  // Initialize the form methods
  const methods = useForm();
  const { handleSubmit, control, setValue } = methods;

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [updateCompany] = useUpdateCompanyMutation();
  const [updateRequestCompanyCreation] =
    useUpdateRequestCompanyCreationMutation();
  const [formData, setFormData] = useState({ status: "" });

  // Handle status change
  const handleChangeStatus = (event) => {
    setFormData({ status: event.value });
  };

  // Function to update the accounting file
  const updateAccountingFileFunc = async (typeFile) => {
    const baseParameters = { id: props.id, status: formData.status };

    try {
      if (props.type === "COMPANY") {
        const params = {
          company_name: {
            companyId: baseParameters.id,
            companyData: { company_name_status: baseParameters.status },
          },
          identity_front: {
            companyId: baseParameters.id,
            companyData: { identity_front_status: baseParameters.status },
          },
          identity_back: {
            companyId: baseParameters.id,
            companyData: { identity_back_status: baseParameters.status },
          },
          company_siren: {
            companyId: baseParameters.id,
            companyData: { company_siren_status: baseParameters.status },
          },
          company_location: {
            companyId: baseParameters.id,
            companyData: { company_location_status: baseParameters.status },
          },
        };
        await updateCompany(params[typeFile]).unwrap();
      } else {
        const params = {
          identity_front: {
            requestCompanyCreationId: baseParameters.id,
            requestCompanyCreationData: {
              identity_front_status: baseParameters.status,
            },
          },
          identity_back: {
            requestCompanyCreationId: baseParameters.id,
            requestCompanyCreationData: {
              identity_back_status: baseParameters.status,
            },
          },
          rib: {
            requestCompanyCreationId: baseParameters.id,
            requestCompanyCreationData: { rib_status: baseParameters.status },
          },
          company_location: {
            requestCompanyCreationId: baseParameters.id,
            requestCompanyCreationData: {
              company_location_status: baseParameters.status,
            },
          },
          company_name: {
            requestCompanyCreationId: baseParameters.id,
            requestCompanyCreationData: {
              company_name_status: baseParameters.status,
            },
          },
        };

        await updateRequestCompanyCreation(params[typeFile]).unwrap();
      }
      window.location.reload();
      setShowSuccessModal(true);
    } catch (e) {
      const errorMessage =
        e.data?.error || "Error occurred. Please check your inputs.";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleApplySubmit = async () => {
    await updateAccountingFileFunc(props.typeFile);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    props.closeModal();
  };

  const RenderHeader = () => (
    <div style={{ fontWeight: "bold", fontSize: "25px" }}>
      {props.typeFile === "company_name"
        ? "Validation Company Name"
        : "Validation File"}
    </div>
  );

  const RenderBodyModalApply = (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleApplySubmit)}>
        <StyledFormText>
          {props.typeFile === "company_name"
            ? "Add a Status for Company Name"
            : "Add a Status for this file"}
        </StyledFormText>
        <GenericInput
          inputObject={{
            ...formConfig.status,
            label: "Status",
          }}
          onChange={handleChangeStatus}
          disabledForm={false}
          control={control}
        />
      </form>
    </FormProvider>
  );

  const RenderFooter = (
    <ValdiateFoldeButton onClick={handleSubmit(handleApplySubmit)}>
      Apply
    </ValdiateFoldeButton>
  );

  return (
    <>
      {/* Main Modal for Validation */}
      <ModalComponent
        show={props.confirmShow && !showSuccessModal}
        closeModal={props.closeModal}
        body={RenderBodyModalApply}
        header={RenderHeader()}
        footer={RenderFooter}
        bodyPadding={"15px 10px 0px 10px"}
        minWidth={"30vw"}
        Height={"50vh"}
        footerpaddingtop={"0"}
        footerpaddingbottom={"1px"}
      />

      {/* Success Modal */}
      {showSuccessModal && (
        <ModalComponent
          show={showSuccessModal}
          closeModal={handleCloseSuccessModal}
          body={
            <div>Thank you for your proposal! We'll get back to you soon.</div>
          }
          header={<div>Submission Successful</div>}
          footer={
            <ValdiateFoldeButton onClick={handleCloseSuccessModal}>
              Close
            </ValdiateFoldeButton>
          }
          bodyPadding={"15px 10px"}
          minWidth={"40vw"}
        />
      )}
    </>
  );
};

export default ModalValidateFile;
