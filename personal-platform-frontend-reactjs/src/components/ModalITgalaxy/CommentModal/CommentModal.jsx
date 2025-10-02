import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import StarRating from "../../StarRatingComonant";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./CommentModal.constants";
import {
  ActiveVersementButton,
  DisableActiveVersementButton,
  StyledContainer,
  StyledDiv,
  StyledFormBody,
  StyledTypography,
} from "./CommentModal.style";
import { Spinner } from "react-bootstrap";
import { useCreateCommentMutation } from "../../../redux/api/comments/commentsApi";
import toast from "react-hot-toast";
import { sendNotificationEmail } from "core/helpers/storage";

const CommentModal = (props) => {
  const [reviewComment, setReviewComment] = useState("");
  const [starsRating, setStarsRating] = useState(0);
  const formMethods = useForm({ mode: "onChange", shouldFocusError: true });
  const [commentLenght, setCommentLenght] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [createComment] = useCreateCommentMutation();


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

  const handleComment = async () => {
    try {
      setLoading(true);

      const bodyCommentData = {
        userId: props.userId,
        commentedId: props.commentedId,
        CommentedType: props.CommentedType,
        commentedUserName: props.commentedUserName,
        workId: props.workId,
        workType: props.workType,
        stars: starsRating,
        comment_text: reviewComment,
      }
 
      await createComment(bodyCommentData);

      await sendNotificationEmail(
        props.email,
        "NOTIFICATION_SOLDED_PRODUCT_COMMENT"
      );
      setLoading(false);

      toast.success("Comment was add", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      props.handleShowModal();

    } catch (error) {
      console.error("Error updating comments:", error);
      // Optionally show some error message
    }
  };

  const RenderBodyActivatePaiement = (
    <StyledDiv>
      <StyledFormBody>
        <StyledContainer>
          <StyledTypography>Add a comment for this product</StyledTypography>
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
                size={30}
                value={starsRating}
                activeColor={"red"}
                inactiveColor={"#a0a0a0"}
                onChange={setStarsRating}
              />
            </div>
          </FormProvider>
        </StyledContainer>
      </StyledFormBody>
    </StyledDiv>
  );

  const RenderHeader = <>Add a Comment</>;

  const RenderFooter = (
    <>
      {error.length === 0 ? (
        <ActiveVersementButton onClick={handleComment}>
          {loading ? <Spinner /> : "Validate Comment"}
        </ActiveVersementButton>
      ) : (
        <DisableActiveVersementButton>
          Cancel
        </DisableActiveVersementButton>
      )}
    </>
  );


  return (
    <ModalComponent
      show={props.showModal}
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

export default CommentModal;
