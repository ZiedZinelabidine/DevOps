import styled from "styled-components";

import { breakpoints } from "../../../../core/constants/breakpoints";

export const ContentFormContainer = styled.div`
  height: 100vh;

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
  margin-bottom: 10px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="radio"] {
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
