import styled from "styled-components";
import { breakpoints } from "../../../../core/constants/breakpoints";

export const StyledDropzone = styled.div`
  width: 100%;
  height: 250px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;
  font-weight: bold;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
    border-color: #333;
    color: black;
  `}
`;

export const VideoPreview = styled.video`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
`;

export const FileInfo = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #aaa;
`;
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
