import styled, { css, keyframes } from "styled-components";

export const InlineBlockContainer = styled.div`
  display: inline-block;
`;
export const InlineBlockMarginTopContainer = styled.div`
  display: inline-block;
  margin-top: 100px;
`;
export const MarginTopContainer = styled.div`
  margin-top: 40px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 1%;
  width: 100%;
  min-height: 100vh; // Full height for visual stability
  background-color: #202124; // Light background for contrast
`;

export const StyledBreadcrumb = styled.div`
  margin-bottom: 47.6px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledTitle = styled.h1`
  font-family: Inter, sans-serif; // Modern and professional font
  font-family: Inter, sans-serif; // Modern and professional font
  font-size: 32px;
  font-weight: 600; // Use a slightly lighter weight for a softer look
  color: ${(props) =>
    props.color ? props.color : "white"}; // Correct interpolation
`;

export const StyledSubtitle = styled.h2`
  font-family: Inter, sans-serif; // Modern and professional font
  font-size: 20px;
  font-weight: 400;
  color: #606060; // Softer subtitle color
`;

export const StyledFormContainer = styled.div`
  width: 100%;
`;

export const StyledGoBackContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  width: fit-content;
`;
export const StyledGoNextContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Aligns children to the right */
  align-items: center;
  gap: 14px;
  cursor: pointer;
  width: fit-content;
`;
export const StyledNextLineOne = styled.div`
  display: flex;
  justify-content: flex-end; /* Ensures child elements are aligned to the right */
  width: 100%; /* or a specific width you desire */
`;

export const StyledBoldSubtitle = styled.h2`
  font-family: Inter, sans-serif; // Modern and professional font
  font-size: 16px;
  justify-content: flex-end; /* Aligns children to the right */
  font-weight: 700;
  line-height: 19.2px;
  text-align: left;
  margin-bottom: 0px !important;
  color: white;

`;

export const StyledStepsFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
  margin-top: 40px;
`;

export const StyledStepContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 45vw !important;
`;

export const StyledStepTitleCard = styled.div`
  display: flex;
  align-items: center;
  min-height: 64px;
  padding: 21px 24px 21px 24px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid white;
`;

export const StyledStepContentCard = styled.div`
  height: fit-content;
  padding: 32px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #ddd; // Light border
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Soft shadow for depth
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledStepperCard = styled.div`
  width: 31.6%;
  min-height: 354px;
  padding: 12px 24px 12px 24px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid white;
`;
// Keyframes for the animation
const shiftLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(8px);
  }
`;

export const StyledStep = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 20px; // Add some space for a nicer touch
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s; // Smooth transitions
  background-color: transparent;
  color: #555; // Slightly lighter color for step text
  cursor: ${(props) => (props.isEdit ? "cursor" : "not-allowed")};

  ${(props) =>
    props.active &&
    css`
      background-color: #6366f1; // Soft blue background for active state
      color: #1a1a1a; // Darker font for readability
      transform: scale(1.02); // Subtle scale effect on active
    `}

  ${(props) =>
    props.checked &&
    css`
      color: #4caf50; // Green for checked steps
      & ${StyledCircle} {
        background-color: #4caf50; // Green check circle
        color: white;
      }
    `}
`;

export const StyledTitleAndSubtitleContainer = styled.div`
  width: 100%;
`;

export const StyledStepTitle = styled.div`
  width: 100%;
  font-family: Inter, sans-serif; // Modern and professional font
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-left: 8px;
  text-align: left;
  // break the text if it's too long and break the word and add - at the end of the line

  // color from props
  color: ${(props) => (props.color ? props.color : "white")};
`;

export const StyledStepSubtitle = styled.div`
  width: 80%;
  font-family: Inter, sans-serif; // Modern and professional font
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0px;
  margin-left: 8px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : "white")};
`;

export const StyledCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : "white")};
  color: #333;
  border: 1px solid;
  border-color: ${(props) => (props.color ? props.color : "fff")};
`;

export const StyledStatusCard = styled.div`
  width: 30%;
  height: 100px;
  padding: 15px; // Reduce padding for compactness
  border-radius: 8px;
  background-color: #ffffff; // White background
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Shadow for depth
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledDepositCompanyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

export const BigContainer = styled.div`
  width: 100%;
  height: height;
  max-width: 1500px; // Set a maximum width for better readability on large screens
  margin: 0 auto; // Center align container
  padding: 40px; // Ensure space around content
  background-color: #111827; // White background for contrast
  border-radius: 10px; // Rounded corners for a modern feel
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Soft shadow for depth
  display: flex;
  border: 1px solid #6366f1;
  flex-direction: column;
  align-items: center; // Center align content
`;

export const StyledLabel = styled.label`
  font-family: "Inter", sans-serif; // Use Inter font family
  font-weight: bold; // Bold font weight
  font-size: 16px; // Define the font size
  margin-bottom: 8px; // Space below the label
  color: white; // Darker text color for readability
  padding-top: 10px;
  width: 100%;
`;

export const SearchFilterRegion = styled.div`
  padding-top: 5px;
  width: 100%;
  height: 52px;
`;

export const StyledLineOne = styled.div`
  display: flex;
`;

export const StyledButtondownland = styled.a`
  display: block;
  padding: 10px 15px;
  margin-top: 10px;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const StyleInputCred = styled.div`
  width: 100%;
  font-size: 50px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding-bottom: 10px;
  padding-right: 25px;
`;

export const ButtonContainer = styled.div`
  display: flex; /* Enables flexbox */
  justify-content: flex-start; /* Aligns items to the left */
  align-items: flex-start; /* Align items to the top */
  padding: 10px; /* Adjust as necessary */
`;
