import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import useHandleSubmitUpdateProposal from "../../../hooks/useHandleSubmitUpdateProposal";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./DeclinePaymentModal.constants";
import {
  ActiveVersementButton,
  DisableActiveVersementButton,
  StyledContainer,
  StyledDiv,
  StyledFormBody,
} from "./DeclinePaymentModal.style";

const DeclinePaymentModal = (props) => {
  const [reviewComment, setReviewComment] = useState("");
  const formMethods = useForm({ mode: "onChange", shouldFocusError: true });
  const [commentLenght, setCommentLenght] = useState(0);
  const [error, setError] = useState("");

  let { handleDecline, loading } = useHandleSubmitUpdateProposal(
    props.proposal,
    formMethods
  );

  const handleProposalDescriptionChange = (e) => {
    const newComment = e.target.value; // Get the new value from the input
    setReviewComment(newComment);
    const newCommentLength = newComment.length; // Use the new value to get length
    setCommentLenght(newCommentLength); // Correct spelling to 'setCommentLength'

    // Manual validation check
    if (newCommentLength > 200) {
      // Check if the length exceeds 200
      setError(
        `Comment can't be more than 200 characters. You entered ${newCommentLength}/200.`
      );
    } else {
      // Clear error if valid
      setError("");
    }
  };

  const handleDeclinePaiement = async () => {
    try {
      const response = await handleDecline();
      if (response.success) {
        props.handleShowModal();
      }
    } catch (error) {
      console.error("Error updating proposal:", error);
      // Optionally show some error message
    }
  };

  const RenderBodyDeclinePaiement = (
    <StyledDiv>
      <StyledFormBody>
        <StyledContainer>
          <FormProvider {...formMethods}>
            <GenericInput
              inputObject={{
                ...formConfig.comment,
                defaultValue: reviewComment,
              }}
              onChange={handleProposalDescriptionChange}
              disabledForm={false}
            />
            <p
              style={{
                color: commentLenght > 200 ? "red" : "white",
                fontSize: "small",
                textAlign: "right",
                marginTop: "4px",
              }}
            >
              Comment cant be more than 200 characters. {commentLenght}/200
            </p>
          </FormProvider>
        </StyledContainer>
      </StyledFormBody>
    </StyledDiv>
  );

  const RenderHeader = <>Provide a clear reason for declining this Proposal</>;

  const RenderFooter = (
    <>
      {error.length === 0 ? (
         <ActiveVersementButton onClick={handleDeclinePaiement}>
           {loading ? (
               <Spinner />
              ) : (
              "Decline Versement"
            )}
         </ActiveVersementButton>         
      ) : (
        <DisableActiveVersementButton>
          Decline Versement
        </DisableActiveVersementButton>
      )}
    </>
  );

  return (
    <ModalComponent
      show={props.showModalDecline}
      closeModal={props.handleShowModal}
      header={RenderHeader}
      body={RenderBodyDeclinePaiement}
      footer={RenderFooter}
      bodyPadding={"0px"}
      minWidth={"50vw"}
      footerpaddingtop={"0"}
      footerpaddingbottom={"0"}
    />
  );
};

export default DeclinePaymentModal;
