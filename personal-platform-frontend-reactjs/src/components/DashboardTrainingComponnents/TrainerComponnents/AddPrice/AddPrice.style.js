import styled from "styled-components";

import { breakpoints } from "../../../../core/constants/breakpoints";

export const ContentFormContainer = styled.div`
  height: 100%;

  @media (max-width: ${breakpoints.extrasmall}) {
    height: 100%;
  }

  @media (min-width: ${breakpoints.small}) {
    height: 100%;
  }

  @media (min-width: ${breakpoints.medium}) {
    height: 100%;
  }

  @media (min-width: ${breakpoints.large}) {
    height: 100%;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    height: 100%;
  }

  @media (min-width: ${breakpoints.extraExtraLarge}) {
    height: 100%;
  }
`;

export const StyledLabel = styled.label`
  font-family: "Inter", sans-serif; // Use Inter font family
  font-weight: bold; // Bold font weight
  font-size: 16px; // Define the font size
  margin-bottom: 8px; // Space below the label
  color: #333; // Darker text color for readability
  padding-top: 10px;
  width: 100%;
`;


export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background-color: #f8f9fa; /* Light background */
    border: 1px solid #dee2e6; /* Border for better visibility */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

export const LoadingMessage = styled.div`
    margin-bottom: 12px; /* Space between the message and spinner */
    color: red; /* Darker text for better readability */
    font-size: 16px; /* Font size */
    text-align: center; /* Center align the text */
    font-weight: 701;
`;
