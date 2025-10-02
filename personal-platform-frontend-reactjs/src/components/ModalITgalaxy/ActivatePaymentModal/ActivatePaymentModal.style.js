import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledFormBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

export const StyledTypography = styled.h3`
  margin: 20px 0px 20px 0px;
`;

export const ActiveVersementButton = styled.button`
  background: black;
  color: white;

  height: 46px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background: green; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const DisableActiveVersementButton = styled.button`
  background: gray;
  color: white;

  height: 46px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  display: flex; // Added display: flex to align items correctly
  gap: 15px; // Corrected from 'grap' to 'gap'

  // Add styles for when the button is disabled
  &:disabled {
    opacity: 0.5; // Optional styling for disabled state
    cursor: not-allowed; // Change cursor to indicate disabled state
  }
`;