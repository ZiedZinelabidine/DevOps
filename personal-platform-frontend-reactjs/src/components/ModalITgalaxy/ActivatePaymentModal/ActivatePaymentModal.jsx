import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useHandleSubmitUpdateProposal from "../../../hooks/useHandleSubmitUpdateProposal";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import StarRating from "../../StarRatingComonant";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ActivatePaymentModal.constants";
import {
  ActiveVersementButton,
  DisableActiveVersementButton,
  StyledContainer,
  StyledDiv,
  StyledFormBody,
  StyledTypography,
} from "./ActivatePaymentModal.style";
import { Spinner } from "react-bootstrap";

const ActivatePaymentModal = (props) => {
  const [reviewComment, setReviewComment] = useState("");
  const [starsRating, setStarsRating] = useState(0);
  const formMethods = useForm({ mode: "onChange", shouldFocusError: true });
  const [commentLenght, setCommentLenght] = useState(0);
  const [error, setError] = useState("");

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
  let { handleFinishSubmit, loading } = useHandleSubmitUpdateProposal(
    props.proposal,
    formMethods
  );

  const handleActivatePaiement = async () => {
    try {
      const response = await handleFinishSubmit(reviewComment, starsRating);
      if (response.success) {
        props.handleShowModal();
        window.location.href = `/projects`;
      }
    } catch (error) {
      console.error("Error updating proposal:", error);
      // Optionally show some error message
    }
  };

  const RenderBodyActivatePaiement = (
    <StyledDiv>
      <StyledFormBody>
        <StyledContainer>
          <StyledTypography>Add a comment for this proposal</StyledTypography>
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
            <div style={{ margin: "20px 0" }}>
              <h3>Recommendation:</h3>
              <StarRating
                count={5}
                size={15}
                value={starsRating}
                activeColor={"yellow"}
                inactiveColor={"#a0a0a0"}
                onChange={setStarsRating}
              />
            </div>
          </FormProvider>
        </StyledContainer>
      </StyledFormBody>
    </StyledDiv>
  );

  const RenderHeader = <>Activate Versement</>;

    const RenderFooter = (
      <>
        {error.length === 0 ? (
          <ActiveVersementButton onClick={handleActivatePaiement}>
          {loading ? (
            <>
              <Spinner />
            </>
          ) : (
            "Activate Versement"
          )}
          </ActiveVersementButton>
        ) : (
          <DisableActiveVersementButton>
            Activate Versement
          </DisableActiveVersementButton>
        )}
      </>
    );
    

  return (
    <ModalComponent
      show={props.showModalActiveVersement}
      closeModal={props.handleShowModal}
      header={RenderHeader}
      body={RenderBodyActivatePaiement}
      footer={RenderFooter}
      bodyPadding={"0px"}
      minWidth={"50vw"}
      footerpaddingtop={"0"}
      footerpaddingbottom={"0"}
    />
  );
};

export default ActivatePaymentModal;
