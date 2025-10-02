import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalSupport.constants";
import {
  ActiveVersementButton,
  StyledContainer,
  StyledDiv,
  StyledFormBody,
} from "./ModalSupport.style";
import { Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { sendSupportEmail } from "core/helpers/storage";

const ModalSupport = (props) => {
  const [reviewComment, setReviewComment] = useState("");
  const formMethods = useForm({ mode: "onChange", shouldFocusError: true });
  const [loading, setLoading] = useState(false);


  const handleProposalDescriptionChange = (e) => {
    const newComment = e.target.value; // Get the new value from the input
    setReviewComment(newComment);
  };

  const handleComment = async () => {
    try {
      setLoading(true);

      await sendSupportEmail(
        props.email,
        reviewComment
      );
      setLoading(false);

      toast.success("Message was send", {
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
          <FormProvider {...formMethods}>
            <GenericInput
              inputObject={{
                ...formConfig.comment,
                defaultValue: reviewComment,
              }}
              onChange={handleProposalDescriptionChange}
              disabledForm={false}
            />
          </FormProvider>
        </StyledContainer>
      </StyledFormBody>
    </StyledDiv>
  );

  const RenderHeader = <>Contact Support</>;

  const RenderFooter = (
        <ActiveVersementButton onClick={handleComment}>
          {loading ? <Spinner /> : "Validate message"}
        </ActiveVersementButton>
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

export default ModalSupport;
