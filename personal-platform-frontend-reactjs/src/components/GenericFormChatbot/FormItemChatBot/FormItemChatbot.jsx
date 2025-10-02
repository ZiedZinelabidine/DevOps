import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { skillsData } from "../../../data/skillData";
import ChatbotTextEffect from "../../ChatbotTextEffect/ChatbotTextEffect";
import MultiSelectCompoent from "../../Inputs/CustomMultiSelectAutoComplet/multiSelect";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import { formConfig } from "./FormItemChatbot.contants";
import {
  Answer,
  CenteredInlineFlexMB20PxContainer,
  FormWrapper,
  InlineBlockContainer,
  InlineFlexContainer,
  InputContainer,
  ML20PxBoldContainer,
  QuestionContainer,
  UserLabel,
  Vh90WidthContainer,
} from "./FormItemChatbot.style";

export const FormItemChatbot = ({
  setRedirect,
  title,
  question,
  placeholder,
  items,
  index,
  chattype,
  formValues,
  setFormValues,
  onComplete,
  onNext,
}) => {
  const [answers, setAnswers] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filterValues, setFilterValues] = useState({ skills: [] });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
  });

  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const handleSkillsChange = (selectedSkills) => {
    setFilterValues((prevFilters) => ({
      ...prevFilters,
      skills: selectedSkills.map((skill) => skill.value),
    }));
  };

  const handleModalRegister = () => {
    setRedirect((prev) => ({
      ...prev,
      openModalRegister: false,
      setOpenModalRegister: false,
    }));
  };

  const onSubmit = () => {
    switch (chattype) {
      case "Compose your Team":
        return setRedirect({
          proxy: "composeyourteam",
          defaultkey: "entreprise",
          openModalRegister: true,
          setOpenModalRegister: true,
          openModalLoginDefault: false,
          handleModalRegister: handleModalRegister,
          switchBetweenModals: true,
          freelance: false,
          recruiter: false,
          buisness: true,
        });
      case "Share your project":
        return setRedirect({
          proxy: "shareProject",
          defaultkey: "entreprise",
          openModalRegister: true,
          setOpenModalRegister: true,
          openModalLoginDefault: false,
          handleModalRegister: handleModalRegister,
          switchBetweenModals: true,
          freelance: false,
          recruiter: false,
          buisness: true,
        });
      case "Share a Jobs":
        return setRedirect({
          proxy: "shareJob",
          defaultkey: "recruiter",
          openModalRegister: true,
          setOpenModalRegister: true,
          openModalLoginDefault: false,
          handleModalRegister: handleModalRegister,
          switchBetweenModals: true,
          freelance: false,
          recruiter: true,
          buisness: false,
        });
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    if (index === 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        title: e,
      }));
    } else if (index === 1) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        description: e,
      }));
    } else if (index === 2) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        price: e,
      }));
    }
  };
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        setAnswers((prev) => [
          ...prev,
          <InlineFlexContainer key={`response-${prev.length}`}>
            <ML20PxBoldContainer>
              <b>[Vous]:</b>
              <Vh90WidthContainer>
                <Answer>
                  {index === 0
                    ? formMethods.getValues("title")
                    : index === 1
                      ? formMethods.getValues("description")
                      : index === 2
                        ? formMethods.getValues("price") + "$"
                        : ""}
                </Answer>
              </Vh90WidthContainer>
            </ML20PxBoldContainer>
          </InlineFlexContainer>,
        ]);

        setIsEditable(true);
        onNext();
      }
    },
    [onNext]
  );

  return (
    <InlineBlockContainer>
      <CenteredInlineFlexMB20PxContainer>
        <ChatbotTextEffect message={title} />
      </CenteredInlineFlexMB20PxContainer>

      <QuestionContainer>
        <b>
          <ChatbotTextEffect message={question} />
        </b>
      </QuestionContainer>

      {showInput && (
        <InputContainer>
          <UserLabel>[Vous]:</UserLabel>
          <FormWrapper>
            <FormProvider {...formMethods}>
              <div onKeyDown={handleKeyPress}>
                {index !== items.length - 1 ? (
                  <div>
                    <GenericInput
                      key={`input-${index}`}
                      inputObject={
                        index === 0
                          ? formConfig.title
                          : index === 1
                            ? formConfig.description
                            : index === 2
                              ? formConfig.price
                              : null
                      }
                      onChange={handleChange}
                      disabledForm={isEditable}
                      name={
                        index === 0
                          ? "title"
                          : index === 1
                            ? "description"
                            : index === 2
                              ? "price"
                              : ""
                      }
                    />
                    {placeholder && (
                      <div style={{ marginTop: "10px" }}>
                        <b>{placeholder}</b>
                      </div>
                    )}
                  </div>
                ) : (
                  <MultiSelectCompoent
                    isMulti={true}
                    options={skillsData.map((skill) => ({
                      value: skill.title,
                      label: skill.title,
                    }))}
                    onChange={handleSkillsChange}
                  />
                )}
              </div>
            </FormProvider>
          </FormWrapper>
        </InputContainer>
      )}

      {answers}

      {index === items.length - 1 && filterValues?.skills?.length > 0 && (
        <div>
          <hr />
          <Button
            onClick={onSubmit}
            style={{
              width: "100%",
              padding: "5px",
              backgroundColor: "black",
            }}
          >
            Next
          </Button>
        </div>
      )}
    </InlineBlockContainer>
  );
};
