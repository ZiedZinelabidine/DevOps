import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .modal-dialog {
    min-width: ${(props) => props.minWidth || "auto"};
    @media (max-width: 768px) {
      width: 90%; /* Full width on small screens */
      margin: 0; /* Remove margin */
    }
  }

  .modal-content {
    height: ${(props) => props.Height || "auto"};
    box-shadow: ${(props) => props.borderShadow || "5px 5px 0px 0px black"};
    border-radius: ${(props) => props.borderRadius || "none"};
    width: ${(props) => props.Width || "100%"};
    max-height: 90vh; /* Adjust this value as needed */
    min-height: ${(props) => props.minHeight || "auto"};
    border: 1px solid #696969; // Lighter border for subtle contrast

  }

  .modal-header {
    background-color: ${(props) => props.headerColor || "#202124"};
    padding-top: ${(props) => props.headerpaddingtop || "auto"};
    color: white;

    @media (max-width: 768px) {
      padding-top: 1rem; /* Adjust the padding for smaller screens */
    }
  }

  .modal-body {
    background-color: ${(props) => props.bodyColor || "#202124"};
    overflow-y: scroll; /* Always show vertical scrollbar */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    padding: ${({ padding }) => padding || "0.5rem"};
    color: white;
    @media (max-width: 768px) {
      padding: 0.5rem; /* Reduce padding on small screens */
    }
  }

  .modal-footer {
    background-color: ${(props) => props.footerColor || "#202124"};
    padding-top: ${(props) => props.footerpaddingtop || "30px"};
    padding-bottom: ${(props) => props.footerpaddingbottom || "30px"};


    @media (max-width: 768px) {
      padding-top: 15px; /* Adjust padding for smaller screens */
      padding-bottom: 15px; /* Adjust padding for smaller screens */
    }
  }
`;
