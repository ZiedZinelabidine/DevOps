import styled from "styled-components";

export const RichTextEditorContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f8f9fa; // Light background
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  min-height: 300px;
  direction: ltr; // Ensure the container is LTR
  text-align: left; // Ensures everything starts from the left
`;


export const EditorTitle = styled.label`
  font-size: 16px; // Font size for the label
  font-weight: bold; // Bold text for the label
  color: #555; // Color for the label
  margin-bottom: 10px; // Space below the label
  display: block; // Ensure the label is a block element
`;
