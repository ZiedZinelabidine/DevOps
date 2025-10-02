import styled from "styled-components";

// Ensure all styled components are exported directly
export const StyledWebViewCard = styled.div`
  flex: 1 1 calc(40.33% - 16px); /* Allows three cards to fit in one row */
  width: 400px; /* Optional: Set a minimum width to ensure usability */
  height: 800px; /* Maintain height based on content */
  display: ${({ isFullIDCF, isFullIDCB, isFullSIREN, isFullLOCATION }) =>
    isFullIDCF || isFullIDCB || isFullSIREN || isFullLOCATION
      ? "none"
      : "flex"};
  flex-direction: column;
  padding: 24px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 0px 0px black;
  background-color: #ffffff; /* White background for clarity */
  &.full-screen {
    min-width: 135%;
    min-height: 100vh;
  }
`;

export const StyleWithIcon = styled.div`
  display: flex;
  justify-content: space-between; /* Space between title and icon */
  align-items: center; /* Vertically center them */
`;

export const TitleProfile = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: black;
  width: 80%; /* Title takes 80% of width */
  margin: 0;
`;

export const FullScreenIcon = styled.i`
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for transform and color */
`;

export const StyledPortfolioSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Enable wrapping of cards */
  gap: 16px; /* Space between cards to ensure they are not too close */
  padding: 20px; /* Add padding for aesthetics */
`;

export const ClientTitle = styled.h2`
  font-size: 28px; /* Adjust font size as needed */
  font-weight: 700; /* Bold font */
  color: black; /* Adjust color as needed */
  margin-bottom: 20px; /* Space below the title */
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column; /* Keep it in a column to stack elements if needed */
  align-items: flex-start; /* Align children to the start of the container */
  width: 100%;
  border-radius: 6px 6px 0 0;
  padding: 20px; /* Increased padding for better spacing */
  background-color: #f9f9f9; /* Use a subtle background color */
  position: relative;
  border: 1px solid #d0d5dd99;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px; /* Increased space between SearchBar and LinkContainer */
`;

export const LinkContainer = styled.div`
  width: 100%;
  margin-top: 10px; /* Adjusted margin to space out from top */
  height: auto;
  text-align: left; /* Align text to the left */
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 20px; /* Increased padding for spacing */
  background-color: #ffffff; /* White background for clarity */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */

  p {
    margin: 0; /* Reset margin for paragraph */
    color: rgb(0, 0, 0); /* Define color for clarity */
    font-size: 14px; /* Adjust font size for readability */
    line-height: 1.8; /* Increased line height for better spacing */
    font-family: "Inter", sans-serif; /* Ensure consistent font */
    margin-bottom: 10px; /* Add bottom margin for spacing between lines */
  }
`;

export const LinkText = styled.a`
  font-weight: bold; /* Bold text */
  margin-right: 10px; /* Right margin for spacing */
  color: #007bff; /* Bootstrap primary link color */
  text-decoration: none; /* Remove underline from the link */

  &:hover {
    text-decoration: underline; /* Underline on hover for better UX */
    color: #0056b3; /* Darker shade on hover */
  }
`;

export const Wrap = styled.div` 
  display: flex;
  flex-direction: column; /* Arrange children in a column */
  width : 100%; */
  align-items: flex-start; /* Align children to the start of the container */
  width: 100%;
  margin-top: 10px; /* Adjusted margin to space out from top */
  height: auto;
  text-align: left; /* Align text to the left */
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 20px; /* Increased padding for spacing */
  background-color: #ffffff; /* White background for clarity */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  overflow: scroll;
`;

export const CardStatusProjectText = styled.div`
  color: rgb(105, 105, 105);
  font-family: Inter, sans-serif;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const TitleFolder = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute space between elements */
  align-items: center; /* Vertically center content */
  width: 100%; /* Ensure it takes the full width of the parent */
`;

export const StatusFolder = styled.div`
  font-family: Inter, sans-serif;
  color: black; /* Optional: Define color for status text */
  font-weight: 501;
  font-size: 20px;
  margin-left: 500px; /* This ensures the component is pushed to the right */
`;

export const ValdiateFolderButton = styled.button`
  background-color: black;
  color: white;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: green;
  }
`;

export const ValdiateFileButton = styled.button`
  background-color: black;
  color: white;
  width: 200px;
  height: 70px;
  margin-left: auto;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: green;
  }
`;

export const ValdiateFileButtonName = styled.button`
  background-color: black;
  color: white;
  width: 200px;
  height: 70px;
  margin-left: auto;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; // Corrected from 'grap' to 'gap'

  &:hover {
    background-color: green;
    cursor: pointer; // Indicate it's clickable
  }
`;
export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  padding-bottom: 20px;
`;

export const TitlePage = styled.div`
  display: flex;
`;

export const TitleText = styled.div`
  font-family: Inter, sans-serif;
  color: black; /* Optional: Define color for status text */
  font-weight: 501;
  font-size: 20px;
  padding-left: 400px;
  justify-content: center;
  align-items: center;
`;
