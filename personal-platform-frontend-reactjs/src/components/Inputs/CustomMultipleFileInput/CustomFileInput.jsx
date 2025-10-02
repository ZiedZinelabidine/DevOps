import CustomIcon from "components/CustomIcon/CustomIcon";
import { File, Image, Trash2 } from "lucide-react";
import React from "react";
import {
  DeleteButton,
  FileInfo,
  FileItem,
  FileList,
  FileName,
  StyledInput,
} from "./CustomFileInput.style";


const getIconByFileType = (fileType) => {
  if (fileType.includes("image")) {
    return Image;
  } else if (fileType.includes("pdf")) {
    return File;
  } else {
    return File;
  }
};

const CustomFileMultipleInput = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  accept,
  label,
  selectedFiles, // Now received as prop
  setSelectedFiles, // Now received as prop
}) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = [...selectedFiles, ...files];
    setSelectedFiles(updatedFiles);
    onChange(updatedFiles); // Propagate the change to parent
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = selectedFiles.filter(
      (_, fileIndex) => fileIndex !== index
    );
    setSelectedFiles(updatedFiles);
    onChange(updatedFiles); // Propagate the change to parent
  };

  return (
    <React.Fragment>
      <StyledInput
        type="file"
        id="file-upload"
        multiple
        name="files"
        onChange={handleFileChange}
        accept=".jpg,.png,.pdf,.doc,.docx,.txt"
      />
      <FileList>
        {selectedFiles.map((file, index) => (
          <FileItem key={index}>
            <FileInfo>
               <File />
              <FileName>{file.name}</FileName>
            </FileInfo>
            <DeleteButton  onClick={() => handleDeleteFile(index)}  >
            <Trash2 color="red" size={40} />
            </DeleteButton>
          </FileItem>
        ))}
      </FileList>
    </React.Fragment>
  );
};

export default CustomFileMultipleInput;
