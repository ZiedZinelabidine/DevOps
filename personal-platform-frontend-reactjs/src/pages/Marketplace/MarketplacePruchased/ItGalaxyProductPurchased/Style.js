import styled, { keyframes } from "styled-components";

export const LogoRedhat = styled.img`
  width: 260px;
  padding-top: 50px;
  margin-left: 30px;
  margin-bottom: 50px;
  height: 140px;
  cursor: pointer;
`;

export const LogoDebian = styled.img`
  width: 170px;
  padding-top: 50px;
  margin-left: 30px;
  margin-bottom: 50px;
  height: 140px;
  cursor: pointer;
`;

export const LogoUbuntu = styled.img`
  width: 160px;
  padding-top: 50px;
  margin-left: 30px;
  margin-bottom: 50px;
  height: 140px;
  cursor: pointer;
`;

export const LogoMysql = styled.img`
  width: 160px;
  padding-top: 50px;
  margin-left: 30px;
  margin-bottom: 50px;
  height: 140px;
  cursor: pointer;
`;

export const LogoPostgres = styled.img`
  width: 160px;
  padding-top: 50px;
  margin-left: 30px;
  margin-bottom: 50px;
  height: 140px;
  cursor: pointer;
`;

export const LogoMongodb = styled.img`
  width: 160px;
  padding-top: 50px;
  margin-left: 30px;
  margin-bottom: 50px;
  height: 140px;
  cursor: pointer;
`;

export const StyleServer = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  width: 80%;
  margin-left: 20px;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 6px 6px 0 0;
  padding: 10px;
  position: relative;
  flex-direction: row;
  border: 1px solid #d0d5dd99;
  @media (min-width: 767px) {
    padding-left: 21px;
  }
`;

export const ProductBar = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  @media (min-width: 767px) {
    width: 100%;
  }
`;

export const ProductTitleContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 100px;
  text-align: center;
  border: 1px solid #6366f1; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  padding: 15px; /* Padding for spacing */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
`;

export const StyleServerDetailsBloc = styled.div`
  display: flex;
  width: 100%;
  background-color: #111827;
  border: 1px solid white; /* Light border for definition */
  padding: 10px;
  margin-top: 30px;

`;

export const StyleServerDetailsColunm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`;

export const StyleServerDetailLine1 = styled.div`
  font-size: 20px;
  font-weight: 501;
  color: white;
  padding-bottom: 10px;
`;

export const StyleServerDetailLine2 = styled.div`
  font-size: 20px;
  font-weight: 501;
  color: white;
  padding-bottom: 10px;
`;

export const StyledDot = styled.div`
  width: 10px;
  height: 10px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? "green" : "red"}; // Green for active, red for inactive
`;

export const StyleStatus = styled.div`
  display: flex;
`;

export const StyleStatusServerDetailLine2 = styled.div`
  font-size: 20px;
  font-weight: 501;
  color: ${(props) =>
    props.isActive ? "green" : "red"}; // Green for active, red for inactive
  padding-bottom: 10px;
`;
export const StyleVersion = styled.div`
  padding-top: 95px;
  padding-left: 10px;
  color: gray;
  font-size: 20px;
  font-weight: 501;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #f2f2f2;
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const MethodContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const MethodButton = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 501;
  font-family: "Inter", sans-serif; /* Make sure you have Inter loaded in your project */
  border: none;
  color: "black";
  cursor: pointer;
  position: relative; /* Position relative for absolute child positioning */

  /* Border underline effect */
  &:after {
    content: "";
    display: ${(props) =>
      props.isSelected ? "block" : "none"}; /* Show when selected */
    width: 100%; /* Full width */
    height: 3px; /* Thickness of the underline */
    background-color: #6cb4ee; /* Color of the underline */
    position: absolute; /* Positioning */
    bottom: -5px; /* Adjust as needed */
    left: 0; /* Start from the left */
  }

  &:hover {
    background-color: #6366f1; /* Change hover background color */
    color: white; /* Change text color on hover for contrast */
  }
`;

export const CommandDisplay = styled.div`
  margin-top: 10px;
  height: 600px;
  border: 1px solid #444; /* Darker border for the terminal effect */
  padding: 15px;
  background-color: #1e1e1e; /* Dark background color */
  color: #ffffff; /* White text color for contrast */
  font-family: "Courier New", Courier, monospace; /* Monospace font */
  overflow: auto; /* Allows scrolling for long commands */
  border-radius: 5px; /* Rounded corners for aesthetics */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Optional shadow for a lifted effect */
  font-size: 25px;
  pre {
    margin: 0; /* Remove default margin of <pre> */
  }
`;

export const StyleBlocConnection = styled.div`
  margin-top: 60px;
`;

export const TogglePasswordButton = styled.button`
  margin-left: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: blue; /* Change color as needed */
  font-size: 18px;
`;

// Keyframe animation for the spinner
export const dotFlashing = keyframes`
  0%, 20% {
      opacity: 1;
  }
  25%, 75% {
      opacity: 0;
  }
  80%, 100% {
      opacity: 1;
  }
`;

// Styled component for the loading message
export const LoadingMessage = styled.span`
  font-size: 20px; /* Adjust to your preferred size */
  color: Orange; /* Change this to your preferred color */

  &::after {
    content: ".";
    animation: ${dotFlashing} 1s infinite;
  }
  &::after {
    content: "...";
    animation: ${dotFlashing} 1s infinite;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation: ${dotFlashing} 1s infinite;
    animation-delay: 0.4s;
  }
`;

// Your existing styled component for the detail line
export const StyleServerDetailLine2Ip = styled.div`
  /* Add your styles here */
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 501;
  color: white;
  padding-bottom: 10px;
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

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--BaseBaseBlack);

  &:hover {
    color: var(--PrimaryBlue);
  }
`;

export const ButtonContainer = styled.div`
  display: flex; /* Enables flexbox */
  justify-content: flex-start; /* Aligns items to the left */
  align-items: flex-start; /* Aligns items to the top */
  padding-left: 20px;
  padding-top: 50px;
`;


export const ButtonMessage = styled.button`

  width: 180px;
  height: 40px;
  font-weight: 501;
  grap: 20px;
  text-align: center;
  border: 1px solid #e0e0e0; /* Light border for definition */
  border-radius: 8px; /* Rounded corners for softer look */
  background-color: black; /* Light background to distinguish */
  color: white;
  &:hover {
    background-color: #6366f1; /* Light background to distinguish */
  }
`;