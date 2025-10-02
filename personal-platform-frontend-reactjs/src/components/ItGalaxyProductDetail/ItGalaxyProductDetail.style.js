import styled, { keyframes } from "styled-components";

export const StyledApplicationDetailContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: var(--BaseWhite);
  overflow-y: auto;
  background: #f3f3f3; /* Background color */
`;

export const StyledApplicationDetailContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--BaseBaseBlack);

  &:hover {
    color: var(--PrimaryBlue);
  }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the spinner
export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top: 4px solid #3498db; /* Change this to your preferred color */
  border-radius: 50%;
  width: 24px; /* Size of the spinner */
  height: 24px; /* Size of the spinner */
  animation: ${spin} 1s linear infinite;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  color: #333;
  margin-left: 600px;
`;
