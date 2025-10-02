import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import GenericInput from "../../../Inputs/GenericInput/GenericInput";
import AddFolderApplication from "../AddFolderApplication/AddFolderApplication";
import { ChapterTitle, StyledLabel } from "../TrainerForm/TraininerForm.style";
import VideoUpload from "../VideoUpload/VideoUpload";
import { formConfig } from "./ChapterContent.constants";
import { ContentFormContainer } from "./ChapterContent.style";
import RichTextEditor from "components/RichTextEditor/RichTextEditor";

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  padding-top: 20px;
`;

const StyledButton = styled(Button)`
  flex: 1;
  background-color: #007bff;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &.secondary {
    background-color: #6c757d;
    &:hover {
      background-color: #5a6268;
    }
  }
`;
const ButtonContainerDelete = styled.div`
  display: flex;
  justify-content: flex-end; // Aligns items to the right
  width: 100%; // Ensures it takes the full width of the parent container
  padding-top: 20px; // Optional: Add some spacing if needed
`;

const StyledButtonDelete = styled(Button)`
  background: var(--Error-Error100, rgba(228, 98, 111, 1));
  color: white;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent; // Default border, can be transparent or any color
  transition: border-color 0.3s; // Smooth transition for border color

  &:hover {
    background: red; // Change background color on hover
    cursor: pointer; // Change cursor to pointer
    border: 2px solid red; // Change border color to red on hover
  }
`;

const DescriptionContentStyle = styled.div`
 width: 100%;
`;


const ChapterContent = ({
  id,
  index,
  edit,
  onUpdate,
  onValidate,
  onCancel,
  onConfirmChapter,
  onDeleteChapter,
}) => {
  const { control, watch, getValues, setValue } = useFormContext();

  // Helper to update fields
  const handleFieldUpdate = useCallback(
    (fieldName, value) => {
      const actualValue = value?.target?.value ?? value;
      const fieldPath = `chapters.${index}.${fieldName}`;

      setValue(fieldPath, actualValue, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });

      const chapterData = getValues(`chapters.${index}`);
      onUpdate?.(chapterData);
    },
    [index, setValue, getValues, onUpdate]
  );


  const resetChapterFields = useCallback(() => {
    setValue(`chapters.${index}.chapterTitle`, "");
    setValue(`chapters.${index}.chapterDescription`, "");
    setValue(`chapters.${index}.videos`, []);
    setValue(`chapters.${index}.supportFile`, null);
  }, [index, setValue]);

  return (
    <>
      <ButtonContainerDelete>
        {index > 0 && (
          <StyledButtonDelete onClick={() => onDeleteChapter(index)}>
            Delete Module {index + 1}
          </StyledButtonDelete>
        )}
      </ButtonContainerDelete>

      <ChapterTitle>Module {index + 1}</ChapterTitle>
      <ContentFormContainer>
        <StyledLabel>1. Module Title *</StyledLabel>
        <GenericInput
          control={control}
          inputObject={{
            ...formConfig.chapterTitle,
            fieldName: `chapters.${index}.chapterTitle`,
          }}
          value={getValues(`chapters.${index}.chapterTitle`)}
          onChange={(e) => handleFieldUpdate("chapterTitle", e)}
        />

        <StyledLabel>2. Module Details *</StyledLabel>
        <DescriptionContentStyle> 
        
          <RichTextEditor
            value={getValues(`chapters.${index}.chapterDescription`)}
            onChange={(e) => handleFieldUpdate("chapterDescription", e)}
            height={"400px"}
            width={"100%"}
            marginBottom={"30px"}
         />
          </DescriptionContentStyle> 
          

   
        <StyledLabel>4. Module Videos</StyledLabel>

        <VideoUpload
          id={id}
          index={index}
          edit={edit}
          type={getValues("product_type")}
          fieldName={`chapters.${index}.videos`}
          setValue={setValue}
          formVideos={getValues(`chapters.${index}.videos`)}
        />

        <StyledLabel>5. Module Support File</StyledLabel>
        <AddFolderApplication
          id={id}
          index={index}
          edit={edit}
          type={getValues("product_type")}
          inputObject={{
            fieldName: `chapters.${index}.supportFile`,
          }}
          disabled={false}
          value={getValues(`chapters.${index}.supportFile`)}
          onChange={(file) => handleFieldUpdate("supportFile", file)}
        />

        <ButtonContainer>
          <StyledButton
            onClick={() => {
              const chapterData = getValues(`chapters.${index}`);
              onConfirmChapter?.(chapterData);
              resetChapterFields();
            }}
          >
            Add a new Module
          </StyledButton>

          <StyledButton  onClick={() => {
              onConfirmChapter?.();
            }} >
            Confirm Module
          </StyledButton>
        </ButtonContainer>
      </ContentFormContainer>
    </>
  );
};

export default ChapterContent;
