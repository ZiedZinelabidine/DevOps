import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  flex-direction: column;

  &.stack-spacing > * + * {
    margin-top: 1.5px;
  }
`;

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: red; /* Error color */
`;
