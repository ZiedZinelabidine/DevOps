import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AddProposalToProposalsEntrepriseCreation } from "../../../redux/slice/propsoalEntrepriseCreationSlice/proposalEntrepriseCreationSlice";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalProposalEntreprise.constants";
import {
  BlocTitle,
  ProposalEntrepriseButton,
  Sections2,
  StyledFormText,
} from "./ModalProposalEntreprise.style";

const ModalProposalEntreprise = (props) => {
  const methods = useForm(); // Initialize useForm
  const { control, handleSubmit, setValue, setError, clearErrors } = methods;
  const [describLength, setDescribLength] = useState(0);
  const dispatch = useDispatch();

  const [proposal, setProposal] = useState({
    userId: props.userId,
    proposal_description: "",
    price: 0,
  });

  function isValidPrice(value) {
    // Check if the input is a valid number (integer or decimal)
    return /^-?\d+(\.\d+)?$/.test(value);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!value || !isValidPrice(value)) {
      // Use the isValidPrice function
      setError("price", {
        type: "manual",
        message: "Price must be a valid number.",
      });
    } else {
      clearErrors("price"); // Clear error if valid
    }

    setProposal((prevProposal) => ({
      ...prevProposal,
      price: value,
    }));
  };

  const handleChangeDescribe = (event) => {
    const { value } = event.target;
    setDescribLength(value.length);
    setProposal((prevProposal) => ({
      ...prevProposal,
      proposal_description: value,
    }));
  };

  const handleProposalEntrepriseSubmit = () => {
    let valid = true;

    if (!proposal.price || !isValidPrice(proposal.price)) {
      // Use the isValidPrice function

      setError("price", {
        type: "manual",
        message: "Price must be a valid number.",
      });
      valid = false;
    } else {
      clearErrors("price"); // Clear error if valid
    }

    if (describLength > 200) {
      setError("proposal_description", {
        type: "manual",
        message: "Proposal description cannot exceed 200 characters.",
      });
      valid = false;
    } else {
      clearErrors("proposal_description");
    }

    if (valid) {
      dispatch(AddProposalToProposalsEntrepriseCreation({ proposal }));
      props.setCandidatesProfils(true);
      props.setShowModalProposal(false);
      toast.success("Proposal was add to the list", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const RenderHeader = <BlocTitle> Proposal Section </BlocTitle>;

  const RenderBodyModalProposalEntreprise = (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleProposalEntrepriseSubmit)}>
        <StyledFormText> Describe your proposal </StyledFormText>
        <GenericInput
          inputObject={{
            ...formConfig.proposal_description,
            label: "proposal_description",
          }}
          onChange={handleChangeDescribe}
          disabledForm={false}
          control={control}
        />
        <p
          style={{
            fontSize: "10px",
            textAlign: "right",
            color: describLength > 200 ? "red" : "white",
          }}
        >
          Proposal description cannot exceed 200 characters : {describLength}
          /200
        </p>
        {methods.formState.errors.proposal_description && (
          <p style={{ color: "red" }}>
            {methods.formState.errors.proposal_description.message}
          </p>
        )}
        <Sections2>
          <StyledFormText>
            {" "}
            How do you estimate this task in euros{" "}
          </StyledFormText>
          <GenericInput
            inputObject={{
              ...formConfig.price,
              label: "price",
            }}
            onChange={handleChange}
            disabledForm={false}
            control={control}
          />
          {methods.formState.errors.price && (
            <p style={{ color: "red" }}>
              {methods.formState.errors.price.message}
            </p>
          )}
        </Sections2>
      </form>
    </FormProvider>
  );

  const RenderFooter = (
    <ProposalEntrepriseButton
      onClick={handleSubmit(handleProposalEntrepriseSubmit)}
    >
      Add proposal to the list
    </ProposalEntrepriseButton>
  );

  return (
    <ModalComponent
      show={props.show}
      closeModal={props.closeModal}
      body={RenderBodyModalProposalEntreprise}
      header={RenderHeader}
      footer={RenderFooter}
      bodyPadding={"15px 10px 0px 10px"}
      minWidth={"59vw"}
      Height={"84vh"}
      footerpaddingtop={"0"}
    />
  );
};

export default ModalProposalEntreprise;
