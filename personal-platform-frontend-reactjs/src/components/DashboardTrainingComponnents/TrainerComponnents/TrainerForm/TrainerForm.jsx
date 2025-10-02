import { yupResolver } from "@hookform/resolvers/yup";
import useHandleSubmitTrainingCreation from "hooks/useHandleSubmitTrainingCreation";
import { useEffect, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  APPLICATION_ITEMS_UPDATE,
  APPLICATION_ITEMS,
  VIDEO_TRAINING_ITEMS_UPDATE,
} from "../../../../core/constants/trainerForm.constants";
import { renderContentList } from "../../../../core/helpers/trainerForm";
import { clearVideosTraining } from "../../../../redux/slice/TrainingCreation/trainingCreationSlice";
import FormStepHeader from "./components/FormStepHeader";
import ModalConfirmationTraining from "./components/ModalConfirmationTraining";
import { StepperNavigation } from "./components/StepperNavigation";
import {
  BackButton,
  BigContainer,
  ButtonContainer,
  StyledContainer,
  StyledFormContainer,
  StyledStepContentCard,
  StyledStepContentColumn,
  StyledStepsFormContainer,
} from "./TraininerForm.style";
import {
  createChapterState,
  formatFormDataForBackend,
  getChapterFromForm,
  updateChapterInForm,
} from "./utils/chapterManager";
import { validateChapterFields, validateStep, validateTrainingType } from "./utils/validationManager";
import { validationSchemas } from "./validationSchemas";
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;

