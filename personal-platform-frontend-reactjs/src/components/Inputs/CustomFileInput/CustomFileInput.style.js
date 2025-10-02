import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  height: 156px;
  background-color: #f4f5f5;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Set position relative to make it the parent for absolute positioning */

  input[type="file"] {
    display: none; /* Hide the default file input */
  }

  &:hover {
    background-color: #d1d1d1;
  }

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
  }
`;

export const StyledUploadButton = styled.button`
  position: absolute; /* Position the button absolutely inside the wrapper */
  bottom: 10px; /* Position it at the bottom */
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0.25rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const FilePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #6c757d;
  font-size: 14px;

  i {
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    margin: 0;
  }
`;

export const linkStyle = {
  color: "#007bff", // Bootstrap primary color
  textDecoration: "underline",
  marginTop: "5px",
  display: "inline-block",
};

export const FileInputContainer = styled.div`
  width: 100%;
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 156px;
  border: 2px dashed ${(props) => (props.error ? "#FF4D4F" : "#E0E0E0")};
  border-radius: 8px;
  cursor: pointer;
  background: #f8f9fa;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`;

export const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImagePreview = styled.div`
  width: 100% !important;
  height: 156px !important;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #e0e0e0;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
  width: 100%;
`;

export const FileName = styled.span`
  flex: 1;
  font-size: 14px;
  color: #595959;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RemoveButton = styled(Button)`
  padding: 4px 8px;
  color: #ff4d4f;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: #ff7875;
    background: transparent;
  }

  &:active {
    color: #ff7875;
    background: transparent !important;
  }
`;

export const UploadIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #8c8c8c;

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 14px;
  }
`;
