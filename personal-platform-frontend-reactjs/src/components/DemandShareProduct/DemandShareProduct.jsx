import GenericInput from "components/Inputs/GenericInput/GenericInput"; // Assuming this is your generic input
import ModalPayment from "components/ModalITgalaxy/ModalPayment/ModalPayment";
import RichTextEditor from "components/RichTextEditor/RichTextEditor"; // Import the rich text editor
import { getTokenFromLocalStorage, sendNotificationItGalaxyAsServiceHP } from "core/helpers/storage";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { priceShares } from "../../data/priceShares";
import useHandleSubmitProjectCreation from "../../hooks/useHandleSubmitProjectCreation";
import { formConfig } from "./DemandShareProduct.constants";
import {CheckCircle} from 'lucide-react';
import {
  BackButton,
  ButtonContainer,
  ButtonSubmit,
  ButtonSubmitDisable,
  ContainerStyleShareTask,
  InputContainer,
  InputLabel,
  LocationStyle,
  TitleForm,
  TitleStyle,
  SuccessMessage,
  SuccessTitle,
  SuccessText,
  SuccessIcon
} from "./DemandShareProduct.style";
import { Spinner } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";

const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;


export default function DemandShareProduct({ id, setDemandShareProduct }) {
  const methods = useForm({
    mode: "onChange", // Validate on input
    defaultValues: {
      projectDescription: "", // Initialize the field
    },
  });

  const [projectDescription, setProjectDescription] = useState("");
  const [loading , setLoading] = useState(false);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [titleLength, setTitleLength] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const token = getTokenFromLocalStorage();
    const decodeToken = token ? jwtDecode(token) : null;
    const courier = decodeToken ? decodeToken.email : null;
    const role = decodeToken ? decodeToken.role : null;
    const username = role === 'ENTREPRISE' 
      ? decodeToken.username 
      : (decodeToken.name + " " + decodeToken.first_name);
  
  
  const {
    control,
    setValue,
    formState: { errors, isValid },
  } = methods;
  const [describLenght, setDescribLenght] = useState(0);

  const [formData, setFormData] = useState({
    nom: username,
    email: courier,
    telephone: '',
    budget: 0,
    title: '',
    message: projectDescription
  });

  // Effect to handle updates to project description
  useEffect(() => {
    setDescribLenght(projectDescription.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      project_description: projectDescription,
    }));
    methods.trigger("projectDescription");
  }, [projectDescription, methods]);

  // Function to close modal
  const handleClose = () => {
    setShowModalPayment(false);
  };

  const handlebacktoProjectList = () => {
    setDemandShareProduct(false);
  };

  const HandleCreateShareTask = async (e) => {
 
    e.preventDefault();
    try {
        setLoading(true);
        await sendNotificationItGalaxyAsServiceHP(formData);
        setLoading(false);
        setSubmitted(true);

        setTimeout(() => {
          window.location.href = `/projects`;
        }, 2000);
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
    }
  };

  const handleChangePrice = (event) => {
    const { value } = event.target;

    setFormData((prevProposal) => ({
      ...prevProposal,
      budget: value,
    }));

    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || parsedValue <= 0) {
      methods.setError("price", {
        type: "manual",
        message: "Price must be a positive number.",
      });
    } else {
      methods.clearErrors("price");
    }
  };

  const handleChangeTitle = (selectedOptions) => {
    setTitleLength(selectedOptions.target.value.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      title: selectedOptions.target.value,
    }));
  };


  const handleChangeProjectDescription = (value) => {
    setProjectDescription(value); // Update local state
    setValue("projectDescription", value); // Set form value
  };

  return (
    <ContainerStyleShareTask>
    {submitted ? (
           <SuccessMessage>
           <SuccessIcon>
            <CheckCircle size={80} />
             </SuccessIcon>
              <SuccessTitle>Demande Envoyée avec Succès!</SuccessTitle>
               <SuccessText>
                      Merci pour votre demande. Notre équipe d'experts ItGalaxy vous contactera rapidement dans les heures ouvrables.
                    </SuccessText>
               </SuccessMessage>
    ) : (
      <FormProvider {...methods} style={{ marginRight: "10px;" }}>
        <TitleStyle>
          <BackButton onClick={handlebacktoProjectList}>
            <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
          </BackButton>

          <TitleForm>
            Demande de partager votre SAAS dans notre Marketplace
            <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" , color: "gray"}} />

          </TitleForm>
        </TitleStyle>
        <InputContainer>
          <InputLabel>Product Title</InputLabel>
          <GenericInput
            inputObject={{
              ...formConfig.title,
            }}
            onChange={handleChangeTitle}
            disabledForm={false}
            control={control}
          />
          <p
            style={{
              fontSize: "5px;",
              textAlign: "right",
              color: titleLength >= 100 ? "red" : "white",
            }}
          >
            {titleLength}/50
          </p>
        </InputContainer>

        <InputContainer>
          <InputLabel>Product Description</InputLabel>
          <RichTextEditor
            value={projectDescription}
            onChange={handleChangeProjectDescription} // Pass the validation and setter
            height={"350px"}
          />
        </InputContainer>

        {isValid && Object.keys(errors).length === 0 ? (
          <ButtonContainer>
            <ButtonSubmit onClick={HandleCreateShareTask} disabled={loading}>
              {loading ? (
                <>
                  <Spinner />{" "}
                  {/* Spinner for loading indicator */}
                  <span style={{ marginLeft: "5px" }}>loading...</span>
                </>
              ) : (
                "Send it"
              )}
            </ButtonSubmit>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ButtonSubmit disabled={true} >Send a request</ButtonSubmit>
          </ButtonContainer>
        )}
      </FormProvider> )}

    </ContainerStyleShareTask>
  );
}
