import styled from "styled-components";
import { breakpoints } from "../../../../core/constants/breakpoints";

export const ContentFormContainer = styled.div`
  height: 100%;

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
export const ButtonGroupContainer = styled.div`
  float: right;
  margin-top: 10%;
`;
