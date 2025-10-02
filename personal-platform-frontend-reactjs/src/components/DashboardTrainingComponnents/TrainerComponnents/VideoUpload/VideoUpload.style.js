import styled from "styled-components";
export const StyledDropzone = styled.div`
  width: 220px;
  height: 129px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
    border-color: #333;
    color: black;
  `}
`;
export const StyledDropzoneNewRow = styled.div`
  width: 220px;
  height: 129px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
    border-color: #333;
    color: black;
  `}
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 129px;
  cursor: pointer;
`;

export const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  &:hover {
    opacity: 0.5;
  }
`;

export const PlusIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;

  ${VideoWrapper}:hover & {
    opacity: 1;
  }
`;

export const VideoPreviewShow = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const FileInfo = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #aaa;
`;

export const ContentFormContainer = styled.div`
  height: auto;

  @media (max-width: 767px) {
    height: auto;
  }

  @media (min-width: 768px) {
    height: auto;
  }

  @media (min-width: 992px) {
    height: auto;
  }

  @media (min-width: 1360px) {
    height: auto;
  }

  @media (min-width: 1500px) {
    height: auto;
  }

  @media (min-width: 1900px) {
    height: auto;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 10px;
`;

export const StyledGridItem = styled.div`
  background-color: #f0f0f0; /* Example background */
  padding: 20px;
  text-align: center;
`;

export const DeleteIcon = styled.div`
    background-color: red; /* Change color as needed */
    border-radius: 50%; /* Circular button */
    width: 30px; /* Width of the button */
    height: 30px; /* Height of the button */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; /* Change cursor to pointer */
    position: absolute; /* Position it absolutely */
    top: 5px; /* Adjust position */
    right: 5px; /* Adjust position */
    z-index: 1; /* Ensure it appears above other elements */
    &:hover {
        background-color: darkred; /* Darker on hover */
    }
    
    /* Optionally, you can add some icon styles */
    div {
        font-size: 16px; /* Adjust icon size */
        color: white; /* Icon color */
    }
`;
