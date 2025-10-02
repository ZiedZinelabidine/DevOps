import GenericInput from "components/Inputs/GenericInput/GenericInput"; // Assuming this is your generic input
import ModalPayment from "components/ModalITgalaxy/ModalPayment/ModalPayment";
import RichTextEditor from "components/RichTextEditor/RichTextEditor"; // Import the rich text editor
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getCountOffreFromLocalStorage } from "../../core/helpers/storage";
import { countfreeShares } from "../../data/countfreeShares";
import { priceShares } from "../../data/priceShares";
import useHandleSubmitOffreCreation from "../../hooks/useHandleSubmitOffreCreation";
import { useCreateAppelOffreMutation } from "../../redux/api/appeloffres/appeloffreApi";
import { formConfig } from "./AddNewJob.constants";
import {
  ButtonContainer,
  ButtonSubmit,
  ButtonSubmitDisable,
  InputContainer,
  InputLabel,
  LocationStyle,
  TitleForm,
  ContainerStyleCompose,
  BackButton,
  TitleStyle,
  FormContainer,
  FormSection
} from "./Style";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;


export default function AddNewJob({ refetch, id, setAddNewJob }) {
  const methods = useForm({
    mode: "onChange", // Validate on input
    defaultValues: {
      jobDescription: "", // Initialize the field
    },
  });

  const [jobDescription, setJobDescription] = useState("");
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [titleLength, setTitleLength] = useState(0);
  const [describLenght, setDescribLenght] = useState(0);

  const [createOffre, { isLoading }] = useCreateAppelOffreMutation();
  const {
    control,
    setValue,
    formState: { errors, isValid },
  } = methods;

  const [formData, setFormData] = useState({
    recruterId: id,
    title: "",
    appeloffre_description: jobDescription,
    skills: [],
    category: [],
    location: "",
    languages: [],
    price: 0,
    orderID: "xxxxxxx",
    sharesTotalPrice: 0.00
  });

  useEffect(() => {
    setDescribLenght(jobDescription.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      appeloffre_description: jobDescription,
    }));
    methods.trigger("jobDescription");
  }, [jobDescription]);

  // Function to close modal
  const handleClose = () => {
    setShowModalPayment(false);
  };

  const handelShowModalPayment = () => {
    setShowModalPayment(true); // Show confirmation modal
  };

  const closeAddNewJob = () => {
    setAddNewJob(false);
  };

  let { handleSubmit, loading } = useHandleSubmitOffreCreation(formData);

  // Function to handle offer creation
  const HandleCreateAppelOffre = async () => {
    if (isLoading) return; // Prevent further action while loading
    try {
      if (getCountOffreFromLocalStorage() > countfreeShares.appel_offre) {
        handelShowModalPayment();
      } else {
        await createOffre(formData).unwrap(); // Handle promise
        toast.success("Offre was created", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        refetch();
        setAddNewJob(false); // Reset or hide the modal upon success
      }
    } catch (e) {
      console.error("Error creating offre:", e); // Log error
      // Show specific error message if available
      const errorMessage = e.data?.error || "Please check the inputs";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChangeTitle = (selectedOptions) => {
    setTitleLength(selectedOptions.target.value.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      title: selectedOptions.target.value,
    }));
  };

  const handleChangeLocations = (selectedOptions) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: selectedOptions.value,
    }));
  };

  const handleChangeLanguages = (selectedOptions) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      languages: selectedOptions.map((selectedOption) => selectedOption.value),
    }));
  };

  const handleChangeSkills = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: selectedValues,
    }));
    setValue("skills", selectedValues); // Sync with form state
    methods.trigger("skills"); // Manually trigger validation for updates
  };

  const handleChangeCategorysSelected = (selectedOptions) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedOptions.map((option) => option.value),
    }));
  };

  const handleChangePrice = (event) => {
    const { value } = event.target;

    setFormData((prevProposal) => ({
      ...prevProposal,
      price: value,
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


  const handleChangeJobDescription = (value) => {
    setJobDescription(value); // Update local state
    setValue("jobDescription", value); // Set form value

    // Manual validation check
    if (value.length < 200) {
      methods.setError("jobDescription", {
        type: "manual",
        message: "Description must be at least 200 characters.",
      });
    } else {
      // Clear error if valid
      methods.clearErrors("jobDescription");
    }
  };

  return (
    <ContainerStyleCompose>
      <FormContainer>
      <FormProvider {...methods}>
        <TitleStyle>
        <BackButton onClick={closeAddNewJob}>
          <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
        </BackButton>
        <TitleForm>
           Publiez votre offre
          <hr />
        </TitleForm>
       </TitleStyle>

       <FormSection>
        <InputContainer>
          <InputLabel>Titre de l'offre*</InputLabel>
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

        <LocationStyle>
          <InputContainer>
            <InputLabel>Localisation de l'offre</InputLabel>
            <GenericInput
              inputObject={{
                ...formConfig.location,
              }}
              control={control}
              onChange={handleChangeLocations}
              disabledForm={false}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>Category</InputLabel>
            <GenericInput
              inputObject={{
                ...formConfig.category,
              }}
              onChange={handleChangeCategorysSelected}
              disabledForm={false}
            />
          </InputContainer>
          </LocationStyle>

          <LocationStyle>

          <InputContainer>
            <InputLabel>Languages</InputLabel>
            <GenericInput
              inputObject={{
                ...formConfig.languages,
              }}
              onChange={handleChangeLanguages}
              disabledForm={false}
            />
          </InputContainer>
        
                  <InputContainer>
                    <InputLabel>Taux journalier moyen (euro)</InputLabel>
                    <GenericInput
                      inputObject={{
                        ...formConfig.price,
                      }}
                      onChange={handleChangePrice}
                      disabledForm={false}
                    />
                  </InputContainer>
         </LocationStyle>

        <InputContainer>
          <InputLabel>Description de l'offre</InputLabel>
          <RichTextEditor
            value={jobDescription}
            onChange={handleChangeJobDescription} // Pass the validation and setter
            height={"500px"}
          />
          <p
            style={{
              color: describLenght < 200 ? "red" : "white",
              fontSize: "small",
              textAlign: "right",
              marginTop: "4px",
            }}
          >
            La description doit comporter au moins 200 caractères. {describLenght}/200
          </p>
        </InputContainer>

        <InputContainer>
          <InputLabel>Skills</InputLabel>
          <GenericInput
            inputObject={{
              ...formConfig.skills,
            }}
            control={control}
            onChange={handleChangeSkills}
            disabledForm={false}
          />
        </InputContainer>

        {isValid && Object.keys(errors).length === 0 ? (
          <ButtonContainer>
            <ButtonSubmit onClick={HandleCreateAppelOffre} disabled={isLoading}>
              {isLoading ? "Creating..." : "Post it"}
            </ButtonSubmit>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ButtonSubmitDisable>Partager l'offre</ButtonSubmitDisable>
          </ButtonContainer>
        )}
        </FormSection>
       </FormProvider>
      </FormContainer>


      {showModalPayment && (
        <ModalPayment
          handleCloseShowModal={handleClose}
          showModalPayment={handelShowModalPayment}
          paymentProposal={false}
          price={priceShares.appel_offre}
          formMethods={methods}
          title={"PAYMENT OFFRE CREATION"}
          note={
            "To share this offre with community you need to pay the service."
          }
          onSubmit={handleSubmit}
        />
      )}
    </ContainerStyleCompose>
  );
}
