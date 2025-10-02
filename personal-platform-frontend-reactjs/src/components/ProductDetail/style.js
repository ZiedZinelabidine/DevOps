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