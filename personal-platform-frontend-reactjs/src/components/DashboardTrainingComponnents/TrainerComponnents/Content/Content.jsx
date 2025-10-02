import { Button } from "react-bootstrap";
import styled from "styled-components";
import ChapterContent from "../ChapterContent/ChapterContent";
import { ContentFormContainer } from "./Content.style";

const StyledButton = styled(Button)`
  width: 98%;
  margin-left: 15px;
  background-color: #007bff;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export default function Content({
  id,
  onValidate,
  onCancel,
  currentChapterIndex,
  onConfirmChapter,
  onDeleteChapter,
  edit,
}) {
  return (
    <ContentFormContainer>
      <ChapterContent
        id={id}
        index={currentChapterIndex}
        edit={true}
        onValidate={onValidate}
        onCancel={onCancel}
        onConfirmChapter={onConfirmChapter}
        onDeleteChapter={onDeleteChapter}
      />
    </ContentFormContainer>
  );
}
