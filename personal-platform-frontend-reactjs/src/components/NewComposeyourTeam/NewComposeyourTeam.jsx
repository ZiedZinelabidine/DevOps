import GenericInput from "components/Inputs/GenericInput/GenericInput";
import RichTextEditor from "components/RichTextEditor/RichTextEditor";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AddProjectProposalEntrepriseCreation } from "../../redux/slice/propsoalEntrepriseCreationSlice/proposalEntrepriseCreationSlice";
import Profilfreelances from "../ComponnentProfilItems/profilfreelances/profilfreelances";
import { formConfig } from "./NewComposeyourTeam.constants";
import {
  BackButton,
  ButtonContainer,
  ButtonSubmit,
  ButtonSubmitDisable,
  ContainerStyleCompose,
  InputContainer,
  InputLabel,
  LocationStyle,
  TitleForm,
  TitleStyle,
} from "./NewComposeyourTeam.style";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

export default function AddNewComposeyourTeam({ id, setNewComposeyourTeam }) {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      projectTitle: "",
      projectDescription: "",
      competencesselected: [],
      location: "",
      languagesselected: [],
      orderID: "",
      sharesTotalPrice: 0.00
    },
  });

  const [projectDescription, setProjectDescription] = useState("");
  const [candidatesProfils, setCandidatesProfils] = useState(false);
  const [titleLength, setTitleLength] = useState(0);
  const [describLenght, setDescribLenght] = useState(0);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
  } = methods;
  const dispatch = useDispatch();

  const handlebacktoProjectList = () => {
    setNewComposeyourTeam(false);
  };

  const [formData, setFormData] = useState({
    entrepriseId: id,
    title: "",
    projectDescription: projectDescription,
    competencesselected: [],
    languagesselected: [],
    category: [],

  });

  useEffect(() => {
    setDescribLenght(projectDescription.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectDescription: projectDescription,
    }));

    methods.trigger("projectDescription");
  }, [projectDescription, methods]);

  const onSubmit = () => {
    try {
      setCandidatesProfils(true);
      dispatch(AddProjectProposalEntrepriseCreation(formData));
    } catch (e) {
      console.error("Failed to create project:", e);
      const errorMessage = e.data?.error || "Please check the inputs";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleChangeTitle = (selectedOptions) => {
    setTitleLength(selectedOptions.target.value.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectTitle: selectedOptions.target.value,
    }));
  };


  const handleChangeCategorysSelected = (selectedOptions) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedOptions.map((option) => option.value),
    }));
  };

  const handleChangeLanguagesSelected = (selectedOptions) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      languagesSelected: selectedOptions.map((option) => option.value),
    }));
  };

  const handleChangeCompetencesSelected = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      competencesSelected: selectedValues,
    }));
    setValue("competencesselected", selectedValues); // Sync with form state
    methods.trigger("competencesselected"); // Manually trigger validation for updates
  };

  const handleChangeProjectDescription = (value) => {
    setProjectDescription(value); // Update local state
    setValue("projectDescription", value); // Set form value

    // Manual validation check
    if (value.length < 200) {
      // Assume minimum is 200 characters
      methods.setError("projectDescription", {
        type: "manual",
        message: `Description must be at least 200 characters. You entered ${value.length}/200.`,
      });
    } else {
      // Clear error if valid
      methods.clearErrors("projectDescription");
    }
  };

  return (
    <>
      {!candidatesProfils ? (
        <ContainerStyleCompose>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TitleStyle>
                <BackButton onClick={handlebacktoProjectList}>
                  <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
                </BackButton>

                <TitleForm>
                   Describe your project
                   <hr style={{ borderTop: "1px solid", opacity: "1", width: "100%" , color: "gray"}} />

                </TitleForm>
              </TitleStyle>

              <InputContainer>
                <InputLabel>Project Title</InputLabel>
                <GenericInput
                  inputObject={{
                    ...formConfig.projectTitle,
                  }}
                  onChange={handleChangeTitle} // Adjusted to expect single value
                  disabledForm={false}
                  control={control}
                />
                <p
                  style={{
                    fontSize: "15px",
                    textAlign: "right",
                    color: titleLength >= 50 ? "red" : "white",
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
                  <InputLabel>Languages Selected</InputLabel>
                  <GenericInput
                    inputObject={{
                      ...formConfig.languagesselected,
                    }}
                    onChange={handleChangeLanguagesSelected}
                    disabledForm={false}
                  />
                </InputContainer>
              </LocationStyle>

              <InputContainer>
                <InputLabel>Project Description</InputLabel>
                <RichTextEditor
                  value={projectDescription}
                  onChange={handleChangeProjectDescription} // Ensure that validation and setter are passed
                  height={"300px"}
                />
                <p
                  style={{
                    color: describLenght < 200 ? "red" : "white",
                    fontSize: "small",
                    textAlign: "right",
                    marginTop: "4px",
                  }}
                >
                  Description must be at least 200 characters. {describLenght}
                  /200
                </p>
              </InputContainer>

              <InputContainer>
                <InputLabel>Competences Selected</InputLabel>
                <GenericInput
                  inputObject={{
                    ...formConfig.competencesselected,
                  }}
                  control={control}
                  onChange={handleChangeCompetencesSelected}
                  disabledForm={false}
                />
              </InputContainer>

              <ButtonContainer>
                {isValid && Object.keys(errors).length === 0 ? (
                  <ButtonSubmit onClick={onSubmit}>
                    {"Choice Freelancers"}
                  </ButtonSubmit>
                ) : (
                  <ButtonSubmit disabled>
                    Choice Freelancers
                  </ButtonSubmit>
                )}
              </ButtonContainer>
            </form>
          </FormProvider>
        </ContainerStyleCompose>
      ) : (
        <Profilfreelances setCandidatesProfils={setCandidatesProfils} />
      )}
    </>
  );
}
