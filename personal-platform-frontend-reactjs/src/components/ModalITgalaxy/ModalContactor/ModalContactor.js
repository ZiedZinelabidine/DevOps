import ImageProfilCard from "components/ImageProfilCard/ImageProfilCard";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddContactMutation } from "../../../redux/api/contact/contactApi";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import ModalComponent from "../ModalComponent";
import { formConfig } from "./ModalContactor.constants";
import {
  AdvancedSearchButtonModalContainer,
  ApplyButton,
  BlocTitle,
  StyledFormText,
  TitleJob,
} from "./ModalContactor.style";
import { Spinner } from "react-bootstrap";

const ModalContactor = (props) => {

  const [showSuccessModal, setShowSuccessModal] = useState(false); 
  const [loading ,setLoading] = useState(false); 
  const methods = useForm(); // Initialize useForm hook
  const { handleSubmit, watch } = methods; // Destructure methods
  const [addContact] = useAddContactMutation();
  const [describe,setDescibe] = useState();

  const handleChangeDescribe = (event) => {
    setDescibe(event.target.value);
  };

  const handelCloseModal = () => {

    setShowSuccessModal(false);
    props.closeModal(false);
  };

  const createProposalFunc = async (data) => {

    setLoading(true);
    const contactData = {
      contactorId: props.id,
      contactedId: props.userdata.id ,
      contactedType:  props.userdata.type,
      proposal_description:  describe 
    }

    try {
      const response = await addContact(contactData).unwrap();
      setLoading(false);
      if (response) {
        setShowSuccessModal(true);
      }
    } catch (e) {
      console.log("Error while creating the proposal.", e);
      const errorMessage = e.data?.error || "Please check the inputs";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const onSubmit = (data) => {
    createProposalFunc(data);
  };

  const RenderBodyModalApply = (
    <FormProvider {...methods}> {/* Pass methods to FormProvider */}
        <StyledFormText>Décrivez votre proposition</StyledFormText>
        <GenericInput
          inputObject={{
            ...formConfig.description,
            label: "description",
          }}
          onChange={handleChangeDescribe}
          ref={methods.register}
        />
    </FormProvider>
  );

  const RenderFooterModalApply = ({ loading }) => (
    loading ? (<Spinner />) : (<ApplyButton onClick={onSubmit}> {"Envoyez votre proposition"} </ApplyButton>)
  );

  return (
    <>
      <ModalComponent
        show={props.show && !showSuccessModal}
        closeModal={props.closeModal}
        body={RenderBodyModalApply}
        footer={RenderFooterModalApply(loading)}
        header={
          <BlocTitle>
             <ImageProfilCard
                id={props.userdata.id}
                type={props.userdata.name ? "candidat" : "entreprise"}
                typeimg={"cercel"}
              /> 
              {props.userdata.name ? ( <TitleJob>{props.userdata.name} {props.userdata.first_name}</TitleJob> ) :  ( <TitleJob>{props.userdata.username}</TitleJob> )}
          </BlocTitle>
        }
        bodyPadding={"15px 10px 0px 10px"}
        minWidth={"50vw"}
        Height={"30vw"}
        footerpaddingtop={"0"}
        footerpaddingbottom={"0"}
      />

      {showSuccessModal && (
        <ModalComponent
          show={showSuccessModal}
          closeModal={handelCloseModal}
          body={<div style={{ fontSize: "20px" }}> Your message was send and a chat with the target person was created , please check your chat List for the answers.</div>}
          header={<div>Submission Successful</div>}
          footer={
            <AdvancedSearchButtonModalContainer onClick={handelCloseModal}>
              Close
            </AdvancedSearchButtonModalContainer>
          }
          bodyPadding={"15px 10px"}
          minWidth={"40vw"}
          footerpaddingtop={"30px"}
        />
      )}
    </>
  );
};

export default ModalContactor;
