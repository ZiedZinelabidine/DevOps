import { forwardRef } from "react";
import {
  FileInfo,
  FileInputContainer,
  FileInputLabel,
  FileName,
  ImagePreview,
  PreviewContainer,
  RemoveButton,
  StyledFileInput,
  UploadIcon,
} from "./CustomFileInput.style";
import { FolderCode } from 'lucide-react';
const compressedFileIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/compressed-file-icon.png`;

const isValidFileType = (file) => {

  const validExtensionsRegex = /\.(jpg|png|jpeg|gif|webp|svg)$/i;
  return ( 
      (validExtensionsRegex.test(file?.name))   
    );
};

const CustomFileInput = forwardRef(
  ({ selectedFile, onFileSelect, accept, placeholder, error, label }, ref) => {
    const handleFileChange = (event) => {
      console.log("event.target.files[0]", event.target.files[0]);
      const file = event.target.files[0];

      if (file) {
        onFileSelect(file);
      }
    };

    const handleRemove = () => {
      onFileSelect(null);
    };

    return (
      <FileInputContainer>
        {selectedFile ? (
          <PreviewContainer>
        <ImagePreview>
            {isValidFileType(selectedFile) ? (
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Preview"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                        }}
                    />
                ) : (
                  <FolderCode style={{ width: "48px", height: "48px" }} />
                )}
        </ImagePreview>
            <FileInfo>
              <FileName>{selectedFile.name}</FileName>
              <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
            </FileInfo>
          </PreviewContainer>
        ) : (
          <>
            <StyledFileInput
              type="file"
              onChange={handleFileChange}
              accept={accept}
              ref={ref}
              id="file-input"
            />
            <FileInputLabel htmlFor="file-input" error={error}>
              <UploadIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 14.9861C11 15.5384 11.4477 15.9861 12 15.9861C12.5523 15.9861 13 15.5384 13 14.9861V7.82831L16.2428 11.0711L17.657 9.65685L12.0001 4L6.34326 9.65685L7.75748 11.0711L11 7.82854V14.9861Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Click to upload {placeholder}</span>
              </UploadIcon>
            </FileInputLabel>
          </>
        )}
        {error && (
          <div style={{ color: "#FF4D4F", marginTop: "4px", fontSize: "14px" }}>
            {error}
          </div>
        )}
      </FileInputContainer>
    );
  }
);

CustomFileInput.displayName = "CustomFileInput";

export default CustomFileInput;
