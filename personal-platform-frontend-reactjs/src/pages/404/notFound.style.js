import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh; // adjust this value based on your header and footer height
  text-align: center;
`;

export const ErrorCode = styled.h1`
  font-size: 6em;
  color: #3f3f3f;
`;

export const ErrorMessage = styled.h2`
  font-size: 2em;
  color: #7f7f7f;
`;

export const GoHomeButton = styled.button`
  margin-top: 2em;
  padding: 1em 2em;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
