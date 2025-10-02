import GenericInput from "components/Inputs/GenericInput/GenericInput"; // Assuming this is your generic input
import ModalPayment from "components/ModalITgalaxy/ModalPayment/ModalPayment";
import RichTextEditor from "components/RichTextEditor/RichTextEditor"; // Import the rich text editor
import { getCountshareProjectFromLocalStorage } from "core/helpers/storage";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { countfreeShares } from "../../data/countfreeShares";
import { priceShares } from "../../data/priceShares";
import useHandleSubmitProjectCreation from "../../hooks/useHandleSubmitProjectCreation";
import { useCreateProjectMutation } from "../../redux/api/projects/projectApi";
import { formConfig } from "./NewShareyourTasks.constants";
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
} from "./NewShareyourTasks.style";
import { Spinner } from "react-bootstrap";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;


export default function AddNewShareyourTasks({ id, setNewShareTasks }) {
  const methods = useForm({
    mode: "onChange", // Validate on input
    defaultValues: {
      projectDescription: "", // Initialize the field
    },
  });

  const [projectDescription, setProjectDescription] = useState("");
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [titleLength, setTitleLength] = useState(0);
  const [createProject, { isLoading }] = useCreateProjectMutation();

  const {
    control,
    setValue,
    formState: { errors, isValid },
  } = methods;
  const [describLenght, setDescribLenght] = useState(0);

  const [formData, setFormData] = useState({
    entrepriseId: id,
    title: "",
    project_description: projectDescription,
    type: "SHARETASK",
    skills: [],
    price: 0,
    category: [],
    languages: []
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

  // Handling form submission
  const handelShowModalPayment = () => {
    setShowModalPayment(true); // Show confirmation modal
  };

  const handlebacktoProjectList = () => {
    setNewShareTasks(false);
  };

  let { handleSubmit, loading } = useHandleSubmitProjectCreation(formData);

  const HandleCreateShareTask = async () => {
    if (isLoading) return; // Prevent further action while loading

    try {
      if (getCountshareProjectFromLocalStorage() > countfreeShares.share_task) {
        handelShowModalPayment();
      } else {
        formData.orderID = 'xxxxxxx';
        formData.sharesTotalPrice = 0.00;
        const response = await createProject(formData);
        if (response && response.data) {
          // Display the success toast notification
          toast.success("Project was created", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // Use setTimeout to delay the navigation
          setTimeout(() => {
            window.location.href = `/projects`;
          }, 1000); // Wait for 3 seconds for the toast to be visible
        }
      }
    } catch (e) {
      console.error("Error creating Project:", e); // Log errors
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

  const handleChangeTitle = (selectedOptions) => {
    setTitleLength(selectedOptions.target.value.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      title: selectedOptions.target.value,
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

  const handleChangeProjectDescription = (value) => {
    setProjectDescription(value); // Update local state
    setValue("projectDescription", value); // Set form value

    // Manual validation check
    if (value.length < 200) {
      methods.setError("projectDescription", {
        type: "manual",
        message: "Description must be at least 200 characters.",
      });
    } else {
      // Clear error if valid
      methods.clearErrors("projectDescription");
    }
  };

  return (
    <ContainerStyleShareTask>
      <FormProvider {...methods} style={{ marginRight: "10px;" }}>
        <TitleStyle>
          <BackButton onClick={handlebacktoProjectList}>
            <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
          </BackButton>

          <TitleForm>
            Share your Project with the ItGalaxy community
            <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" , color: "gray"}} />

          </TitleForm>
        </TitleStyle>
        <InputContainer>
          <InputLabel>Project Title</InputLabel>
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
              color: titleLength >= 100 ? "red" : "black",
            }}
          >
            {titleLength}/50
          </p>
        </InputContainer>

        <LocationStyle>
          <InputContainer>
            <InputLabel>Profils Categories</InputLabel>
            <GenericInput
              inputObject={{
                ...formConfig.category,
              }}
              onChange={handleChangeCategorysSelected}
              disabledForm={false}
            />
          </InputContainer>

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
        </LocationStyle>
        <LocationStyle>
          <InputContainer>
            <InputLabel>Budget (euro)</InputLabel>
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
          <InputLabel>Project Description</InputLabel>
          <RichTextEditor
            value={projectDescription}
            onChange={handleChangeProjectDescription} // Pass the validation and setter
            height={"260px"}
          />
          <p
            style={{
              color: describLenght < 200 ? "red" : "white",
              fontSize: "small",
              textAlign: "right",
              marginTop: "4px",
            }}
          >
            Description must be at least 200 characters. {describLenght}/200
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
            <ButtonSubmit onClick={HandleCreateShareTask} disabled={loading}>
              {loading ? (
                <>
                  <Spinner />{" "}
                  {/* Spinner for loading indicator */}
                  <span style={{ marginLeft: "5px" }}>loading...</span>
                </>
              ) : (
                "Post it"
              )}
            </ButtonSubmit>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ButtonSubmit disabled={true} >Share the project</ButtonSubmit>
          </ButtonContainer>
        )}
      </FormProvider>

      {showModalPayment && (
        <ModalPayment
          handleCloseShowModal={handleClose}
          showModalPayment={handelShowModalPayment}
          paymentProposal={false}
          price={priceShares.share_task}
          formMethods={methods}
          title={"PAYMENT PROJECT CREATION"}
          note={
            "To share this project with community you need to pay the service."
          }
          onSubmit={handleSubmit}
        />
      )}
    </ContainerStyleShareTask>
  );
}