const ParcoursForm = ({ setTrainerForm , isEdit, data }) => {
  // State management
  const [formState, setFormState] = useState({
    confirmShow: false,
    items: APPLICATION_ITEMS,
    selectedElement: 1,
    openModalRegister: false,
    currentChapterIndex: 0,
    subModules: [],
    currentSubModule: { id: "chapter_1", index: 0, title: "Module 1" },
  });
  const [trainingType, setTrainingType] = useState("APPLICATION");

  // Form setup with validation schema based on current step
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemas[formState.selectedElement] || {}),
    shouldUnregister: false,
  });

  const { control, getValues, setValue, watch, handleSubmit } = formMethods;

  useEffect(() => {
    formMethods.setValue("productType", "APPLICATION");
    formMethods.setValue("product_type", "APPLICATION");

    if (isEdit) {
      formMethods.setValue("product_type", "APPLICATION");
      formMethods.setValue("title", data?.title);
      formMethods.setValue("description", data?.description);
      formMethods.setValue("language", data?.language);
      formMethods.setValue("skills", data?.skills);
      formMethods.setValue("price", data?.price);
      formMethods.setValue("chapters", data?.chapters);


      if (formMethods.getValues("product_type") === "VIDEOSTRAINING") {
        setFormState((prev) => ({
          ...prev,
          items: VIDEO_TRAINING_ITEMS_UPDATE,
          selectedElement: 2,
        }));
        setTrainingType("VIDEOSTRAINING");
      } else {
        setFormState((prev) => ({
          ...prev,
          items: APPLICATION_ITEMS_UPDATE,
          selectedElement: 2,
        }));
        setTrainingType("APPLICATION");
      }
    }
  }, []);

  // Redux and navigation
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use the useFieldArray hook for managing chapters
  const {
    fields: chapterFields,
    append: appendChapter,
    update: updateChapter,
    remove: removeChapter,
  } = useFieldArray({
    control,
    name: "chapters",
  });

  // Training creation handler
  const {
    handleSubmit: handleTrainingSubmit,
    handleSubmitUpdate,
    loading,
  } = useHandleSubmitTrainingCreation(
    formState.selectedElement,
    (val) => setFormState((prev) => ({ ...prev, selectedElement: val })),
    (val) => setFormState((prev) => ({ ...prev, confirmShow: val })),
    formState.openModalRegister,
    (val) => setFormState((prev) => ({ ...prev, openModalRegister: val })),
    isEdit,
    formMethods
  );

  // Format final data for submission
  const formatFinalData = () => {
    const formData = getValues();
    const chapters = chapterFields.map((chapter, index) => ({
      ...chapter,
      ...getChapterFromForm(getValues, index),
    }));

    return formatFormDataForBackend({
      ...formData,
      chapters,
    });
  };

  // Modal handlers
  const modalHandlers = {
    handleConfirmationSubmit: async () => {
      const isValid = await formMethods.trigger();
      if (isValid) {
        const formData = formatFinalData();
        try {
          const response = await handleTrainingSubmit(formData);
          if (response.success) {
            dispatch(clearVideosTraining());
            navigate("/producer");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      } else {
        console.error("Trainer Form Validation failed");
      }
    },
  };

  // Initialize subModules state when chapters change
  useEffect(() => {
    const newSubModules = chapterFields.map((_, index) => ({
      id: `chapter_${index + 1}`,
      index,
      title: `Module ${index + 1}`,
    }));

    setFormState((prev) => ({
      ...prev,
      subModules: newSubModules,
    }));
  }, [chapterFields]);

  // Watch chapters data
  const chaptersData = watch("chapters");

  // Handle chapter navigation
  const handleChapterNavigation = (index) => {
    try {
      // Save current chapter data before switching
      if (formState.currentChapterIndex !== null) {
        const currentData = getChapterFromForm(
          getValues,
          formState.currentChapterIndex
        );
        if (currentData) {
            updateChapter(formState.currentChapterIndex, { ...currentData });
        }
      }

      // Load data for the requested chapter
      if (index >= chapterFields.length) {
        const newChapter = createChapterState();
        appendChapter(newChapter);
      }

      // Update form state
      setFormState((prev) => ({
        ...prev,
        currentChapterIndex: index,
        currentSubModule: {
          id: `chapter_${index + 1}`,
          index,
          title: `Module ${index + 1}`,
        },
      }));
    } catch (error) {
      console.error("Error in chapter navigation:", error);
    }
  };

  // Chapter operations
  const handleChapterOperations = {
    addChapter: () => {
      try {
        // Save current chapter data if exists
        if (
          formState.currentChapterIndex !== null &&
          formState.currentChapterIndex >= 0
        ) {
          const currentData = getChapterFromForm(
            getValues,
            formState.currentChapterIndex
          );
          if (currentData) {
            updateChapter(formState.currentChapterIndex, currentData);
          }
        }

        const newIndex = chapterFields.length;
        const newChapter = createChapterState(newIndex);

        // Add new chapter
        appendChapter(newChapter);

        // Update form state
        setFormState((prev) => ({
          ...prev,
          currentChapterIndex: newIndex,
          currentSubModule: {
            id: `chapter_${newIndex + 1}`,
            newIndex,
            title: `Module ${newIndex + 1}`,
          },
        }));

        // Initialize new chapter data
        updateChapterInForm(setValue, chapterFields, newIndex, newChapter);

      } catch (error) {
        console.error("Error adding chapter:", error);
      }
    },

    confirmChapter: async (addNewChapter = false) => {
      try {
        const currentData = getChapterFromForm(
          getValues,
          formState.currentChapterIndex
        );
        const isValid = await validateChapterFields(
          formMethods,
          formState.currentChapterIndex
        );

        if (isValid) {
          // Save current chapter data
          updateChapter(formState.currentChapterIndex, currentData);

          if (addNewChapter) {
            handleChapterOperations.addChapter();
          } else {
            setFormState((prev) => ({
              ...prev,
              selectedElement: prev.selectedElement + 1,
              currentChapterIndex: null,
              currentSubModule: null,
            }));
          }
        } else {
          console.error("Chapter validation failed");
        }
      } catch (error) {
        console.error("Error confirming chapter:", error);
      }
    },

    loadChapter: (index) => {
      try {
        // Save current chapter data before switching
        if (formState.currentChapterIndex !== null) {
          const currentData = getChapterFromForm(
            getValues,
            formState.currentChapterIndex
          );
          if (currentData) {
            updateChapter(formState.currentChapterIndex, currentData);
          }
        }

        // Load data for the requested chapter
        const chapterData =
          getChapterFromForm(getValues, index) || createChapterState();
        setValue(`chapters.${index}`, chapterData);

        // Update form state
        setFormState((prev) => ({
          ...prev,
          currentChapterIndex: index,
          currentSubModule: prev.subModules[index],
        }));

      } catch (error) {
        console.error("Error loading chapter:", error);
      }
    },

    deleteChapter: (index) => {
      try {
        if (
          formState.currentChapterIndex !== null &&
          formState.currentChapterIndex >= 0
        ) {
          removeChapter(formState.currentChapterIndex);
        }
        const newIndex = index - 1;
        // Update form state
        setFormState((prev) => ({
          ...prev,
          currentChapterIndex: newIndex,
          currentSubModule: {
            id: `chapter_${newIndex}`,
            newIndex,
            title: `Module ${newIndex}`,
          },
        }));
      } catch (error) {
        console.error("Error adding chapter:", error);
      }
    },
  };

  // Navigation handlers
  const navigationHandlers = {
    handleCancel: () => {
      navigate("/producer");
    },
    handleBack: () => {
      if (formState.selectedElement > 1) {
        // Save current chapter data before going back
        if (formState.currentChapterIndex !== null) {
          const currentData = getChapterFromForm(
            getValues,
            formState.currentChapterIndex
          );
          if (currentData) {
            updateChapter(formState.currentChapterIndex, currentData);
          }
        }

        setFormState((prev) => ({
          ...prev,
          selectedElement: prev.selectedElement - 1,
          currentChapterIndex: null,
          currentSubModule: null,
        }));
      } else {
        navigate("/producer");
      }
    },

    handleStepValidation: async (nextStep) => {
        try {
   
        if (formState.selectedElement === 1) {
          // When validating step 2, create first chapter

          if (!isEdit) {
            const newChapter = createChapterState(0);

            appendChapter(newChapter);
            setFormState((prev) => ({
              ...prev,
              selectedElement: 2,
              currentChapterIndex: 0,
            }));

            updateChapterInForm(setValue, chapterFields, 0, newChapter);
          } else {
            if (data.chapters) {
              // Iterating through each chapter and setting values
              Object.keys(data.chapters).forEach((index) => {
                const chapter = data.chapters[index];
                const newChapter = {
                  chapterTitle: chapter.title || "", // Assuming each chapter has a title
                  chapterDescription: chapter.description || "", // Assuming each chapter has a description
                  videos: [],
                  supportFile: null,
                };
                appendChapter(newChapter);
                updateChapterInForm(setValue, chapterFields, index, newChapter);
              });
              setFormState((prev) => ({
                ...prev,
                selectedElement: 2,
                currentChapterIndex: 0,
              }));
            }
          }

          return { success: true };
        } else if (formState.selectedElement === 4) {
          // Step 5 validation - only validate required fields
          const formValues = formMethods.getValues();
          const requiredFields = [
            "details.title",
            "details.description",
            "details.language",
            "price",
          ];
          const missingFields = requiredFields.filter((field) => {
            const value = field
              .split(".")
              .reduce((obj, key) => obj?.[key], formValues);
            return !value;
          });

          if (missingFields.length > 0) {
            console.error("Missing required fields:", missingFields);
            return {
              success: false,
              error: `Missing required fields: ${missingFields.join(", ")}`,
            };
          }

          return { success: true };
        } else {
          // For other steps, proceed normally
          setFormState((prev) => ({
            ...prev,
            selectedElement: nextStep,
          }));
          return { success: true };
        }
      } catch (error) {
        console.error("Error in handleStepValidation:", error);
        return { success: false };
      }
    },

    handleStepClick: (stepId, subModuleId = null) => {
      if (stepId === 2 && subModuleId) {
        // Extract chapter index from subModuleId (e.g., "chapter_1" -> 0)
        const chapterIndex = parseInt(subModuleId.split("_")[1]) - 1;
        handleChapterNavigation(chapterIndex);
      } else {
        setFormState((prev) => ({
          ...prev,
          selectedElement: stepId,
          currentSubModule: null,
        }));
      }
    },
  };

  const handleBackButton = () => {
    setTrainerForm(false);
  };
  // Clean up function to handle chapter state
  useEffect(() => {
    return () => {
      // Clean up chapter state when component unmounts
      formMethods.reset({
        ...formMethods.getValues(),
        chapters: chapterFields,
      });
    };
  }, []);


  return (
    <FormProvider {...formMethods}>
      <StyledContainer>
        <ButtonContainer>
          <BackButton onClick={handleBackButton}>
          <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />
          </BackButton>
          <BigContainer>
            <FormStepHeader />
            <StyledFormContainer>
              <StyledStepsFormContainer>
                <StyledStepContentColumn>
                  <StyledStepContentCard>
                    {renderContentList({
                      id: data?.id,
                      trainingType,
                      setTrainingType,
                      selectedElement: formState.selectedElement,
                      handleStepValidation:
                        navigationHandlers.handleStepValidation,
                      handleSubmit: handleTrainingSubmit,
                      setItems: (val) =>
                        setFormState((prev) => ({ ...prev, items: val })),
                      formMethods,
                      deleteChapter: handleChapterOperations.deleteChapter,
                      currentChapterIndex: formState.currentChapterIndex,
                      handleConfirmChapter:
                        handleChapterOperations.confirmChapter,
                      navigationHandlers,
                      isEdit,
                      handleSubmitUpdate,
                      loading,
                    })}
                    <ModalConfirmationTraining
                      confirmShow={formState.confirmShow}
                      onCancel={() => {
                        if (formState.selectedElement > 1) {
                          setFormState((prev) => ({
                            ...prev,
                            selectedElement: prev.selectedElement - 1,
                            confirmShow: false,
                          }));
                        }
                      }}
                      onSubmit={modalHandlers.handleConfirmationSubmit}
                    />
                  </StyledStepContentCard>
                </StyledStepContentColumn>
                <StepperNavigation
                  items={formState.items}
                  isEdit={isEdit}
                  selectedElement={formState.selectedElement}
                  currentSubModule={formState.currentSubModule}
                  subModules={formState.subModules}
                  onStepClick={navigationHandlers.handleStepClick}
                  onAddChapter={handleChapterOperations.addChapter}
                />
              </StyledStepsFormContainer>
            </StyledFormContainer>
          </BigContainer>
        </ButtonContainer>
      </StyledContainer>
    </FormProvider>
  );
};

export default ParcoursForm;
