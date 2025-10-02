import styled from "styled-components";

export const AddBankAccountButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background-color: blue;
  }
`;

export const TitleStyle = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
export const StyledFormText = styled.div`
  font-family: Inter, sans-serif;
  padding-top: 30px;
  padding-bottom: 20px;
  right: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 30.86px;
`;

export const StyledInput = styled.input`
  padding: 0.8rem ;
  border: 1px solid gray;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  transition: all 0.2s ease;
  width: 100%; // Set width to 100% for responsiveness

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  @media (max-width: 1280px) {
    font-size: 15px; // Responsive font size for smaller screens
  }
`;